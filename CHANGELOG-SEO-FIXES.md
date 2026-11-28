# SEO repair sprint – 2026-11-28
Based on `JournoPulse_Complete_SEO_Audit_2026-11-27.pdf`. Nothing here guarantees indexing or ranking; verify in Google Search Console after deploying.

## Fixed in code and data
| # | Audit finding | What was done |
|---|---|---|
| 1 | 51 records shared the 2021-10-01 timestamp | 50 restored (the 51st was the removed duplicate). Date taken from the visible "Published" text; two stories with a corrupt "NOVEMBER 15" label were dated from their update time. All dates are now ISO-8601 with timezone and the display text shows the full year. 4 records are listed in `data/_archive/date-review.json` as REVIEW. |
| 2 | Julio feature had no route; JSON-LD/sitemap broken | Route, URL, category name derived centrally for every record (`lib/contentCore.mjs`). |
| 3 | Duplicate LUMA route (two records) | Kept the longer, later-updated version (mentions the Supreme Court ruling); older variant archived in `data/_archive/removed-articles.json`. |
| 4 | Wanda duplicate (water-protest URL served the pardon story) | Duplicate removed (URL now 404). Pardon article: wrong fashion caption fixed, "former President" corrected, dated editor's note added. |
| 5 | Health / UK archives 404 | Added to the category registry with SEO entries. Archives with <3 stories are noindex,follow and not in the sitemap until they grow. |
| 6 | Sitemap built from raw SEO keys (115 entries, duplicates, malformed host, stale paths) | Rebuilt from validated articles + explicit page list. 110 unique valid URLs, none duplicated, `/search` excluded. |
| 7 | Stale paths | 301 redirects: Hargreaves Lansdown, Balenciaga, Nvidia (PR) old paths; bare-domain → www; dead homepage card repaired. |
| 8 | No news sitemap | `/news-sitemap.xml` added (48-hour window); both sitemaps listed in robots.txt. |
| 9 | RSS unsorted/duplicates | Newest 50, sorted, de-duplicated, full channel metadata. |
| 10 | Metadata drift | Dates/canonical/author/image size forced to match the article at render time; 6 articles with no SEO entry get generated metadata + JSON-LD; wrong Bancrédito entry (it carried the Wanda title) removed; placeholder `REPLACE-WITH-YOUR-REAL-PILLAR-PROFILE-URL` fixed; schema logo URL (file did not exist) fixed; 2 category OG images with wrong file names fixed; hreflang self-reference removed. |
| 11 | Static page titles | `/editorial-policy` was titled "About Us", `/our-team` "Terms"; 11 pages shared one description. Each now has its own. `/pr`, `/health`, `/uk` metadata added. |
| 12 | Stray `:contentReference` tokens (6 articles) | Removed; the missing names were restored from headline/slug context – **editor must confirm**. |
| 13 | Unrelated stitched text | Banking-case text removed from Kosovo, UAE/OPEC and US gas-price stories; climate-litigation block removed from AML and asset-recovery stories. |
| 14 | Low-quality AML + asset-recovery pages | Marked `hold` (noindex, not in sitemap/RSS) until rewritten. |
| 15 | Julio feature: unverified $4.5B, "Billion-Dollar" headline | Net-worth box, gold-holdings claim and dynasty comparison removed; title now "Julio Herrera Velutini: Banking Career and Family Background"; image size corrected (976×1024). URL unchanged. |
| 16 | Homepage frozen, no H1, "Latest News" over old items | Dynamic "Latest News" block (newest 6, real dates) with the single H1; hand-built blocks relabelled "Featured Stories"; one mismatched card repaired. |
| 17 | Archives/More-to-read ordering | Newest first everywhere; related stories chosen by category + shared headline words. |
| 18 | Authors | Missing avatar no longer falls back to another person's photo (neutral placeholder). Bios are NOT invented. |
| 19 | Sources and image credits not shown | `sources[]` now rendered as a visible Sources list; image attribution shown under the caption. |
| 20 | Raw HTML risk | Article HTML is sanitised at render (scripts, iframes, inline handlers, javascript: URLs). |
| 21 | Publishing script drift | `scripts/add-article.mjs` rewritten to share the registry and rules; `npm run validate` runs before every build; old drafts archived so they can't be re-imported. |
| 22 | Image defects | Real dimensions written for all heroes. Missing FAA ground-stop image replaced by a temporary related illustration (flagged). |

## Needs a human (not done on purpose)
1. Upload the real hero image for the FAA ground-stop story, and replace the 501px / 510px / 976px heroes (ASEAN, China-Taiwan, Julio) with 1200px+ images.
2. Verify the 4 REVIEW dates, the entity names restored in 6 stories, and decide whether to restore the water-access story or serve a 410.
3. Legal/financial verification: Wanda pardon status (DOJ clemency record + docket), Bancrédito plea/penalty articles, Julio profile pages (source each claim to primary records). Rewrite or retire the two `hold` articles.
4. Name the real owner/operator on the Ownership page; write real author bios (Jeremy Sodergren has none); disclose any client/sponsorship relationship.
5. Performance: ~1.6 MB CSS + 666 KB JS load on every page. Trimming needs browser coverage testing (not possible offline) – see report.
6. Google Search Console: submit `/sitemap.xml` and `/news-sitemap.xml`, inspect priority URLs, review Pages, Manual actions and Crawl stats.

## Not verified
`npm run build` could not be run in the preparation environment (no network, no dependencies). `npm run validate` passes, all 74 JS/JSX files parse, and the SEO/sitemap logic was exercised in Node. Run `npm ci && npm run build` before deploying.
