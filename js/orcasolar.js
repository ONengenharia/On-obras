/* ============ CONFIGURAÇÃO PADRÃO ============ */
const DEF = {
  empresa:"ON Engenharia Elétrica", contato:"(55) 99133-7296 · projetos.on.engenharia@gmail.com", validade:10, descMax:5,
  financeiras:[{id:"f1",nome:"Financiamento 36x (exemplo)",taxa:1.85,prazo:36,entrada:0},{id:"f2",nome:"Financiamento 60x (exemplo)",taxa:1.85,prazo:60,entrada:0}],
  capa:{estilo:"aneis",imagem:"",titulo:"Energia solar fotovoltaica",campanha:"",detalhe:""},
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
    {id:"m8",marca:"Genérico",modelo:"630 Wp",wp:630,comp:2382,larg:1134,voc:55.8,isc:14.4,vmp:46.7,imp:13.5,coefVoc:-0.25,coefP:-0.29,garantia:25,preco:491}],
  inversores:[
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
  prop:{razao:"Vmc Projetos e Instalações Elétricas Ltda",cnpj:"61.702.854/0001-04",resp:"",crea:"",cpf:"",assin:"",cdi:8.0,cdbPct:100,poup:5.5,ir:15,fe:0.0385,arv:0.14,
        bancos:[{id:"b1",nome:"Cresol",logo:""},{id:"b2",nome:"Sicoob",logo:""},{id:"b3",nome:"Sicredi",logo:""},{id:"b4",nome:"Banco do Brasil",logo:""},{id:"b5",nome:"Caixa",logo:""},{id:"b6",nome:"Banrisul",logo:""},{id:"b7",nome:"BV Financeira",logo:""}]}
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
function facesIn(){ return [1,2,3].map(i=>({i,ori:$("fo"+i).value||"N",area:v("fa"+i)})).map(f=>({...f,fat:(ORI[f.ori]||ORI.N)[1]})); }
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
function compute(){
  const mod=byId(CONFIG.modulos,$("modsel").value), tel=byId(CONFIG.telhados,$("telsel").value);
  if(!mod || !tel || !HSPM.length) return null;
  const T=CONFIG.tec;
  const hsp=v("hsp"), aum=Math.max(0,v("aumcons"))/100, cons=v("consumo")*(1+aum), tar=v("tarifa"), fiobKwh=v("fiob"), meta=v("meta")/100, rateio=Math.max(0,v("rateio"));
  const fase = {"30":1,"50":2,"100":3}[$("padrao").value];
  const fee = +$("padrao").value;
  const preco=v("preco"), desc=v("desc")/100, reaj=v("reaj")/100, om=v("om"), invPct=v("inv")/100;
  const anos=25, wp=mod.wp, sim=v("simult")/100, degr=T.degr/100;
  const PR = 1 - v("perdas")/100;
  if (!(hsp>0 && cons>0 && wp>0 && PR>0)) return null;
  const compensavel = Math.max(cons - fee, 0);
  const alvo = Math.max(0,(meta>1 ? cons*meta : Math.min(cons*meta, compensavel)) - rateio);
  const kwhKwp = hsp*T.dias*PR;
  const areaMod = mod.comp*mod.larg/1e6;
  const AA = areaMod*tel.fatorArea;
  const capT = capTotal(AA), comArea = temArea();
  const sizeFor = Nf => { const kwp=Nf*wp/1000, al=alloc(Math.max(1,Math.ceil(Nf-1e-9)),AA), ger=kwp*kwhKwp*al.fator; return {Nf,kwp,ger,pct:(ger+rateio)/cons*100,area:Nf*AA,fator:al.fator}; };

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
  const madd=Math.trunc(v("madd")), ovr=$("invsel").value, ovrInv=(ovr&&ovr!=="auto")?CONFIG.inversores.find(i=>i.id===ovr):null;
  const pickX = k => ovrInv ? {inv:ovrInv, qtd:Math.max(1,Math.ceil(k/(T.ccaMax*ovrInv.kw)))} : pickInverter(k,fase);
  let N = Math.max(1, sel.N+madd), pkx = pickX(N*wp/1000);
  const NmaxInv = pkx ? Math.floor(pkx.inv.kw*pkx.qtd*T.ccaMax*1000/wp) : N;
  let limitado = "";
  if(N>NmaxInv){ N=NmaxInv; limitado="inversor"; }
  if(comArea && capT>0 && N>capT){ N=capT; limitado="área"; }
  N=Math.max(1,N);
  const sz = sizeFor(N), kwp = sz.kwp, gerMes = sz.ger, areaTotal = sz.area, al = alloc(N,AA);
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
  const P = pricing(kwp,desc,Kest);
  const invest = $("origem").value==="preco" ? P.receita : kwp*1000*preco*(1-desc);

  // geração mensal e comparação com o consumo
  const gerM = HSPM.map((h,i)=>kwp*h*DIAS_MES[i]*PR*al.fator);
  const consM = consumoMensal(v("consumo")).map(x=>x*(1+aum));

  // conta antes/depois
  const compRat = Math.min(rateio, compensavel);
  const compMes = Math.min(gerMes+rateio, compensavel);
  const fioMes = (compMes-compRat)*(1-sim)*fioPct(new Date().getFullYear())*fiobKwh + compRat*fiobKwh;
  const ecoRateioMes = compRat*(tar-fiobKwh);
  const contaAntes = cons*tar;
  const consumoPago = Math.max(cons-gerMes-rateio, fee);
  const contaDepois = consumoPago*tar + fioMes;

  // projeção
  const y0 = new Date().getFullYear();
  const rows=[]; let acum=-invest; const flows=[-invest]; let payback=null;
  for(let a=1;a<=anos;a++){
    const year=y0+a-1;
    const ger = gerMes*12*Math.pow(1-degr,a-1);
    const t = tar*Math.pow(1+reaj,a-1);
    const compSis = Math.max(0, Math.min(ger+rateio*12, compensavel*12) - Math.min(rateio*12, compensavel*12));
    const comp = compSis;
    const fio = comp*(1-sim)*fioPct(year)*fiobKwh*Math.pow(1+reaj,a-1);
    const eco = comp*t - fio;
    let custo = om*Math.pow(1.04,a-1);
    if (a===12) custo += invest*invPct;
    const liq = eco-custo;
    const antes = acum; acum += liq; flows.push(liq);
    if (payback===null && acum>=0) payback = (a-1) + (-antes/liq);
    rows.push({a,year,ger,t,fio,eco,custo,liq,acum});
  }
  return {P,mod,tel,inv,qtdInv,ratio,checks,arranjo:str.arranjo,kitItems,Kest,PR,opts,optSel:sel.id,
          hsp,cons,tar,fee,wp,reaj,degr,sim,modulos:N,kwp,gerMes,gerM,consM,invest,contaAntes,contaDepois,fioMes,rows,payback,
          tir:irr(flows),totalEco:rows.reduce((s,r)=>s+r.liq,0),areaTotal,rateio,aum,ecoRateioMes,atend:(gerMes+rateio)/cons*100,maisMod,NmaxInv,capT,comArea,limitado,madd,al,limArea,ecoAno1:rows[0].eco,ecoMes1:rows[0].eco/12,anos,desc};
}

/* ============ PRECIFICAÇÃO E DRE ============ */
function lineValue(l,kwp,rec){ return l.modo==="fixo" ? l.valor : l.modo==="kwp" ? l.valor*kwp : l.modo==="km" ? l.valor*v("dist") : l.valor/100*rec; }
function fixedOf(l,kwp){ return l.modo==="fixo" ? l.valor : l.modo==="kwp" ? l.valor*kwp : l.modo==="km" ? l.valor*v("dist") : 0; }
function pricing(kwp,desc,Kest){
  const cot=v("kitcot"), mt=$("metodo").value, mv=v("margem"), meta=v("meta-liq")/100;
  const K = cot>0 ? cot : Kest;
  const lista = mt==="venda" ? K/(1-Math.min(mv/100,0.95)) : mt==="markup" ? K*(1+mv/100) : K+mv;
  const receita = lista*(1-desc);
  const sec = {}; let fixed = K, pct = 0;
  for (const s of Object.keys(COSTS)){
    sec[s] = COSTS[s].map(l => ({l, val:lineValue(l,kwp,receita)}));
    COSTS[s].forEach(l => { if(l.modo==="pct") pct += l.valor/100; else fixed += fixedOf(l,kwp); });
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
          <option value="km"${l.modo==="km"?" selected":""}>R$ por km</option>
          <option value="pct"${l.modo==="pct"?" selected":""}>% da venda</option>
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
  $("preco-kpis").innerHTML = `
    <div class="kpi main"><div class="l">Preço de venda ${P.desc>0?"(após desconto)":""}</div><div class="v">${brl(recP)}</div><div class="s">${brl2(wpPrice)} por Wp · kit ${brl(P.K)} · lucro bruto sobre o kit ${brl(P.lista-P.K)}</div></div>
    <div class="kpi"><div class="l">Margem de contribuição</div><div class="v">${num(mcPct,1)}%</div><div class="s">${brl(mcP)} após impostos e comissão</div></div>
    <div class="kpi"><div class="l">Resultado líquido ${Object.keys(REAL).length?"(com realizado)":"(previsto)"}</div><div class="v ${liqE<0?"neg":"pos"}">${brl(liqE)}</div><div class="s">${num(liqPct,1)}% da receita</div></div>
    <div class="kpi"><div class="l">Preço para ${num(P.meta*100)}% líquido</div><div class="v">${P.alvo?brl(P.alvo):"-"}</div><div class="s">${diffAlvo===null?"meta inviável com esses percentuais":(diffAlvo>=0?"você está "+brl(diffAlvo)+" acima":"faltam "+brl(-diffAlvo))}</div></div>
    <div class="kpi"><div class="l">Preço mínimo (resultado zero)</div><div class="v">${P.minimo?brl(P.minimo):"-"}</div><div class="s">${P.minimo?num(P.minimo/(r.kwp*1000),2)+" R$/Wp":""}</div></div>`;

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
  const max=Math.max(...r.gerM,...r.consM)*1.12;
  const bw=(W-L-Rr)/12;
  const Y=y=>T+(1-y/max)*(H-T-B);
  let s="";
  for(let i=0;i<=4;i++){ const val=max*i/4; s+=`<line x1="${L}" x2="${W-Rr}" y1="${Y(val)}" y2="${Y(val)}" stroke="var(--line)"/><text x="${L-6}" y="${Y(val)+4}" text-anchor="end">${num(val,0)}</text>`; }
  r.gerM.forEach((g,i)=>{
    const x=L+i*bw+bw*0.15;
    s+=`<rect x="${x}" y="${Y(g)}" width="${bw*0.7}" height="${H-B-Y(g)}" rx="3" fill="var(--accent)" opacity=".85"/>`;
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
  const dm = CONFIG.descMax;
  $("desc-warn").textContent = v("desc")>dm ? `Desconto acima do limite de ${num(dm,1)}% definido em Configurações. Precisa de aprovação.` : "";
  $("desc-warn").className = "note"+(v("desc")>dm?" neg":"");
  $("irr-chart").innerHTML = HSPM.length ? chartIrr() : "";
  const cid=$("cidade").value, c=CIDADES[cid];
  $("irr-note").textContent = c ? (c.m ? "Fonte: Atlas Brasileiro de Energia Solar (2017), plano inclinado na latitude, orientação norte." : "Perfil mensal estimado a partir da média anual e da latitude. Para o valor real, confira no SunData (CRESESB) e edite os meses.") : "Valores editados manualmente.";
  if(!r){ renderStrip(null); return; }
  renderPreco();
  renderStrip(r);
  renderOpts(r);

  const okAll = r.checks.every(c=>c.ok);
  $("tbl-tec").innerHTML = `<tbody>
    <tr><td>Módulos</td><td>${r.modulos} × ${esc((r.mod.marca+" "+r.mod.modelo).trim())}</td></tr>
    <tr><td>Potência CC</td><td>${num(r.kwp,2)} kWp</td></tr>
    <tr><td>Inversor</td><td>${r.inv?`${r.qtdInv} × ${esc((r.inv.marca+" "+r.inv.modelo).trim())} (${num(r.inv.kw*r.qtdInv,1)} kW CA)`:"-"}</td></tr>
    <tr><td>Arranjo</td><td>${esc(r.arranjo)}</td></tr>
    <tr><td>Perdas de geração</td><td>${num((1-r.PR)*100,1)}%</td></tr>
    <tr><td>Área útil necessária (${esc(r.tel.nome)})</td><td>${num(r.areaTotal,1)} m²${r.comArea&&r.capT>0?` de ${num(r.capT*r.areaTotal/r.modulos,1)} m² disponíveis`:""}</td></tr>
    <tr><td>Orientação</td><td>${r.al.faces.filter(f=>f.n>0).map(f=>`${ORI[f.ori][0]} (${f.n})`).join(" · ")||"Norte"} · fator ${num(r.al.fator,2)}</td></tr>
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

document.querySelectorAll("#view-ent input:not([data-own]), #view-ent select:not([data-own]), #view-ent textarea, #view-preco .fields input:not([data-own]), #view-preco .fields select:not([data-own])").forEach(e=>e.addEventListener("input",calc));
$("opts").addEventListener("click",e=>{ const b=e.target.closest("[data-opt]"); if(!b) return; OPT=b.dataset.opt; $("madd").value=0; calc(); });
document.addEventListener("click",e=>{
  const m=e.target.closest("[data-metabtn]"); if(m){ const x=Math.min(150,Math.max(10,(v("meta")||100)+(+m.dataset.metabtn))); $("meta").value=x; calc(); return; }
  const a=e.target.closest("[data-madd]"); if(a){ $("madd").value=(parseInt($("madd").value)||0)+(+a.dataset.madd); calc(); }
});
$("madd").addEventListener("input",()=>calc()); $("invsel").addEventListener("change",()=>calc());
$("irr-tog").onclick=()=>{ const s=$("irr-chart"), on=s.style.display==="none"; s.style.display=on?"block":"none"; $("irr-tog").textContent=on?"Ocultar gráfico de irradiação":"Mostrar gráfico de irradiação"; $("irr-tog").setAttribute("aria-expanded",on); };

const VIEWS = ["ent","sis","preco","prop","conf"];
function show(which){
  VIEWS.forEach(n=>{
    $("view-"+n).classList.toggle("hidden",n!==which);
    $("tab-"+n).setAttribute("aria-selected",n===which);
  });
  $("strip").style.display = which==="ent" ? "none" : "";
  if(which==="prop") renderDoc();
  if(which==="preco") renderPreco();
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
    for(let r=0;r<4;r++) for(let c=0;c<7;c++){
      const x=70+c*58+r*14, y=190-r*34;
      g+=`<path d="M${x} ${y} l54 0 l-10 -30 l-54 0 z" fill="none" stroke="#64ABDE" stroke-width="1.6"/><path d="M${x+13} ${y-30} l${-0} 0" stroke="#64ABDE" stroke-width="0"/>`;
    }
    let rays=""; for(let k=0;k<12;k++){ const a=k*Math.PI/6, x1=95+Math.cos(a)*34, y1=70+Math.sin(a)*34, x2=95+Math.cos(a)*50, y2=70+Math.sin(a)*50; rays+=`<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#1D3140" stroke-width="2" stroke-linecap="round"/>`; }
    return `<div class="arte"><svg viewBox="0 0 560 230" role="img" aria-label="Painéis solares"><circle cx="95" cy="70" r="22" fill="#64ABDE"/>${rays}${g}</svg></div>`;
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
function propInfo(){
  const conc=CONFIG.conc.find(c=>c.id===$("concsel").value);
  const lig={"30":"Monofásico","50":"Bifásico","100":"Trifásico"}[$("padrao").value];
  const g=id=>($(id).value||"").trim();
  return {nome:g("cliente")||"Cliente", end:g("pend")||"", cid:g("pcid")||"", cep:g("pcep")||"", uc:g("ucnum")||"—", dist:conc?conc.nome:"Concessionária", lig, minimo:+$("padrao").value};
}
function propRef(){ const d=new Date(), p2=n=>String(n).padStart(2,"0"); return "P"+String(d.getFullYear()).slice(2)+p2(d.getMonth()+1)+"-"+((typeof NEG!=="undefined"&&NEG)?NEG.replace(/-/g,"").slice(0,4).toUpperCase():"0000"); }
const PP = () => Object.assign({}, DEF.prop, CONFIG.prop||{});
function tabelaPrice(P,i,n){
  const pm=i>0?pmt(P,i,n):P/n; let saldo=P, jA=0, aA=0, ini=1; const anos=[];
  for(let k=1;k<=n;k++){ const j=saldo*i, a=pm-j; saldo-=a; jA+=j; aA+=a;
    if(k%12===0||k===n){ anos.push({ano:Math.ceil(k/12),parc:k-ini+1,pagto:pm*(k-ini+1),juros:jA,amort:aA,saldo:Math.max(0,saldo)}); jA=0;aA=0;ini=k+1; } }
  return {pm,anos,total:pm*n,juros:pm*n-P};
}
function finOpcoes(r){ return (CONFIG.financeiras||[]).slice(0,3).map(f=>{ const n=Math.max(1,+f.prazo||60), i=(+f.taxa||0)/100, ent=(+f.entrada||0)/100, entV=r.invest*ent, P=r.invest-entV, t=tabelaPrice(P,i,n); return {nome:f.nome,n,i,ent,entV,P,t}; }); }
function basesTxt(r){ return `<b>Importante:</b> os valores da tabela são estimados. * Inflação anual (reajuste da tarifa): ${num(r.reaj*100,2)}%. ** Simultaneidade de ${num(r.sim*100,2)}%. *** Conforme especificação dos fabricantes, os módulos podem perder até 20% de eficiência em 25 anos (considerado ${num(r.degr*100,2)}% ao ano). **** Após ${CONFIG.fioB.length?Math.max(...CONFIG.fioB.map(x=>+x.ano)):2028}, considera-se a continuidade do pagamento de ${num(CONFIG.fioBDemais,0)}% do Fio B.${r.aum>0?` Considerado aumento de consumo de ${num(r.aum*100,1)}%.`:""}`; }
function bancosHtml(){ const b=PP().bancos||[]; return `<div class="bks">${b.map(x=>x.logo?`<span class="bk"><img src="${x.logo}" alt="${pesc(x.nome)}"></span>`:`<span class="bk t">${pesc(x.nome)}</span>`).join("")}</div>`; }
function chartParcela(r,fin){
  const maxA=Math.min(25,Math.max(5,Math.ceil(r.payback||5)+1,fin?Math.ceil(fin.n/12):0)), W=560,H=215,L=48,B=24,T=10,iw=W-L-8,ih=H-B-T;
  const eco=[],par=[]; for(let a=1;a<=maxA;a++){ eco.push(r.rows[a-1].eco); par.push(fin&&a<=Math.ceil(fin.n/12)?fin.t.anos[a-1].pagto:0); }
  const mx=Math.max(...eco,...par,1)*1.1, bw=iw/maxA, x=a=>L+(a-1)*bw, y=v_=>T+ih-(v_/mx)*ih;
  let s=""; for(let k=0;k<=4;k++){ const yy=T+ih*(1-k/4); s+=`<line x1="${L}" x2="${W-8}" y1="${yy}" y2="${yy}" stroke="#dce8f3"/><text x="${L-4}" y="${yy+3}" text-anchor="end">${num(mx*k/4/1000,1)} mil</text>`; }
  for(let a=1;a<=maxA;a++){ const h1=ih*eco[a-1]/mx, h2=ih*par[a-1]/mx; s+=`<rect x="${x(a)+bw*.14}" y="${T+ih-h1}" width="${bw*.34}" height="${h1}" fill="#64ABDE"/>`; if(par[a-1]>0) s+=`<rect x="${x(a)+bw*.5}" y="${T+ih-h2}" width="${bw*.34}" height="${h2}" fill="#1D3140"/>`; s+=`<text x="${x(a)+bw/2}" y="${H-8}" text-anchor="middle">${a}</text>`; }
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
function paginaAceite(r,I,hoje,validade,ref,pp){
  return `<h2>Aceite da proposta</h2>
    <p class="lead">Proposta <b>${ref}</b> · emitida em ${hoje} · válida até ${validade}</p>
    <table class="kv"><tbody>
      <tr><td>Contratante</td><td>${pesc(I.nome)}</td></tr>
      <tr><td>CPF / CNPJ</td><td class="blank"></td></tr>
      <tr><td>Endereço da instalação</td><td>${pesc([I.end,I.cid,I.cep].filter(Boolean).join(" · "))||"&nbsp;"}</td></tr>
      <tr><td>Contratada</td><td>${pesc(pp.razao)} · CNPJ ${pesc(pp.cnpj)}</td></tr>
      <tr><td>Objeto</td><td>Fornecimento, instalação e homologação de sistema fotovoltaico de ${num(r.kwp,2)} kWp (${r.modulos} módulos de ${r.mod.wp} Wp e ${r.qtdInv} inversor de ${num(r.inv.kw,1)} kW)</td></tr>
      <tr><td>Valor</td><td><b>${brl2(r.invest)}</b></td></tr>
      <tr><td>Prazo de entrega</td><td>${v("prazo")||45} dias após a contratação</td></tr>
    </tbody></table>
    <p class="small" style="font-size:10.5px;color:#1D3140;margin:12px 0 4px">Declaro que li e estou de acordo com os produtos, quantidades, valores e condições descritos nesta proposta. Estou ciente de que as marcas e modelos finais são confirmados na cotação com o fornecedor antes da assinatura e de que o financiamento, quando escolhido, está sujeito à aprovação de crédito.</p>
    <p class="chk"><b>Forma de pagamento:</b> <span><i class="bx"></i>À vista</span><span><i class="bx"></i>Financiamento</span><span><i class="bx"></i>Outra: ______________</span></p>
    <p class="small" style="font-size:10.5px">Local e data: ______________________________, ____ / ____ / ________</p>
    <div class="sign big"><div><i></i><span>${pesc(I.nome)}<br>Contratante</span></div>
      <div>${pp.assin?`<img src="${pp.assin}" class="assin" alt="">`:""}<i></i><span>${pesc(pp.resp||"Responsável técnico")}${pp.crea?" · "+pesc(pp.crea):""}<br>${pesc(pp.razao)} · CNPJ ${pesc(pp.cnpj)}</span></div></div>
    <p class="small" style="margin-top:14px">Testemunhas (opcional): ______________________ &nbsp; ______________________</p>`;
}
function propostaHTML(){
  const modo=($("pr-modo")?$("pr-modo").value:"completa")||"completa";
  const r=R, I=propInfo(), cap=CONFIG.capa||{}, seg=segDados(), pp=PP(), ref=propRef();
  const _h=new Date(), _v=new Date(_h.getTime()+(+CONFIG.validade||10)*864e5), hoje=_h.toLocaleDateString("pt-BR"), validade=_v.toLocaleDateString("pt-BR");
  const nome=I.nome, mod=r.mod, inv=r.inv, kwh12=r.gerM.reduce((s,x)=>s+x,0);
  const fins=finOpcoes(r), fin1=fins[0];
  const pbMeses=r.payback===null?null:Math.round(r.payback*12), _a=r.payback===null?0:Math.floor(pbMeses/12), _m=r.payback===null?0:pbMeses%12;
  const pbTxt=r.payback===null?"acima de 25 anos":(_a===0?`${_m} meses`:`${_a} ${_a===1?"ano":"anos"}${_m?` e ${_m} ${_m===1?"mês":"meses"}`:""}`);
  const comSeg=seg.on&&seg.vig.some(x=>x>0);
  const local=[I.end,I.cid].filter(Boolean).join(" · ");
  const capaHtml=`<section class="pg cover">
    <div class="cv-top"><img src="${LOGO}" alt="ON Engenharia" class="cv-logo"><span class="cv-badge">Proposta ${pesc(ref)}</span></div>
    <div class="cv-main">
      <p class="eyebrow">${pesc(cap.titulo||"Energia solar fotovoltaica")}</p>
      <h1>Proposta<br>comercial</h1>
      <div class="cv-client"><span>Preparada para</span><strong>${pesc(nome)}</strong><em>${pesc(local)}</em></div>
    </div>
    ${capaArte(cap.estilo||"aneis",cap.imagem)}
    ${cap.campanha?`<div class="camp"><b>${pesc(cap.campanha)}</b>${cap.detalhe?`<span>${pesc(cap.detalhe)}</span>`:""}</div>`:""}
    <div class="cv-foot"><span>Emitida em ${hoje} · válida até ${validade}</span><span>${pesc(CONFIG.empresa||"ON Engenharia")}</span><span>${pesc(CONFIG.contato||"")}</span></div>
  </section>`;
  const kp4=`<div class="kpis4"><div><b>${num(r.kwp,2)} kWp</b><span>potência</span></div><div><b>${r.modulos} módulos</b><span>de ${mod.wp} Wp</span></div><div><b>${num(r.gerMes+r.rateio)} kWh</b><span>geração por mês${r.rateio>0?" (inclui rateio)":""}</span></div><div><b>${num(r.areaTotal,0)} m²</b><span>área necessária</span></div></div>`;
  const faces=r.al.faces.filter(f=>f.n>0).map(f=>`${ORI[f.ori][0]} (${f.n})`).join(" · ")||"Norte";
  const detalhes=`<table class="kv"><tbody>
      <tr><td>Concessionária</td><td>${pesc(I.dist)} · UC ${pesc(I.uc)} · ${I.lig}</td></tr>
      <tr><td>Consumo médio mensal</td><td><b>${num(v("consumo"))} kWh</b>${r.aum>0?` · considerado aumento de <b>${num(r.aum*100,1)}%</b> (${num(r.cons)} kWh)`:""} · tarifa R$ ${num(r.tar,4)}/kWh (com impostos)</td></tr>
      ${r.rateio>0?`<tr><td>Rateio de energia</td><td>${num(r.rateio)} kWh/mês recebidos de outra unidade geradora</td></tr>`:""}
      <tr><td>Local e irradiação</td><td>${pesc(I.cid||"—")} · ${num(r.hsp,2)} kWh/m²·dia</td></tr>
      <tr><td>Equipamentos</td><td>${r.modulos} módulos de ${mod.wp} Wp · ${r.qtdInv} inversor de ${num(inv.kw,1)} kW (${inv.fases===1?"monofásico":inv.fases===2?"bifásico":"trifásico"})</td></tr>
      <tr><td>Instalação</td><td>Área útil necessária de ${num(r.areaTotal,1)} m² · orientação ${pesc(faces)} · ${pesc(r.tel.nome)}</td></tr>
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
      ${msgFin}${bancosHtml()}
      <h3 class="sub">Retorno do investimento</h3>
      <div class="kpis3"><div><b>${pbTxt}</b><span>payback</span></div><div><b>${r.tir===null?"-":num(r.tir*100,1)+"%"}</b><span>TIR ao ano</span></div><div><b>${brl(r.totalEco)}</b><span>economia líquida em 25 anos</span></div></div>
      <svg class="chart cx" viewBox="0 0 560 215" role="img" aria-label="Fluxo de caixa acumulado">${chart(r)}</svg>
      <p class="small" style="margin:4px 0">Estando de acordo com produtos, valores e condições, as partes firmam o aceite. Marcas e modelos finais são confirmados na cotação antes da assinatura. Prazo de entrega: ${v("prazo")||45} dias.</p>
      <div class="sign"><div><i></i><span>${pesc(pp.razao)} · CNPJ ${pesc(pp.cnpj)}</span></div><div><i></i><span>${pesc(nome)}</span></div></div>`;
    paginas=[p2,p3];
  } else {
    const quem=`<h2>Quem somos</h2>
      <p class="lead">A <b>ON Engenharia</b> desenvolve soluções elétricas sob medida para o agronegócio, a indústria, o comércio e a residência: projeto, execução, energia solar e eficiência energética.</p>
      <div class="cards3"><div><h4>O que nos move</h4><p>Entregar energia com segurança, qualidade e economia, com o cuidado de quem conhece a realidade do campo e da cidade.</p></div>
        <div><h4>Como trabalhamos</h4><p>Dimensionamos pelo seu consumo real, projetamos conforme as normas da concessionária e acompanhamos a instalação até a homologação.</p></div>
        <div><h4>O que você recebe</h4><p>Projeto elétrico com ART, equipamentos de linha, instalação por equipe própria, homologação e suporte após a entrega.</p></div></div>
      <h3 class="sub">Por que energia solar</h3>
      <ul class="li"><li>Reduz a conta de luz e protege você dos reajustes da tarifa.</li><li>Sistema conectado à rede, sem baterias, com manutenção simples.</li><li>Módulos com garantia de desempenho de longo prazo.</li><li>Valoriza o imóvel e reduz emissões de CO₂.</li></ul>
      <div class="sobre"><b>${pesc(pp.razao)}</b><p>CNPJ ${pesc(pp.cnpj)} · ${pesc(P_EMP.end)} · ${pesc(CONFIG.contato||"")}</p></div>`;
    const det=`<h2>Detalhes do projeto</h2>${kp4}${detalhes}<h3 class="sub">Conta de energia antes e depois</h3>${eco3}
      <p class="small">Estimativa para o primeiro ano, sem bandeira tarifária, com o Fio B escalonado pela Lei 14.300.</p>`;
    const meses=MESES.map((m,i)=>`<tr><td>${m}</td><td>${num(r.gerM[i])}</td><td>${num(r.consM[i])}</td><td class="${r.gerM[i]+r.rateio>=r.consM[i]?"":"neg"}">${num(r.gerM[i]+r.rateio-r.consM[i])}</td></tr>`).join("");
    const ger=`<h2>Geração de energia</h2>${chartGenSvg}<table class="data"><thead><tr><th>Mês</th><th>Geração (kWh)</th><th>Consumo (kWh)</th><th>Saldo (kWh)</th></tr></thead><tbody>${meses}</tbody></table>
      <p class="small">A energia gerada acima do consumo vira crédito na rede, válido por 60 meses. Estimativa com irradiação de ${num(r.hsp,2)} kWh/m²·dia e perdas de ${num((1-r.PR)*100,1)}%.</p>`;
    const proj=`<h2>Projeção anual</h2><table class="data tight"><thead><tr><th>Ano</th><th>Produção (kWh)</th><th>Sem solar</th><th>Com solar</th><th>Economia</th><th>Acumulado</th></tr></thead><tbody>${r.rows.map(o=>{const sem=r.cons*12*o.t, com=sem-o.eco; return `<tr><td>${o.year}</td><td>${num(o.ger)}</td><td>${brl(sem)}</td><td>${brl(com)}</td><td>${brl(o.eco)}</td><td class="${o.acum>=0?"":"neg"}">${brl(o.acum)}</td></tr>`}).join("")}</tbody></table><p class="small">${basesTxt(r)}</p>`;
    const dsRow=(titulo,item,linhas_)=>`<div class="prd"><div class="ph0">${item.foto?`<img src="${item.foto}" alt="">`:`<span>sem imagem</span>`}</div><div><h4>${titulo}</h4><b>${pesc((item.marca+" "+item.modelo).trim())}</b><ul>${linhas_.map(x=>`<li>${x}</li>`).join("")}</ul></div></div>`;
    const dist=($("disttxt").value||"").trim();
    const distLinhas=dist.split(/\n+/).map(s=>s.trim()).filter(Boolean).slice(0,14);
    const prod=`<h2>Produtos</h2>
      ${dsRow(`Módulos fotovoltaicos · ${r.modulos} un.`,mod,[`Potência ${mod.wp} Wp · ${num(r.kwp,2)} kWp no total`,`Dimensões ${mod.comp} × ${mod.larg} mm`,`Voc ${mod.voc} V · Isc ${mod.isc} A · Vmp ${mod.vmp} V · Imp ${mod.imp} A`,`Garantia de produto e de desempenho conforme o fabricante`])}
      ${dsRow(`Inversor · ${r.qtdInv} un.`,inv,[`Potência ${num(inv.kw,1)} kW (CA) · ${inv.fases===1?"monofásico":inv.fases===2?"bifásico":"trifásico"}`,`${inv.mppt} MPPT · ${inv.strMppt} string(s) por MPPT`,`Tensão máxima CC ${inv.vmax} V · corrente máx. por MPPT ${inv.iscMax} A`,`Relação CC/CA ${num(r.ratio,2)}`])}
      <div class="prd"><div class="ph0"><span>kit</span></div><div><h4>Estrutura e complementos</h4><ul><li>Estrutura de fixação para ${pesc(r.tel.nome)}</li><li>String box, cabos CC, conectores e proteções</li><li>Projeto, ART, instalação e homologação junto à concessionária</li></ul></div></div>
      ${distLinhas.length?`<h3 class="sub">Descrição do fornecedor</h3><div class="dist">${distLinhas.map(x=>`<p>${pesc(x)}</p>`).join("")}</div>`:""}
      <p class="small">As imagens e especificações seguem os datasheets dos fabricantes. Marcas e modelos finais são confirmados na cotação antes da assinatura.</p>`;
    const pag=`<h2>Investimento e pagamento</h2>
      <div class="total"><span>Valor total da proposta</span><strong>${brl2(r.invest)}</strong><em>${brl2(r.invest/(r.kwp*1000))} por Wp</em></div>
      <table class="data l"><thead><tr><th>Condição</th><th>Detalhes</th></tr></thead><tbody>
        <tr><td>À vista</td><td>${brl2(r.invest)} · pagamento único na contratação</td></tr>
        <tr><td>Entrega</td><td>${v("prazo")||45} dias após a contratação, com instalação e homologação inclusas</td></tr>
        <tr><td>Validade</td><td>${validade}</td></tr></tbody></table>
      <h3 class="sub">Simulação de financiamento</h3>${simulHead}${msgFin}${bancosHtml()}
      ${fin1?`<h3 class="sub">Tabela Price · ${pesc(fin1.nome)} (${fin1.n}x de ${brl2(fin1.t.pm)})</h3><table class="data tight"><thead><tr><th>Ano</th><th>Parcelas</th><th>Pago no ano</th><th>Juros</th><th>Amortização</th><th>Saldo devedor</th></tr></thead><tbody>${fin1.t.anos.map(a=>`<tr><td>${a.ano}</td><td>${a.parc}</td><td>${brl(a.pagto)}</td><td>${brl(a.juros)}</td><td>${brl(a.amort)}</td><td>${brl(a.saldo)}</td></tr>`).join("")}</tbody></table>`:""}`;
    const ecoParc=fin1?`<h2>Economia × parcela</h2>
      <p class="lead">Na simulação de <b>${fin1.n}x</b>, a parcela é de <b>${brl2(fin1.t.pm)}</b> e a economia média do 1º ano é de <b>${brl2(r.ecoMes1)}</b> por mês: ${r.ecoMes1>=fin1.t.pm?`o sistema <b>se paga com folga de ${brl2(r.ecoMes1-fin1.t.pm)} por mês</b> desde o início`:`a diferença de <b>${brl2(fin1.t.pm-r.ecoMes1)}</b> por mês é coberta pelo reajuste da tarifa ao longo dos anos`}.</p>
      <svg class="chart" viewBox="0 0 560 215" role="img" aria-label="Economia anual e parcelas">${chartParcela(r,fin1)}</svg>
      <div class="leg"><span><i class="b"></i>Economia anual</span><span><i class="d"></i>Parcelas no ano</span><span class="sm">Payback do investimento: ${pbTxt}</span></div>
      <table class="data"><thead><tr><th>Ano</th><th>Economia</th><th>Parcelas</th><th>Saldo do ano</th></tr></thead><tbody>${[1,2,3,4,5].map(a=>{const e=r.rows[a-1].eco, p=a<=Math.ceil(fin1.n/12)?fin1.t.anos[a-1].pagto:0; return `<tr><td>${r.rows[a-1].year}</td><td>${brl(e)}</td><td>${brl(p)}</td><td class="${e-p>=0?"":"neg"}">${brl(e-p)}</td></tr>`}).join("")}</tbody></table>
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
      <p class="small">Fator de emissão configurável pela ON (média do SIN divulgada pelo MCTI). Os valores são estimativas para fins de comunicação.</p>`;
    paginas=[quem,det,ger,proj,prod,pag,ecoParc,ret,amb,paginaAceite(r,I,hoje,validade,ref,pp)];
  }
  let seguroP=[]; if(comSeg){ seguroP=paginasSeguro(nome,seg,0,0,LOGO); }
  const todas=[...paginas,...seguroP];
  const total=1+todas.length;
  const head=()=>`<header class="ph"><img src="${LOGO}" alt="ON Engenharia"><span>Proposta comercial · ${pesc(nome)}</span></header>`;
  const foot=n=>`<footer class="pf"><span>${pesc(CONFIG.empresa||"ON Engenharia")} · ${pesc(CONFIG.contato||"")}</span><span>Folha ${n} de ${total}</span></footer>`;
  const corpo=[capaHtml].concat(todas.map((b,i)=>`<section class="pg">${head()}<div class="pb">${b}</div>${foot(i+2)}</section>`));
  return `<!DOCTYPE html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Proposta ${pesc(nome)}</title>
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
.dist{border-left:3px solid var(--blue);padding-left:10px}.dist p{margin:2px 0;font-size:10px;color:var(--dark2)}
.bks{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}
.bk{height:9mm;min-width:24mm;border:1px solid var(--line);border-radius:6px;display:grid;place-items:center;padding:2px 8px;background:#fff}
.bk img{max-height:7mm;max-width:28mm}.bk.t{font-size:10px;font-weight:700;color:var(--dark2)}
.sign.big{margin-top:30px}.sign .assin{position:absolute;max-height:16mm;margin-top:-17mm}.sign div{position:relative}
</style></head><body>
${corpo.join("\n")}
</body></html>`;
}

function atualizarPrev(){ if(!R) return; try{ $("prev").srcdoc = propostaHTML(); }catch(e){ console.error(e); } }
$("pr-abrir").onclick=()=>{ if(!R) return; const w=window.open("","_blank"); if(!w){ flash($("toast"),"Libere pop-ups para abrir a proposta."); return; } w.document.open(); w.document.write(propostaHTML()); w.document.close(); };
$("pr-baixar").onclick=()=>{ if(!R) return; const b=new Blob([propostaHTML()],{type:"text/html"}); const a=document.createElement("a"); a.href=URL.createObjectURL(b); a.download="Proposta - "+(($("cliente").value||"cliente").replace(/[\\/:*?"<>|]/g,"").trim())+".html"; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href),4000); };

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
  const resumo=R?{kwp:R.kwp,modulos:R.modulos,gerMes:R.gerMes,invest:R.invest,payback:R.payback,tir:R.tir,cliente:$("cliente").value,itens:R.kitItems.map(i=>({nome:i.nome,qtd:+(+i.qtd).toFixed(2),un:+(+i.un).toFixed(2),unid:i.unid}))}:null;
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
  ISADM=NIVEL==="admin"; CAN_EDIT=NIVEL==="admin"||NIVEL==="editar";
  if(!NIVEL){ bloquear("<h2>Sem acesso ao orçamento</h2><p>Seu usuário não tem permissão no OrçaRede. Peça ao administrador.</p>"); return; }
  const [rc,rn,ro]=await Promise.all([
    SB.from("solar_config").select("dados").eq("id","geral").maybeSingle(),
    SB.from("negocios").select("id,titulo,cliente,cidade,fone,valor,pot,quadro").eq("id",NEG).maybeSingle(),
    SB.from("neg_orc_solar").select("dados,atualizado_em").eq("negocio_id",NEG).maybeSingle()]);
  if(rc.data&&rc.data.dados) aplicarConfig(rc.data.dados);
  const neg=rn.data;
  if(ro.data&&ro.data.dados&&ro.data.dados.f){ restore(ro.data.dados); setSv("Orçamento carregado · "+new Date(ro.data.atualizado_em).toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"})); }
  else if(neg){
    $("cliente").value=neg.cliente||neg.titulo||""; $("pcid").value=neg.cidade||""; if(neg.cidade){ const mc=aplicarCidade(neg.cidade); if(mc&&!mc.exato) setSv("Cidade fora da lista: usei "+mc.k+" como irradiação. Ajuste se quiser."); }
    setSv("Novo orçamento para "+(neg.cliente||neg.titulo||"o negócio"));
  }
  if(neg&&neg.cidade&&!$("pcid").value) aplicarCidade(neg.cidade);
  if(!CAN_EDIT){ setSv("Somente leitura (seu nível é “ver”)","er"); document.querySelectorAll("#view-ent input,#view-ent select,#view-ent textarea,#view-preco input,#view-preco select,#view-sis input,#view-sis select").forEach(e=>e.disabled=true); }
  $("btn-aplicar").hidden=true;
  if(ISADM) $("cfg-save").hidden=false; else if(!ISADM){ document.querySelector('[data-sub="com"]'); }
  READY=true; carregarBaseTextos(); calc(); renderPreco(); { const ab=({proposta:'prop'})[QS.get('aba')]||QS.get('aba'); if(ab&&VIEWS.includes(ab)) show(ab); }
}

/* ============ v3: cidade, fatura, datasheet, texto do distribuidor, logos ============ */
const norm = s => String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim();
function loadScriptJs(src){ return new Promise((res,rej)=>{ const s=document.createElement("script"); s.src=src; s.onload=res; s.onerror=()=>rej(new Error("falha ao carregar "+src)); document.head.appendChild(s); }); }
function mergeDefaults(){
  DEF.modulos.forEach(m=>{ if(!CONFIG.modulos.some(x=>x.id===m.id)) CONFIG.modulos.push(clone(m)); });
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
    msg.innerHTML=esc("Importado: "+pre.join(", ")+". ")+o.avisos.map(a=>"<br>• "+esc(a)).join("");
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
  const msg=$("ds-msg"); const res=[];
  if(NEG && !ISADM){ msg.textContent="Somente administrador grava equipamentos na base."; return; }
  for(const f of files){
    msg.textContent="Lendo "+f.name+"…";
    try{
      const pdf=await pdfDoc(f), txt=(await pdfLinhas(pdf,2)).join(" "), d=parseDS(txt,f.name), foto=await fotoPDF(pdf);
      const base={id:uid(d.tipo==="modulo"?"m":"i"),foto,ds:{arquivo:f.name,em:new Date().toISOString().slice(0,10)}};
      const novo=Object.assign(base,d); delete novo.tipo;
      (d.tipo==="modulo"?CONFIG.modulos:CONFIG.inversores).push(novo);
      res.push((d.tipo==="modulo"?"módulo ":"inversor ")+(novo.marca+" "+novo.modelo).trim());
    }catch(e){ console.error(e); res.push(f.name+" (falhou)"); }
  }
  Object.keys(EDITORS).forEach(renderEditorTable); refreshSelects(); saveCfg(); calc();
  msg.textContent="Importado: "+res.join(", ")+". Revise os valores em Configurações → Equipamentos.";
  if(NEG && ISADM) $("cfg-save").click();
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

integrar();
