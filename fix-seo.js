const fs = require("fs");
const file = process.argv[2];
if (!file) { console.log("Usage: node fix-seo.js <path-to-seo-json>"); process.exit(1); }

const original = fs.readFileSync(file, "utf8");
let text = original.trimEnd();

function tryParse(t) { try { JSON.parse(t); return null; } catch (e) { return e.message; } }

let err = tryParse(text);
if (!err) { console.log("File is already valid JSON. Nothing to change."); process.exit(0); }

// Fix 1: missing final closing brace
const withBrace = text + "\n}\n";
if (!tryParse(withBrace)) {
  fs.writeFileSync(file + ".bak", original);
  fs.writeFileSync(file, withBrace);
  console.log("Fixed: added the missing closing } at the end. Backup saved as " + file + ".bak");
  process.exit(0);
}

console.log("Still invalid after adding the final }:");
console.log(tryParse(withBrace));