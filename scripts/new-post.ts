import { writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const CONTENT_DIR = "src/content/blog";

interface PostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}

export function generateFrontmatter(frontmatter: PostFrontmatter): string {
  return `---
title: ${frontmatter.title}
date: ${frontmatter.date}
excerpt: ${frontmatter.excerpt}
tags: []
---

`;
}

export function createPost(title: string, contentDirectory: string = CONTENT_DIR): string {
  const slug = slugify(title);
  const filename = `${slug}.mdx`;
  const filepath = join(contentDirectory, filename);

  if (existsSync(filepath)) {
    throw new Error(`Post already exists at ${filepath}`);
  }

  const frontmatter: PostFrontmatter = {
    title,
    date: formatDate(new Date()),
    excerpt: "",
    tags: [],
  };

  writeFileSync(filepath, generateFrontmatter(frontmatter));
  return filepath;
}

function runCli(): void {
  const title = process.argv.slice(2).join(" ");

  if (!title) {
    console.error("Usage: pnpm new-post <title>");
    console.error('Example: pnpm new-post "My New Blog Post"');
    process.exit(1);
  }

  try {
    console.log(`Created: ${createPost(title)}`);
  } catch (error) {
    console.error(`Error: ${error instanceof Error ? error.message : String(error)}`);
    process.exit(1);
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runCli();
}
