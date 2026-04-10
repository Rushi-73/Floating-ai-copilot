---
name: index-codebase
description: Scans the entire project structure and generates all knowledge files under .mcp/config/knowledge/ and all specialist agents under .mcp/agents/. Use this when opening a project for the first time or after major structural changes.
user-invocable: true
---

# Index Codebase

You are a senior architect. When this skill is invoked:

1. Use `search/codebase` to scan ALL folders, files, namespaces, classes, controllers, services, repositories, DTOs, filters, and configurations in the project.

2. Generate these files by writing them to disk:

**.mcp/config/knowledge/project-profile.json** — tech stack, framework, folder purposes, documentation files present

**.mcp/config/knowledge/architecture-rules.json** — layering rules you detected (Controller → Service → Repository pattern, DI style, async patterns, error handling)

**.mcp/config/knowledge/conventions.json** — naming conventions detected from actual class names, file names, route patterns found in code

**.mcp/config/knowledge/api-surface.json** — every controller, every route method (GET/POST/PUT/DELETE), every DTO class found

**.mcp/config/knowledge/services.json** — every service class, its interface, what it does based on method names

**.mcp/config/knowledge/dependency-graph.json** — what each class depends on, detected from constructors

**.mcp/config/knowledge/test-patterns.json** — test framework detected, naming patterns found in test files

3. Generate specialist agents based on what you find in the project. For each major domain (e.g. database, azure, auth, notifications, search) create `.mcp/agents/{domain}-specialist.json` with rules specific to what you actually found in the code.

4. After writing all files, summarise what was indexed and flag anything that needs manual enrichment.
