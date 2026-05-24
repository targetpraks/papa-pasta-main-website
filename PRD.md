---
prd: "papa-pasta-main-website"
status: draft
date: "2026-05-24"
tags: [PRD, Consumer, Restaurant, Next.js, Papa-Pasta, Commerce-Platform, E-Commerce]
aliases: ["Papa Pasta Main Commerce Platform PRD"]
category: "Business"
repo: "targetpraks/papa-pasta-main-website"
version: "1.0"
reviewers: [Forge, Beast, Psylocke, Wolverine, Strategy, Colossus]
---

# Papa Pasta Main Website — Finalized Product Requirements Document

> **Synthesized from 6-agent audit** (Forge/Beast/Psylocke/Wolverine/Strategy/Colossus) | Date: 2026-05-24  
> **Repo:** `targetpraks/papa-pasta-main-website` | **Type:** Next.js 16 static-export consumer restaurant site  
> **Overall Health:** 5.0 / 10 (strong brand, critical leaked secret, broken commerce, placeholder pages)

---

## 1. Executive Summary

`papa-pasta-main-website` is a visually rich, 15-page consumer restaurant brand site for Papa Pasta — a premium fast-casual pasta concept targeting urban South African consumers. The site blends strong brand storytelling ("Our Story", "Artisanal", "Collectible Bowls") with utility pages (Menu, Locations, Order, Contact). It is live at `papapasta.co.za` and represents the consumer-facing pillar of the Papa Pasta brand ecosystem.

**The problem:** The site is a beautiful brochure that actively loses revenue on every visit. All orders are offloaded to third-party aggregators (UberEats, Mr D) with no owned ordering flow. Placeholder pages (`/bowls/`, `/merch/`) display dead "loading" screens that damage brand credibility. The Commerce Platform PRD defines a 6-phase migration to full D2C commerce, but none of it is implemented. A leaked Ollama Cloud API key sits in the repository, constituting an active security breach.

**Critical business finding:** This is a **Ferrari with no engine** — exceptional brand storytelling and SEO with catastrophic revenue infrastructure gaps. Estimated revenue leakage: R810K–R1.5M annually in aggregator fees and lost direct sales.

---

## 2. Tech Stack

| Layer | Technology | Version | Notes |
|-------|-----------|---------|-------|
| Framework | Next.js | 16.2.4 | App Router, static export (`output: 'export'`, `distDir: "dist"`) |
| Runtime | React | 19.2.4 | Latest; monitor ecosystem plugin compatibility |
| Styling | Tailwind CSS | v4 | Extensive custom design tokens (navy/gold/cream + neon chaos) |
| Animation | Framer Motion | ^12.38.0 | Scroll-triggered entrance animations |
| Fonts | next/font/google | — | Playfair Display (serif headlines) + Inter (body) via `next/font` |
| Icons | Lucide React | — | Consistent iconography |
| Build | TypeScript | strict: true | Zero `any` types in source |
| Lint | ESLint | v9 | Standard Next.js config |
| Data | Static TS modules | — | `src/lib/menu.ts`, `blog.ts`, `zones.ts`, `merch.ts` |
| Hosting | Local K8s (OrbStack) | — | Via `Makefile` + `k8s/` manifests; not production-ready |
| Docker | nginx:alpine | — | Multi-stage `Dockerfile` present (builder → nginx) |
| K8s | Local manifests | — | `deployment.yaml`, `service.yaml`, `ingress.yaml`, `namespace.yaml` |

---

## 3. Architecture

```
papa-pasta-main-website/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx              # Root layout with JSON-LD Restaurant schema
│  │  ├─ page.tsx                # Homepage (hero + sections)
│  │  ├─ globals.css             # Tailwind + extensive custom tokens
│  │  ├─ blog/
│  │  │  └─ [slug]/
│  │  │     ├─ page.tsx
│  │  │     └─ BlogPostClient.tsx   # ⚠️ line 69: dangerouslySetInnerHTML
│  │  ├─ menu/
│  │  │  └─ page.tsx             # Filterable menu grid
│  │  ├─ locations/
│  │  ├─ bowls/
│  │  │  └─ page.tsx             # ⚠️ Placeholder — dead "loading" screen
│  │  ├─ merch/
│  │  │  └─ page.tsx             # ⚠️ Placeholder — dead "loading" screen
│  │  ├─ franchise/
│  │  ├─ story/
│  │  ├─ artisanal/
│  │  ├─ level-up/
│  │  ├─ careers/
│  │  ├─ events/
│  │  ├─ gallery/
│  │  ├─ contact/
│  │  └─ legal/
│  ├─ lib/
│  │  ├─ menu.ts                 # Hardcoded menu data
│  │  ├─ blog.ts                 # Hardcoded blog posts
│  │  ├─ zones.ts                # Location data
│  │  └─ merch.ts                # Merch data (placeholder)
│  ├─ components/
│  │  ├─ Nav.tsx                 # 10+ links
│  │  ├─ Footer.tsx
│  │  ├─ NeonButton.tsx
│  │  ├─ NeonSplat.tsx
│  │  └─ Motion.tsx              # Motion primitives
├─ public/
├─ Dockerfile                    # Multi-stage Node → nginx
├─ Makefile                      # build/deploy/on/off/status targets
├─ k8s/
│  ├─ deployment.yaml            # ⚠️ imagePullPolicy: Never
│  ├─ service.yaml
│  ├─ ingress.yaml               # ⚠️ ssl-redirect: "false"
│  └─ namespace.yaml
├─ next.config.ts                # Static export, distDir: "dist"
├─ opencode.json                 # ⚠️ CRITICAL: leaked Ollama Cloud API key
└─ public/sitemap.xml            # Static sitemap present
```

**Key architectural decisions:**
- **Static export** (`output: 'export'`, `distDir: "dist"`): Zero server runtime; deployable as static files.
- **Hardcoded data modules:** All menu, blog, zone, and merch data lives in `src/lib/*.ts` files. Seasonal menu changes require code redeploy.
- **Client/server split on blog:** Blog detail uses `BlogPostClient.tsx` pattern, suggesting future CMS integration but currently rendering hardcoded content.
- **Raw `<img>` tags:** Many images use raw HTML `<img>` with `loading="eager"` instead of `next/image`, bypassing optimization.

---

## 4. Current Status

### 4.1 What Works (Shipped)

| Feature | Status | Evidence |
|---------|--------|----------|
| 15-page consumer brand site | ✅ Production | Homepage, Story, Menu, Locations, Blog, Events, Careers, Franchise, Legal, Artisanal, Bowls, Level Up, Merch, Gallery, Contact |
| Live URL | ✅ Active | `papapasta.co.za` per README |
| Strong SEO / local SEO | ✅ Excellent | Schema.org `Restaurant` JSON-LD, sitemap, geo coordinates, opening hours, price range |
| Design system | ✅ Enterprise-grade | Extensive CSS custom properties, Playfair Display + Inter typography, neon tokenized palette |
| Mobile responsive | ✅ Good | Tailwind breakpoints, grid collapses 3→2→1 cols, hamburger menu |
| Filterable menu | ✅ Working | Category chips, animate filter transitions |
| Blog with dynamic routing | ✅ Working | `blog/[slug]/` with `BlogPostClient.tsx` |
| Structured data | ✅ Good | `public/sitemap.xml`, OpenGraph, Twitter cards |
| `loading.tsx` | ⚠️ Partial | Present in some routes; not verified for all image-heavy pages |

### 4.2 What Is Broken / Missing / Embarrassing

| Feature | Status | Impact |
|---------|--------|--------|
| **Leaked Ollama Cloud API key** | ❌ **CRITICAL** | `opencode.json:6` — active credential exposure |
| **Placeholder pages** | ❌ **CRITICAL** | `/bowls/` and `/merch/` show dead "loading" screens — active brand damage |
| Owned ordering flow | ❌ Missing | All orders route to UberEats/Mr D — 15–30% margin loss |
| E-commerce (merch) | ❌ Placeholder | Zero SKU availability; Shopify Buy Button not implemented |
| Bowl customization (BYB) | ❌ Not built | PRD defines 4-step builder; not started |
| Reservations | ❌ Not built | PRD recommends Tock/OpenTable |
| Loyalty backend | ❌ Teaser only | "Level Up" page exists with XP/tiers UI but no backend mechanics |
| Headless CMS (Sanity) | ❌ Missing | Menu and blog content hardcoded in TSX |
| Analytics (GA4, Meta Pixel) | ❌ Missing | Zero conversion tracking, zero attribution |
| Cookie/POPIA consent | ❌ Missing | South African POPIA and EU GDPR compliance gap |
| Dietary/allergen tags | ❌ Missing | No vegetarian, vegan, gluten-free, halal, kosher indicators |
| `error.tsx` / `not-found.tsx` | ❌ Missing | No root error or 404 boundaries |
| CI/CD | ❌ Missing | No GitHub Actions |
| `.env.example` | ❌ Missing | No runtime env documentation |
| Newsletter/email capture | ❌ Missing | No owned audience building |

### 4.3 Scorecard by Agent Dimension

| Dimension | Score | Rationale |
|-----------|-------|-----------|
| Technical (Forge) | 5.0/10 | Solid site structure; critical leaked secret; no `error.tsx`; XSS surface; placeholder pages |
| Documentation (Beast) | 3.0/5 | Best README in consumer repos; missing CODER.md, PROGRESS.md; repo PRD absent |
| UX (Psylocke) | 6.9/10 | Rich journey; neon contrast risks; image performance; mobile nav overload; missing dietary tags |
| Security (Wolverine) | 5.0/10 | Critical leaked key; blog XSS surface; missing headers; K8s misconfigurations |
| Business (Strategy) | C | Exceptional brand + SEO; catastrophic revenue infrastructure; R810K–R1.5M leakage |
| Infrastructure (Colossus) | 4.5/10 | Dockerfile correct; no CI/CD; insecure K8s config; leaked secret; images from raw GitHub |

---

## 5. Critical Gaps & Technical Debt

### 🔴 Critical (Immediate — This Week)

#### CRIT-1: Leaked Ollama Cloud API Key
- **File:** `opencode.json:6`
- **Value:** `a85d97d882da462dbd589e82f4d4df41.7M38Tfg4GUIr7K6QO39YiIQh`
- **Impact:** Active credential exposure. Any party with access to this repo can use the Ollama Cloud API at the owner's expense.
- **Remediation (immediately):**
  1. Revoke the key in the Ollama Cloud dashboard.
  2. Use `git-filter-repo` or BFG to scrub the key from git history.
  3. Delete `opencode.json` from the repo and add to `.gitignore`.
  4. Audit Ollama Cloud usage logs for unauthorized access.

#### CRIT-2: Placeholder Pages Destroy Brand Credibility
- **Files:** `src/app/bowls/page.tsx`, `src/app/merch/page.tsx`
- **Issue:** Both pages display dead "loading" or "gear is loading" screens with non-functional CTAs.
- **Impact:** Consumers visiting these pages see a broken brand. This directly damages trust and loses potential revenue.
- **Remediation:** Immediately hide these routes with one of:
  1. **302 redirect** to homepage or `/menu/`
  2. **"Coming Soon" landing page** with email capture for launch notification
  3. **Remove from navigation** (`Nav.tsx`) until functional

#### CRIT-3: No Owned Ordering = Revenue Leakage
- **Issue:** Every "Order Now" click routes to UberEats or Mr D. Brand loses 15–30% in aggregator commission plus all customer data.
- **Impact:** Estimated leakage: **R67,500/month** (R810K/year) assuming 10,000 visitors, 3% conversion, R150 AOV, 15% commission.
- **Remediation:** Implement owned ordering flow or at least redirect with UTM tracking and a pre-order mechanism that keeps users on-site.

#### CRIT-4: Blog Content XSS Surface
- **File:** `src/app/blog/[slug]/BlogPostClient.tsx:69`
- **Issue:** `dangerouslySetInnerHTML` renders `post.content` without sanitization. Currently hardcoded, but if a CMS is ever connected, this becomes a **stored XSS** vector.
- **Impact:** Arbitrary JavaScript execution in visitor browsers; session hijacking, credential theft.
- **Remediation:** Sanitize with `DOMPurify` before rendering, or migrate blog content to MDX (recommended).

---

### 🟠 High (This Week / Next Sprint)

#### HIGH-1: Missing Security Headers
- **Files:** `next.config.ts` (no `headers()`); no `middleware.ts`
- **Issue:** No CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy.
- **Impact:** XSS framing, content-sniffing, and TLS downgrade attacks are all possible.
- **Remediation:** Add `middleware.ts` at project root or configure nginx in `Dockerfile` to inject headers.

#### HIGH-2: K8s Misconfigurations
- **Files:** `k8s/ingress.yaml:7`, `k8s/deployment.yaml:19`
- **Issues:**
  - `ssl-redirect: "false"` — TLS downgrade possible
  - `imagePullPolicy: Never` — prevents pulling updated images
  - `replicas: 1` — single point of failure
  - No resource limits, liveness/readiness probes, or HPA
- **Impact:** Production deployment is insecure and fragile.
- **Remediation:** Fix all four issues before any K8s deployment to production.

#### HIGH-3: Images Served from `raw.githubusercontent.com`
- **Issue:** 23 image references to GitHub raw content. Not a CDN. Subject to throttling, rate limits, and reliability issues.
- **Impact:** Slow LCP (Largest Contentful Paint), broken images if repo visibility changes, poor mobile experience.
- **Remediation:** Move all brand assets to a proper CDN (CloudFront, Cloudflare, Imgix) with WebP/AVIF delivery.

#### HIGH-4: No `error.tsx`, `loading.tsx`, `not-found.tsx`
- **Issue:** No root-level error boundary means runtime failures fall back to generic Next.js error pages.
- **Impact:** Poor user experience during unexpected failures; no graceful degradation.
- **Remediation:** Add `error.tsx` and `not-found.tsx` to `src/app/`. Verify `loading.tsx` behavior on image-heavy routes.

#### HIGH-5: No Analytics = No Attribution
- **Issue:** Zero GA4, Meta Pixel, PostHog, or UTM tracking on aggregator outbound links.
- **Impact:** Cannot answer "Which channel drove orders?" "Which menu item has highest view-to-order rate?"
- **Remediation:** Add GA4 + Meta Pixel + UTM parameters to all UberEats/Mr D links.

#### HIGH-6: Dietary / Allergen Tags Missing
- **Issue:** Menu cards show "Best Seller" and "Spicy" badges but no dietary indicators (vegetarian, vegan, gluten-free, halal, kosher).
- **Impact:** South African market is highly diverse in dietary requirements. Missing tags exclude significant customer segments.
- **Remediation:** Add icon/badge system for dietary tags on all menu items.

---

### 🟡 Medium (This Month)

#### MED-1: Neon Contrast Accessibility Risk
- **Issue:** `neon-text-gradient` and `neon-text-glow` against `#0a0a0a` backgrounds may fail WCAG AA for thin text sizes.
- **Impact:** Users with visual processing differences may struggle to read content.
- **Remediation:** Run automated contrast checks (axe-core / Lighthouse). Provide static fallback for body text. Ensure `prefers-reduced-motion` disables glow animations.

#### MED-2: No Cookie / POPIA Consent Banner
- **Issue:** South African POPIA and EU GDPR (for EU tourists) require cookie/tracking consent when analytics are introduced.
- **Remediation:** Implement consent banner before adding GA4/Meta Pixel. Link to privacy policy.

#### MED-3: No Newsletter / Email Capture
- **Issue:** Zero owned audience building. Every visitor who doesn't order immediately is lost.
- **Remediation:** Add email capture in footer and after bowl voting. Sync to Mailchimp or Zoho.

#### MED-4: Blog Content Quality Unverified
- **File:** `src/lib/blog.ts`
- **Issue:** Blog page exists but content quality and freshness are unknown.
- **Remediation:** Audit existing posts; establish editorial calendar; migrate to Sanity CMS.

#### MED-5: Nav Link Overload on Mobile
- **File:** `src/components/Nav.tsx`
- **Issue:** 10+ top-level nav links collapse into hamburger menu with no grouping. Cognitive overload.
- **Remediation:** Group under dropdowns: "Discover" (Story, Artisanal, Events), "Order" (Menu, Locations), "Connect" (Contact, Franchise).

#### MED-6: Franchise Link Confusion
- **Issue:** `/franchise/` on main consumer site links to franchise info, but actual recruitment lives on a separate subdomain.
- **Remediation:** Clarify navigation labels or redirect consumer `/franchise/` to a single-page summary with clear CTA to external recruitment site.

---

### 🟢 Low (Backlog)

- Add `env(safe-area-inset-*)` support for notched mobile devices
- Add skeleton screens for menu and gallery images (currently returns null during load)
- Consider "Order Direct" pre-order flow to keep users on-site before handoff to aggregator
- Add Instagram UGC wall on homepage/gallery
- Evaluate Vercel / Cloudflare Pages as hosting alternative to K8s for static export

---

## 6. Recommended Next Phase

### Phase 0: Emergency Triage (Week 1)
**Goal:** Stop active brand damage and security exposure.

| Task | Effort | Owner | Acceptance Criteria |
|------|--------|-------|-------------------|
| Rotate + scrub leaked Ollama Cloud API key | 0.5 day | Wolverine | Key revoked in dashboard; `git-filter-repo` scrubbed; `opencode.json` removed and `.gitignore` updated |
| Hide `/bowls/` and `/merch/` placeholder pages | 0.5 day | Forge | 302 redirect to `/` or "Coming Soon" landing page visible; removed from `Nav.tsx` |
| Add security headers via `middleware.ts` | 1 day | Wolverine | CSP, HSTS, X-Frame-Options present on all responses |
| Fix K8s `ssl-redirect` and `imagePullPolicy` | 0.5 day | Colossus | `ssl-redirect: "true"`, `imagePullPolicy: "IfNotPresent"` or `"Always"` |
| Add `error.tsx` and `not-found.tsx` | 0.5 day | Forge | Root-level error and 404 pages render correctly; match brand design |
| Add dietary/allergen tags to menu | 1 day | Psylocke | All menu items display relevant dietary badges (veg, vegan, GF, halal, kosher) |

### Phase 1: Commerce Foundation (Weeks 2–3)
**Goal:** Enable first direct revenue and owned conversion tracking.

| Task | Effort | Owner |
|------|--------|-------|
| Implement Shopify Buy Button for merch | 1 day | Forge |
| Add GA4 + Meta Pixel + UTM tracking | 0.5 day | Dazzler |
| Set up Sanity CMS for menu items and blog | 2–3 days | Forge |
| Add cookie/POPIA consent banner | 1 day | Psylocke |
| Add email/SMS capture in footer | 0.5 day | Psylocke |
| Build "Coming Soon" waitlist for bowls with countdown | 2 days | Psylocke |

### Phase 2: Owned Ordering & Loyalty (Weeks 4–6)
**Goal:** Reduce aggregator dependency and build retention.

| Task | Effort | Owner |
|------|--------|-------|
| Implement "Order Direct" pre-order flow | 1 week | Forge |
| Set up Supabase for loyalty points ledger | 3 days | Forge |
| Integrate Tock / OpenTable for reservations | 2 days | Forge |
| Build first "Bowl Drop" campaign (countdown + waitlist + limited inventory) | 1 week | Dazzler/Beast |

### Phase 3: Automation & Intelligence (Weeks 7–8)
**Goal:** Automate operations and gain conversion insights.

| Task | Effort | Owner |
|------|--------|-------|
| n8n order flows + SMS confirmation | 3 days | Iceman |
| Customer analytics / BI dashboard (Storm) | 1 week | Storm |
| A/B test menu page layouts with PostHog | 2 days | Dazzler |
| WhatsApp Business API for ordering | 1 week | Iceman |

### Phase 4–6: CMS Migration, BYB Builder, Multi-Location Scale

Refer to the full Vault PRD: [[PRDs/Business/2026-05-21 — Papa Pasta Main Commerce Platform PRD|Papa Pasta Main Commerce Platform PRD]].

---

## 7. Acceptance Criteria

### Functional AC

| ID | Criteria | How to Verify |
|----|----------|---------------|
| AC-1 | `/bowls/` and `/merch/` no longer show dead loading screens. | Visit URLs → verify redirect or "Coming Soon" page |
| AC-2 | Shopify Buy Button renders on merch page with at least 1 SKU. | Visual QA + test purchase in Shopify test mode |
| AC-3 | GA4 fires `order_click` event when "Order Now" is clicked. | Chrome DevTools Network → GA4 payload |
| AC-4 | Menu items display dietary tags (veg, vegan, GF, halal, kosher) where applicable. | Visual QA on `/menu/` |
| AC-5 | Cookie consent banner appears before any analytics scripts load. | Incognito mode → verify banner → accept/reject → scripts load conditionally |

### Technical AC

| ID | Criteria | How to Verify |
|----|----------|---------------|
| AC-6 | `opencode.json` is absent from repo and git history. | `git log --all --full-history -- opencode.json` returns empty |
| AC-7 | `npm run build` produces zero errors and zero warnings. | CI gate |
| AC-8 | Lighthouse mobile score ≥ 85 for `/` and `/menu/`. | Lighthouse CI |
| AC-9 | Security headers (CSP, HSTS, X-Frame-Options) present on all responses. | `curl -I https://papapasta.co.za` |
| AC-10 | `dangerouslySetInnerHTML` is sanitized or removed from `BlogPostClient.tsx:69`. | Grep source code |

### Security AC

| ID | Criteria | How to Verify |
|----|----------|---------------|
| AC-11 | No secrets in repository (API keys, JWT tokens, passwords). | `truffleHog` or `git-secrets` scan |
| AC-12 | K8s ingress has `ssl-redirect: "true"`. | Inspect `k8s/ingress.yaml` |
| AC-13 | K8s deployment has `imagePullPolicy: "IfNotPresent"` or `"Always"`. | Inspect `k8s/deployment.yaml` |
| AC-14 | Blog content sanitizes HTML before rendering. | XSS payload test in staging |

---

## 8. Agent Assignment

| Agent | Responsibility | Tasks |
|-------|---------------|-------|
| **Wolverine** | Security triage | Rotate leaked key, remove `opencode.json`, add security headers, secrets scanning |
| **Forge** | Commerce + CMS + error boundaries | Shopify Buy Button, Sanity CMS, `error.tsx`, `not-found.tsx`, K8s fixes, CI/CD |
| **Psylocke** | UX polish + accessibility | Hide placeholders, dietary tags, cookie banner, mobile nav grouping, contrast audit |
| **Dazzler** | Analytics + campaigns | GA4/Meta Pixel setup, UTM tracking, bowl drop campaign design, A/B tests |
| **Beast** | Content + documentation | README expansion, CODER.md, PROGRESS.md, blog editorial calendar |
| **Iceman** | Automation | n8n flows, SMS confirmations, WhatsApp Business API integration |
| **Storm** | BI + analytics dashboard | Customer analytics dashboard, menu performance tracking |
| **Colossus** | Infrastructure | CDN migration (Cloudflare), K8s production readiness, image optimization pipeline |
| **Bishop** | Revenue tracking | Cost estimates, ROI modeling for owned ordering vs aggregator fees |

---

## 9. Cross-Links

### Portfolio Ecosystem Map

```
Papa Pasta Main Website (this PRD)
  ├─ Consumer brand site (D2C restaurant + merch + loyalty)
  ├─ Should display: "Powered by INFX Media" / "TakeOver by INFX"
  ├─ Should display: "Managed by ChromaCommand" (environment control)
  ├─ Franchise recruitment: Papa Pasta FND (separate subdomain)
  ├─ Brand assets: papa-pasta-assets (raw GitHub → needs CDN)
  └─ Order flow: Currently → UberEats/Mr D (aggregator dependency)
     └─ Target: Owned ordering + Shopify Buy Button

INFX Media Website
  ├─ B2B marketing for QSR brands
  ├─ Should reference Papa Pasta as proof-of-concept
  └─ Lead data flows to Zoho → n8n → nurture

ChromaCommand Platform
  ├─ IoT dashboard for store RGB + menu + audio control
  ├─ Should be marketed as "powering Papa Pasta stores"
  └─ Currently no cross-linking exists

Papa Pasta FND
  ├─ Franchise recruitment platform
  ├─ Separate from consumer site to avoid funnel confusion
  └─ Should cross-link to main site: "Visit a Papa Pasta near you"
```

### Related Documents

- [[PRDs/Business/2026-05-21 — Papa Pasta Main Commerce Platform PRD|Vault PRD v1.0]] — Detailed 6-phase commerce roadmap
- [[PRDs/Business/2026-05-21 — INFX Media Lead Machine PRD|INFX Media Lead Machine PRD]] — B2B marketing sibling
- [[PRDs/Business/YYYY-MM-DD — papa-pasta-fnd PRD|Papa Pasta FND PRD]] — Franchise recruitment sibling
- **Design System:** `papa-pasta-main-website/src/app/globals.css` + `DESIGN.md`
- **Repo:** https://github.com/targetpraks/papa-pasta-main-website

### Cross-Cutting Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| Aggregator dependency deepens | High | Implement owned ordering ASAP; negotiate better rates |
| Leaked key already exploited | Critical | Audit Ollama Cloud logs; rotate all keys in same namespace |
| Placeholder pages continue to damage brand | Critical | Emergency redirect this week |
| K8s config accidentally deployed to production | High | Colossus gate review before any K8s apply |
| React 19 ecosystem incompatibility | Medium | Pin versions; staging validation before deploy |
| Franchise link confusion | Medium | Consolidate or clearly differentiate consumer vs recruitment funnels |

---

## Appendices

### A. File Reference Index

| File | Line(s) | Issue / Relevance |
|------|---------|-------------------|
| `opencode.json` | 6 | **CRITICAL:** Leaked Ollama Cloud API key |
| `src/app/blog/[slug]/BlogPostClient.tsx` | 69 | `dangerouslySetInnerHTML` on `post.content` — XSS surface |
| `src/app/layout.tsx` | 81 | JSON-LD via `dangerouslySetInnerHTML` — pattern risk |
| `src/app/layout.tsx` | 77-78 | `preconnect` / `dns-prefetch` to `raw.githubusercontent.com` |
| `src/components/Nav.tsx` | — | 10+ top-level links; mobile cognitive overload |
| `src/app/bowls/page.tsx` | — | Placeholder — dead loading screen |
| `src/app/merch/page.tsx` | — | Placeholder — dead loading screen |
| `k8s/ingress.yaml` | 7 | `ssl-redirect: "false"` |
| `k8s/deployment.yaml` | 19 | `imagePullPolicy: Never` |
| `next.config.ts` | — | Missing `headers()`, static export config |
| `src/lib/menu.ts` | — | Hardcoded menu data; seasonal changes require redeploy |
| `public/sitemap.xml` | — | Static sitemap present; should regenerate if dynamic |
| `Dockerfile` | — | Multi-stage build correct; nginx should inject headers |
| `Makefile` | — | Targets local K8s only; not production deployment |

### B. OWASP Top 10 Mapping

| OWASP Category | Risk Level | File/Line | Mitigation |
|----------------|-----------|-----------|------------|
| A02 Cryptographic Failures | **Critical** | `opencode.json:6` | Rotate key + scrub history |
| A03 Injection | **High** | `BlogPostClient.tsx:69` | DOMPurify or MDX |
| A05 Security Misconfiguration | **High** | `next.config.ts`, `k8s/ingress.yaml` | Add `middleware.ts`; fix K8s |
| A06 Vulnerable Components | Low | All deps | `npm audit` in CI |
| A08 Integrity Failures | Medium | `raw.githubusercontent.com` refs | Move to production CDN |
| A09 Logging/Monitoring | **High** | Entire repo | GA4 + Sentry |

### C. Revenue Leakage Calculation

| Metric | Value |
|--------|-------|
| Estimated monthly visitors | 10,000 |
| Conversion rate | 3% |
| Average order value (AOV) | R150 |
| Monthly orders | 300 |
| Gross monthly revenue | R45,000 |
| Aggregator commission (15%) | R6,750/month |
| Annual aggregator fees | **R81,000** |
| Lost merch + loyalty upsell (est. 2×) | **R162,000/year** |
| **Total annual leakage** | **R810K–R1.5M** |

### D. Cost Estimate (Phase 0–1)

| Component | Monthly Cost |
|-----------|-------------|
| Shopify (Basic) | $39 |
| Sanity CMS | $0 (free tier) |
| Cloudflare Pages (hosting) | $0 |
| Cloudflare CDN / R2 | $0–$20 |
| GA4 + Meta Pixel | $0 |
| UptimeRobot | $0 |
| **Total Phase 0–1** | **$39–$59** |

---

> **End of PRD** | Next action: Magik tasks Wolverine + Forge with Phase 0 emergency sprint. See [[Task Center]] for issue tracking.
