import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type Post = {
  slug: string;
  title: string;
  date: string;
};

export type PostWithContent = Post & {
  content: string;
};

function slugify(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  return files
    .map((filename) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
      const { data } = matter(raw);
      if (!data.published) return null;
      return {
        slug: slugify(data.title as string),
        title: data.title as string,
        date: new Date(data.date).toISOString().split("T")[0],
      };
    })
    .filter((post): post is Post => post !== null)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPost(slug: string): PostWithContent | null {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const file = files.find((f) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, f), "utf8");
    const { data } = matter(raw);
    return slugify(data.title as string) === slug;
  });

  if (!file) return null;

  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
  const { data, content } = matter(raw);

  if (!data.published) return null;

  return {
    slug,
    title: data.title as string,
    date: new Date(data.date).toISOString().split("T")[0],
    content,
  };
}
