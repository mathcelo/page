import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';

export default function BlogIndexPage() {
  const blogDir = path.join(process.cwd(), 'src/content/blog');

  if (!fs.existsSync(blogDir)) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-neutral-1 to-neutral-2 flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-neutral-7 mb-4'>Blog</h1>
          <p className='text-neutral-5 text-lg'>
            No blog posts found yet. Check back soon!
          </p>
        </div>
      </div>
    );
  }

  const filenames = fs.readdirSync(blogDir);
  const posts = filenames
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => {
      const filePath = path.join(blogDir, name);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);

      return {
        slug: name.replace(/\.mdx$/, ''),
        title: data.title,
        date: data.date,
        excerpt: data.excerpt || data.description || '',
        tags: (data.tags || []) as string[],
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className='min-h-screen bg-gradient-to-br from-neutral-1 to-neutral-2'>
      <div className='max-w-5xl mx-auto px-4 py-12'>
        {/* Header */}
        <header className='text-center mb-12'>
          <p className='text-neutral-6 text-lg max-w-2xl mx-auto'>
            Thoughts, insights, and notes from my journey in security,
            cryptography, and computing.
          </p>
        </header>

        {/* Posts */}
        <div className='grid gap-8'>
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className='relative group bg-neutral-2 border border-neutral-3/60 p-6 rounded-2xl transition-all duration-300 hover:bg-neutral-3 hover:shadow-2xl hover:scale-[1.01]'
            >
              {/* Index Badge */}
              <div className='absolute -left-4 -top-4 w-8 h-8 bg-gradient-to-tr from-primary-2 to-primary-1 text-white text-sm font-bold rounded-full flex items-center justify-center shadow-md'>
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Date */}
              <div className='text-neutral-5 text-sm mb-2'>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </div>

              {/* Title */}
              <h2 className='text-2xl font-semibold text-neutral-8 mb-2 group-hover:text-primary-1 transition-colors duration-300'>
                <Link href={`/blog/${post.slug}`}>
                  {post.title || post.slug}
                </Link>
              </h2>

              {/* Excerpt */}
              {post.excerpt && (
                <p className='text-neutral-6 mb-4 line-clamp-3'>
                  {post.excerpt}
                </p>
              )}

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className='flex flex-wrap gap-2 mb-4'>
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className='text-xs font-medium bg-primary-1/10 text-primary-2 border border-primary-2/30 px-2 py-1 rounded-full'
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Read More */}
              <Link
                href={`/blog/${post.slug}`}
                className='inline-flex items-center gap-2 text-primary-1 hover:text-primary-2 transition-colors font-medium text-sm'
              >
                Read full article
                <svg
                  className='w-4 h-4 transition-transform group-hover:translate-x-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
              </Link>

              {/* Hover Effect */}
              <div className='absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-primary-1/10 to-primary-2/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
