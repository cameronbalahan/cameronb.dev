import { Metadata } from "next";
import Link from "next/link";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "../../../utils/config";
import { notFound } from "next/navigation";
import { getPlaylistItems, getPublishedAt } from "../../../utils/youtube";
import { JsonLd } from "../../components/JsonLd";
import YouTubeEmbed from "../../components/YouTubeEmbed";

export const dynamicParams = false;

export async function generateStaticParams() {
  const items = await getPlaylistItems();
  return items.map((item) => ({ videoId: item.snippet.resourceId.videoId }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ videoId: string }>;
}): Promise<Metadata> {
  const { videoId } = await params;
  const items = await getPlaylistItems();
  const item = items.find((i) => i.snippet.resourceId.videoId === videoId);
  if (!item) return {};

  const { title, thumbnails } = item.snippet;
  const description = summarize(item.snippet.description) || SITE_DESCRIPTION;
  const path = `/presentations/${videoId}`;
  const thumbnail =
    thumbnails.maxres ?? thumbnails.standard ?? thumbnails.high ?? thumbnails.medium;
  const image = { alt: title, ...thumbnail };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "video.other",
      images: [image],
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
      images: [image.url],
    },
  };
}

function summarize(text: string, max = 160) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, clean.lastIndexOf(" ", max - 1))}…`;
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

  const { title, description, thumbnails } = item.snippet;
  const publishedAt = getPublishedAt(item);

  const date = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="flex flex-col gap-6">
      <JsonLd
        data={{
          "@type": "VideoObject",
          name: title,
          description: description || title,
          thumbnailUrl: Object.values(thumbnails).map((t) => t.url),
          uploadDate: publishedAt,
          embedUrl: `https://www.youtube.com/embed/${videoId}`,
          contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
          url: `${SITE_URL}/presentations/${videoId}`,
        }}
      />
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
