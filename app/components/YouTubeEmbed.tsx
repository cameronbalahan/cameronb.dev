"use client";

import { useState } from "react";

export default function YouTubeEmbed({
  title,
  videoId,
}: {
  title: string;
  videoId: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video rounded-md overflow-hidden bg-neutral-900">
      {playing ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          aria-label={`Play ${title}`}
          className="group absolute inset-0 w-full h-full"
          onClick={() => setPlaying(true)}
        >
          <img
            alt=""
            className="w-full h-full object-cover"
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
          />
          <span className="absolute inset-0 m-auto flex h-12 w-16 items-center justify-center rounded-xl bg-neutral-900/80 group-hover:bg-red-600 transition-colors">
            <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6 fill-white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
