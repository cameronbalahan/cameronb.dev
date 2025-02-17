const YOUTUBE_PLAYLIST_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
const PLAYLIST_ID = 'PLT95ZaEUsTjisQ3TutjC1MRlY6HZiNSyh';

export default async function Presentations() {
  const res = await fetch(`${YOUTUBE_PLAYLIST_API}?key=${process.env.YOUTUBE_API_KEY}&playlistId=${PLAYLIST_ID}&part=snippet&maxResults=50`)
  const data = await res.json();

  return (
    <div>
      <ul className="flex flex-col gap-2">
        {data?.items?.map(({ id, snippet }) => {
          const medium = snippet?.thumbnails?.medium;
          return (
            <li key={id}>
              <a
                className="grid grid-cols-2 gap-4 rounded-md p-6 hover:bg-neutral-900"
                href={`https://www.youtube.com/watch?v=${snippet?.resourceId?.videoId}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img className="rounded-md" width={medium?.width} height={medium?.height} src={medium?.url} alt="" />
                <div className="flex flex-col gap-2" >
                  <span className=" text-sm text-neutral-500">{ new Date(snippet?.publishedAt).toDateString() }</span>
                  <h3 className="font-medium" >{ snippet?.title }</h3>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}