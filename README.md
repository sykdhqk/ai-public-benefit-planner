# AI Public Benefit Planner

An iPolloWork Skill that turns an AI public-benefit idea into a review-ready plan. It separates facts from assumptions, maps who benefits and who bears risk, defines measurable outcomes, assigns governance, protects funding, and sets pilot, pause, stop, and exit conditions.

## Capabilities

- Builds a beneficiary and stakeholder map with participation rights.
- Connects resources, activities, outputs, outcomes, and public benefit.
- Produces an evidence ledger and a compact measurement scorecard.
- Adds funding controls, conflicts disclosure, complaints, and independent review.
- Makes uncertainty explicit and recommends a reversible pilot when evidence is weak.

## Use in iPolloWork

1. Download `ai-public-benefit-planner-1.0.0.ipollowork-plugin` from the latest release.
2. In iPolloWork, open **Extensions**, choose **File import**, and select the package.
3. Review the preview, install it, and confirm **AI Public Benefit Planner** is enabled.
4. Start a task and say: `Use AI Public Benefit Planner to review this initiative: ...`
5. Include intended beneficiaries, geography, partners, budget or resources, time horizon, and known evidence when available.

Pure Skill users can import `ai-public-benefit-planner-1.0.0-skill.zip` through the local Skill flow.

This Skill supports [iPolloWork](https://github.com/Devin-AXIS/iPolloWork). The package was tested with the iPolloWork 0.50.12 plugin engine and contains no permissions or executable hooks.

## Example

See [initiative-brief.md](examples/initiative-brief.md) and [expected-plan.md](examples/expected-plan.md).

## Development

```sh
npm test
npm run package
cd dist && shasum -a 256 -c SHA256SUMS.txt
```

[中文说明](README.zh-CN.md) · MIT License
