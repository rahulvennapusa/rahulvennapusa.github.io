---
title: Portfolio Site Rebuild — Bootstrap 5 CDN
date: 2026-06-12
status: approved
---

## Goal

Rebuild `index.html` and `blog.html` as proper HTML5 documents using Bootstrap 5 CDN. Fix all known bugs. Preserve all existing content exactly. No build tools.

## Constraints

- Static HTML only (GitHub Pages)
- No content changes (text, dates, bio unchanged)
- No jQuery
- No local framework assets — CDN only for Bootstrap/FontAwesome/Fonts

## Dependencies (CDN)

| Asset | Version | URL |
|---|---|---|
| Bootstrap CSS | 5.3 | `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css` |
| Bootstrap JS Bundle | 5.3 | `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js` |
| Font Awesome | 6.5 | `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css` |
| Google Fonts | — | Saira Extra Condensed (400,700) + Open Sans (400,600) |

Local files kept: `resources/css/about.css`, `resources/js/about.js`, `resources/blog-home.css`, all images.

## index.html Changes

### Structure
- Single `<!DOCTYPE html>` → `<html>` → `<head>` + `<body>`. Remove all nested `<html>` wrappers (17 instances).
- Remove duplicate top navbar (conflicts with fixed side nav).

### Head
- `<meta name="description">` — filled with role/skills summary
- `<meta name="author" content="Rahul Vennapusa">`
- OG tags: `og:title`, `og:description`, `og:type=profile`, `og:image` → `resources/images/profile.jpg`
- Google Fonts `<link preconnect>` + stylesheet
- Bootstrap 5.3 CSS CDN
- Font Awesome 6 CSS CDN
- Remove: local bootstrap CSS, font-awesome CSS, devicons CSS, simple-line-icons CSS

### Body — Bug Fixes
| Bug | Fix |
|---|---|
| `<footer style=" background-color: black;>` | Close quote: `style="background-color: black;"` |
| `<h8 class="card-title">` × 12 | → `<h6 class="card-title">` |
| `alt="Lowe?s"` + `Lowe?s` text | → `Lowe&#8217;s` |
| Duplicate scripts lines 500–501 | Delete entire block |
| Devicons skill icons | Replace with Font Awesome 6 equivalents |

### Body — Security / Best Practice
| Item | Change |
|---|---|
| Social links (FB/Twitter/LinkedIn/GitHub) | Add `target="_blank" rel="noopener noreferrer"` |
| Project `target="_blank"` links × 8 | Add `rel="noopener noreferrer"` |
| `http://www.apc.com/us/en/` | → `https://www.apc.com/us/en/` |
| `http://www.eddiebauer.com` | → `https://www.eddiebauer.com` |

### JavaScript
- `about.js` rewritten: remove jQuery dependency entirely.
  - Smooth scroll: CSS `scroll-behavior: smooth` on `html` element.
  - ScrollSpy: Bootstrap 5 native (`data-bs-spy="scroll" data-bs-target="#sideNav"` on `<body>`).
  - Mobile collapse: Bootstrap 5 native (data attributes, no JS needed).
  - Remove dead carousel code.
- Remove scripts: local jquery, local bootstrap.bundle (both copies).
- Add: Bootstrap 5 bundle CDN (single script at end of body).

## blog.html Changes

### Structure
- Single `<!DOCTYPE html>` → `<html>` → `<head>` + `<body>`. Remove broken `</body></html>` at line 222.

### Head
- Same meta/OG/font pattern as index.html
- Remove fingerprinted Twitter button script (`button.550007e6cc79c00bac51111d8131d860.js`)
- Bootstrap 5.3 CSS CDN (replaces `./resources/css/bootstrap.min.css`)
- Font Awesome 6 CDN (replaces `https://use.fontawesome.com/releases/v5.1.0/css/all.css`)

### Body
- Footer quote fixed: `style="background-color: black;"`
- Twitter "Updates" sidebar card: remove broken iframe + 3× script loads. Replace with plain `<a href="https://twitter.com/VRahul1719" target="_blank" rel="noopener noreferrer">Follow @VRahul1719 on X</a>`.
- All "Read More" + category links: add `rel="noopener noreferrer"` (already have `target="_blank"`).
- Duplicate script block removed; single Bootstrap 5 bundle at end of body.
- `resources/blog-home.css` path kept unchanged (file lives at `./resources/blog-home.css`).

## about.css Changes

- Add `html { scroll-behavior: smooth; }` at top.
- No other changes — existing rules are Bootstrap 5 compatible.

## Files Changed

- `index.html` — full rewrite preserving all content
- `blog.html` — full rewrite preserving all content
- `resources/js/about.js` — remove jQuery, use BS5 native + CSS smooth scroll
- `resources/css/about.css` — add `scroll-behavior: smooth` line only
