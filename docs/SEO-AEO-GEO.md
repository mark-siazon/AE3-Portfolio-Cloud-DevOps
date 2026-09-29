# SEO, AEO, and GEO on AE3 Portfolio

This site uses **head-only** and **`public/`** artifacts to support search, answer engines, and assistant citation—without changing gallery or reflection layout (except Prof. Niño Narido spelling).

## What was added

| Artifact | URL (after deploy) |
|----------|-------------------|
| llms.txt | https://mark-siazon.github.io/AE3-Portfolio-Cloud-DevOps/llms.txt |
| llms-full.txt | https://mark-siazon.github.io/AE3-Portfolio-Cloud-DevOps/llms-full.txt |
| humans.txt | https://mark-siazon.github.io/AE3-Portfolio-Cloud-DevOps/humans.txt |
| JSON-LD | View source on `/` and `/reflection/` |
| sitemap | https://mark-siazon.github.io/AE3-Portfolio-Cloud-DevOps/sitemap.xml |

Source modules: `src/seo/site.ts`, `src/seo/jsonld.ts`, `src/seo/projects-catalog.json`, route heads in `src/seo/head-home.ts` and `head-reflection.ts`.

Regenerate concise llms index:

```bash
npm run seo:llms
```

## Skill-to-assignment map

| Theme | Assignments |
|-------|-------------|
| Full-stack & APIs | Ass#1 Spring Boot REST; Docker Node lab; Qwik portfolio (this repo) |
| Cloud (AWS) | Ass#2 EC2, S3, RDS guide |
| Containers & DevOps | Ass#3 Docker plan; Ass#4 research; Docker lab |
| Orchestration & IaC | Ass#5 Kubernetes/Minikube; Ass#6 Terraform Survivor |

## Voice guide

Lead with **what Mark demonstrates** (named assignments, repos, demos). **marksiazon.dev** is the home for career story, flagship case studies, and contact; this GitHub Pages site **extends** that footprint with ELEC3 depth. Use affirmative phrasing in llms and FAQ JSON-LD—see `public/llms.txt` sections **How this connects to marksiazon.dev** and **Reference guide**.

## Canonical portfolio llms

Do not duplicate marksiazon.dev corpus. Link out: https://www.marksiazon.dev/llms.txt

## Verification checklist

- [ ] `npm run build:pages` passes on Node 24
- [ ] `/llms.txt` returns 200 and lists marksiazon.dev
- [ ] Reflection page JSON-LD includes FAQPage
- [ ] Home meta keeps `noai, noimageai`; llms.txt still published for GEO

## npm audit

Vite is pinned to 7.3.x+ for advisory fixes. Direct `sharp` is 0.35.5+; `package.json` `overrides` force the same for transitive `vite-imagetools` (Qwik City). Re-run `npm audit` after dependency changes. Any remaining items are upstream Qwik/vite-imagetools until they bump bundled sharp.
