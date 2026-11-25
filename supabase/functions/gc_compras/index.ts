// Compras -> Gestão Click. Etapa 1: só leitura (diagnóstico). Chaves nos segredos do Supabase.
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
