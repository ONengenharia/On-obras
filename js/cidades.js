/* Municípios do Brasil (IBGE): busca com filtro, validação "Nome (UF)" e coordenadas */
(function(){
  const norm=s=>String(s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().trim().replace(/\s+/g," ");
  const CID=window.CID={ lista:null, _p:null, _idx:null };
  CID.load=function(){
    if(CID._p) return CID._p;
    CID._p=fetch("assets/municipios.json").then(r=>r.json()).then(a=>{
      CID.lista=a.map(x=>({nome:x[0],uf:x[1],lat:x[2],lon:x[3],n:norm(x[0])}));
      CID._idx={}; CID.lista.forEach(e=>{ (CID._idx[e.n]=CID._idx[e.n]||[]).push(e); });
      return CID.lista;
    }).catch(err=>{ console.error("municipios.json",err); CID._p=null; CID.lista=null; throw err; });
    return CID._p;
  };
  CID.fmt=e=>e.nome+" ("+e.uf+")";
  CID.parse=function(txt){
    let t=norm(txt), uf="";
    let m=t.match(/\(\s*([a-z]{2})\s*\)\s*$/)||t.match(/\s*[\/\-,]\s*([a-z]{2})\s*$/);
    if(m){ uf=m[1].toUpperCase(); t=t.slice(0,m.index).trim(); }
    return {n:t,uf};
  };
  CID.exato=function(txt,ufHint){
    if(!CID.lista||!txt) return null;
    const p=CID.parse(txt), c=CID._idx[p.n]||[], uf=p.uf||(ufHint||"").toUpperCase();
    if(uf){ const e=c.find(x=>x.uf===uf); if(e) return e; }
    return c.length===1&&!p.uf?c[0]:null;
  };
  CID.buscar=function(txt,max){
    if(!CID.lista) return [];
    const p=CID.parse(txt), q=p.n; if(!q) return [];
    const ini=[],cont=[];
    for(const e of CID.lista){
      if(p.uf&&e.uf!==p.uf) continue;
      if(e.n.startsWith(q)) ini.push(e); else if(q.length>=3&&e.n.includes(q)) cont.push(e);
      if(ini.length>=max) break;
    }
    return ini.concat(cont).slice(0,max||25);
  };
  CID.dist=(a,b)=>{ const r=Math.PI/180, dl=(b.lat-a.lat)*r, dn=(b.lon-a.lon)*r*Math.cos((a.lat+b.lat)/2*r); return 6371*Math.sqrt(dl*dl+dn*dn); };
  CID.attach=function(inp,opts){
    opts=opts||{};
    if(!inp||inp._cid) return; inp._cid=true;
    const dl=document.createElement("datalist"); dl.id="dlcid"+Math.random().toString(36).slice(2,8); document.body.appendChild(dl);
    inp.setAttribute("list",dl.id); inp.setAttribute("autocomplete","off");
    if(!inp.placeholder) inp.placeholder="Digite a cidade…";
    const marca=bad=>{ inp.style.borderColor=bad?"#d32f2f":""; inp.title=bad?"Cidade não encontrada na lista de municípios do Brasil. Escolha uma opção da lista, no formato Nome (UF).":""; };
    inp.addEventListener("input",()=>{ CID.load().then(()=>{ dl.innerHTML=CID.buscar(inp.value,25).map(e=>`<option value="${CID.fmt(e)}">`).join(""); }).catch(()=>{}); });
    const validar=()=>CID.load().then(()=>{
      const t=inp.value.trim(); if(!t){ marca(false); return; }
      const e=CID.exato(t,opts.ufHint&&opts.ufHint());
      if(!e){ marca(true); return; }
      marca(false);
      if(!inp.disabled&&!inp.readOnly&&inp.value!==CID.fmt(e)){ inp.value=CID.fmt(e); inp.dispatchEvent(new Event("change",{bubbles:true})); }
      if(opts.onSel) opts.onSel(e);
    }).catch(()=>{});
    inp.addEventListener("change",validar);
    validar();
  };
})();
