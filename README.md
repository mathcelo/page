# marcelo.quest

My personal website and blog — built with Next.js, MDX, and Tailwind CSS, deployed to AWS via S3 + CloudFront.

## What's in here

- **Home** — landing page with bio, contact info, and a fun hover animation
- **About** — academic and professional background
- **Research** — publications and research work (cybersecurity & blockchain)
- **Blog** — posts written in MDX with syntax highlighting via Shiki

## Tech stack

- **Framework**: Next.js 15 (App Router) + React 19
- **Content**: MDX with `next-mdx-remote`, `rehype-pretty-code`, and `rehype-slug`
- **Styling**: Tailwind CSS + `@tailwindcss/typography`
- **Deployment**: GitHub Actions → S3 + CloudFront cache invalidation

## Getting started

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Deployment

Pushes to `main` automatically trigger a build and deploy via GitHub Actions — the workflow builds the site, syncs to S3, and invalidates the CloudFront distribution.
