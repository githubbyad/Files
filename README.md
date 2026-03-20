Here is the complete MD compliance checklist followed for #133:

| # | Check | Where to apply | Status indicator |
|---|---|---|---|
| 1 | Every article card has `data-cms-article-id="{{ArticleId}}"` | H1, H2, H4, H5, Preview, Section, Edition, Photo Gallery, Directory Page 2 | ✅ if present on repeating card div/article |
| 2 | Article detail has `data-cms-type="article"` + `data-cms-id="{{ArticleId}}"` | ArticleValues container div | ✅ if both present |
| 3 | Directory detail has `data-cms-type="article"` + `data-cms-id="{{DetailID}}"` | DirectoryPage3 wrap div | ✅ if both present |
| 4 | Section container has `data-cms-el="section"` + `data-cms-section="{{SubMenuId}}"` | SectionValues container div | ✅ if both present and SubMenuId is dynamic |
| 5 | Highlights have `data-cms-el="highlight"` + `data-cms-highlight="N"` | Highlight block wrapper div | ✅ if both present with correct number |
| 6 | Ad groups have `data-cms-el="adgroup"` + `data-cms-adgroup="N"` | Ad block wrapper div | ✅ if both present with correct number |
| 7 | Poll has `data-cms-el="poll"` + `data-poll-id="1"` | Poll wrapper div | ✅ if both present |
| 8 | Logo has `data-cms-el="logo"` | `.hpe-logo` div | ✅ if present |
| 9 | Preview has `data-cms-el="preview"` + `data-cms-preview="N"` | Preview block wrapper div | ✅ if both present with correct SubMenuId |
| 10 | Menus — no action needed | MenuGenerator handles automatically | ✅ always |
| 11 | Navbar uses `.navbar` or `.cus-nav` class | `<nav>` element | ✅ if class present |
| 12 | Footer uses `.cus-submenu-footer` class | Footer div | ✅ if class present |
| 13 | Buttons use `.btn-primary` class | Submit/action buttons | ✅ if class present |
| 14 | White text on dark uses `.text-white` class — not inline style | Any white text on dark background | ✅ if no `style="color:#fff"` |
| 15 | No inline `style="color:..."` or `style="background:..."` anywhere | All elements | ✅ if none found |
| 16 | Every section wrapped in `data-cms-block` div | All content blocks | ✅ if wrapper present |
| 17 | `data-cms-block` has correct ID using `{type}-{zone}-{position}` pattern | All block wrappers | ✅ if naming follows convention |
| 18 | `data-cms-block-label` present on every block | All block wrappers | ✅ if label present |
| 19 | Fixed blocks have `data-cms-block-fixed="true"` | Nav, Logo header, Footer | ✅ if attribute present |
| 20 | Content zones marked with `data-cms-zone` | Column divs | ✅ if zone attribute present |
| 21 | 3-column layout uses `sidebar-left` + `sidebar-right` zones | Left and right sidebar columns | ✅ if correct zone names used |
| 22 | Full-width H5 block is in `banner` zone | H5 row | ✅ if `data-cms-zone="banner"` wrapper present |
| 23 | Full-width previews/gallery below columns are in `bottom` zone | Preview rows | ✅ if `data-cms-zone="bottom"` wrapper present |
| 24 | Article cards have `position: relative` in CSS | `custom.css` | ✅ if `[data-cms-article-id] { position: relative; }` present |
| 25 | Live Editor bar offset in CSS | `custom.css` | ✅ if `body.cms-lb-active { padding-top: 48px !important; }` present |
| 26 | No `z-index` above 9990 anywhere | All CSS files | ✅ if highest value is below 9990 |
| 27 | No `pointer-events:none` on article card containers | All CSS | ✅ if not present on card containers |
| 28 | No blocks nested inside other blocks | Template HTML | ✅ if all blocks are siblings not parents |
| 29 | No CSS using adjacent sibling selectors between blocks | `custom.css` | ✅ if no `.block1 + .block2` patterns |
| 30 | `<span onclick>` not used instead of `<a>` for links | All HTML | ✅ if all clickable links use `<a>` tag |
