import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import { relative, resolve, sep } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const manifest = JSON.parse(await readFile(resolve(root, "ipollowork.plugin.json"), "utf8"));
assert.equal(manifest.schemaVersion, 2);
assert.equal(manifest.source.trusted, false);
assert.equal("permissions" in manifest, false);
assert.equal(manifest.package.publisher.id, "sykdhqk");
assert.equal(manifest.package.compatibility.ipollowork, ">=0.50.12");
assert.deepEqual(manifest.resources.map(x => x.type), ["skill"]);
assert.equal(manifest.resources[0].path, "skills/ai-public-benefit-planner");

const skill = await readFile(resolve(root, "skills/ai-public-benefit-planner/SKILL.md"), "utf8");
assert.match(skill, /^---\nname: ai-public-benefit-planner\ndescription: Use when /);
for (const heading of ["## Inputs", "## Workflow", "## Boundaries", "## Output"]) assert.ok(skill.includes(heading));
for (const ref of ["references/planning-rules.md", "references/plan-template.md"]) {
  assert.ok(skill.includes(ref));
  await stat(resolve(root, "skills/ai-public-benefit-planner", ref));
}

const expected = await readFile(resolve(root, "examples/expected-plan.md"), "utf8");
for (const heading of ["## Decision brief", "## Beneficiary and stakeholder map", "## Theory of change", "## Evidence ledger", "## Measurement scorecard", "## Governance and participation", "## Funding safeguards", "## Risk, pause, and stop register", "## Pilot and exit plan", "## Open evidence requests", "## Recommendation"]) assert.ok(expected.includes(heading));
for (const boundary of ["Unknown", "Assumption", "Revise", "anti-gaming", "Stop collection"]) assert.ok(expected.toLowerCase().includes(boundary.toLowerCase()));

const topics = JSON.parse(await readFile(resolve(root, "topics.json"), "utf8"));
for (const topic of ["ipollowork", "ipollowork-plugin", "ai-for-good", "public-benefit", "impact-measurement", "ai-governance"]) assert.ok(topics.includes(topic));
for (const readme of ["README.md", "README.zh-CN.md"]) {
  const text = await readFile(resolve(root, readme), "utf8");
  assert.ok(text.includes("https://github.com/Devin-AXIS/iPolloWork"));
  assert.ok(!/hotspot|热点背景|热点与边界/i.test(text));
}

async function walk(dir) {
  const out = [];
  for (const name of await readdir(dir)) {
    if ([".git", "dist", "node_modules"].includes(name)) continue;
    const path = resolve(dir, name);
    const info = await stat(path);
    if (info.isSymbolicLink()) throw new Error(`symlink forbidden: ${path}`);
    if (info.isDirectory()) out.push(...await walk(path)); else out.push(path);
  }
  return out;
}
const forbiddenCredentialMarker = ["codex.daily-ai", "github.credentials"].join(".");
for (const path of await walk(root)) {
  const rel = relative(root, path).split(sep).join("/");
  assert.ok(!rel.includes(".."));
  const text = await readFile(path).catch(() => Buffer.alloc(0));
  assert.ok(!text.toString().includes(forbiddenCredentialMarker), `credential service leaked in ${rel}`);
}
console.log("Validated manifest, impact-planning behavior, bilingual docs, topics, paths, and secret hygiene.");
