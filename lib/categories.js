// Canonical category labels, descriptions and URL helpers.
// Every article lives at /{category}/{slug}. Use these helpers everywhere so
// breadcrumbs, cards, search results, sitemap and JSON-LD never disagree.

export const CATEGORY_ORDER = ["us", "technology", "business", "politics", "world", "puertorico", "bancredito", "sports", "fashion"];

export const CATEGORY_LABELS = {
  bancredito: "Bancrédito",
  business: "Business",
  fashion: "Fashion",
  politics: "Politics",
  puertorico: "Puerto Rico",
  sports: "Sports",
  technology: "Technology",
  us: "U.S. News",
  world: "World",
};

export const CATEGORY_META = {
  us: { h1: "U.S. News", grid: "Latest U.S. News", intro: "Breaking stories, weather, courts and policy from across the United States, reported with context and sources." },
  technology: { h1: "Technology", grid: "Latest Technology News", intro: "Artificial intelligence, space, devices and the companies reshaping how we live and work." },
  business: { h1: "Business", grid: "Latest Business News", intro: "Markets, corporate strategy, energy prices and the economic developments that move money around the globe." },
  politics: { h1: "Politics", grid: "Latest Politics News", intro: "Elections, Congress, the courts and the White House: the decisions and the people shaping American politics." },
  world: { h1: "World", grid: "Latest World News", intro: "Diplomacy, conflict and global events, with the background you need to follow them." },
  puertorico: { h1: "Puerto Rico", grid: "Latest Puerto Rico News", intro: "Government, public records, infrastructure and community stories from Puerto Rico." },
  bancredito: { h1: "Bancrédito", grid: "Latest Bancrédito News", intro: "FinCEN's $15 million penalty, the liquidation of Bancrédito International Bank, court proceedings and what regulators say, tracked in one place." },
  sports: { h1: "Sports", grid: "Latest Sports News", intro: "From Olympic ice to World Cup pitches and the courts of Puerto Rico: results, athletes and the stories behind the scoreline." },
  fashion: { h1: "Fashion", grid: "Latest Fashion News", intro: "Runway reports, designer debuts and the culture behind what we wear, covered as news, not just spectacle." },
};

export const categoryHref = (category) => `/${category}`;
export const articleHref = (category, slug) => `/${category}/${slug}`;
export const categoryLabel = (category) => CATEGORY_LABELS[category] || category;
