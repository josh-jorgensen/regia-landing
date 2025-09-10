"use client";

import React from "react";
import { ArrowRight, FileText, Files, Search, BookOpenText, Quote, Sparkles, Server, Globe2, BarChart3, Cog, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Section: React.FC<{ id?: string; className?: string; children: React.ReactNode }> = ({ id, className, children }) => (
  <section id={id} className={`w-full py-14 md:py-20 ${className || ""}`}>{children}</section>
);

const Container: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => (
  <div className={`mx-auto w-full max-w-6xl px-6 md:px-8 ${className || ""}`}>{children}</div>
);

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--ring)] bg-[color-mix(in_oklab,var(--brand)_10%,transparent)] px-5 py-2 text-lg font-semibold text-[var(--subtle)]">
    {children}
  </span>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="group rounded-2xl border border-white/5 bg-[var(--card)] p-6 shadow-sm ring-1 ring-white/5 transition hover:-translate-y-1 hover:shadow-md">
    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand)] ring-1 ring-[var(--ring)]">
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
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
  return (
    <main id="top" className="min-h-[100svh] bg-[var(--bg)] text-[var(--text)]">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[color-mix(in_oklab,var(--bg)_85%,#000)]/90 backdrop-blur">
        <Container className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#top" className="flex items-center justify-center rounded-md bg-[var(--brand)] px-4 py-2 text-base text-[var(--brand-contrast)] font-semibold tracking-wide" aria-label="Go to top">
              REGIA
            </a>
          </div>
          <nav role="navigation" aria-label="Primary" className="hidden gap-2 text-base md:flex">
            <a href="#use-cases" className="rounded-md bg-[color-mix(in_oklab,var(--card)_60%,transparent)] px-3 py-1 font-semibold text-[var(--text)] hover:bg-white/10">Use Cases</a>
            <a href="#product" className="rounded-md bg-[color-mix(in_oklab,var(--card)_60%,transparent)] px-3 py-1 font-semibold text-[var(--text)] hover:bg-white/10">How REGIA Works</a>
            <a href="#product-roadmap" className="rounded-md bg-[color-mix(in_oklab,var(--card)_60%,transparent)] px-3 py-1 font-semibold text-[var(--text)] hover:bg-white/10">Product Roadmap</a>
            <a href="#contact" className="rounded-md bg-[color-mix(in_oklab,var(--card)_60%,transparent)] px-3 py-1 font-semibold text-[var(--text)] hover:bg-white/10">Contact</a>
          </nav>
          <button
            type="button"
            className="md:hidden inline-flex items-center gap-2 rounded-md px-3 py-2 text-[var(--text)] bg-[color-mix(in_oklab,var(--card)_60%,transparent)] ring-1 ring-[var(--ring)]"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            Menu
          </button>
        </Container>
        {mobileOpen && (
          <div id="mobile-nav" className="md:hidden border-t border-white/5 bg-[color-mix(in_oklab,var(--bg)_90%,#000)]/95">
            <Container className="flex flex-col gap-2 py-3">
              <a href="#use-cases" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 font-semibold text-[var(--text)] bg-[color-mix(in_oklab,var(--card)_60%,transparent)] hover:bg-white/10">Use Cases</a>
              <a href="#product" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 font-semibold text-[var(--text)] bg-[color-mix(in_oklab,var(--card)_60%,transparent)] hover:bg-white/10">How REGIA Works</a>
              <a href="#product-roadmap" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 font-semibold text-[var(--text)] bg-[color-mix(in_oklab,var(--card)_60%,transparent)] hover:bg-white/10">Product Roadmap</a>
              <a href="#contact" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 font-semibold text-[var(--text)] bg-[color-mix(in_oklab,var(--card)_60%,transparent)] hover:bg-white/10">Contact</a>
            </Container>
          </div>
        )}
      </header>

      {/* HERO */}
      <Section className="bg-gradient-to-b from-[color-mix(in_oklab,var(--brand)_10%,transparent)] to-transparent">
        <Container>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Pill>Retrieval‑Enhanced Generation for International Affairs</Pill>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              REGIA is a custom‑built research assistant for the UN and international affairs policy experts.
            </h1>
            <p className="mt-4 max-w-3xl text-[var(--subtle)] font-semibold">
              It leverages:
            </p>
            <ul className="mt-3 max-w-3xl text-[var(--subtle)] font-semibold">
              <li>— The latest generative AI models;</li>
              <li>— The UN’s vast collection of official documents; and</li>
              <li>— A tailored approach to provide grounded responses to user queries, eliminating hallucination.</li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-[var(--brand)] bg-transparent px-4 py-2.5 text-sm font-medium text-[var(--brand)] ring-1 ring-[var(--ring)] hover:bg-[color-mix(in_oklab,var(--brand)_10%,transparent)]">
                Request a demo
              </a>
            </div>
          </motion.div>
          {/* Removed redundant hero image */}
        </Container>
      </Section>

      {/* USE CASES (Consolidated) */}
      <Section id="use-cases" className="scroll-mt-24">
        <Container>
          <div className="mb-6 max-w-2xl">
            <Pill>Use Cases</Pill>
          </div>

          <div className="mt-10 max-w-2xl">
            <h2 className="text-2xl font-semibold">Constraints facing policy experts:</h2>
            <ul className="mt-3 grid gap-2 text-[var(--subtle)]">
              <li><span className="font-semibold text-[var(--text)]">— Overwhelming volume of information</span> on any given file</li>
              <li><span className="font-semibold text-[var(--text)]">— Limited time</span> to familiarize on a new topic or country context</li>
              <li><span className="font-semibold text-[var(--text)]">— Fragmented access</span> to authoritative UN documents across siloed platforms</li>
            </ul>
          </div>

          <div className="mt-10 max-w-2xl">
            <h2 className="text-2xl font-semibold">Why current options fall short:</h2>
            <ul className="mt-3 grid gap-2 text-[var(--subtle)]">
              <li><span className="font-semibold text-[var(--text)]">— Generic AI chat tools:</span> hallucinate frequently and are poorly grounded in UN sources</li>
              <li><span className="font-semibold text-[var(--text)]">— Keyword search engines:</span> limited relevance unless exact phrasing is known in advance</li>
              <li><span className="font-semibold text-[var(--text)]">— UN document portals:</span> authoritative but slow to navigate and sift through documents</li>
            </ul>
          </div>
          <div className="mt-10 max-w-2xl">
            <h2 className="text-2xl font-semibold">How REGIA can help international policy professionals:</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon={<Files className="h-5 w-5 text-white" />} title="Briefing notes" desc="Rapid, referenced notes for briefings, meetings, background notes, etc." />
            <FeatureCard icon={<FileText className="h-5 w-5 text-white" />} title="Report drafting" desc="First‑pass sections for reports, grounded in relevant citations and linked to the original source documents." />
            <FeatureCard icon={<Search className="h-5 w-5 text-white" />} title="Research deep‑dives" desc="Thematic and cross‑pillar scans of mandates, strategic assessments, operational developments, and past decisions." />
          </div>
        </Container>
      </Section>

      {/* PRODUCT */}
      <Section id="product" className="scroll-mt-24">
        <Container>
          <div className="mb-10">
            <Pill>How REGIA Works</Pill>
            <h2 className="mt-4 text-2xl font-semibold">REGIA delivers grounded, tailored responses to your policy questions through:</h2>
            <ul className="mt-3 grid gap-2 text-[var(--subtle)]">
              <li><span className="font-semibold text-[var(--text)]">— Cutting‑edge AI:</span> Uses the best‑performing Large Language Models (LLMs) across relevance, clarity, grounding, and use of citations — based on internal testing of 10+ LLMs.</li>
              <li><span className="font-semibold text-[var(--text)]">— A curated UN database:</span> Includes the most relevant documents for a given file and allows country‑specific, cross‑context, and thematic searches.</li>
              <li><span className="font-semibold text-[var(--text)]">— Smart retrieval logic:</span> Goes beyond keyword matching to retrieve the most contextually relevant documents to your queries.</li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">REGIA is a modular and scalable tool built for UN experts by UN experts:</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard icon={<BookOpenText className="h-5 w-5 text-white" />} title="Curated UN corpus" desc="Security Council resolutions, meeting records, SG reports, panel of experts reports, and more. Built for policy relevance and traceability." />
            <FeatureCard icon={<Quote className="h-5 w-5 text-white" />} title="Retrieval‑enhanced drafting" desc="Retrieval‑enhanced AI generation synthesizes the most relevant information, yielding fast, factual drafts with inline citations and quotes." />
            <FeatureCard icon={<BarChart3 className="h-5 w-5 text-white" />} title="Evaluation‑driven accuracy" desc="Automated testing to establish baseline performance and improve response quality. Iterative evaluations guide parameter/prompt adjustment and help systematically avoid hallucination." />
            <FeatureCard icon={<Cog className="h-5 w-5 text-white" />} title="Mission‑ready architecture" desc="Built for policy teams; supports research and analysis on thematic files, country contexts, and org‑specific priorities. Flexible application components allow adaptation for various users and use cases." />
          </div>
        </Container>
      </Section>

      

      {/* ROADMAP */}
      <Section id="product-roadmap" className="scroll-mt-24">
        <Container>
          <div className="mb-6 max-w-2xl">
            <Pill>Product Roadmap</Pill>
            <h2 className="mt-3 text-2xl font-semibold">From prototype to production scale</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="group flex h-full min-h-[18rem] flex-col justify-start rounded-2xl border border-white/5 bg-[var(--card)] p-6 ring-1 ring-white/5 transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand)] ring-1 ring-[var(--ring)]">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Phase 1 — Early prototype</h3>
                <p className="mt-2 text-[var(--subtle)]">Web app showing proof of concept; basic query‑and‑response function; prototype database with a handful of country contexts (~600 documents).</p>
              </div>
            </div>
            <div className="group flex h-full min-h-[18rem] flex-col justify-start rounded-2xl border border-white/5 bg-[var(--card)] p-6 ring-1 ring-white/5 transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand)] ring-1 ring-[var(--ring)]">
                <Server className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Phase 2 — Functional product</h3>
                <p className="mt-2 text-[var(--subtle)]">Expansive UN document database (10,000+ documents); session memory for response follow up; customizable output formats.</p>
              </div>
            </div>
            <div className="group flex h-full min-h-[18rem] flex-col justify-start rounded-2xl border border-white/5 bg-[var(--card)] p-6 ring-1 ring-white/5 transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand)] ring-1 ring-[var(--ring)]">
                <Globe2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Phase 3 — Product expansion</h3>
                <p className="mt-2 text-[var(--subtle)]">User uploads; more comprehensive document database plus integration with external databases; sophisticated AI workflows and tool‑calling; advanced response export options.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section id="contact" className="scroll-mt-24">
        <Container className="grid items-center gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Pill>Contact</Pill>
            <h2 className="mt-4 text-2xl font-semibold">Show REGIA to your team</h2>
            <p className="mt-2 text-[var(--subtle)]">We can tailor a demonstration of the prototype application to your specifications, for teams at Permanent Missions, ministries, UN departments or agencies, and other partners. Find out how REGIA can help policy experts generate relevant outputs in seconds, grounded in the most authoritative UN sources.</p>
          </div>
          <div className="md:justify-self-end">
            <a href="mailto:contact@regia.info" className="inline-flex items-center gap-2 rounded-md bg-[var(--brand)] px-4 py-2.5 text-sm font-medium text-[var(--brand-contrast)] ring-1 ring-[var(--ring)] hover:opacity-90">
              Email us <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8">
        <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-[var(--subtle)]">© {new Date().getFullYear()} REGIA</p>
        </Container>
      </footer>
    </main>
  );
}
