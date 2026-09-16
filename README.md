<div align="center">
  <a href="https://github.com/mathcelo/page">
    <img src="public/portrait.webp" alt="Marcelo Morales" width="112" height="112" />
  </a>

  <h1 align="center">mathcelo</h1>

  <p align="center">
    A personal site and writing space for Marcelo Morales.
    <br />
    <a href="#about-the-project"><strong>Explore the project »</strong></a>
    <br />
    <br />
    <a href="#getting-started">Get started</a>
    ·
    <a href="https://github.com/mathcelo/page/issues">Report a bug</a>
    ·
    <a href="https://github.com/mathcelo/page/issues">Request a feature</a>
  </p>
</div>

## Table of Contents

- [About the project](#about-the-project)
  - [Built with](#built-with)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## About the project

This repository contains the source for mathcelo: a portfolio for security work, projects, publications, and occasional notes. It is a statically exported Next.js site, with a content-first layout built in Tailwind CSS.

Résumé content lives in [`src/content/resume.ts`](src/content/resume.ts), while each internal blog post is an MDX file in [`src/content/blog/`](src/content/blog/).

### Built with

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MDX](https://mdxjs.com/)
- [pnpm](https://pnpm.io/)

## Getting started

Follow these steps to run the site locally.

### Prerequisites

- Node.js 22 or later
- [pnpm](https://pnpm.io/installation) 10 or later

### Installation

1. Clone the repository.

   ```bash
   git clone https://github.com/mathcelo/page.git
   cd page
   ```

2. Install dependencies.

   ```bash
   pnpm install
   ```

3. Start the development server.

   ```bash
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

Run the project checks before opening a pull request:

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm test
```

Create a new MDX blog post with:

```bash
pnpm new-post "My New Blog Post"
```

The command creates a dated draft under `src/content/blog/`. Add an excerpt, tags, and the post body before publishing it.

To produce the static deployment output locally:

```bash
pnpm build
```

The generated site is written to `out/`.

## Deployment

Pushes to `main` run the GitHub Actions workflow in [`.github/workflows/main.yml`](.github/workflows/main.yml). It builds the static site, synchronizes `out/` to Amazon S3, and invalidates the configured CloudFront distribution.

Configure these repository secrets before deploying:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `S3_BUCKET`
- `CLOUDFRONT_DISTRIBUTION_ID`

## Contributing

1. Fork the repository and create a branch from `main`.
2. Make the change and run the checks listed above.
3. Open a pull request with a clear description of the change.

## Contact

Marcelo Morales — [LinkedIn](https://www.linkedin.com/in/mathcelo/) · [GitHub](https://github.com/mathcelo)

Project link: [github.com/mathcelo/page](https://github.com/mathcelo/page)

## Acknowledgments

- [Best-README-Template](https://github.com/othneildrew/Best-README-Template) for the README structure.
