# JournoPulse Blog — original design retained

This version keeps the supplied JournoPulse design, logo, colors, typography and page layouts. The original style.css and detail.css are unchanged, verified by SHA-256. Small additions style the new source/revision notes and working search form.

JournoPulse is now presented as a blog of explainers, context and perspectives. The site contains 54 posts: six in each of the nine categories. 51 originals were revised and three Fashion posts added. The other 32 original articles are preserved unchanged in the separate backup ZIP.

## Blog positioning

Homepage and category labels, the footer, About page and publishing information describe a blog. Post metadata uses [Schema.org BlogPosting](https://schema.org/BlogPosting), and the homepage uses [Blog](https://schema.org/Blog). The regular sitemap and RSS feed remain; the Google News sitemap has been removed. Existing post URLs, source links and original publication dates are preserved. A September 18–21 content and illustration pass adds reader-focused explanations and records corrections separately from the September 17 source revision. This conversion does not install WordPress or an admin dashboard.

The original newsletter box now links to the RSS feed, so it provides a working way to follow posts without collecting email addresses. Secondary template cards use matching post descriptions, images and bylines.

All template image placeholders in banners, newsletter panels and former advertising slots now use the existing editorial illustrations, including dark-mode versions. The image slots keep their original dimensions. Former ad slots are labeled as illustrated blog posts and link to the corresponding article.

## Preview

Open site/index.html in a browser. For a local web preview, run `python -m http.server 8766 --directory site` from this folder, then visit http://127.0.0.1:8766/. The website is ready-to-use static HTML and needs no build step.

## Publish

Deploy only the contents of site/ as the website root, replacing the previous deployment as a whole. Overlaying these files on the old deployment would leave old article files accessible. Keep source-code/ and the backup ZIP out of the public site. No live deployment was performed.

Vercel configuration is included, using the existing domain https://www.journopulse.com, clean URLs and category/policy routes. On another host, configure extensionless requests to resolve to matching .html files. Internal .html links work directly. The original Google site-verification file is preserved.

## Editing

The editable articles are in source-code/articles.json. The active category is `group`; `category` records the old location. Each article has its stable URL path, original publication date, revised title and body, sources and revision notes. Existing article URLs are preserved even when a category was corrected. The 54 illustrations and their manifest are in source-code/illustrations/. Illustration-prompts.json records the exact prompts and the corresponding public asset paths.

To regenerate the site, use Python 3.10+ with lxml installed, then run `python source-code/build_site.py`. It uses the supplied original templates in source-code/source/ and writes site/. Python and lxml are only needed for rebuilding, not viewing or hosting. The source templates are included for reproducibility; their older text is replaced by articles.json during the build.

The builder enforces this edition's 54-post, six-per-category count. It regenerates RSS and regular sitemaps directly from the post data on every build. Hosting configuration and robots.txt are included under source-code/feeds/. Update publication and revision dates accurately for future editions. If retiring posts in a future edition, generate into a fresh site directory to avoid stale output files.

Original theme CSS contains some external font/icon references. Those remain part of the original design and require the relevant services to be reachable. Obsolete WordPress scripts that requested unavailable remote chunks were replaced with small local controls for search, mobile navigation, theme switching and printing. No account or subscription backend is claimed.

## Editorial scope

All 54 posts identify their sources and include a dated publication/revision note. Original publication dates were preserved separately from revision dates. Posts about historical events are explicitly dated; a blog presentation update does not establish new developments.

The revision used AI assistance and does not claim original interviews or a human newsroom review. Every selected post now has its own AI-generated editorial illustration, produced with the built-in image generation tool. These conceptual scenes are labeled and are not photographs or evidence of real events. Article images, preview thumbnails and sharing images use the same artwork. The original logo and interface graphics are retained. Publisher ownership and staff credentials were not invented. The original editorial email is retained; mailbox access was not tested.

## Records

Revision-report.md explains the counts and checks. Article-revision-log.md records the first revision. Content-pass-report.md and content-pass-log.json cover the September 18–21 pass, including selected source rechecks. Illustration-prompts.json records all 54 illustration prompts and asset hashes. article-manifest.json records all 83 original articles, selection status and original hashes. validation.json records automated checks. The separate JournoPulse-original-backup.zip contains the full supplied website subtree and an explicit 32-article archive.
