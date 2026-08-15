import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const BLOG_CONTENT_DIRECTORY = path.join(
  process.cwd(),
  'src',
  'content',
  'blog'
);

export interface Post {
  slug: string;
  content: string;
  title: string;
  /** ISO 8601 timestamp. */
  date: string;
  excerpt: string;
  tags: string[];
}

/** Frontmatter is arbitrary YAML, so every field is narrowed rather than cast. */
const readString = (value: unknown, fallback: string): string =>
  typeof value === 'string' ? value : fallback;

const readTags = (value: unknown): string[] => {
  if (Array.isArray(value)) {
    return value.filter((tag): tag is string => typeof tag === 'string');
  }
  // A single tag written without a list is a plausible slip; keep it rather
  // than discarding it silently.
  return typeof value === 'string' ? [value] : [];
};

/**
 * Normalises a frontmatter date to ISO 8601.
 *
 * gray-matter yields a Date for unquoted YAML dates and a string when quoted.
 * Anything unparseable throws with the filename, since a silent fallback would
 * either invent a date or fail later with no indication of which post is bad.
 *
 * Numbers are rejected deliberately: a bare `date: 2026` is YAML integer 2026,
 * which Date would read as 2026 milliseconds past the epoch and render as 1970.
 */
const readDate = (value: unknown, filename: string): string => {
  const parsed =
    value instanceof Date || typeof value === 'string'
      ? new Date(value)
      : new Date(Number.NaN);

  if (Number.isNaN(parsed.getTime())) {
    throw new Error(
      `${filename}: frontmatter 'date' is missing or unparseable`
    );
  }
  return parsed.toISOString();
};

/** Post filenames, excluding the archive/ subdirectory. */
export const listPostFilenames = (): string[] =>
  fs.readdirSync(BLOG_CONTENT_DIRECTORY).filter((name) => name.endsWith('.mdx'));

export const slugFromFilename = (filename: string): string =>
  filename.replace(/\.mdx$/, '');

export const readPost = (filename: string): Post => {
  const filePath = path.join(BLOG_CONTENT_DIRECTORY, filename);
  const { content, data } = matter(fs.readFileSync(filePath, 'utf8'));
  const slug = slugFromFilename(filename);

  return {
    slug,
    content,
    title: readString(data.title, slug),
    date: readDate(data.date, filename),
    excerpt: readString(data.excerpt, readString(data.description, '')),
    tags: readTags(data.tags),
  };
};

export const readPostBySlug = (slug: string): Post | null => {
  const filename = `${slug}.mdx`;
  if (!fs.existsSync(path.join(BLOG_CONTENT_DIRECTORY, filename))) return null;
  return readPost(filename);
};

/** Formatted in UTC so output does not depend on the build machine's timezone. */
export const formatPostDate = (date: string): string =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
