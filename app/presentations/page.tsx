import Link from "next/link";
import { ExternalIcon } from "../components/Icons";
import PresentationsList from "../components/PresentationsList";
import { getPlaylistItems, PLAYLIST_ID } from "../../utils/youtube";

export default async function PresentationsPage() {
  const items = await getPlaylistItems();

  if (!items.length) {
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
    );
  }

  return (
    <div>
      <PresentationsList items={items} />
    </div>
  );
}
