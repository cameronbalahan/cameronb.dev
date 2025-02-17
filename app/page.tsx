import Image from "next/image";
import profile from "../public/images/home/profile.jpg";
import { LocationIcon } from "./components/Icons";


export default function Home() {
  return (
    <div>
      <section className="flex gap-6 flex-wrap">
        <div className="shrink-0" >
          <Image
            alt="Cameron Balahan Profile"
            className="rounded-md"
            priority
            src={profile}
            unoptimized
            width={250}
            />
        </div>
        <div className="flex flex-col gap-4 p-1" >
          <div className="flex flex-col gap-1" >
            <h2 className="font-medium text-xl mb-1">
              Cameron Balahan
            </h2>
            <div className="flex gap-1 text-sm text-neutral-400">
              <LocationIcon size="xs" />
              <span>New York City</span>
            </div>
          </div>
          <p className="text-sm text-neutral-400">
            Cameron is the product lead for the Go programming language at Google and a contributor to Google Cloud's agent ecosystem and AI developer assistance strategy.
            Before Google, Cameron led a high frequency market making firm where he built low latency trading systems in C and C++.  He likes Go more.
          </p>
        </div>
      </section>
    </div>
  );
}