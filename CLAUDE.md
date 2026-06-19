# Papa Pasta — Main Website

Consumer-facing brand site for Papa Pasta (South Africa's first nationwide fresh-pasta QSR franchise). Static-exported marketing site, deployed to papapasta.co.za.

@AGENTS.md

## Stack
- Next.js 16.2.4 + React 19 (App Router, static export)
- Tailwind CSS v4
- Fonts: Playfair Display (serif) + Inter (sans) — Google Fonts
- `lucide-react` icons — **verify against installed version** before importing; pinned `^1.16.0` is unusual

## Design tokens
| Token | Value |
|---|---|
| Navy | `#1a2b4a` |
| Gold | `#d4af37` |
| Cream | `#faf7f0` |
| Serif | Playfair Display |
| Sans | Inter |

Full design system in `DESIGN.md`. Product context in `PRD.md`.

## Build / Run
- `npm run dev` — dev server (port 3000)
- `npm run build` — static export → `dist/`
- `npm run lint` — ESLint

## Gotchas
- **`output: 'export'`** in `next.config.ts` — no server actions, no ISR, no default `next/image` loader (use `unoptimized` or self-host). `next-pwa`-style runtime workers won't work.
- **Assets** live in `github.com/targetpraks/papa-pasta-assets` — do not commit binary images.
- Next.js 16 has breaking changes from training data — read `node_modules/next/dist/docs/` before writing framework code (see `AGENTS.md`).

## Routes
App Router with route groups under `src/app/`: `artisanal/`, `blog/`, `bowls/`, `careers/`, `components/`, `contact/`, `events/`, `franchise/`, `gallery/`, `legal/`, `level-up/`, `lib/`, `locations/`, `menu/`, `merch/`, `order/`, `story/`. See `README.md` for the consumer-facing route list.
