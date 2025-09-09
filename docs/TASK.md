# REGIA-Landing  TASK.md

##  Purpose (SPEC)
The regia-landing repo hosts the **marketing/partner-facing website** for **REGIA-UN**, an AI-powered research and drafting assistant for international affairs professionals.

- **Audience**: UN partners, missions, donors, civil society stakeholders.
- **Goal**: Professional, stable, simple landing page to showcase REGIA's features, roadmap, and contact information.
- **Deployment**: Hosted on **Vercel** with free SSL, custom domain via IONOS.
- **Design**: Clean, neutral branding (from theme.css), aligned with but more polished than the Streamlit prototype.

---

##  Architecture (PLAN)

### Tech Stack
- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: CSS variables (from globals.css, adapted from theme.css)
- **Components**: React function components, optional shadcn/ui for buttons/tabs
- **Icons**: lucide-react
- **Animation**: framer-motion (optional)

### Content Source
- **Core messaging**: REGIA_Overview_27Aug2025.pdf
- **Color scheme**: theme.css
- **Consistency**: Align with prototype app branding but more polished

---

##  Current Status
- Repo initialized on GitHub
- Basic files added: page.tsx, globals.css, layout.tsx, config files
- Ready to deploy on Vercel once DNS is set at IONOS

---

##  Active Tasks
- [x] Audit imports in page.tsx; add missing deps (lucide-react, framer-motion) or remove if unused
- [x] Confirm globals.css defines variables used in page.tsx (--bg, --card, --brand, etc.)
- [x] Add metadata block in layout.tsx for SEO (title, description, OpenGraph, Twitter card)
- [x] Create placeholder public/og.png for link previews
- [x] Add public/favicon.ico
- [x] Test build locally (npm run build) and confirm no errors
- [ ] Deploy to Vercel and link custom domain

---

##  Backlog / Future Tasks
- Add dark-mode styles (@media (prefers-color-scheme: dark))
- Create secondary "Donors & Partners" page
- Add simple contact form (email capture via serverless endpoint or external service)
- Optimize accessibility (contrast, focus states, alt text)
- Add Google Analytics / Vercel Analytics
- Polish copy (update stats, roadmap items, use-case examples)

---

##  Guidance for Cursor
- Treat this repo as **marketing only** (no RAG engine, no backend).
- Stay within **Next.js + TypeScript** conventions.
- Use globals.css variables for all colors; don't hardcode hex values in components.
- Prioritize **stability and clarity** over new features.
- When suggesting changes, ensure **Vercel deploys cleanly** (no missing dependencies).
- Use this TASK.md to track completed, active, and backlog tasks.
