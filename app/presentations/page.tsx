import { Metadata } from "next";
import PresentationsList from "../components/PresentationsList";
import { getPlaylistItems } from "../../utils/youtube";

export const metadata: Metadata = {
  title: "Presentations",
  alternates: { canonical: "/presentations" },
};

export default async function PresentationsPage() {
  const items = await getPlaylistItems();

  return (
    <div>
      <PresentationsList items={items} />
    </div>
  );
}
