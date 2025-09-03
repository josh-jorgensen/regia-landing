"use client";

import React from "react";
import { ArrowRight, ShieldCheck, FileText, Sparkles, Lock, Server, Globe2, Users, BarChart3, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const Section: React.FC<{ id?: string; className?: string; children: React.ReactNode }> = ({ id, className, children }) => (
  <section id={id} className={`w-full py-16 md:py-24 ${className || ""}`}>{children}</section>
);

const Container: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => (
  <div className={`mx-auto w-full max-w-6xl px-6 md:px-8 ${className || ""}`}>{children}</div>
);

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--ring)] bg-[color-mix(in_oklab,var(--brand)_10%,transparent)] px-3 py-1 text-xs font-medium text-[var(--subtle)]">
    {children}
  </span>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="group rounded-2xl border border-white/5 bg-[var(--card)] p-6 shadow-sm ring-1 ring-white/5 transition hover:-translate-y-1 hover:shadow-md">
    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color-mix(in_oklab,var(--brand)_18%,transparent)] ring-1 ring-[var(--ring)]">
      {icon}
    </div>
    <h3 className="mb-2 text-lg font-semibold text-[var(--text)]">{title}</h3>
    <p className="text-sm leading-6 text-[var(--subtle)]">{desc}</p>
  </div>
);

const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="rounded-2xl border border-white/5 bg-[var(--card)] p-6 text-center ring-1 ring-white/5">
    <div className="text-3xl font-semibold tracking-tight text-[var(--text)]">{value}</div>
    <div className="mt-1 text-sm text-[var(--subtle)]">{label}</div>
  </div>
);

export default function MarketingPage() {
  return (
    <main className="min-h-[100svh] bg-[var(--bg)] text-[var(--text)]">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[color-mix(in_oklab,var(--bg)_85%,#000)]/80 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--brand)] text-[var(--brand-contrast)] font-bold">B</div>
            <span className="text-sm font-semibold tracking-wide text-[var(--subtle)]">REGIA‑UN • Briefcraft</span>
          </div>
          <nav className="hidden gap-6 text-sm text-[var(--subtle)] md:flex">
            <a href="#product" className="hover:text-[var(--text)]">Product</a>
            <a href="#security" className="hover:text-[var(--text)]">Security</a>
            <a href="#use-cases" className="hover:text-[var(--text)]">Use Cases</a>
            <a href="#roadmap" className="hover:text-[var(--text)]">Roadmap</a>
            <a href="#contact" className="hover:text-[var(--text)]">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-3 py-2 text-sm font-medium text-[var(--brand-contrast)] shadow ring-1 ring-[var(--ring)] hover:opacity-90">
            Talk to us <ArrowRight className="h-4 w-4" />
          </a>
        </Container>
      </header>

      {/* HERO */}
      <Section className="bg-gradient-to-b from-[color-mix(in_oklab,var(--brand)_10%,transparent)] to-transparent">
        <Container className="grid items-center gap-10 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Pill>Grounded AI for international affairs</Pill>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Accurate research & drafting, grounded in verified UN sources.
            </h1>
            <p className="mt-4 max-w-xl text-[var(--subtle)]">
              REGIA‑UN (a.k.a. Briefcraft) is an AI‑powered assistant for diplomats and policy teams. It combines
              retrieval‑augmented generation with a curated corpus of UN documents to deliver fast, factual briefs,
              summaries, and drafts.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-4 py-2.5 text-sm font-medium text-[var(--brand-contrast)] ring-1 ring-[var(--ring)] hover:opacity-90">
                Request a demo
              </a>
              <a href="#product" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[var(--card)] px-4 py-2.5 text-sm font-medium text-[var(--text)] hover:bg-white/5">
                How it works
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 md:max-w-md">
              <Stat value=">14k" label="documents indexed" />
              <Stat value="19%" label="↑ grounding accuracy (eval)" />
              <Stat value="12 wks" label="prototype delivery" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="relative rounded-2xl border border-white/5 bg-[var(--card)] p-3 shadow ring-1 ring-white/5">
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-[var(--brand)] to-[var(--accent)] opacity-90" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              <p className="mt-3 text-center text-xs text-[var(--subtle)]">(Embed a short product video or animated walkthrough here)</p>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* PRODUCT */}
      <Section id="product">
        <Container>
          <div className="mb-10 max-w-2xl">
            <Pill>What REGIA‑UN does</Pill>
            <h2 className="mt-4 text-3xl font-semibold">From raw UN sources to usable prose</h2>
            <p className="mt-3 text-[var(--subtle)]">
              REGIA‑UN ingests public UN documents, parses and chunks them with rich metadata, retrieves the most
              relevant evidence, and drafts well‑sourced outputs. Users can review citations, adjust tone, and export.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon={<FileText className="h-5 w-5 text-[var(--brand-contrast)]" />} title="Curated UN corpus" desc="Security Council resolutions, SG reports, panels of experts, and more. Built for policy relevance and traceability." />
            <FeatureCard icon={<Sparkles className="h-5 w-5 text-[var(--brand-contrast)]" />} title="RAG‑powered drafting" desc="Retrieval‑augmented generation yields fast, factual drafts with inline source references and quotes." />
            <FeatureCard icon={<BarChart3 className="h-5 w-5 text-[var(--brand-contrast)]" />} title="Evaluation‑driven" desc="Automated checks benchmark grounding and reduce hallucinations; iterative eval improved accuracy by 19%." />
            <FeatureCard icon={<Lock className="h-5 w-5 text-[var(--brand-contrast)]" />} title="Data boundaries" desc="Your uploads (optional) are compartmentalized and never mixed into the global corpus." />
            <FeatureCard icon={<Server className="h-5 w-5 text-[var(--brand-contrast)]" />} title="Modular stack" desc="Streamlit/Next.js UI, Python pipelines, vector DB (Chroma/Qdrant), FastAPI backend, Supabase auth & Postgres." />
            <FeatureCard icon={<Globe2 className="h-5 w-5 text-[var(--brand-contrast)]" />} title="Mission‑ready" desc="Built for peace ops, human rights, and development teams; supports thematics, country contexts, and org‑specific corpora." />
          </div>
        </Container>
      </Section>

      {/* SECURITY */}
      <Section id="security" className="bg-[color-mix(in_oklab,var(--muted)_35%,transparent)]">
        <Container>
          <div className="mb-10 max-w-2xl">
            <Pill>Security & trust</Pill>
            <h2 className="mt-4 text-3xl font-semibold">Built for sensitive policy work</h2>
            <p className="mt-3 text-[var(--subtle)]">
              Authentication, per‑user row‑level security, auditability, and restricted model scopes. User uploads are
              optional and isolated; only public UN docs are in the shared corpus.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon={<ShieldCheck className="h-5 w-5 text-[var(--brand-contrast)]" />} title="RLS policies" desc="Supabase Row‑Level Security isolates user data with SQL‑level policies." />
            <FeatureCard icon={<Users className="h-5 w-5 text-[var(--brand-contrast)]" />} title="Access control" desc="Role‑scoped features for mission leadership, analysts, and partners." />
            <FeatureCard icon={<MessageSquare className="h-5 w-5 text-[var(--brand-contrast)]" />} title="Transparent outputs" desc="Every claim can be traced to specific source passages and document symbols." />
          </div>
        </Container>
      </Section>

      {/* USE CASES */}
      <Section id="use-cases">
        <Container>
          <div className="mb-10 max-w-2xl">
            <Pill>Where it helps today</Pill>
            <h2 className="mt-4 text-3xl font-semibold">High‑value workflows</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon={<FileText className="h-5 w-5 text-[var(--brand-contrast)]" />} title="Briefing notes" desc="Rapid, referenced notes for meetings with Member States and senior leaders." />
            <FeatureCard icon={<Sparkles className="h-5 w-5 text-[var(--brand-contrast)]" />} title="Report drafting" desc="First‑pass sections for SG reports or mission briefs, grounded in citations." />
            <FeatureCard icon={<Globe2 className="h-5 w-5 text-[var(--brand-contrast)]" />} title="Country deep‑dives" desc="Thematic and cross‑pillar scans of mandates, benchmarks, and past decisions." />
          </div>
        </Container>
      </Section>

      {/* ROADMAP */}
      <Section id="roadmap" className="bg-[color-mix(in_oklab,var(--muted)_35%,transparent)]">
        <Container>
          <div className="mb-10 max-w-2xl">
            <Pill>Roadmap</Pill>
            <h2 className="mt-4 text-3xl font-semibold">From prototype to mission scale</h2>
          </div>
          <ol className="grid gap-4 md:grid-cols-2">
            <li className="rounded-2xl border border-white/5 bg-[var(--card)] p-6 ring-1 ring-white/5">
              <h3 className="font-semibold">Phase 1 — Prototype (complete)</h3>
              <p className="mt-2 text-[var(--subtle)]">Streamlit demo; curated UN corpus; evaluation harness; early partner testing.</p>
            </li>
            <li className="rounded-2xl border border-white/5 bg-[var(--card)] p-6 ring-1 ring-white/5">
              <h3 className="font-semibold">Phase 2 — MVP</h3>
              <p className="mt-2 text-[var(--subtle)]">FastAPI + Next.js, Supabase auth + Postgres, Qdrant eval, role‑based access, improved observability.</p>
            </li>
            <li className="rounded-2xl border border-white/5 bg-[var(--card)] p-6 ring-1 ring-white/5">
              <h3 className="font-semibold">Phase 3 — Enterprise</h3>
              <p className="mt-2 text-[var(--subtle)]">Secure multi‑tenant deployments, user uploads at scale, agentic workflows, per‑mission corpora.</p>
            </li>
            <li className="rounded-2xl border border-white/5 bg-[var(--card)] p-6 ring-1 ring-white/5">
              <h3 className="font-semibold">Phase 4 — Audio + Analyst tools</h3>
              <p className="mt-2 text-[var(--subtle)]">Voice Q&A, Notebook‑style overviews, evaluation dashboards, and policy package exports.</p>
            </li>
          </ol>
        </Container>
      </Section>

      {/* CTA */}
      <Section id="contact">
        <Container className="grid items-center gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-semibold">Show REGIA‑UN to your team</h2>
            <p className="mt-2 text-[var(--subtle)]">We can tailor a demo for missions, HQ offices, and donors. Ask about per‑seat plans or extrabudgetary partnerships.</p>
          </div>
          <div className="md:justify-self-end">
            <a href="mailto:contact@regia-un.info" className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-4 py-2.5 text-sm font-medium text-[var(--brand-contrast)] ring-1 ring-[var(--ring)] hover:opacity-90">
              Email us <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8">
        <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-[var(--subtle)]">© {new Date().getFullYear()} REGIA‑UN / Briefcraft</p>
          <div className="flex items-center gap-4 text-xs text-[var(--subtle)]">
            <a href="#security" className="hover:text-[var(--text)]">Security</a>
            <a href="#roadmap" className="hover:text-[var(--text)]">Roadmap</a>
            <a href="#contact" className="hover:text-[var(--text)]">Contact</a>
          </div>
        </Container>
      </footer>
    </main>
  );
}
