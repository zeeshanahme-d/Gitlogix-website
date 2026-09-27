# Gitlogix website

The marketing site for [Gitlogix](https://www.gitlogix.com), a product engineering studio in Islamabad that builds browser extensions, web platforms, mobile apps and desktop software.

It has three pages: **Home**, **About** and **Contact** (a project enquiry form), plus a custom 404 page, a generated social share image, a sitemap and robots.txt.

## Tech stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router, React 19, React Compiler) and TypeScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com). Design tokens live in `src/app/globals.css`.
- **Fonts:** Clash Display and Satoshi from [Fontshare](https://www.fontshare.com), self-hosted with `next/font/local`
- **Icons:** [Phosphor Icons](https://phosphoricons.com) for the interface, and [Simple Icons](https://simpleicons.org) for technology and platform logos
- **Contact form:** a Next.js Server Action that validates each enquiry. Sending is not wired up yet (see below).

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Contact form

The form validates every field on the server and shows a success message, but **it does not send the enquiry anywhere yet**. Submitted messages are dropped. Add delivery (email or a webhook) in `src/app/contact/actions.ts` at the marked line before launch.

## Project structure

```text
src/
├── app/                  Routes: home, /about, /contact, 404, OG image, sitemap, robots
│   ├── globals.css       Design tokens (colours, type scale, spacing, radius)
│   └── contact/          Contact page, form and the server action that sends it
├── components/
│   ├── home/             Home page sections (hero, clients, services, work, ...)
│   ├── layout/           Header, mobile menu and footer
│   └── ui/               Shared pieces: buttons, container, headings, brand icons
├── content/
│   └── site.ts           All copy and data: services, projects, clients, team, FAQs ...
└── assets/               Fonts, brand mark, client logos and the office map
docs/
└── design-system.md      Colours, typography, layout and component rules
```

## Editing content

Almost all text and data lives in **`src/content/site.ts`**, so most updates don't touch any components. Two markers flag what still needs attention:

- **`PLACEHOLDER`**: sample content invented for the design. Replace it with real data before launch.
- **`TODO(content)`**: drafted from the old site or public information. Confirm it.

Common updates:

- **Add a project screenshot:** import a 16:10 image and set it as the project's `image`. It replaces the generated cover.
- **Add a team photo:** import a 4:5 portrait and set it as the member's `image`. It replaces the grey placeholder tile.
- **Add a client logo:** add the original logo to `src/assets/clients/` and a single-colour white version with the same dimensions to `src/assets/clients-mono/`, then add both to `clients`.
  - The logo wall shows the single-colour version in grey and fades in the original on hover.
  - The wall is laid out for 13 logos. If the count changes, check that the last row still fills (see the note in `src/components/home/clients.tsx`).

## Before launch

- [ ] Make the contact form send enquiries (email or webhook), then send a test enquiry.
- [ ] Replace the sample testimonials. Only publish real quotes that clients have approved.
- [ ] Replace the four sample projects with real case studies, and add screenshots.
- [ ] Add the real team (names, roles, photos).
- [ ] Review the technology list and the two sample industries.
- [ ] Confirm every `TODO(content)` item.

## Design

The site uses a light, neutral design with the brand orange as its only accent, and a dark footer. The rules for colours, typography, spacing, components and motion are in [docs/design-system.md](docs/design-system.md). Read them before adding new sections, so new work stays consistent.

## Deployment

The site is fully static apart from the contact form's server action, so it runs on any Next.js host. The simplest option is [Vercel](https://vercel.com/new): import this repository and deploy.

## Credits and licences

- **Clash Display and Satoshi:** by Indian Type Foundry, used under the ITF Free Font License
- **Map image:** built from © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors data (ODbL). The on-page credit must stay.
- **Phosphor Icons:** MIT licence
- **Simple Icons:** CC0 licence. The brand logos remain trademarks of their owners.
- **Client logos:** belong to their respective companies
