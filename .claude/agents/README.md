# Agent Wiring for Neo-perion

This project relies on the **global** ECC agents (installed under `~/.claude/agents/`). We do NOT define project-local agents — duplicating them would create drift.

## When to invoke which agent

| Change type | Primary agent | Backup |
|-------------|--------------|--------|
| Any `.tsx` / `.ts` touching components, pages, hooks | `react-reviewer` | `typescript-reviewer` |
| Generic type-safety or async review | `typescript-reviewer` | — |
| SQL migration, RLS, schema, triggers, indexes | `database-reviewer` | `security-reviewer` |
| Auth flows, `.env*`, admin routes, payments, PII | `security-reviewer` | — |
| Anything non-trivial (catch-all) | `code-reviewer` | — |
| New feature or refactor | `planner` (then `code-architect`) | — |
| Bug fix or new feature | `tdd-guide` (note: no test runner yet — agent will warn) | — |
| Pre-deploy smoke check | `verify` skill | — |
| Accessibility audit on UI changes | `ecc:accessibility` skill | `react-reviewer` |

## Mandatory review after non-trivial code

For any change touching more than ~50 lines OR multiple files:

1. Implement.
2. Self-review against the relevant checklist in `rules/02-react-typescript.md` or `rules/03-supabase.md`.
3. Invoke the matching review agent.
4. Address CRITICAL and HIGH findings before committing.

## Agent load path

Global agents are listed by the Claude Code runtime — you don't need to import them. Just invoke them by name (`react-reviewer`, `database-reviewer`, etc.) or via the Agent tool with `subagent_type: "ecc:react-reviewer"` etc.

The `ecc:` prefix routes through the Everything Claude Code plugin marketplace; bare names route through the global agent loader. Either works in this project.