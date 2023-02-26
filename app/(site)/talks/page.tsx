import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { allSlides } from "contentlayer/generated";
import { talksData } from "../../../content/talks/talksData";
import { Metadata } from "next";
import { buildMeta } from "#/app/metadata";

export async function generateMetadata({}): Promise<Metadata> {
  return await buildMeta({
    title: "Talks",
    description: "Conference and other talks that I've done.",
  });
}

export default function Home() {
  // The split is for handling the file structure
  // e.g. /talks/abc removes the "/talks/" to become "abc"
  // This is a set because there are many slides per talk
  const paths = [
    ...new Set(allSlides.map((a) => a._raw.sourceFileDir.split("/")[1] ?? "")),
  ];

  return (
    <div className="w-full py-8">
      <h1 className="mb-8 text-3xl font-medium text-center">Talks</h1>
      <p>
        Sometimes, I am lucky enough to do talks at conferences. I build my
        slides on my site and keep them here for you to visit if you&apos;d
        like.
      </p>
      <div className="flex flex-col gap-4">
        {paths.map((path, index) => (
          <Link
            key={index}
            href={`/talks/${path}`}
            className="flex flex-row justify-between p-4 text-white transition-all rounded-lg bg-slate-800 dark:hover:bg-slate-900"
          >
            <span>{talksData[path]?.title}</span>
            <span>
              <ArrowRight />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
