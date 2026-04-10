---
name: enrich
description: Reads all existing knowledge files under .mcp/config/knowledge/ and .mcp/agents/, identifies gaps or missing details, then fills them in by re-scanning the codebase. Use when knowledge files exist but feel incomplete.
user-invocable: true
---

# Enrich Knowledge

When invoked:

1. Read every file under `.mcp/config/knowledge/` and `.mcp/agents/`
2. Identify fields marked FILL_IN or values that seem generic/incomplete
3. Use `search/codebase` to find the real values from actual source code
4. Update each file with the correct, specific values found
5. Report what was enriched and what still could not be determined
