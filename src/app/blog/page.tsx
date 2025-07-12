import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';

export default function BlogIndexPage() {
  const blogDir = path.join(process.cwd(), 'src/content/blog');

  if (!fs.existsSync(blogDir)) {
    return <p className='p-4 text-neutral-6'>No blog posts found.</p>;
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
      };
    });

  return (
    <div className='prose prose-invert mx-auto p-4'>
      <h1 className='text-3xl font-bold text-neutral-8 mb-6'>Blog</h1>
      <ul className='space-y-4 text-neutral-6'>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className='text-primary-1 hover:text-primary-2 font-medium'
            >
              {post.title || post.slug}
            </Link>{' '}
            <small className='text-neutral-5'>
              ({new Date(post.date).toLocaleDateString()})
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
}
