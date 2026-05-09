---
version: alpha
name: Papa Pasta
description: |
  The design system for Papa Pasta — a South African fresh-pasta QSR brand.
  Rooted in a premium black-and-gold heritage aesthetic with a modern,
  playful Living Crest identity system. Every store gets its own colour
  crest, but the brand foundation is always black, gold, and cream.

colors:
  primary: "#0a0a0a"
  primary-90: "#141414"
  primary-80: "#1a1a1a"
  primary-70: "#262626"
  primary-60: "#333333"
  primary-50: "#444444"
  primary-40: "#666666"
  primary-30: "#888888"
  primary-20: "#b3b3b3"
  primary-10: "#e6e6e6"
  primary-05: "#f2f2f2"

  secondary: "#d4af37"
  secondary-light: "#f0d878"
  secondary-dark: "#b8982e"
  secondary-50: "#e8d491"
  secondary-20: "#f7efcf"

  tertiary: "#faf7f0"
  tertiary-dark: "#f0ebe0"
  tertiary-90: "#f5f0e6"
  tertiary-80: "#ede7db"

  neutral: "#ffffff"
  neutral-90: "#f7f7f7"
  neutral-80: "#f0f0f0"
  neutral-70: "#e6e6e6"

  surface: "#faf7f0"
  surface-dark: "#050505"
  surface-elevated: "#ffffff"
  surface-elevated-dark: "#1a1a1a"

  on-primary: "#ffffff"
  on-secondary: "#0a0a0a"
  on-tertiary: "#0a0a0a"
  on-surface: "#0a0a0a"
  on-surface-dark: "#faf7f0"

  error: "#b8422e"
  error-light: "#e07a5f"
  error-dark: "#8a3122"

  success: "#2d6a4f"
  success-light: "#52b788"
  success-dark: "#1b4332"

  warning: "#d4a017"
  warning-light: "#e6c35c"

  info: "#3a6ea5"
  info-light: "#6b9bd2"

typography:
  headline-display:
    fontFamily: "Playfair Display"
    fontSize: 72px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: "Playfair Display"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  headline-md:
    fontFamily: "Playfair Display"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: "Playfair Display"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.01em
  headline-xs:
    fontFamily: "Playfair Display"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.4
  body-lg:
    fontFamily: "Inter"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0em
  body-md:
    fontFamily: "Inter"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0em
  body-sm:
    fontFamily: "Inter"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0em
  body-xs:
    fontFamily: "Inter"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
  label-lg:
    fontFamily: "Inter"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.2em
    fontFeature: "'smcp', 'c2sc'"
  label-md:
    fontFamily: "Inter"
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.15em
  label-sm:
    fontFamily: "Inter"
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.12em
  label-xs:
    fontFamily: "Inter"
    fontSize: 9px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.1em

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  2xl: 24px
  full: 9999px

spacing:
  base: 16px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
  section-sm: 80px
  section-md: 120px
  section-lg: 160px
  gutter: 24px
  container-max: 1280px
  container-narrow: 768px
  container-wide: 1440px

components:
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: 14px
  button-primary-hover:
    backgroundColor: "{colors.secondary-light}"
    textColor: "{colors.on-secondary}"
  button-primary-active:
    backgroundColor: "{colors.secondary-dark}"
    textColor: "{colors.on-secondary}"
    transform: "scale(0.98)"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    rounded: "{rounded.md}"
    padding: 14px
    border: "1px solid rgba(212,175,55,0.5)"
  button-secondary-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    border: "1px solid transparent"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary-60}"
    rounded: "{rounded.md}"
    padding: 14px
  button-ghost-hover:
    backgroundColor: "{colors.primary-05}"
    textColor: "{colors.primary}"
  card:
    backgroundColor: "{colors.surface-elevated}"
    rounded: "{rounded.2xl}"
    padding: 24px
    shadow: "0 1px 3px rgba(0,0,0,0.05)"
  card-hover:
    shadow: "0 20px 40px rgba(0,0,0,0.12)"
    border: "1px solid rgba(212,175,55,0.15)"
  card-dark:
    backgroundColor: "{colors.surface-elevated-dark}"
    border: "1px solid rgba(212,175,55,0.10)"
  badge:
    backgroundColor: "{colors.secondary-20}"
    textColor: "{colors.secondary-dark}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: "6px 12px"
  badge-success:
    backgroundColor: "rgba(45,106,79,0.12)"
    textColor: "{colors.success}"
  badge-warning:
    backgroundColor: "rgba(212,160,23,0.12)"
    textColor: "{colors.warning}"
  input:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 16px
    border: "1px solid {colors.primary-10}"
  input-focus:
    border: "1px solid {colors.secondary}"
    shadow: "0 0 0 3px rgba(212,175,55,0.20)"
  input-error:
    border: "1px solid {colors.error}"
    shadow: "0 0 0 3px rgba(184,66,46,0.15)"
  nav-link:
    typography: "{typography.label-md}"
    textColor: "{colors.on-surface-dark}"
  nav-link-hover:
    textColor: "{colors.secondary}"
    underline: "2px solid {colors.secondary}"
  nav-link-active:
    textColor: "{colors.secondary}"
    underline: "2px solid {colors.secondary}"

---

# Papa Pasta Design System

## Overview

Papa Pasta is a fresh, handmade pasta QSR (Quick Service Restaurant) brand born in Cape Town, South Africa, with ambitions to scale across all nine provinces. The design system must balance two seemingly contradictory ideas: **heritage gravitas** and **playful modernism**.

The brand's visual identity is anchored by the Papa Pasta Crest — a shield-style badge featuring crossed fork and spoon, the tagline "Fresh · Seasonal · Quality", and an ornate classical frame. This crest signals tradition, craftsmanship, and premium quality. But the brand also operates the "Living Crest" system, where each franchisee gets a custom colour identity. This duality — classic structure with vibrant personal expression — is the core of the design philosophy.

**Brand Personality:**
- Warm, approachable, but never cheap
- Proudly South African, with global-quality ambition
- Craft-driven: "Fresh · Seasonal · Quality" is not a tagline, it's a promise
- Youthful energy tempered by the weight of a real kitchen

**Target Audience:**
- Primary: Young professionals and families in urban South Africa seeking affordable, high-quality food
- Secondary: Prospective franchisees evaluating a business opportunity
- Tertiary: Food media, influencers, and event attendees

**Emotional Response:**
The UI should feel like walking into a well-designed, modern pasta bar: clean, confident, appetising. Dark sections evoke the intimacy of evening dining. Gold accents trigger premium associations without pretension. Cream sections feel like daylight, fresh ingredients, and open kitchens.

## Colors

The palette is built on three foundational colours — ink, gold, and cream — with an extended scale for nuanced UI expression.

### Primary: Ink
The primary palette is a deep, warm black that avoids the coldness of pure `#000000`. It carries just enough warmth to feel organic rather than mechanical.

- **Primary (#0a0a0a):** The brand black. Used for hero backgrounds, deep sections, primary text on light surfaces, and the dominant visual weight of the crest logo. This is not pure black — it has a subtle warmth that photographs better and feels less harsh on OLED screens.
- **Primary-80 (#1a1a1a):** Elevated dark surface. Cards, nav backgrounds, footer base.
- **Primary-60 (#333333):** Charcoal. Body text on light surfaces.
- **Primary-30 (#888888):** Muted text, disabled states, captions, metadata.
- **Primary-10 (#e6e6e6):** Borders, dividers, very subtle backgrounds.

### Secondary: Crest Gold
Gold is the sole accent colour and the only colour used for interaction. This restraint ensures maximum impact when gold appears — the eye is trained to follow it.

- **Secondary (#d4af37):** The brand gold. All primary CTAs, active states, key headings emphasis, the scroll progress bar, and the gradient text effect. Named "Crest Gold" to tie it to the shield logo.
- **Secondary-Light (#f0d878):** Hover states, lighter gold accents, shimmer animation end-stops. Provides a palpable glow.
- **Secondary-Dark (#b8982e):** Badges, tags, and secondary gold contexts where the main gold would be too bright against dark backgrounds.

### Tertiary: Kitchen Cream
The tertiary palette is a warm off-white with a subtle yellow undertone, evoking fresh dough, aged parmesan, and flour.

- **Tertiary (#faf7f0):** The primary page background. Softer and more appetising than pure white.
- **Tertiary-Dark (#f0ebe0):** Alternate section background, slightly deeper for section separation.
- **Tertiary-80 (#ede7db):** Card backgrounds on cream sections when white would be too stark.

### Semantic Colours
Functional colours for feedback and status.

- **Error (#b8422e):** A rich terracotta red for form errors, validation messages, and "coming soon" / unavailable indicators. Chosen for warmth over the typical cold red.
- **Success (#2d6a4f):** A deep sage green for "open now" badges, form success states, and positive confirmation.
- **Warning (#d4a017):** A warm amber for alerts, notices, and medium-priority status.
- **Info (#3a6ea5):** A muted steel blue for informational callouts and links in editorial contexts.

### Surface Model
The surface model defines how layers stack:

- **Surface** (#faf7f0): Base layer for light sections.
- **Surface Dark** (#050505): Deepest dark layer for hero sections.
- **Surface Elevated** (#ffffff): Cards, modals, popovers on light sections.
- **Surface Elevated Dark** (#1a1a1a): Cards, interactive panels on dark sections.

### On-Colour Pairings
Text and icon colours guaranteed to pass WCAG AA on their corresponding surfaces:

- **On Primary** (#ffffff): White text on black backgrounds. Contrast ratio 19.5:1.
- **On Secondary** (#0a0a0a): Black text on gold backgrounds. Contrast ratio 7.8:1.
- **On Tertiary** (#0a0a0a): Black text on cream backgrounds. Contrast ratio 15.2:1.
- **On Surface** (#0a0a0a): Black text on white surfaces. Contrast ratio 19.5:1.
- **On Surface Dark** (#faf7f0): Cream text on dark surfaces. Contrast ratio 15.2:1.

## Typography

The typography system pairs a **high-contrast serif/sans hierarchy**. This is a deliberate tension: the serif (Playfair Display) carries the heritage, authority, and emotional weight of the brand, while the sans-serif (Inter) handles all functional, informational, and UI text with quiet efficiency.

### Headlines: Playfair Display
Used for all headings, pull quotes, and any text that needs to feel "written" rather than "displayed". The high stroke contrast of Playfair echoes the fine lines of the crest logo.

- **Headline Display** (72px, 700, -0.02em): Hero headlines only. Maximum 2 lines.
- **Headline LG** (48px, 700, -0.02em): Page titles, major section headings.
- **Headline MD** (36px, 600, -0.01em): Sub-section headings, feature titles.
- **Headline SM** (28px, 600): Card titles, tertiary headings.
- **Headline XS** (22px, 600): Small headings, footer headings, narrow-column titles.

### Body: Inter
Inter is used for every piece of running text, UI label, form element, and navigation item. Its neutrality ensures the serif headlines dominate without competition.

- **Body LG** (20px, 400): Hero descriptions, introductory paragraphs, pull quotes.
- **Body MD** (16px, 400): Standard body text, form inputs, descriptions.
- **Body SM** (14px, 400): Captions, metadata, card excerpts, secondary information.
- **Body XS** (12px, 400): Legal text, timestamps, fine print.

### Labels: Inter (Uppercase, Tracked)
Labels are the most distinctive typographic element. All labels, badges, nav items, category filters, and metadata use uppercase Inter with generous letter-spacing. This creates a "restaurant menu" typographic rhythm.

- **Label LG** (12px, 600, 0.2em): Section labels ("THE MENU", "OUR STORY"), CTA buttons, major badges.
- **Label MD** (11px, 500, 0.15em): Nav links, card tags, minor badges.
- **Label SM** (10px, 500, 0.12em): Metadata, timestamps, fine badges.
- **Label XS** (9px, 500, 0.1em): Tiny labels, table headers.

### Type Pairing Rules
- Never use Playfair Display below 22px — it becomes illegible at small sizes.
- Never use Inter for headlines above 28px — it lacks the character weight.
- All uppercase text must use a label token (never manually uppercase body text).
- Line length for body text should not exceed 65 characters. Use `max-w-prose` (65ch) for long-form content.

## Layout

### Grid & Container
The layout follows a **Fluid-Max Grid**: fluid on mobile, capped at defined max-widths on larger screens.

- **Container Max** (1280px): Default max-width for all page content. Centers with auto margins.
- **Container Narrow** (768px): Blog posts, legal text, forms, and any long-form reading.
- **Container Wide** (1440px): Hero sections, full-bleed imagery, gallery grids.

All containers use **24px horizontal gutters** on desktop, 16px on tablet, and 16px on mobile.

### Spacing Scale
A strict 8px-based spacing scale with a 4px sub-step for micro-adjustments.

| Token | Value | Common Usage |
|-------|-------|------------|
| xs | 4px | Icon gaps, micro-padding, 1px borders |
| sm | 8px | Tight component internals, small gaps |
| md | 16px | Card padding, form field gaps, standard gutters |
| lg | 24px | Section internal padding, card margins |
| xl | 32px | Component separation within sections |
| 2xl | 48px | Between major blocks |
| 3xl | 64px | Between unrelated sections |
| 4xl | 96px | Major page breaks |
| section-sm | 80px | Standard section vertical padding (mobile) |
| section-md | 120px | Standard section vertical padding (desktop) |
| section-lg | 160px | Hero sections, premium spacing moments |

### Responsive Breakpoints
- **Mobile First**: Base styles for < 640px.
- **sm** (640px): Minor layout shifts.
- **md** (768px): 2-column grids appear, nav switches to desktop.
- **lg** (1024px): 3-column grids, major layout changes.
- **xl** (1280px): Full desktop expression, max-widths cap.

### Z-Index Scale
| Layer | Z-Index | Usage |
|-------|---------|-------|
| Background | 0 | Base images, decorative elements |
| Content | 10 | Standard page content |
| Elevated | 20 | Cards, floating elements |
| Navigation | 50 | Fixed header, nav overlay |
| Progress Bar | 60 | Scroll progress indicator |
| Modal/Overlay | 70 | Mobile menu, modals |
| Toast/Notification | 80 | Alerts, notifications |

## Elevation & Depth

Depth is achieved through **Tonal Contrast and Shadows**, never through heavy gradients or drop-shadows alone.

### Shadow System
The shadow system is deliberately restrained. Papa Pasta surfaces are flat and confident.

- **Shadow SM** (cards at rest): `0 1px 3px rgba(0,0,0,0.05)` — barely perceptible, just enough to lift a card from its surface.
- **Shadow MD** (hovered cards): `0 4px 12px rgba(0,0,0,0.08)` — clear lift on interaction.
- **Shadow LG** (modals, overlays): `0 20px 40px rgba(0,0,0,0.12)` — dramatic separation for elevated panels.
- **Shadow Gold** (CTA focus): `0 0 24px rgba(212,175,55,0.5), 0 0 48px rgba(212,175,55,0.15)` — warm glow for interactive focus states.

### Dark Section Treatment
Dark sections (hero, footer, brand story) do not use gradients as backgrounds. Instead, they use:
1. A near-black base (`#0a0a0a` or `#050505`).
2. A subtle radial gold glow at key focal points (`radial-gradient(ellipse_at_center, rgba(212,175,55,0.08)_0%, transparent_70%)`).
3. Low-opacity image overlays (max 40% opacity) with a gradient scrim from bottom to ensure text legibility.

### Light Section Treatment
Light sections use tonal layering:
1. Base: `#faf7f0` (cream).
2. Elevated cards: `#ffffff` (pure white) for maximum contrast.
3. Alternate sections: `#f0ebe0` (tertiary-dark) for subtle section separation without heavy borders.

## Shapes

### Corner Radius
The shape language is **"Modern Heritage"** — rounded enough to feel contemporary, but restrained enough to respect the classical lines of the crest logo.

| Token | Value | Usage |
|-------|-------|-------|
| sm | 4px | Buttons, badges, small inputs |
| md | 8px | Standard cards, form fields, images |
| lg | 12px | Feature cards, larger images |
| xl | 16px | Modal panels, major cards |
| 2xl | 24px | Hero images, section containers |
| full | 9999px | Pills, avatars, circular elements |

### Shape Rules
- Never use `rounded-full` on rectangular elements (it looks like a pill, not a card).
- Images should always have a consistent radius within a section. Do not mix `rounded-md` and `rounded-2xl` images in the same grid.
- The crest logo is a complex shape. It should never be forced into a circular mask or rounded container. Display it at its natural aspect ratio with transparent background.

## Components

### Buttons
Buttons are the most critical interactive element. All buttons use the label-lg typography token (uppercase, tracked) for a menu-like authority.

**Primary Button:**
- Background: Crest Gold (#d4af37).
- Text: Ink black (#0a0a0a).
- Padding: 14px horizontal, 14px vertical.
- Radius: 8px (md).
- Hover: Light Gold (#f0d878) with a warm glow shadow.
- Active: Dark Gold (#b8982e) with a 98% scale transform.
- Focus: 3px gold ring with 20% opacity.

**Secondary Button:**
- Background: Transparent.
- Border: 1px solid rgba(212,175,55,0.5).
- Text: Crest Gold (#d4af37).
- Hover: Fills with Crest Gold, text turns black. The fill animates from left to right.

**Ghost Button:**
- Background: Transparent.
- Text: Charcoal (#333333).
- Hover: Very light grey background (#f2f2f2).
- Used for tertiary actions and text links.

### Cards
Cards are the primary content container. They must feel solid and appetising.

**Standard Card (Light):**
- Background: White (#ffffff).
- Radius: 24px (2xl).
- Shadow: 0 1px 3px rgba(0,0,0,0.05).
- Padding: 24px (lg).
- Border: 1px solid rgba(0,0,0,0.05).
- Hover: Shadow increases to LG, a subtle gold border appears (1px solid rgba(212,175,55,0.15)), image scales to 110%.

**Dark Card:**
- Background: #1a1a1a.
- Border: 1px solid rgba(212,175,55,0.10).
- Hover: Gold border intensifies to 25% opacity, shadow increases.

**Image Card:**
- Image aspect ratio must be consistent within a grid. Common ratios: 4/3 (dishes), 16/10 (blog/events), 1/1 (gallery).
- Images must have `object-fit: cover` and overflow hidden to enable hover zoom.
- No border radius on the image if it fills the entire card — the card's radius clips it.

### Badges
Badges are compact status indicators using the label-md token.

**Default Badge:**
- Background: Light gold (#f7efcf).
- Text: Dark gold (#b8982e).
- Radius: 4px (sm).
- Padding: 6px 12px.

**Success Badge (Open Now):**
- Background: rgba(45,106,79,0.12).
- Text: Sage green (#2d6a4f).

**Warning Badge (Coming Soon):**
- Background: rgba(212,160,23,0.12).
- Text: Amber (#d4a017).

**Error Badge (Unavailable):**
- Background: rgba(184,66,46,0.12).
- Text: Terracotta (#b8422e).

### Input Fields
Form inputs must feel precise and premium, like a reservation form at a quality restaurant.

**Standard Input:**
- Background: White (#ffffff).
- Border: 1px solid #e6e6e6 (primary-10).
- Radius: 8px (md).
- Padding: 16px.
- Text: 16px Inter.
- Placeholder: #888888 (primary-30).
- Focus: Border turns Crest Gold, 3px gold glow ring.

**Error Input:**
- Border: 1px solid #b8422e (error).
- Focus ring: 3px rgba(184,66,46,0.15).

**Textarea:**
- Same as input but min-height: 120px.

### Navigation Links
Nav links use the label-md token for consistency with the menu aesthetic.

- Default: Cream/70% opacity on dark backgrounds.
- Hover: Crest Gold with a 2px gold underline that expands from center.
- Active: Crest Gold with persistent 2px underline.
- Mobile: Full-screen overlay with staggered link reveal animation.

## Do's and Don'ts

- **Do** use Crest Gold for exactly one primary action per screen. If there are multiple actions, only the most important gets gold.
- **Do** maintain generous whitespace. The brand is confident, not cramped. Minimum 120px between major sections on desktop.
- **Do** use the crest logo at its natural aspect ratio. Never crop it into a circle or square mask.
- **Do** provide `prefers-reduced-motion` fallbacks for all Framer Motion animations. Respect the user's system preference.
- **Do** ensure all text on dark backgrounds uses On-Surface-Dark (#faf7f0) or On-Primary (#ffffff). Never use primary-30 (#888888) as the main body text on dark — it fails contrast.
- **Do** use uppercase labels for section identifiers ("THE MENU", "OUR STORY"). Never uppercase body text for readability.

- **Don't** use pure black (#000000). The brand black is #0a0a0a.
- **Don't** use more than one accent colour on a single screen. Gold is the only interaction colour.
- **Don't** use Playfair Display for body text or UI labels below 22px. It becomes illegible.
- **Don't** use `rounded-full` on cards or rectangular images. Pills are for buttons and badges only.
- **Don't** place the black-line crest logo directly on dark backgrounds without a white/light version.
- **Don't** animate scroll-jacking or parallax on mobile. It creates disorientation and performance issues.
- **Don't** use gradients as the primary background of a section. Gradients are reserved for text effects (gold gradient) and subtle radial glows only.
