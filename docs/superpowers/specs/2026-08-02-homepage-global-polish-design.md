# Design — Pass 1: Homepage + Global Polish

- **Date:** 2026-08-02
- **Status:** Approved (design), pending spec review
- **Owner:** Ricardo Maio
- **Author:** Claude

## Context

The live Papa Pasta site ships a **neon-cyberpunk** aesthetic (black/white base, matrix
"code rain," glitch crest, five rotating neon accents), but the checked-in `DESIGN.md`
describes a contradictory **heritage gold/cream** system. The neon direction is confirmed
canonical; `DESIGN.md` is stale.

This pass polishes the **homepage and the shared chrome** (nav, footer, cookie banner,
global tokens) and rewrites `DESIGN.md` to document the neon system. It is the first of a
sequence; menu/order pages are explicitly out of scope (Pass 2).

### Brand principle (governs all visual decisions)

Papa Pasta's identity is a **black-and-white base that pops with colour and shifts colour
over time**. Colour-play is a deliberate brand signature, not decoration. The homepage
CTA colour-rotation is intentional and stays. Accessibility is achieved by *freezing* on a
vivid coloured state under `prefers-reduced-motion` — never by removing colour.

## Goals

1. Fix accessibility and correctness defects in the shared chrome (contrast, keyboard/touch
   state parity, focus visibility, cookie-banner semantics).
2. Reduce needless client-side JS and unthrottled animation to move toward the project's
   LCP / JS-budget targets — without diminishing the colour-play brand signature.
3. Tighten the homepage's visual rhythm and remove its dead-end by adding one compact
   conversion band.
4. Make `DESIGN.md` an accurate source of truth for the neon system.

## Non-Goals (YAGNI)

- No full-site restyle. No menu/order/story rework.
- No new dependencies; no animation-library swap.
- No content strategy or copywriting overhaul beyond the single new band.

## Scope — Files Touched

| File | Change |
|---|---|
| `src/app/page.tsx` | Reduced-motion gating; hero glitch-logo layer trim; new conversion band; spacing rhythm |
| `src/app/components/Nav.tsx` | CSS-driven hover/focus via `--accent`; visible focus rings; height consistency |
| `src/app/components/Footer.tsx` | Drop `"use client"`; CSS-driven hover/focus; contrast floor |
| `src/app/components/CookieConsent.tsx` | `role="dialog"` + `aria-label`; z-order above nav; slimmer weight; consent-flash fix |
| `src/app/globals.css` | Contrast token floors; shared `--accent` hover/focus utilities; reduced-motion rules |
| `DESIGN.md` | Rewrite to codify the neon token system, glow scale, motion + reduced-motion contract |

## Detailed Design

### 1. Interaction model — replace imperative hover with CSS (`--accent`)

**Problem.** `Nav.tsx` and `Footer.tsx` set link colour/glow via `onMouseEnter` /
`onMouseLeave` handlers that mutate `element.style`. Consequences: keyboard-focus and touch
users get **no** state feedback (a11y failure); every link ships event handlers (JS weight);
and `Footer` is a client component solely for hover effects.

**Solution.** Each link carries its accent as a CSS custom property:
`style={{ "--accent": link.accent }}`. Hover **and** `:focus-visible` are handled in CSS:

```css
.pp-neon-link { color: rgb(255 255 255 / 0.65); transition: color .3s, text-shadow .3s; }
.pp-neon-link:hover,
.pp-neon-link:focus-visible {
  color: var(--accent);
  text-shadow: 0 0 8px color-mix(in srgb, var(--accent) 50%, transparent),
               0 0 20px color-mix(in srgb, var(--accent) 25%, transparent);
  outline: none;
}
.pp-neon-link:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
```

**Result.** Keyboard + touch parity, focus visibility, less JS, and `Footer` becomes a
static **server component** (`"use client"` removed).

### 2. Contrast floors (WCAG 2.1 AA)

Informational text on the black base must reach ≥4.5:1. `white/40` (~3.6:1) and `white/30`
(~2.5:1) fail. New floors:

| Role | Old | New | Approx ratio on `#0a0a0a` |
|---|---|---|---|
| Body / meaningful text | `white/40` | `white/70` | ~7:1 |
| Secondary / metadata | `white/30` | `white/55` | ~5:1 |
| Decorative only (non-text) | any | unchanged | n/a |

Applied in `Footer.tsx` (brand blurb, legal row, copyright) and audited across `page.tsx`.

### 3. Cookie consent

- Wrap in `role="dialog"` with `aria-label="Cookie consent"`; buttons keep visible focus rings.
- Raise stacking so it sits **above** the `z-50` nav (assign it the toast tier) and never
  competes with the hero on first paint; slim padding/weight so it reads as a bar, not a wall.
- Remove the `setTimeout(0)` reveal that causes a consent flash — read `localStorage` in a
  layout-effect and render only when undecided, with no flash of the accepted state.

### 4. Hero — motion + performance

- **Colour-play preserved.** The 1.4s CTA colour-rotation `setInterval` stays for users who
  allow motion. Under `prefers-reduced-motion: reduce`, freeze on a pre-picked vivid colour
  set (still black/white + colour pop) and clear the interval — no motion, full colour.
- **Reduced-motion also disables** the matrix "code rain" and decay animation layers,
  substituting a static low-opacity texture so the section still reads as intentional.
- **Glitch logo.** Reduce the four stacked full-resolution `<Image>` layers used for the RGB
  glitch to a lighter approach (one authored image plus CSS-driven chromatic clones), cutting
  decode work on the LCP element. Visual result is unchanged for motion users.

### 5. Homepage third act (conversion band)

Add one compact band between `JourneySwitchboard` and the footer so the page resolves into an
action instead of dead-ending. Content: a "latest drops / loyalty" teaser with a single
primary CTA, using the existing neon card language and section rhythm. Static/server-friendly
where possible; colour-play consistent with the rest of the page. No new data source — links
to existing `/drops/` and `/loyalty/` routes.

### 6. `DESIGN.md` rewrite

Replace the heritage system with the neon system actually in use:

- Base palette: warm black `#0a0a0a` / deep `#050505` / white `#ffffff` + grey scale.
- Accent spectrum: cyan `#00ffff`, pink `#ff00ff`/`#ff0080`, lime `#39ff14`, violet `#bf00ff`,
  orange `#ff4500`/`#ff5f1f`, plus gold `#ffd700` where used — documented as a **rotating,
  per-surface** system (explicitly overriding the old "one accent per screen" rule).
- Glow/shadow scale for neon; typography retained (Playfair display + Inter); motion tokens.
- **Reduced-motion contract:** colour is retained, motion is frozen — documented as a rule.
- Accessibility: contrast floors from §2 codified as tokens/guidance.

## Testing / Verification

- **Build:** `npm run build` on the mini completes; static export unaffected.
- **Contrast:** every changed text/background pair verified ≥4.5:1 (spot-check with a ratio
  calc); no informational text below `white/55`.
- **Keyboard:** Tab through nav + footer — every link shows a visible focus state; cookie
  dialog is reachable and its buttons focusable.
- **Reduced-motion:** with `prefers-reduced-motion: reduce`, hero rain + rotation stop, colour
  is retained, no layout shift.
- **Visual regression:** homepage, nav (scrolled + top), footer, and mobile menu screenshotted
  before/after at 360 / 768 / 1440 widths.
- **Lint:** `npm run lint` clean.

## Risks

- **Tailwind v4 custom classes.** `h-18`/`h-22` and `text-label-md` may be project-defined;
  verify they resolve before relying on them for the height-consistency fix.
- **Server-component conversion of `Footer`.** Confirm no remaining client-only APIs after
  removing imperative handlers (currently only `new Date().getFullYear()`, which is fine on the
  server).
- **`color-mix` support.** Acceptable for the target modern-browser audience; provide a solid
  colour fallback for the focus outline.

## Rollout

Single feature branch off `main`; one reviewed PR. No migration or data changes. Rebuild the
static `dist/` as part of the change per existing repo convention.
