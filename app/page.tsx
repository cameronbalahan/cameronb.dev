import Image from "next/image";
import profile from "../public/images/home/profile.webp";
import { Metadata } from "next";
import { JsonLd } from "./components/JsonLd";
import { LocationIcon } from "./components/Icons";
import {
  EMPLOYER,
  JOB_TITLE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from "../utils/config";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};


export default function HomePage() {
  return (
    <section className="flex gap-6 flex-wrap">
      <JsonLd
        data={{
          "@type": "Person",
          name: SITE_NAME,
          url: SITE_URL,
          image: `${SITE_URL}${profile.src}`,
          description: SITE_DESCRIPTION,
          jobTitle: JOB_TITLE,
          worksFor: EMPLOYER && { "@type": "Organization", name: EMPLOYER },
          address: {
            "@type": "PostalAddress",
            addressLocality: "New York",
            addressRegion: "NY",
            addressCountry: "US",
          },
          sameAs: Object.values(SOCIAL_LINKS),
        }}
      />
      <div>
        <Image
          alt="Cameron Balahan Profile"
          className="rounded-md sm:float-left float-none mr-6 mb-1"
          priority
          src={profile}
          unoptimized
          width={250}
        />
        <div className="flex flex-col gap-3 mb-10">
          <h1 className="font-medium text-4xl">
            Cameron Balahan
          </h1>
          <div className="flex gap-1 font-medium text-neutral-400">
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