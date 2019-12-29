SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: college_year_enum; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.college_year_enum AS ENUM (
    'FRESHMAN',
    'SOPHOMORE',
    'JUNIOR',
    'SENIOR',
    'GRADUATE'
);


--
-- Name: football_position_enum; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.football_position_enum AS ENUM (
    'QUARTERBACK',
    'RUNNING_BACK',
    'FULLBACK',
    'TIGHT_END',
    'WIDE_RECEIVER',
    'OFFENSIVE_TACKLE',
    'OFFENSIVE_GUARD',
    'OFFENSIVE_CENTER',
    'DEFENSIVE_END',
    'DEFENSIVE_TACKLE',
    'EDGE_RUSHER',
    'OUTSIDE_LINEBACKER',
    'INSIDE_LINEBACKER',
    'CORNERBACK',
    'SAFETY',
    'PUNTER',
    'KICKER',
    'SPECIAL_TEAMS'
);


SET default_tablespace = '';

--
-- Name: annual_drafts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.annual_drafts (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    year integer NOT NULL,
    draft_date date NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: ar_internal_metadata; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ar_internal_metadata (
    key character varying NOT NULL,
    value character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: draft_prospects; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.draft_prospects (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    annual_draft_id uuid NOT NULL,
    given_name character varying(30) NOT NULL,
    middle_name character varying(30),
    family_name character varying(60) NOT NULL,
    birth_date date NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    "position" public.football_position_enum NOT NULL,
    college character varying(120) NOT NULL,
    college_year public.college_year_enum NOT NULL
);


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.schema_migrations (
    version character varying NOT NULL
);


--
-- Name: teams; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.teams (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name character varying(60) NOT NULL,
    slug character varying(60) NOT NULL,
    svg_logo_url character varying NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: annual_drafts annual_drafts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.annual_drafts
    ADD CONSTRAINT annual_drafts_pkey PRIMARY KEY (id);


--
-- Name: ar_internal_metadata ar_internal_metadata_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ar_internal_metadata
    ADD CONSTRAINT ar_internal_metadata_pkey PRIMARY KEY (key);


--
-- Name: draft_prospects draft_prospects_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.draft_prospects
    ADD CONSTRAINT draft_prospects_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: teams teams_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_pkey PRIMARY KEY (id);


--
-- Name: index_annual_drafts_on_year; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_annual_drafts_on_year ON public.annual_drafts USING btree (year);


--
-- Name: index_teams_on_name; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_teams_on_name ON public.teams USING btree (name);


--
-- Name: index_teams_on_slug; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_teams_on_slug ON public.teams USING btree (slug);


--
-- Name: draft_prospects fk_rails_cfb1da1f0c; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.draft_prospects
    ADD CONSTRAINT fk_rails_cfb1da1f0c FOREIGN KEY (annual_draft_id) REFERENCES public.annual_drafts(id);


--
-- PostgreSQL database dump complete
--

SET search_path TO public;

INSERT INTO "schema_migrations" (version) VALUES
('20191227164214'),
('20191227174335'),
('20191228161108'),
('20191228220301'),
('20191228220302');


