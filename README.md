# JournoPulse – Next.js

The static `source.zip` site converted to Next.js (App Router, fully static / SSG).

## Run
    npm install
    npm run dev        # http://localhost:3000
    npm run build && npm start

## Structure
- `app/(site)/page.jsx` – home
- `app/(site)/[category]/page.jsx` – category pages (bancredito, business, fashion, politics, puertorico, sports, technology, us, world)
- `app/(site)/[category]/[slug]/page.jsx` – the 51 articles, rendered from `data/articles.json`
- `app/(site)/author/` – author index and `author/[slug]` pages (built from the article data)
- `components/MoreToRead.jsx`, `components/ArticleCard.jsx` – new section and card used on article and author pages
- `public/extras.css` – responsive rules, ad sizing, footer button, author and More to Read styles
- `public/img/ads/` – illustration-based ad creatives; `public/img/illustrations/` – article illustrations and the author avatar
- `app/(static)/<page>/page.jsx` – about, contact, privacy, terms, editorial-policy, etc.
- `data/articles.json` – every article (title, tagline, image, author, dates, body HTML)
- `data/seo.json` – per-page title, description, Open Graph, Twitter, JSON-LD (used by `lib/seo.js`)
- `components/generated/` – header, footer, sidebar, home and category sections converted to JSX
- `public/` – `style.css`, `detail.css`, `custom.js` (theme scripts) and `img/` unchanged
- `app/sitemap.js`, `app/robots.js`, `app/rss.xml/route.js` – generated from the data

To add an article: add an entry to `data/articles.json` (same fields as the others) and a matching entry in `data/seo.json`.
