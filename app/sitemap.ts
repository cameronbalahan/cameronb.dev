import { MetadataRoute } from "next";
import { getRouteURL, SITE_URL } from "../utils/config";
import { getPlaylistItems } from "../utils/youtube";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const items = await getPlaylistItems();
  const latest = items
    .map((item) => item.snippet.publishedAt)
    .sort()
    .at(-1);

  return [
    { url: getRouteURL("cameronb.dev") },
    { url: getRouteURL("presentations"), lastModified: latest },
    ...items.map(({ snippet }) => ({
      url: `${SITE_URL}/presentations/${snippet.resourceId.videoId}`,
      lastModified: snippet.publishedAt,
    })),
  ];
}
