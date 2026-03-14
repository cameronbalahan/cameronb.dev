const YOUTUBE_PLAYLIST_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";
export const PLAYLIST_ID = "PLT95ZaEUsTjisQ3TutjC1MRlY6HZiNSyh";

export type Snippet = {
  title: string;
  description: string;
  publishedAt: string;
  resourceId: { videoId: string };
  thumbnails: { medium: { url: string; width: number; height: number } };
};

export type PlaylistItem = { id: string; snippet: Snippet };

export async function getPlaylistItems(): Promise<PlaylistItem[]> {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_API}?key=${process.env.YOUTUBE_API_KEY}&playlistId=${PLAYLIST_ID}&part=snippet&maxResults=50`,
  );
  const data = await res.json();
  if (data?.error) return [];

  return data?.items ?? [];
}
