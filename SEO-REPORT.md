# The Social Orbit SEO Audit & Completion Report

**Audit date:** 2026-11-24  
**Site:** https://www.thesocialorbit.in/  
**Project scope:** Static website source plus live deployment validation. The new website was deployed from GitHub commit `c8697ab`; a follow-up canonical and sitemap correction is committed locally as `8fa9385` but is not yet visible on GitHub.

## Initial audit — before implementation

### Architecture and verified public routes

- The project is a static, multi-page HTML site with shared CSS and vanilla JavaScript; it has a Vercel-style Node serverless chat handler at `api/chat.js`.
- The workspace contains nine HTML pages: `index.html`, `about.html`, `services.html`, `work.html`, `team.html`, `clients.html`, `process.html`, `contact.html`, and `calculator.html`.
- The primary content is present in HTML and is crawlable without JavaScript. JavaScript builds shared navigation/footer chrome and handles the estimator, contact form, chat, video dialog, and portfolio filters.
- All nine local `.html` files returned HTTP 200 on the local static preview.
- The initial audit recorded clean URLs as working. After deployment, live verification found the extensionless routes return HTTP 404 while the existing `.html` routes return HTTP 200. Routing was not changed; canonicals and sitemap entries were corrected to match the served routes.
- A nonexistent production path returned HTTP 404.
- No package manifest, build script, or automated test configuration is present in the workspace.

### Baseline metadata and indexability

- All nine pages have a unique `<title>` and a unique meta description. Existing titles range from 22–78 characters; descriptions range from 101–152 characters.
- Each page has one H1. The homepage and About page include an H3 before an H2; this is a heading-order concern, but changing heading markup could affect the existing presentation, so visible markup was not changed during the audit.
- No page has a canonical link, robots meta directive, Open Graph metadata, Twitter Card metadata, or JSON-LD structured data.
- The project has no `robots.txt` or `sitemap.xml`.
- On production, `/sitemap.xml` returned 404. `/robots.txt` returned a content-signal document but no conventional crawler allow/disallow rules or sitemap declaration.
- The public pages are indexable by default; no global `noindex` directive was found.

### Content, images, links, and rendering

- The nine pages contain 429 `<img>` elements. All have an `alt` attribute. Empty alts are used on decorative/hidden artwork and the duplicated, `aria-hidden` client-logo carousel set; the visible client-logo set has descriptive alt text.
- No image has explicit `width` and `height` attributes. There are 362 local image references (287 unique local files) and 67 externally hosted image references.
- There are 309 lazy-loaded images, all on the work page. Most below-the-fold images on the other pages are eager-loaded.
- A static check found no broken local HTML `href`/`src` references. External links and third-party media were not exhaustively checked.
- All pages include a mobile viewport declaration. Main page copy is server-rendered HTML; client-side navigation/footer rendering does not gate the primary content.
- A number of inline hero background URLs use `../images/...` while the source files live under `assets/images/`. This may resolve incorrectly at the deployed clean URLs. Fixing those URLs could make existing artwork appear where it currently does not, so it is held for visual review rather than silently changed in this SEO-only pass.

### Performance baseline

- CSS is approximately 80 KB and the shared JavaScript approximately 40 KB. Local font files are small and already use `font-display: swap`.
- The site has two autoplaying, muted preview videos (approximately 3.55 MB and 2.49 MB); both use `preload="metadata"` and a poster.
- 39 unique referenced local images exceed 500 KB. The largest are a 4800×2700 poster (~4.50 MB), a 6912×10368 poster (~2.90 MB), and a 768×960 poster (~1.31 MB). Several campaign graphics are also around 0.8–0.9 MB.
- No Core Web Vitals lab or field measurements were available during the audit. No LCP, INP, or CLS score is claimed.

### Baseline checklist

| Check | Baseline |
|---|---|
| Existing pages/routes inventoried | PASS |
| Unique titles and descriptions | PASS |
| One H1 per page | PASS |
| Mobile viewport tags | PASS |
| Local HTML references resolve | PASS |
| Canonical URLs | FAIL — absent |
| Robots directives and sitemap reference | FAIL — absent from project |
| Production XML sitemap | FAIL — 404 |
| Open Graph and Twitter metadata | FAIL — absent |
| Structured data | FAIL — absent |
| Image intrinsic dimensions | FAIL — absent |
| Core Web Vitals measured | NEEDS REVIEW |
| External links and media exhaustively checked | NEEDS REVIEW |
| Search Console ownership/index status | NEEDS REVIEW — no account access |

## Implementation and final validation

### Changes implemented

- Added a unique title, description, canonical URL, `index, follow` directive, Open Graph title/description/image/URL, and Twitter large-image card metadata to each of the nine existing pages.
- After deployment revealed that extensionless URLs return 404, canonicals, Open Graph URLs, and sitemap entries were corrected to use the existing `.html` routes. Existing routes were not changed.
- Added root `robots.txt` rules that allow public crawling and reference the sitemap. No private paths were found that require a crawl block; the public chat endpoint was not blocked.
- Added `sitemap.xml` with the nine public canonical routes. `lastmod` is intentionally omitted because no reliable deployment modification dates are available.
- Added `Organization`, `WebSite`, and homepage `WebPage` JSON-LD using verified site name, domain, public contact details, and Mumbai/Dubai service areas.
- Added a `Service` JSON-LD entity to the Services page for the services already described there.
- Did not add `LocalBusiness` because no verified public street address is available. Did not add `BreadcrumbList` because there is no visible breadcrumb UI, or `VideoObject` because verified upload dates and dedicated video-page details are unavailable.
- Added exact intrinsic `width` and `height` values to 362 local image references. The 67 third-party image references were left without dimensions rather than guessing.
- Added native lazy loading to 102 additional below-the-fold images. There are now 411 lazy-loaded images out of 429; first-section imagery remains eager-loaded. Existing image files were not altered.
- No visible copy, headings, styling, scripts, navigation, forms, buttons, images, videos, or routes were changed.

### Page metadata and keyword mapping

| Page | Canonical URL | SEO title | Meta description | Primary topic / keyword mapping |
|---|---|---|---|---|
| Home | `https://www.thesocialorbit.in/` | The Social Orbit \| Ad Film & AI Film Production Company Mumbai | The Social Orbit is a Mumbai-based film production company specializing in ad films, TVCs, AI ad films, brand films, VFX, CGI, editing and post-production. | Ad film production company in Mumbai; AI ad film production; video production company Mumbai |
| About | `https://www.thesocialorbit.in/about.html` | About The Social Orbit \| Film Production Company Mumbai | Learn about The Social Orbit, a film production and post-production company based in Mumbai and serving brands across India and Dubai. | Film production company India; Mumbai production company; Dubai market |
| Services | `https://www.thesocialorbit.in/services.html` | Film Production & Post-Production Services \| The Social Orbit | Explore ad films, AI ad films, TVCs, corporate films, VFX, CGI, editing, color grading, motion graphics, branding, web development and AI automation. | Ad films, AI films, TVCs, corporate/brand films, VFX/CGI, editing, color grading, DI, motion graphics, 3D animation, branding, web development, AI automation |
| Work | `https://www.thesocialorbit.in/work.html` | Ad Film & Video Production Portfolio \| The Social Orbit | View ad films, TVCs, brand films, VFX, editing, color grading, social campaigns and digital projects from The Social Orbit. | Advertising film production; commercial film production; brand film portfolio |
| Team | `https://www.thesocialorbit.in/team.html` | Film Production Team in Mumbai \| The Social Orbit | Meet The Social Orbit team behind film production, editing, color, motion, marketing, web development and AI projects. | Film production team Mumbai; production company India |
| Clients | `https://www.thesocialorbit.in/clients.html` | Clients & Brand Campaigns \| The Social Orbit | Explore The Social Orbit's client brands and campaign work across film production, advertising, post-production and digital services. | Brand campaigns; advertising production |
| Process | `https://www.thesocialorbit.in/process.html` | Film Production Process \| The Social Orbit Mumbai | See how The Social Orbit takes film and digital projects from brief and creative direction through production, post-production and delivery. | Film and commercial production process |
| Contact | `https://www.thesocialorbit.in/contact.html` | Contact The Social Orbit \| Ad Film Production Mumbai | Contact The Social Orbit in Mumbai to discuss ad films, TVCs, AI films, corporate videos, post-production, VFX, branding or digital services. | Ad film makers Mumbai; contact and production enquiries |
| Estimator | `https://www.thesocialorbit.in/calculator.html` | Film Project Estimator \| The Social Orbit Mumbai | Plan a film, post-production, marketing or digital project with The Social Orbit's interactive project estimator. | Film production estimator; production planning |

Each page has its own description and matching Open Graph/Twitter descriptions. The homepage uses the exact title and description supplied in the SEO brief. Keywords are confined to metadata and structured data; no visible copy was rewritten.

### Validation results

| Check | Result | Notes |
|---|---|---|
| Nine page titles and descriptions unique | PASS | Titles are 44–62 characters; descriptions are 113–155 characters. |
| Canonical and robots metadata on each page | PASS | All nine source pages have one expected canonical and `index, follow`. |
| Open Graph and Twitter metadata | PASS | All nine pages have page-specific titles, descriptions, URLs, and existing image assets. |
| JSON-LD syntax | PASS | Both JSON-LD blocks parse as JSON. External Google/schema validators were not run. |
| Sitemap XML | PASS locally | XML parses and contains exactly the nine canonical URLs. |
| Robots configuration | PASS locally | Allows public crawling and references the sitemap. |
| Local routes and SEO files | PASS | All nine `.html` pages, `robots.txt`, and `sitemap.xml` return HTTP 200 on the local server; an unknown path returns 404. |
| Production route behavior | NEEDS FOLLOW-UP DEPLOYMENT | The deployed `.html` routes return HTTP 200; extensionless routes return 404. Canonicals have been corrected in local follow-up commit `8fa9385`. |
| Production sitemap | NEEDS FOLLOW-UP DEPLOYMENT | The deployed sitemap is available but lists extensionless URLs that return 404. Local sitemap entries now use the valid `.html` routes. |
| Production robots file | PASS | The deployed file allows public crawling and references the sitemap. |
| Vercel chat endpoint | NEEDS REVIEW | `GET /api/chat` returns the expected 405, confirming the function is deployed. No billable POST was sent. The local handler now supports ordered Gemini, OpenAI, Claude, and Nemotron fallback using `AI_PROVIDER_ORDER` and each provider's server-side key/model; redeploy these changes before using fallback in production. |
| Image alt attributes | PASS | No missing `alt` attributes; empty values are on decorative or hidden duplicate imagery. |
| Image dimensions and lazy loading | PASS WITH LIMITATION | 362 local image references have exact dimensions; 67 remote image references remain unknown. First-section images stay eager. |
| Broken local HTML references | PASS | No broken local `href`/`src` references were found in the baseline scan. |
| Visual and interaction regression | NEEDS REVIEW | Only head metadata and image loading/dimension attributes changed; CSS and JavaScript are untouched. No full browser screenshot comparison or form/animation/WhatsApp interaction test was run. |
| Core Web Vitals | NEEDS REVIEW | No Lighthouse lab run, CrUX data, or Search Console field data was available. |
| Search Console ownership/index status | NEEDS REVIEW | No Search Console account access was available; no indexing claim is made. |

### Performance and image findings

- The project references 39 unique local images larger than 500 KB. The largest measured files include a 4800×2700 poster (~4.50 MB), a 6912×10368 poster (~2.90 MB), and a 768×960 poster (~1.31 MB).
- The two local preview videos are approximately 3.55 MB and 2.49 MB and already use `preload="metadata"` with posters.
- The stylesheet is approximately 80 KB and the JavaScript approximately 40 KB. Local font faces already use `font-display: swap`.
- No images or videos were recompressed or replaced because the brief prohibits changing existing media. Consider creating appropriately sized WebP/AVIF derivatives in a separately approved performance pass; preserve the originals and visual quality.
- The primary first-section images were not lazy-loaded. The page uses visible hero imagery and autoplay previews, so actual LCP should be measured with Lighthouse and CrUX after deployment rather than inferred from source.

### Remaining issues and recommendations

- Several hero sections use inline `url('../images/...')` paths while the assets are under `/assets/images/`. The corresponding `/images/...` production URLs return 404, while `/assets/images/...` returns 200. Correcting these paths may make previously absent artwork visible, so this was not changed under the strict no-visual-change requirement. Review and approve separately.
- The new website is live from GitHub commit `c8697ab`. The follow-up canonical and sitemap correction (`8fa9385`) is not yet present on GitHub; the live sitemap still points at extensionless routes that return 404.
- After pushing the follow-up commit, confirm all nine sitemap URLs return HTTP 200 and each page has a self-referencing canonical. The site uses existing `.html` URLs; no routing behavior was changed.
- No Search Console property was added, no sitemap was submitted, and no indexing status was confirmed.
- For local visibility, keep the same public phone/email and Mumbai service area across the site and any eligible business profiles. Consider a Google Business Profile only if the business meets Google's current eligibility requirements. Choose the closest currently available primary category (for example, a video-production category if offered), add only accurate production/post-production services, use the real Mumbai business address/service area, and do not create an unstaffed Dubai listing.

### Google Search Console setup

1. In Google Search Console, add a **Domain** property for `thesocialorbit.in` to cover both `www` and non-`www`, HTTP and HTTPS variants.
2. Verify ownership by adding the DNS TXT record Google provides at the domain's DNS host, then click **Verify**. Do not remove the record after verification.
3. After the follow-up commit is deployed, open `https://www.thesocialorbit.in/robots.txt` and `https://www.thesocialorbit.in/sitemap.xml` and confirm their contents and HTTP 200 status.
4. In Search Console, open **Sitemaps**, submit `sitemap.xml`, and review the processing result.
5. Use **URL Inspection** for `https://www.thesocialorbit.in/`. Run **Test Live URL**, confirm crawling is allowed and the user-declared canonical is the expected URL, then request indexing if appropriate.
6. Inspect representative service, work, and contact URLs. Monitor **Page indexing**, **Sitemaps**, **Core Web Vitals**, **Manual actions**, and **Search results** over time. Indexing and ranking are not guaranteed.

### Final checklist

- [x] Baseline audit documented before source changes.
- [x] Every existing public page has unique metadata and a canonical.
- [x] Sitemap and robots files created and validated locally.
- [x] JSON-LD added only for supported organization/site/service entities.
- [x] Existing visual copy and media files preserved.
- [x] Local source routes and sitemap/robots files return expected statuses.
- [x] Deploy the new website to Vercel from GitHub (`c8697ab`); the site and standard robots file return HTTP 200.
- [ ] Push the route-aware canonical/sitemap correction (`8fa9385`) and verify all sitemap URLs return HTTP 200.
- [ ] Run a browser-level visual and interaction regression review.
- [ ] Measure Core Web Vitals and validate structured data with Google's tools.
- [ ] Verify and submit through Google Search Console.
