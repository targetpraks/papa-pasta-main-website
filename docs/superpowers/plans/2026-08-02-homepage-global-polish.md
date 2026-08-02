# Homepage + Global Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Polish the neon-canonical homepage and shared chrome — fixing accessibility/correctness defects, trimming needless client JS, preserving the colour-play brand signature, and making `DESIGN.md` accurate.

**Architecture:** Move link interaction from imperative JS mouse handlers to a CSS `--accent` custom-property utility (`:hover` + `:focus-visible`), which also lets `Footer` become a server component. Gate the hero's JS colour-rotation behind `prefers-reduced-motion` (freeze on a vivid state, never remove colour). Slim the hero's glitch-logo DOM. Add one homepage conversion band. Rewrite `DESIGN.md`.

**Tech Stack:** Next.js 16.2.4 (App Router, `output: 'export'`), React 19, Tailwind CSS v4, framer-motion 12, plain CSS in `globals.css`.

## Global Constraints

- **Static export** (`output: 'export'`): no server actions, no runtime data. All changes must build with `npm run build` → `dist/`.
- **No new dependencies.** No animation-library swap.
- **Builds/lint run on the Mac mini over SSH**, not the Air: `ssh rmdev@mac-mini 'cd "/Volumes/Hiksemi 1TB/DevMini/papa-pasta-main-website" && <cmd>'`. Package manager is **npm** (`package-lock.json`).
- **No test framework exists.** Verification per task = build passes + `npm run lint` clean + browser check (screenshot / keyboard-tab / contrast / reduced-motion emulation). Do **not** scaffold a test runner.
- **Contrast floor:** informational text ≥ 4.5:1 on `#0a0a0a`. Never below `white/55` for text conveying meaning.
- **Brand rule:** black/white base that *pops and shifts* with colour. Colour-play stays. Reduced-motion freezes motion but **retains** colour.
- **Design tokens:** Navy legacy is gone — neon system. Custom utilities `text-label-md` / `tracking-label-md` resolve via `@theme` in `globals.css`. `color-mix(in srgb, …)` is already used in the codebase and is approved.
- **Commit style:** Conventional commits, one per task. Branch: `polish/homepage-global` (already created). Regenerate `dist/` once, in the final task only.

---

### Task 1: Shared neon-link CSS utility + reduced-motion hardening

**Files:**
- Modify: `src/app/globals.css` (add utility near the other component classes ~line 300; extend the existing `@media (prefers-reduced-motion: reduce)` block at line 974)

**Interfaces:**
- Produces: CSS class `.pp-neon-link` driven by a `--accent` custom property, consumed by `Nav.tsx` (Task 3) and `Footer.tsx` (Task 2). Contract: an element with `class="pp-neon-link"` and inline `style={{ "--accent": "#RRGGBB" }}` shows white/65 at rest, and the accent colour + neon glow on `:hover` and `:focus-visible`.

- [ ] **Step 1: Add the `.pp-neon-link` utility**

Add to `src/app/globals.css` (in the component-class region, e.g. just after the `.btn-neon-outline` block near line ~390):

```css
/* Neon link — CSS-driven hover/focus, keyboard + touch parity.
   Consumers set the accent via inline style: style={{ "--accent": "#00ffff" }} */
.pp-neon-link {
  --accent: #00ffff;
  color: rgb(255 255 255 / 0.65);
  transition: color 0.3s ease, text-shadow 0.3s ease, padding-left 0.3s ease;
}
.pp-neon-link:hover,
.pp-neon-link:focus-visible {
  color: var(--accent);
  text-shadow:
    0 0 8px color-mix(in srgb, var(--accent) 50%, transparent),
    0 0 20px color-mix(in srgb, var(--accent) 25%, transparent);
}
.pp-neon-link:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
  border-radius: 2px;
}
```

- [ ] **Step 2: Harden the hero rain under reduced-motion**

The global `animation-duration: 0.01ms !important` hammer already stops CSS motion, but the code-rain spans can collapse into a smear. Inside the existing block at line 974 (before its closing `}`), add:

```css
  .hero-decay-rain,
  .hero-decay-tears {
    display: none;
  }
  .hero-decay-static {
    opacity: 0.5;
  }
```

- [ ] **Step 3: Verify build + lint**

Run:
```bash
ssh rmdev@mac-mini 'cd "/Volumes/Hiksemi 1TB/DevMini/papa-pasta-main-website" && npm run lint && npm run build'
```
Expected: lint clean, build succeeds (static export). No consumers yet, so no visual change.

- [ ] **Step 4: Commit**

```bash
git add src/app/globals.css
git commit -m "feat(css): add pp-neon-link utility and harden hero reduced-motion"
```

---

### Task 2: Footer → server component, CSS interaction, contrast floor

**Files:**
- Modify: `src/app/components/Footer.tsx`

**Interfaces:**
- Consumes: `.pp-neon-link` + `--accent` from Task 1.
- Produces: nothing new; `Footer` remains the default export used in `layout.tsx`.

- [ ] **Step 1: Remove the client directive**

Delete the top line `"use client";` from `src/app/components/Footer.tsx`. (`new Date().getFullYear()` runs fine on the server; there are no other client-only APIs once the mouse handlers go.)

- [ ] **Step 2: Replace imperative hover with the CSS utility on Explore + Info links**

For each `exploreLinks` / `infoLinks` `<Link>`, remove the `onMouseEnter`/`onMouseLeave` handlers and use the utility. Example — replace the Explore link block:

```tsx
<Link
  href={link.href}
  className="pp-neon-link text-sm inline-block hover:pl-1"
  style={{ "--accent": link.neon } as React.CSSProperties}
>
  {link.label}
</Link>
```

Apply the identical pattern to the Info column links (their `link.neon` values already exist).

- [ ] **Step 3: Convert the bottom-bar links (Privacy/Franchise/Contact)**

Replace their inline `onMouseEnter/onMouseLeave` handlers with the utility, e.g.:

```tsx
<Link href="/legal/" className="pp-neon-link" style={{ "--accent": "#00ffff" } as React.CSSProperties}>Privacy &amp; Legal</Link>
<a href="https://franchise.papapasta.co.za/" target="_blank" rel="noopener noreferrer" className="pp-neon-link" style={{ "--accent": "#ff0080" } as React.CSSProperties}>Franchise</a>
<Link href="/contact/" className="pp-neon-link" style={{ "--accent": "#39ff14" } as React.CSSProperties}>Contact</Link>
```

- [ ] **Step 4: Raise contrast on informational text**

- Brand blurb (line ~72): `text-white/40` → `text-white/70`.
- Bottom bar container (line ~172): `text-white/30` → `text-white/55`.
- Leave the social-icon default (`text-white/50`) — icons are non-text/decorative and paired with `aria-label`.

- [ ] **Step 5: Verify build, contrast, keyboard**

Run the lint+build command from Task 1 Step 3. Then in the browser (served `dist/`): Tab through the footer — every link must show a visible neon outline on focus; confirm the copyright/legal text is now clearly legible.

- [ ] **Step 6: Commit**

```bash
git add src/app/components/Footer.tsx
git commit -m "refactor(footer): server component, CSS-driven focus states, AA contrast"
```

---

### Task 3: Nav — CSS interaction, focus rings, height consistency

**Files:**
- Modify: `src/app/components/Nav.tsx`

**Interfaces:**
- Consumes: `.pp-neon-link` + `--accent` from Task 1.
- Produces: nothing new; default export unchanged.

- [ ] **Step 1: Convert desktop nav links**

For the desktop `navLinks.map(...)` `<Link>` (lines ~97–133): remove `onMouseEnter`/`onMouseLeave`. Add `pp-neon-link` to className and set `--accent`. Preserve the active-state colour (active link stays lit) by keeping the inline active colour but letting the utility handle hover/focus:

```tsx
<Link
  key={l.href}
  href={l.href}
  className={`pp-neon-link relative px-3 py-2 text-sm font-medium group ${isActive ? "is-active" : ""}`}
  style={{ "--accent": l.accent, color: isActive ? l.accent : undefined } as React.CSSProperties}
  aria-current={isActive ? "page" : undefined}
>
```

Keep the underline `<span>` exactly as-is (it already keys off `navAccentMap`).

- [ ] **Step 2: Add focus-visible to the Franchise pill**

On the desktop Franchise `<a>` (lines ~135–153) and the mobile one, remove the `onMouseEnter`/`onMouseLeave` shadow swaps and add a static hover/focus via className. Replace inline handlers with:

```tsx
className="ml-3 inline-flex items-center rounded-md px-5 py-2.5 text-label-md uppercase tracking-label-md font-semibold transition-shadow duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 hover:shadow-[0_0_20px_#ff008080,0_0_40px_#ff008040]"
style={{ backgroundColor: FRANCHISE_NEON, color: "#000", boxShadow: `0 0 12px ${FRANCHISE_NEON}60`, outlineColor: FRANCHISE_NEON } as React.CSSProperties}
```

- [ ] **Step 3: Convert mobile-menu links**

For the mobile `navLinks.map(...)` `<Link>` (lines ~222–244): remove the mouse handlers, add `pp-neon-link`, set `--accent`, keep the active colour inline. Mobile taps now get `:focus-visible` feedback and the active colour still shows.

- [ ] **Step 4: Verify build, keyboard, scrolled state**

Run lint+build. In the browser: Tab through the desktop nav — each item lights its own accent with a visible outline on focus; scroll to confirm the `scrolled` background still applies; open the mobile menu (resize to 375px) and Tab through it.

- [ ] **Step 5: Commit**

```bash
git add src/app/components/Nav.tsx
git commit -m "refactor(nav): CSS-driven hover/focus with keyboard parity and focus rings"
```

---

### Task 4: Cookie consent — dialog semantics, z-order, flash fix

**Files:**
- Modify: `src/app/components/CookieConsent.tsx`

- [ ] **Step 1: Remove the consent flash**

Replace `useEffect` + `setTimeout(0)` with a synchronous first-paint decision using `useLayoutEffect` guarded for SSR (keep `"use client"`):

```tsx
import { useState, useLayoutEffect } from "react";
// ...
const [visible, setVisible] = useState(false);
useLayoutEffect(() => {
  setVisible(!localStorage.getItem("pp-cookie-consent"));
}, []);
```

- [ ] **Step 2: Add dialog semantics + raise z-order + slim weight**

Change the outer `<div>`:

```tsx
<div
  role="dialog"
  aria-label="Cookie consent"
  aria-live="polite"
  className="fixed bottom-0 left-0 right-0 z-[80] bg-black/95 border-t border-white/10 px-4 py-3"
>
```

(`z-[80]` puts it on the toast tier, above the `z-50` nav — matches the `DESIGN.md` z-index scale.)

- [ ] **Step 3: Add visible focus rings to the buttons**

Append to the Decline button className: `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`. Append to the Accept button className: `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`.

- [ ] **Step 4: Verify build + first-paint + keyboard**

Run lint+build. In the browser with cleared `localStorage`: reload and confirm no flash of an "accepted" state and that the bar sits above the nav; Tab to reach Decline/Accept with visible focus. Set consent, reload, confirm the bar stays hidden.

- [ ] **Step 5: Commit**

```bash
git add src/app/components/CookieConsent.tsx
git commit -m "fix(cookie): dialog semantics, toast-tier z-index, remove consent flash"
```

---

### Task 5: Hero — gate colour-rotation on reduced-motion + trim glitch-logo DOM

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css` (chromatic-clone CSS for the single logo image)

**Interfaces:**
- Consumes: existing `.hero-logo-*` classes and their keyframes in `globals.css`.
- Produces: hero renders one `<Image>` logo (down from four); colour-rotation respects `prefers-reduced-motion`.

- [ ] **Step 1: Gate the colour-rotation interval**

In `Hero()` (`page.tsx` lines ~68–76), only run the interval when motion is allowed, and freeze on a vivid palette otherwise:

```tsx
useEffect(() => {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (mq.matches) {
    setHeroCtaColors([1, 3, 4]); // pink / violet / yellow — a vivid frozen pop
    return;
  }
  const interval = window.setInterval(() => {
    setHeroCtaColors((current) => pickHeroCtaColors(current));
  }, 1400);
  return () => window.clearInterval(interval);
}, []);
```

Colour is retained under reduced-motion; only the motion stops.

- [ ] **Step 2: Reduce four logo `<Image>` layers to one**

In the `<motion.h1>` glitch block (lines ~131–164), delete the three extra `<Image>` elements with classes `hero-logo-img-cyan`, `hero-logo-img-magenta`, `hero-logo-img-lime`. Keep only the `hero-logo-img-main` `<Image>` and the `hero-logo-scanline` `<span>`. Keep `<span className="sr-only">Papa Pasta</span>`.

- [ ] **Step 3: Reproduce the RGB glitch on the single image via CSS**

In `globals.css`, update `.hero-logo-img-main` to carry the chromatic aberration itself (replacing the deleted per-colour layers) using layered drop-shadow filters keyed to motion:

```css
.hero-logo-img-main {
  filter:
    drop-shadow(-2px 0 0 color-mix(in srgb, var(--color-pp-neon-cyan) 85%, transparent))
    drop-shadow(2px 0 0 color-mix(in srgb, var(--color-pp-neon-pink) 85%, transparent));
  animation: hero-logo-white-flicker 3.4s steps(6, end) infinite;
}
@media (prefers-reduced-motion: reduce) {
  .hero-logo-img-main { animation: none; }
}
```

(The existing `hero-logo-glitch-cyan/magenta/lime` keyframes are now unused; leave them — removing keyframes is out of scope and risks other references.)

- [ ] **Step 4: Verify build + visual parity + motion off**

Run lint+build. In the browser: homepage still shows the chromatic-split glitch crest (compare against a pre-change screenshot for parity). Emulate reduced-motion (`resize_window` with reduced-motion or devtools emulate): rain stops, logo static, CTAs frozen on a vivid colour, no console errors.

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx src/app/globals.css
git commit -m "perf(hero): single-image glitch logo, gate colour-rotation on reduced-motion"
```

---

### Task 6: Homepage conversion band (third act)

**Files:**
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `StaggerContainer` / `staggerChildScale` (already imported), existing neon card styling idiom from `JourneySwitchboard`.
- Produces: a `ConversionBand` section rendered between `<JourneySwitchboard />` and the end of `HomePage`.

- [ ] **Step 1: Add the `ConversionBand` component**

Add above `HomePage` in `page.tsx`:

```tsx
function ConversionBand() {
  const cards = [
    { href: "/drops/", label: "Latest Drops", desc: "New store launches, capsule collections, and collab merch — the moment they go live.", cta: "See the drops", accent: "#39ff14" },
    { href: "/loyalty/", label: "Join Loyalty", desc: "Birthday pasta, early access to drops, and store-launch invites. Free to join.", cta: "Get rewards", accent: "#ffd700" },
  ];
  return (
    <section className="bg-black text-white py-16 sm:py-20 border-b border-white/10 hero-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-label-md uppercase tracking-label-md text-white/55 mb-8 text-center">Don&apos;t miss the next one</p>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5" staggerDelay={0.08}>
          {cards.map((c) => (
            <motion.div key={c.href} variants={staggerChildScale}>
              <Link
                href={c.href}
                className="group relative flex flex-col justify-between h-full overflow-hidden rounded-lg border-2 bg-black p-8 min-h-[200px] transition-transform duration-300 hover:-translate-y-1"
                style={{ borderColor: `${c.accent}70`, boxShadow: `inset 0 0 34px ${c.accent}18, 0 0 34px ${c.accent}30` }}
              >
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-3">{c.label}</h2>
                  <p className="text-sm leading-relaxed text-white/70 max-w-sm">{c.desc}</p>
                </div>
                <span className="pp-neon-link mt-6 inline-flex items-center gap-2 text-label-md uppercase tracking-label-md" style={{ "--accent": c.accent } as React.CSSProperties}>
                  {c.cta} →
                </span>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Render it in `HomePage`**

```tsx
export default function HomePage() {
  return (
    <>
      <Hero />
      <JourneySwitchboard />
      <ConversionBand />
    </>
  );
}
```

- [ ] **Step 3: Verify build + responsive screenshots**

Run lint+build. Screenshot the homepage at 360 / 768 / 1440 widths: the band sits above the footer, two cards stack on mobile and sit side-by-side ≥640px, text is legible (white/70), and the page no longer dead-ends.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat(home): add drops/loyalty conversion band"
```

---

### Task 7: Rewrite DESIGN.md to the neon system

**Files:**
- Modify: `DESIGN.md`

- [ ] **Step 1: Replace the design system content**

Rewrite `DESIGN.md` so it documents the system actually in use. It must cover, accurately:
- **Base palette:** warm black `#0a0a0a`, deep `#050505`, elevated `#1a1a1a`, white `#ffffff`, grey scale (`#333`–`#e6e6e6`).
- **Accent spectrum (rotating, per-surface):** cyan `#00ffff`, pink `#ff00ff` / hot-pink `#ff0080`, lime/acid-green `#39ff14`, violet `#bf00ff`, orange `#ff4500` / `#ff5f1f`, gold `#ffd700`. State explicitly that this **supersedes** the old "one accent per screen" rule — multiple, shifting accents are the signature.
- **Brand principle:** black/white base that pops and shifts with colour; colour-play is intentional.
- **Glow scale:** the neon box-shadow / text-shadow conventions used (`0 0 8px`, `0 0 20px`, `0 0 42px` accent stacks).
- **Typography:** retained — Playfair Display (display/serif) + Inter (body/UI), with the existing type/label token scale.
- **Motion + reduced-motion contract:** motion is lush by default; under `prefers-reduced-motion` motion freezes but **colour is retained** (document the frozen-vivid-state rule and the JS-interval gating).
- **Accessibility:** contrast floor (informational text ≥ 4.5:1, never below `white/55` on black); visible `:focus-visible` neon outlines; keyboard/touch parity via `.pp-neon-link`.
- **Z-index scale:** nav `50`, cookie/toast `80` (reflecting Task 4).

Keep the YAML frontmatter shape but update `description` and colour tokens to match; remove gold-as-sole-accent language.

- [ ] **Step 2: Verify accuracy**

Cross-check every hex and rule against `globals.css` and the components — no claim in `DESIGN.md` may contradict the code.

- [ ] **Step 3: Commit**

```bash
git add DESIGN.md
git commit -m "docs(design): rewrite DESIGN.md to the canonical neon system"
```

---

### Task 8: Full build, lint, regenerate dist, visual regression

**Files:**
- Modify: `dist/**` (regenerated build output — committed once, per repo convention)

- [ ] **Step 1: Clean build + lint on the mini**

```bash
ssh rmdev@mac-mini 'cd "/Volumes/Hiksemi 1TB/DevMini/papa-pasta-main-website" && npm run lint && npm run build'
```
Expected: lint clean, static export to `dist/` succeeds.

- [ ] **Step 2: Serve and visual-regression sweep**

Serve `dist/` locally (`python3 -m http.server 4599 --directory dist`) and screenshot at 360 / 768 / 1440: homepage (hero, switchboard, new band, footer), nav at top + scrolled, mobile menu open, cookie bar on fresh load. Confirm: neon glitch intact, focus rings visible on Tab, contrast legible, reduced-motion freezes motion while keeping colour.

- [ ] **Step 3: Commit regenerated dist**

```bash
git add dist
git commit -m "chore(build): regenerate static export for homepage + global polish"
```

- [ ] **Step 4: Open the PR**

```bash
git push -u origin polish/homepage-global
gh pr create --title "Homepage + global polish (neon canonical)" --body "See docs/superpowers/specs/2026-08-02-homepage-global-polish-design.md. Accessibility (contrast, keyboard/focus parity, cookie dialog), reduced-motion gating that preserves colour-play, hero perf trim, homepage conversion band, and DESIGN.md rewrite to the neon system."
```

---

## Self-Review

**Spec coverage:**
- §1 imperative→CSS interaction → Tasks 1, 2, 3 ✓
- §2 contrast floors → Task 2 (footer) + audited in Tasks 5/6 (new text uses white/70) ✓
- §3 cookie consent → Task 4 ✓
- §4 hero motion + perf (reduced-motion gate, logo trim) → Task 5 ✓
- §5 homepage third act → Task 6 ✓
- §6 DESIGN.md rewrite → Task 7 ✓
- Testing/verification (build, lint, keyboard, reduced-motion, visual regression) → per-task + Task 8 ✓
- Risks (Tailwind custom classes, server-component conversion, color-mix) → resolved: `text-label-md`/`tracking-label-md` confirmed in `@theme`; `h-18`/`h-22` resolve via Tailwind v4 numeric spacing; `color-mix` already used; Footer has no client APIs after handler removal ✓

**Placeholder scan:** No TBD/TODO; every code step has concrete code with real class names (`hero-logo-img-main`, `pp-neon-link`, `FRANCHISE_NEON`), real hex values, and real file lines. ✓

**Type/name consistency:** `.pp-neon-link` + `--accent` contract defined in Task 1 and consumed identically in Tasks 2, 3, 6. `setHeroCtaColors` / `pickHeroCtaColors` / `heroCtaStyle` names match `page.tsx`. `heroCtaPalette` indices `[1,3,4]` map to pink/violet/yellow, valid indices of the 6-colour palette. ✓
