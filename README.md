# JournoPulse – Next.js

Next.js (App Router) news site. Content lives in JSON files; pages, metadata, sitemap and RSS are generated from them.

## Run
    npm ci
    npm run validate   # content gate (also runs automatically before every build)
    npm run dev        # http://localhost:3000
    npm run build && npm start

## How content flows (single source of truth)
- `data/articles.json` – every article. `route`, `url`, `categoryName` are derived in code (`lib/contentCore.mjs`), never typed by hand.
- `lib/categoryRegistry.mjs` – the ONE place for categories (label, order, intro text). `data/categories.json` no longer exists.
- `data/seo.json` – optional hand-written title/description per page. Article dates, canonical, author and image size are forced to match the
  article record at render time (`lib/seo.js`). An article with no entry gets complete metadata + NewsArticle/BreadcrumbList JSON-LD generated automatically.
- `app/sitemap.js` – built from validated articles + an explicit static-page list. `/search` is excluded.
- `app/news-sitemap.xml/route.js` – Google News sitemap (stories first published in the last 48 h). Submit it in Search Console.
- `app/rss.xml/route.js` – newest 50 stories, real publication dates.

## Adding an article
    node scripts/add-article.mjs new-articles/my-article.json
    npm run validate
The script refuses unknown categories, duplicate routes, placeholder/legacy dates and unsafe HTML, and reads the real image size.
Provide `sources: [{ name, url, type }]` – they are rendered as a visible "Sources" list.
Set `"hold": true` on an article to make it noindex and keep it out of the sitemaps/RSS while it is being reviewed.

## Rules the validator enforces (build fails otherwise)
No duplicate routes · no 2021 placeholder dates · full ISO dates with timezone · no `:contentReference` / placeholder tokens ·
every hero image exists · no stale keys in seo.json · sitemap has only valid, unique canonical URLs · redirects never shadow live pages.

## Categories with fewer than 3 stories (`MIN_ARCHIVE_ARTICLES`) are served as noindex,follow and left out of the sitemap automatically.

See `CHANGELOG-SEO-FIXES.md` for everything changed in the 2026-11-28 repair sprint and `data/_archive/` for removed records and the date-review list.
