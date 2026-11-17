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
