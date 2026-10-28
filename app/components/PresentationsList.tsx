"use client";

import Link from "next/link";
import { useState } from "react";
import { getPublishedAt, PlaylistItem } from "../../utils/youtube";

const PAGE_SIZE = 5;


export default function PresentationsList({ items }: { items: PlaylistItem[] }) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(items.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const visible = items.slice(start, start + PAGE_SIZE);

  return (
    <div className="flex flex-col gap-6">
      <ul className="flex flex-col gap-2">
        {visible.map((item) => {
          const { id, snippet } = item;
          const medium = snippet?.thumbnails?.medium;
          return (
            <li key={id}>
              <Link
                className="grid grid-cols-2 gap-4 rounded-md p-6 hover:bg-neutral-900"
                href={`/presentations/${snippet?.resourceId?.videoId}`}
              >
                <img
                  className="rounded-md"
                  width={medium?.width}
                  height={medium?.height}
                  src={medium?.url}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-neutral-500">
                    {new Date(getPublishedAt(item)).toDateString()}
                  </span>
                  <h3 className="font-medium">{snippet?.title}</h3>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 1}
            className="px-3 py-1 text-sm transition-colors duration-75 disabled:opacity-30 enabled:hover:bg-[#020fc7]"
          >
            {"< Prev"}
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`px-3 py-1 text-sm transition-colors duration-75 ${
                n === page ? "bg-neutral-700" : "hover:bg-[#020fc7]"
              }`}
            >
              {n}
            </button>
          ))}

          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages}
            className="px-3 py-1 text-sm transition-colors duration-75 disabled:opacity-30 enabled:hover:bg-[#020fc7]"
          >
            {"Next >"}
          </button>
        </div>
      )}
    </div>
  );
}
