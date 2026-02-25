# AGENTS.md (repo root)

## Defaults (apply to every task)
- Prefer minimal, reviewable diffs.
- Keep changes aligned with existing patterns and conventions in this repo.
- If you add/change business logic (not UI), also add/update tests.
- If you change UI, update storybook accordingly.

## Required checks before you finish
Run these before marking the task done (unless explicitly told not to):
1) Lint + typecheck
   - `yarn lint`
   - `yarn typecheck` (or `yarn tsc`)

2) Unit tests
   - `yarn test --watchman=false`

3) Storybook (only if UI/components changed)
   - Ensure story files are updated/added.
   - If component API or visuals changed: add/update stories and any relevant snapshots.

## When you should run what
- Pure refactor / no behavior change: lint + typecheck only, tests if risk is non-trivial.
- Any logic change: lint + typecheck + tests.
- Any UI/component change: lint + typecheck + tests + story updates (and storybook tests if available).

## Output expectations
- Summarize what changed and why.
- List the commands you ran and their result.
- Call out any follow-ups you did NOT do (and why).
