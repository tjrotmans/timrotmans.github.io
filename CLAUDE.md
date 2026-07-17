# CLAUDE.md

Guidance for Claude Code when working in this repo (`timrotmans.github.io` — personal portfolio site).

## Rules

- **Git commits**: do not add Claude/Anthropic as a co-author or any `Co-Authored-By` trailer. Commit messages are a single short sentence — no bullet lists, no body paragraphs.
- **Git identity**: always use the global git config (`sailingthecosmic@gmail.com`) — never override with a per-repo identity.
- Content edits (bio, resume, project copy) belong to the user — Claude scaffolds structure and placeholders, marked with `// TODO`, but shouldn't invent biographical claims.

## Stack

Vite + React + TypeScript + Tailwind v4 + react-router-dom, deployed to GitHub Pages via `.github/workflows/deploy.yml` (GitHub Actions source, not branch deploy) on every push to `main`.

- `npm run dev` — local preview
- `npm run build` — typecheck + production build
- `npm run lint` — eslint

## Roadmap

Distilled from a planning conversation about turning this into a combined portfolio + resume + project showcase for the AstroDynamics mission-analysis platform (Rust backend + Python analysis layer + React/Three.js frontend, repos: `AstroDynamics`, `AstroDynamics-UI`).

### Done
- [x] Scaffold site (Home / Projects / Resume / Contact) on Vite + React + Tailwind
- [x] GitHub Actions deploy to Pages
- [x] Projects page linking to AstroDynamics backend/frontend repos
- [x] SPA routing fix for GitHub Pages (404.html redirect trick)

### Content
- [ ] Replace placeholder bio on Home with real copy
- [ ] Fill in real work experience + education on Resume page
- [ ] Add real `public/resume.pdf`
- [ ] Fix LinkedIn URL on Contact page
- [ ] Write a short "About" section (background, what the project is *for*)

### Project showcase
- [ ] Add screenshots/GIFs of the AstroDynamics-UI frontend (orbit view, trajectory optimization, mission timeline) — start an `media/` or `docs/media/` folder in the AstroDynamics repo and capture visuals as features land, don't wait until "done"
- [ ] Expand the AstroDynamics project card into its own dedicated page: features list, architecture diagram (frontend → Rust backend → Python analysis layer), example missions (Apollo, Mars transfer, NRHO, lunar landing)
- [ ] Add a "Recent development" / progress timeline section, kept in sync with actual milestones
- [ ] Pull live GitHub data onto the project page (latest release, latest commit, language breakdown) instead of hand-maintaining it

### Interactive demo (later)
- [ ] Once AstroDynamics-UI has a component that can run fully client-side (no backend calls), embed a minimal interactive orbit viewer directly on the portfolio site
- [ ] If/when the backend becomes reachable from the browser (hosted API), wire up a live demo instead of a static embed

### Technical notes / blog
- [ ] Add a notes/blog section for short technical write-ups (e.g. Lambert solver, Rust/Python architecture, propagator design) — these double as resume material
- [ ] One post every few weeks is enough; don't block other work on this

### Distribution
- [ ] Link this site from LinkedIn profile
- [ ] Link this site from resume (replace/augment the PDF-only resume with a link to `/resume`)
- [ ] Post periodic progress updates on LinkedIn as the AstroDynamics project develops, linking back here
