/* ============ CONFIGURAÇÃO PADRÃO ============ */
const DEF = {
  empresa:"ON Engenharia Elétrica", contato:"(55) 99133-7296 · projetos.on.engenharia@gmail.com", validade:10, descMax:5,
  financeiras:[{id:"f1",nome:"Financiamento 36x (exemplo)",taxa:1.85,prazo:36,entrada:0},{id:"f2",nome:"Financiamento 60x (exemplo)",taxa:1.85,prazo:60,entrada:0}],
  modelosPreco:[],
  tabProj:[{ate:5,v:500},{ate:10,v:630},{ate:20,v:700},{ate:30,v:820},{ate:40,v:950},{ate:50,v:1050},{ate:60,v:1200},{ate:70,v:1300},{ate:80,v:1800}],
  capa:{estilo:"prime",imagem:"",titulo:"Energia solar fotovoltaica",campanha:"",detalhe:""},
  tec:{perdas:{temp:10,sujeira:3,sombra:0,cabos:2,inversor:3,outras:3},
       degr:0.7, dias:30.4, ccaMin:0.9, ccaMax:1.5, simult:30, tmin:0, tcell:70, kitOutrosKwp:80},
  telhados:[
    {id:"t1",nome:"Cerâmico",estrutura:120,fatorArea:1.10},
    {id:"t2",nome:"Fibrocimento",estrutura:110,fatorArea:1.10},
    {id:"t3",nome:"Metálico",estrutura:90,fatorArea:1.05},
    {id:"t4",nome:"Laje",estrutura:160,fatorArea:1.8},
    {id:"t5",nome:"Solo",estrutura:280,fatorArea:2.5}],
  modulos:[
    {id:"m1",marca:"Genérico",modelo:"550 Wp",wp:550,comp:2279,larg:1134,voc:49.9,isc:13.9,vmp:41.7,imp:13.2,coefVoc:-0.25,coefP:-0.29,garantia:25,preco:429},
    {id:"m2",marca:"Genérico",modelo:"585 Wp",wp:585,comp:2278,larg:1134,voc:52.4,isc:14.2,vmp:43.7,imp:13.4,coefVoc:-0.25,coefP:-0.29,garantia:25,preco:456},
    {id:"m3",marca:"Genérico",modelo:"590 Wp",wp:590,comp:2278,larg:1134,voc:52.6,isc:14.3,vmp:43.9,imp:13.5,coefVoc:-0.25,coefP:-0.29,garantia:25,preco:460},
    {id:"m4",marca:"Genérico",modelo:"605 Wp",wp:605,comp:2384,larg:1134,voc:53.9,isc:14.1,vmp:45.2,imp:13.4,coefVoc:-0.25,coefP:-0.29,garantia:25,preco:472},
    {id:"m5",marca:"Genérico",modelo:"610 Wp",wp:610,comp:2384,larg:1134,voc:54.1,isc:14.2,vmp:45.4,imp:13.45,coefVoc:-0.25,coefP:-0.29,garantia:25,preco:476},
    {id:"m6",marca:"Genérico",modelo:"620 Wp",wp:620,comp:2382,larg:1134,voc:55.4,isc:14.3,vmp:46.3,imp:13.4,coefVoc:-0.25,coefP:-0.29,garantia:25,preco:484},
    {id:"m7",marca:"Genérico",modelo:"625 Wp",wp:625,comp:2382,larg:1134,voc:55.6,isc:14.35,vmp:46.5,imp:13.45,coefVoc:-0.25,coefP:-0.29,garantia:25,preco:488},
    {id:"m8",marca:"Genérico",modelo:"630 Wp",wp:630,comp:2382,larg:1134,voc:55.8,isc:14.4,vmp:46.7,imp:13.5,coefVoc:-0.25,coefP:-0.29,garantia:25,preco:491},
    {"id": "m_era620", "marca": "ERA Solar", "modelo": "ERA-RC66HD620M(CF) 620 Wp bifacial", "wp": 620, "comp": 2382, "larg": 1134, "voc": 48.5, "isc": 16.15, "vmp": 40.15, "imp": 15.45, "coefVoc": -0.24, "coefP": -0.3, "garantia": 30, "preco": 0, "det": ["Tecnologia N-Type bifacial · 132 meias-células (182×105 mm) · vidro duplo de 2,0 mm", "Eficiência do módulo 23,0% · tolerância de potência 0 a +5 W", "Peso 32,5 kg · moldura de alumínio anodizado · caixa de junção IP68", "Tensão máxima do sistema 1500 V · fusível máx. 30 A · NOCT 45±2 °C", "Garantia de produto de 15 anos · degradação < 1% no 1º ano e < 0,4% ao ano", "Certificações IEC 61215, IEC 61730 e INMETRO"], "ds": {"arquivo": "era-rc66hd620m-cf.pdf", "url": "assets/datasheets/era-rc66hd620m-cf.pdf", "em": "2026-11-23"}, "rev": true}],
  inversores:[
    {"id": "i_sofar73", "marca": "Sofar", "modelo": "KTLM-G3-BR 7,3 kW", "kw": 7.3, "fases": 1, "mppt": 2, "strMppt": 1, "vmax": 600, "vmin": 80, "iscMax": 25, "preco": 0, "det": ["Potência máx. 8,8 kVA · corrente de saída máx. 40 A", "Faixa MPPT 80–540 V (plena potência 160–480 V) · tensão de partida 90 V", "Entrada CC até 13,5 kWp · corrente máx. por MPPT 18 A", "Saída 220 V / 60 Hz · THDi < 3% · eficiência máxima 97,6%", "Proteções: polaridade reversa, anti-ilhamento, corrente de fuga, falha de aterramento e de string; chave CC, AFCI e DPS tipo II", "IP65 · 352,8×344×167 mm · 12 kg · resfriamento natural", "Comunicação RS485 / Wi-Fi / USB · Portaria INMETRO nº 140, NBR 16149/16150"], "ds": {"arquivo": "sofar-7.3-7.5ktlm-g3-br.pdf", "url": "assets/datasheets/sofar-7.3-7.5ktlm-g3-br.pdf", "em": "2026-11-23"}, "rev": true},{"id": "i_sofar75", "marca": "Sofar", "modelo": "KTLM-G3-BR 7,5 kW", "kw": 7.5, "fases": 1, "mppt": 2, "strMppt": 1, "vmax": 600, "vmin": 80, "iscMax": 25, "preco": 0, "det": ["Potência máx. 7,5 kVA · corrente de saída máx. 36,2 A", "Faixa MPPT 80–540 V (plena potência 160–480 V) · tensão de partida 90 V", "Entrada CC até 13,5 kWp · corrente máx. por MPPT 18 A", "Saída 220 V / 60 Hz · THDi < 3% · eficiência máxima 97,6%", "Proteções: polaridade reversa, anti-ilhamento, corrente de fuga, falha de aterramento e de string; chave CC, AFCI e DPS tipo II", "IP65 · 352,8×344×167 mm · 12 kg · resfriamento natural", "Comunicação RS485 / Wi-Fi / USB · Portaria INMETRO nº 140, NBR 16149/16150"], "ds": {"arquivo": "sofar-7.3-7.5ktlm-g3-br.pdf", "url": "assets/datasheets/sofar-7.3-7.5ktlm-g3-br.pdf", "em": "2026-11-23"}, "rev": true},{"id": "i_sofar16", "marca": "Sofar", "modelo": "KTL2-G3 1,6 kW", "kw": 1.6, "fases": 1, "mppt": 1, "strMppt": 1, "vmax": 500, "vmin": 50, "iscMax": 17.5, "preco": 0, "det": ["Entrada CC até 2,4 kWp · corrente máx. do MPPT 14 A", "Faixa MPPT 50–500 V (plena potência 120–450 V) · partida 70 V", "Saída 220 V / 60 Hz · 7,7 A · 1,6 kVA · eficiência máxima 97,3%", "303×260,5×118 mm · 6 kg", "Proteções: polaridade reversa, anti-ilhamento, corrente de fuga, falha de aterramento e de string; chave CC e DPS tipo II", "IP65 · resfriamento natural · sobrecarga CC de 150%", "Comunicação RS485 / Wi-Fi / USB · Portaria INMETRO nº 140, NBR 16149/16150"], "ds": {"arquivo": "sofar-1.6-3.3-4ktl2-g3.pdf", "url": "assets/datasheets/sofar-1.6-3.3-4ktl2-g3.pdf", "em": "2026-11-23"}, "rev": true},{"id": "i_sofar33", "marca": "Sofar", "modelo": "KTL2-G3 3,3 kW", "kw": 3.3, "fases": 1, "mppt": 1, "strMppt": 1, "vmax": 550, "vmin": 50, "iscMax": 20, "preco": 0, "det": ["Entrada CC até 4,95 kWp · corrente máx. do MPPT 15 A", "Faixa MPPT 50–550 V (plena potência 220–500 V) · partida 70 V", "Saída 220 V / 60 Hz · 16 A · 3,3 kVA · eficiência máxima 97,7%", "321×260,5×131,5 mm · 7 kg", "Proteções: polaridade reversa, anti-ilhamento, corrente de fuga, falha de aterramento e de string; chave CC e DPS tipo II", "IP65 · resfriamento natural · sobrecarga CC de 150%", "Comunicação RS485 / Wi-Fi / USB · Portaria INMETRO nº 140, NBR 16149/16150"], "ds": {"arquivo": "sofar-1.6-3.3-4ktl2-g3.pdf", "url": "assets/datasheets/sofar-1.6-3.3-4ktl2-g3.pdf", "em": "2026-11-23"}, "rev": true},{"id": "i_sofar40", "marca": "Sofar", "modelo": "KTL2-G3 4 kW", "kw": 4, "fases": 1, "mppt": 1, "strMppt": 1, "vmax": 550, "vmin": 50, "iscMax": 20, "preco": 0, "det": ["Entrada CC até 6 kWp · corrente máx. do MPPT 15 A", "Faixa MPPT 50–550 V (plena potência 220–500 V) · partida 70 V", "Saída 220 V / 60 Hz · 19,3 A · 4 kVA · eficiência máxima 97,7%", "321×260,5×151,5 mm · 7,3 kg", "Proteções: polaridade reversa, anti-ilhamento, corrente de fuga, falha de aterramento e de string; chave CC e DPS tipo II", "IP65 · resfriamento natural · sobrecarga CC de 150%", "Comunicação RS485 / Wi-Fi / USB · Portaria INMETRO nº 140, NBR 16149/16150"], "ds": {"arquivo": "sofar-1.6-3.3-4ktl2-g3.pdf", "url": "assets/datasheets/sofar-1.6-3.3-4ktl2-g3.pdf", "em": "2026-11-23"}, "rev": true},
    {id:"i1",marca:"Exemplo",modelo:"Mono 3 kW",kw:3,fases:1,mppt:2,strMppt:1,vmax:600,vmin:80,iscMax:16,preco:2600},
    {id:"i2",marca:"Exemplo",modelo:"Mono 5 kW",kw:5,fases:1,mppt:2,strMppt:1,vmax:600,vmin:80,iscMax:16,preco:3300},
    {id:"i3",marca:"Exemplo",modelo:"Mono 8 kW",kw:8,fases:1,mppt:2,strMppt:2,vmax:600,vmin:80,iscMax:16,preco:4800},
    {id:"i4",marca:"Exemplo",modelo:"Tri 10 kW",kw:10,fases:3,mppt:2,strMppt:2,vmax:1100,vmin:180,iscMax:20,preco:5800},
    {id:"i5",marca:"Exemplo",modelo:"Tri 15 kW",kw:15,fases:3,mppt:3,strMppt:2,vmax:1100,vmin:180,iscMax:20,preco:7600},
    {id:"i6",marca:"Exemplo",modelo:"Tri 20 kW",kw:20,fases:3,mppt:3,strMppt:2,vmax:1100,vmin:180,iscMax:20,preco:9500}],
  conc:[
    {"id": "c1", "nome": "RGE Sul", "uf": "RS", "base": 0.94461, "icms": 17, "tarifa": 1.1978, "fioB": 0.3869, "vig": "18/06/2027", "fonte": "Fatura (tarifa); Fio B ref. fatura"},
    {"id": "c2", "nome": "COPREL", "uf": "RS", "base": 0.71632, "icms": 17, "tarifa": 0.9085, "fioB": 0.2934, "vig": "29/07/2027", "fonte": "ANEEL; imposto aprox. A fatura de ref. (jul/26) mostrou R$ 0,7391 c/ impostos: confirme na fatura"},
    {"id": "c3", "nome": "CEEE Equatorial", "uf": "RS", "base": 0.822, "icms": 17, "tarifa": 1.0425, "fioB": 0.3367, "vig": "21/11/2026", "fonte": "ANEEL; imposto aprox."},
    {"id": "c4", "nome": "CERTEL", "uf": "RS", "base": 0.9135, "icms": 17, "tarifa": 1.1585, "fioB": 0.3742, "vig": "29/07/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c5", "nome": "Cerfox", "uf": "RS", "base": 0.84077, "icms": 17, "tarifa": 1.0663, "fioB": 0.3444, "vig": "29/07/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c6", "nome": "Ceriluz", "uf": "RS", "base": 0.64921, "icms": 17, "tarifa": 0.8233, "fioB": 0.2659, "vig": "29/07/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c7", "nome": "Cermissões", "uf": "RS", "base": 0.89089, "icms": 17, "tarifa": 1.1299, "fioB": 0.365, "vig": "29/07/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c8", "nome": "Cerpalo", "uf": "RS", "base": 1.01971, "icms": 17, "tarifa": 1.2932, "fioB": 0.4177, "vig": "29/09/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c9", "nome": "Certaja", "uf": "RS", "base": 0.78042, "icms": 17, "tarifa": 0.9898, "fioB": 0.3197, "vig": "29/07/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c10", "nome": "Certhil", "uf": "RS", "base": 0.72993, "icms": 17, "tarifa": 0.9257, "fioB": 0.299, "vig": "29/07/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c11", "nome": "Cooperluz", "uf": "RS", "base": 0.62202, "icms": 17, "tarifa": 0.7889, "fioB": 0.2548, "vig": "29/07/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c12", "nome": "Creluz-D", "uf": "RS", "base": 0.78561, "icms": 17, "tarifa": 0.9963, "fioB": 0.3218, "vig": "29/07/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c13", "nome": "DEMEI", "uf": "RS", "base": 0.76415, "icms": 17, "tarifa": 0.9691, "fioB": 0.313, "vig": "21/07/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c14", "nome": "Eletrocar", "uf": "RS", "base": 0.79643, "icms": 17, "tarifa": 1.0101, "fioB": 0.3263, "vig": "21/07/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c15", "nome": "Hidropan", "uf": "RS", "base": 0.72897, "icms": 17, "tarifa": 0.9245, "fioB": 0.2986, "vig": "21/07/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c16", "nome": "Muxenergia", "uf": "RS", "base": 0.74458, "icms": 17, "tarifa": 0.9443, "fioB": 0.305, "vig": "21/07/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c17", "nome": "Uhenpal", "uf": "RS", "base": 0.83515, "icms": 17, "tarifa": 1.0592, "fioB": 0.3421, "vig": "21/07/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c18", "nome": "Energisa Acre", "uf": "AC", "base": 0.82971, "icms": 19, "tarifa": 1.0782, "fioB": 0.3483, "vig": "12/12/2026", "fonte": "ANEEL; imposto aprox."},
    {"id": "c19", "nome": "Equatorial Alagoas", "uf": "AL", "base": 0.85141, "icms": 21, "tarifa": 1.1345, "fioB": 0.3664, "vig": "02/05/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c20", "nome": "Âmbar Amazonas", "uf": "AM", "base": 0.87571, "icms": 20, "tarifa": 1.1522, "fioB": 0.3722, "vig": "25/05/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c21", "nome": "CEA Equatorial (Amapá)", "uf": "AP", "base": 0.82515, "icms": 18, "tarifa": 1.0592, "fioB": 0.3421, "vig": "24/05/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c22", "nome": "Neoenergia Coelba", "uf": "BA", "base": 0.87773, "icms": 20.5, "tarifa": 1.1622, "fioB": 0.3754, "vig": "21/04/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c23", "nome": "Enel Ceará", "uf": "CE", "base": 0.70175, "icms": 20, "tarifa": 0.9234, "fioB": 0.2983, "vig": "21/04/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c24", "nome": "Neoenergia Brasília", "uf": "DF", "base": 0.83429, "icms": 18, "tarifa": 1.071, "fioB": 0.3459, "vig": "21/10/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c25", "nome": "EDP Espírito Santo", "uf": "ES", "base": 0.84371, "icms": 17, "tarifa": 1.07, "fioB": 0.3456, "vig": "06/08/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c26", "nome": "ELFSM (Santa Maria, ES)", "uf": "ES", "base": 0.82489, "icms": 17, "tarifa": 1.0462, "fioB": 0.3379, "vig": "21/09/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c27", "nome": "CHESP", "uf": "GO", "base": 0.81975, "icms": 17, "tarifa": 1.0396, "fioB": 0.3358, "vig": "21/11/2026", "fonte": "ANEEL; imposto aprox."},
    {"id": "c28", "nome": "Equatorial Goiás", "uf": "GO", "base": 0.95439, "icms": 17, "tarifa": 1.2104, "fioB": 0.391, "vig": "21/10/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c29", "nome": "Equatorial Maranhão", "uf": "MA", "base": 0.88884, "icms": 22, "tarifa": 1.1995, "fioB": 0.3874, "vig": "27/08/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c30", "nome": "CEMIG", "uf": "MG", "base": 0.90329, "icms": 18, "tarifa": 1.1596, "fioB": 0.3746, "vig": "27/05/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c31", "nome": "DMED", "uf": "MG", "base": 0.61757, "icms": 18, "tarifa": 0.7928, "fioB": 0.2561, "vig": "21/11/2026", "fonte": "ANEEL; imposto aprox."},
    {"id": "c32", "nome": "Energisa Minas Rio", "uf": "MG", "base": 0.91899, "icms": 18, "tarifa": 1.1797, "fioB": 0.381, "vig": "21/06/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c33", "nome": "Energisa Mato Grosso do Sul", "uf": "MS", "base": 0.9866, "icms": 17, "tarifa": 1.2512, "fioB": 0.4041, "vig": "07/04/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c34", "nome": "Energisa Mato Grosso", "uf": "MT", "base": 0.89942, "icms": 17, "tarifa": 1.1407, "fioB": 0.3684, "vig": "07/04/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c35", "nome": "Equatorial Pará", "uf": "PA", "base": 1.04322, "icms": 19, "tarifa": 1.3557, "fioB": 0.4379, "vig": "06/08/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c36", "nome": "Energisa Paraíba", "uf": "PB", "base": 0.7097, "icms": 20, "tarifa": 0.9338, "fioB": 0.3016, "vig": "27/08/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c37", "nome": "Neoenergia PE", "uf": "PE", "base": 0.79886, "icms": 20.5, "tarifa": 1.0577, "fioB": 0.3416, "vig": "28/04/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c38", "nome": "Equatorial Piauí", "uf": "PI", "base": 0.94669, "icms": 21, "tarifa": 1.2614, "fioB": 0.4074, "vig": "01/12/2026", "fonte": "ANEEL; imposto aprox."},
    {"id": "c39", "nome": "COCEL", "uf": "PR", "base": 0.73437, "icms": 19, "tarifa": 0.9543, "fioB": 0.3082, "vig": "28/06/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c40", "nome": "Castro-Dis", "uf": "PR", "base": 0.76917, "icms": 19, "tarifa": 0.9996, "fioB": 0.3229, "vig": "29/07/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c41", "nome": "Ceral-Dis", "uf": "PR", "base": 0.73064, "icms": 19, "tarifa": 0.9495, "fioB": 0.3067, "vig": "29/07/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c42", "nome": "Copel", "uf": "PR", "base": 0.76802, "icms": 19, "tarifa": 0.9981, "fioB": 0.3224, "vig": "23/06/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c43", "nome": "Pacto Energia PR", "uf": "PR", "base": 0.76802, "icms": 19, "tarifa": 0.9981, "fioB": 0.3224, "vig": "25/08/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c44", "nome": "Ceral Araruama", "uf": "RJ", "base": 1.20634, "icms": 22, "tarifa": 1.628, "fioB": 0.5258, "vig": "28/04/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c45", "nome": "Enel Rio", "uf": "RJ", "base": 1.0611, "icms": 22, "tarifa": 1.432, "fioB": 0.4625, "vig": "14/03/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c46", "nome": "Light", "uf": "RJ", "base": 0.88056, "icms": 22, "tarifa": 1.1883, "fioB": 0.3838, "vig": "14/03/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c47", "nome": "Neoenergia Cosern", "uf": "RN", "base": 0.7758, "icms": 20, "tarifa": 1.0208, "fioB": 0.3297, "vig": "21/04/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c48", "nome": "Energisa Rondônia", "uf": "RO", "base": 0.76244, "icms": 19.5, "tarifa": 0.997, "fioB": 0.322, "vig": "12/12/2026", "fonte": "ANEEL; imposto aprox."},
    {"id": "c49", "nome": "Âmbar Roraima", "uf": "RR", "base": 0.78947, "icms": 20, "tarifa": 1.0388, "fioB": 0.3355, "vig": "24/01/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c50", "nome": "CEDRI", "uf": "SC", "base": 0.99871, "icms": 17, "tarifa": 1.2666, "fioB": 0.4091, "vig": "29/09/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c51", "nome": "Cejama", "uf": "SC", "base": 0.77015, "icms": 17, "tarifa": 0.9767, "fioB": 0.3155, "vig": "29/09/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c52", "nome": "Celesc", "uf": "SC", "base": 0.75975, "icms": 17, "tarifa": 0.9635, "fioB": 0.3112, "vig": "21/08/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c53", "nome": "Ceral Anitápolis", "uf": "SC", "base": 1.0019, "icms": 17, "tarifa": 1.2706, "fioB": 0.4104, "vig": "29/11/2026", "fonte": "ANEEL; imposto aprox."},
    {"id": "c54", "nome": "Cergal", "uf": "SC", "base": 0.8658, "icms": 17, "tarifa": 1.098, "fioB": 0.3547, "vig": "29/09/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c55", "nome": "Cermoful", "uf": "SC", "base": 0.91791, "icms": 17, "tarifa": 1.1641, "fioB": 0.376, "vig": "29/09/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c56", "nome": "Cersul", "uf": "SC", "base": 0.71059, "icms": 17, "tarifa": 0.9012, "fioB": 0.2911, "vig": "29/09/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c57", "nome": "Cooperaliança", "uf": "SC", "base": 0.75773, "icms": 17, "tarifa": 0.961, "fioB": 0.3104, "vig": "28/08/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c58", "nome": "Coopercocal", "uf": "SC", "base": 0.79627, "icms": 17, "tarifa": 1.0099, "fioB": 0.3262, "vig": "29/09/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c59", "nome": "DCELT", "uf": "SC", "base": 0.75975, "icms": 17, "tarifa": 0.9635, "fioB": 0.3112, "vig": "28/08/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c60", "nome": "EFLJC", "uf": "SC", "base": 0.75975, "icms": 17, "tarifa": 0.9635, "fioB": 0.3112, "vig": "28/08/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c61", "nome": "EFLUL", "uf": "SC", "base": 0.75975, "icms": 17, "tarifa": 0.9635, "fioB": 0.3112, "vig": "28/08/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c62", "nome": "Energisa Sergipe", "uf": "SE", "base": 0.75461, "icms": 20, "tarifa": 0.9929, "fioB": 0.3207, "vig": "21/04/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c63", "nome": "Sulgipe", "uf": "SE", "base": 0.71881, "icms": 20, "tarifa": 0.9458, "fioB": 0.3055, "vig": "21/05/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c64", "nome": "CPFL Paulista", "uf": "SP", "base": 0.73945, "icms": 18, "tarifa": 0.9492, "fioB": 0.3066, "vig": "07/04/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c65", "nome": "CPFL Piratininga", "uf": "SP", "base": 0.75882, "icms": 18, "tarifa": 0.9741, "fioB": 0.3146, "vig": "22/10/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c66", "nome": "CPFL Santa Cruz", "uf": "SP", "base": 0.81258, "icms": 18, "tarifa": 1.0431, "fioB": 0.3369, "vig": "21/04/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c67", "nome": "EDP São Paulo", "uf": "SP", "base": 0.80168, "icms": 18, "tarifa": 1.0291, "fioB": 0.3324, "vig": "22/10/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c68", "nome": "Enel SP", "uf": "SP", "base": 0.78938, "icms": 18, "tarifa": 1.0133, "fioB": 0.3273, "vig": "03/07/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c69", "nome": "Energisa Sul-Sudeste", "uf": "SP", "base": 0.81424, "icms": 18, "tarifa": 1.0452, "fioB": 0.3376, "vig": "11/07/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c70", "nome": "Neoenergia Elektro", "uf": "SP", "base": 0.89163, "icms": 18, "tarifa": 1.1446, "fioB": 0.3697, "vig": "26/08/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c71", "nome": "Energisa Tocantins", "uf": "TO", "base": 0.99278, "icms": 20, "tarifa": 1.3063, "fioB": 0.4219, "vig": "03/07/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c72", "nome": "CERCI", "uf": "", "base": 1.50089, "icms": 17, "tarifa": 1.9035, "fioB": 0.6148, "vig": "28/04/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c73", "nome": "CEREJ", "uf": "", "base": 1.05956, "icms": 17, "tarifa": 1.3438, "fioB": 0.434, "vig": "29/09/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c74", "nome": "CERES", "uf": "", "base": 1.56923, "icms": 17, "tarifa": 1.9901, "fioB": 0.6428, "vig": "28/04/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c75", "nome": "CERIM", "uf": "", "base": 0.88226, "icms": 17, "tarifa": 1.1189, "fioB": 0.3614, "vig": "29/11/2026", "fonte": "ANEEL; imposto aprox."},
    {"id": "c76", "nome": "CERIPa", "uf": "", "base": 0.82118, "icms": 17, "tarifa": 1.0414, "fioB": 0.3364, "vig": "28/04/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c77", "nome": "CERIS", "uf": "", "base": 1.11512, "icms": 17, "tarifa": 1.4142, "fioB": 0.4568, "vig": "29/07/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c78", "nome": "CERMC", "uf": "", "base": 0.96908, "icms": 17, "tarifa": 1.229, "fioB": 0.397, "vig": "29/11/2026", "fonte": "ANEEL; imposto aprox."},
    {"id": "c79", "nome": "CERRP", "uf": "", "base": 0.74254, "icms": 17, "tarifa": 0.9417, "fioB": 0.3042, "vig": "28/05/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c80", "nome": "CERSAD", "uf": "", "base": 0.40502, "icms": 17, "tarifa": 0.5137, "fioB": 0.1659, "vig": "30/09/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c81", "nome": "Cedrap", "uf": "", "base": 1.09084, "icms": 17, "tarifa": 1.3834, "fioB": 0.4468, "vig": "29/11/2026", "fonte": "ANEEL; imposto aprox."},
    {"id": "c82", "nome": "Cegero", "uf": "", "base": 0.58605, "icms": 17, "tarifa": 0.7432, "fioB": 0.2401, "vig": "29/09/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c83", "nome": "Celetro", "uf": "", "base": 0.96925, "icms": 17, "tarifa": 1.2292, "fioB": 0.397, "vig": "29/07/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c84", "nome": "Cemirim", "uf": "", "base": 0.73223, "icms": 17, "tarifa": 0.9286, "fioB": 0.2999, "vig": "28/05/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c85", "nome": "Ceprag", "uf": "", "base": 0.86385, "icms": 17, "tarifa": 1.0956, "fioB": 0.3539, "vig": "21/12/2026", "fonte": "ANEEL; imposto aprox."},
    {"id": "c86", "nome": "Ceraçá", "uf": "", "base": 0.76189, "icms": 17, "tarifa": 0.9663, "fioB": 0.3121, "vig": "29/09/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c87", "nome": "Cerbranorte", "uf": "", "base": 0.65158, "icms": 17, "tarifa": 0.8264, "fioB": 0.2669, "vig": "29/09/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c88", "nome": "Cercos", "uf": "", "base": 1.0144, "icms": 17, "tarifa": 1.2865, "fioB": 0.4155, "vig": "28/05/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c89", "nome": "Cergapa", "uf": "", "base": 0.54511, "icms": 17, "tarifa": 0.6913, "fioB": 0.2233, "vig": "29/09/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c90", "nome": "Cergral", "uf": "", "base": 0.49029, "icms": 17, "tarifa": 0.6218, "fioB": 0.2008, "vig": "29/09/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c91", "nome": "Cernhe", "uf": "", "base": 0.8223, "icms": 17, "tarifa": 1.0429, "fioB": 0.3369, "vig": "29/09/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c92", "nome": "Cerpro", "uf": "", "base": 0.74253, "icms": 17, "tarifa": 0.9417, "fioB": 0.3042, "vig": "28/05/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c93", "nome": "Certrel", "uf": "", "base": 1.2242, "icms": 17, "tarifa": 1.5526, "fioB": 0.5015, "vig": "29/09/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c94", "nome": "Cervam", "uf": "", "base": 0.93721, "icms": 17, "tarifa": 1.1886, "fioB": 0.3839, "vig": "29/09/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c95", "nome": "Cetril", "uf": "", "base": 0.90998, "icms": 17, "tarifa": 1.1541, "fioB": 0.3728, "vig": "29/11/2026", "fonte": "ANEEL; imposto aprox."},
    {"id": "c96", "nome": "Codesam", "uf": "", "base": 0.66618, "icms": 17, "tarifa": 0.8449, "fioB": 0.2729, "vig": "29/09/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c97", "nome": "Coopera", "uf": "", "base": 0.7226, "icms": 17, "tarifa": 0.9164, "fioB": 0.296, "vig": "29/09/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c98", "nome": "Coopermila", "uf": "", "base": 0.72763, "icms": 17, "tarifa": 0.9228, "fioB": 0.2981, "vig": "29/09/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c99", "nome": "Coopernorte", "uf": "", "base": 1.37113, "icms": 17, "tarifa": 1.7389, "fioB": 0.5617, "vig": "21/12/2026", "fonte": "ANEEL; imposto aprox."},
    {"id": "c100", "nome": "Coopersul", "uf": "", "base": 0.73771, "icms": 17, "tarifa": 0.9356, "fioB": 0.3022, "vig": "21/12/2026", "fonte": "ANEEL; imposto aprox."},
    {"id": "c101", "nome": "Cooperzem", "uf": "", "base": 0.48404, "icms": 17, "tarifa": 0.6139, "fioB": 0.1983, "vig": "29/09/2027", "fonte": "ANEEL; imposto aprox."},
    {"id": "c102", "nome": "Coorsel", "uf": "", "base": 0.58974, "icms": 17, "tarifa": 0.7479, "fioB": 0.2416, "vig": "29/09/2027", "fonte": "ANEEL; imposto aprox."}],
  fioB:[{id:"y1",ano:2026,pct:60},{id:"y2",ano:2027,pct:75},{id:"y3",ano:2028,pct:90}],
  fioBDemais:90,
  prop:{razao:"Vmc Projetos e Instalações Elétricas Ltda",cnpj:"61.702.854/0001-04",resp:"Eng. Luan Stefanello Pianesso",crea:"CREA-RS 278122",cpf:"",assin:"data:image/png;base64,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",cdi:8.0,cdbPct:100,poup:5.5,ir:15,fe:0.0385,arv:0.14,
        bancos:[{id:"b1",nome:"Cresol",logo:"data:image/png;base64,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"},{id:"b2",nome:"Sicoob",logo:"data:image/png;base64,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"},{id:"b3",nome:"Sicredi",logo:"data:image/png;base64,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"},{id:"b4",nome:"Banco do Brasil",logo:"data:image/png;base64,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"},{id:"b5",nome:"Caixa",logo:"data:image/png;base64,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"},{id:"b6",nome:"Banrisul",logo:"data:image/png;base64,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"},{id:"b7",nome:"BV Financeira",logo:"data:image/png;base64,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"}]}
};
/* h = irradiação média anual (kWh/m²·dia), lat = latitude, m = valores mensais reais quando conhecidos */
const CIDADES = {
  "Ibirubá (RS)":{h:4.82,lat:-28.63,m:[5.59,5.70,5.43,4.85,4.03,3.45,3.81,4.47,4.29,4.97,5.61,5.65]},
  "Porto Alegre (RS)":{h:4.5,lat:-30.03},"Passo Fundo (RS)":{h:4.7,lat:-28.26},"Santa Maria (RS)":{h:4.8,lat:-29.69},
  "Curitiba (PR)":{h:4.3,lat:-25.43},"Florianópolis (SC)":{h:4.4,lat:-27.6},
  "São Paulo (SP)":{h:4.6,lat:-23.55},"Campinas (SP)":{h:4.9,lat:-22.9},"Rio de Janeiro (RJ)":{h:4.9,lat:-22.9},
  "Belo Horizonte (MG)":{h:5.3,lat:-19.9},"Uberlândia (MG)":{h:5.5,lat:-18.9},"Vitória (ES)":{h:5.0,lat:-20.3},
  "Brasília (DF)":{h:5.4,lat:-15.8},"Goiânia (GO)":{h:5.4,lat:-16.7},"Cuiabá (MT)":{h:5.4,lat:-15.6},
  "Campo Grande (MS)":{h:5.2,lat:-20.4},"Salvador (BA)":{h:5.4,lat:-13.0},"Recife (PE)":{h:5.5,lat:-8.05},
  "Fortaleza (CE)":{h:5.7,lat:-3.7},"Natal (RN)":{h:5.7,lat:-5.8},"Teresina (PI)":{h:5.6,lat:-5.1},
  "Belém (PA)":{h:4.7,lat:-1.45},"Manaus (AM)":{h:4.6,lat:-3.1},"Petrolina (PE)":{h:5.9,lat:-9.4},
  "Cruz Alta (RS)":{h:4.8,lat:-28.64},"Carazinho (RS)":{h:4.7,lat:-28.28},"Santa Rosa (RS)":{h:4.9,lat:-27.87},"Ijuí (RS)":{h:4.8,lat:-28.39},"Santo Ângelo (RS)":{h:4.9,lat:-28.3},"Erechim (RS)":{h:4.6,lat:-27.63},"Caxias do Sul (RS)":{h:4.4,lat:-29.17},"Pelotas (RS)":{h:4.5,lat:-31.77},"Santa Cruz do Sul (RS)":{h:4.6,lat:-29.72},"Lajeado (RS)":{h:4.5,lat:-29.47},"Uruguaiana (RS)":{h:5.0,lat:-29.76},"Santana do Livramento (RS)":{h:5.0,lat:-30.89},"Londrina (PR)":{h:4.9,lat:-23.31},"Maringá (PR)":{h:4.9,lat:-23.42},"Cascavel (PR)":{h:4.8,lat:-24.96},"Chapecó (SC)":{h:4.6,lat:-27.1},"Joinville (SC)":{h:4.2,lat:-26.3},"Blumenau (SC)":{h:4.2,lat:-26.92}
};
const MESES = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
const DIAS_MES = [31,28,31,30,31,30,31,31,30,31,30,31];
const COSTS = {
  ded:[{id:1,nome:"Impostos sobre a venda",modo:"pct",valor:6},{id:2,nome:"Comissão",modo:"pct",valor:3}],
  obra:[{id:3,nome:"Mão de obra de instalação",modo:"kwp",valor:150},
        {id:4,nome:"Material elétrico complementar",modo:"kwp",valor:100},
        {id:5,nome:"Projeto e ART",modo:"fixo",valor:400},
        {id:6,nome:"Deslocamento da equipe",modo:"km",valor:2.5},
        {id:7,nome:"Homologação na concessionária",modo:"fixo",valor:150}],
  rateio:[{id:8,nome:"Rateio de despesas fixas",modo:"pct",valor:4}]
};
let nextId = 9;
const SEC_NOME = {ded:"Deduções sobre a venda", obra:"Custos diretos da obra", rateio:"Rateio de despesas"};
const REAL = {};
let HSPM = [];        // irradiação mensal em uso
let OPT = "sug";      // opção de sistema selecionada
let R = null;

/* ============ UTILITÁRIOS ============ */
const $ = id => document.getElementById(id);
const brl = n => n.toLocaleString("pt-BR",{style:"currency",currency:"BRL",maximumFractionDigits:0});
const brl2 = n => n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const num = (n,d=0) => n.toLocaleString("pt-BR",{minimumFractionDigits:d,maximumFractionDigits:d});
const v = id => { const x = parseFloat($(id).value); return isFinite(x) ? x : 0; };
const esc = s => String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const clone = o => JSON.parse(JSON.stringify(o));
const uid = p => p+Math.random().toString(36).slice(2,7);
const byId = (list,id) => list.find(x=>x.id===id) || list[0];
const mean = a => a.reduce((s,x)=>s+x,0)/a.length;
const r1 = (n,d=1) => Math.round(n*Math.pow(10,d))/Math.pow(10,d);

/* ============ CONFIG: carregar, salvar ============ */
const LS_KEY = "orcasolar.config.v3";
const QS = new URLSearchParams(location.search), NEG = QS.get("neg"), EMBED = QS.get("embed")==="1";
if(EMBED) document.documentElement.classList.add("embed");
let CONFIG = loadCfg();
function loadCfg(){
  const base = clone(DEF);
  try{
    const raw = NEG ? null : localStorage.getItem(LS_KEY);
    if(raw){
      const s = JSON.parse(raw);
      for(const k of Object.keys(base)){
        if(s[k]===undefined) continue;
        if(k==="tec"){ base.tec = Object.assign(base.tec,s.tec); base.tec.perdas = Object.assign(clone(DEF.tec.perdas),(s.tec||{}).perdas); }
        else base[k] = s[k];
      }
    }
  }catch(e){}
  base.prop=Object.assign(clone(DEF.prop),base.prop||{}); if(!(base.prop.bancos||[]).length) base.prop.bancos=clone(DEF.prop.bancos);
  return base;
}
let CFG_DIRTY=false;
function saveCfg(){ if(NEG){ CFG_DIRTY=true; if(typeof cfgMark==="function") cfgMark(); return; } try{ localStorage.setItem(LS_KEY, JSON.stringify(CONFIG)); }catch(e){} }
const getPath = (o,p) => p.split(".").reduce((a,k)=>a&&a[k],o);
function setPath(o,p,val){ const ks=p.split("."); const last=ks.pop(); const t=ks.reduce((a,k)=>a[k],o); t[last]=val; }
const cfgPerdasTotal = () => (1-Object.values(CONFIG.tec.perdas).reduce((p,x)=>p*(1-x/100),1))*100;
function syncFromConfig(){ $("simult").value = CONFIG.tec.simult; $("perdas").value = r1(cfgPerdasTotal(),1); }

/* ============ EDITORES DE TABELA (Configurações) ============ */
const FASES = [[1,"1 (mono)"],[2,"2 (bi)"],[3,"3 (tri)"]];
const EDITORS = {
  financeiras:{el:"ed-financeiras", cols:[["nome","Nome","t"],["taxa","Juros (% a.m.)","n"],["prazo","Parcelas","n"],["entrada","Entrada (%)","n"]], make:()=>({id:uid("f"),nome:"Nova financeira",taxa:1.8,prazo:60,entrada:0})},
  telhados:{el:"ed-telhados", cols:[["nome","Tipo","t"],["estrutura","Estrutura (R$/módulo)","n"],["fatorArea","Fator de área","n"]], make:()=>({id:uid("t"),nome:"Novo tipo",estrutura:100,fatorArea:1.1})},
  modulos:{el:"ed-modulos", cols:[["marca","Marca","t"],["modelo","Modelo","t"],["wp","Wp","n"],["comp","Comp. (mm)","n"],["larg","Larg. (mm)","n"],["voc","Voc (V)","n"],["isc","Isc (A)","n"],["vmp","Vmp (V)","n"],["imp","Imp (A)","n"],["coefVoc","Coef. Voc (%/°C)","n"],["coefP","Coef. Pmax (%/°C)","n"],["garantia","Garantia (anos)","n"],["preco","Preço (R$)","n"]], make:()=>({id:uid("m"),marca:"",modelo:"Novo módulo",wp:550,comp:2279,larg:1134,voc:50,isc:14,vmp:42,imp:13.1,coefVoc:-0.27,coefP:-0.34,garantia:25,preco:450})},
  inversores:{el:"ed-inversores", cols:[["marca","Marca","t"],["modelo","Modelo","t"],["kw","kW (CA)","n"],["fases","Fases","s"],["mppt","MPPTs","n"],["strMppt","Strings/MPPT","n"],["vmax","Vmax CC (V)","n"],["vmin","Vmín MPPT (V)","n"],["iscMax","Isc máx/MPPT (A)","n"],["preco","Preço (R$)","n"]], make:()=>({id:uid("i"),marca:"",modelo:"Novo inversor",kw:5,fases:1,mppt:2,strMppt:1,vmax:600,vmin:80,iscMax:16,preco:3300})},
  conc:{el:"ed-conc", cols:[["nome","Concessionária","t"],["uf","UF","t"],["base","Tarifa s/ trib.","n"],["icms","ICMS %","n"],["tarifa","Tarifa c/ imp. (R$/kWh)","n"],["fioB","Fio B (R$/kWh)","n"],["vig","Vigência até","t"],["fonte","Fonte / observação","t"]], make:()=>({id:uid("c"),nome:"Nova concessionária",uf:"",base:0.8,icms:17,tarifa:1.0,fioB:0.32,vig:"",fonte:"Manual"})},
  fioB:{el:"ed-fiob", cols:[["ano","Ano","n"],["pct","Fio B pago (%)","n"]], make:()=>({id:uid("y"),ano:new Date().getFullYear(),pct:100})}
};
function renderEditorTable(key){
  const ed=EDITORS[key], list=CONFIG[key];
  $(ed.el).innerHTML = `<table class="ed"><thead><tr>${ed.cols.map(c=>`<th>${c[1]}</th>`).join("")}<th></th></tr></thead><tbody>`+
    list.map((row,i)=>`<tr>${ed.cols.map(([f,,t])=>{
      if(t==="s") return `<td><select data-k="${key}" data-i="${i}" data-f="${f}" aria-label="${f}">${FASES.map(o=>`<option value="${o[0]}"${row[f]==o[0]?" selected":""}>${o[1]}</option>`).join("")}</select></td>`;
      return `<td><input ${t==="n"?'type="number" step="any"':'type="text"'} data-k="${key}" data-i="${i}" data-f="${f}" data-t="${t}" aria-label="${f}" value="${esc(row[f])}"></td>`;
    }).join("")}<td><button class="icon-btn" data-del="${key}" data-i="${i}" aria-label="Remover linha">×</button></td></tr>`).join("")+
    `</tbody></table><div style="margin-top:10px"><button class="btn alt small" data-add="${key}">Adicionar linha</button></div>`;
  if(key==="conc" && typeof concFiltrar==="function") concFiltrar();
}
function bindEditors(){
  Object.values(EDITORS).forEach(ed=>{
    const el=$(ed.el);
    el.addEventListener("input",e=>{
      const t=e.target; if(!t.dataset.f) return;
      const {k,i,f}=t.dataset;
      CONFIG[k][i][f] = (t.dataset.t==="n"||t.tagName==="SELECT") ? (parseFloat(t.value)||0) : t.value;
      saveCfg(); calc();
    });
    el.addEventListener("change",e=>{ if(e.target.dataset.f){ refreshSelects(); calc(); } });
    el.addEventListener("click",e=>{
      const b=e.target.closest("button"); if(!b) return;
      const key=b.dataset.add||b.dataset.del; if(!key) return;
      if(b.dataset.add) CONFIG[key].push(EDITORS[key].make());
      else if(CONFIG[key].length>1 || key==="fioB" || key==="financeiras") CONFIG[key].splice(+b.dataset.i,1);
      saveCfg(); renderEditorTable(key); refreshSelects(); calc();
    });
  });
}
function bindCfgFields(){
  document.querySelectorAll("[data-cfg]").forEach(el=>{
    el.addEventListener("input",()=>{
      setPath(CONFIG, el.dataset.cfg, el.hasAttribute("data-num") ? (parseFloat(el.value)||0) : el.value);
      saveCfg();
      if(el.dataset.cfg==="tec.simult" || el.dataset.cfg.startsWith("tec.perdas")) syncFromConfig();
      calc();
    });
  });
}
function fillCfgFields(){ document.querySelectorAll("[data-cfg]").forEach(el=>{ el.value = getPath(CONFIG, el.dataset.cfg); }); }

/* ============ SELECTS E TARIFA ============ */
function fillSelect(id,items,label){
  const el=$(id), cur=el.value;
  el.innerHTML = items.map(x=>`<option value="${x.id}">${esc(label(x))}</option>`).join("");
  if(cur && items.some(x=>x.id===cur)) el.value=cur;
}
function refreshSelects(){
  fillSelect("modsel",CONFIG.modulos,m=>`${m.marca} ${m.modelo}`.trim());
  fillSelect("telsel",CONFIG.telhados,t=>t.nome);
  const cur=$("concsel").value;
  $("concsel").innerHTML = CONFIG.conc.map(c=>`<option value="${c.id}">${esc(c.nome)}${c.uf?" ("+esc(c.uf)+")":""}</option>`).join("")+`<option value="__custom">Outra (informar valores)</option>`;
  if(cur && (cur==="__custom" || CONFIG.conc.some(c=>c.id===cur))) $("concsel").value=cur;
}
function applyConc(){ const c = CONFIG.conc.find(x=>x.id===$("concsel").value); if(c){ $("tarifa").value=c.tarifa; $("fiob").value=c.fioB; } }

/* ============ IRRADIAÇÃO MENSAL ============ */
function seasonal(h,lat){
  const A = Math.min(0.0085*Math.abs(lat),0.3);
  const f = MESES.map((_,m)=>1 + A*Math.cos(2*Math.PI*(m-0.5)/12));
  const k = h/mean(f);
  return f.map(x=>r1(x*k,2));
}
function monthlyFor(name){ const c=CIDADES[name]; return c.m ? c.m.slice() : seasonal(c.h,c.lat); }
function buildMonthInputs(){
  $("hm-grid").innerHTML = MESES.map((m,i)=>`<label>${m}<input type="number" step="0.01" min="0" data-hm="${i}" data-own></label>`).join("");
  $("cm-grid").innerHTML = MESES.map((m,i)=>`<label>${m}<input type="number" step="1" min="0" data-cm="${i}" data-own placeholder="kWh"></label>`).join("");
  document.querySelectorAll("[data-hm]").forEach(el=>el.addEventListener("input",()=>{
    HSPM[+el.dataset.hm] = parseFloat(el.value)||0;
    $("hsp").value = r1(mean(HSPM),2); $("cidade").value="__custom"; calc();
  }));
  document.querySelectorAll("[data-cm]").forEach(el=>el.addEventListener("input",()=>{
    const vals=[...document.querySelectorAll("[data-cm]")].map(x=>parseFloat(x.value)).filter(x=>x>0);
    if(vals.length) $("consumo").value = Math.round(mean(vals));
    calc();
  }));
}
function setHspm(arr){
  HSPM = arr.slice();
  document.querySelectorAll("[data-hm]").forEach(el=>{ el.value = HSPM[+el.dataset.hm]; });
  $("hsp").value = r1(mean(HSPM),2);
}
function consumoMensal(cons){
  return [...document.querySelectorAll("[data-cm]")].map(el=>{ const x=parseFloat(el.value); return x>0 ? x : cons; });
}

/* ============ DIMENSIONAMENTO TÉCNICO ============ */
function pickInverter(kwp,fase){
  const T=CONFIG.tec;
  const cands = CONFIG.inversores.filter(i=>i.fases<=fase && i.kw>0).sort((a,b)=>a.kw-b.kw);
  if(!cands.length) return null;
  const one = cands.find(i=>kwp/i.kw <= T.ccaMax);
  if(one) return {inv:one, qtd:1};
  const big = cands[cands.length-1];
  return {inv:big, qtd:Math.ceil(kwp/(T.ccaMax*big.kw))};
}
function checkStrings(mod,inv,qtd,N){
  const T=CONFIG.tec, out=[];
  const Ni = Math.ceil(N/qtd);
  const vocCold = mod.voc*(1+(mod.coefVoc/100)*(T.tmin-25));
  const vmpHot  = mod.vmp*(1+(mod.coefP/100)*(T.tcell-25));
  const nmax = Math.floor(inv.vmax/vocCold);
  const nmin = Math.ceil(inv.vmin/vmpHot);
  const maxStr = inv.mppt*inv.strMppt;
  if(nmax<1){ out.push({ok:false,t:`Tensão a frio do módulo (${num(vocCold,1)} V) acima do limite do inversor (${num(inv.vmax)} V).`}); return {checks:out,arranjo:"inviável"}; }
  const s = Math.ceil(Ni/nmax);
  const menor = Math.floor(Ni/s), maior = Math.ceil(Ni/s);
  out.push({ok:true,t:`Módulos por string: de ${nmin} a ${nmax} (Voc a ${T.tmin} °C = ${num(vocCold,1)} V; Vmp a ${T.tcell} °C = ${num(vmpHot,1)} V).`});
  out.push({ok:s<=maxStr, t:`${s} string(s) por inversor, limite de ${maxStr} (${inv.mppt} MPPT × ${inv.strMppt}).`});
  out.push({ok:menor>=nmin, t:menor>=nmin?`Strings de ${menor===maior?menor:menor+" a "+maior} módulos, acima do mínimo de ${nmin}.`:`String de ${menor} módulos abaixo do mínimo de ${nmin} para o MPPT.`});
  const par = Math.ceil(s/inv.mppt);
  out.push({ok:par*mod.isc<=inv.iscMax, t:`Corrente por MPPT: ${num(par*mod.isc,1)} A (limite ${num(inv.iscMax,1)} A).`});
  return {checks:out, arranjo:`${s} string(s) de ${menor===maior?menor:menor+" a "+maior} módulos${qtd>1?" por inversor":""}`};
}
function fioPct(year){ const row = CONFIG.fioB.find(r=>+r.ano===year); return (row ? row.pct : CONFIG.fioBDemais)/100; }
function irr(flows){
  let lo=-0.9, hi=1.5;
  const f = r => flows.reduce((s,c,i)=>s + c/Math.pow(1+r,i),0);
  if (f(lo)*f(hi) > 0) return null;
  for (let i=0;i<80;i++){ const m=(lo+hi)/2; if (f(lo)*f(m) <= 0) hi=m; else lo=m; }
  return (lo+hi)/2;
}

const ORI = {N:["Norte",1],NE:["Nordeste",0.97],NO:["Noroeste",0.97],L:["Leste",0.86],O:["Oeste",0.86],SE:["Sudeste",0.78],SO:["Sudoeste",0.78],S:["Sul",0.70]};
function facesIn(){ return [1,2,3].map(i=>({i,ori:"N",area:0,fat:1})); }
function temArea(){ return facesIn().some(f=>f.area>0); }
function capFace(f,AA){ const c=Math.floor(f.area/AA); return c>=4?c:0; }
function capTotal(AA){ return facesIn().filter(f=>f.area>0).reduce((s,f)=>s+capFace(f,AA),0); }
function bestFat(AA){ const fs=facesIn(); const ok=temArea()?fs.filter(f=>f.area>0&&capFace(f,AA)>0):[fs[0]]; return ok.length?Math.max(...ok.map(f=>f.fat)):1; }
function alloc(N,AA){
  const fs=facesIn();
  if(!temArea()){ const f=fs[0]; return {fator:f.fat,ok:true,faces:[{ori:f.ori,n:N,fat:f.fat}]}; }
  const ord=fs.filter(f=>f.area>0).map(f=>({ori:f.ori,fat:f.fat,cap:capFace(f,AA),n:0})).sort((a,b)=>b.fat-a.fat);
  let rem=N; ord.forEach(f=>{ const n=Math.min(f.cap,rem); f.n=n; rem-=n; });
  // faces com menos de 4: realoca para quem ainda tem folga
  ord.filter(f=>f.n>0&&f.n<4).forEach(f=>{ const o=ord.find(x=>x!==f&&x.n>=4&&x.cap-x.n>=f.n); if(o){ o.n+=f.n; f.n=0; } });
  const tot=ord.reduce((s,f)=>s+f.n,0);
  const fator=tot>0?ord.reduce((s,f)=>s+f.n*f.fat,0)/tot:1;
  return {fator,ok:rem===0,faces:ord};
}
function isAdm(){ return !NEG || ISADM; }
function compute(){
  const mod=byId(CONFIG.modulos,$("modsel").value), tel=byId(CONFIG.telhados,$("telsel").value);
  if(!mod || !tel || !HSPM.length) return null;
  const T=CONFIG.tec;
  const hsp=v("hsp"), aum=Math.max(0,v("aumcons"))/100, cons=v("consumo")*(1+aum), tar=v("tarifa"), fiobKwh=v("fiob"), meta=1, rateio=0;
  const fase = {"30":1,"50":2,"100":3}[$("padrao").value];
  const fee = +$("padrao").value;
  const preco=v("preco"), desc=v("desc")/100, reaj=v("reaj")/100, om=v("om"), invPct=v("inv")/100;
  const anos=25, wp=mod.wp, sim=v("simult")/100, degr=T.degr/100;
  const PR = 1 - v("perdas")/100;
  if (!(hsp>0 && cons>0 && wp>0 && PR>0)) return null;
  const compensavel = Math.max(cons - fee, 0);
  const UCS=ucsAtivas(aum), consEx=UCS.reduce((s,u)=>s+u.cons,0), consAll=cons+consEx;
  const alvo = Math.max(0,(meta>1 ? cons*meta : Math.min(cons*meta, compensavel)) + UCS.reduce((s,u)=>s+(meta>1?u.cons*meta:Math.min(u.cons*meta,u.comp)),0) - rateio);
  const kwhKwp = hsp*T.dias*PR;
  const areaMod = mod.comp*mod.larg/1e6;
  const AA = areaMod*tel.fatorArea;
  const capT = capTotal(AA), comArea = temArea();
  const sizeFor = Nf => { const kwp=Nf*wp/1000, al=alloc(Math.max(1,Math.ceil(Nf-1e-9)),AA), ger=kwp*kwhKwp*al.fator; return {Nf,kwp,ger,pct:(ger+rateio)/consAll*100,area:Nf*AA,fator:al.fator}; };

  // opções de sistema
  const Nx = alvo/(kwhKwp*bestFat(AA))*1000/wp;
  let Nsug = Math.max(1,Math.ceil(Nx-1e-9));
  for(let g=0; g<400 && sizeFor(Nsug).ger<alvo-1e-6 && alvo>0; g++) Nsug++;
  let limArea=false;
  if(comArea && capT>0 && Nsug>capT){ Nsug=capT; limArea=true; }
  const pk0 = pickInverter(Nsug*wp/1000,fase);
  let Nmax = pk0 ? Math.max(Nsug,Math.floor(pk0.inv.kw*pk0.qtd*T.ccaMax*1000/wp)) : Nsug;
  if(comArea && capT>0) Nmax=Math.min(Nmax,capT);
  const injmax = v("injmax");
  const opts = [
    {id:"ref",nome:"Resultado exato",desc:"Potência calculada sem arredondar os módulos.",ref:true,...sizeFor(Nx)},
    {id:"sug",nome:"Sistema sugerido",desc:"Módulos inteiros para atingir a meta de compensação.",N:Nsug,...sizeFor(Nsug)},
  ];
  if(comArea && capT>0 && capT!==Nsug && capT!==Nmax) opts.push({id:"area",nome:"Máximo na área",desc:`Ocupa toda a área informada (${capT} módulos).`,N:capT,...sizeFor(capT)});
  if(Nmax>Nsug) opts.push({id:"max",nome:"Máximo no inversor",desc:`Maior sistema com relação CC/CA até ${num(T.ccaMax,2)}. Gera acima do consumo.`,N:Nmax,...sizeFor(Nmax)});
  if(injmax>0){ const Ni=Math.max(1,Math.ceil(injmax*1000/wp)); opts.push({id:"inj",nome:"Limitado à injeção",desc:`Potência de geração próxima de ${num(injmax,1)} kW injetáveis.`,N:Ni,...sizeFor(Ni)}); }
  let sel = opts.find(o=>o.id===OPT && !o.ref); if(!sel){ sel = opts.find(o=>o.id==="sug"); }
  // ajuste manual de módulos e inversor escolhido
  const madd=0, ovr=$("invsel").value, ovrInv=(ovr&&ovr!=="auto")?CONFIG.inversores.find(i=>i.id===ovr):null;
  const pickX = k => ovrInv ? {inv:ovrInv, qtd:Math.max(1,Math.ceil(k/(T.ccaMax*ovrInv.kw)))} : pickInverter(k,fase);
  let N = Math.max(1, sel.N+madd), pkx = pickX(N*wp/1000);
  const NmaxInv = pkx ? Math.floor(pkx.inv.kw*pkx.qtd*T.ccaMax*1000/wp) : N;
  let limitado = "";
  if(N>NmaxInv){ N=NmaxInv; limitado="inversor"; }
  if(comArea && capT>0 && N>capT){ N=capT; limitado="área"; }
  N=Math.max(1,N);
  const sz = sizeFor(N), kwp = sz.kwp, gerMes = sz.ger, areaTotal = sz.area, al = alloc(N,AA);
  const SH=ucsShares(UCS,compensavel), gerMain=gerMes*SH.f0;
  const maisMod = Math.max(0, Math.min(NmaxInv, comArea&&capT>0?capT:Infinity) - N);

  // inversor e strings
  const pk = pickX(kwp);
  let inv=null, qtdInv=0, ratio=0, str={checks:[],arranjo:"-"};
  if(pk){ inv=pk.inv; qtdInv=pk.qtd; ratio=kwp/(inv.kw*qtdInv); str=checkStrings(mod,inv,qtdInv,N); }
  const checks = str.checks.slice();
  if(!pk) checks.unshift({ok:false,t:"Nenhum inversor compatível com o padrão de entrada. Cadastre um em Configurações."});
  else checks.unshift({ok:ratio>=T.ccaMin && ratio<=T.ccaMax, t:`Relação CC/CA de ${num(ratio,2)} (faixa ${num(T.ccaMin,2)} a ${num(T.ccaMax,2)}).`});
  if(comArea){
    checks.push({ok:N<=capT && al.ok, t:capT>0?`Área informada comporta ${capT} módulos; o sistema usa ${N}.`:"Nenhuma face comporta 4 módulos ou mais."});
    al.faces.filter(f=>f.n>0).forEach(f=>checks.push({ok:f.n>=4,t:`Face ${ORI[f.ori][0]}: ${f.n} módulos (mínimo 4 por face, fator ${num(f.fat,2)}).`}));
  }

  // kit do catálogo
  const kitItems = [
    {nome:`Módulos ${mod.marca} ${mod.modelo}`.replace("  "," "), qtd:N, un:mod.preco, unid:"un"},
    inv ? {nome:`Inversor ${inv.marca} ${inv.modelo}`.replace("  "," "), qtd:qtdInv, un:inv.preco, unid:"un"} : {nome:"Inversor (não definido)", qtd:0, un:0, unid:"un"},
    {nome:`Estrutura de fixação (${tel.nome})`, qtd:N, un:tel.estrutura, unid:"módulo"},
    {nome:"Itens complementares (string box, cabos CC, conectores)", qtd:kwp, un:T.kitOutrosKwp, unid:"kWp"}
  ];
  const Kest = kitItems.reduce((s,i)=>s+i.qtd*i.un,0);
  const P = pricing(kwp,desc,Kest,N);
  const invest = $("origem").value==="preco" ? P.receita : kwp*1000*preco*(1-desc);

  // geração mensal e comparação com o consumo
  const gerM = HSPM.map((h,i)=>kwp*h*DIAS_MES[i]*PR*al.fator);
  const consM = consumoMensal(v("consumo")).map(x=>x*(1+aum)+consEx);

  // conta antes/depois
  const compRat = Math.min(rateio, compensavel);
  const compMes = Math.min(gerMain+rateio, compensavel);
  const fioMes = (compMes-compRat)*(1-sim)*fioPct(new Date().getFullYear())*fiobKwh + compRat*fiobKwh;
  const ecoRateioMes = compRat*(tar-fiobKwh);
  const ucRes=ucsResult(UCS,SH,gerMes,fiobKwh,new Date().getFullYear());
  const contaAntes = cons*tar + UCS.reduce((s,u)=>s+u.cons*u.tar,0);
  const consumoPago = Math.max(cons-gerMain-rateio, fee);
  const contaDepois = consumoPago*tar + fioMes + ucRes.depois;

  // projeção
  const y0 = new Date().getFullYear();
  const rows=[]; let acum=-invest; const flows=[-invest]; let payback=null;
  for(let a=1;a<=anos;a++){
    const year=y0+a-1;
    const ger = gerMes*12*Math.pow(1-degr,a-1);
    const t = tar*Math.pow(1+reaj,a-1);
    const compSis = Math.max(0, Math.min(ger*SH.f0+rateio*12, compensavel*12) - Math.min(rateio*12, compensavel*12));
    const comp = compSis;
    const fio = comp*(1-sim)*fioPct(year)*fiobKwh*Math.pow(1+reaj,a-1);
    let eco = comp*t - fio;
    UCS.forEach((u,k)=>{ const ci=Math.min(ger*SH.f[k], u.comp*12), g_=Math.pow(1+reaj,a-1); eco += ci*u.tar*g_ - ci*fioPct(year)*fiobKwh*g_; });
    let custo = om*Math.pow(1.04,a-1);
    if (a===12) custo += invest*invPct;
    const liq = eco-custo;
    const antes = acum; acum += liq; flows.push(liq);
    if (payback===null && acum>=0) payback = (a-1) + (-antes/liq);
    rows.push({a,year,ger,t,fio,eco,custo,liq,acum});
  }
  return {P,mod,tel,inv,qtdInv,ratio,checks,arranjo:str.arranjo,kitItems,Kest,PR,opts,optSel:sel.id,
          ucs:ucRes.list,ucF0:SH.f0*100,consAll,consEx,hsp,cons,tar,fee,wp,reaj,degr,sim,modulos:N,kwp,gerMes,gerM,consM,invest,contaAntes,contaDepois,fioMes,rows,payback,
          tir:irr(flows),totalEco:rows.reduce((s,r)=>s+r.liq,0),areaTotal,rateio,aum,ecoRateioMes,atend:(gerMes+rateio)/consAll*100,maisMod,NmaxInv,capT,comArea,limitado,madd,al,limArea,ecoAno1:rows[0].eco,ecoMes1:rows[0].eco/12,anos,desc};
}

/* ============ PRECIFICAÇÃO E DRE ============ */
function tabProj(kwp){ const t=(CONFIG.tabProj||[]).slice().sort((a,b)=>a.ate-b.ate); if(!t.length) return 0; const r=t.find(x=>kwp<=x.ate+1e-9)||t[t.length-1]; return +r.v||0; }
function lineValue(l,kwp,rec,K,N){ if(l.modo==="tabproj") return tabProj(kwp); return l.modo==="fixo" ? l.valor : l.modo==="kwp" ? l.valor*kwp : l.modo==="mod" ? l.valor*(N||0) : l.modo==="km" ? l.valor*v("dist") : l.modo==="pctkit" ? l.valor/100*(K||0) : l.modo==="pctserv" ? l.valor/100*Math.max(0,rec-(K||0)) : l.valor/100*rec; }
function fixedOf(l,kwp,K,N){ if(l.modo==="tabproj") return tabProj(kwp); return l.modo==="fixo" ? l.valor : l.modo==="kwp" ? l.valor*kwp : l.modo==="mod" ? l.valor*(N||0) : l.modo==="km" ? l.valor*v("dist") : l.modo==="pctkit" ? l.valor/100*(K||0) : 0; }
function pricing(kwp,desc,Kest,N){
  const cot=v("kitcot"), mt=$("metodo").value, mv=v("margem"), meta=v("meta-liq")/100;
  const K = cot>0 ? cot : Kest;
  const lista = mt==="venda" ? K/(1-Math.min(mv/100,0.95)) : mt==="markup" ? K*(1+mv/100) : K+mv;
  const receita = lista*(1-desc);
  const sec = {}; let fixed = K, pct = 0;
  for (const s of Object.keys(COSTS)){
    sec[s] = COSTS[s].map(l => ({l, val:lineValue(l,kwp,receita,K,N)}));
    COSTS[s].forEach(l => { if(l.modo==="pct") pct += l.valor/100; else if(l.modo==="pctserv"){ pct += l.valor/100; fixed -= l.valor/100*K; } else fixed += fixedOf(l,kwp,K,N); });
  }
  const priceFor = t => { const d = 1-pct-t; return d>0 ? fixed/d : null; };
  return {K,lista,receita,sec,pct,fixed,kwp,desc,meta,minimo:priceFor(0),alvo:priceFor(meta)};
}
function renderEditor(){
  $("editor").innerHTML = Object.keys(COSTS).map(s => `
    <div class="sec-title"><span>${SEC_NOME[s]}</span><button class="btn alt small" data-add="${s}">Adicionar linha</button></div>
    ${COSTS[s].map((l,i)=>`
      <div class="line">
        <input type="text" aria-label="Nome" data-sec="${s}" data-i="${i}" data-f="nome" value="${esc(l.nome)}">
        <select aria-label="Tipo de valor" data-sec="${s}" data-i="${i}" data-f="modo">
          <option value="fixo"${l.modo==="fixo"?" selected":""}>R$ fixo</option>
          <option value="kwp"${l.modo==="kwp"?" selected":""}>R$ por kWp</option>
          <option value="mod"${l.modo==="mod"?" selected":""}>R$ por módulo (unidade)</option>
          <option value="tabproj"${l.modo==="tabproj"?" selected":""}>Tabela de projeto (faixa de kWp)</option>
          <option value="km"${l.modo==="km"?" selected":""}>R$ por km</option>
          <option value="pctkit"${l.modo==="pctkit"?" selected":""}>% do kit</option>
          <option value="pctserv"${l.modo==="pctserv"?" selected":""}>% do valor do serviço (venda − kit)</option>
          <option value="pct"${l.modo==="pct"?" selected":""}>% da venda (geral)</option>
        </select>
        <input type="number" step="0.5" min="0" aria-label="Valor" data-sec="${s}" data-i="${i}" data-f="valor" value="${l.valor}">
        <button class="icon-btn" aria-label="Remover linha" data-del="${s}" data-i="${i}">×</button>
      </div>`).join("")}
  `).join("");
}
$("editor").addEventListener("input", e => {
  const t=e.target, {sec,i,f}=t.dataset; if(!f) return;
  COSTS[sec][i][f] = f==="valor" ? (parseFloat(t.value)||0) : t.value;
  calc();
});
$("editor").addEventListener("click", e => {
  const b=e.target.closest("button"); if(!b) return;
  if(b.dataset.add){ COSTS[b.dataset.add].push({id:nextId++,nome:"Nova linha",modo:"fixo",valor:0}); }
  else if(b.dataset.del){ const [l]=COSTS[b.dataset.del].splice(+b.dataset.i,1); delete REAL["l"+l.id]; }
  else return;
  renderEditor(); calc();
});
$("tbl-dre").addEventListener("input", e => {
  const k = e.target.dataset.real; if(!k) return;
  if(e.target.value==="") delete REAL[k]; else REAL[k] = parseFloat(e.target.value)||0;
  renderPreco();
});

function renderPreco(){
  const r=R; if(!r) return; const P=r.P;
  { const kr=$("kit-ref"); if(kr) kr.innerHTML = v("kitcot")>0 ? "Kit cotado em uso no preço: <b>"+brl(v("kitcot"))+"</b> · catálogo (referência): "+brl(r.Kest) : "<b class=neg>Informe o valor do kit cotado.</b> A base de preço de todos os orçamentos é o valor do kit; sem ele, o preço usa uma estimativa do catálogo (sem preços atualizados) e não serve para proposta."; }
  if(typeof kitMargemSync==="function") kitMargemSync(r);
  { const ka=$("kit-aviso"); if(ka) ka.style.display = v("kitcot")>0 ? "none" : ""; }
  $("tbl-kit").innerHTML = `<thead><tr><th>Item</th><th>Qtd.</th><th>Unitário</th><th>Total</th></tr></thead><tbody>`+
    r.kitItems.map(i=>`<tr><td>${esc(i.nome)}</td><td>${num(i.qtd,i.unid==="kWp"?2:0)} ${i.unid}</td><td>${brl2(i.un)}</td><td>${brl(i.qtd*i.un)}</td></tr>`).join("")+
    `<tr><td><strong>Kit calculado do catálogo</strong></td><td></td><td></td><td><strong>${brl(r.Kest)}</strong></td></tr>`+
    (v("kitcot")>0?`<tr><td><strong>Kit cotado (usado no preço)</strong></td><td></td><td></td><td><strong>${brl(v("kitcot"))}</strong></td></tr>`:"")+`</tbody>`;

  const ef = (k,prev) => REAL[k]!==undefined ? REAL[k] : prev;
  const rows = [];
  const efSum = s=>P.sec[s].reduce((t,x)=>t+ef("l"+x.l.id,x.val),0);
  const prSum = s=>P.sec[s].reduce((t,x)=>t+x.val,0);
  const recP=P.receita, recE=ef("receita",P.receita);
  const dedP=prSum("ded"), dedE=efSum("ded");
  const rlP=recP-dedP, rlE=recE-dedE;
  const kitE=ef("kit",P.K);
  const mcP=rlP-P.K, mcE=rlE-kitE;
  const obP=prSum("obra"), obE=efSum("obra");
  const resP=mcP-obP, resE=mcE-obE;
  const raP=prSum("rateio"), raE=efSum("rateio");
  const liqP=resP-raP, liqE=resE-raE;
  const out = (k,label,prev,eff,cost,kind) => rows.push({k,label,prev,eff,cost,kind});
  out("receita","Receita bruta (preço de venda)",recP,recE,false,"in");
  P.sec.ded.forEach(x=>out("l"+x.l.id,"(−) "+x.l.nome,x.val,ef("l"+x.l.id,x.val),true,"in"));
  out("rl","Receita líquida",rlP,rlE,false,"sub");
  out("kit","(−) Custo do kit",P.K,kitE,true,"in");
  out("mc","Margem de contribuição",mcP,mcE,false,"sub");
  P.sec.obra.forEach(x=>out("l"+x.l.id,"(−) "+x.l.nome,x.val,ef("l"+x.l.id,x.val),true,"in"));
  out("res","Resultado da obra",resP,resE,false,"sub");
  P.sec.rateio.forEach(x=>out("l"+x.l.id,"(−) "+x.l.nome,x.val,ef("l"+x.l.id,x.val),true,"in"));
  out("liq","Resultado líquido",liqP,liqE,false,"total");

  const act = document.activeElement && document.activeElement.dataset ? document.activeElement.dataset.real : null;
  $("tbl-dre").innerHTML = `<thead><tr><th>Item</th><th>Previsto</th><th>% da receita</th><th>Realizado</th><th>Desvio</th></tr></thead><tbody>` +
    rows.map(x=>{
      const dev = x.eff-x.prev;
      const bad = x.cost ? dev>0.005 : dev<-0.005;
      const good = x.cost ? dev<-0.005 : dev>0.005;
      const cell = x.kind==="in" ? `<input type="number" step="0.01" data-real="${x.k}" aria-label="Realizado: ${esc(x.label)}" placeholder="${num(x.prev,2)}" value="${REAL[x.k]!==undefined?REAL[x.k]:""}">` : brl(x.eff);
      return `<tr class="${x.kind==="sub"?"sub":x.kind==="total"?"total":""}"><td class="k">${esc(x.label)}</td><td>${brl(x.prev)}</td><td>${recP?num(x.prev/recP*100,1)+"%":"-"}</td><td>${cell}</td><td class="${bad?"neg":good?"pos":""}">${Math.abs(dev)<0.005?"-":(dev>0?"+":"")+brl(dev)}</td></tr>`;
    }).join("") + `</tbody>`;
  if(act){ const el=document.querySelector(`[data-real="${act}"]`); if(el) el.focus(); }

  const wpPrice = recP/(r.kwp*1000);
  const liqPct = recE? liqE/recE*100 : 0;
  const mcPct = recP? mcP/recP*100 : 0;
  const diffAlvo = P.alvo ? recP-P.alvo : null;
  $("dre-kpis").innerHTML = `
    <div class="kpi main"><div class="l">Preço de venda ${P.desc>0?"(após desconto)":""}</div><div class="v">${brl(recP)}</div><div class="s">${brl2(wpPrice)} por Wp · kit ${brl(P.K)} · lucro bruto sobre o kit ${brl(P.lista-P.K)}</div></div>
    <div class="kpi"><div class="l">Margem de contribuição</div><div class="v">${num(mcPct,1)}%</div><div class="s">${brl(mcP)} após impostos e comissão</div></div>
    <div class="kpi"><div class="l">Resultado líquido ${Object.keys(REAL).length?"(com realizado)":"(previsto)"}</div><div class="v ${liqE<0?"neg":"pos"}">${brl(liqE)}</div><div class="s">${num(liqPct,1)}% da receita</div></div>
    <div class="kpi"><div class="l">Preço para ${num(P.meta*100)}% líquido</div><div class="v">${P.alvo?brl(P.alvo):"-"}</div><div class="s">${diffAlvo===null?"meta inviável com esses percentuais":(diffAlvo>=0?"você está "+brl(diffAlvo)+" acima":"faltam "+brl(-diffAlvo))}</div></div>
    <div class="kpi"><div class="l">Preço mínimo (resultado zero)</div><div class="v">${P.minimo?brl(P.minimo):"-"}</div><div class="s">${P.minimo?num(P.minimo/(r.kwp*1000),2)+" R$/Wp":""}</div></div>
    <div class="kpi"><div class="l">Preço mínimo liberado (−${num(v("desclib"),1)}%)</div><div class="v">${brl(P.lista*(1-v("desclib")/100))}</div><div class="s">${num(P.lista*(1-v("desclib")/100)/(r.kwp*1000),2)} R$/Wp · tabela ${brl(P.lista)}</div></div>`;
  $("preco-kpis").innerHTML = `<div class="kpi main"><div class="l">Preço de venda ${P.desc>0?"(após desconto)":""}</div><div class="v">${brl(recP)}</div><div class="s">${brl2(wpPrice)} por Wp</div></div><div class="kpi"><div class="l">Preço de tabela</div><div class="v">${brl(P.lista)}</div><div class="s">${num(P.lista/(r.kwp*1000),2)} R$/Wp</div></div><div class="kpi"><div class="l">Preço mínimo liberado (−${num(v("desclib"),1)}%)</div><div class="v">${brl(P.lista*(1-v("desclib")/100))}</div><div class="s">abaixo disso, só com aprovação</div></div>`;

  const segs=[{l:"Kit",v:P.K,c:"--s1"},{l:"Impostos e comissão",v:dedP,c:"--s2"},{l:"Custos da obra",v:obP,c:"--s3"},{l:"Rateio",v:raP,c:"--s4"},{l:"Resultado",v:Math.max(liqP,0),c:"--s5"}];
  const tot=segs.reduce((s,x)=>s+x.v,0)||1;
  $("stack").innerHTML = `<div class="stack" role="img" aria-label="Divisão da receita">`+segs.map(s=>`<span style="width:${s.v/tot*100}%;background:var(${s.c})"></span>`).join("")+`</div>`+
    `<div class="legend">`+segs.map(s=>`<span><i style="background:var(${s.c})"></i>${s.l}: ${num(s.v/tot*100,1)}% (${brl(s.v)})</span>`).join("")+`</div>`+
    (liqP<0?`<p class="note neg">Os custos superam a receita em ${brl(-liqP)}. Revise a margem ou os custos.</p>`:"");
  r.liqE = liqE; r.liqPct = liqPct;
}

/* ============ GRÁFICOS ============ */
function compact(n){
  const a=Math.abs(n), sg=n<0?"-":"";
  if(a>=1e6) return sg+"R$ "+num(a/1e6,1)+" mi";
  if(a>=1e3) return sg+"R$ "+num(a/1e3,0)+" mil";
  return sg+"R$ "+num(a,0);
}
function chart(r){
  const W=560,H=260,L=74,Rr=14,T=14,B=30;
  const pts = [{x:0,y:-r.invest}].concat(r.rows.map(o=>({x:o.a,y:o.acum})));
  const ys = pts.map(p=>p.y); const min=Math.min(...ys), max=Math.max(...ys);
  const span = (max-min)||1; const y0=min-span*0.05, y1=max+span*0.08;
  const X = x => L + x/r.anos*(W-L-Rr);
  const Y = y => T + (1-(y-y0)/(y1-y0))*(H-T-B);
  let s="";
  for(let i=0;i<=5;i++){
    const val=y0+(y1-y0)*i/5; const yy=Y(val);
    s+=`<line x1="${L}" x2="${W-Rr}" y1="${yy}" y2="${yy}" stroke="var(--line)" stroke-width="1"/>`;
    s+=`<text x="${L-6}" y="${yy+4}" text-anchor="end">${compact(val)}</text>`;
  }
  [0,5,10,15,20,25].forEach(a=>{ s+=`<text x="${X(a)}" y="${H-10}" text-anchor="middle">${a}</text>`; });
  s+=`<text x="${W-Rr}" y="${H-1}" text-anchor="end">anos</text>`;
  if (y0<0 && y1>0) s+=`<line x1="${L}" x2="${W-Rr}" y1="${Y(0)}" y2="${Y(0)}" stroke="var(--ink)" stroke-width="1" stroke-dasharray="4 3" opacity=".6"/>`;
  const path = pts.map((p,i)=>`${i?"L":"M"}${X(p.x).toFixed(1)} ${Y(p.y).toFixed(1)}`).join(" ");
  const base = Y(Math.max(y0,Math.min(0,y1)));
  s+=`<path d="${path} L${X(r.anos)} ${base} L${X(0)} ${base} Z" fill="var(--accent)" opacity=".12"/>`;
  s+=`<path d="${path}" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>`;
  if (r.payback!==null){
    const px=X(r.payback), py=Y(0);
    s+=`<circle cx="${px}" cy="${py}" r="5" fill="var(--sun)" stroke="var(--surface)" stroke-width="2"/>`;
    s+=`<text x="${px}" y="${py-10}" text-anchor="middle" style="fill:var(--ink);font-weight:700">payback ${num(r.payback,1)} anos</text>`;
  }
  const last=pts[pts.length-1];
  s+=`<circle cx="${X(last.x)}" cy="${Y(last.y)}" r="4" fill="var(--accent)"/>`;
  s+=`<text x="${X(last.x)-6}" y="${Y(last.y)-9}" text-anchor="end" style="fill:var(--ink);font-weight:700">${brl(last.y)}</text>`;
  return s;
}
function chartIrr(){
  const W=560,H=200,L=40,Rr=14,T=16,B=26;
  const lo=Math.floor(Math.min(...HSPM)-0.5), hi=Math.ceil(Math.max(...HSPM)+0.3);
  const X=i=>L+i/11*(W-L-Rr), Y=y=>T+(1-(y-lo)/(hi-lo))*(H-T-B);
  let s="";
  for(let y=lo;y<=hi;y++){ s+=`<line x1="${L}" x2="${W-Rr}" y1="${Y(y)}" y2="${Y(y)}" stroke="var(--line)"/><text x="${L-6}" y="${Y(y)+4}" text-anchor="end">${y}</text>`; }
  const avg=mean(HSPM);
  s+=`<line x1="${L}" x2="${W-Rr}" y1="${Y(avg)}" y2="${Y(avg)}" stroke="var(--sun)" stroke-width="1.5" stroke-dasharray="5 4"/>`;
  s+=`<text x="${W-Rr}" y="${Y(avg)-5}" text-anchor="end" style="fill:var(--ink)">média ${num(avg,2)}</text>`;
  s+=`<path d="${HSPM.map((h,i)=>`${i?"L":"M"}${X(i)} ${Y(h)}`).join(" ")}" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>`;
  HSPM.forEach((h,i)=>{ s+=`<circle cx="${X(i)}" cy="${Y(h)}" r="3.5" fill="var(--accent)"/><text x="${X(i)}" y="${H-8}" text-anchor="middle">${MESES[i]}</text>`; });
  return s;
}
function chartGen(r){
  const W=560,H=240,L=48,Rr=14,T=14,B=28;
  const max=Math.max(...r.gerM,...r.consM)*1.2;
  const bw=(W-L-Rr)/12;
  const Y=y=>T+(1-y/max)*(H-T-B);
  let s="";
  for(let i=0;i<=4;i++){ const val=max*i/4; s+=`<line x1="${L}" x2="${W-Rr}" y1="${Y(val)}" y2="${Y(val)}" stroke="var(--line)"/><text x="${L-6}" y="${Y(val)+4}" text-anchor="end">${num(val,0)}</text>`; }
  r.gerM.forEach((g,i)=>{
    const x=L+i*bw+bw*0.15;
    s+=`<rect x="${x}" y="${Y(g)}" width="${bw*0.7}" height="${H-B-Y(g)}" rx="3" fill="var(--accent)" opacity=".85"/>`;
    s+=`<text x="${L+i*bw+bw/2}" y="${Y(g)-4}" text-anchor="middle" font-size="9.5" font-weight="600" fill="currentColor">${num(g,0)}</text>`;
    s+=`<text x="${L+i*bw+bw/2}" y="${H-10}" text-anchor="middle">${MESES[i]}</text>`;
  });
  s+=`<path d="${r.consM.map((c,i)=>`${i?"L":"M"}${L+i*bw+bw/2} ${Y(c)}`).join(" ")}" fill="none" stroke="var(--sun)" stroke-width="2.5" stroke-dasharray="6 4"/>`;
  return s;
}

/* ============ RENDER ============ */
function renderStrip(r){
  const items = r ? [
    ["Sistema",`${num(r.kwp,2)} kWp · ${r.modulos} módulos`],
    ["Geração",`${num(r.gerMes)} kWh/mês`],
    ["Investimento",brl(r.invest)],
    ["Payback",r.payback===null?"> 25 anos":num(r.payback,1)+" anos"],
    ["Resultado líquido",r.liqE!==undefined?`${brl(r.liqE)} (${num(r.liqPct,1)}%)`:"-"]
  ] : [["Sistema","Preencha as entradas"]];
  $("strip").innerHTML = items.map(([l,x])=>`<div><span class="l">${l}</span><span class="v">${x}</span></div>`).join("");
}
function renderOpts(r){
  $("opts").innerHTML = r.opts.map(o=>`
    <div class="opt${o.id===r.optSel?" sel":""}">
      <div class="t">${o.nome}</div>
      <div class="big">${num(o.kwp,2)} kWp</div>
      <div>${o.ref?num(o.Nf,2):o.N} módulos de ${r.wp} Wp</div>
      <div>${num(o.ger)} kWh/mês · ${num(o.pct)}% do consumo</div>
      <div>Área útil ${num(o.area,1)} m²</div>
      <div class="d">${o.desc}</div>
      <div class="act">${o.ref?'<span class="pill mut">Referência</span>':o.id===r.optSel?'<span class="pill ok">Em uso</span>':`<button class="btn small" data-opt="${o.id}">Usar este sistema</button>`}</div>
    </div>`).join("");
  $("opts-note").textContent = "A energia gerada acima do consumo vira crédito, mas o retorno financeiro considera só a parte compensada.";
}
function render(){
  const r = R;
  $("pr-show").textContent = num(cfgPerdasTotal(),1)+"%";
  const dm = v("desclib");
  $("desc-warn").textContent = v("desc")>dm ? `Desconto acima do limite liberado de ${num(dm,1)}%. Precisa de aprovação do administrador.` : "";
  $("desc-warn").className = "note"+(v("desc")>dm?" neg":"");
  $("irr-chart").innerHTML = HSPM.length ? chartIrr() : "";
  const cid=$("cidade").value, c=CIDADES[cid];
  $("irr-note").textContent = c ? (c.m ? "Fonte: Atlas Brasileiro de Energia Solar (2017), plano inclinado na latitude, orientação norte." : "Perfil mensal estimado a partir da média anual e da latitude. Para o valor real, confira no SunData (CRESESB) e edite os meses.") : "Valores editados manualmente.";
  if(!r){ renderStrip(null); return; }
  if(typeof isAdm==="function" && !isAdm() && v("desc")>v("desclib")) $("desc").value=v("desclib");
  renderPreco();
  renderStrip(r);
  renderOpts(r);

  const okAll = r.checks.every(c=>c.ok);
  if(typeof renderEquip==="function") renderEquip(r);
  $("tbl-tec").innerHTML = `<tbody>
    <tr><td>Módulos</td><td>${r.modulos} × ${esc((r.mod.marca+" "+r.mod.modelo).trim())}</td></tr>
    <tr><td>Potência CC</td><td>${num(r.kwp,2)} kWp</td></tr>
    <tr><td>Inversor</td><td>${r.inv?`${r.qtdInv} × ${esc((r.inv.marca+" "+r.inv.modelo).trim())} (${num(r.inv.kw*r.qtdInv,1)} kW CA)`:"-"}</td></tr>
    <tr><td>Arranjo</td><td>${esc(r.arranjo)}</td></tr>
    <tr><td>Perdas de geração</td><td>${num((1-r.PR)*100,1)}%</td></tr>
    <tr><td>Área útil necessária (${esc(r.tel.nome)})</td><td>${num(r.areaTotal,1)} m²${r.comArea&&r.capT>0?` de ${num(r.capT*r.areaTotal/r.modulos,1)} m² disponíveis`:""}</td></tr>
    <tr><td>Suporta mais</td><td>${r.maisMod} módulo(s) neste inversor${r.comArea?" e na área":""}</td></tr>
    <tr><td>Verificação</td><td><span class="pill ${okAll?"ok":"warn"}">${okAll?"Dentro dos limites":"Revisar"}</span></td></tr></tbody>`;
  $("checks").innerHTML = r.checks.map(c=>`<li><span class="pill ${c.ok?"ok":"warn"}">${c.ok?"OK":"Atenção"}</span><span>${esc(c.t)}</span></li>`).join("");

  $("gen-chart").innerHTML = chartGen(r);
  const somaG=r.gerM.reduce((s,x)=>s+x,0), somaC=r.consM.reduce((s,x)=>s+x,0);
  $("tbl-gen").innerHTML = `<thead><tr><th></th>${MESES.map(m=>`<th>${m}</th>`).join("")}<th>Ano</th></tr></thead><tbody>
    <tr><td>Geração (kWh)</td>${r.gerM.map(x=>`<td>${num(x)}</td>`).join("")}<td><strong>${num(somaG)}</strong></td></tr>
    <tr><td>Consumo (kWh)</td>${r.consM.map(x=>`<td>${num(x)}</td>`).join("")}<td><strong>${num(somaC)}</strong></td></tr></tbody>`;

  $("tbl-conta").innerHTML = `
    <thead><tr><th></th><th>Antes</th><th>Depois</th></tr></thead>
    <tbody>
    <tr><td>Energia paga (kWh/mês)</td><td>${num(r.cons)}</td><td>${num(Math.max(r.cons-r.gerMes,r.fee))}</td></tr>
    <tr><td>Fio B (Lei 14.300)</td><td>-</td><td>${brl2(r.fioMes)}</td></tr>
    <tr><td>Conta mensal estimada</td><td>${brl2(r.contaAntes)}</td><td>${brl2(r.contaDepois)}</td></tr>
    ${r.rateio>0?`<tr><td>Rateio de energia (Fio B 100%)</td><td>${num(r.rateio)} kWh</td><td>${brl2(r.ecoRateioMes)} de economia</td></tr>`:""}
    <tr><td><strong>Economia mensal</strong></td><td></td><td class="pos"><strong>${brl2(r.contaAntes-r.contaDepois)}</strong></td></tr>
    </tbody>`;

  $("ret-kpis").innerHTML = `
    <div class="kpi main"><div class="l">Investimento</div><div class="v">${brl(r.invest)}</div><div class="s">${brl2(r.invest/(r.kwp*1000))} por Wp${r.desc>0?" (com desconto)":""}</div></div>
    <div class="kpi"><div class="l">Economia no 1º ano</div><div class="v">${brl(r.ecoAno1)}</div><div class="s">${brl(r.ecoMes1)} por mês</div></div>
    <div class="kpi"><div class="l">Retorno (payback)</div><div class="v">${r.payback===null?"> 25 anos":num(r.payback,1)+" anos"}</div><div class="s">${r.tir===null?"TIR indisponível":"TIR de "+num(r.tir*100,1)+"% ao ano"}</div></div>`;
  $("chart").innerHTML = chart(r);
  if(typeof renderUcsSum==="function") renderUcsSum(r);
  $("atend").innerHTML = `<span>O sistema atende <b>${num(r.atend)}%</b> da fatura${r.aum>0?` (consumo com +${num(r.aum*100)}%)`:""}</span><span class="mini">Meta de compensação ${num(v("meta"))}%</span><button class="btn alt small" type="button" data-metabtn="-5">− 5%</button><button class="btn alt small" type="button" data-metabtn="5">+ 5%</button>`;
  $("sis-info").textContent = (r.limitado?`Ajuste limitado pelo ${r.limitado}. `:"")+`Este inversor suporta mais ${r.maisMod} módulo(s) dentro da relação CC/CA de ${num(CONFIG.tec.ccaMax,2)}${r.comArea?" e da área informada":""}. Use − / + para somar ou tirar módulos, ou escolha um inversor maior.`;
  { const cur=$("invsel").value; $("invsel").innerHTML='<option value="auto">Automático (menor compatível)</option>'+CONFIG.inversores.map(i=>`<option value="${i.id}">${esc((i.marca+" "+i.modelo).trim())} · ${num(i.kw,1)} kW</option>`).join(""); if([...$("invsel").options].some(o=>o.value===cur)) $("invsel").value=cur; }
  $("chart-note").textContent = `Economia líquida em 25 anos: ${brl(r.totalEco)} (descontados Fio B, manutenção e troca do inversor).`;
  $("tbl-anos").innerHTML = `<thead><tr><th>Ano</th><th>Geração (kWh)</th><th>Tarifa (R$/kWh)</th><th>Fio B</th><th>Economia</th><th>Custos</th><th>Saldo do ano</th><th>Acumulado</th></tr></thead><tbody>`+
    r.rows.map(o=>`<tr><td>${o.year}</td><td>${num(o.ger)}</td><td>${num(o.t,2)}</td><td>${o.fio?brl(o.fio):"-"}</td><td>${brl(o.eco)}</td><td>${o.custo?brl(o.custo):"-"}</td><td>${brl(o.liq)}</td><td class="${o.acum>=0?"pos":"neg"}">${brl(o.acum)}</td></tr>`).join("")+`</tbody>`;
  renderDoc();
}

function renderDoc(){
  const r = R; if(!r) return;
  if(!$("view-prop").classList.contains("hidden")) atualizarPrev();
  return;
  const hoje = new Date().toLocaleDateString("pt-BR");
  const marcos = [1,5,10,15,20,25].map(a=>r.rows[a-1]);
  const entrega = v("prazo");
  $("doc").innerHTML = `
    <h2>${esc($("titulo").value||"Proposta comercial")}</h2>
    <div class="meta"><span>${esc(CONFIG.empresa)} · ${esc(CONFIG.contato)}</span><span>${hoje} · válida por ${num(CONFIG.validade)} dias</span></div>
    <h3>Cliente</h3>
    <p><strong>${esc($("cliente").value)}</strong>${$("ucnum").value?` · UC ${esc($("ucnum").value)}`:""}${$("ucdesc").value?` (${esc($("ucdesc").value)})`:""}<br>Local: ${esc($("cidade").value==="__custom"?"conforme irradiação informada":$("cidade").value)} · Consumo médio: ${num(r.cons)} kWh/mês · Tarifa: ${brl2(r.tar)}/kWh</p>
    <h3>Sistema proposto</h3>
    <table><tbody>
      <tr><td>Potência instalada</td><td>${num(r.kwp,2)} kWp</td></tr>
      <tr><td>Módulos fotovoltaicos</td><td>${r.modulos} × ${esc((r.mod.marca+" "+r.mod.modelo).trim())}</td></tr>
      <tr><td>Inversor</td><td>${r.inv?`${r.qtdInv} × ${esc((r.inv.marca+" "+r.inv.modelo).trim())}`:"-"}</td></tr>
      <tr><td>Área necessária</td><td>${num(r.areaTotal,1)} m²</td></tr>
      <tr><td>Geração média estimada</td><td>${num(r.gerMes)} kWh/mês (${num(r.gerMes*12)} kWh/ano)</td></tr>
      <tr><td>Garantia de desempenho dos módulos</td><td>${num(r.mod.garantia)} anos</td></tr>
      <tr><td>Prazo de entrega</td><td>${entrega>0?num(entrega)+" dias":"a combinar"}</td></tr>
    </tbody></table>
    <h3>Investimento</h3>
    <table><tbody><tr class="tot"><td>Valor total do sistema instalado</td><td>${brl2(r.invest)}</td></tr></tbody></table>
    <h3>Retorno financeiro</h3>
    <table><tbody>
      <tr><td>Conta de luz hoje (estimada)</td><td>${brl2(r.contaAntes)}</td></tr>
      <tr><td>Conta de luz com energia solar</td><td>${brl2(r.contaDepois)}</td></tr>
      <tr><td>Economia mensal</td><td>${brl2(r.contaAntes-r.contaDepois)}</td></tr>
      <tr><td>Retorno do investimento</td><td>${r.payback===null?"acima de 25 anos":num(r.payback,1)+" anos"}</td></tr>
      <tr><td>Taxa interna de retorno</td><td>${r.tir===null?"-":num(r.tir*100,1)+"% ao ano"}</td></tr>
      <tr><td>Economia líquida em 25 anos</td><td>${brl(r.totalEco)}</td></tr>
    </tbody></table>
    <svg class="chart" viewBox="0 0 560 260" style="margin-top:12px" role="img" aria-label="Fluxo de caixa acumulado">${chart(r)}</svg>
    <div class="scroll"><table style="margin-top:8px"><thead><tr><th>Ano</th><th>Economia</th><th>Custos</th><th>Acumulado</th></tr></thead><tbody>
      ${marcos.map(o=>`<tr><td>${o.year}</td><td>${brl(o.eco)}</td><td>${o.custo?brl(o.custo):"-"}</td><td>${brl(o.acum)}</td></tr>`).join("")}
    </tbody></table></div>
    <h3>Premissas</h3>
    <ul>
      <li>Irradiação média de ${num(r.hsp,2)} kWh/m²·dia e perdas de geração de ${num((1-r.PR)*100,1)}%.</li>
      <li>Reajuste tarifário de ${num(r.reaj*100,1)}% ao ano, perda de geração de ${num(r.degr*100,1)}% ao ano e simultaneidade de ${num(r.sim*100)}%.</li>
      <li>Cobrança do Fio B conforme a Lei 14.300 e custo de disponibilidade de ${num(r.fee)} kWh/mês.</li>
      <li>Inclui manutenção anual e troca do inversor no ano 12. Valores são estimativas.</li>
    </ul>`;
}

function calc(){ R = compute(); render(); if(typeof agendar==="function") agendar(); }

/* ============ EVENTOS ============ */
const sel = $("cidade");
Object.keys(CIDADES).forEach(c => { const o=document.createElement("option"); o.value=c; o.textContent=c; sel.appendChild(o); });
const custom = document.createElement("option"); custom.value="__custom"; custom.textContent="Outra (informar valores)"; sel.appendChild(custom);
sel.addEventListener("change",()=>{ if(sel.value!=="__custom") setHspm(monthlyFor(sel.value)); calc(); });
$("hsp").addEventListener("input",()=>{
  const novo=parseFloat($("hsp").value), at=mean(HSPM);
  if(novo>0 && at>0){ HSPM = HSPM.map(x=>r1(x*novo/at,2)); document.querySelectorAll("[data-hm]").forEach(el=>{ el.value=HSPM[+el.dataset.hm]; }); }
  if(!CIDADES[sel.value] || Math.abs(CIDADES[sel.value].h-novo)>0.005) sel.value="__custom";
  calc();
});
$("concsel").addEventListener("change",()=>{ applyConc(); calc(); });
["tarifa","fiob"].forEach(id=>$(id).addEventListener("input",()=>{ calc(); }));

function updateMargemLabel(){ $("margem-label").textContent = {venda:"Margem sobre o preço de venda (%)",markup:"Markup sobre o custo do kit (%)",rs:"Lucro sobre o kit (R$)"}[$("metodo").value]; }
$("metodo").addEventListener("change",()=>{
  if(R){ const K=R.P.K, L=R.P.lista, m=$("metodo").value;
    $("margem").value = m==="venda" ? r1((L-K)/L*100,1) : m==="markup" ? r1((L-K)/K*100,1) : Math.round(L-K); }
  updateMargemLabel(); calc();
});

document.querySelectorAll("#view-ent input:not([data-own]), #view-ent select:not([data-own]), #view-ent textarea, #view-preco .fields input:not([data-own]), #view-preco .fields select:not([data-own]), #view-dre .fields input:not([data-own]), #view-dre .fields select:not([data-own])").forEach(e=>e.addEventListener("input",calc));
$("opts").addEventListener("click",e=>{ const b=e.target.closest("[data-opt]"); if(!b) return; OPT=b.dataset.opt; $("madd").value=0; calc(); });
document.addEventListener("click",e=>{
  const m=e.target.closest("[data-metabtn]"); if(m){ const x=Math.min(150,Math.max(10,(v("meta")||100)+(+m.dataset.metabtn))); $("meta").value=x; calc(); return; }
  const a=e.target.closest("[data-madd]"); if(a){ $("madd").value=(parseInt($("madd").value)||0)+(+a.dataset.madd); calc(); }
});
$("madd").addEventListener("input",()=>calc()); $("invsel").addEventListener("change",()=>calc());
$("irr-tog").onclick=()=>{ const s=$("irr-chart"), on=s.style.display==="none"; s.style.display=on?"block":"none"; $("irr-tog").textContent=on?"Ocultar gráfico de irradiação":"Mostrar gráfico de irradiação"; $("irr-tog").setAttribute("aria-expanded",on); };

const VIEWS = ["ent","sis","preco","dre","prop","conf"];
function show(which){
  VIEWS.forEach(n=>{
    $("view-"+n).classList.toggle("hidden",n!==which);
    $("tab-"+n).setAttribute("aria-selected",n===which);
  });
  $("strip").style.display = "none";
  if(which==="prop") renderDoc();
  if(which==="preco"||which==="dre") renderPreco();
}
VIEWS.forEach(n=>$("tab-"+n).onclick=()=>show(n));
document.querySelectorAll("#subtabs button").forEach(b=>b.onclick=()=>{
  document.querySelectorAll("#subtabs button").forEach(x=>x.setAttribute("aria-selected",x===b));
  ["com","tec","eqp","tar"].forEach(n=>$("sub-"+n).classList.toggle("hidden",n!==b.dataset.sub));
});

function flash(el,msg){ el.textContent=msg; setTimeout(()=>el.textContent="",3500); }
$("cfg-copy").onclick = async () => {
  const txt = JSON.stringify({config:CONFIG, custos:COSTS},null,2);
  try { await navigator.clipboard.writeText(txt); flash($("conf-toast"),"Configurações copiadas."); }
  catch(e){ flash($("conf-toast"),"Não foi possível copiar neste navegador."); }
};
let resetArm=false;
$("cfg-reset").onclick = () => {
  const b=$("cfg-reset");
  if(!resetArm){ resetArm=true; b.textContent="Confirmar restauração"; setTimeout(()=>{resetArm=false;b.textContent="Restaurar padrões";},4000); return; }
  resetArm=false; b.textContent="Restaurar padrões";
  CONFIG=clone(DEF); saveCfg(); initUI(); calc(); flash($("conf-toast"),"Padrões restaurados.");
};

function initUI(){
  fillCfgFields();
  Object.keys(EDITORS).forEach(renderEditorTable);
  refreshSelects();
  syncFromConfig();
  $("concsel").value = CONFIG.conc[0] ? CONFIG.conc[0].id : "__custom";
  applyConc();
}
buildMonthInputs();
bindEditors(); bindCfgFields();
initUI(); renderEditor();
sel.value = "Ibirubá (RS)"; setHspm(monthlyFor("Ibirubá (RS)"));
updateMargemLabel();
calc();

/* ============ PROPOSTA ON (modelo próprio, paleta da empresa) ============ */
let LOGO = "assets/on-logo.png", LOGO_ESSOR = "assets/essor-logo.png";
async function dataUrl(path){
  try{ const r=await fetch(path); const b=await r.blob();
    return await new Promise(res=>{ const f=new FileReader(); f.onload=()=>res(f.result); f.readAsDataURL(b); }); }catch(e){ return new URL(path,location.href).href; }
}
async function carregarLogo(){ LOGO = await dataUrl("assets/on-logo.png"); LOGO_ESSOR = await dataUrl("assets/essor-logo.png"); }
function propInfo(){
  const conc=CONFIG.conc.find(c=>c.id===$("concsel").value);
  const lig={"30":"Monofásico","50":"Bifásico","100":"Trifásico"}[$("padrao").value];
  const temMes=[...document.querySelectorAll("[data-cm]")].some(e=>parseFloat(e.value)>0);
  const g=id=>($(id).value||"").trim();
  return {nome:g("cliente")||"Cliente", end:g("pend")||"Endereço a informar", cid:g("pcid")||"—", cep:g("pcep")||"—",
    uc:g("ucnum")||"—", dist:conc?conc.nome:"Concessionária", classe:g("pclasse")||"Residencial (B1 convencional)", lig, minimo:+$("padrao").value,
    refmes:g("pref")||"referência", fatura:g("pfat")||"—", hist:temMes?"os meses informados":"consumo médio informado", nota:g("pnota"),
    tarifaNota:"Tarifa com impostos informada para esta simulação, sem bandeira tarifária.", fioNota:""};
}
/* ============ PROPOSTA ON: 3 folhas A4, capa branca (boa para imprimir) + seguro opcional (2 folhas) ============ */
const P_EMP = {razao:"Vmc Projetos e Instalações Elétricas Ltda", cnpj:"61.702.854/0001-04", end:"Vl. Arroio Grande, Interior · Ibirubá/RS · CEP 98200-000"};
function pmt(P,i,n){ return P*i/(1-Math.pow(1+i,-n)); }
function npv(rate,flows){ return flows.reduce((s,c,k)=>s+c/Math.pow(1+rate,k),0); }
const pesc = s => String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

/* ---- ilustrações da capa (pouca tinta, só contorno) ---- */
function capaArte(estilo, img){
  if(estilo==="nenhum") return "";
  if(estilo==="imagem" && img) return `<div class="arte"><img src="${img}" alt=""></div>`;
  if(estilo==="paineis"){
    let g="";
    for(let r=0;r<3;r++) for(let c=0;c<6;c++){
      const x=150+c*56+r*18, y=128+r*36;
      g+=`<path d="M${x+18} ${y-32} L${x+70} ${y-32} L${x+52} ${y} L${x} ${y} Z" fill="url(#pg)" stroke="#fff" stroke-width="1.6"/><path d="M${x+35} ${y-32} L${x+26} ${y} M${x+9} ${y-16} L${x+61} ${y-16}" stroke="#fff" stroke-opacity=".7" stroke-width=".8" fill="none"/>`;
    }
    let rays=""; for(let k=0;k<14;k++){ const a=k*Math.PI/7, x1=92+Math.cos(a)*38, y1=62+Math.sin(a)*38, x2=92+Math.cos(a)*(k%2?50:56), y2=62+Math.sin(a)*(k%2?50:56); rays+=`<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#f2b01e" stroke-width="3" stroke-linecap="round"/>`; }
    return `<div class="arte"><svg viewBox="0 0 560 230" role="img" aria-label="Painéis solares"><defs><linearGradient id="pg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d6eaf8"/><stop offset="1" stop-color="#64ABDE"/></linearGradient><radialGradient id="sg"><stop offset="0" stop-color="#ffe08a"/><stop offset="1" stop-color="#f2b01e"/></radialGradient></defs><circle cx="92" cy="62" r="30" fill="url(#sg)"/>${rays}<path d="M120 214 L540 214" stroke="#1D3140" stroke-width="2" stroke-linecap="round"/>${g}</svg></div>`;
  }
  // aneis (padrão): inspirado no "O" da marca
  return `<div class="arte"><svg viewBox="0 0 560 230" role="img" aria-label="Energia solar"><g fill="none" stroke="#64ABDE">
    <circle cx="280" cy="115" r="108" stroke-width="1" stroke-opacity=".5"/><circle cx="280" cy="115" r="84" stroke-width="1.2" stroke-opacity=".65"/><circle cx="280" cy="115" r="60" stroke-width="2.4" stroke-opacity=".85"/><circle cx="280" cy="115" r="36" stroke-width="1.2" stroke-opacity=".7"/></g>
    <circle cx="280" cy="115" r="20" fill="#64ABDE"/>
    <g stroke="#1D3140" stroke-width="2" stroke-linecap="round"><line x1="40" y1="115" x2="140" y2="115"/><line x1="420" y1="115" x2="520" y2="115"/></g></svg></div>`;
}

/* ---- seguro (portado do gerador de seguro da ON) ---- */
const SEG_BASE = 28000;
const SEG_VIG = [[535.30,267.65,178.44,133.84,null],[1017.09,508.55,339.03,254.28,203.41],[1450.63,725.31,483.55,362.65,290.11],[1841.44,920.72,613.82,460.36,368.28],[2194.72,1097.36,731.58,548.68,438.96]];
const SEG_COB = [
  ["Cobertura básica","Incêndio, queda de raio, explosão de qualquer natureza, vendaval até granizo, alagamento/inundação, impacto de veículos",1.00,369.40,"basica"],
  ["Danos elétricos","",0.30,49.85,"10% dos prejuízos indenizáveis por sinistro, mínimo de R$ 500,00"],
  ["Roubo / furto qualificado","",0.50,59.82,"20% dos prejuízos indenizáveis por sinistro, mínimo de R$ 500,00"],
  ["Despesas extras","",0.05,19.44,"10 dias, período indenitário de 30 dias"],
  ["Despesas de salvamento e contenção de sinistro","",0.10,0,"Não se aplica"]];
const segRound = x => Math.round((x+1e-9)*100)/100;
const segBRL = x => "R$ "+x.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2});
function segCalc(proj,anual){
  const refTot=SEG_COB.reduce((t,x)=>t+x[3],0), liq=anual>0?anual/1.0738:0;
  const cob=SEG_COB.map(c=>({nome:c[0],det:c[1],lmi:segRound(proj*c[2]),premio:anual>0?segRound(liq*c[3]/refTot):null,
    franq:c[4]==="basica"?(proj>100000?"10% dos prejuízos por sinistro, mínimo de R$ 3.000,00. 20%, mínimo de R$ 5.000,00, para vendaval, furacão, ciclone e granizo":"10% dos prejuízos por sinistro, mínimo de R$ 500,00. 20%, mínimo de R$ 1.000,00, para vendaval, furacão, ciclone e granizo"):c[4]}));
  return {cob,premioLiq:anual>0?segRound(anual/1.0738):null};
}
function segDados(){
  const g=id=>{ const s=($(id).value||"").replace(/[^\d,.]/g,""); const n=parseFloat(s.includes(",")?s.replace(/\./g,"").replace(",","."):s); return isFinite(n)?n:0; };
  return {on:$("seg-on").checked, proj:g("seg-proj")||(R?Math.round(R.invest):0), vig:[1,2,3,4,5].map(n=>g("seg-v"+n)), cond:($("seg-cond").value||"").trim()};
}

function paginasSeguro(nome, seg, total, startN, logo){
  const R_=segCalc(seg.proj,seg.vig[0]||0), com=R_.premioLiq!=null;
  const prot=[["Defeitos de fabricação","",1,0],["Incêndio","",0,1],["Explosão","",0,1],["Queda de raio","",0,1],["Vendaval","limitado a 50% do valor do projeto",0,1],["Granizo","limitado a 50% do valor do projeto",0,1],["Furacão","limitado a 50% do valor do projeto",0,1],["Ciclone","limitado a 50% do valor do projeto",0,1],["Impacto de veículos","",0,1],["Inundação","",0,1],["Alagamento","",0,1],["Roubo / furto qualificado","limitado a 50% do valor do projeto",0,1],["Danos elétricos","limitado a 30% do valor do projeto",0,1],["Despesas extras","limitado a 5% do valor do projeto",0,1],["Mão de obra do integrador","em caso de sinistro",0,1]];
  const ok='<i class="ck ok">✓</i>', no='<i class="ck no">✕</i>';
  const rows=r=>`<tr><td><b>${pesc(r.nome)}</b>${r.det?`<small>${pesc(r.det)}</small>`:""}</td><td class="n">${segBRL(r.lmi)}</td><td class="fr">${pesc(r.franq)}</td>${com?`<td class="n">${segBRL(r.premio)}</td>`:""}</tr>`;
  const head=t=>`<thead><tr><th>${t}</th><th class="n">Limite (LMI)</th><th>Franquia (P.O.S.)</th>${com?'<th class="n">Prêmio líquido</th>':""}</tr></thead>`;
  const p1=`<h2>Seguro solar</h2><p class="lead">Riscos Diversos Equipamentos: o que o seguro cobre. Valor do projeto: <b>${segBRL(seg.proj)}</b></p>
    <table class="data prot"><thead><tr><th>Proteção</th><th class="c">Garantia</th><th class="c">Seguro</th></tr></thead><tbody>${prot.map(r=>`<tr><td><b>${r[0]}</b>${r[1]?` <small class="in">(${r[1]})</small>`:""}</td><td class="c">${r[2]?ok:no}</td><td class="c">${r[3]?ok:no}</td></tr>`).join("")}</tbody></table>
    <table class="data cob">${head("Cobertura básica")}<tbody>${rows(R_.cob[0])}</tbody></table>
    <table class="data cob">${head("Coberturas adicionais")}<tbody>${R_.cob.slice(1).map(rows).join("")}</tbody></table>
    ${com?`<p class="tot2"><span>Prêmio líquido total anual (sem IOF)</span><b>${segBRL(R_.premioLiq)}</b></p>`:""}
    <p class="small">Seguradora parceira: <img src="${LOGO_ESSOR}" alt="Seguradora" style="height:9mm;vertical-align:middle;margin-left:6px"></p>`;
  const VIG=seg.vig.map((t,i)=>({anos:i+1,total:t,parc:[2,3,4,5].map(n=>(i===0&&n>4)?null:segRound(t/n))})).filter(r=>r.total>0);
  const p2=`<h2>Investimento no seguro</h2><p class="lead">Cotação para projeto de <b>${segBRL(seg.proj)}</b>. Valores por vigência e parcelamento.</p>
    <table class="data"><thead><tr><th>Vigência</th><th class="n">À vista</th><th class="n">2x</th><th class="n">3x</th><th class="n">4x</th><th class="n">5x</th></tr></thead><tbody>
    ${VIG.map(r=>`<tr><td><b>${r.anos===1?"Anual":"Plurianual "+r.anos+" anos"}</b></td><td class="n"><b>${segBRL(r.total)}</b></td>${r.parc.map(x=>`<td class="n">${x==null?"-":segBRL(x)}</td>`).join("")}</tr>`).join("")}</tbody></table>
    <p class="small">Forma de pagamento: ficha de compensação. A primeira parcela vence 7 dias após a emissão e as demais a cada 30 dias. Valores com IOF incluso, parcelas sem juros.${seg.cond?" "+pesc(seg.cond):""}</p>
    <div class="callout"><b>Importante.</b> Os valores desta cotação são uma estimativa e podem sofrer pequenas variações até a contratação, conforme as condições da seguradora e a confirmação dos dados do sistema na emissão da apólice.</div>
    <h3 class="sub">Termo de aceite do seguro</h3>
    <p class="small" style="font-size:11px;color:#1D3140">Declaro que li e compreendi as coberturas, limites e franquias apresentados nesta proposta e aceito a contratação do Seguro de Riscos Diversos Equipamentos para o meu sistema fotovoltaico, na vigência e forma de pagamento escolhidas abaixo. Estou ciente de que a contratação está sujeita à análise e aceitação da seguradora e de que as condições definitivas constam na apólice.</p>
    <p class="chk"><b>Vigência:</b> ${VIG.map(r=>`<span><i class="bx"></i>${r.anos===1?"1 ano":r.anos+" anos"}</span>`).join("")}</p>
    <p class="chk"><b>Pagamento:</b> ${["À vista","2x","3x","4x","5x"].map(t=>`<span><i class="bx"></i>${t}</span>`).join("")}</p>
    <p class="chk"><span><i class="bx"></i>Aceito a contratação do seguro</span><span><i class="bx"></i>Não desejo contratar o seguro</span></p>
    <div class="sign"><div><i></i><span>Assinatura do cliente</span></div><div><i></i><span>Data</span></div></div>`;
  return [p1,p2];
}

/* ================= PROPOSTA v3: completa (uma etapa por página) e resumida ================= */
function iconProd(t){
  const a='fill="#64ABDE" fill-opacity=".28"', s='stroke="#1D3140" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"';
  const W=x=>`<svg viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true">${x}</svg>`;
  if(t==="mod") return W(`<path d="M12 8 H38 L42 36 H8 Z" ${a} ${s}/><path d="M18.5 8 L16 36 M25 8 V36 M31.5 8 L34 36 M10 15.5 H40 M9 26 H41" ${s} stroke-width="1.4"/><path d="M24 36 V42 M16 42 H32" ${s}/>`);
  if(t==="inv") return W(`<rect x="10" y="6" width="28" height="34" rx="5" ${a} ${s}/><path d="M15 19 q3-6 6 0 t6 0 t6 0" ${s}/><circle cx="16" cy="29" r="1.6" fill="#1D3140"/><circle cx="22" cy="29" r="1.6" fill="#64ABDE"/><path d="M16 44 V40 M24 44 V40 M32 44 V40" ${s}/>`);
  if(t==="cabo") return W(`<ellipse cx="20" cy="26" rx="14" ry="10" ${s}/><ellipse cx="20" cy="26" rx="8" ry="5" ${s}/><path d="M33 20 C38 16 40 14 44 14 M34 28 C38 30 41 31 44 31" ${s}/><rect x="40" y="10" width="6" height="8" rx="2" ${a} ${s} stroke-width="1.8"/>`);
  if(t==="estr") return W(`<path d="M4 20 L24 8 L44 20" ${s}/><path d="M9 24 H39 M9 33 H39" ${s} stroke-width="3.2"/><path d="M15 24 V40 M24 24 V40 M33 24 V40" ${s}/><rect x="13" y="21" width="4" height="3" ${a} ${s} stroke-width="1.4"/><rect x="31" y="21" width="4" height="3" ${a} ${s} stroke-width="1.4"/>`);
  if(t==="prot") return W(`<rect x="8" y="5" width="32" height="38" rx="4" ${s}/><rect x="13" y="11" width="6" height="11" rx="1" ${a} ${s} stroke-width="1.6"/><rect x="21" y="11" width="6" height="11" rx="1" ${a} ${s} stroke-width="1.6"/><rect x="29" y="11" width="6" height="11" rx="1" ${a} ${s} stroke-width="1.6"/><path d="M13 30 H35 M13 36 H35" ${s} stroke-width="1.6"/>`);
  return W(`<path d="M6 22 L24 8 L42 22 V40 H6 Z" ${a} ${s}/><path d="M25 18 L19 28 H26 L22 37" ${s}/>`);
}
function capaModelo(M,pill,nome,local){
  const k=210/M.W, mm=v=>(v*k).toFixed(2)+"mm", bx=M.bar[0], by=M.bar[1], bl=M.bar[2], left=bx+35*M.W/1055;
  const src=(typeof CAPA_B64!=="undefined"&&CAPA_B64[M.id])||capaUrl(M.id);
  const nm=String(nome||""), ad=String(local||"");
  const fN=bl*.26*Math.min(1,Math.max(.6,22/Math.max(nm.length,1))), fL=bl*.175, fA=bl*.175*Math.min(1,Math.max(.7,34/Math.max(ad.length,1)));
  const ph=M.pill[3]-M.pill[1], pw=M.pill[2]-M.pill[0], fP=Math.min(ph*.42, pw*.86/(.6*Math.max(pill.length,1)));
  const T=(y,fs,col,wt,txt)=>`<div class="cvt" style="left:${mm(left)};top:${mm(y)};font-size:${mm(fs)};color:${col};font-weight:${wt}">${pesc(txt)}</div>`;
  return `<section class="pg cover cvimg"><img class="cvbg" src="${src}" alt="">
    <div class="cvp" style="left:${mm(M.pill[0])};top:${mm(M.pill[1])};width:${mm(pw)};height:${mm(ph)};font-size:${mm(fP)}">${pesc(pill)}</div>
    ${T(by+.16*bl,fL,M.cl,500,"Preparada para")}${T(by+.54*bl,fN,M.cn,700,nm)}${ad?T(by+.86*bl,fA,M.cl,500,ad):""}
  </section>`;
}
function propInfo(){
  const conc=CONFIG.conc.find(c=>c.id===$("concsel").value);
  const lig={"30":"Monofásico","50":"Bifásico","100":"Trifásico"}[$("padrao").value];
  const g=id=>($(id).value||"").trim();
  const _t=$("tensao"); const tensao=(_t&&_t.selectedOptions[0])?_t.selectedOptions[0].textContent:"";
  return {tensao,nome:g("cliente")||"Cliente", end:g("pend")||"", cid:g("pcid")||"", cep:g("pcep")||"", uc:g("ucnum")||"—", dist:conc?conc.nome:"Concessionária", lig, minimo:+$("padrao").value};
}
function propRef(){ const d=new Date(), p2=n=>String(n).padStart(2,"0"); return "P"+String(d.getFullYear()).slice(2)+p2(d.getMonth()+1)+"-"+((typeof NEG!=="undefined"&&NEG)?NEG.replace(/-/g,"").slice(0,4).toUpperCase():"0000"); }
const PP = () => { const o=Object.assign({}, DEF.prop, CONFIG.prop||{}); ["resp","crea","assin","razao","cnpj"].forEach(k=>{ if(!o[k]) o[k]=DEF.prop[k]; }); return o; };
function tabelaPrice(P,i,n){
  const pm=i>0?pmt(P,i,n):P/n; let saldo=P, jA=0, aA=0, ini=1; const anos=[];
  for(let k=1;k<=n;k++){ const j=saldo*i, a=pm-j; saldo-=a; jA+=j; aA+=a;
    if(k%12===0||k===n){ anos.push({ano:Math.ceil(k/12),parc:k-ini+1,pagto:pm*(k-ini+1),juros:jA,amort:aA,saldo:Math.max(0,saldo)}); jA=0;aA=0;ini=k+1; } }
  return {pm,anos,total:pm*n,juros:pm*n-P};
}
function finAtivo(){ const e=$("pr-fin"); return !e||e.checked; }
function finOpcoes(r){ if(!finAtivo()) return []; return (CONFIG.financeiras||[]).slice(0,3).map((f,ix)=>{ const ck=$("pr-fin"+ix); if(ck&&!ck.checked) return null; return (f=>f)(f); }).filter(Boolean).map(f=>{ const n=Math.max(1,+f.prazo||60), i=(+f.taxa||0)/100, ent=(+f.entrada||0)/100, entV=r.invest*ent, P=r.invest-entV, t=tabelaPrice(P,i,n); return {nome:f.nome,n,i,ent,entV,P,t}; }); }
function basesTxt(r){ return `<b>Importante:</b> os valores da tabela são estimados. * Inflação anual (reajuste da tarifa): ${num(r.reaj*100,2)}%. ** Simultaneidade de ${num(r.sim*100,2)}%. *** Conforme especificação dos fabricantes, os módulos podem perder até 20% de eficiência em 25 anos (considerado ${num(r.degr*100,2)}% ao ano). **** Após ${CONFIG.fioB.length?Math.max(...CONFIG.fioB.map(x=>+x.ano)):2028}, considera-se a continuidade do pagamento de ${num(CONFIG.fioBDemais,0)}% do Fio B.${r.aum>0?` Considerado aumento de consumo de ${num(r.aum*100,1)}%.`:""}`; }
function bancosHtml(){ if(!finAtivo()) return ""; const b=PP().bancos||[]; return `<div class="bks">${b.map(x=>x.logo?`<span class="bk"><img src="${x.logo}" alt="${pesc(x.nome)}"></span>`:`<span class="bk t">${pesc(x.nome)}</span>`).join("")}</div>`; }
function chartParcela(r,fins,FC){
  fins=Array.isArray(fins)?fins:(fins?[fins]:[]); FC=FC||["#1D3140","#8aa0b3","#2a8f9d"];
  const maxA=Math.min(25,Math.max(5,Math.ceil(r.payback||5)+1,...fins.map(f=>Math.ceil(f.n/12)))), W=560,H=215,L=48,B=24,T=10,iw=W-L-8,ih=H-B-T;
  const eco=[],par=fins.map(()=>[]); for(let a=1;a<=maxA;a++){ eco.push(r.rows[a-1].eco); fins.forEach((f,k)=>par[k].push(a<=Math.ceil(f.n/12)?f.t.anos[a-1].pagto:0)); }
  const mx=Math.max(...eco,...par.flat(),1)*1.1, bw=iw/maxA, x=a=>L+(a-1)*bw, sw=bw*.8/(1+fins.length);
  let s=""; for(let k=0;k<=4;k++){ const yy=T+ih*(1-k/4); s+=`<line x1="${L}" x2="${W-8}" y1="${yy}" y2="${yy}" stroke="#dce8f3"/><text x="${L-4}" y="${yy+3}" text-anchor="end">${num(mx*k/4/1000,1)} mil</text>`; }
  for(let a=1;a<=maxA;a++){ const h1=ih*eco[a-1]/mx; s+=`<rect x="${x(a)+bw*.1}" y="${T+ih-h1}" width="${sw}" height="${h1}" fill="#64ABDE"/>`;
    fins.forEach((f,k)=>{ const h2=ih*par[k][a-1]/mx; if(par[k][a-1]>0) s+=`<rect x="${x(a)+bw*.1+sw*(k+1)}" y="${T+ih-h2}" width="${sw}" height="${h2}" fill="${FC[k]}"/>`; });
    s+=`<text x="${x(a)+bw/2}" y="${H-8}" text-anchor="middle">${a}</text>`; }
  return s+`<text x="${L+iw/2}" y="${H}" text-anchor="middle" font-size="9">anos</text>`;
}
function chartRetorno(r,pp){
  const iC=(pp.cdi/100)*(pp.cdbPct/100)*(1-pp.ir/100), iP=pp.poup/100, I0=r.invest, N=25;
  const solar=[0], cdb=[I0], poup=[I0]; for(let t=1;t<=N;t++){ solar.push(solar[t-1]*(1+iC)+r.rows[t-1].liq); cdb.push(I0*Math.pow(1+iC,t)); poup.push(I0*Math.pow(1+iP,t)); }
  const W=560,H=215,L=52,B=22,T=10,iw=W-L-8,ih=H-B-T, mx=Math.max(...solar,...cdb,...poup)*1.05, xx=t=>L+t/N*iw, yy=v_=>T+ih-(v_/mx)*ih;
  const pl=(a,c,dash)=>`<polyline fill="none" stroke="${c}" stroke-width="2.2" ${dash?'stroke-dasharray="5 4"':""} points="${a.map((v_,t)=>xx(t).toFixed(1)+","+yy(v_).toFixed(1)).join(" ")}"/>`;
  let s=""; for(let k=0;k<=4;k++){ const y_=T+ih*(1-k/4); s+=`<line x1="${L}" x2="${W-8}" y1="${y_}" y2="${y_}" stroke="#dce8f3"/><text x="${L-4}" y="${y_+3}" text-anchor="end">${num(mx*k/4/1000,0)} mil</text>`; }
  for(let t=0;t<=N;t+=5) s+=`<text x="${xx(t)}" y="${H-6}" text-anchor="middle">${t}</text>`;
  return {svg:s+pl(poup,"#8aa0b3",true)+pl(cdb,"#1D3140",true)+pl(solar,"#64ABDE"), solar, cdb, poup, iC, iP};
}
function paginaAceite(r,I,hoje,validade,ref,pp,dataVer){
  const sg=segDados(), comSg=sg.on&&sg.vig.some(x=>x>0), vigs=sg.vig.map((x,i)=>x>0?`<span><i class="bx"></i>${i+1} ${i?"anos":"ano"}</span>`:"").join("");
  const segRow=comSg?`<p class="chk"><b>Seguro solar:</b> <span><i class="bx"></i>Contratar</span><span><i class="bx"></i>Não contratar</span> &nbsp;·&nbsp; <b>Vigência:</b> ${vigs}</p>`:"";
  const finOpt=finAtivo()?`<span><i class="bx"></i>Financiamento</span>`:"";
  return `<h2>Aceite da proposta</h2>
    <p class="lead">Proposta <b>${ref}</b> · emitida em ${dataVer} · válida até ${validade}</p>
    <table class="kv"><tbody>
      <tr><td>Contratante</td><td>${pesc(I.nome)}</td></tr>
      <tr><td>CPF / CNPJ</td>${window.CAD_DOC?`<td>${pesc(window.CAD_DOC)}</td>`:`<td class="blank"></td>`}</tr>
      <tr><td>Endereço da instalação</td><td>${pesc([I.end,I.cid,I.cep].filter(Boolean).join(" · "))||"&nbsp;"}</td></tr>
      <tr><td>Contratada</td><td>${pesc(pp.razao)} · CNPJ ${pesc(pp.cnpj)}</td></tr>
      <tr><td>Objeto</td><td>Fornecimento, instalação e homologação de sistema fotovoltaico de ${num(r.kwp,2)} kWp (${r.modulos} módulos de ${r.mod.wp} Wp e ${r.qtdInv} inversor de ${num(r.inv.kw,1)} kW)</td></tr>
      <tr><td>Valor</td><td><b>${brl2(r.invest)}</b></td></tr>
      <tr><td>Prazo de entrega</td><td>${v("prazo")||45} dias após a contratação</td></tr>${comSg?`<tr><td>Seguro solar</td><td>Opcional · valor do projeto segurado ${brl2(sg.proj)}${sg.cond?" · "+pesc(sg.cond):""}</td></tr>`:""}
    </tbody></table>
    <p class="small" style="font-size:10.5px;color:#1D3140;margin:12px 0 4px">Declaro que li e estou de acordo com os produtos, quantidades, valores e condições descritos nesta proposta. Estou ciente de que as marcas e modelos finais são confirmados na cotação com o fornecedor antes da assinatura, de que materiais sem disponibilidade poderão ser substituídos por equivalentes de especificação técnica equivalente ou superior, e de que o financiamento, quando escolhido, está sujeito à aprovação de crédito.</p>
    <p class="chk"><b>Forma de pagamento:</b> <span><i class="bx"></i>À vista</span>${finOpt}<span><i class="bx"></i>Outra: ______________</span></p>
    ${segRow}
    <p class="small" style="font-size:10.5px">Local e data: ______________________________, ____ / ____ / ________</p>
    <div class="sign big"><div><i></i><span>${pesc(I.nome)}<br>Contratante</span></div>
      <div>${pp.assin?`<img src="${pp.assin}" class="assin" alt="">`:""}<i></i><span>${pesc(pp.resp||"Responsável técnico")}${pp.crea?" · "+pesc(pp.crea):""}<br>${pesc(pp.razao)} · CNPJ ${pesc(pp.cnpj)}</span></div></div>
    <p class="small" style="margin-top:14px">Testemunhas (opcional): ______________________ &nbsp; ______________________</p>`;
}
function propostaHTML(){
  const modo=($("pr-modo")?$("pr-modo").value:"completa")||"completa";
  const r=R, I=propInfo(), cap=CONFIG.capa||{}, seg=segDados(), pp=PP(), ref=(window.GC_NUM?("nº "+window.GC_NUM):propRef())+" · versão "+(propVer()||1), dataVer=($("pr-verdata").value||new Date().toLocaleDateString("pt-BR"));
  const _h=new Date(), _v=new Date(_h.getTime()+(+CONFIG.validade||10)*864e5), hoje=_h.toLocaleDateString("pt-BR"), validade=_v.toLocaleDateString("pt-BR");
  const nome=I.nome, mod=r.mod, inv=r.inv, kwh12=r.gerM.reduce((s,x)=>s+x,0);
  const fins=finOpcoes(r), fin1=fins[0];
  const pbMeses=r.payback===null?null:Math.round(r.payback*12), _a=r.payback===null?0:Math.floor(pbMeses/12), _m=r.payback===null?0:pbMeses%12;
  const pbTxt=r.payback===null?"acima de 25 anos":(_a===0?`${_m} meses`:`${_a} ${_a===1?"ano":"anos"}${_m?` e ${_m} ${_m===1?"mês":"meses"}`:""}`);
  const comSeg=seg.on&&seg.vig.some(x=>x>0);
  const local=[I.end,I.cid].filter(Boolean).join(" · ");
  const _cid=(typeof capaAtual==="function")?capaAtual():"", _CM=(typeof CAPAS!=="undefined")?CAPAS.find(c=>c.id===_cid):null;
  const pillTxt="Proposta "+(window.GC_NUM?window.GC_NUM:propRef())+" · v"+(propVer()||1);
  const capaSvg=`<section class="pg cover">
    <div class="cv-top"><img src="${LOGO}" alt="ON Engenharia" class="cv-logo"><span class="cv-badge">Proposta ${pesc(ref)}</span></div>
    <div class="cv-main">
      <p class="eyebrow">${pesc(cap.titulo||"Energia solar fotovoltaica")}</p>
      <h1>Proposta<br>comercial</h1>
      <div class="cv-client"><span>Preparada para</span><strong>${pesc(nome)}</strong><em>${pesc(local)}</em></div>
    </div>
    ${capaArte(cap.estilo||"aneis",cap.imagem)}
    ${cap.campanha?`<div class="camp"><b>${pesc(cap.campanha)}</b>${cap.detalhe?`<span>${pesc(cap.detalhe)}</span>`:""}</div>`:""}
    <div class="cv-foot"><span>Emitida em ${dataVer} · válida até ${validade}</span><span>${pesc(CONFIG.empresa||"ON Engenharia")}</span><span>${pesc(CONFIG.contato||"")}</span></div>
  </section>`;
  const capaHtml=_CM?capaModelo(_CM,pillTxt,nome,local):capaSvg;
  const kp4=`<div class="kpis4"><div><b>${num(r.kwp,2)} kWp</b><span>potência</span></div><div><b>${r.modulos} módulos</b><span>de ${mod.wp} Wp</span></div><div><b>${num(r.gerMes+r.rateio)} kWh</b><span>geração por mês${r.rateio>0?" (inclui rateio)":""}</span></div><div><b>${num(r.areaTotal,0)} m²</b><span>área necessária</span></div></div>`;
  const faces=r.al.faces.filter(f=>f.n>0).map(f=>`${ORI[f.ori][0]} (${f.n})`).join(" · ")||"Norte";
  const detalhes=`<table class="kv"><tbody>
      <tr><td>Concessionária</td><td>${pesc(I.dist)} · UC ${pesc(I.uc)} · ${I.lig}</td></tr>
      ${I.tensao?`<tr><td>Rede de baixa tensão</td><td>${pesc(I.tensao)}</td></tr>`:""}
      <tr><td>Consumo médio mensal</td><td><b>${num(v("consumo"))} kWh</b>${r.aum>0?` · considerado aumento de <b>${num(r.aum*100,1)}%</b> (${num(r.cons)} kWh)`:""} · tarifa R$ ${num(r.tar,4)}/kWh (com impostos)</td></tr>
      ${r.rateio>0?`<tr><td>Rateio de energia</td><td>${num(r.rateio)} kWh/mês recebidos de outra unidade geradora</td></tr>`:""}
      <tr><td>Local e irradiação</td><td>${pesc(I.cid||"—")} · ${num(r.hsp,2)} kWh/m²·dia</td></tr>
      <tr><td>Equipamentos</td><td>${r.modulos} módulos de ${mod.wp} Wp · ${r.qtdInv} inversor de ${num(inv.kw,1)} kW (${inv.fases===1?"monofásico":inv.fases===2?"bifásico":"trifásico"})</td></tr>
      <tr><td>Instalação</td><td>Área útil necessária de ${num(r.areaTotal,1)} m² · ${pesc(r.tel.nome)}</td></tr>
      <tr><td>Atendimento da fatura</td><td>${num(r.atend)}% do consumo compensado</td></tr>
    </tbody></table>`;
  const linhas=[1,5,10,15,20,25].map(a=>{const o=r.rows[a-1]; const sem=r.cons*12*o.t; const com=sem-o.eco; return `<tr><td>${o.year}</td><td>${num(o.ger)}</td><td>${brl(sem)}</td><td>${brl(com)}</td><td><b>${brl(o.eco)}</b></td></tr>`}).join("");
  const eco3=`<div class="kpis3"><div><b>${brl2(r.contaAntes)}</b><span>conta mensal hoje</span></div><div><b>${brl2(r.contaDepois)}</b><span>conta com energia solar</span></div><div class="hi"><b>${brl2(r.contaAntes-r.contaDepois)}</b><span>economia por mês (1º ano)</span></div></div>`;
  const chartGenSvg=`<svg class="chart" viewBox="0 0 560 215" role="img" aria-label="Geração mensal e consumo">${chartGen(r)}</svg><div class="leg"><span><i class="b"></i>Geração estimada</span><span><i class="d"></i>Consumo</span><span class="sm">Total anual: ${num(kwh12)} kWh</span></div>`;
  const simul=fins.map(f=>`<tr><td><b>${pesc(f.nome)}</b></td><td>${f.n}x</td><td>${num(f.i*100,2)}% a.m.</td><td>${f.ent>0?brl2(f.entV):"sem entrada"}</td><td><b>${brl2(f.t.pm)}</b></td><td>${brl2(f.t.total+f.entV)}</td></tr>`).join("");
  const simulHead=`<table class="data"><thead><tr><th>Simulação</th><th>Parcelas</th><th>Juros</th><th>Entrada</th><th>Parcela</th><th>Total pago</th></tr></thead><tbody>${simul}</tbody></table>`;
  const msgFin=`<p class="small">* Os valores descritos são apenas uma simulação e podem sofrer alterações no momento da contratação. ** Sujeito a aprovação de crédito.</p>`;

  let paginas=[];
  if(modo==="resumida"){
    const p2=`<h2>Seu sistema e sua economia</h2>${kp4}${detalhes}<h3 class="sub">Geração × consumo</h3>${chartGenSvg}<h3 class="sub">Economia estimada</h3>${eco3}
      <table class="data"><thead><tr><th>Ano</th><th>Produção (kWh)</th><th>Sem solar</th><th>Com solar</th><th>Economia</th></tr></thead><tbody>${linhas}</tbody></table><p class="small">${basesTxt(r)}</p>`;
    const p3=`<h2>Investimento e retorno</h2>
      <table class="data prod"><thead><tr><th>Item incluso</th><th>Qtd.</th></tr></thead><tbody>
        <tr><td>Módulos fotovoltaicos de ${mod.wp} Wp</td><td>${r.modulos}</td></tr>
        <tr><td>Inversor string de ${num(inv.kw,1)} kW</td><td>${r.qtdInv}</td></tr>
        <tr><td>Estrutura de fixação, string box, cabos CC e conectores</td><td>1 kit</td></tr>
        <tr><td>Projeto, ART, instalação e homologação junto à concessionária</td><td>1</td></tr></tbody></table>
      <div class="total"><span>Valor total da proposta</span><strong>${brl2(r.invest)}</strong><em>${brl2(r.invest/(r.kwp*1000))} por Wp</em></div>
      <table class="data"><thead><tr><th>Condição de pagamento</th><th>Detalhes</th><th>Valor</th></tr></thead><tbody>
        <tr><td>À vista</td><td>Pagamento único na contratação</td><td>${brl2(r.invest)}</td></tr>
        ${fins.map(f=>`<tr><td>Financiado</td><td>${f.n} parcelas · ${num(f.i*100,2)}% a.m.${f.ent>0?` · entrada ${brl2(f.entV)}`:" · sem entrada"}</td><td>${brl2(f.t.pm)}</td></tr>`).join("")}</tbody></table>
      ${fins.length?msgFin+bancosHtml():""}
      <h3 class="sub">Retorno do investimento</h3>
      <div class="kpis3"><div><b>${pbTxt}</b><span>payback</span></div><div><b>${r.tir===null?"-":num(r.tir*100,1)+"%"}</b><span>TIR ao ano</span></div><div><b>${brl(r.totalEco)}</b><span>economia líquida em 25 anos</span></div></div>
      <svg class="chart cx" viewBox="0 0 560 215" role="img" aria-label="Fluxo de caixa acumulado">${chart(r)}</svg>`;
    paginas=[p2,p3,paginaAceite(r,I,hoje,validade,ref,pp,dataVer||hoje)];
  } else {
    const quem=`<h2>Quem somos</h2>
      <p class="lead">A <b>ON Engenharia</b> desenvolve soluções elétricas sob medida para o agronegócio, a indústria, o comércio e a residência: projeto, execução, energia solar e eficiência energética.</p>
      <div class="cards3"><div><h4>O que nos move</h4><p>Entregar energia com segurança, qualidade e economia, com o cuidado de quem conhece a realidade do campo e da cidade.</p></div>
        <div><h4>Como trabalhamos</h4><p>Dimensionamos pelo seu consumo real, projetamos conforme as normas da concessionária e acompanhamos a instalação até a homologação.</p></div>
        <div><h4>O que você recebe</h4><p>Projeto elétrico com ART, equipamentos de linha, instalação por equipe própria, homologação e suporte após a entrega.</p></div></div>
      
      `;
    const porque=`<h3 class="sub">Por que energia solar</h3>
      <ul class="li"><li>Reduz a conta de luz e protege você dos reajustes da tarifa.</li><li>Sistema conectado à rede, sem baterias, com manutenção simples.</li><li>Módulos com garantia de desempenho de longo prazo.</li><li>Valoriza o imóvel e reduz emissões de CO₂.</li></ul>`, sobreEmp=`<div class="sobre"><b>${pesc(pp.razao)}</b><p>CNPJ ${pesc(pp.cnpj)} · ${pesc(P_EMP.end)} · ${pesc(CONFIG.contato||"")}</p><p>Site: <a href="https://onengenhariaeletrica.com.br/">onengenhariaeletrica.com.br</a> · Instagram: <a href="https://www.instagram.com/on_engenharia_/">@on_engenharia_</a></p></div>`;
    const ucTab=(r.ucs&&r.ucs.length)?`<h3 class="sub">Geração compartilhada entre unidades consumidoras</h3><table class="data tight"><thead><tr><th>Unidade</th><th>Consumo (kWh/mês)</th><th>% da geração</th><th>Crédito (kWh/mês)</th></tr></thead><tbody><tr><td>UC principal · ${pesc(I.uc||"")}</td><td>${num(r.cons)}</td><td>${num(r.ucF0,1)}%</td><td>${num(Math.min(r.gerMes*r.ucF0/100,Math.max(r.cons-r.fee,0)))}</td></tr>${r.ucs.map((u,i)=>`<tr><td>UC ${i+2}${u.uc?" · "+pesc(u.uc):""}${u.desc?" · "+pesc(u.desc):""}</td><td>${num(u.cons)}</td><td>${num(u.pct,1)}%</td><td>${num(u.cred)}</td></tr>`).join("")}</tbody></table><p class="small">Os créditos das demais unidades passam pela rede da concessionária: o Fio B escalonado (Lei 14.300) incide sobre toda essa energia, já considerado na economia.</p>`:"";
    const det=`<h2 class="h2b">Detalhes do projeto</h2>${kp4}${detalhes}${ucTab}`;
    const meses=MESES.map((m,i)=>`<tr><td>${m}</td><td>${num(r.gerM[i])}</td><td>${num(r.consM[i])}</td><td class="${r.gerM[i]+r.rateio>=r.consM[i]?"":"neg"}">${num(r.gerM[i]+r.rateio-r.consM[i])}</td></tr>`).join("");
    const ger=`<h2>Geração de energia</h2>${chartGenSvg}<table class="data"><thead><tr><th>Mês</th><th>Geração (kWh)</th><th>Consumo (kWh)</th><th>Saldo (kWh)</th></tr></thead><tbody>${meses}</tbody></table>
      <p class="small">A energia gerada acima do consumo vira crédito na rede, válido por 60 meses. Estimativa com irradiação de ${num(r.hsp,2)} kWh/m²·dia.</p>`;
    const proj=`<h2>Projeção anual</h2><h3 class="sub s0">Conta de energia antes e depois (1º ano)</h3>${eco3}<p class="small" style="margin-bottom:8px">Estimativa sem bandeira tarifária, com o Fio B escalonado pela Lei 14.300.</p><table class="data tight"><thead><tr><th>Ano</th><th>Produção (kWh)</th><th>Sem solar</th><th>Com solar</th><th>Economia</th><th>Acumulado</th></tr></thead><tbody>${r.rows.map(o=>{const sem=r.cons*12*o.t, com=sem-o.eco; return `<tr><td>${o.year}</td><td>${num(o.ger)}</td><td>${brl(sem)}</td><td>${brl(com)}</td><td>${brl(o.eco)}</td><td class="${o.acum>=0?"":"neg"}">${brl(o.acum)}</td></tr>`}).join("")}</tbody></table><p class="small">${basesTxt(r)}</p>`;
    const limpa=l=>l.replace(/^\s*\d{5,}\s*[–—-]\s*/,"").replace(/^[–—-]\s*/,"").trim();
    const distLinhas=($("disttxt").value||"").split(/\n+/).map(limpa).filter(l=>l&&!/frete/i.test(l)).slice(0,40);
    const porCat={mod:[],inv:[],estr:[],cabo:[],prot:[],inst:[]}, sobra=distLinhas.slice();
    const li=a_=>a_.map(x=>x.startsWith("§")?`<li class="d">${x.slice(1)}</li>`:`<li>${x}</li>`).join("");
    const row=(ic,titulo,sub,base,extra)=>`<div class="eqr"><div class="ico">${iconProd(ic)}</div><div class="eqt"><h4>${titulo}</h4>${sub?`<b>${pesc(sub)}</b>`:""}</div><ul>${li(base.map(x=>pesc(x)))}${li(extra.map(x=>pesc(x)))}</ul></div>`;
    const rows=[
      row("mod",`Módulos fotovoltaicos · ${r.modulos} un.`,(mod.marca+" "+mod.modelo).trim()||`${mod.wp} Wp`,[`Potência ${mod.wp} Wp · ${num(r.kwp,2)} kWp no total`,`Dimensões ${mod.comp} × ${mod.larg} mm`,`Voc ${mod.voc} V · Isc ${mod.isc} A · Vmp ${mod.vmp} V · Imp ${mod.imp} A`,`Coeficiente de temperatura da potência ${num(mod.coefP,2)} %/°C`,`Garantia de desempenho de ${mod.garantia||25} anos, conforme o fabricante`].concat((mod.det||[]).slice(0,5).map(x=>"§"+x)),porCat.mod),
      row("inv",`Inversor · ${r.qtdInv} un.`,(inv.marca+" "+inv.modelo).trim(),[`Potência ${num(inv.kw,1)} kW (CA) · ${inv.fases===1?"monofásico":inv.fases===2?"bifásico":"trifásico"}`,`${inv.mppt} MPPT · ${inv.strMppt} string(s) por MPPT`,`Tensão máxima CC ${inv.vmax} V · corrente máx. por MPPT ${inv.iscMax} A`].concat((inv.det||[]).slice(0,5).map(x=>"§"+x)),porCat.inv),
      row("estr","Estrutura de fixação",`Para ${r.tel.nome.toLowerCase()}`,[`Estrutura selecionada: ${r.tel.nome.toLowerCase()}`,`${r.modulos} módulos fixados em perfis e fixadores`,`Área útil estimada de ${num(r.areaTotal,1)} m²`],porCat.estr),
      row("cabo","Cabos e conectores","",[`Cabos CC solares e conectores MC4 para ${num(r.kwp,2)} kWp`,`Cabeamento CA até o quadro de entrada`],porCat.cabo),
      row("prot","String box e proteções","",[`Proteções CC e CA: DPS e disjuntores`,`Aterramento conforme projeto e normas da concessionária`],porCat.prot),
      row("inst","Projeto, ART, instalação e homologação","",[`Projeto elétrico com ART do responsável técnico`,`Instalação por equipe própria e comissionamento`,`Solicitação de acesso e homologação junto à concessionária`],porCat.inst)
    ];
    const prod=`<h2>Produtos e equipamentos</h2><p class="lead">Itens que compõem o seu sistema de ${num(r.kwp,2)} kWp.</p>
      <div class="eq">${rows.join("")}</div>
      ${sobra.length?`<h3 class="sub">Observações</h3><div class="dist">${sobra.map(x=>`<p>${pesc(x)}</p>`).join("")}</div>`:""}
      <p class="small">As especificações seguem os datasheets dos fabricantes. Marcas, modelos e quantidades finais são confirmados na cotação antes da assinatura. Caso algum material não esteja mais disponível, ele poderá ser substituído por equivalente, de mesma qualidade e com especificações técnicas equivalentes ou superiores.</p>`;
    const pag=`<h2>Investimento e pagamento</h2>
      <div class="total"><span>Valor total da proposta</span><strong>${brl2(r.invest)}</strong><em>${brl2(r.invest/(r.kwp*1000))} por Wp</em></div>
      <table class="data l"><thead><tr><th>Condição</th><th>Detalhes</th></tr></thead><tbody>
        <tr><td>Entrega</td><td>${v("prazo")||45} dias após a contratação, com instalação e homologação inclusas</td></tr>
        <tr><td>Validade</td><td>${validade}</td></tr></tbody></table>
      ${fins.length?`<h3 class="sub">Simulação de financiamento</h3>${simulHead}${msgFin}${bancosHtml()}`:""}`;
    const FC=["#1D3140","#8aa0b3","#2a8f9d"];
    const anosEco=Math.min(10,Math.max(5,...fins.map(f=>Math.ceil(f.n/12))));
    const cardsFin=fins.map((f,k)=>{ const s=r.ecoMes1-f.t.pm; return `<div class="fcard"><i style="background:${FC[k]}"></i><b>${pesc(f.nome)}</b><span>${f.n}x de <strong>${brl2(f.t.pm)}</strong>${f.ent>0?` · entrada ${brl2(f.entV)}`:" · sem entrada"}</span><span>Economia média 1º ano: ${brl2(r.ecoMes1)}/mês</span><em class="${s>=0?"ok":"neg"}">${s>=0?"Sobra":"Diferença"} de ${brl2(Math.abs(s))} por mês${s>=0?"":", coberta pelo reajuste da tarifa"}</em></div>`; }).join("");
    const thFin=fins.map(f=>`<th>${f.n}x · parcelas</th><th>${f.n}x · saldo</th>`).join("");
    const linhasEco=Array.from({length:anosEco},(_,i)=>i+1).map(a=>{ const e=r.rows[a-1].eco; return `<tr><td>${r.rows[a-1].year}</td><td>${brl(e)}</td>${fins.map(f=>{ const pg=a<=Math.ceil(f.n/12)?f.t.anos[a-1].pagto:0; return `<td>${brl(pg)}</td><td class="${e-pg>=0?"":"neg"}">${brl(e-pg)}</td>`; }).join("")}</tr>`; }).join("");
    const ecoParc=fins.length?`<h2>Economia × parcela</h2>
      <p class="lead">Simulação para cada condição de financiamento oferecida, comparada com a economia na conta de luz.</p>
      <div class="fcards">${cardsFin}</div>
      <svg class="chart" viewBox="0 0 560 215" role="img" aria-label="Economia anual e parcelas">${chartParcela(r,fins,FC)}</svg>
      <div class="leg"><span><i class="b"></i>Economia anual</span>${fins.map((f,k)=>`<span><i style="background:${FC[k]}"></i>Parcelas ${f.n}x</span>`).join("")}<span class="sm">Payback: ${pbTxt}</span></div>
      <table class="data tight ecot"><thead><tr><th>Ano</th><th>Economia</th>${thFin}</tr></thead><tbody>${linhasEco}</tbody></table>
      ${msgFin}`:`<h2>Economia</h2>${eco3}`;
    const ch=chartRetorno(r,pp);
    const pts=[5,10,15,20,25];
    const ret=`<h2>Retorno do investimento</h2>
      <div class="kpis3"><div><b>${pbTxt}</b><span>payback</span></div><div><b>${r.tir===null?"-":num(r.tir*100,1)+"%"}</b><span>TIR ao ano</span></div><div class="hi"><b>${brl(r.totalEco)}</b><span>economia líquida em 25 anos</span></div></div>
      <svg class="chart cx" viewBox="0 0 560 215" role="img" aria-label="Fluxo de caixa acumulado">${chart(r)}</svg>
      <h3 class="sub">Análise de investimento: solar × renda fixa × poupança</h3>
      <p class="small" style="margin:0 0 6px">Mesmo valor (${brl(r.invest)}) aplicado em cada alternativa; as economias da conta de luz são reaplicadas à taxa do CDB líquido. CDB de ${num(pp.cdbPct,0)}% do CDI (${num(pp.cdi,2)}% a.a.), IR de ${num(pp.ir,1)}%; poupança de ${num(pp.poup,2)}% a.a.</p>
      <svg class="chart cx" viewBox="0 0 560 215" role="img" aria-label="Patrimônio por alternativa">${ch.svg}</svg>
      <div class="leg"><span><i class="b"></i>Solar (economias reaplicadas)</span><span><i class="d"></i>CDB líquido</span><span><i class="g"></i>Poupança</span></div>
      <table class="data"><thead><tr><th>Ano</th><th>Solar</th><th>CDB</th><th>Poupança</th></tr></thead><tbody>${pts.map(t=>`<tr><td>${t}</td><td><b>${brl(ch.solar[t])}</b></td><td>${brl(ch.cdb[t])}</td><td>${brl(ch.poup[t])}</td></tr>`).join("")}</tbody></table>
      <p class="small">Rentabilidade do sistema (TIR): ${r.tir===null?"indisponível":num(r.tir*100,1)+"% ao ano"}, contra ${num(ch.iC*100,2)}% do CDB líquido e ${num(ch.iP*100,2)}% da poupança. Simulação, não é promessa de rentabilidade.</p>`;
    const kwh25=r.rows.reduce((s,o)=>s+o.ger,0), co2=kwh25/1000*pp.fe, arv=co2/Math.max(pp.arv,0.0001);
    const amb=`<h2>Retorno ambiental</h2>
      <p class="lead">Energia limpa que deixa de ser gerada por fontes emissoras. Estimativa para os 25 anos de operação do sistema.</p>
      <div class="kpis3"><div><b>${num(kwh25/1000,0)} MWh</b><span>energia limpa gerada</span></div><div><b>${num(co2,1)} tCO₂</b><span>emissões evitadas</span></div><div class="hi"><b>${num(arv,0)} árvores</b><span>equivalente em plantio</span></div></div>
      <table class="kv"><tbody><tr><td>Por ano (1º ano)</td><td>${num(r.rows[0].ger/1000,1)} MWh · ${num(r.rows[0].ger/1000*pp.fe,2)} tCO₂ evitadas</td></tr>
        <tr><td>Fator de emissão</td><td>${num(pp.fe,4)} tCO₂/MWh (média do Sistema Interligado Nacional)</td></tr>
        <tr><td>Equivalência</td><td>${num(pp.arv,2)} tCO₂ absorvidas por árvore em 25 anos</td></tr></tbody></table>
      <p class="small">Fator de emissão configurável pela ON (média do SIN divulgada pelo MCTI). Os valores são estimativas para fins de comunicação.</p>${porque}${sobreEmp}`;
    const RM=x=>`<div class="roomy">${x}</div>`;
    const pagEco=`<h3 class="sub">Economia na conta de luz</h3>${eco3}
      <svg class="chart" viewBox="0 0 560 215" role="img" aria-label="Economia anual">${chartParcela(r,[],FC)}</svg>
      <div class="leg"><span><i class="b"></i>Economia anual estimada (anos)</span><span class="sm">Payback: ${pbTxt}</span></div>
      <div class="kpis3"><div><b>${pbTxt}</b><span>payback</span></div><div><b>${r.tir===null?"-":num(r.tir*100,1)+"%"}</b><span>TIR ao ano</span></div><div class="hi"><b>${brl(r.totalEco)}</b><span>economia líquida em 25 anos</span></div></div>`;
    paginas=fins.length?[RM(quem+det),ger,proj,prod,RM(pag),RM(ecoParc),ret,RM(amb),RM(paginaAceite(r,I,hoje,validade,ref,pp,dataVer||hoje))]:[RM(quem+det),ger,proj,prod,RM(pag+pagEco),ret,RM(amb),RM(paginaAceite(r,I,hoje,validade,ref,pp,dataVer||hoje))];
  }
  let seguroP=[]; if(comSeg){ seguroP=paginasSeguro(nome,seg,0,0,LOGO); }
  const todas=[...paginas,...seguroP];
  const total=1+todas.length;
  const head=()=>`<header class="ph"><img src="${LOGO}" alt="ON Engenharia"><span>Proposta comercial · ${pesc(nome)}</span></header>`;
  const foot=n=>`<footer class="pf"><div class="pf1"><b>Proposta ${pesc(ref)}</b><span>Folha ${n} de ${total}</span></div><div class="pf2">${pesc(CONFIG.empresa||"ON Engenharia")} · ${pesc(CONFIG.contato||"")} · <a href="https://onengenhariaeletrica.com.br/">onengenhariaeletrica.com.br</a> · <a href="https://www.instagram.com/on_engenharia_/">@on_engenharia_</a></div></footer>`;
  const corpo=[capaHtml].concat(todas.map((b,i)=>`<section class="pg">${head()}<div class="pb">${b}</div>${foot(i+2)}</section>`));
  return `<!DOCTYPE html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Proposta ${pesc(nome)}</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap">
<style>
@page{size:A4;margin:0}
:root{--dark:#1D3140;--dark2:#2d4a60;--blue:#64ABDE;--bl:#eef5fb;--bm:#b8d8f0;--muted:#5a7a95;--line:#dce8f3;--accent:#64ABDE;--sun:#1D3140;--surface:#fff;--ink:#1D3140;color-scheme:light}
*{box-sizing:border-box;-webkit-print-color-adjust:exact;print-color-adjust:exact}
html,body{margin:0}
body{background:#d9e5ef;color:var(--dark);font-family:Montserrat,'Segoe UI',Arial,sans-serif;font-size:13px;line-height:1.45;padding:14px 0}
.pg{width:210mm;height:297mm;margin:0 auto 14px;background:#fff;position:relative;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 2px 14px rgba(29,49,64,.16)}
.ph{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:9mm 14mm 3mm;border-bottom:2px solid var(--blue);margin:0 0 0}
.ph img{height:13mm;width:auto}
.ph span{font-size:10.5px;color:var(--muted)}
.pb{padding:6mm 14mm 0;flex:1;min-height:0}
.pf{display:flex;justify-content:space-between;gap:8px;padding:3mm 14mm 7mm;border-top:1px solid var(--line);font-size:9.5px;color:var(--muted);margin:0 14mm}
.pf{padding-left:0;padding-right:0;margin:0 14mm}
h1,h2,h3{margin:0;line-height:1.15}
h2{font-size:20px;color:var(--dark);padding-bottom:5px;border-bottom:3px solid var(--blue);display:inline-block;margin-bottom:10px}
h3.sub{font-size:14px;color:var(--dark2);margin:16px 0 6px}
.lead{font-size:12.5px;color:var(--dark2);margin:0 0 8px}
.small{font-size:10px;color:var(--muted);margin:6px 0 0}
table{width:100%;border-collapse:collapse;font-variant-numeric:tabular-nums}
.kv td{padding:7px 10px;border-bottom:1px solid var(--line);vertical-align:top;font-size:12.5px}
.kv td:first-child{width:27%;color:var(--muted);background:var(--bl);font-weight:600;font-size:10.5px}
.data th{background:var(--dark);color:#fff;font-weight:600;font-size:10.5px;padding:6px 9px;text-align:right}
.data th:first-child,.data td:first-child{text-align:left}
.data td{padding:6px 9px;border-bottom:1px solid var(--line);text-align:right;font-size:12px}
.data tbody tr:nth-child(even) td{background:#f7fafd}
.data.prod td:last-child{text-align:right}
.callout{margin-top:8px;background:var(--bl);border-left:4px solid var(--blue);padding:7px 11px;border-radius:0 6px 6px 0;font-size:10.5px}
.chart{width:100%;height:auto;display:block;max-height:66mm}
.chart text{fill:var(--muted);font:10px Montserrat,'Segoe UI',Arial,sans-serif}
.leg{display:flex;gap:16px;font-size:10px;color:var(--muted);margin:2px 0 0}
.leg i{display:inline-block;width:10px;height:10px;border-radius:2px;margin-right:5px;vertical-align:-1px}
.leg i.b{background:var(--blue)}.leg i.d{background:var(--dark)}.leg .sm{margin-left:auto}
.kpis4{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:8px}
.kpis4 div,.kpis3 div{background:var(--bl);border-radius:8px;padding:8px 10px}
.kpis4 b{display:block;font-size:17px}.kpis4 span,.kpis3 span{font-size:9.5px;color:var(--muted)}
.kpis3{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:6px}
.kpis3 b{display:block;font-size:18px}
.kpis3 .hi{background:var(--dark);color:#fff}.kpis3 .hi span{color:var(--bm)}
.total{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;border:2px solid var(--dark);border-radius:8px;padding:8px 14px;margin:8px 0}
.total span{color:var(--muted);font-size:11px}.total strong{font-size:26px;color:var(--dark)}.total em{font-style:normal;color:var(--blue);font-size:11px;font-weight:600}
.sign{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:24px}
.sign i{display:block;border-bottom:1.3px solid var(--dark);height:22px}
.sign span{display:block;font-size:9.5px;color:var(--muted);margin-top:4px}
/* capa branca */
.cover{padding:14mm 16mm 10mm}
.cv-top{display:flex;justify-content:space-between;align-items:flex-start}
.cv-logo{height:30mm;width:auto}
.cv-badge{border:1.2px solid var(--blue);color:var(--blue);padding:3px 12px;border-radius:99px;font-size:10.5px;font-weight:600}
.cv-main{margin-top:16mm}
.eyebrow{color:var(--blue);font-weight:700;letter-spacing:.14em;text-transform:uppercase;font-size:11.5px;margin:0 0 10px}
.cover h1{font-size:46px;line-height:1.02;color:var(--dark);margin-bottom:12mm}
.cv-client{display:grid;gap:3px;border-left:4px solid var(--blue);padding-left:14px}
.cv-client span{color:var(--muted);font-size:11px}.cv-client strong{font-size:21px;color:var(--dark)}.cv-client em{font-style:normal;color:var(--muted);font-size:11.5px}
.arte{margin-top:auto;margin-bottom:6mm;height:78mm;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:10px}
.arte svg{width:100%;height:100%}.arte img{width:100%;height:100%;object-fit:cover;border-radius:10px}
.camp{border:1.5px solid var(--blue);border-radius:10px;padding:9px 14px;margin-bottom:6mm;background:var(--bl);display:flex;flex-direction:column;gap:2px}
.camp b{font-size:14px;color:var(--dark)}.camp span{font-size:11px;color:var(--muted)}
.cv-foot{display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;font-size:10px;color:var(--muted);border-top:1px solid var(--line);padding-top:8px;margin-top:auto}
.arte+.camp,.cv-main+.arte{margin-top:auto}
/* seguro */
.ck{display:inline-grid;place-items:center;width:15px;height:15px;border-radius:99px;color:#fff;font:700 10px/1 Arial;font-style:normal}
.ck.ok{background:#2e9d52}.ck.no{background:#d63a35}
.prot td{padding:2.5px 8px}.prot .c,.prot th.c{text-align:center}
.in{color:var(--muted);font-weight:400;font-size:9px}
.cob{margin-top:8px}.cob td small{display:block;color:var(--muted);font-size:9px}.cob td.fr{text-align:left;color:var(--muted);font-size:9.5px}.cob td.n{white-space:nowrap}.cob th.n,.cob td.n{text-align:right}.cob th:nth-child(3){text-align:left}
.tot2{display:flex;justify-content:space-between;border-top:1.5px solid var(--dark);padding-top:5px;font-size:11.5px;margin:2px 0 0}
.chk{display:flex;gap:16px;flex-wrap:wrap;align-items:center;font-size:11px;margin:8px 0}
.chk span{display:inline-flex;align-items:center;gap:5px}.bx{display:inline-block;width:11px;height:11px;border:1.2px solid var(--dark)}
.chart.cx{max-height:50mm}.sobre{margin-top:12px;border-top:1px solid var(--line);padding-top:8px}.sobre b{font-size:11px;color:var(--dark2)}.sobre p{margin:3px 0 0;font-size:10.5px;color:var(--muted)}
@media print{body{background:#fff;padding:0}.pg{margin:0;box-shadow:none;break-after:page}.pg:last-child{break-after:auto}}

.neg{color:#c0392b}
body{font-size:14px}.pb{padding:7mm 15mm 0}
h2{font-size:23px;margin-bottom:13px}.h2b{margin-top:6mm}h3.sub{font-size:15.5px;margin:20px 0 9px}h3.sub.s0{margin-top:4px}
.lead{font-size:13.5px;margin:0 0 10px}.small{font-size:10.5px}
.kv td{padding:9px 12px;font-size:13px}.kv td:first-child{font-size:11px}
.data th{padding:8px 10px;font-size:11px}.data td{padding:8px 10px;font-size:12.5px}
.data.tight td,.data.tight th{padding:5px 8px;font-size:11px}
.kpis4,.kpis3{gap:10px;margin-bottom:10px}.kpis4 div,.kpis3 div{padding:11px 13px;border-radius:10px}.kpis4 b{font-size:20px}.kpis3 b{font-size:21px}.kpis4 span,.kpis3 span{font-size:10.5px}
.chart{max-height:80mm}.chart.cx{max-height:58mm}.leg{font-size:10.5px;margin-top:4px}
.total{padding:11px 16px;margin:10px 0 14px}.total strong{font-size:30px}
.cards3{gap:12px;margin:10px 0 12px}.cards3 div{padding:13px 14px}.cards3 h4{font-size:13.5px}.cards3 p{font-size:12px}
ul.li{font-size:13px}ul.li li{margin:5px 0}.sobre{margin-top:16px}.sobre b{font-size:12px}.sobre p{font-size:11.5px}
.callout{font-size:11.5px;padding:9px 13px}
.pf{display:block!important;padding:3mm 0 6mm!important}.pf1{display:flex;justify-content:space-between;font-size:10px;color:var(--dark)}.pf2{font-size:9.5px;color:var(--muted);margin-top:2px}.pf a{color:var(--muted);text-decoration:none}.sobre a{color:var(--blue);text-decoration:none}
.fcards{display:grid;grid-template-columns:repeat(auto-fit,minmax(0,1fr));gap:10px;margin:6px 0 10px}.fcard{background:var(--bl);border-radius:10px;padding:10px 12px;display:grid;gap:3px;border-top:3px solid var(--blue);position:relative}.fcard i{position:absolute;top:10px;right:10px;width:11px;height:11px;border-radius:3px}.fcard b{font-size:12px;color:var(--dark);padding-right:16px}.fcard span{font-size:10.5px;color:var(--dark2)}.fcard em{font-style:normal;font-weight:700;font-size:11px}.fcard em.ok{color:#2e7d4f}.fcard em.neg{color:#c0392b}
.ecot th,.ecot td{font-size:10.5px!important}.eq{display:block;margin-top:2px}

.eqr{display:grid;grid-template-columns:17mm 52mm 1fr;column-gap:12px;align-items:center;padding:14px 4px;border-bottom:1px solid var(--line)}
.eqr:last-child{border-bottom:0}
.eqr .ico{width:17mm;height:17mm;border-radius:50%;background:var(--bl);border:1.5px solid var(--bm);padding:2.2mm}
.eqr h4{margin:0 0 3px;font-size:13px;color:var(--dark);line-height:1.2}.eqr b{display:block;font-size:11.5px;color:var(--blue)}
.eqr ul{margin:0;padding-left:15px;font-size:10.8px;color:var(--dark2)}.eqr li{margin:2px 0}
.roomy .data td{padding:11px 12px;font-size:13.5px}.roomy .data th{padding:10px 12px;font-size:12px}.roomy .data.tight td{padding:8px 10px;font-size:12px}.roomy .total{padding:18px 22px;margin:14px 0 20px}.roomy .total strong{font-size:38px}.roomy h3.sub{margin-top:28px}.roomy .chart{max-height:96mm}.roomy .kv td{padding:12px 14px;font-size:13.5px}.roomy .kpis3 b,.roomy .kpis4 b{font-size:23px}.roomy .lead{font-size:14px}.roomy .cards3 p{font-size:12.5px}.roomy .small{font-size:11px;margin-top:10px}
.eqc{border:1px solid var(--line);border-radius:12px;padding:10px 12px;background:#fff;display:grid;grid-template-columns:34mm 1fr;column-gap:11px;align-items:start}
.eqc .ph0{grid-row:1/span 3;align-self:center;height:30mm;background:linear-gradient(180deg,#f4f8fc,#e6f0f9);border-radius:9px;display:grid;place-items:center;overflow:hidden}
.eqc .ph0 img{width:100%;height:100%;object-fit:contain}.eqc .ph0 svg{width:100%;height:100%}
.eqc h4{margin:0 0 2px;font-size:13px;color:var(--dark);grid-column:2}.eqc b{display:block;font-size:11.5px;color:var(--blue);margin-bottom:2px;grid-column:2}
.eqc ul{margin:3px 0 0;padding-left:15px;font-size:11px;color:var(--dark2);grid-column:2}.eqc li{margin:2px 0}
.eqc.inst{background:var(--bl);border-color:var(--bm);display:block}
.cvimg{padding:0!important;background:#fff}.cvbg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top}
.cvt{position:absolute;white-space:nowrap;line-height:1;transform:translateY(-50%);font-family:Montserrat,'Segoe UI',Arial,sans-serif}
.cvp{position:absolute;display:flex;align-items:center;justify-content:center;white-space:nowrap;font-weight:600;color:#0d4a8f;font-family:Montserrat,'Segoe UI',Arial,sans-serif}
.chart.cx{margin:0 auto}
.data.l th:last-child,.data.l td:last-child{text-align:left}
.leg i.g{background:#8aa0b3}
.data.tight td,.data.tight th{padding:3.5px 7px;font-size:10px}
.data td.blank,.kv td.blank{height:22px}
.cards3{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:8px 0}
.cards3 div{background:var(--bl);border-radius:10px;padding:11px 12px;border-top:3px solid var(--blue)}
.cards3 h4,.prd h4{margin:0 0 4px;font-size:12.5px;color:var(--dark)}.cards3 p{margin:0;font-size:11px;color:var(--dark2)}
ul.li{margin:4px 0;padding-left:18px;font-size:12px}ul.li li{margin:3px 0}
.prd{display:grid;grid-template-columns:42mm 1fr;gap:12px;align-items:center;border:1px solid var(--line);border-radius:10px;padding:8px;margin-bottom:8px}
.prd .ph0{height:30mm;background:#f4f8fc;border-radius:8px;display:grid;place-items:center;overflow:hidden}
.prd .ph0 img{width:100%;height:100%;object-fit:cover;object-position:top}
.prd .ph0 span{font-size:10px;color:var(--muted)}
.prd ul{margin:4px 0 0;padding-left:16px;font-size:10.5px;color:var(--dark2)}
.dist{border-left:3px solid var(--blue);padding-left:10px;column-count:2;column-gap:14px}.dist p{margin:2px 0;font-size:10px;color:var(--dark2)}
.bks{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}
.bk{height:9mm;min-width:24mm;border:1px solid var(--line);border-radius:6px;display:grid;place-items:center;padding:2px 8px;background:#fff}
.bk img{max-height:7mm;max-width:28mm}.bk.t{font-size:10px;font-weight:700;color:var(--dark2)}
.sign.big{margin-top:36mm}.eqr li.d{font-size:9px;line-height:1.25;color:#4a6176}.data.prot td,.data.prot th{padding:3px 9px}.data.cob td,.data.cob th{padding:5px 9px}.tot2{margin-top:6px}.sign .assin{position:absolute;max-height:16mm;margin-top:-17mm}.sign div{position:relative}
${modo==="resumida"?`body{font-size:13px}.pb{padding:6mm 14mm 0}
h2{font-size:20px;margin-bottom:10px}h3.sub{font-size:14px;margin:16px 0 6px}
.lead{font-size:12.5px;margin:0 0 8px}.small{font-size:10px}
.kv td{padding:7px 10px;font-size:12.5px}.kv td:first-child{font-size:10.5px}
.data th{padding:6px 9px;font-size:10.5px}.data td{padding:6px 9px;font-size:12px}
.data.tight td,.data.tight th{padding:3.5px 7px;font-size:10px}
.kpis4,.kpis3{gap:8px;margin-bottom:8px}.kpis4 div,.kpis3 div{padding:8px 10px;border-radius:8px}.kpis4 b{font-size:17px}.kpis3 b{font-size:18px}.kpis4 span,.kpis3 span{font-size:9.5px}
.chart{max-height:32mm}.chart.cx{max-height:44mm}.leg{font-size:10px;margin-top:2px}
.total{padding:8px 14px;margin:8px 0}.total strong{font-size:26px}
.callout{font-size:10.5px;padding:7px 11px}`:""}
</style></head><body>
${corpo.join("\n")}
</body></html>`;
}

function atualizarPrev(){ if(!R) return; try{ $("prev").srcdoc = propostaHTML(); }catch(e){ console.error(e); } }
$("pr-abrir").onclick=async()=>{ if(!R) return; emitirVersao(); const w=window.open("","_blank"); if(!w){ flash($("toast"),"Libere pop-ups para abrir a proposta."); return; } await capaPronta(); w.document.open(); w.document.write(propostaHTML()); w.document.close(); };
$("pr-baixar").onclick=async()=>{ if(!R) return; emitirVersao(); await capaPronta(); const b=new Blob([propostaHTML()],{type:"text/html"}); const a=document.createElement("a"); a.href=URL.createObjectURL(b); a.download="Proposta - "+(($("cliente").value||"cliente").replace(/[\\/:*?"<>|]/g,"").trim())+".html"; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href),4000); };

/* capa: imagem configurável + seguro */
function capaPrev(){ const im=(CONFIG.capa||{}).imagem||""; const e=$("capa-prev"), b=$("capa-rm"); e.style.display=im?"block":"none"; b.style.display=im?"inline-block":"none"; if(im) e.src=im; }
$("capa-file").addEventListener("change",ev=>{
  const f=ev.target.files[0]; if(!f) return;
  const img=new Image(); const url=URL.createObjectURL(f);
  img.onload=()=>{ const W=Math.min(1400,img.width), H=Math.round(img.height*W/img.width); const c=document.createElement("canvas"); c.width=W; c.height=H;
    c.getContext("2d").drawImage(img,0,0,W,H); CONFIG.capa=CONFIG.capa||{}; CONFIG.capa.imagem=c.toDataURL("image/jpeg",0.82); CONFIG.capa.estilo="imagem";
    document.querySelector('[data-cfg="capa.estilo"]').value="imagem"; URL.revokeObjectURL(url); saveCfg(); capaPrev(); calc(); };
  img.src=url;
});
$("capa-rm").onclick=()=>{ CONFIG.capa.imagem=""; if(CONFIG.capa.estilo==="imagem"){ CONFIG.capa.estilo="aneis"; document.querySelector('[data-cfg="capa.estilo"]').value="aneis"; } $("capa-file").value=""; saveCfg(); capaPrev(); calc(); };
["seg-on","seg-proj","seg-cond","seg-v1","seg-v2","seg-v3","seg-v4","seg-v5"].forEach(id=>$(id).addEventListener("input",()=>calc()));
["seg-proj","seg-v1","seg-v2","seg-v3","seg-v4","seg-v5"].forEach(id=>$(id).addEventListener("blur",()=>{ const el=$(id), s=el.value.replace(/[^\d,.]/g,""); const n=parseFloat(s.includes(",")?s.replace(/\./g,"").replace(",","."):s); if(n) el.value=n.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}); }));
capaPrev();

/* ============ ON: integração com o Orça Rede (Supabase) ============ */
var SB=null, UID=null, NIVEL=null, ISADM=false, CAN_EDIT=true, READY=false, DIRTY=false, SAVE_T=null;
const setSv=(t,c)=>{ const e=$("sv"); e.textContent=t||""; e.className="svs "+(c||""); };
function bloquear(html){ const b=$("blk"); b.querySelector("div").innerHTML=html; b.classList.add("on"); }
function cfgMark(){ if(ISADM && NEG){ $("cfg-save").hidden=false; $("cfg-save").textContent="Salvar como padrão para todos"+(CFG_DIRTY?" •":""); } }
function concFiltrar(){ const q=($("conc-filter").value||"").toLowerCase().trim(); document.querySelectorAll("#ed-conc tbody tr").forEach(tr=>{ const t=[...tr.querySelectorAll("input")].slice(0,2).map(i=>i.value).join(" ").toLowerCase(); tr.classList.toggle("fh", !!q && !t.includes(q)); }); }
$("conc-filter").addEventListener("input",concFiltrar);

function snapshot(){
  const f={};
  document.querySelectorAll("input[id],select[id],textarea[id]").forEach(el=>{
    if(el.hasAttribute("data-cfg")||el.closest("#view-conf")||el.id==="conc-filter"||el.type==="file"||el.id==="txtbase") return;
    f[el.id]=el.type==="checkbox"?el.checked:el.value;
  });
  return {v:1,f,cm:[...document.querySelectorAll("[data-cm]")].map(e=>e.value),hm:HSPM.slice(),costs:clone(COSTS),real:clone(REAL),opt:OPT};
}
function restore(s){
  if(!s||!s.f) return;
  if(typeof fillInvSel==="function") fillInvSel();
  if(s.hm&&s.hm.length===12) setHspm(s.hm);
  Object.entries(s.f).forEach(([id,val])=>{
    const el=$(id); if(!el) return;
    if(el.tagName==="SELECT" && ![...el.options].some(o=>o.value===String(val))) return;
    if(el.type==="checkbox") el.checked=!!val; else el.value=val;
  });
  (s.cm||[]).forEach((x,i)=>{ const e=document.querySelector('[data-cm="'+i+'"]'); if(e) e.value=x; });
  if(s.costs){ Object.keys(COSTS).forEach(k=>{ if(s.costs[k]) COSTS[k]=s.costs[k]; }); nextId=Math.max(nextId,...Object.values(COSTS).flat().map(l=>+l.id||0))+1; }
  Object.keys(REAL).forEach(k=>delete REAL[k]); Object.assign(REAL,s.real||{});
  if(s.opt) OPT=s.opt;
  updateMargemLabel();
}
function aplicarConfig(d){
  if(!d) return;
  const base=clone(DEF), s=d.config||{};
  for(const k of Object.keys(base)){ if(s[k]===undefined) continue;
    if(k==="tec"){ base.tec=Object.assign(base.tec,s.tec); base.tec.perdas=Object.assign(clone(DEF.tec.perdas),(s.tec||{}).perdas); } else base[k]=s[k]; }
  CONFIG=base; mergeDefaults();
  if(d.custos){ Object.keys(COSTS).forEach(k=>{ if(d.custos[k]) COSTS[k]=d.custos[k]; }); nextId=Math.max(nextId,...Object.values(COSTS).flat().map(l=>+l.id||0))+1; }
  initUI(); if(typeof capaPrev==="function") capaPrev(); if(typeof initV3==="function") initV3();
}
async function salvar(){
  if(!NEG||!CAN_EDIT||!READY||!DIRTY) return;
  DIRTY=false; setSv("Salvando…");
  const resumo=R?{kwp:R.kwp,modulos:R.modulos,gerMes:R.gerMes,invest:R.invest,payback:R.payback,tir:R.tir,cliente:$("cliente").value,itens:R.kitItems.map(i=>({nome:i.nome,qtd:+(+i.qtd).toFixed(2),un:+(+i.un).toFixed(2),unid:i.unid})),proposta:{versao:+$("pr-ver").value||0,data:$("pr-verdata").value,numero:window.GC_NUM||""}}:null;
  const {error}=await SB.from("neg_orc_solar").upsert({negocio_id:NEG,dados:snapshot(),resumo,atualizado_por:UID,atualizado_em:new Date().toISOString()});
  if(error){ DIRTY=true; setSv("Não salvou: "+error.message,"er"); } else { setSv("Salvo ✓ "+new Date().toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}),"ok"); if(R){ const valor=Math.round(R.invest), pot=Math.round(R.kwp*100)/100; SB.from("negocios").update({valor,pot,un:"kWp"}).eq("id",NEG).then(()=>{ try{ parent.postMessage({orcsolar:"valor",neg:NEG,valor,pot},location.origin); }catch(e){} }); } }
}
function agendar(){ if(!READY||!NEG||!CAN_EDIT) return; DIRTY=true; setSv("Alterações não salvas…"); clearTimeout(SAVE_T); SAVE_T=setTimeout(salvar,1500); }
document.addEventListener("visibilitychange",()=>{ if(document.hidden){ clearTimeout(SAVE_T); salvar(); } });
addEventListener("pagehide",()=>{ clearTimeout(SAVE_T); salvar(); });

$("cfg-save").onclick=async()=>{
  if(!ISADM) return;
  const {error}=await SB.from("solar_config").upsert({id:"geral",dados:{v:1,config:CONFIG,custos:COSTS},atualizado_por:UID,atualizado_em:new Date().toISOString()});
  if(error){ flash($("conf-toast"),"Não salvou: "+error.message); return; }
  CFG_DIRTY=false; cfgMark(); flash($("conf-toast"),"Padrão salvo para todos os orçamentos.");
};
$("btn-aplicar").onclick=async()=>{
  if(!R||!NEG) return;
  const valor=Math.round(R.invest), pot=Math.round(R.kwp*100)/100;
  const {error}=await SB.from("negocios").update({valor,pot,un:"kWp"}).eq("id",NEG);
  if(error){ setSv("Não aplicou: "+error.message,"er"); return; }
  let nome=""; try{ const p=await SB.from("perfis").select("nome").eq("id",UID).single(); nome=(p.data||{}).nome||""; }catch(e){}
  SB.from("neg_historico").insert({negocio_id:NEG,texto:"☀️ Orçamento solar aplicado: "+brl(valor)+" · "+num(pot,2)+" kWp ("+R.modulos+" módulos)",autor_nome:nome}).then(()=>{});
  setSv("Valor e potência aplicados no negócio ✓","ok");
  try{ parent.postMessage({orcsolar:"aplicado",neg:NEG},location.origin); }catch(e){}
};

async function integrar(){
  await carregarLogo();
  if(!NEG) return;                       // modo avulso: só localStorage
  const C=window.ON_CONFIG;
  SB=window.supabase.createClient(C.url,C.key,{auth:{persistSession:true,autoRefreshToken:true}});
  const {data:{session}}=await SB.auth.getSession();
  if(!session){ bloquear("<h2>Entre no Orça Rede</h2><p>Faça login em <a href=\"index.html\" target=\"_top\">index.html</a> e abra o negócio de novo.</p>"); return; }
  UID=session.user.id;
  try{ const r=await SB.schema("orcarede").rpc("meu_nivel"); NIVEL=r.data||null; }catch(e){}
  ISADM=NIVEL==="admin"; CAN_EDIT=NIVEL==="admin"||NIVEL==="editar"; document.body.classList.toggle("nadm",!ISADM); $("desclib").disabled=!ISADM;
  if(!NIVEL){ bloquear("<h2>Sem acesso ao orçamento</h2><p>Seu usuário não tem permissão no OrçaRede. Peça ao administrador.</p>"); return; }
  const [rc,rn,ro]=await Promise.all([
    SB.from("solar_config").select("dados").eq("id","geral").maybeSingle(),
    SB.from("negocios").select("id,titulo,cliente,cidade,fone,valor,pot,quadro,cadastro").eq("id",NEG).maybeSingle(),
    SB.from("neg_orc_solar").select("dados,atualizado_em").eq("negocio_id",NEG).maybeSingle()]);
  if(rc.data&&rc.data.dados) aplicarConfig(rc.data.dados);
  const neg=rn.data;
  try{ window.GC_NUM=String((((neg||{}).cadastro||{}).gc_orc||{}).codigo||""); }catch(e){}
  if(ro.data&&ro.data.dados&&ro.data.dados.f){ restore(ro.data.dados); setSv("Orçamento carregado · "+new Date(ro.data.atualizado_em).toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"})); }
  else if(neg){
    $("cliente").value=neg.cliente||neg.titulo||""; $("pcid").value=neg.cidade||""; if(neg.cidade){ const mc=aplicarCidade(neg.cidade); if(mc&&!mc.exato) setSv("Cidade fora da lista: usei "+mc.k+" como irradiação. Ajuste se quiser."); }
    setSv("Novo orçamento para "+(neg.cliente||neg.titulo||"o negócio"));
  }
  if(neg&&neg.cidade&&!$("pcid").value) aplicarCidade(neg.cidade);
  try{ cadPuxar(neg); }catch(e){}
  if(!CAN_EDIT){ setSv("Somente leitura (seu nível é “ver”)","er"); document.querySelectorAll("#view-ent input,#view-ent select,#view-ent textarea,#view-preco input,#view-preco select,#view-dre input,#view-dre select,#view-sis input,#view-sis select").forEach(e=>e.disabled=true); }
  $("btn-aplicar").hidden=true;
  if(ISADM) $("cfg-save").hidden=false; else if(!ISADM){ document.querySelector('[data-sub="com"]'); }
  READY=true; verTxt(); carregarBaseTextos(); calc(); renderPreco(); { const ab=({proposta:'prop'})[QS.get('aba')]||QS.get('aba'); if(ab&&VIEWS.includes(ab)) show(ab); }
}

/* ============ v3: cidade, fatura, datasheet, texto do distribuidor, logos ============ */
const norm = s => String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim();
function loadScriptJs(src){ return new Promise((res,rej)=>{ const s=document.createElement("script"); s.src=src; s.onload=res; s.onerror=()=>rej(new Error("falha ao carregar "+src)); document.head.appendChild(s); }); }
function mergeDefaults(){
  DEF.modulos.forEach(m=>{ if(!CONFIG.modulos.some(x=>x.id===m.id)) CONFIG.modulos.push(clone(m)); });
  DEF.inversores.forEach(m=>{ if(m.ds&&!CONFIG.inversores.some(x=>x.id===m.id)) CONFIG.inversores.push(clone(m)); });
  CONFIG.prop = Object.assign(clone(DEF.prop), CONFIG.prop||{});
  if(!(CONFIG.prop.bancos||[]).length) CONFIG.prop.bancos = clone(DEF.prop.bancos);
}
mergeDefaults();

/* ---- cidade do negócio -> irradiação ---- */
function cidadeMatch(txt){
  if(!txt) return null;
  const t=norm(txt), mu=t.match(/(?:\/|-|,|\s)\s*([a-z]{2})\s*$/), uf=mu?mu[1].toUpperCase():"";
  const nome=norm(t.replace(/\s*[\/\-,]\s*[a-z]{2}\s*$/,"").replace(/\(.*?\)/g,"")).replace(/\s+[a-z]{2}$/,m=>uf&&m.trim().toUpperCase()===uf?"":m);
  const ks=Object.keys(CIDADES);
  const ex=ks.find(c=>norm(c.replace(/\s*\(.*\)/,""))===nome && (!uf||c.includes("("+uf+")")));
  if(ex) return {k:ex,exato:true};
  const u=uf||"RS", mesmaUF=ks.filter(c=>c.includes("("+u+")"));
  if(!mesmaUF.length) return null;
  return {k: u==="RS"&&CIDADES["Passo Fundo (RS)"] ? "Passo Fundo (RS)" : mesmaUF[0], exato:false};
}
function aplicarCidade(txt){
  const m=cidadeMatch(txt); if(!m) return null;
  $("cidade").value=m.k; setHspm(monthlyFor(m.k));
  if(!$("pcid").value) $("pcid").value=txt;
  return m;
}

/* ---- leitura de PDF (pdf.js do projeto) ---- */
async function pdfDoc(file){
  if(!window.pdfjsLib) await loadScriptJs("vendor/pdf.min.js");
  if(pdfjsLib.GlobalWorkerOptions && !pdfjsLib.GlobalWorkerOptions.workerSrc) pdfjsLib.GlobalWorkerOptions.workerSrc="vendor/pdf.worker.min.js";
  return pdfjsLib.getDocument({data:await file.arrayBuffer()}).promise;
}
async function pdfLinhas(pdf,paginas){
  const out=[];
  for(let p=1;p<=Math.min(pdf.numPages,paginas||2);p++){
    const pg=await pdf.getPage(p), tc=await pg.getTextContent(), rows={};
    tc.items.forEach(it=>{ if(!it.str||!it.str.trim()) return; const y=Math.round(it.transform[5]/3); (rows[y]=rows[y]||[]).push({x:it.transform[4],w:it.width||0,s:it.str}); });
    Object.keys(rows).map(Number).sort((a,b)=>b-a).forEach(y=>{
      const its=rows[y].sort((a,b)=>a.x-b.x); let line="", end=null;
      its.forEach(i=>{ line += (end!==null && i.x-end>6 ? "   " : (end!==null?" ":"")) + i.s; end=i.x+i.w; });
      out.push(line.replace(/\s+$/,""));
    });
  }
  return out;
}

/* ---- fatura ---- */
const MESES_ABR=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
function brNum(s){ if(s==null) return NaN; s=String(s).trim(); return parseFloat(s.includes(",")?s.replace(/\./g,"").replace(",","."):s); }
function classeDeTexto(t){
  t=norm(t);
  if(/baixa renda/.test(t)) return "B1RBR";
  if(/cooperativa/.test(t)) return "B2COOP";
  if(/irriga/.test(t)) return "B2IRR";
  if(/rural/.test(t)) return "B2R";
  if(/ilumina/.test(t)) return "B4";
  if(/comercial|industrial|poder publico|servico publico|demais/.test(t)) return "B3";
  if(/resid/.test(t)) return "B1R";
  return "";
}
function parseFatura(linhas){
  const L=linhas, T=L.join("\n"), o={avisos:[]};
  const proib=/DISTRIBUIDORA|COOPERATIVA|ENERGIA|DANF|DOCUMENTO|FISCAL|CNPJ|RGE|COPREL|CPFL|CEMIG|ENEL|CELESC|COPEL|EQUATORIAL|NEOENERGIA|ELEKTRO|LIGHT|ENERGISA|AVENIDA|RUA\b/;
  for(const l of L.slice(0,50)){ const s=l.trim(); if(/^[A-ZÀ-Ú][A-ZÀ-Ú .'\-]{5,}$/.test(s) && s.split(/\s+/).length>=2 && !proib.test(s) && !/\d/.test(s)){ o.nome=s.replace(/\b([A-ZÀ-Ú])([A-ZÀ-Ú]*)/g,(m,a,b)=>a+b.toLowerCase()).replace(/\b(Da|De|Do|Dos|Das|E)\b/g,x=>x.toLowerCase()); const i=L.indexOf(l); const nx=(L[i+1]||"").trim(); if(nx && /\d/.test(nx) && !/CPF|CNPJ/i.test(nx)) o.end=nx.replace(/\s*-\s*$/,""); break; } }
  let m;
  if((m=T.match(/(\d{6,12})\s+Energia Ativa/i))||(m=T.match(/(\d{5,12})\s+CONSUMO\s+kWh/i))||(m=T.match(/(?:Unidade Consumidora|N[uú]mero da UC|\bUC\b)\D{0,25}(\d{6,12})/i))) o.uc=m[1];
  const cn=norm(T); const concs=CONFIG.conc.slice().sort((a,b)=>b.nome.length-a.nome.length);
  const hit=concs.find(c=>c.nome.length>=3 && new RegExp('(^|[^a-z0-9])'+norm(c.nome).replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'([^a-z0-9]|$)').test(cn)); if(hit) o.conc=hit; else o.avisos.push("Concessionária não reconhecida: escolha na lista.");
  if((m=T.match(/Classifica[cç][aã]o:\s*([^\n]+?)(?:\s{3,}|$)/i))) o.classe=classeDeTexto(m[1]);
  if(!o.classe && (m=T.match(/(RESIDENCIAL\s*\/\s*\w+|COMERCIAL\s*\/\s*\w+|RURAL\s*\/\s*\w+|INDUSTRIAL\s*\/\s*\w+)/i))) o.classe=classeDeTexto(m[1]);
  if((m=T.match(/(Monof[aá]sico|Bif[aá]sico|Trif[aá]sico)/i))){ const x=norm(m[1]); o.padrao = x.startsWith("mono")?"30":x.startsWith("bi")?"50":"100"; }
  const lc=L.find(l=>/(Energia Ativa-kWh|CONSUMO\s+kWh)/i.test(l) && /\d{3,}\s+\d{3,}\s+\d+(?:,\d+)?\s+\d+/.test(l)) || L.find(l=>/(Energia Ativa-kWh|CONSUMO\s+kWh)/i.test(l) && /\d/.test(l));
  if(lc){ const mm=lc.match(/\d{3,}\s+\d{3,}\s+\d+(?:,\d+)?\s+(\d+(?:[.,]\d+)?)/); if(mm) o.consumo=Math.round(brNum(mm[1])); else { const ns=lc.match(/\d+(?:[.,]\d+)?/g); const last=ns&&ns[ns.length-1]; if(last) o.consumo=Math.round(brNum(last)); } }
  if(!o.consumo && (m=T.match(/Consumo[^\n]*kWh\s+(\d+(?:[.,]\d+)?)/i))) o.consumo=Math.round(brNum(m[1]));
  const inj=L.find(l=>/Energia\s+Injetada/i.test(l)&&/\d/.test(l)&&!/TUSD|TE\b/i.test(l)); if(inj){ const ns=inj.match(/\d+(?:[.,]\d+)?/g); o.injetada=Math.round(brNum(ns[ns.length-1])); o.avisos.push("A fatura registra energia injetada ("+o.injetada+" kWh): o cliente já tem geração própria."); }
  // tarifa
  const tl=l=>{ const ds=(l.match(/\d+,\d{5,8}/g)||[]).map(brNum); return ds; };
  const lt=L.find(l=>/Consumo.*TUSD|CONSUMO TUSD/i.test(l)&&!/Injetada/i.test(l)), le=L.find(l=>/Consumo\s*-?\s*TE|CONSUMO TE/i.test(l)&&!/Injetada/i.test(l));
  if(lt&&le){ const a=tl(lt), b=tl(le); if(a.length&&b.length){
      if(a.length>=2&&b.length>=2){ o.tarifa=+(a[1]+b[1]).toFixed(4); o.tarifaTipo="fatura"; }
      else { const ic=((hit&&hit.icms)||17)/100; o.tarifa=+((a[0]+b[0])/((1-ic)*0.95)).toFixed(4); o.tarifaTipo="estimada"; o.avisos.push("A fatura traz só a tarifa sem tributos ("+num(a[0]+b[0],4)+"). Tarifa com impostos estimada com o ICMS da concessionária: confira."); } } }
  if((m=T.match(/([A-Za-z]{3})\/(\d{4})[^\n]*?R\$\s*([\d.]+,\d{2})/))||(m=T.match(/(\d{2})\/(\d{4})\s+R\$\s*([\d.]+,\d{2})/))){
    const mm=/^\d+$/.test(m[1])?MESES_ABR[+m[1]-1]:norm(m[1]).slice(0,3); o.mes=mm+"/"+m[2]; o.valor="R$ "+m[3];
  }
  if((m=T.match(/(\d{5}-\d{3})\s+([A-ZÀ-Ú][A-ZÀ-Ú ]+?)\s+([A-Z]{2})\b/))){ o.cidade=m[2].trim(); o.uf=m[3]; o.cep=m[1]; }
  else if((m=T.match(/([A-ZÀ-Ú][A-ZÀ-Ú ]+?)\s*-\s*([A-Z]{2})\s*-\s*CEP\s*:?\s*(\d{5}-\d{3})/))){ o.cidade=m[1].trim(); o.uf=m[2]; o.cep=m[3]; }
  return o;
}
const capNome = s => String(s||"").toLowerCase().replace(/(^|\s)(\S)/g,(a,b,c)=>b+c.toUpperCase()).replace(/\b(Da|De|Do|Dos|Das|E)\b/g,x=>x.toLowerCase());
async function importarFatura(file){
  const msg=$("fat-msg"); msg.textContent="Lendo a fatura…";
  try{
    const pdf=await pdfDoc(file), linhas=await pdfLinhas(pdf,2), o=parseFatura(linhas), pre=[];
    let anexou=false; if(SB&&NEG&&CAN_EDIT){ try{ const path=NEG+"/"+Date.now().toString(36)+Math.random().toString(36).slice(2,7)+".pdf"; const up=await SB.storage.from("negocios").upload(path,file,{contentType:"application/pdf"}); if(up.error) throw up.error; const url=SB.storage.from("negocios").getPublicUrl(path).data.publicUrl; const ins=await SB.from("neg_anexos").insert({negocio_id:NEG,nome:file.name||"fatura.pdf",tipo:"application/pdf",tam:file.size,url}); if(ins&&ins.error) throw ins.error; anexou=true; }catch(e){ console.error(e); o.avisos.push("Não consegui anexar a fatura ao negócio: "+(e.message||e)); } }
    if(!(o.consumo||o.tarifa||o.nome)){ msg.textContent="Não encontrei dados nesse PDF. Preencha manualmente."; return; }
    const put=(id,val,rot)=>{ if(val!=null&&val!==""&&!Number.isNaN(val)){ $(id).value=val; pre.push(rot); } };
    if(o.nome) put("cliente",o.nome,"cliente"); put("ucnum",o.uc,"UC");
    if(o.conc){ $("concsel").value=o.conc.id; applyConc(); pre.push("concessionária"); }
    if(o.classe){ $("pclasse").value=o.classe; pre.push("classe"); }
    if(o.padrao){ $("padrao").value=o.padrao; pre.push("padrão de entrada"); }
    if(o.consumo){ $("consumo").value=o.consumo; pre.push("consumo"); }
    if(o.tarifa){ $("tarifa").value=o.tarifa; pre.push("tarifa"+(o.tarifaTipo==="estimada"?" (estimada)":"")); }
    put("pref",o.mes,"mês"); put("pfat",o.valor,"valor");
    if(o.end&&!$("pend").value) $("pend").value=capNome(o.end);
    if(o.cep&&!$("pcep").value) $("pcep").value=o.cep;
    if(o.cidade){ const t=capNome(o.cidade)+(o.uf?" / "+o.uf:""); if(!$("pcid").value) $("pcid").value=t; const c=aplicarCidade(t); if(c) pre.push("irradiação ("+c.k+(c.exato?"":", cidade mais próxima da lista")+")"); }
    if(o.classe && o.classe!=="B1R") o.avisos.push("Classe diferente de B1 residencial: a tarifa cadastrada é B1. Confira a tarifa na fatura.");
    o.avisos.push("Consumo mês a mês não vem no texto do PDF (histórico é gráfico). Preencha em “Consumo mês a mês” se quiser.");
    msg.innerHTML=esc("Importado: "+pre.join(", ")+". "+(anexou?"Fatura anexada ao negócio. ":""))+o.avisos.map(a=>"<br>• "+esc(a)).join("");
    calc();
  }catch(e){ console.error(e); msg.textContent="Não consegui ler o PDF ("+e.message+"). Preencha manualmente."; }
}
$("btn-fat").onclick=()=>$("fat-file").click();
$("fat-file").addEventListener("change",e=>{ const f=e.target.files[0]; if(f) importarFatura(f); e.target.value=""; });

/* ---- datasheet ---- */
const MARCAS=["Canadian Solar","Jinko","Trina","JA Solar","LONGi","Risen","Astronergy","DAH","ZNShine","Sungrow","Growatt","Huawei","Fronius","Deye","WEG","Solis","GoodWe","Hoymiles","SMA","ABB","Intelbras","Sofar","Refusol","Sicon","Elgin","BYD","Tongwei","Aiko","Q CELLS","Hanwha","Yingli","Sineng","Solplanet","APsystems"];
function tipoDS(t){ const i=(t.match(/inverter|inversor|MPPT|AC output|output power/gi)||[]).length, m=(t.match(/\bVoc\b|\bIsc\b|\bPmax\b|module|m[oó]dulo|monocrystalline|TOPCon|bifacial/gi)||[]).length; return m>=i?"modulo":"inversor"; }
function pegaNum(t,res){ for(const re of res){ const m=t.match(re); if(m){ const x=brNum(m[1]); if(isFinite(x)) return x; } } return null; }
function parseDS(txt,fname){
  const t=txt.replace(/\s+/g," "), tipo=tipoDS(t), marca=(MARCAS.find(b=>norm(t).includes(norm(b)))||"").trim(), base=fname.replace(/\.pdf$/i,"").replace(/[_]+/g," ");
  if(tipo==="modulo"){
    const wp=pegaNum(t,[/(?:Pmax|P\s*max|Maximum Power|Pot[eê]ncia m[aá]xima)[^0-9]{0,40}(\d{3})\b/i,/\b(\d{3})\s*W[pP]?\b/])||pegaNum(base,[/(\d{3})\s*W/i,/-(\d{3})/]);
    const dim=t.match(/(\d{4})\s*[x×*]\s*(\d{3,4})\s*[x×*]\s*\d{2}/);
    return {tipo,marca:marca||"",modelo:(wp?wp+" Wp":base.slice(0,24)),wp:wp||0,comp:dim?+dim[1]:0,larg:dim?+dim[2]:0,
      voc:pegaNum(t,[/\bVoc\b[^0-9]{0,25}(\d{2}[.,]\d{1,2})/i,/Open[- ]circuit voltage[^0-9]{0,25}(\d{2}[.,]\d{1,2})/i])||0,
      isc:pegaNum(t,[/\bIsc\b[^0-9]{0,25}(\d{1,2}[.,]\d{1,2})/i,/Short[- ]circuit current[^0-9]{0,25}(\d{1,2}[.,]\d{1,2})/i])||0,
      vmp:pegaNum(t,[/\bVmp\b[^0-9]{0,25}(\d{2}[.,]\d{1,2})/i,/Voltage at Pmax[^0-9]{0,25}(\d{2}[.,]\d{1,2})/i])||0,
      imp:pegaNum(t,[/\bImp\b[^0-9]{0,25}(\d{1,2}[.,]\d{1,2})/i,/Current at Pmax[^0-9]{0,25}(\d{1,2}[.,]\d{1,2})/i])||0,
      coefVoc:pegaNum(t,[/(?:coefficient of Voc|Coef[^ ]* de Voc)[^-0-9]{0,25}(-?\d[.,]\d+)/i])||-0.25,
      coefP:pegaNum(t,[/(?:coefficient of Pmax|Coef[^ ]* de Pmax)[^-0-9]{0,25}(-?\d[.,]\d+)/i])||-0.29,garantia:25,preco:0};
  }
  const kw=pegaNum(t,[/(?:Rated|Nominal|Max\.?)\s*(?:AC\s*)?(?:output\s*)?(?:active\s*)?power[^0-9]{0,30}(\d+(?:[.,]\d+)?)\s*kW/i,/Pot[eê]ncia (?:nominal )?CA[^0-9]{0,20}(\d+(?:[.,]\d+)?)\s*kW/i,/(\d+(?:[.,]\d+)?)\s*kW/i])||pegaNum(base,[/(\d+(?:[.,]\d+)?)\s*kW/i])||0;
  const mppt=pegaNum(t,[/(\d)\s*MPPT/i,/(?:Number of MPPT|MPPT)[^0-9]{0,20}(\d)\b/i])||2;
  const fases=/three[- ]phase|trif[aá]sico|3[- ]phase|3P\b/i.test(t)?3:/single[- ]phase|monof[aá]sico/i.test(t)?1:(kw>=10?3:1);
  return {tipo,marca,modelo:base.slice(0,28)||(kw+" kW"),kw,fases,mppt,strMppt:pegaNum(t,[/strings? per MPPT[^0-9]{0,15}(\d)/i,/(\d)\s*strings? por MPPT/i])||1,
    vmax:pegaNum(t,[/Max(?:imum)?\.?\s*(?:DC\s*)?(?:input\s*)?voltage[^0-9]{0,20}(\d{3,4})/i])||(fases===3?1100:600),
    vmin:pegaNum(t,[/MPPT[^0-9]{0,30}(?:range|voltage)[^0-9]{0,20}(\d{2,3})/i,/Start[- ]up voltage[^0-9]{0,15}(\d{2,3})/i])||(fases===3?180:80),
    iscMax:pegaNum(t,[/Max(?:imum)?\.?\s*(?:short[- ]circuit|input)\s*current[^0-9]{0,25}(\d{2}(?:[.,]\d)?)/i])||(fases===3?20:16),preco:0};
}
async function fotoPDF(pdf){
  try{ const pg=await pdf.getPage(1), vp0=pg.getViewport({scale:1}), esc_=520/vp0.width, vp=pg.getViewport({scale:esc_});
    const c=document.createElement("canvas"); c.width=Math.round(vp.width); c.height=Math.round(vp.height*0.5);
    const ctx=c.getContext("2d"); ctx.fillStyle="#fff"; ctx.fillRect(0,0,c.width,c.height);
    await pg.render({canvasContext:ctx,viewport:vp}).promise;
    return c.toDataURL("image/jpeg",0.72);
  }catch(e){ return ""; }
}
async function importarDatasheets(files){
  const msg=$("ds-msg"); const res=[]; let mexp=false;
  for(const f of files){
    msg.textContent="Lendo "+f.name+"…";
    try{
      const pdf=await pdfDoc(f), txt=(await pdfLinhas(pdf,2)).join(" "), d=parseDS(txt,f.name);
      if(d.tipo==="modulo"){
        if(NEG && !ISADM){ res.push(f.name+" (módulo: só administrador grava na base)"); continue; }
        const foto=await fotoPDF(pdf), novo=Object.assign({id:uid("m"),foto,ds:{arquivo:f.name,em:new Date().toISOString().slice(0,10)}},d); delete novo.tipo;
        CONFIG.modulos.push(novo); mexp=true; res.push("módulo "+(novo.marca+" "+novo.modelo).trim()+" (usado nos dados do dimensionamento)");
        Object.keys(EDITORS).forEach(renderEditorTable); refreshSelects(); $("modsel").value=novo.id; $("madd").value=0;
      } else {
        // inversor: não entra na seleção; vai para o campo de descrição do fornecedor
        const nome=(d.marca+" "+d.modelo).trim(), linha="Inversor "+nome+(d.kw?" · "+num(d.kw,1)+" kW":"")+(d.fases?" · "+(d.fases===1?"monofásico":d.fases===2?"bifásico":"trifásico"):"")+(d.mppt?" · "+d.mppt+" MPPT":"")+(d.vmax?" · tensão máx. CC "+d.vmax+" V":"");
        if(NEG && !ISADM){ res.push(f.name+" (inversor: só administrador grava na base)"); continue; }
        let ex=CONFIG.inversores.find(x=>norm(x.marca+" "+x.modelo)===norm(nome)&&+x.kw===+d.kw), novoI=Object.assign({id:uid("i"),preco:0,rev:true,ds:{arquivo:f.name,em:new Date().toISOString().slice(0,10)}},d);
        delete novoI.tipo; if(ex){ Object.assign(ex,novoI,{id:ex.id,preco:ex.preco}); novoI=ex; } else CONFIG.inversores.push(novoI);
        mexp=true; Object.keys(EDITORS).forEach(renderEditorTable); refreshSelects(); res.push("inversor "+nome+(ex?" (atualizado)":" (novo na base)"));
      }
    }catch(e){ console.error(e); res.push(f.name+" (falhou)"); }
  }
  saveCfg(); calc();
  msg.textContent="Importado: "+res.join("; ")+"."+(mexp?" Revise os valores do módulo em Configurações → Equipamentos.":"");
  if(NEG && ISADM && mexp) $("cfg-save").click();
}
$("btn-ds").onclick=()=>$("ds-file").click();
$("ds-file").addEventListener("change",e=>{ const fs=[...e.target.files]; if(fs.length) importarDatasheets(fs); e.target.value=""; });

/* ---- OCR do print do distribuidor + base de textos ---- */
$("btn-ocr").onclick=()=>$("ocr-file").click();
$("ocr-file").addEventListener("change",async e=>{
  const f=e.target.files[0]; e.target.value=""; if(!f) return;
  $("txt-msg").textContent="Lendo o print… (pode levar alguns segundos)";
  try{
    if(!window.Tesseract) await loadScriptJs("https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js");
    const r=await Tesseract.recognize(f,"por");
    $("disttxt").value=(($("disttxt").value?$("disttxt").value+"\n":"")+r.data.text).trim(); $("txt-msg").textContent="Texto extraído. Revise e ajuste antes de guardar."; calc();
  }catch(err){ console.error(err); $("txt-msg").textContent="Não consegui ler a imagem aqui. Cole o texto manualmente."; }
});
async function carregarBaseTextos(){
  if(!SB||!NEG) return;
  let data=[]; try{ const r=await SB.from("solar_equip_textos").select("id,titulo,texto,criado_em").order("criado_em",{ascending:false}).limit(40); data=r.data||[]; }catch(e){}
  window.TXTBASE=data;
  $("txtbase").innerHTML='<option value="">Base de textos salvos…</option>'+TXTBASE.map(t=>`<option value="${t.id}">${esc(t.titulo)}</option>`).join("");
}
$("txtbase").addEventListener("change",()=>{ const t=(window.TXTBASE||[]).find(x=>x.id===$("txtbase").value); if(t){ $("disttxt").value=t.texto; calc(); } });
$("btn-txtsave").onclick=async()=>{
  const tx=$("disttxt").value.trim(); if(!tx){ $("txt-msg").textContent="Nada para guardar."; return; }
  if(!SB||!NEG||!CAN_EDIT){ $("txt-msg").textContent="Disponível só dentro do negócio, com permissão de edição."; return; }
  const titulo=(($("cliente").value||"Sem cliente")+" · "+new Date().toLocaleDateString("pt-BR"));
  const {error}=await SB.from("solar_equip_textos").insert({negocio_id:NEG,titulo,texto:tx});
  $("txt-msg").textContent=error?("Não guardou: "+error.message):"Guardado na base de textos ✓"; if(!error) carregarBaseTextos();
};

/* ---- assinatura e logos dos bancos (Configurações) ---- */
function imgParaDataUrl(file,maxW,tipo){
  return new Promise((res,rej)=>{ const img=new Image(), u=URL.createObjectURL(file);
    img.onload=()=>{ const W=Math.min(maxW,img.width), H=Math.round(img.height*W/img.width), c=document.createElement("canvas"); c.width=W; c.height=H; const x=c.getContext("2d"); if(tipo==="jpg"){ x.fillStyle="#fff"; x.fillRect(0,0,W,H); } x.drawImage(img,0,0,W,H); URL.revokeObjectURL(u); res(c.toDataURL(tipo==="jpg"?"image/jpeg":"image/png",0.85)); };
    img.onerror=()=>rej(new Error("imagem inválida")); img.src=u; });
}
function assinPrev(){ const im=(CONFIG.prop||{}).assin||"", e=$("assin-prev"); e.style.display=im?"block":"none"; if(im) e.src=im; }
$("assin-file").addEventListener("change",async e=>{ const f=e.target.files[0]; if(!f) return; CONFIG.prop.assin=await imgParaDataUrl(f,520,"png"); saveCfg(); assinPrev(); calc(); });
function renderBk(){
  $("bk-logos").innerHTML=(CONFIG.prop.bancos||[]).map((b,i)=>`<label><b>${esc(b.nome)}</b>${b.logo?`<img src="${b.logo}" alt="">`:`<span class="mini" style="display:block">sem logo (mostra o nome)</span>`}<input type="file" accept="image/*" data-bk="${i}">${b.logo?`<button class="btn alt small" type="button" data-bkrm="${i}">Remover</button>`:""}</label>`).join("");
}
$("bk-logos").addEventListener("change",async e=>{ const i=e.target.dataset.bk; if(i==null||!e.target.files[0]) return; CONFIG.prop.bancos[+i].logo=await imgParaDataUrl(e.target.files[0],260,"png"); saveCfg(); renderBk(); calc(); });
$("bk-logos").addEventListener("click",e=>{ const b=e.target.closest("[data-bkrm]"); if(!b) return; CONFIG.prop.bancos[+b.dataset.bkrm].logo=""; saveCfg(); renderBk(); calc(); });
function initV3(){ renderBk(); assinPrev(); }
initV3();
function fillInvSel(){ const cur=$("invsel").value; $("invsel").innerHTML='<option value="auto">Automático (menor compatível)</option>'+CONFIG.inversores.map(i=>`<option value="${i.id}">${esc((i.marca+" "+i.modelo).trim())} · ${num(i.kw,1)} kW</option>`).join(""); if([...$("invsel").options].some(o=>o.value===cur)) $("invsel").value=cur; }
fillInvSel();
$("pr-modo").addEventListener("change",()=>{ if(typeof atualizarPrev==="function") atualizarPrev(); if(typeof agendar==="function") agendar(); });

$("strip").style.display="none";

window.GC_NUM="";
function propVer(){ return +$("pr-ver").value||0; }
function verTxt(){ $("pr-vertxt").textContent=propVer()?("Versão atual: v"+propVer()+" · "+$("pr-verdata").value):"Nenhuma versão emitida (a v1 é criada ao abrir ou baixar). Para uma nova proposta, use \"Criar outra proposta\""; }
function emitirVersao(){ if(!R) return; if(!propVer()){ $("pr-ver").value=1; $("pr-verdata").value=new Date().toLocaleDateString("pt-BR"); $("pr-verkey").value=Math.round(R.invest)+"|"+R.modulos+"|"+R.kwp.toFixed(2); verTxt(); if(typeof agendar==="function") agendar(); if(typeof atualizarPrev==="function") atualizarPrev(); } }
verTxt();

/* ============ v4: modelos de capa, versões da proposta ============ */
const CAPAS = [{"id": "aurora", "nome": "Aurora", "desc": "Foto em círculo ao amanhecer", "W": 503, "H": 724, "bar": [45, 363, 54], "pill": [329, 38, 461, 66], "cli": [61, 251], "cn": "#00023c", "cl": "#143483"}, {"id": "horizonte", "nome": "Horizonte", "desc": "Faixa diagonal com ícones de benefícios", "W": 502, "H": 724, "bar": [47, 362, 54], "pill": [330, 38, 462, 66], "cli": [63, 251], "cn": "#00033f", "cl": "#173581"}, {"id": "amanhecer", "nome": "Amanhecer", "desc": "Nascer do sol sobre os painéis", "W": 503, "H": 709, "bar": [45, 336, 55], "pill": [329, 35, 461, 63], "cli": [61, 291], "cn": "#00023d", "cl": "#193e8d"}, {"id": "residencial", "nome": "Residencial", "desc": "Casa com painéis em traço azul", "W": 502, "H": 709, "bar": [46, 350, 55], "pill": [331, 34, 463, 62], "cli": [62, 291], "cn": "#00023e", "cl": "#184498"}, {"id": "prime", "nome": "Prime", "desc": "Onda em azul com foto grande e faixa escura", "W": 1055, "H": 1491, "bar": [75, 684, 123], "pill": [738, 73, 986, 120], "cli": [91, 548], "cn": "#00123e", "cl": "#0265c8"}, {"id": "facetas", "nome": "Facetas", "desc": "Foto em formato angular, assinatura \"futuro mais verde\"", "W": 1055, "H": 1491, "bar": [77, 708, 126], "pill": [727, 58, 988, 108], "cli": [93, 564], "cn": "#00194d", "cl": "#0171df"}, {"id": "onda", "nome": "Onda", "desc": "Curva ampla com anéis finos", "W": 1055, "H": 1491, "bar": [73, 721, 149], "pill": [732, 71, 983, 116], "cli": [89, 548], "cn": "#001547", "cl": "#0173d8"}, {"id": "circulo", "nome": "Círculo", "desc": "Grande círculo de foto e onda no rodapé", "W": 1055, "H": 1491, "bar": [68, 700, 133], "pill": [745, 69, 993, 113], "cli": [84, 548], "cn": "#00174a", "cl": "#027fe3"}, {"id": "minimal", "nome": "Minimal", "desc": "Muito branco, círculo menor, visual limpo", "W": 1055, "H": 1491, "bar": [73, 705, 131], "pill": [768, 89, 971, 126], "cli": [89, 548], "cn": "#00123e", "cl": "#056ec1"}];
const CAPA_B64 = {};
function capaUrl(id){ return new URL("assets/capas/"+id+".jpg", location.href).href; }
function capaAtual(){ const s=$("pr-capa"); const v_=(s&&s.value)||((CONFIG.capa||{}).estilo)||"prime"; return v_; }
async function capaPronta(){ const m=CAPAS.find(c=>c.id===capaAtual()); if(!m||CAPA_B64[m.id]) return; CAPA_B64[m.id]=await dataUrl("assets/capas/"+m.id+".jpg"); }
function capaMarca(){ const cur=(CONFIG.capa||{}).estilo; document.querySelectorAll("#capa-gal [data-cp]").forEach(b=>b.classList.toggle("on",b.dataset.cp===cur)); }
function initCapas(){ tabProjTxt(); if(typeof pmFill==="function") pmFill($("pm-sel").value);
  if(!CONFIG.capa) CONFIG.capa={};
  if(CONFIG.capa.estilo==="paineis"||!CONFIG.capa.estilo) CONFIG.capa.estilo="prime";
  const ps=$("pr-capa"), keep=ps.value;
  ps.innerHTML='<option value="">Padrão das configurações ('+esc((CAPAS.find(c=>c.id===CONFIG.capa.estilo)||{nome:"personalizada"}).nome)+')</option>'+CAPAS.map(c=>`<option value="${c.id}">${esc(c.nome)} · ${esc(c.desc)}</option>`).join("");
  if([...ps.options].some(o=>o.value===keep)) ps.value=keep;
  const cs=document.querySelector('[data-cfg="capa.estilo"]');
  if(cs){ if(!cs.querySelector("optgroup")) cs.insertAdjacentHTML("afterbegin",'<optgroup label="Modelos de capa">'+CAPAS.map(c=>`<option value="${c.id}">${esc(c.nome)}</option>`).join("")+'</optgroup>'); cs.value=CONFIG.capa.estilo; }
  const g=$("capa-gal"); if(g&&!g.children.length) g.innerHTML=CAPAS.map(c=>`<button type="button" class="cpb" data-cp="${c.id}" title="${esc(c.desc)}"><img src="assets/capas/t-${c.id}.jpg" alt=""><span>${esc(c.nome)}</span></button>`).join("");
  capaMarca();
}
$("capa-gal").addEventListener("click",e=>{ const b=e.target.closest("[data-cp]"); if(!b) return; CONFIG.capa.estilo=b.dataset.cp; const cs=document.querySelector('[data-cfg="capa.estilo"]'); if(cs) cs.value=b.dataset.cp; saveCfg(); capaMarca(); initCapas(); calc(); });
document.querySelector('[data-cfg="capa.estilo"]').addEventListener("change",()=>{ setTimeout(()=>{ capaMarca(); initCapas(); },0); });
$("pr-capa").addEventListener("change",()=>{ capaPronta().then(()=>{ if(typeof atualizarPrev==="function") atualizarPrev(); }); if(typeof agendar==="function") agendar(); });

/* ---- versões: criar outra proposta (sempre a partir da fatura) ---- */
function histGet(){ try{ return JSON.parse($("pr-hist").value||"[]"); }catch(e){ return []; } }
function histSel(){ const a=histGet(), s=$("pr-hsel"); s.innerHTML=a.length?a.map((x,i)=>`<option value="${i}">v${x.v} · ${esc(x.data||"")} · ${brl(x.invest)} · ${num(x.kwp,2)} kWp</option>`).join(""):'<option value="">(nenhuma anterior)</option>'; $("pr-hrest").disabled=!a.length; }
function chaveVer(){ return Math.round(R.invest)+"|"+R.modulos+"|"+R.kwp.toFixed(2); }
function resumoVer(){ const s=snapshot(); delete s.f["pr-hist"]; return {v:propVer(),data:$("pr-verdata").value,invest:Math.round(R.invest),kwp:+R.kwp.toFixed(2),modulos:R.modulos,snap:s}; }
function novaVersao(nv){ $("pr-ver").value=nv; $("pr-verdata").value=new Date().toLocaleDateString("pt-BR"); }
function criarOutraProposta(){
  if(!R) return; if(NEG&&!CAN_EDIT) return;
  emitirVersao();
  const a=histGet(); a.push(resumoVer());
  const nv=Math.max(propVer(),...a.map(h=>h.v))+1;
  // volta ao dimensionamento puro da fatura: mantém consumo, tarifa, concessionária, telhado e custos
  [["madd","0"],["desc","0"],["kitcot",""]].forEach(([id,v_])=>{ const e=$(id); if(e) e.value=v_; });
  const iv=$("invsel"); if(iv&&[...iv.options].some(o=>o.value==="auto")) iv.value="auto";
  const mt=$("meta"); if(mt) mt.value=mt.defaultValue||"100";
  $("pr-hist").value=JSON.stringify(a); novaVersao(nv); $("pr-verkey").value="";
  calc(); $("pr-verkey").value=chaveVer(); histSel(); verTxt(); if(typeof agendar==="function") agendar();
  flash($("toast"),"Proposta v"+nv+" criada a partir da fatura ("+num(v("consumo"))+" kWh/mês · tarifa R$ "+num(v("tarifa"),4)+"). A v"+a[a.length-1].v+" ficou guardada.");
}
function duplicarVersao(){
  const a=histGet(), x=a[+$("pr-hsel").value]; if(!x||!R) return;
  if(!a.some(h=>h.v===propVer())&&propVer()>0) a.push(resumoVer());
  const nv=Math.max(propVer(),...a.map(h=>h.v))+1;
  restore(x.snap);
  $("pr-hist").value=JSON.stringify(a); novaVersao(nv); $("pr-verkey").value="";
  calc(); $("pr-verkey").value=chaveVer(); histSel(); verTxt(); if(typeof agendar==="function") agendar();
  flash($("toast"),"Proposta v"+nv+" criada a partir da v"+x.v+".");
}
$("pr-nova").onclick=criarOutraProposta; $("pr-hrest").onclick=duplicarVersao;
histSel(); initCapas();

/* ---- tabela de projeto */
function tabProjTxt(){ $("tabproj-txt").value=(CONFIG.tabProj||[]).map(r=>[r.ate,r.v].join(" ; ")).join("\n"); }
$("tabproj-txt").addEventListener("input",e=>{ CONFIG.tabProj=e.target.value.split(/\n/).map(l=>l.split(/[;\t]/).map(x=>parseFloat(String(x).replace(/\./g,"").replace(",",".")))).filter(a=>isFinite(a[0])&&isFinite(a[1])).map(a=>({ate:a[0],v:a[1]})); saveCfg(); calc(); if(typeof renderPreco==="function") renderPreco(); });
tabProjTxt();

/* ---- tensão sugerida pelo padrão de entrada (editável) */
$("padrao").addEventListener("change",()=>{ $("tensao").value={"30":"mono220","50":"bi220","100":"tri380"}[$("padrao").value]||"mono220"; if(typeof atualizarPrev==="function") atualizarPrev(); });
$("tensao").addEventListener("change",()=>{ if(typeof atualizarPrev==="function") atualizarPrev(); if(typeof agendar==="function") agendar(); });

/* ---- modelos de precificação */
const PM_IDS=["metodo","margem","origem","desclib"];
function pmList(){ if(!Array.isArray(CONFIG.modelosPreco)) CONFIG.modelosPreco=[]; return CONFIG.modelosPreco; }
function pmFill(sel){ const a=pmList(), s=$("pm-sel"); s.innerHTML=a.length?a.map(m=>`<option value="${m.id}">${esc(m.nome)}</option>`).join(""):'<option value="">(nenhum salvo)</option>'; if(sel&&a.some(m=>m.id===sel)) s.value=sel; }
function pmMsg(t){ $("pm-msg").textContent=t; setTimeout(()=>{ $("pm-msg").textContent=""; },4000); }
$("pm-sal").onclick=()=>{
  const nome=($("pm-nome").value||"").trim()||(pmList().find(m=>m.id===$("pm-sel").value)||{}).nome; if(!nome){ pmMsg("Digite um nome para o modelo."); return; }
  const f={}; PM_IDS.forEach(id=>{ const e=$(id); if(e) f[id]=e.value; });
  const a=pmList(), ex=a.find(m=>m.nome.toLowerCase()===nome.toLowerCase()), m={id:ex?ex.id:"pm"+Date.now().toString(36),nome,costs:clone(COSTS),f};
  if(ex) a[a.indexOf(ex)]=m; else a.push(m);
  saveCfg(); pmFill(m.id); $("pm-nome").value=""; if(typeof cfgMark==="function"){ CFG_DIRTY=true; cfgMark(); } if(NEG&&ISADM) $("cfg-save").click();
  pmMsg(ex?"Modelo atualizado.":"Modelo salvo.");
};
$("pm-apl").onclick=()=>{
  const m=pmList().find(x=>x.id===$("pm-sel").value); if(!m) return;
  Object.keys(COSTS).forEach(k=>{ if(m.costs[k]) COSTS[k]=clone(m.costs[k]); });
  nextId=Math.max(nextId,...Object.values(COSTS).flat().map(l=>+l.id||0))+1;
  Object.entries(m.f||{}).forEach(([id,val])=>{ const e=$(id); if(e&&!(e.tagName==="SELECT"&&![...e.options].some(o=>o.value===String(val)))) e.value=val; });
  if(typeof updateMargemLabel==="function") updateMargemLabel();
  renderEditor(); calc(); renderPreco(); pmMsg("Modelo \""+m.nome+"\" aplicado.");
};
$("pm-del").onclick=()=>{ const a=pmList(), i=a.findIndex(x=>x.id===$("pm-sel").value); if(i<0) return; const n=a[i].nome; a.splice(i,1); saveCfg(); pmFill(); if(NEG&&ISADM) $("cfg-save").click(); pmMsg("Modelo \""+n+"\" excluído."); };
pmFill();

/* ============ v5: cadastro do negócio → dados da proposta ============ */
function fmtDocBR(d){ d=String(d||"").replace(/\D/g,""); if(d.length===11) return d.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4"); if(d.length===14) return d.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,"$1.$2.$3/$4-$5"); return d; }
function fmtCepBR(c){ c=String(c||"").replace(/\D/g,""); return c.length===8?c.slice(0,5)+"-"+c.slice(5):c; }
function cadPuxar(neg){
  const c=(neg&&neg.cadastro)||{};
  window.CAD_DOC=fmtDocBR(c.doc);
  const end=[c.endereco,c.numero,c.complemento,c.bairro].map(s=>String(s||"").trim()).filter(Boolean).join(", ");
  const cidB=String((neg&&neg.cidade)||c.cidade||"").trim(), cid=/\(\s*[A-Za-z]{2}\s*\)\s*$/.test(cidB)||!c.uf?cidB:cidB+" / "+String(c.uf).trim();
  let n=0;
  [["pend",end],["pcid",cid],["pcep",fmtCepBR(c.cep)]].forEach(([id,val])=>{ const e=$(id); if(e&&val){ e.value=val; e.readOnly=true; e.style.opacity=".75"; e.title="Vem do cadastro do cliente (edite no cadastro do negócio)"; n++; } });
  if(cid){ const f=()=>{ aplicarCidade(cid); cidErro(); }; if(window.CID) CID.load().then(f,f); else f(); } else cidErro();
  if($("cad-note")) $("cad-note").textContent=n?"Endereço, cidade e CEP vêm do cadastro do cliente no negócio. Para alterar, edite o cadastro.":"Cadastro do cliente sem endereço: preencha aqui ou complete o cadastro no negócio.";
}

/* ============ v5: outras UCs (geração compartilhada) ============ */
function ucsGet(){ try{ return JSON.parse($("ucs-json").value||"[]"); }catch(e){ return []; } }
function ucsSet(a){ $("ucs-json").value=JSON.stringify(a); }
function ucsAtivas(aum){ return ucsGet().filter(u=>+u.consumo>0).map(u=>{ const fee=+u.padrao||30, c=(+u.consumo)*(1+(aum||0)); return {uc:u.uc||"",desc:u.desc||"",fee,tar:+u.tarifa||v("tarifa"),cons:c,comp:Math.max(c-fee,0),pct:+u.pct||0}; }); }
function ucsShares(U,comp0){
  const auto=$("ucs-auto")?$("ucs-auto").checked:true, tot=(comp0+U.reduce((s,u)=>s+u.comp,0))||1;
  let f=(auto||U.every(u=>!(u.pct>0)))?U.map(u=>u.comp/tot):U.map(u=>Math.max(0,u.pct)/100);
  const s=f.reduce((a,b)=>a+b,0); if(s>1) f=f.map(x=>x/s);
  return {f,f0:Math.max(0,1-f.reduce((a,b)=>a+b,0))};
}
function ucsResult(U,SH,G,fiob,year){
  let depois=0, ecoMes=0; const fp=fioPct(year);
  const list=U.map((u,k)=>{ const gi=G*SH.f[k], cred=Math.min(gi,u.comp), sobra=Math.max(gi-u.comp,0), fio=cred*fp*fiob, eco=cred*u.tar-fio;
    depois+=Math.max(u.cons-gi,u.fee)*u.tar+fio; ecoMes+=eco;
    return {uc:u.uc,desc:u.desc,cons:u.cons,fee:u.fee,tar:u.tar,pct:SH.f[k]*100,cred,sobra,ecoMes:eco}; });
  return {list,depois,ecoMes};
}
function ucsRender(){
  const a=ucsGet(), auto=$("ucs-auto").checked, cls=$("pclasse").innerHTML;
  $("ucs-list").innerHTML=a.map((u,i)=>`<div class="ucrow" data-i="${i}" style="border:1px solid var(--line,#2a3a4a);border-radius:10px;padding:10px;margin-bottom:8px">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><b>UC ${i+2}</b><button class="btn alt small" type="button" data-del>Remover</button></div>
    <div class="fields">
      <label>Nº da UC<input data-k="uc" value="${esc(u.uc||"")}"></label>
      <label>Titular / descrição<input data-k="desc" value="${esc(u.desc||"")}"></label>
      <label>Classe<select data-k="classe">${cls}</select></label>
      <label>Padrão de entrada<select data-k="padrao"><option value="30">Monofásico (mín. 30 kWh)</option><option value="50">Bifásico (mín. 50 kWh)</option><option value="100">Trifásico (mín. 100 kWh)</option></select></label>
      <label>Tarifa com impostos (R$/kWh)<input data-k="tarifa" type="number" step="0.0001" min="0" value="${u.tarifa??""}"></label>
      <label>Consumo médio (kWh/mês)<input data-k="consumo" type="number" step="1" min="0" value="${u.consumo??""}"></label>
      <label>% dos créditos<input data-k="pct" type="number" step="1" min="0" max="100" value="${u.pct??""}" ${auto?"disabled":""}></label>
    </div></div>`).join("");
  document.querySelectorAll("#ucs-list .ucrow").forEach(row=>{ const u=a[+row.dataset.i]; row.querySelector('[data-k="classe"]').value=u.classe||"B1R"; row.querySelector('[data-k="padrao"]').value=u.padrao||"30"; });
}
function ucAdd(o){ const a=ucsGet(); a.push(Object.assign({uc:"",desc:"",classe:$("pclasse").value,padrao:"30",tarifa:v("tarifa")||"",consumo:"",pct:""},o||{})); ucsSet(a); ucsRender(); if(typeof agendar==="function") agendar(); calc(); }
$("uc-add").onclick=()=>ucAdd();
$("ucs-auto").addEventListener("change",()=>{ ucsRender(); calc(); if(typeof agendar==="function") agendar(); });
$("ucs-list").addEventListener("input",e=>{ const row=e.target.closest(".ucrow"); if(!row||!e.target.dataset.k) return; const a=ucsGet(), u=a[+row.dataset.i]; if(!u) return; u[e.target.dataset.k]=e.target.value; ucsSet(a); calc(); if(typeof agendar==="function") agendar(); });
$("ucs-list").addEventListener("click",e=>{ if(!e.target.closest("[data-del]")) return; const row=e.target.closest(".ucrow"), a=ucsGet(); a.splice(+row.dataset.i,1); ucsSet(a); ucsRender(); calc(); if(typeof agendar==="function") agendar(); });
function renderUcsSum(r){
  const el=$("ucs-sum"); if(!el) return;
  if(!r.ucs||!r.ucs.length){ el.innerHTML=""; return; }
  const mainCred=Math.min(r.gerMes*r.ucF0/100,Math.max(r.cons-r.fee,0));
  const lin=r.ucs.map((u,i)=>`<tr><td>UC ${i+2}${u.uc?" · "+esc(u.uc):""}</td><td>${num(u.cons)}</td><td>${num(u.pct,1)}%</td><td>${num(u.cred)}</td><td>${brl(u.ecoMes)}</td></tr>`).join("");
  const av=r.ucs.filter(u=>u.sobra>0.5).map(u=>`UC ${u.uc||u.desc||""}: sobram ${num(u.sobra)} kWh/mês de crédito acima do consumo compensável`).join("; ");
  el.innerHTML=`<table class="data tight"><thead><tr><th>Unidade</th><th>Consumo</th><th>% geração</th><th>Crédito kWh/mês</th><th>Economia/mês</th></tr></thead><tbody><tr><td>UC principal</td><td>${num(r.cons)}</td><td>${num(r.ucF0,1)}%</td><td>${num(mainCred)}</td><td>${brl(r.ecoMes1-r.ucs.reduce((s,u)=>s+u.ecoMes,0))}</td></tr>${lin}</tbody></table><p class="note">Fio B escalonado (Lei 14.300) sobre todos os créditos injetados nas outras UCs; a UC principal abate o consumo simultâneo.${av?` <b style="color:#ff8a80">⚠ ${esc(av)}. Ajuste o percentual.</b>`:""}</p>`;
}
async function anexarPdf(file){ if(!(SB&&NEG&&CAN_EDIT)) return false; try{ const path=NEG+"/"+Date.now().toString(36)+Math.random().toString(36).slice(2,7)+".pdf"; const up=await SB.storage.from("negocios").upload(path,file,{contentType:"application/pdf"}); if(up.error) throw up.error; const url=SB.storage.from("negocios").getPublicUrl(path).data.publicUrl; const ins=await SB.from("neg_anexos").insert({negocio_id:NEG,nome:file.name||"fatura.pdf",tipo:"application/pdf",tam:file.size,url}); if(ins&&ins.error) throw ins.error; return true; }catch(e){ console.error(e); return false; } }
$("uc-pdf").onclick=()=>$("uc-file").click();
$("uc-file").addEventListener("change",async e=>{ const f=e.target.files[0]; e.target.value=""; if(!f) return; const msg=$("uc-msg"); msg.textContent="Lendo a fatura…";
  try{ const pdf=await pdfDoc(f), o=parseFatura(await pdfLinhas(pdf,2)); if(!(o.consumo||o.tarifa)){ msg.textContent="Não encontrei dados nesse PDF. Use “Nova UC” e preencha manualmente."; return; }
    const ok=await anexarPdf(f); ucAdd({uc:o.uc||"",desc:o.nome||"",classe:o.classe||$("pclasse").value,padrao:o.padrao||"30",tarifa:o.tarifa||v("tarifa"),consumo:o.consumo||""});
    msg.textContent="UC importada"+(o.uc?" ("+o.uc+")":"")+(ok?" e fatura anexada ao negócio.":".")+(o.tarifaTipo==="estimada"?" Tarifa estimada: confira.":""); }
  catch(err){ console.error(err); msg.textContent="Não consegui ler o PDF ("+err.message+")."; } });

/* ---- cidade do cadastro: erro se fora da base ---- */
function cidErro(){
  const el=$("cid-err"); if(!el) return; const t=($("pcid").value||"").trim();
  if(!t){ el.style.display="none"; return; }
  const m=cidadeMatch(t);
  if(m&&m.exato){ el.style.display="none"; return; }
  el.style.display=""; el.textContent="⚠ Cidade “"+t+"” não encontrada na base de irradiação"+(m?"; usando "+m.k+" como aproximação":"")+". Corrija a cidade no cadastro do cliente ou escolha em Configurações → Técnicas → Local e irradiação.";
}
$("pcid").addEventListener("input",()=>{ cidErro(); });

ucsRender();

/* ---- modelos de texto das observações ---- */
function txmList(){ if(!Array.isArray(CONFIG.modelosTexto)) CONFIG.modelosTexto=[]; return CONFIG.modelosTexto; }
function txmFill(sel){ const a=txmList(), s=$("txm-sel"); s.innerHTML='<option value="">'+(a.length?"Modelos de texto…":"(nenhum modelo salvo)")+'</option>'+a.map(m=>`<option value="${m.id}">${esc(m.nome)}</option>`).join(""); if(sel) s.value=sel; }
function txmMsg(t){ $("txt-msg").textContent=t; setTimeout(()=>{ $("txt-msg").textContent=""; },4000); }
$("txm-sel").addEventListener("change",()=>{ const m=txmList().find(x=>x.id===$("txm-sel").value); if(m){ $("disttxt").value=m.texto; calc(); if(typeof agendar==="function") agendar(); } });
$("txm-apl").onclick=()=>{ const m=txmList().find(x=>x.id===$("txm-sel").value); if(!m){ txmMsg("Escolha um modelo."); return; } $("disttxt").value=m.texto; calc(); txmMsg("Modelo aplicado."); };
$("txm-sal").onclick=()=>{
  const tx=$("disttxt").value.trim(); if(!tx){ txmMsg("Escreva o texto antes de salvar."); return; }
  const nome=($("txm-nome").value||"").trim()||(txmList().find(m=>m.id===$("txm-sel").value)||{}).nome; if(!nome){ txmMsg("Digite um nome para o modelo."); return; }
  const a=txmList(), ex=a.find(m=>m.nome.toLowerCase()===nome.toLowerCase()), m={id:ex?ex.id:"tx"+Date.now().toString(36),nome,texto:tx};
  if(ex) a[a.indexOf(ex)]=m; else a.push(m);
  saveCfg(); txmFill(m.id); $("txm-nome").value=""; if(typeof cfgMark==="function"){ CFG_DIRTY=true; cfgMark(); } if(NEG&&ISADM) $("cfg-save").click();
  txmMsg(ex?"Modelo atualizado.":"Modelo salvo.");
};
$("txm-del").onclick=()=>{ const a=txmList(), i=a.findIndex(x=>x.id===$("txm-sel").value); if(i<0){ txmMsg("Escolha um modelo."); return; } const n=a[i].nome; a.splice(i,1); saveCfg(); txmFill(); if(NEG&&ISADM) $("cfg-save").click(); txmMsg("Modelo \""+n+"\" excluído."); };
txmFill();

/* ---- kit + margem (valor e %) ---- */
function kitMargemSync(r){
  const P=r.P, mr=P.lista-P.K, pc=P.lista>0?mr/P.lista*100:0, a=document.activeElement;
  if(a!==$("km-pct")) $("km-pct").value=(Math.round(pc*10)/10);
  if(a!==$("km-rs")) $("km-rs").value=Math.round(mr*100)/100;
  $("kit-soma").innerHTML=`<span>Kit <b>${brl(P.K)}</b></span><span>+</span><span>Margem <b style="color:var(--accent)">${brl(mr)}</b> (${num(pc,1)}%)</span><span>=</span><span>Preço de lista <b>${brl(P.lista)}</b></span>${P.desc>0?`<span class="mini">· com desconto: ${brl(P.receita)}</span>`:""}`;
}
function kmAplicar(modo,val){
  $("origem").value="preco"; $("metodo").value=modo; $("metodo").dispatchEvent(new Event("change",{bubbles:true}));
  $("margem").value=val; $("margem").dispatchEvent(new Event("input",{bubbles:true}));
}
$("km-pct").addEventListener("input",()=>{ const x=parseFloat($("km-pct").value); if(isFinite(x)) kmAplicar("venda",Math.min(x,95)); });
$("km-rs").addEventListener("input",()=>{ const x=parseFloat($("km-rs").value); if(isFinite(x)) kmAplicar("rs",x); });

/* ---- proposta: linhas de financiamento ---- */
function finUI(){
  const f=(CONFIG.financeiras||[]).slice(0,3), on=$("pr-fin").checked;
  for(let i=0;i<3;i++){ const l=$("pr-finl"+i), x=f[i]; l.style.display=x?"flex":"none";  if(x) l.querySelector("span").textContent=`${x.nome||"Financeira"} · ${x.prazo||60}x · ${x.taxa||0}% a.m.`+((+x.entrada)>0?` · entrada ${x.entrada}%`:""); $("pr-fin"+i).disabled=!on; }
  $("pr-finbox").style.opacity=on?"1":".5";
}
["pr-fin","pr-fin0","pr-fin1","pr-fin2"].forEach(id=>$(id).addEventListener("change",()=>{ finUI(); if(typeof atualizarPrev==="function") atualizarPrev(); if(typeof agendar==="function") agendar(); }));
document.getElementById("tab-prop").addEventListener("click",finUI);
finUI();

/* ---- equipamentos do sistema (descritivo sem valores) ---- */
function renderEquip(r){
  const el=$("equip-list"); if(!el||!r||!r.mod) return;
  const m=r.mod, i=r.inv||{}, tipoF=x=>x===1?"monofásico":x===2?"bifásico":"trifásico";
  const lnk=x=>x&&x.ds&&x.ds.url?` <a href="${esc(x.ds.url)}" target="_blank" rel="noopener" class="mini">datasheet ↗</a>`:"";
  const itens=[
    {n:r.modulos+" un.",t:"Módulos fotovoltaicos",s:((m.marca||"")+" "+(m.modelo||"")).trim()+" · "+m.wp+" Wp",d:(m.det||[]).slice(0,3),x:lnk(m)},
    {n:(r.qtdInv||0)+" un.",t:"Inversor",s:((i.marca||"")+" "+(i.modelo||"")).trim()+" · "+num(i.kw||0,1)+" kW · "+tipoF(i.fases),d:(i.det||[]).slice(0,3),x:lnk(i)},
    {n:r.modulos+" módulos",t:"Estrutura de fixação",s:"Para "+r.tel.nome.toLowerCase(),d:[],x:""},
    {n:"1 kit",t:"Cabos, conectores, string box e proteções",s:"Cabos CC solares, conectores MC4, DPS e disjuntores CC/CA",d:[],x:""},
    {n:"1",t:"Projeto, ART, instalação e homologação",s:"Projeto elétrico com ART, instalação por equipe própria e homologação na concessionária",d:[],x:""}];
  el.innerHTML=`<table class="data tight" style="text-align:left"><thead><tr><th style="text-align:left">Item</th><th style="text-align:left">Qtd.</th><th style="text-align:left">Descrição</th></tr></thead><tbody>`+itens.map(k=>`<tr><td style="text-align:left"><b>${esc(k.t)}</b></td><td style="text-align:left;white-space:nowrap">${esc(k.n)}</td><td style="text-align:left">${esc(k.s)}${k.x}${k.d.length?`<div class="mini" style="margin-top:3px">${k.d.map(esc).join(" · ")}</div>`:""}</td></tr>`).join("")+`</tbody></table>`;
}


/* ---- cidade: todos os municípios do Brasil (IBGE) + irradiação estimada ---- */
function ufDe(txt){ const m=String(txt||"").match(/\(\s*([A-Za-z]{2})\s*\)\s*$|[\/\-,]\s*([A-Za-z]{2})\s*$/); return m?(m[1]||m[2]).toUpperCase():""; }
let _baseCoords=null;
function baseCoords(){
  if(_baseCoords) return _baseCoords;
  _baseCoords=Object.keys(CIDADES).map(k=>{ const e=window.CID&&CID.lista?CID.exato(k):null; return e?{k,lat:e.lat,lon:e.lon,h:CIDADES[k].h}:null; }).filter(Boolean);
  return _baseCoords;
}
function irrEstimar(e){
  const ds=baseCoords().map(b=>({b,d:Math.max(CID.dist(e,b),1)})).sort((x,y)=>x.d-y.d).slice(0,3);
  const w=ds.map(x=>1/(x.d*x.d)), sw=w.reduce((a,b)=>a+b,0);
  return {h:ds.reduce((s,x,i)=>s+x.b.h*w[i],0)/sw, perto:ds[0]};
}
function cidInfo(t){ const el=$("cid-info"); if(el) el.textContent=t||""; }
aplicarCidade=function(txt){
  const m=cidadeMatch(txt);
  const e=window.CID&&CID.lista?CID.exato(txt,ufDe(txt)):null;
  if(e){
    const k=CID.fmt(e);
    if(CIDADES[k]){ $("cidade").value=k; setHspm(monthlyFor(k)); cidInfo("Irradiação de "+k+" da base do orçador."); }
    else { const s=irrEstimar(e); $("cidade").value="__custom"; setHspm(seasonal(s.h,e.lat)); cidInfo("Irradiação estimada para "+k+" (média das cidades mais próximas da base, a mais próxima é "+s.perto.b.k+", a "+Math.round(s.perto.d)+" km). Confira em Configurações → Técnicas se precisar ajustar."); }
    if(!$("pcid").value) $("pcid").value=txt;
    return {k:k,exato:true,est:!CIDADES[k]};
  }
  if(!m) return null;
  $("cidade").value=m.k; setHspm(monthlyFor(m.k)); cidInfo("");
  if(!$("pcid").value) $("pcid").value=txt;
  return m;
};
cidErro=function(){
  const el=$("cid-err"); if(!el) return; const t=($("pcid").value||"").trim();
  if(!t||!(window.CID&&CID.lista)){ el.style.display="none"; return; }
  if(CID.exato(t,ufDe(t))){ el.style.display="none"; return; }
  el.style.display=""; el.textContent="⚠ Cidade “"+t+"” não está na lista de municípios do Brasil"+(CID.parse(t).uf?"":" (ou falta a UF)")+". Corrija no cadastro do cliente, no formato Nome (UF). Enquanto isso o orçamento usa a irradiação da cidade mais próxima da lista.";
};
if(window.CID) CID.load().then(()=>{ cidErro(); }).catch(()=>{});

integrar();
