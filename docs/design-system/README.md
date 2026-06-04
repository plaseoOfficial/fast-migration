# Fast Systemmöbel — Design System

Single source of truth for the visual design system: colors, typography,
spacing, radii, shadows and component specs. The canonical, machine- and
human-readable reference is **[`TOKENS.md`](./TOKENS.md)** — that's the file the
`design-qc` agent (`.claude/agents/design-qc.md`) loads to review UI code.

## Source

These tokens were distilled from a **Claude Design handoff bundle**
("Fast Systemmöbel Design System") exported from <https://claude.ai/design> and
shared as a one-time link:

```
https://api.anthropic.com/v1/design/h/wknlm7Q8j9Xe9YCI97m9CQ
```

The bundle was a `.tar.gz` containing the canonical token sheet
(`project/colors_and_type.css`), a preview site
(`project/preview/*.html` — colors, type, spacing, radii, shadows, components,
brand) and React prototypes (`project/ui_kits/website/*.jsx`). Its original
file tree is recorded in [`bundle-manifest.txt`](./bundle-manifest.txt).

> **Note:** the share link is single-use and has since expired (returns `404`).
> The token *values* below are captured and cross-checked against the repo's
> own `src/app/globals.css`, so they are reliable. The raw HTML/JSX prototype
> files are **not** vendored here. To restore the full raw bundle, re-export the
> design from claude.ai/design and run:
> ```bash
> curl -s "<new-share-url>" | gunzip | tar -xf - -C docs/design-system
> ```

## How it's used

`TOKENS.md` is the contract. The **`design-qc`** subagent compares built UI
(`src/components/**`, `src/app/globals.css`, `src/components/sections/_shared/tokens.ts`)
against it and reports any deviation (rogue colors, off-scale spacing/type,
wrong radii/shadows, non-conforming components) with `file:line` + a concrete fix.
Run it on demand (e.g. "Use design-qc to review src/components/Footer.tsx") or it
is suggested proactively after UI changes.
