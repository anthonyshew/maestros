import { firaCode } from "#/app/fonts";
import { Avatar, AvatarFallback, AvatarImage } from "#/components/Avatar";
import { Github, Twitter } from "lucide-react";
import { RepoCard, PinnedRepos } from "#/components/molecules/RepoCard";
import { tagline } from "#/app/constants";
import { buildMeta } from "#/app/metadata";
import { Metadata } from "next";
import Balancer from "react-wrap-balancer";

export const revalidate = 3600; // hourly

export const generateMetadata = async (): Promise<Metadata> => {
  return await buildMeta({
    title: "Anthony Shew",
    description: "Hi! Welcome to my site.",
  });
};
const getData = async () => {
  const pins = await fetch(
    "https://gh-pinned-repos.egoist.dev/?username=anthonyshew"
  )
    .then((res): Promise<Array<PinnedRepos>> => res.json())
    .catch((err) => {
      throw new Error(err);
    });

  return pins;
};

export default async function Home() {
  const data = await getData();

  return (
    <div>
      <div className="flex flex-row gap-4 sm:gap-8">
        <Avatar className="w-12 h-12 sm:w-20 sm:h-20">
          <AvatarImage src="/images/me.png" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <div className="my-auto">
          <h1 className="m-0 text-xl text-black dark:text-white sm:text-4xl">
            Anthony Shew
          </h1>
          <p
            className={`m-0 mt-1 ${firaCode.className} text-xs sm:text-lg dark:text-slate-400`}
          >
            <Balancer>{tagline}</Balancer>
          </p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto mt-8 prose dark:prose-invert">
        <p>
          Hey, I&apos;m Anthony. I played professional baseball for six years
          and now I write software. Currently at Vercel as a Content Engineer.
        </p>

        <p>
          I love helping folks with Next.js, Turborepo, Typescript, and mental
          performance skills. I also love shipping.
        </p>

        <hr className="mt-8 mb-4" />
        <div className="flex flex-col items-center justify-center sm:flex-row sm:gap-8">
          <a
            className="flex flex-row gap-2 my-4 hover:underline"
            href="https://twitter.com/anthonysheww"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter /> Follow me on Twitter!
          </a>

          <a
            className="flex flex-row gap-2 my-4 hover:underline"
            href="https://github.com/anthonyshew"
            target="_blank"
            rel="noreferrer"
          >
            <Github /> Laugh at my bugs!
          </a>
        </div>
        <hr className="mt-4 mb-8" />
      </div>

      <h2 className="my-6 text-2xl font-medium text-black dark:text-white">
        Core team member of...
      </h2>

      <div className="flex flex-row flex-wrap justify-center gap-8">
        {data.map((repo) => (
          <RepoCard key={repo.repo} {...repo} />
        ))}
      </div>
    </div>
  );
}
