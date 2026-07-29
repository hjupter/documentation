import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const summary = fs.readFileSync(path.join(root, "SUMMARY.md"), "utf8");
const links = [...summary.matchAll(/\]\(([^)]+\.md)\)/g)].map((match) => match[1]);
const errors = [];

for (const link of links) {
  if (!fs.existsSync(path.join(root, link))) errors.push(`missing SUMMARY target: ${link}`);
}

const docsRoot = path.join(root, "game-creator-2/quantum-module/quantum-stats");
const docs = fs.readdirSync(docsRoot)
  .filter((name) => name.endsWith(".md"))
  .map((name) => ({
    name,
    content: fs.readFileSync(path.join(docsRoot, name), "utf8"),
  }));

for (const { name, content } of docs) {
  if (!content.startsWith("# ")) errors.push(`${name}: missing H1`);
  for (const match of content.matchAll(/\]\(([^)]+\.md)\)/g)) {
    const target = path.resolve(docsRoot, match[1]);
    if (!fs.existsSync(target)) errors.push(`${name}: broken link ${match[1]}`);
  }
}

const combined = docs.map((doc) => doc.content).join("\n");
for (const forbidden of [
  "supports Unity 6",
  "release-ready",
  "available now",
  "Quantum 3.1",
]) {
  if (combined.includes(forbidden)) errors.push(`premature claim: ${forbidden}`);
}

if (!combined.includes("private development")) {
  errors.push("development status is not prominent");
}
if (!combined.includes("separately")) {
  errors.push("dependency installation policy is missing");
}
for (const required of [
  "quantum-stats.compatibility.json",
  "48-byte Stats payload",
  "versioned 64-bit digest",
  "explicitly unproven",
  "separate-process two-client Quantum Cloud run",
  "Current result: not applicable",
  "no secret, Photon App ID, `EditorPrefs`, or `PlayerPrefs`",
  "exact pushed Quantum Core settings-extension contract",
  "must not mutate or redefine Core's settings asset",
  "78feba0ff454828aeb425fc28a3c208f20ae7b25",
  "`QuantumSettingsContribution.None`",
  "`pending`",
  "does not consume the candidate's transport allocations",
]) {
  if (!combined.includes(required)) {
    errors.push(`required release boundary missing: ${required}`);
  }
}
const settingsPage = docs.find((doc) => doc.name === "project-settings.md")?.content ?? "";
for (const forbidden of [
  "QuantumStatsSettings",
  "default catalog setting",
  "global capacity setting",
]) {
  if (settingsPage.includes(forbidden)) {
    errors.push(`invented Stats project option: ${forbidden}`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Validated ${docs.length} Quantum Stats pages and ${links.length} SUMMARY links.`);
