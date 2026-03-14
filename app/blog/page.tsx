import Link from "next/link";
import { getAllPosts } from "../../utils/blog";

export const metadata = { title: "Blog" };

export default function BlogPage() {
  const posts = getAllPosts();

  const byYear = posts.reduce<Record<string, typeof posts>>((acc, post) => {
    const year = post.date.split("-")[0];
    (acc[year] ??= []).push(post);
    return acc;
  }, {});

  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));

  const noPosts = !posts.length;

  if (noPosts) {
    return (
      <div>
        <h2>No posts yet.</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      {years.map((year) => (
        <div key={year}>
          <h2 className="text-sm text-neutral-500 mb-4">{year}</h2>
          <ul className="flex flex-col">
            {byYear[year].map((post) => {
              const [, month, day] = post.date.split("-");
              const label = new Date(
                post.date + "T12:00:00",
              ).toLocaleDateString("en-US", { month: "short", day: "numeric" });
              return (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex flex-row items-baseline gap-6 py-2 hover:text-neutral-300 transition-colors"
                  >
                    <span className="text-sm text-neutral-500 w-16 shrink-0">
                      {label}
                    </span>
                    <span className="font-medium">{post.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
