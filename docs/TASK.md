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
- [x] Deploy to Vercel 
- [ ] link custom domain

### Cleanup
- [x] replace the "B" in the first element (blue box) with "REGIA-UN" in a larger font size and in the background color
- [x] remove the "REGIA-UN" printed after the blue box
- [x] increase height of the top bar and increase font size of links
- [x] links in the top bar should be, in order:
    - Use Cases
    - How REGIA Works
    - Roadmap
    - Contact
- [x] remove "Talk to us" button in top bar
- [x] increase slightly size of "pills" throughout page. 
- [x] turn the "it leverages..." list into bullet points using same formatting as other bullet pointed lists (dashes rather than bullets)
    - add ", eliminating hallucination" to the end of the third bullet point.
- [x] consolidate the "Why Regia" and "Existing Tools" and "Where it helps today" sections into a "Use Cases" section
    Then use h2 level headings as subsections:
        - turn "Where current options fall short" into a list that doesn't "name names" when it comes to existing tools, just summarizes them
- [x] link the "Product" link at the top to the "How REGIA works" section
    - Remove the "Data boundaries" box 

- [x] For the Roadmap, use the same dynamic boxes as in other sections, and make the phases line up next to each other horizontally (they'll have to be tall and narrow). Then change the phase descriptions to the following:
    - Phase 1: Early prototype: web app showing proof of concept; basic query-and-response function; prototype database with a handful of country contexts (~600 documents)
    - Phase 2: Functional product: expansive UN document database (10,000+ documents); session memory for response follow up customizable output formats; 
    - Phase 3: Product expansion: user uploads; more comprehensive document database plus integration with external databases; sophisticated AI workflows and tool-calling; advanced response export options

#### Further cleanup
- [x] decrease transparency on the top bar: currently when you scroll down it blends perfectly with background, causing confusing display
- [x] add some button background to the nav links
- [x] make the "Use Cases" subsections the same h2 level, and reorder them to:
    - first present "Challenges" but rename it "Constraints facing policy experts"
    - then "Where current options fall short" (bold the parts of each line before the colon)
    - finally "How REGIA helps"
- [x] under How REGIA works, rephrase it to be "REGIA delivers specific, grounded responses to policy queries by combining:"
- [x] turn the phase boxes under Roadmap into the same format as the boxes under "How Regia works" (in other words, they should also elevate and have shadow when moused over)
- [x] add a "Contact" pill above "Show REGIA-UN to your team"
- [x] You made the top bar completely opaque, and I wanted it to just be less transparent than before.
- [x] make the pill size slightly bigger again.
- [x] Change the "Product" nav link to "How REGIA Works" and change the text in the pill from "How REGIA works" to "How REGIA Works"
- [x] For the buttons (not pills), reduce the radius on the curved corners by like 1-2 pixels.
- [x] Let's remove the OG image because it's redundant on the website. 
    - [x] (meanwhile change the link in the OG image to "regia.info" rather than the vercel URL)
- [x] The background to the "Roadmap" section is slightly darker than the surrounding page background.
- [x] The vertical spacing after the "Contact" pill is less than the vertical spacing after other pills on the page.

### Metadata could be richer for SEO and social sharing
1. In `app/layout.tsx`, add fields:

   ```ts
   metadataBase: new URL("https://regia-landing.vercel.app"),
   keywords: ["UN", "international affairs", "AI assistant"],
   openGraph: { type: "website", /* ... */ },
   twitter: { site: "@your_handle", /* ... */ },
   ```
2. Add `public/favicon.ico` and a minimal `public/robots.txt`.
3. Reference the favicon via `metadata.icons`.



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
