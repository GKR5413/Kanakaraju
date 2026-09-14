# rajugottumukkala.com

Personal site for Raju Gottumukkala — AI/ML Engineer.

Next.js App Router, statically exported and served from GitHub Pages at
[rajugottumukkala.com](https://rajugottumukkala.com).

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Static export to `out/`, then obfuscates the JS chunks |
| `npm run lint` | ESLint |

There is no `npm start` — `next.config.ts` sets `output: "export"`, so the
build emits static files rather than a server. To preview a production build,
serve `out/` with any static file server.

## Layout

```
app/          layout, page, global CSS, robots + sitemap routes
components/   one component per page section
data/         site content — experience, skills, certifications
public/       logos, certification badges, OG image, CNAME
scripts/      post-build JS obfuscation
```

Content lives in `data/`, not in the components. Updating a job, a skill, or a
certification means editing `data/experience.ts`, `data/skills.ts`, or
`data/certs.ts` — the components render whatever is there.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site
and publishes `out/` to GitHub Pages. The custom domain comes from
`public/CNAME`, which is copied into the export automatically — it needs to
stay in `public/`, not the repository root, to reach the artifact.
