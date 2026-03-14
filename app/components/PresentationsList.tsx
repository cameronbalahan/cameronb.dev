"use client";

import { useState } from "react";

const PAGE_SIZE = 5;

type Snippet = {
  title: string;
  publishedAt: string;
  resourceId: { videoId: string };
  thumbnails: { medium: { url: string; width: number; height: number } };
};

type Item = { id: string; snippet: Snippet };

export default function PresentationsList({ items }: { items: Item[] }) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(items.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const visible = items.slice(start, start + PAGE_SIZE);

  return (
    <div className="flex flex-col gap-6">
      <ul className="flex flex-col gap-2">
        {visible.map(({ id, snippet }) => {
          const medium = snippet?.thumbnails?.medium;
          return (
            <li key={id}>
              <a
                className="grid grid-cols-2 gap-4 rounded-md p-6 hover:bg-neutral-900"
                href={`https://www.youtube.com/watch?v=${snippet?.resourceId?.videoId}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="rounded-md"
                  width={medium?.width}
                  height={medium?.height}
                  src={medium?.url}
                  alt=""
                />
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-neutral-500">
                    {new Date(snippet?.publishedAt).toDateString()}
                  </span>
                  <h3 className="font-medium">{snippet?.title}</h3>
                </div>
              </a>
            </li>
          );
        })}
      </ul>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 1}
            className="px-3 py-1 rounded-md text-sm disabled:opacity-30 hover:bg-neutral-900"
          >
            {"< Prev"}
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`px-3 py-1 rounded-md text-sm ${
                n === page ? "bg-neutral-700" : "hover:bg-neutral-900"
              }`}
            >
              {n}
            </button>
          ))}

          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages}
            className="px-3 py-1 rounded-md text-sm disabled:opacity-30 hover:bg-neutral-900"
          >
            {"Next >"}
          </button>
        </div>
      )}
    </div>
  );
}
