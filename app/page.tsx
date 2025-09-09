"use client";

import React from "react";
import { ArrowRight, ShieldCheck, FileText, Sparkles, Lock, Server, Globe2, Users, BarChart3, MessageSquare, Search } from "lucide-react";
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
            <span className="text-sm font-semibold tracking-wide text-[var(--subtle)]">REGIA‑UN</span>
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
            <Pill>Retrieval‑Enhanced Generation for International Affairs</Pill>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              REGIA is a custom‑built research assistant for the UN and international affairs policy experts.
            </h1>
            <p className="mt-4 max-w-xl text-[var(--subtle)]">
              It leverages: (a) the latest generative AI models; (b) the UN’s vast collection of official documents; and
              (c) a custom approach to provide specific, grounded responses to user queries.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-4 py-2.5 text-sm font-medium text-[var(--brand-contrast)] ring-1 ring-[var(--ring)] hover:opacity-90">
                Request a demo
              </a>
              <a href="#product" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[var(--card)] px-4 py-2.5 text-sm font-medium text-[var(--text)] hover:bg-white/5">
                How it works
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="relative rounded-2xl border border-white/5 bg-[var(--card)] p-3 shadow ring-1 ring-white/5">
              <img src="/og.png" alt="REGIA-UN overview" className="aspect-video w-full rounded-xl object-cover" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* WHY REGIA */}
      <Section>
        <Container>
          <div className="mb-6 max-w-2xl">
            <Pill>Why REGIA</Pill>
            <h2 className="mt-4 text-3xl font-semibold">Addressing policy experts’ biggest challenges</h2>
            <p className="mt-3 text-[var(--subtle)]">
              REGIA is a step toward solving key challenges:
            </p>
          </div>
          <ul className="grid gap-3 text-[var(--subtle)] md:max-w-3xl">
            <li>— Overwhelming amount of information on any given file</li>
            <li>— Limited time to familiarize on a new topic or country context</li>
            <li>— Lack of tools that consolidate authoritative information generated by the UN</li>
          </ul>
        </Container>
      </Section>

      {/* EXISTING TOOLS */}
      <Section>
        <Container>
          <div className="mb-6 max-w-2xl">
            <Pill>Existing tools</Pill>
            <h2 className="mt-4 text-3xl font-semibold">Where current options fall short</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <FeatureCard icon={<Sparkles className="h-5 w-5 text-[var(--brand-contrast)]" />} title="AI chatbots" desc="Outputs are poorly grounded and hallucinate frequently, wasting time." />
            <FeatureCard icon={<Search className="h-5 w-5 text-[var(--brand-contrast)]" />} title="Ask DAG" desc="Keyword search only; often points to resources with limited relevance." />
            <FeatureCard icon={<FileText className="h-5 w-5 text-[var(--brand-contrast)]" />} title="ODS" desc="Keyword search only; difficult to sort through piles of documents." />
          </div>
        </Container>
      </Section>

      {/* PRODUCT */}
      <Section id="product">
        <Container>
          <div className="mb-10 max-w-2xl">
            <Pill>How REGIA works</Pill>
            <h2 className="mt-4 text-3xl font-semibold">Specific, grounded responses to user queries</h2>
            <div className="mt-3 grid gap-4 text-[var(--subtle)]">
              <div>
                <h3 className="font-semibold text-[var(--text)]">Cutting‑edge AI technology</h3>
                <ul className="mt-2 grid gap-2">
                  <li>— Uses the latest advanced Large Language Models (LLMs) to understand queries and provide straightforward, precise, tailored responses using the most relevant context.</li>
                  <li>— Over 10 LLMs were compared in automated tests across relevance, clarity, grounding, and citation use to select best‑performing models.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--text)]">A special database of UN documents</h3>
                <ul className="mt-2 grid gap-2">
                  <li>— The REGIA database is curated to include the most relevant documents for a given file.</li>
                  <li>— Goes beyond keyword matching to retrieve context that answers specific questions.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon={<FileText className="h-5 w-5 text-[var(--brand-contrast)]" />} title="Curated UN corpus" desc="Security Council resolutions, SG reports, panels of experts, and more. Built for policy relevance and traceability." />
            <FeatureCard icon={<Sparkles className="h-5 w-5 text-[var(--brand-contrast)]" />} title="Retrieval‑enhanced drafting" desc="Retrieval‑enhanced generation yields fast, factual drafts with inline citations and quotes." />
            <FeatureCard icon={<BarChart3 className="h-5 w-5 text-[var(--brand-contrast)]" />} title="Evaluation‑driven accuracy" desc="Automated checks benchmark grounding and reduce hallucinations; iterative evaluation improves accuracy." />
            <FeatureCard icon={<Lock className="h-5 w-5 text-[var(--brand-contrast)]" />} title="Data boundaries" desc="Your uploads (optional) are compartmentalized and never mixed into the global corpus." />
            <FeatureCard icon={<Server className="h-5 w-5 text-[var(--brand-contrast)]" />} title="Modular architecture" desc="Flexible components from UI to pipelines and storage; deployable across varied environments." />
            <FeatureCard icon={<Globe2 className="h-5 w-5 text-[var(--brand-contrast)]" />} title="Mission‑ready" desc="Built for peace ops, human rights, and development teams; supports thematics, country contexts, and org‑specific corpora." />
          </div>
        </Container>
      </Section>

      {/* SECURITY */}
      <Section id="security" className="bg-[color-mix(in_oklab,var(--muted)_35%,transparent)]">
        <Container>
          <div className="mb-10 max-w-2xl">
            <Pill>Security and transparency</Pill>
            <h2 className="mt-4 text-3xl font-semibold">Built for sensitive policy work</h2>
            <p className="mt-3 text-[var(--subtle)]">
              Authentication, per‑user row‑level security, auditability, and restricted model scopes. User uploads are
              optional and isolated; only public UN docs are in the shared corpus.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
            <p className="mt-2 text-[var(--subtle)]">We can tailor a demo for Permanent Missions, UN departments, or other partners.</p>
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
          <p className="text-sm text-[var(--subtle)]">© {new Date().getFullYear()} REGIA‑UN</p>
        </Container>
      </footer>
    </main>
  );
}
