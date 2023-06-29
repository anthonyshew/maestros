import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { buildMeta } from "#/app/metadata";

const talks: { confName: string; title: string; link: string }[] = [
  {
    confName: "React Miami 2023",
    link: "https://www.youtube.com/watch?v=S_CHo6A0bAs",
    title: "On-demand Flow State: A Framework for Mental Performance",
  },
];

export async function generateMetadata({}): Promise<Metadata> {
  return await buildMeta({
    title: "Talks",
    description: "Conference and other talks that I've done.",
  });
}

export default function Home() {
  return (
    <div className="w-full py-8">
      <h1 className="mb-8 text-3xl font-medium text-center">Talks</h1>
      <p>
        Sometimes, I am lucky enough to do talks at conferences. You can find
        recordings here.
      </p>
      <div className="flex flex-col gap-4 mt-8">
        {talks.map((conference) => (
          <a
            key={conference.confName}
            href={conference.link}
            target="_blank"
            rel="nooopener noreferrer"
            className="flex flex-row justify-between p-4 text-white transition-all rounded-lg bg-slate-800 dark:hover:bg-slate-900"
          >
            <span className="flex flex-col gap-4">
              <span className="font-medium">{conference.title}</span>
              <span>{conference.confName}</span>
            </span>
            <span className="flex flex-col items-center justify-center">
              <ArrowRight />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
