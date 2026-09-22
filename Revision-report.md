# JournoPulse Blog revision report

Final package: blog positioning with the original design retained. Initial source revision prepared September 17, 2026; content and illustration pass completed September 21.

**54 active articles: six in each of nine categories.** This follows the instruction to keep every category and add articles as needed for equal counts. Fifty cannot divide equally across nine categories.

| Category | Active | Revised originals | New |
| --- | ---: | ---: | ---: |
| World | 6 | 6 | 0 |
| U.S. | 6 | 6 | 0 |
| Politics | 6 | 6 | 0 |
| Business | 6 | 6 | 0 |
| Technology | 6 | 6 | 0 |
| Sports | 6 | 6 | 0 |
| Fashion | 6 | 3 | 3 |
| Puerto Rico | 6 | 6 | 0 |
| Bancrédito | 6 | 6 | 0 |
| **Total** | **54** | **51** | **3** |

## Original design

The supplied homepage, category and article templates, logo, colors and theme styles are retained. Both style.css and detail.css match the originals byte-for-byte. Source notes, revision notes and search controls use small additional styles. No replacement visual design is included in this deliverable.

## Article work

The site is now presented as a blog of explainers, context and perspectives. Existing theme labels and publication pages use blog language, all 54 post pages use BlogPosting metadata, and the homepage uses Blog metadata. The September 18–21 content pass improves all 54 selected bodies, refines selected headlines and descriptions, adds practical context and records source-check corrections. Source citations, original publication dates and URL paths are retained.

All 54 posts now have distinct hand-painted-style editorial illustrations made with the built-in image generation tool. Descriptive alternative text, explicit illustration captions and matching social-sharing metadata accompany the artwork. The original site layout, logo and theme CSS are unchanged. See Content-pass-report.md for the new revision details and Illustration-prompts.json for every prompt and saved asset path.

The newsletter box offers the working RSS feed without collecting emails. The standard sitemaps and RSS are regenerated from post data; there is no Google News sitemap. Secondary template cards were synchronized with their linked posts to remove stale summaries and bylines.

All 51 retained originals were revised for factual attribution and useful context. Three new Fashion pieces cover London Fashion Week, New York's spring 2027 collections and the V&A's Schiaparelli exhibition. There are 93 distinct source URLs across the collection. Unsupported quotations, mixed-topic passages, misleading headlines and stale live-event framing were removed or corrected.

Every article includes source links and dated publication/revision notes. Original dates are separate from the September 17 source revision and September 18–21 content and illustration pass. Where supplied publication timestamps conflict with event chronology, articles explain the discrepancy. Historical accounts are not presented as live September updates.

## Selection and backup

The supplied website contained 83 article pages. Topics were corrected before selecting the six newest available per category using original publication metadata. Equal timestamps use descending file path as a stable tie-break. Fashion had three relevant originals after an unrelated gardening item was removed from that category, so three new articles complete its six.

The 32 unselected article files remain byte-for-byte unchanged in archived-articles/ inside the backup ZIP. The backup also contains all 423 files of the supplied Journopulse/demo/Journopulse/ website subtree, including original assets and repository metadata. They were compared against the supplied archive. The original Downloads ZIP was not modified; other outer project folders remain available there.

Category corrections include banking explainers to Bancrédito, UAE oil coverage to Business, Natanz and the papal encyclical to World, World Cup coverage to Sports and José Ortiz coverage to Puerto Rico. The retained article URLs remain intact.

## Checks

- Exactly 54 active article pages and six unique articles per category.
- Original CSS hashes match the supplied files.
- 99 HTML pages and 11,142 internal references checked; zero broken internal references.
- All article titles, publication dates and source citations match the editable data.
- RSS and article sitemap each include exactly 54 articles.
- All 54 post pages use BlogPosting metadata; no NewsArticle or NewsMediaOrganization declarations remain.
- Blog labels, source links and publication history are preserved without altering the original theme CSS.
- No archived article HTML files or article links in the active site.
- Search verified: one Artemis result, 54 after clearing, six in Fashion, and a useful empty state.
- Original homepage and post layouts inspected in the browser.
- 221 template placeholder images replaced across 55 pages, including light and dark variants; zero remaining template image placeholders.
- All 32 archived articles and 423 original files verified unchanged; backup ZIP integrity passed.

## Handoff

Unzip JournoPulse-updated.zip and preview site/index.html. Publish only site/ as a replacement deployment. Editable article data and an original-template builder are included. No live deployment was performed.

The revision used AI assistance. It does not invent reporter credentials, original interviews or a verified legal owner. The new artwork is conceptual illustration. Original external font/icon dependencies remain documented in README.md.
