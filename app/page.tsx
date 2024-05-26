import Image from "next/image";
import profile from "../public/images/home/profile.jpg";
import { IconLink } from "./components/Link";
import {
  LinkedinIcon,
  LocationIcon,
  TwitterIcon,
  YouTubeIcon,
} from "./components/Icons";

export default function Home() {
  return (
    <div>
      <Image
        alt="Cameron Balahan Profile"
        className="rounded-lg border-2 mb-4"
        priority
        height={300}
        width={300}
        src={profile}
        unoptimized
      />
      <h1 className="font-medium text-2xl tracking-tighter mb-1">
        Cameron Balahan
      </h1>
      <div className="flex align-bottom gap-0.5 mb-3.5 -ml-1 text-neutral-200">
        <LocationIcon size="s" />
        <div>New York City</div>
      </div>
      <div className="flex gap-3 text-neutral-600 align-bottom dark:text-neutral-300">
        <IconLink href="https://www.linkedin.com/in/cameronbalahan/">
          <LinkedinIcon />
        </IconLink>
        <IconLink href="https://x.com/cameronbalahan">
          <TwitterIcon />
        </IconLink>
        <IconLink href="https://www.youtube.com/playlist?list=PLT95ZaEUsTjisQ3TutjC1MRlY6HZiNSyh">
          <YouTubeIcon />
        </IconLink>
      </div>
    </div>
  );
}
