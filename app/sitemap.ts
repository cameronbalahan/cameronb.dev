import { MetadataRoute } from "next";
import { getRouteURL, SITE_URL } from "../utils/config";
import { getPlaylistItems, getPublishedAt } from "../utils/youtube";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const items = await getPlaylistItems();
  const latest = items
    .map(getPublishedAt)
    .sort()
    .at(-1);

  return [
    { url: getRouteURL("cameronb.dev") },
    { url: getRouteURL("presentations"), lastModified: latest },
    ...items.map((item) => ({
      url: `${SITE_URL}/presentations/${item.snippet.resourceId.videoId}`,
      lastModified: getPublishedAt(item),
    })),
  ];
}
