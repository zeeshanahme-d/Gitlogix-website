# Gitlogix design system

Tokens live in `src/app/globals.css`. All copy and data live in `src/content/site.ts`. In that file, `PLACEHOLDER` marks sample content to replace, and `TODO(content)` marks drafts to confirm.

## Direction

The look is light, neutral and restrained, using white and zinc greys with the brand orange from the logo as the only accent.

- Hierarchy comes from type size, weight and spacing, not from colour or effects.
- There are no gradients, glows, blur, glassmorphism or cursor effects.
- Nothing moves constantly.

The one intentional exception is the footer. It keeps the earlier dark treatment, including its oversized fading wordmark.

## Colour

| Token | Value | Use |
|---|---|---|
| `bg` | `#FFFFFF` | Page background, cards |
| `surface` / `-2` / `-3` | `#FAFAFA` / `#F4F4F5` / `#E4E4E7` | Alternating section bands, tracks, placeholder fills |
| `line` / `line-strong` | `#E4E4E7` / `#D4D4D8` | Borders and dividers |
| `fg` / `fg-2` / `muted` | `#18181B` / `#52525B` / `#6B6B74` | Text: primary, body (7.7:1), meta (4.8:1 on `surface-2`) |
| `brand` | `#FF8C21` | Fills and marks only (bars, toggles, active nav underline). Never text on white (2.3:1). |
| `brand-ink` | `#B85300` | Orange text and icons on light backgrounds (4.9:1), plus the focus ring |
| `success` / `danger` | `#15803D` / `#DC2626` | Status and form errors |

- Primary buttons are `fg` on `bg` (near-black), not orange.
- Project covers use a flat 14% tint of the client's own colour, mixed with white. Never use purple accents.
- `.theme-dark` swaps every token to the dark palette. It wraps the footer in `layout.tsx`, so the footer markup never has to change.

## Typography

Two families only: Clash Display for headings and Satoshi for everything else. Both are self-hosted from `src/assets/fonts` (Fontshare, ITF Free Font License).

| Utility | Size (375px to 1440px) | Font |
|---|---|---|
| `type-hero` | 40 to 72px | Clash Display 600 |
| `type-h1` | 36 to 60px | Clash Display 600 |
| `type-h2` | 32 to 48px | Clash Display 600 |
| `type-h3` | 20 to 24px | Clash Display 600 |
| `type-lead` | 17 to 20px | Satoshi |
| body | 16px / 1.65 | Satoshi 400, 500, 700 |

Clash Display ships a narrow word space, so every display style adds `word-spacing: 0.08–0.1em`. Keep that spacing when adding new styles.

## Layout and shape

- **Container:** 1280px (`max-w-page`), with 16, 24 and 32px gutters. Content is left-aligned.
- **Section rhythm:** `section-y` gives 72px of vertical padding, and 96px from 1024px.
- **Section backgrounds:** alternate between `bg` and `surface`, each with a hairline `border-y`.
- **Radius:**
  - `rounded-control` (8px): buttons, inputs, tabs.
  - `rounded-card` (12px): cards and panels.
  - Pill shapes are only for badges (hero status, project category).
- **Grids:**
  - Grids of equal cells (client logos, industries, tech stack, facts) use hairline dividers (`gap-px` on a `bg-line` grid).
  - `TechStack` adds blank filler cells so the last row never shows a grey gap.
  - The client wall has 13 logos plus one "Your product next?" cell, so every row is full at 2, 3 and 5 columns. Recheck this if you add or remove clients.
- **Shadows:** `shadow-sm` only, and only for things that sit on top of something else (popups inside the service sketches, the map label).

## Motion

- **Hero and page headers:** `animate-rise` (300ms fade plus an 8px lift, staggered by `--delay`).
- **Hover:** colour and border changes at 150ms.
- **Hover colour reveals:** brand and client colours appear only on hover, and only on the mark itself.
  - Tech stack tiles and hero platform rows switch their icons to the official brand colour. `BrandIcon` exposes that colour as `--brand`, so the parent uses `group-hover/…:text-(--brand)`.
  - Client logos cross-fade from grey to the original colour logo over 200ms.
- **Form fields:** focus gives a darker grey border and a light grey ring, with no orange.
- **FAQ:** the plus icon turns 45° when an answer opens (200ms).
- **Reduced motion:** everything above is off under `prefers-reduced-motion`.

There are no scroll-triggered reveals, counters, marquees or looping animations. The site ships no animation library.

## Components

- **`ButtonLink` / `buttonStyles`:** `primary`, `secondary` and `ghost` variants, in `md` (40px) and `lg` (48px) sizes. Buttons carry no icons, except where the icon adds information (for example the map pin on "Open in Google Maps").
- **`SectionHeading`:** a left-aligned h2 plus an optional lead.
- **`BrandIcon`:** single-colour brand marks from Simple Icons (Windows comes from Phosphor). It inherits the current text colour.
- **Icons:** Phosphor, used only where they carry meaning: checks for included items, contact method icons, and the external-link arrow on project titles.

## Assets

- **`src/assets/clients/`:** original full-colour client logos from gitlogix.com, used on the project covers.
- **`src/assets/clients-mono/`:** single-colour versions of the same logos. The client wall turns them grey with `brightness-0` and opacity, which keeps 13 very different logos looking even. Regenerate them if you add a client, or replace them with official SVGs.
- **`src/assets/brand/`:** the G mark cropped from the stacked logo, plus a light version. `Logo` switches to the light version automatically inside `.theme-dark`.
- **`src/assets/office-map.png`:** static OpenStreetMap map centred on Al Anayat Mall, shown in greyscale. The "© OpenStreetMap contributors" credit under it is required by the ODbL licence.
- **Project covers:** add a 16:10 screenshot as a project's `image` to replace the generated cover.
- **Team photos:** add a 4:5 portrait as a member's `image` to replace the grey tile.
