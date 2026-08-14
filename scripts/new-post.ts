import { writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const CONTENT_DIR = "src/content/blog";

interface PostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}

function generateFrontmatter(frontmatter: PostFrontmatter): string {
  return `---
title: ${frontmatter.title}
date: ${frontmatter.date}
excerpt: ${frontmatter.excerpt}
tags: []
---

`;
}

function createPost(title: string): void {
  const slug = slugify(title);
  const filename = `${slug}.mdx`;
  const filepath = join(CONTENT_DIR, filename);

  if (existsSync(filepath)) {
    console.error(`Error: Post already exists at ${filepath}`);
    process.exit(1);
  }

  const frontmatter: PostFrontmatter = {
    title,
    date: formatDate(new Date()),
    excerpt: "",
    tags: [],
  };

  writeFileSync(filepath, generateFrontmatter(frontmatter));
  console.log(`Created: ${filepath}`);
}

const title = process.argv.slice(2).join(" ");

if (!title) {
  console.error("Usage: pnpm new-post <title>");
  console.error('Example: pnpm new-post "My New Blog Post"');
  process.exit(1);
}

createPost(title);
