const YOUTUBE_PLAYLIST_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";
export const PLAYLIST_ID = "PLT95ZaEUsTjisQ3TutjC1MRlY6HZiNSyh";

export type Snippet = {
  title: string;
  description: string;
  publishedAt: string;
  resourceId: { videoId: string };
  thumbnails: {
    medium: Thumbnail;
    high?: Thumbnail;
    standard?: Thumbnail;
    maxres?: Thumbnail;
  };
};

export type Thumbnail = { url: string; width: number; height: number };

export type PlaylistItem = {
  id: string;
  snippet: Snippet;
  contentDetails: { videoId: string; videoPublishedAt?: string };
};

// When the video itself was published (snippet.publishedAt is when it was
// added to the playlist). Private or deleted videos have no videoPublishedAt.
export function getPublishedAt(item: PlaylistItem) {
  return item.contentDetails.videoPublishedAt ?? item.snippet.publishedAt;
}

let playlist: Promise<PlaylistItem[]> | undefined;

// Fetched once per build and shared by every page. Throws on failure so a
// broken API response fails the build instead of deploying an empty page.
export function getPlaylistItems(): Promise<PlaylistItem[]> {
  playlist ??= fetchPlaylistItems();
  return playlist;
}

async function fetchPlaylistItems(): Promise<PlaylistItem[]> {
  const key = process.env.YOUTUBE_API_KEY;
  if (!key) {
    throw new Error("YOUTUBE_API_KEY is not set. Add it to .env to build the presentations pages.");
  }

  const items: PlaylistItem[] = [];
  let pageToken: string | undefined;

  do {
    const params = new URLSearchParams({
      key,
      playlistId: PLAYLIST_ID,
      part: "snippet,contentDetails",
      maxResults: "50",
      ...(pageToken && { pageToken }),
    });
    const res = await fetch(`${YOUTUBE_PLAYLIST_API}?${params}`);
    const data = await res.json();

    if (!res.ok || data?.error) {
      throw new Error(`YouTube API request failed (${res.status}): ${data?.error?.message ?? res.statusText}`);
    }

    items.push(...(data.items ?? []));
    pageToken = data.nextPageToken;
  } while (pageToken);

  if (items.length === 0) {
    throw new Error(`YouTube playlist ${PLAYLIST_ID} returned no videos.`);
  }

  return items;
}
