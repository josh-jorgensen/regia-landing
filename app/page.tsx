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
  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--ring)] bg-[color-mix(in_oklab,var(--brand)_10%,transparent)] px-4 py-1.5 text-sm font-medium text-[var(--subtle)]">
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
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[color-mix(in_oklab,var(--bg)_75%,#000)] backdrop-blur">
        <Container className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 items-center justify-center rounded-xl bg-[var(--brand)] px-3 text-[var(--brand-contrast)] font-semibold tracking-wide">
              REGIA‑UN
            </div>
          </div>
          <nav className="hidden gap-2 text-base text-[var(--subtle)] md:flex">
            <a href="#use-cases" className="rounded-md bg-[color-mix(in_oklab,var(--card)_60%,transparent)] px-3 py-1 hover:bg-white/10 hover:text-[var(--text)]">Use Cases</a>
            <a href="#product" className="rounded-md bg-[color-mix(in_oklab,var(--card)_60%,transparent)] px-3 py-1 hover:bg-white/10 hover:text-[var(--text)]">Product</a>
            <a href="#roadmap" className="rounded-md bg-[color-mix(in_oklab,var(--card)_60%,transparent)] px-3 py-1 hover:bg-white/10 hover:text-[var(--text)]">Roadmap</a>
            <a href="#contact" className="rounded-md bg-[color-mix(in_oklab,var(--card)_60%,transparent)] px-3 py-1 hover:bg-white/10 hover:text-[var(--text)]">Contact</a>
          </nav>
          <div className="hidden md:block" />
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
              It leverages:
            </p>
            <ul className="mt-3 max-w-xl text-[var(--subtle)]">
              <li>— The latest generative AI models</li>
              <li>— The UN’s vast collection of official documents</li>
              <li>— A custom approach to provide grounded responses to user queries, eliminating hallucination</li>
            </ul>
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
              <img src="/opengraph-image" alt="REGIA-UN overview" className="aspect-video w-full rounded-xl object-cover" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* USE CASES (Consolidated) */}
      <Section id="use-cases">
        <Container>
          <div className="mb-6 max-w-2xl">
            <Pill>Use Cases</Pill>
            <h2 className="mt-4 text-3xl font-semibold">Where REGIA helps today</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon={<FileText className="h-5 w-5 text-[var(--brand-contrast)]" />} title="Briefing notes" desc="Rapid, referenced notes for meetings with Member States and senior leaders." />
            <FeatureCard icon={<Sparkles className="h-5 w-5 text-[var(--brand-contrast)]" />} title="Report drafting" desc="First‑pass sections for SG reports or mission briefs, grounded in citations." />
            <FeatureCard icon={<Globe2 className="h-5 w-5 text-[var(--brand-contrast)]" />} title="Country deep‑dives" desc="Thematic and cross‑pillar scans of mandates, benchmarks, and past decisions." />
          </div>

          <div className="mt-10 max-w-2xl">
            <h2 className="text-2xl font-semibold">Constraints facing policy experts</h2>
            <ul className="mt-3 grid gap-2 text-[var(--subtle)]">
              <li>— Overwhelming amount of information on any given file</li>
              <li>— Limited time to familiarize on a new topic or country context</li>
              <li>— Lack of tools that consolidate authoritative information generated by the UN</li>
            </ul>
          </div>

          <div className="mt-8 max-w-2xl">
            <h2 className="text-2xl font-semibold">Where current options fall short</h2>
            <ul className="mt-3 grid gap-2 text-[var(--subtle)]">
              <li><span className="font-semibold text-[var(--text)]">— Generic AI chat interfaces:</span> often poorly grounded and prone to hallucinations</li>
              <li><span className="font-semibold text-[var(--text)]">— Keyword search tools:</span> limited relevance ranking; time‑consuming to sift documents</li>
              <li><span className="font-semibold text-[var(--text)]">— Fragmented sources:</span> difficult to access and consolidate authoritative UN information</li>
            </ul>
          </div>

          <div className="mt-8 max-w-2xl">
            <h2 className="text-2xl font-semibold">How REGIA helps</h2>
            <p className="mt-3 text-[var(--subtle)]">Decision‑ready briefs grounded in UN sources, tailored to policy workflows.</p>
          </div>
        </Container>
      </Section>

      {/* PRODUCT */}
      <Section id="product">
        <Container>
          <div className="mb-10 max-w-2xl">
            <Pill>How REGIA works</Pill>
            <h2 className="mt-4 text-3xl font-semibold">REGIA delivers specific, grounded responses to policy queries by combining:</h2>
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
            <FeatureCard icon={<Server className="h-5 w-5 text-[var(--brand-contrast)]" />} title="Modular architecture" desc="Flexible components from UI to pipelines and storage; deployable across varied environments." />
            <FeatureCard icon={<Globe2 className="h-5 w-5 text-[var(--brand-contrast)]" />} title="Mission‑ready" desc="Built for policy teams; supports research and alalysis on thematic files, country contexts, and org‑specific priorities." />
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
          <div className="grid gap-4 md:grid-cols-3">
            <div className="group flex h-full min-h-[18rem] flex-col justify-between rounded-2xl border border-white/5 bg-[var(--card)] p-6 ring-1 ring-white/5 transition hover:-translate-y-1 hover:shadow-md">
              <div>
                <h3 className="font-semibold">Phase 1 — Early prototype</h3>
                <p className="mt-2 text-[var(--subtle)]">Web app showing proof of concept; basic query‑and‑response function; prototype database with a handful of country contexts (~600 documents).</p>
              </div>
            </div>
            <div className="group flex h-full min-h-[18rem] flex-col justify-between rounded-2xl border border-white/5 bg-[var(--card)] p-6 ring-1 ring-white/5 transition hover:-translate-y-1 hover:shadow-md">
              <div>
                <h3 className="font-semibold">Phase 2 — Functional product</h3>
                <p className="mt-2 text-[var(--subtle)]">Expansive UN document database (10,000+ documents); session memory for response follow up; customizable output formats.</p>
              </div>
            </div>
            <div className="group flex h-full min-h-[18rem] flex-col justify-between rounded-2xl border border-white/5 bg-[var(--card)] p-6 ring-1 ring-white/5 transition hover:-translate-y-1 hover:shadow-md">
              <div>
                <h3 className="font-semibold">Phase 3 — Product expansion</h3>
                <p className="mt-2 text-[var(--subtle)]">User uploads; more comprehensive document database plus integration with external databases; sophisticated AI workflows and tool‑calling; advanced response export options.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section id="contact">
        <Container className="grid items-center gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Pill>Contact</Pill>
            <h2 className="text-3xl font-semibold">Show REGIA‑UN to your team</h2>
            <p className="mt-2 text-[var(--subtle)]">We can tailor a demo for Permanent Missions, UN departments, or other partners.</p>
          </div>
          <div className="md:justify-self-end">
            <a href="mailto:contact@regia.info" className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-4 py-2.5 text-sm font-medium text-[var(--brand-contrast)] ring-1 ring-[var(--ring)] hover:opacity-90">
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
