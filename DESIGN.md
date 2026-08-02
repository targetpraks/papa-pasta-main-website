---
version: v2
name: Papa Pasta
description: |
  The design system for Papa Pasta — South Africa's first nationwide fresh-pasta
  QSR brand. A black-and-white base that pops and shifts with colour: five-plus
  neon accents rotate across the interface as a deliberate brand signature. This
  is the "Living Crest" energy expressed digitally — high-craft food, cyber-bright
  presentation. This document is canonical; it supersedes the earlier
  heritage gold/cream system.

colors:
  # ── Base: warm black + white + grey scale ───────────────────────────
  black:           "#0a0a0a"   # brand black (never pure #000)
  black-deep:      "#050505"   # deepest hero base
  black-elevated:  "#141414"
  black-light:     "#1a1a1a"   # cards / elevated dark surfaces
  grey-60:         "#333333"
  grey-40:         "#666666"
  grey-30:         "#888888"
  grey-20:         "#b3b3b3"
  grey-10:         "#e6e6e6"
  grey-05:         "#f2f2f2"
  white:           "#ffffff"

  # ── Neon accent spectrum (rotating, per-surface) ────────────────────
  neon-cyan:       "#00ffff"
  neon-pink:       "#ff00ff"
  neon-hot-pink:   "#ff0080"
  neon-lime:       "#39ff14"
  neon-orange:     "#ff4500"
  neon-orange-2:   "#ff5f1f"   # "appetite orange" (menu)
  neon-violet:     "#bf00ff"
  neon-blue:       "#0080ff"   # electric blue (locations)
  neon-gold:       "#ffd700"   # loyalty
  neon-yellow:     "#ffff00"
  neon-silver:     "#f8fafc"

  # ── Semantic ────────────────────────────────────────────────────────
  error:           "#b8422e"
  success:         "#2d6a4f"
  warning:         "#d4a017"
  info:            "#3a6ea5"

  # ── Surfaces / on-colour ────────────────────────────────────────────
  surface-dark:        "#050505"
  surface-elevated-dark: "#1a1a1a"
  on-dark:             "#ffffff"

typography:
  display:  { fontFamily: "Playfair Display", weight: 700, tracking: "-0.02em" }
  heading:  { fontFamily: "Playfair Display", weight: "600–700" }
  body:     { fontFamily: "Inter", weight: "400–600", lineHeight: 1.6 }
  label-lg: { fontFamily: "Inter", fontSize: 12px, weight: 600, tracking: "0.2em",  transform: uppercase }
  label-md: { fontFamily: "Inter", fontSize: 11px, weight: 500, tracking: "0.15em", transform: uppercase }
  label-sm: { fontFamily: "Inter", fontSize: 10px, weight: 500, tracking: "0.12em", transform: uppercase }
  label-xs: { fontFamily: "Inter", fontSize: 9px,  weight: 500, tracking: "0.1em",  transform: uppercase }

rounded: { sm: 4px, md: 8px, lg: 12px, xl: 16px, 2xl: 24px, full: 9999px }

zIndex:
  content: 10
  elevated: 20
  nav: 50
  progress: 60
  toast-cookie: 80
---

# Papa Pasta Design System (Neon / V2)

## Core Principle

**A black-and-white base that pops and shifts with colour.** Papa Pasta's digital
identity is built on warm black (`#0a0a0a`) and white, over which a spectrum of
neon accents rotates — per section, per navigation item, and over *time* (the
homepage CTAs cycle their colour continuously). Colour-play is a deliberate brand
signature, not decoration. The earlier heritage system (single gold accent, cream
daylight sections, "one accent per screen") is retired; **multiple, shifting
accents are the point.**

Think: a high-craft pasta kitchen shot under neon — the food is real and premium,
the presentation is cyber-bright and alive.

## Colour

### Base
- **Black `#0a0a0a`** — the dominant surface. Warm, never pure `#000000`; photographs
  better and is kinder on OLED.
- **Deep `#050505`** — hero and deepest sections.
- **Elevated `#141414` / Card `#1a1a1a`** — raised dark surfaces, cards, nav on scroll.
- **White `#ffffff`** — primary text and light-section surfaces.
- **Grey scale `#333`→`#f2f2f2`** — borders, dividers, muted UI. Note the contrast
  floor below before using grey (or white-at-opacity) for text.

### Neon accent spectrum (rotating)
Cyan `#00ffff` · Pink `#ff00ff` · Hot-pink `#ff0080` · Lime `#39ff14` ·
Orange `#ff4500` / `#ff5f1f` · Violet `#bf00ff` · Electric-blue `#0080ff` ·
Gold `#ffd700` · Yellow `#ffff00` · Silver `#f8fafc`.

Accents are applied as **glow** (text-shadow / box-shadow), **borders**, and **fills**,
never as flat washes. Multiple accents may appear on one screen — that is the
signature, not a violation.

### Per-surface accent conventions
Navigation and key journeys carry a stable per-item accent so the palette reads as
a system rather than noise:

| Surface | Accent |
|---|---|
| Home | cyan `#00ffff` |
| Menu | orange `#ff5f1f` |
| Locations | electric-blue `#0080ff` |
| Merch | violet `#bf00ff` |
| Loyalty | gold `#ffd700` |
| Drops | lime `#39ff14` |
| Story | silver `#f8fafc` |
| Franchise | hot-pink `#ff0080` |

### Semantic
Error `#b8422e` · Success `#2d6a4f` · Warning `#d4a017` · Info `#3a6ea5` — reserved
for status/feedback, kept muted so they never compete with the neon accents.

## Typography

Retained from the brand foundation — the serif/sans tension carries craft + clarity.

- **Playfair Display** — all display and headings. High stroke contrast echoes the
  crest's fine lines. Never below 22px.
- **Inter** — all body, UI, and labels. Never used for headlines above 28px.
- **Labels** (`label-lg`→`label-xs`) — uppercase, tracked Inter. The "restaurant-menu"
  rhythm: section identifiers, nav items, badges, CTAs. Use a label token rather than
  manually uppercasing body text.

## Glow & Elevation

Depth on the dark base comes from **neon glow and tonal layering**, not drop shadows.

- **Text glow (hover / focus):**
  `text-shadow: 0 0 8px {accent}80, 0 0 20px {accent}40`.
- **Element glow:** stacked accent box-shadows, e.g.
  `0 0 12px {accent}60` (rest) → `0 0 20px {accent}80, 0 0 40px {accent}40` (hover),
  and inset variants `inset 0 0 34px {accent}18` for card interiors.
- **Chromatic aberration** — the hero crest splits into cyan/pink via layered
  `drop-shadow` filters on a single image (an LCP-friendly replacement for stacked
  coloured copies).

## Motion & the Reduced-Motion Contract

Motion is lush by default: glitch logos, matrix "code rain," continuously rotating
CTA colours, staggered reveals.

**Under `prefers-reduced-motion: reduce`, motion freezes but COLOUR IS RETAINED.**
This is a hard rule, implemented two ways:
1. **CSS** — a global block neutralises animations/transitions and hides the
   decorative rain/tears (`globals.css`), leaving a static, still-colourful frame.
2. **JS** — timers that drive colour (e.g. the hero CTA rotation `setInterval`) check
   `matchMedia('(prefers-reduced-motion: reduce)')` and, when set, **freeze on a
   pre-picked vivid colour set** instead of cycling. Never remove the colour to
   satisfy reduced-motion.

## Accessibility

- **Contrast floor:** informational text must reach **≥ 4.5:1** on the black base.
  Never use text below **`white/55`** (≈`#8c8c8c`, ~5:1) for anything that conveys
  meaning. `white/40` and `white/30` are contrast failures — decorative only, if at all.
- **Keyboard & touch parity:** interactive colour/glow states are driven by CSS
  (`:hover` **and** `:focus-visible`) via the `.pp-neon-link` utility, which takes its
  colour from an inline `--accent` custom property. Never drive interaction state from
  `onMouseEnter`/`onMouseLeave` JS — that strands keyboard and touch users.
- **Focus visibility:** every interactive element shows a visible `:focus-visible`
  outline in its accent (2px, 2–3px offset).
- **Semantics:** the cookie banner is a `role="dialog"`; icon-only controls carry
  `aria-label`; the crest logo is decorative (`aria-hidden`) with an `sr-only` brand name.

## The `.pp-neon-link` Utility

The single source of truth for neon link/interaction states:

```css
.pp-neon-link { --accent: #00ffff; color: rgb(255 255 255 / 0.65); }
.pp-neon-link:hover,
.pp-neon-link:focus-visible {
  color: var(--accent);
  text-shadow: 0 0 8px color-mix(in srgb, var(--accent) 50%, transparent),
               0 0 20px color-mix(in srgb, var(--accent) 25%, transparent);
}
.pp-neon-link:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
```

Consumers set the colour per instance: `style={{ "--accent": "#39ff14" }}`.

## Z-Index Scale

Content `10` · Elevated `20` · Nav `50` · Scroll progress `60` · Toast/Cookie `80`.
The cookie dialog sits on the toast tier so it clears the fixed nav.

## Shapes & Spacing

- **Radius:** sm `4px` (buttons/badges) · md `8px` (cards/inputs) · lg `12px` ·
  xl `16px` · 2xl `24px` · full `9999px` (pills/avatars only — never on rectangles).
- **Spacing:** 8px base scale (`4,8,12,16,24,32,48,64,96`), section padding
  `80px` (mobile) → `120px` (desktop). Containers cap at `1280px` (standard) /
  `1440px` (wide) / `768px` (long-form reading).

## Do's and Don'ts

- **Do** let multiple neon accents share a screen — it is the signature.
- **Do** express colour on a black/white base; reach for glow, not flat fills.
- **Do** keep colour under reduced-motion; only motion is removed.
- **Do** hold informational text at `white/55`+ and give every control a visible focus ring.
- **Don't** use pure black `#000000` — the brand black is `#0a0a0a`.
- **Don't** drive hover/interaction from JS mouse handlers — use `.pp-neon-link`.
- **Don't** use Playfair below 22px, or Inter for headings above 28px.
- **Don't** put neon accents on light sections as low-contrast text — verify the floor.
