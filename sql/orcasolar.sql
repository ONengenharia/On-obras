-- Orçador Solar (aba "Orçamento" do negócio solar): dados de cada orçamento e configuração geral (tarifas, equipamentos, custos)
-- Mesmo controle de acesso do OrçaRede: admin e quem tem nível 'editar' gravam; 'ver' só lê. Configuração geral: só admin grava.
create table if not exists public.neg_orc_solar(
  negocio_id uuid primary key references public.negocios(id) on delete cascade,
  dados jsonb not null default '{}'::jsonb,
  resumo jsonb,
  atualizado_por uuid default auth.uid(),
  atualizado_em timestamptz not null default now()
);
create table if not exists public.solar_config(
  id text primary key,
  dados jsonb not null default '{}'::jsonb,
  atualizado_por uuid default auth.uid(),
  atualizado_em timestamptz not null default now()
);
alter table public.neg_orc_solar enable row level security;
alter table public.solar_config enable row level security;

create policy ler on public.neg_orc_solar for select to authenticated
  using ((select orcarede.meu_nivel()) is not null and privado.ve_negocio(negocio_id));
create policy criar on public.neg_orc_solar for insert to authenticated
  with check ((select orcarede.meu_nivel()) in ('admin','editar') and privado.ve_negocio(negocio_id));
create policy alterar on public.neg_orc_solar for update to authenticated
  using ((select orcarede.meu_nivel()) in ('admin','editar') and privado.ve_negocio(negocio_id))
  with check ((select orcarede.meu_nivel()) in ('admin','editar') and privado.ve_negocio(negocio_id));
create policy apagar on public.neg_orc_solar for delete to authenticated
  using ((select orcarede.eh_usuario()));

create policy ler on public.solar_config for select to authenticated
  using ((select orcarede.meu_nivel()) is not null);
create policy admin_grava on public.solar_config for all to authenticated
  using ((select orcarede.eh_usuario())) with check ((select orcarede.eh_usuario()));

grant select,insert,update,delete on public.neg_orc_solar, public.solar_config to authenticated;

-- Base de textos de equipamentos (texto colado/lido da proposta do distribuidor), reaproveitável entre orçamentos
create table if not exists public.solar_equip_textos(
  id uuid primary key default gen_random_uuid(),
  negocio_id uuid references public.negocios(id) on delete set null,
  titulo text not null,
  texto text not null,
  criado_por uuid default auth.uid(),
  criado_em timestamptz not null default now()
);
alter table public.solar_equip_textos enable row level security;
create policy ler on public.solar_equip_textos for select to authenticated using ((select orcarede.meu_nivel()) is not null);
create policy criar on public.solar_equip_textos for insert to authenticated with check ((select orcarede.meu_nivel()) in ('admin','editar'));
create policy apagar on public.solar_equip_textos for delete to authenticated using ((select orcarede.eh_usuario()));
grant select,insert,delete on public.solar_equip_textos to authenticated;
-- tipo padrão dos negócios solares no Gestão Click
insert into public.neg_listas(lista,valor) select 'tipo','Energia Solar' where not exists(select 1 from public.neg_listas where lista='tipo' and valor='Energia Solar');
