import { BlueSkyIcon, LinkedinIcon, TwitterIcon, YouTubeIcon } from "./Icons";

const SOCIALS = [
  {
    href: "https://www.linkedin.com/in/cameronbalahan/",
    icon: <LinkedinIcon />
  },
  {
    href: "https://bsky.app/profile/cameronb.bsky.social",
    icon: <BlueSkyIcon />,
  },
  {
    href: "https://x.com/cameronbalahan",
    icon: <TwitterIcon />,
  },
  {
    href: "https://www.youtube.com/playlist?list=PLT95ZaEUsTjisQ3TutjC1MRlY6HZiNSyh",
    icon: <YouTubeIcon  />
  }
]


export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <span className="text-xs text-zinc-500">© {new Date().getFullYear()} cameronb.dev</span>
        <div className="flex gap-3 text-neutral-300 align-bottom dark:text-neutral-300">
          {SOCIALS.map(({ href, icon }) => (
            <a
              className="flex items-end text-neutral-600 hover:text-neutral-100 transition-all"
              href={href}
              key={href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}