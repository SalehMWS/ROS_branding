# ROS — Intelligent Brand Management Platform

A brand consulting and AI brand-analysis platform for the Persian-speaking
market. Production domain: **https://rosbrand.ir**

---

## Tech Stack

**Frontend** — Next.js 16 (App Router, static export), TypeScript
**Backend** — Go (Gin), consumed over REST
**Database** — PostgreSQL

This repository is the **frontend**. It builds to a fully static site
(`next.config.ts` sets `output: 'export'`), so there is no Node server at
runtime — the `out/` directory is deployed as-is.

---

## Getting Started

```bash
npm install
cp .env.example .env.local     # point NEXT_PUBLIC_API_URL at your API

npm run dev                    # http://localhost:3000
npm run build                  # static export → ./out
npm run lint
npx tsc --noEmit               # type check
```

If port 3000 is taken, Next picks the next free port and prints it.

---

## Structure

```
app/                 routes (App Router)
  sitemap.ts         sitemap.xml, generated at build
  robots.ts          robots.txt, generated at build
  magazine/[slug]/   articles.ts holds the article content
  team/[slug]/       members.ts holds the team data
components/          shared UI
lib/
  api.ts             typed API client (auth, brand, analysis, admin)
  site.ts            canonical domain + route lists used by the sitemap
  theme.tsx          theme context
assets-source/       design sources & original images — never deployed
```

---

## SEO

- Canonical domain lives in `lib/site.ts` (`SITE_URL`).
- Every public route sets its own title, description, canonical and
  Open Graph tags. Client-component pages carry them in a sibling
  `layout.tsx`.
- `/dashboard`, `/admin`, `/onboarding` and the auth pages are `noindex`
  and excluded from the sitemap.
- Adding a public route means adding it to `STATIC_ROUTES` or
  `SERVICE_ROUTES` in `lib/site.ts`, otherwise it will not be in the sitemap.

---

## Assets

Keep `public/` lean — it ships to every visitor. Design sources (`.psd`),
raw camera originals and unused video live in `assets-source/`, which is
git-ignored. Images in `public/` are capped at 1920px.

---

## Security Note

Route guards (`AuthGuard`, `AdminGuard`) run in the browser and only hide
UI. Because the site is a static export, every page's HTML is publicly
reachable. **All authorization must be enforced by the Go API on every
endpoint** — never rely on the frontend guards for access control.

---

## License

Private — All rights reserved © ROS Agency
