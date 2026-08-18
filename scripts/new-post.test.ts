import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import matter from 'gray-matter';
import { afterEach, describe, expect, it } from 'vitest';

import { createPost, formatDate, generateFrontmatter, slugify } from './new-post';

const fixtureDirectories: string[] = [];

const makeFixtureDirectory = (): string => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'new-post-test-'));
  fixtureDirectories.push(directory);
  return directory;
};

afterEach(() => {
  for (const directory of fixtureDirectories.splice(0)) {
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

describe('slugify', () => {
  it('lowercases and replaces spaces with hyphens', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  it('collapses runs of punctuation and whitespace into one hyphen', () => {
    expect(slugify("Rust's  Borrow -- Checker!")).toBe('rust-s-borrow-checker');
  });

  it('strips leading and trailing separators', () => {
    expect(slugify('  Hello, World!  ')).toBe('hello-world');
  });

  it('keeps digits', () => {
    expect(slugify('Top 10 Tips for 2026')).toBe('top-10-tips-for-2026');
  });

  it('drops accented letters rather than transliterating them', () => {
    expect(slugify('Café Déjà Vu')).toBe('caf-d-j-vu');
  });

  it('returns an empty string when nothing alphanumeric survives', () => {
    expect(slugify('¡¿!? 🎉')).toBe('');
  });

  it('returns an empty string for empty input', () => {
    expect(slugify('')).toBe('');
  });
});

describe('formatDate', () => {
  it('formats a date as YYYY-MM-DD', () => {
    expect(formatDate(new Date(Date.UTC(2026, 0, 5)))).toBe('2026-01-05');
  });

  it('zero-pads month and day', () => {
    expect(formatDate(new Date(Date.UTC(2026, 8, 9)))).toBe('2026-09-09');
  });

  it('uses the UTC day, not the local one', () => {
    expect(formatDate(new Date('2026-08-17T23:59:00.000Z'))).toBe('2026-08-17');
  });
});

describe('generateFrontmatter', () => {
  const text = generateFrontmatter({
    title: 'My Post',
    date: '2026-08-18',
    excerpt: '',
    tags: [],
  });

  it('opens and closes the frontmatter block, leaving a blank line for the body', () => {
    expect(text.startsWith('---\n')).toBe(true);
    expect(text.endsWith('---\n\n')).toBe(true);
  });

  it('round-trips through gray-matter with the title intact', () => {
    expect(matter(text).data.title).toBe('My Post');
  });

  it('writes the date unquoted so YAML parses it as a UTC date', () => {
    const parsedDate = matter(text).data.date;
    expect(parsedDate).toBeInstanceOf(Date);
    expect(parsedDate.toISOString()).toBe('2026-08-18T00:00:00.000Z');
  });

  it('leaves the excerpt empty and the tag list empty', () => {
    const { data } = matter(text);
    expect(data.excerpt).toBeNull();
    expect(data.tags).toEqual([]);
  });

  it('produces no body content', () => {
    expect(matter(text).content.trim()).toBe('');
  });
});

describe('createPost', () => {
  it('writes a slugified .mdx file into the given directory and returns its path', () => {
    const directory = makeFixtureDirectory();

    const filepath = createPost('  Spaces & Symbols!! ', directory);

    expect(filepath).toBe(path.join(directory, 'spaces-symbols.mdx'));
    expect(fs.existsSync(filepath)).toBe(true);
  });

  it("stamps the post with today's date and the untouched title", () => {
    const directory = makeFixtureDirectory();
    const before = formatDate(new Date());

    const filepath = createPost('Hygiene Probe Post', directory);
    const after = formatDate(new Date());

    const { data } = matter(fs.readFileSync(filepath, 'utf8'));
    expect(data.title).toBe('Hygiene Probe Post');
    expect([before, after]).toContain(formatDate(data.date));
  });

  it('refuses to overwrite an existing post, naming the clashing path', () => {
    const directory = makeFixtureDirectory();
    createPost('Hygiene Probe Post', directory);

    expect(() => createPost('Hygiene Probe Post', directory)).toThrow(
      /already exists at .*hygiene-probe-post\.mdx/
    );
  });

  it('treats titles that slugify identically as the same post', () => {
    const directory = makeFixtureDirectory();
    createPost('Hello, World!', directory);

    expect(() => createPost('HELLO world', directory)).toThrow(/already exists/);
  });
});
