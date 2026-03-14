import Link from "next/link";
import { ExternalIcon } from "../components/Icons";
import PresentationsList from "../components/PresentationsList";

const YOUTUBE_PLAYLIST_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
const PLAYLIST_ID = 'PLT95ZaEUsTjisQ3TutjC1MRlY6HZiNSyh';

export default async function PresentationsPage() {
  const res = await fetch(`${YOUTUBE_PLAYLIST_API}?key=${process.env.YOUTUBE_API_KEY}&playlistId=${PLAYLIST_ID}&part=snippet&maxResults=50`)
  const data = await res.json();

  if (data?.error) {
    return (
      <div>
        <h2>500 | Presentations unavailable</h2>
        <Link
          className="flex items-center gap-1 underline mt-10"
          href={`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          View on YouTube
          <ExternalIcon />
        </Link>
      </div>
    )
  }

  return (
    <div>
      <PresentationsList items={data?.items ?? []} />
    </div>
  );
}
