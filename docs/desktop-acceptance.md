# iPolloWork desktop acceptance

- Date: 2026-10-19 (Asia/Shanghai)
- App bundle version: 0.50.20
- Plugin engine compatibility reported by import preview: 0.50.12
- Package: `ai-public-benefit-planner-1.0.0.ipollowork-plugin`
- Import preview: passed declarative safety checks; 1 Skill, 0 Agent, 0 command, 0 MCP
- Installation: passed; plugin and Skill enabled
- Project: AI 热点交付验收 2026-09-14 (`ws_ae06a808c439`)
- Session: `ses_eadf9e458ffefIVP0PMyZA0Jgo`
- Invocation: explicitly requested AI Public Benefit Planner against `examples/initiative-brief.md`
- Skill loading evidence: iPolloWork displayed `加载技能 ai-public-benefit-planner`, then read `planning-rules.md` and `plan-template.md`
- Result: passed. The response preserved missing baselines, agreements, accessibility review, retention terms, and compensation policy as `Unknown`; labeled assumptions and commitments; produced every required plan section; and concluded `Revise`.

The exact public release artifact must be installed after publication. If its inner manifest and Skill files match this invoked package byte-for-byte, the invocation evidence remains applicable.
