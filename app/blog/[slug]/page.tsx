import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllPosts, getPost } from "../../../utils/blog";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getAllPosts();
  // __placeholder__ will render 404 page if no posts
  if (posts.length === 0) return [{ slug: "__placeholder__" }];
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const html = await marked(post.content);
  const date = new Date(post.date + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <Link
          href="/blog"
          className="flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
        >
          <span>&lt;</span> all posts
        </Link>
        <div className="flex flex-col gap-1">
          <h1 className="font-medium text-xl">{post.title}</h1>
          <span className="text-sm text-neutral-500">{date}</span>
        </div>
      </div>
      <div
        className="text-neutral-300 leading-relaxed flex flex-col gap-4 [&_h2]:font-medium [&_h2]:text-white [&_h2]:mt-4 [&_a]:underline [&_a]:text-white [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
