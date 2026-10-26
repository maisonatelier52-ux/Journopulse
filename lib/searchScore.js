// Pure helpers shared by the live-search dropdown and the /search results page.
// Safe to import from client components (no server-only code).

const norm = (s) =>
  (s || "")
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // "Bancrédito" matches "bancredito"
    .replace(/[^a-z0-9\s]/g, " ");

export const tokenize = (q) => norm(q).split(/\s+/).filter(Boolean);

export function searchItems(items, query, limit = 50) {
  const tokens = tokenize(query);
  if (!tokens.length || !Array.isArray(items)) return [];
  const out = [];
  for (const it of items) {
    const title = norm(it.t);
    const desc = norm(it.d);
    const cat = norm(it.c);
    const body = norm(it.b);
    let score = 0;
    let ok = true;
    for (const tok of tokens) {
      let s = 0;
      if (title.includes(tok)) s += 6 + (title.startsWith(tok) ? 2 : 0);
      if (desc.includes(tok)) s += 3;
      if (cat.includes(tok)) s += 2;
      if (body.includes(tok)) s += 1;
      if (!s) { ok = false; break; }
      score += s;
    }
    if (!ok) continue;
    if (title.includes(tokens.join(" "))) score += 5; // exact phrase in title
    out.push({ ...it, score });
  }
  out.sort((a, b) => b.score - a.score || (b.dt || "").localeCompare(a.dt || ""));
  return out.slice(0, limit);
}
