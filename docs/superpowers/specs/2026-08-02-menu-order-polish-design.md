# Design + Plan — Pass 2: Menu + Order Flow Polish

- **Date:** 2026-08-02
- **Status:** Approved ("proceed with recommendations")
- **Branch:** `polish/menu-order` (stacked on `polish/homepage-global` for `.pp-neon-link`)
- **Author:** Claude

## Context

The menu (`/menu`) and order (`/order`) pages are the revenue path. Grounded review found:
- **Menu:** structure is sound and filter chips are legible, but group labels (`SAUCES`,
  `PROTEIN`, …) sit at `white/35`, the filter description at `white/45`, the results count
  at `white/35`, category badges at `white/45`, and dish facet tags at `white/40` — all
  below the AA floor.
- **Order:** the flow works but is **flat monochrome white-on-black — off-brand** versus the
  neon rest of the site, and carries `white/40` text throughout, **unlabeled form inputs**
  (placeholder-only), **icon-only quantity buttons with no accessible name**, and inputs with
  `outline-none` (no visible keyboard focus).

## Goals

1. Bring all informational text on both pages to WCAG AA (≥ 4.5:1; never below `white/55`).
2. Make the order flow keyboard- and screen-reader-usable: labelled inputs, named icon
   buttons, visible `:focus-visible` rings on every control.
3. Tie the order flow into the neon brand with a restrained accent (Locations = electric-blue
   `#0080ff`) — legibility first, flash second; the flow must stay clean and usable.

## Non-Goals (YAGNI)

- No backend / real payments (the flow is intentionally pay-at-pickup, static).
- No menu data-model or filter-logic changes; no re-layout of either page.
- No new dependencies.

## Global Constraints

- Static export (`output: 'export'`); build with `npm run build` locally; `dist/` is the
  deployed artifact and must be regenerated + committed (force-add: `git add -f -A -- dist`).
- No informational text below `white/55` on `#0a0a0a`.
- Reuse `.pp-neon-link` and focus-ring conventions from Pass 1 where they fit.
- `npm run lint` clean; `npm run build` succeeds before commit.

## Tasks

### Task 1 — Menu contrast + chip focus
**File:** `src/app/menu/page.tsx`, `src/app/globals.css`
- `page.tsx` contrast bumps: filter description `white/45`→`white/65`; disabled clear button
  `white/25`→`white/40`; **group labels `white/35`→`white/65`**; results count `white/35`→
  `white/65`; category badge `white/45`→`white/65`; dish description `white/52`→`white/70`;
  dish facet tags `white/40`→`white/60`; empty-state body `white/50`→`white/65`; footnote
  `white/52`→`white/65`.
- `globals.css`: add `.menu-filter-chip:focus-visible` with a visible orange outline
  (`outline: 2px solid rgb(255,184,28); outline-offset: 2px;`) for keyboard parity.
- Verify: lint + build; screenshot `/menu`; Tab to a chip shows a focus ring.

### Task 2 — Order flow contrast + accessibility
**File:** `src/app/order/page.tsx`
- Contrast: every informational `text-white/40` → `text-white/65` (intro, location address,
  location label, order-summary label, confirmation lines); category header `white/40`→
  `white/70`; item description `white/40`→`white/65`; dietary tag `white/50`→`white/70`;
  inactive filter/location "Change" `white/40`→`white/60`.
- Inputs (name/phone/time): add associated `aria-label`; `phone` → `type="tel"
  inputMode="tel"`; replace `outline-none` with a visible focus ring
  (`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0080ff]`);
  keep the `focus:border-white`.
- Icon-only quantity buttons: `aria-label` "Decrease quantity" / "Increase quantity" /
  `Add {item.name}`; add `focus-visible` rings.
- Location buttons, dietary filter chips, Change/Back/Checkout/Place-Order: add
  `focus-visible` rings; dietary chips get `aria-pressed`.
- Verify: lint + build; keyboard-tab the whole flow (location → items → checkout → confirm);
  confirm inputs announce labels and icon buttons have names.

### Task 3 — Order flow neon brand tie-in (electric-blue)
**File:** `src/app/order/page.tsx`
- Active states use the Locations accent `#0080ff`: active dietary/location selection border +
  subtle glow; primary CTAs (Checkout, Place Order) keep the high-contrast white fill but gain
  a neon glow `shadow-[0_0_24px_rgba(0,128,255,0.35)]`; confirmation checkmark circle →
  success-green glow. Keep it restrained — no motion added, legibility preserved.
- Verify: lint + build; screenshot each step (menu / checkout / confirmed) at 375 + 1024.

### Task 4 — Build, regenerate dist, PR
- `npm run lint && npm run build`; regenerate `dist/` (`git add -f -A -- dist`); commit; push;
  open PR (base `polish/homepage-global`, stacked; auto-retargets to `main` after Pass 1 merges).

## Verification

- Contrast: no informational text below `white/55`; spot-check changed pairs ≥ 4.5:1.
- Keyboard: every control on both pages reachable with a visible focus ring; order inputs
  labelled; icon buttons named.
- Build: `npm run build` succeeds, 41 pages, `dist/` committed.
- Visual: `/menu` and all three `/order` steps screenshotted before/after.
