import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/app/mdx-components';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'src/content/blog');
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ''),
    }));
}

async function getBlogPost(slug: string) {
  const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(raw);
  return { content, data };
}

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const post = await getBlogPost(params.slug);
  if (!post) notFound();

  return (
    <article className='prose prose-invert mx-auto p-4'>
      <h1 className='text-4xl font-bold mb-4'>{post.data.title}</h1>
      <time className='text-neutral-5 mb-6 block'>
        {new Date(post.data.date).toLocaleDateString()}
      </time>

      <MDXRemote
        source={post.content}
        components={mdxComponents}
        options={{
          mdxOptions: {
            rehypePlugins: [rehypeHighlight, rehypeSlug],
          },
        }}
      />
    </article>
  );
}
