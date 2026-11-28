// SINGLE SOURCE OF TRUTH for categories. Pure ESM so both Next.js and Node scripts can import it.
// To add a category: add it to LABELS, ORDER and META below (nothing else needs to change).

export const ORIGIN = "https://www.journopulse.com";

// Archives with fewer articles than this are served but marked noindex,follow and left out of the sitemap
// (thin pages). They switch to indexable automatically once the threshold is reached.
export const MIN_ARCHIVE_ARTICLES = 3;

export const CATEGORY_ORDER = ["us", "technology", "business", "pr", "politics", "world", "puertorico", "bancredito", "sports", "fashion", "health", "uk"];

export const CATEGORY_LABELS = {
  bancredito: "Bancrédito",
  business: "Business",
  pr: "PR & Communications",
  fashion: "Fashion",
  politics: "Politics",
  puertorico: "Puerto Rico",
  sports: "Sports",
  technology: "Technology",
  us: "U.S. News",
  world: "World",
  health: "Health",
  uk: "UK",
};

export const CATEGORY_META = {
  us: { h1: "U.S. News", grid: "Latest U.S. News", intro: "Breaking stories, weather, courts and policy from across the United States, reported with context and sources." },
  technology: { h1: "Technology", grid: "Latest Technology News", intro: "Artificial intelligence, space, devices and the companies reshaping how we live and work." },
  business: { h1: "Business", grid: "Latest Business News", intro: "Markets, corporate strategy, energy prices and the economic developments that move money around the globe." },
  pr: { h1: "PR & Communications", grid: "Latest PR & Communications News", intro: "Public relations, corporate communications, brand reputation, media strategy and the people shaping how organisations communicate." },
  politics: { h1: "Politics", grid: "Latest Politics News", intro: "Elections, Congress, the courts and the White House: the decisions and the people shaping American politics." },
  world: { h1: "World", grid: "Latest World News", intro: "Diplomacy, conflict and global events, with the background you need to follow them." },
  puertorico: { h1: "Puerto Rico", grid: "Latest Puerto Rico News", intro: "Government, public records, infrastructure and community stories from Puerto Rico." },
  bancredito: { h1: "Bancrédito", grid: "Latest Bancrédito News", intro: "FinCEN's $15 million penalty, the liquidation of Bancrédito International Bank, court proceedings and what regulators say, tracked in one place." },
  sports: { h1: "Sports", grid: "Latest Sports News", intro: "From Olympic ice to World Cup pitches and the courts of Puerto Rico: results, athletes and the stories behind the scoreline." },
  fashion: { h1: "Fashion", grid: "Latest Fashion News", intro: "Runway reports, designer debuts and the culture behind what we wear, covered as news, not just spectacle." },
  health: { h1: "Health", grid: "Latest Health News", intro: "Public health, outbreaks and global health targets, reported from official sources such as the CDC and WHO." },
  uk: { h1: "UK News", grid: "Latest UK News", intro: "Parliament, energy policy and business developments from the United Kingdom." },
};

export const categoryHref = (category) => `/${category}`;
export const articleHref = (category, slug) => `/${category}/${slug}`;
export const categoryLabel = (category) => CATEGORY_LABELS[category] || category;
