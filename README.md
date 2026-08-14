# marcelo.quest

My personal website and blog — built with Next.js, MDX, and Tailwind CSS, deployed to AWS via S3 + CloudFront.

## What's in here

- **Home** — hero with bio and a hover animation on the portrait
- **About** — timeline, publications, projects, skills, and achievements
- **Blog** — posts written in MDX with syntax highlighting via `rehype-highlight`

Page content is driven by `src/content/resume.ts`; blog posts live in
`src/content/blog/*.mdx`.

## Tech stack

- **Framework**: Next.js 15 (App Router) + React 19
- **Content**: MDX with `next-mdx-remote`, `rehype-highlight`, and `rehype-slug`
- **Styling**: Tailwind CSS + `@tailwindcss/typography`, Space Grotesk + JetBrains Mono
- **Deployment**: GitHub Actions → S3 + CloudFront cache invalidation

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Creating a new blog post

```bash
pnpm new-post "My New Blog Post"
```

This creates a new MDX file in `src/content/blog/` with the title slugified as the filename
and today's date in the frontmatter.

## Deployment

Pushes to `main` automatically trigger a build and deploy via GitHub Actions — the workflow builds the site, syncs to S3, and invalidates the CloudFront distribution.
