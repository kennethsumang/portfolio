# Portfolio

Personal portfolio site for Kenneth Sumang, a Senior Software Engineer. It's a single-page site with sections for skills, work history and certificates, plus a downloadable resume.

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router) and [React 18](https://react.dev/)
- [Mantine 7](https://mantine.dev/) for UI components, with PostCSS (`postcss-preset-mantine`) and CSS Modules
- [Tabler Icons](https://tabler.io/icons) for icons
- [TypeScript](https://www.typescriptlang.org/)
- [Playwright](https://playwright.dev/) for end-to-end tests, with [axe-core](https://github.com/dequelabs/axe-core-npm) for accessibility checks
- [Wrangler](https://developers.cloudflare.com/workers/wrangler/) for Cloudflare deployment

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npx playwright test` | Run the end-to-end and accessibility tests |

The Playwright tests run against the app. Install the browsers once with `npx playwright install`.

## Project Structure

```
app/
├── _components/   Reusable components (credits dialog, skill cards, ...)
├── _constants/    Static data such as the certificates list
├── _layout/       App shell: header, navigation and footer
├── _sections/     Page sections (home, skills, history, certificates, ...)
├── layout.tsx     Root layout and metadata
└── page.tsx       Page composition
public/
├── download/      Resume PDF
└── logos/         Skill and brand logos
tests/             Playwright specs (a11y, nav, credits, certificates, resume)
theme.ts           Mantine theme
```

## Updating Content

- **Resume:** replace `public/download/resume.pdf`.
- **Certificates:** edit `app/_constants/certificates.ts`.
- **Skills and history:** edit the matching files in `app/_sections/`.
- **Logos:** add the image to `public/logos/` and credit its source in the credits dialog (`app/_components/credits/CreditsDialog.tsx`).

## Versioning

The project follows [Semantic Versioning](https://semver.org/). Changes are recorded in [CHANGELOG.md](CHANGELOG.md).

## Credits and Trademarks

All trademarks, logos and brand names are the property of their respective owners. Attributions for icons and libraries are listed in the site's Credits dialog.
