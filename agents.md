# agents.md — ktar.dev Site Guide

This is a Jekyll-based portfolio and blog site deployed to GitHub Pages at `ktar.dev`.

---

## Building the Site

### Prerequisites

- Ruby (2.x recommended for Jekyll 3.2.1)
- Bundler gem: `gem install bundler`

### Install dependencies

```bash
bundle install
```

### Serve locally

```bash
bundle exec jekyll serve
```

Opens at `http://localhost:4000`. Jekyll watches for changes and rebuilds automatically.

### Build for production

```bash
bundle exec jekyll build
```

Output goes to `_site/`. This directory is gitignored; GitHub Pages builds from source automatically on push to `master`.

---

## Adding a Blog Post

1. Create a new file in `_posts/` named: `YYYY-MM-DD-slug-title.md`

2. Add front matter at the top:

```yaml
---
layout: post
title: "Your Post Title"
date: 2025-01-15
excerpt: "One or two sentence description shown in listings."
img: https://i.imgur.com/example.png   # thumbnail/header image
tag:
  - Game Development
  - Unity
comments: false
---
```

3. Write content in Markdown below the front matter.

**Optional front matter fields:**

| Field | Description |
|---|---|
| `project: true` | Shows post on the /projects/ page as a card |
| `github: "https://github.com/..."` | Adds a GitHub link to the post header |
| `mathjax: true` | Enables MathJax equation rendering |
| `comments: true` | Enables Disqus comments section |

### Embedding a YouTube video

```html
<iframe width="640" height="360" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```

### Code blocks with syntax highlighting

Use fenced code blocks with a language tag:

````markdown
```java
public class Example {
    // code here
}
```
````

Syntax highlighting is handled by Rouge — supported languages include java, python, js, csharp, cpp, bash, yaml, etc.

---

## Adding a Project Post

Project posts appear on the `/projects/` grid page in Material Design cards. They are regular blog posts with one extra front matter field:

```yaml
---
layout: post
title: "My Game Project"
date: 2025-03-01
excerpt: "Short description shown on the card."
project: true
img: https://i.imgur.com/example.png
github: "https://github.com/Ktar5/my-project"
tag:
  - Game Development
  - Java
comments: false
---
```

The `img` URL is used as the card thumbnail on `/projects/`. Prefer a 16:9 aspect ratio image.

---

## Adding Assets

### Images

Place images in `assets/img/`. Reference them in posts as:

```markdown
![Alt text](/assets/img/my-image.png)
```

For external images (e.g., imgur), link directly in Markdown or use the URL in front matter `img:` field.

### PDFs

Place PDFs in `assets/`. The resume is at `assets/CarterGalePublicResume.pdf`. Update the `resume` field in `_config.yml` if you rename or replace it:

```yaml
resume: CarterGalePublicResume.pdf
```

### Favicons

Favicon files live in `assets/img/favicons/`. The manifest is at `assets/img/favicons/manifest.json`. To update the favicon, replace the files there in all required sizes.

---

## Updating the Resume

1. Replace `assets/CarterGalePublicResume.pdf` with the new file (keep the same filename, or update `_config.yml`).
2. Commit and push — GitHub Pages will serve the new file immediately.

---

## Site Configuration

Key settings are in [`_config.yml`](_config.yml):

```yaml
title:        # Site title
description:  # Bio/tagline shown on homepage
url:          # "https://ktar.dev"
resume:       # PDF filename in assets/
disqus-shortname: ktar5
reading_time: true   # show estimated read time on posts
words_per_minute: 200
```

**Social links** are defined under the `author` block and rendered by [`_includes/social-links.html`](_includes/social-links.html).

**Navigation** (top nav links) is defined in [`_data/navigation.yml`](_data/navigation.yml).

---

## Tags

Add tags to any post via the `tag:` front matter list. The tag index page at `/tags/` auto-generates from all tags in use — no additional files needed.

---

## Layout Reference

| Layout | Used for |
|---|---|
| `home` | Homepage (`index.html`) |
| `post` | Blog posts and project posts |
| `project` | `/projects/` grid page |
| `page` | Static pages (About) |
| `resume` | `/resume/` page |
| `post-list` | `/posts/` listing |

---

## Deployment

Push to `master` — GitHub Pages automatically builds and deploys the site. The custom domain is set via [`CNAME`](CNAME) (`ktar.dev`).

There is no CI pipeline; builds happen server-side on GitHub's Jekyll build system.

---

## Styles

SASS source lives in `_sass/`. The entry point is `assets/css/main.scss`, which imports all partials. Key files:

- `_variables.scss` — colors, fonts, breakpoints
- `_typography.scss` — heading and body text styles
- `_elements.scss` — buttons, tables, blockquotes
- `_syntax.scss` — code block colors

Jekyll compiles SASS automatically during `jekyll build/serve`. Do not edit `assets/css/styles.css` directly; it is a vendored Material Design Lite stylesheet.
