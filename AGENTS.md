# AGENTS.md

## Scope
- Cloud/DevOps portfolio app (`mark-siazon/AE3-Portfolio-Cloud-DevOps`, branch `main`).
- Follow root `C:\Codes Local\AGENTS.md` first, then this file.

## Environment / Stack
- Qwik + Vite + Tailwind CSS v4, Node `>=24`, npm (`package-lock.json`).

## Key Commands
- `npm run dev` — local Qwik Vite dev server (`vite --mode ssr`)
- `npm run build` — full client + server + lint + typecheck build
- `npm run build.types` — TypeScript check (`tsc --incremental --noEmit`)
- `npm run lint` — ESLint check (`eslint "src/**/*.ts*"`)
- `npm run preview` — preview built static/SSR app

## Secrets / Env
- Reference `.env.example`: `PUBLIC_GA_MEASUREMENT_ID`. Never print or commit secret values.

## Verification
- Run `npm run lint`, `npm run build.types`, and `npm run build` after changes.
