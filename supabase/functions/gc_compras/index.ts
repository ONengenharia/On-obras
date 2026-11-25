// Compras -> Gestão Click: leitura (diagnóstico), centros de custo e envio da OC como compra "Em aberto" (não finaliza, sem pagamento). Chaves nos segredos do Supabase.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
const BASE = Deno.env.get("GC_BASE_URL") || "https://api.gestaoclick.com";
const cors = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type", "Content-Type": "application/json" };
const out = (o: unknown, s = 200) => new Response(JSON.stringify(o), { status: s, headers: cors });
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  const auth = req.headers.get("Authorization") || "";
  const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!, { global: { headers: { Authorization: auth } } });
  const { data: u } = await sb.auth.getUser();
  if (!u?.user) return out({ erro: "Não autenticado" }, 401);
  const { data: ok } = await sb.schema("orcarede").rpc("eh_usuario");
  if (!ok) return out({ erro: "Sem permissão" }, 403);
  const b = await req.json().catch(() => ({}));
  const tok = Deno.env.get("GC_ACCESS_TOKEN"), sec = Deno.env.get("GC_SECRET_TOKEN");
  if (!tok) return out({ erro: "GC_ACCESS_TOKEN não configurado" }, 500);
  const h: Record<string, string> = { "access-token": tok, "Content-Type": "application/json" };
  if (sec) h["secret-access-token"] = sec;
  const gj = async (path: string) => { const r = await fetch(`${BASE}/${path}`, { headers: h }); return await r.json().catch(() => null); };
  const norm = (x: unknown) => String(x || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
  if (b.acao === "centros") {
    const lista: Record<string, string>[] = [];
    for (let pg = 1; pg <= 6; pg++) { const j = await gj(`centros_custos?limite=100&pagina=${pg}`); const d = (j?.data || []) as Record<string, string>[]; lista.push(...d); if (d.length < 100) break; }
    return out({ ok: true, centros: lista.map((x) => ({ id: x.id, nome: x.nome })) });
  }
  if (b.acao === "compra_enviar") {
    const itens = (Array.isArray(b.itens) ? b.itens : []) as Record<string, unknown>[];
    if (!itens.length) return out({ erro: "OC sem itens" }, 400);
    if (!b.centro_custo_id) return out({ erro: "Escolha o centro de custo" }, 400);
    const money = (n: number) => (Math.round((+n || 0) * 100) / 100).toFixed(2);
    // fornecedor: por CNPJ, depois por nome; senão um provisório para você trocar no Gestão Click
    const f = b.fornecedor || {}; const doc = String(f.cnpj || "").replace(/\D/g, "");
    let forn: Record<string, string> | undefined;
    if (doc) forn = (((await gj(`fornecedores?cpf_cnpj=${doc}&limite=10`))?.data || []) as Record<string, string>[]).find((x) => String(x.cnpj || x.cpf || "").replace(/\D/g, "") === doc);
    if (!forn && f.nome) forn = (((await gj(`fornecedores?nome=${encodeURIComponent(String(f.nome))}&limite=20`))?.data || []) as Record<string, string>[]).find((x) => norm(x.nome) === norm(f.nome) || norm(x.razao_social) === norm(f.nome));
    let provisorio = false;
    if (!forn) {
      provisorio = true;
      forn = (((await gj(`fornecedores?nome=${encodeURIComponent("FORNECEDOR A DEFINIR")}&limite=5`))?.data || []) as Record<string, string>[]).find((x) => norm(x.nome) === "fornecedor a definir");
      if (!forn) {
        const r = await fetch(`${BASE}/fornecedores`, { method: "POST", headers: h, body: JSON.stringify({ tipo_pessoa: "PJ", nome: "FORNECEDOR A DEFINIR", razao_social: "FORNECEDOR A DEFINIR" }) });
        const j = await r.json().catch(() => null); const id = j?.data?.id ?? j?.id;
        if (!r.ok || !id) return out({ ok: false, etapa: "fornecedor", status: r.status, resposta: j });
        forn = { id: String(id), nome: "FORNECEDOR A DEFINIR" };
      }
    }
    // produtos: por código interno; se não existir, cria (valor zero, sem estoque)
    const prods: unknown[] = [];
    for (const i of itens) {
      const cod = String(i.codigo || "").trim() || ("ON-" + norm(i.descricao).toUpperCase().replace(/ /g, "-").slice(0, 40));
      const nome = String(i.descricao || cod).trim();
      let pr = (((await gj(`produtos?codigo=${encodeURIComponent(cod)}&limite=5`))?.data || []) as Record<string, string>[]).find((x) => String(x.codigo_interno || x.codigo || "").toUpperCase() === cod.toUpperCase());
      if (!pr) {
        const r = await fetch(`${BASE}/produtos`, { method: "POST", headers: h, body: JSON.stringify({ codigo_interno: cod, nome, valor_custo: "0.00", valor_venda: "0.00", movimenta_estoque: "0" }) });
        const j = await r.json().catch(() => null); const id = j?.data?.id ?? j?.id;
        if (!r.ok || !id) return out({ ok: false, etapa: "produto", item: nome, status: r.status, resposta: j });
        pr = { id: String(id) };
      }
      prods.push({ produto: { produto_id: pr.id, nome_produto: nome.slice(0, 200), detalhes: "", quantidade: String(+(+i.qtd || 0).toFixed(3)), valor_custo: money(+i.preco) } });
    }
    const hoje = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Sao_Paulo" }).format(new Date());
    const corpo: Record<string, unknown> = {
      fornecedor_id: forn.id, situacao_id: "1705104", centro_custo_id: String(b.centro_custo_id), data_emissao: hoje,
      valor_frete: money(+b.frete || 0), pagar_frete: "1", produtos: prods,
      observacoes: ("OC " + String(b.oc || "") + (b.obra ? " · " + b.obra : "") + (provisorio ? " · TROCAR FORNECEDOR: " + (f.nome || "") : "")).slice(0, 500),
    };
    const r = await fetch(`${BASE}/compras`, { method: "POST", headers: h, body: JSON.stringify(corpo) });
    const j = await r.json().catch(() => null); const id = j?.data?.id ?? j?.id;
    if (!r.ok || !id) return out({ ok: false, etapa: "compra", status: r.status, resposta: j, enviado: corpo });
    return out({ ok: true, id: String(id), codigo: String(j?.data?.codigo ?? j?.codigo ?? ""), fornecedor: forn.nome || "", provisorio });
  }
  if (b.acao === "ler") {
    const rec = String(b.recurso || "");
    if (!/^(compras|fornecedores|situacoes_compras|ordens_compras|formas_pagamentos|lojas|centros_custos|produtos)(\/\d+)?$/.test(rec)) return out({ erro: "Recurso não permitido" }, 400);
    const r = await fetch(`${BASE}/${rec}?limite=${Math.min(+b.limite || 1, 3)}`, { headers: h });
    const t = await r.text(); let j: unknown = t; try { j = JSON.parse(t) } catch (_) {}
    if (b.resumo) { // estrutura enxuta: textos curtos e só o 1º elemento de cada lista
      const sk = (x: unknown): unknown => Array.isArray(x) ? (x.length ? [sk(x[0]), "…" + x.length + " itens"] : []) : (x && typeof x === "object") ? Object.fromEntries(Object.entries(x as Record<string, unknown>).map(([k, v]) => [k, sk(v)])) : (typeof x === "string" && x.length > 28 ? x.slice(0, 28) + "…" : x);
      return out({ status: r.status, estrutura: sk((j as Record<string, unknown>)?.data ?? j) });
    }
    return out({ status: r.status, dados: j });
  }
  return out({ erro: "Ação desconhecida" }, 400);
});
