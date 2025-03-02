import Image from "next/image";
import profile from "../public/images/home/profile.jpg";
import { LocationIcon } from "./components/Icons";


export default function HomePage() {
  return (
    <section className="flex gap-6 flex-wrap">
      <div>
        <Image
          alt="Cameron Balahan Profile"
          className="rounded-md float-left mr-6 mb-1"
          priority
          src={profile}
          unoptimized
          width={250}
        />
        <div className="flex flex-col gap-3 mb-10">
          <h2 className="font-medium text-4xl">
            Cameron Balahan
          </h2>
          <div className="flex gap-1 font-medium  text-neutral-400">
            <LocationIcon />
            <span className="-mb-1" >New York City</span>
          </div>
        </div>
        <span className="text-sm text-neutral-300">
          <div>I'm a product leader and entrepreneur with a passion for creating excellent developer experiences. Currently, I lead a portfolio of developer products at Google that includes the Go programming language — one of the most-loved and fastest growing developer products in the industry — as well as a new suite of AI agents for the software development life cycle. I also frequently present keynotes and technical talks at industry conferences, including at Google I/O, Google Cloud Next, and at GopherCons around the world.</div>
          <div className="mt-3">Before joining Google, I founded and grew a quantitative proprietary trading firm, leading it from its initial stages to a successful acquisition. And, before that, I practiced law at Katten Muchin Rosenman LLP.</div>
          <div className="mt-3">I grew up in Southern California, but I’ve lived in New York City for almost twenty years — and I don’t think I’ll ever leave.</div>
        </span>
      </div>
    </section>
  );
}