begin;

create extension pgcrypto;

create table users (
	id uuid primary key default gen_random_uuid(),
	name text,
	email text,
	created_at timestamp with time zone not null default now(),
	unique(email)
);

commit;
