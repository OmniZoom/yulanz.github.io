# Implementation Progress

Last updated: 2026-08-11 (Asia/Seoul)

## Current state

- Active visual direction: Version 3 pastel radial background.
- English homepage: `/`
- Chinese homepage: `/zh/`
- English case study: `/projects/enterprise-engineering-copilot/`
- Chinese case study: `/zh/projects/enterprise-engineering-copilot/`

## Completed

- Personal sidebar with verified portrait, bilingual name, contact link, language switch,
  nested Projects navigation, and one numbered `01–13` case-study navigation list.
- Academic Overview introduction and timeline in English and Chinese.
- Projects panel without the duplicate Project Index.
- Detailed Experience content; the tab now starts directly with the experience list.
- Research page rebuilt around the first-author archived ST-HAR manuscript:
  abstract, method explanation, original `pipeline.pdf`, complete comparison table,
  complete ablation table, `SW_size_th.pdf`, `fig_split_violin_temp.pdf`, and
  `qualitative_4by4.png`.
- Evidence-based Skills groups in English and Chinese.
- Case-study body numbering removed; the sidebar retains the single numbering system.
- Errant Troubleshooting image between sections 11 and 12 removed.
- Version 3 colors: base `#FAFBFD`, pink `#F5CDD3`, blue `#BDD9F1`, mint `#CDEEE5`.
- Public wording uses Yulan Zeng / 曾钰岚 and avoids Portfolio positioning.

## Content constraints

- Only verified resume and supplied research-archive information is used.
- OmniZoom is intentionally omitted because the owner does not want to feature non-first-author work.
- The private resume source is not published. A public Resume link stays disabled until a reviewed PDF is supplied.
- Do not publish phone number, birth date, gender, or ethnicity from the private resume.
- ST-HAR must remain labeled as an archived manuscript unless its status changes with evidence.

## Remaining owner-supplied item

- Add a reviewed public resume PDF and set `resumeHref` in `src/data/site.ts` when provided.

## Verification baseline

Run from the repository root:

```bash
npm run check
ASTRO_TELEMETRY_DISABLED=1 npm run build
```

Expected: 0 Astro diagnostics and four generated static routes.
