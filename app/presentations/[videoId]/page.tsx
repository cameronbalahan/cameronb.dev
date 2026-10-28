import Link from "next/link";
import { notFound } from "next/navigation";
import { getPlaylistItems } from "../../../utils/youtube";
import YouTubeEmbed from "../../components/YouTubeEmbed";

export const dynamicParams = false;

export async function generateStaticParams() {
  const items = await getPlaylistItems();
  if (items.length === 0) return [{ videoId: "__placeholder__" }];
  return items.map((item) => ({ videoId: item.snippet.resourceId.videoId }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ videoId: string }>;
}) {
  const { videoId } = await params;
  const items = await getPlaylistItems();
  const item = items.find((i) => i.snippet.resourceId.videoId === videoId);
  if (!item) return {};
  return { title: item.snippet.title };
}

export default async function PresentationPage({
  params,
}: {
  params: Promise<{ videoId: string }>;
}) {
  const { videoId } = await params;
  const items = await getPlaylistItems();
  const item = items.find((i) => i.snippet.resourceId.videoId === videoId);

  if (!item) notFound();

  const { title, publishedAt } = item.snippet;

  const date = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <Link
          href="/presentations"
          className="flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
        >
          <span>&lt;</span> all presentations
        </Link>
        <div className="flex flex-col gap-1">
          <h1 className="font-medium text-xl">{title}</h1>
          <span className="text-sm text-neutral-500">{date}</span>
        </div>
      </div>
      <YouTubeEmbed title={title} videoId={videoId} />
    </article>
  );
}
