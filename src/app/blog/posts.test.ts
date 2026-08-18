import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';

import {
  formatPostDate,
  listPostFilenames,
  readPost,
  readPostBySlug,
  slugFromFilename,
} from './posts';

const fixtureDirectories: string[] = [];

const makeFixtureDirectory = (): string => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'blog-posts-test-'));
  fixtureDirectories.push(directory);
  return directory;
};

const writeFixturePost = (
  directory: string,
  filename: string,
  contents: string
): void => {
  fs.writeFileSync(path.join(directory, filename), contents);
};

afterEach(() => {
  for (const directory of fixtureDirectories.splice(0)) {
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

describe('listPostFilenames', () => {
  it('returns only .mdx files and excludes the archive/ subdirectory', () => {
    const directory = makeFixtureDirectory();
    writeFixturePost(directory, 'published.mdx', '---\ndate: "2026-01-01"\n---\n');
    writeFixturePost(directory, 'notes.txt', 'not a post');
    fs.mkdirSync(path.join(directory, 'archive'));
    writeFixturePost(
      path.join(directory, 'archive'),
      'retired.mdx',
      '---\ndate: "2020-01-01"\n---\n'
    );

    expect(listPostFilenames(directory)).toEqual(['published.mdx']);
  });

  it('lists only .mdx entries from the real content directory', () => {
    const filenames = listPostFilenames();
    for (const filename of filenames) {
      expect(filename).toMatch(/\.mdx$/);
    }
    expect(filenames).not.toContain('archive');
  });
});

describe('slugFromFilename', () => {
  it('strips the .mdx extension', () => {
    expect(slugFromFilename('hello-world.mdx')).toBe('hello-world');
  });

  it('leaves names without a .mdx suffix unchanged', () => {
    expect(slugFromFilename('hello-world')).toBe('hello-world');
  });
});

describe('readPost', () => {
  it('parses a post with complete frontmatter', () => {
    const directory = makeFixtureDirectory();
    writeFixturePost(
      directory,
      'full-post.mdx',
      [
        '---',
        'title: A Full Post',
        'date: "2026-01-15"',
        'excerpt: Short summary.',
        'tags:',
        '  - typescript',
        '  - testing',
        '---',
        '',
        'Body text.',
      ].join('\n')
    );

    const post = readPost('full-post.mdx', directory);
    expect(post.slug).toBe('full-post');
    expect(post.title).toBe('A Full Post');
    expect(post.date).toBe('2026-01-15T00:00:00.000Z');
    expect(post.excerpt).toBe('Short summary.');
    expect(post.tags).toEqual(['typescript', 'testing']);
    expect(post.content.trim()).toBe('Body text.');
  });

  it('normalises an unquoted YAML date to ISO 8601', () => {
    const directory = makeFixtureDirectory();
    writeFixturePost(directory, 'yaml-date.mdx', '---\ndate: 2026-01-15\n---\n');

    expect(readPost('yaml-date.mdx', directory).date).toBe('2026-01-15T00:00:00.000Z');
  });

  it('rejects a numeric date, naming the offending file', () => {
    const directory = makeFixtureDirectory();
    writeFixturePost(directory, 'numeric-date.mdx', '---\ndate: 2026\n---\n');

    expect(() => readPost('numeric-date.mdx', directory)).toThrow(/numeric-date\.mdx/);
  });

  it('rejects an unparseable date string', () => {
    const directory = makeFixtureDirectory();
    writeFixturePost(directory, 'bad-date.mdx', '---\ndate: "next tuesday"\n---\n');

    expect(() => readPost('bad-date.mdx', directory)).toThrow(/bad-date\.mdx/);
  });

  it('rejects a post with no date', () => {
    const directory = makeFixtureDirectory();
    writeFixturePost(directory, 'dateless.mdx', '---\ntitle: No Date\n---\n');

    expect(() => readPost('dateless.mdx', directory)).toThrow(/dateless\.mdx/);
  });

  it('rejects a post with no frontmatter at all', () => {
    const directory = makeFixtureDirectory();
    writeFixturePost(directory, 'bare.mdx', 'Just prose, no frontmatter.\n');

    expect(() => readPost('bare.mdx', directory)).toThrow(/bare\.mdx/);
  });

  it('throws on frontmatter that is not valid YAML', () => {
    const directory = makeFixtureDirectory();
    writeFixturePost(directory, 'broken.mdx', '---\ntitle: [unclosed\n---\n');

    expect(() => readPost('broken.mdx', directory)).toThrow();
  });

  it('falls back to the slug when the title is missing', () => {
    const directory = makeFixtureDirectory();
    writeFixturePost(directory, 'untitled-post.mdx', '---\ndate: "2026-01-15"\n---\n');

    expect(readPost('untitled-post.mdx', directory).title).toBe('untitled-post');
  });

  it('falls back to the description field when excerpt is missing', () => {
    const directory = makeFixtureDirectory();
    writeFixturePost(
      directory,
      'described.mdx',
      '---\ndate: "2026-01-15"\ndescription: From description.\n---\n'
    );

    expect(readPost('described.mdx', directory).excerpt).toBe('From description.');
  });

  it('defaults the excerpt to an empty string when nothing is provided', () => {
    const directory = makeFixtureDirectory();
    writeFixturePost(directory, 'terse.mdx', '---\ndate: "2026-01-15"\n---\n');

    expect(readPost('terse.mdx', directory).excerpt).toBe('');
  });

  it('wraps a single string tag in an array', () => {
    const directory = makeFixtureDirectory();
    writeFixturePost(
      directory,
      'one-tag.mdx',
      '---\ndate: "2026-01-15"\ntags: solo\n---\n'
    );

    expect(readPost('one-tag.mdx', directory).tags).toEqual(['solo']);
  });

  it('drops non-string entries from a tag list', () => {
    const directory = makeFixtureDirectory();
    writeFixturePost(
      directory,
      'mixed-tags.mdx',
      '---\ndate: "2026-01-15"\ntags:\n  - keep\n  - 42\n  - null\n---\n'
    );

    expect(readPost('mixed-tags.mdx', directory).tags).toEqual(['keep']);
  });

  it('defaults tags to an empty array when the field is absent', () => {
    const directory = makeFixtureDirectory();
    writeFixturePost(directory, 'tagless.mdx', '---\ndate: "2026-01-15"\n---\n');

    expect(readPost('tagless.mdx', directory).tags).toEqual([]);
  });
});

describe('readPostBySlug', () => {
  it('returns the parsed post for an existing slug', () => {
    const directory = makeFixtureDirectory();
    writeFixturePost(directory, 'findable.mdx', '---\ndate: "2026-01-15"\n---\n');

    const post = readPostBySlug('findable', directory);
    expect(post).not.toBeNull();
    expect(post?.slug).toBe('findable');
  });

  it('returns null for a slug with no matching file', () => {
    const directory = makeFixtureDirectory();

    expect(readPostBySlug('missing', directory)).toBeNull();
  });
});

describe('formatPostDate', () => {
  it('formats an ISO timestamp as a short US date', () => {
    expect(formatPostDate('2026-01-15T00:00:00.000Z')).toBe('Jan 15, 2026');
  });

  it('formats in UTC so late-evening timestamps keep their day', () => {
    expect(formatPostDate('2026-01-15T23:59:00.000Z')).toBe('Jan 15, 2026');
  });
});

describe('published content invariants', () => {
  it('parses every published post with an ISO 8601 date and non-empty title', () => {
    for (const filename of listPostFilenames()) {
      const post = readPost(filename);
      expect(post.slug).toBe(slugFromFilename(filename));
      expect(post.title.length).toBeGreaterThan(0);
      expect(new Date(post.date).toISOString()).toBe(post.date);
    }
  });
});
