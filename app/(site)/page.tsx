import { firaCode } from "#/app/fonts";
import { Avatar, AvatarFallback, AvatarImage } from "#/components/Avatar";
import { Github, Twitter, Youtube } from "lucide-react";
import { RepoCard, PinnedRepos } from "#/components/molecules/RepoCard";
import { tagline } from "#/app/constants";
import { buildMeta } from "#/app/metadata";
import { Metadata } from "next";
import Balancer from "react-wrap-balancer";
import { Discord } from "#/components/Discord";
import { Button } from "#/components/Button";
import Link from "next/link";

export const revalidate = 3600; // hourly

export const generateMetadata = async (): Promise<Metadata> => {
  return await buildMeta({
    title: "Anthony Shew",
    description: tagline,
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
          <AvatarImage src="/images/me.jpg" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <div className="my-auto">
          <h1 className="m-0 text-xl font-bold text-black dark:text-white sm:text-4xl">
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
          and now I write software. I'm currently at Vercel as a Content
          Engineer. If you'd like to learn more about me personally, I wrote a
          little about how I got here in{" "}
          <Link href="/blog/my-developer-story">this blog post</Link>.
        </p>
        <p>
          Outside of my day job, I'm building a course about JavaScript and
          TypeScript monorepos.{" "}
          <strong>
            If you'd like to level up your skills so you can build healthy
            repositories for yourself and your teammates, feel free to join the
            course!
          </strong>
        </p>

        <div className="flex flex-row items-center justify-center">
          <Button variant="default" asChild size="lg">
            <Link
              href="/monorepos"
              className="flex flex-col py-10 text-xl font-bold text-center no-underline md:w-full md:py-8 md:flex-row"
            >
              <span className="md:m-1.5">Welcome to</span>
              <span>Monorepo Maestros</span>
            </Link>
          </Button>
        </div>

        <hr className="mt-8 mb-4" />
        <div className="flex flex-col items-center justify-center sm:flex-row sm:gap-8">
          <a
            className="flex flex-row gap-2 my-4 hover:underline"
            href="https://twitter.com/anthonysheww"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="relative top-0.5" /> Twitter
          </a>
          <a
            className="flex flex-row gap-2 my-4 hover:underline"
            href="https://twitter.com/anthonysheww"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="relative top-0.5" /> YouTube
          </a>
          <a
            className="flex flex-row gap-2 my-4 hover:underline"
            href="https://github.com/anthonyshew"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Discord className="relative top-0.5 w-6 h-6" /> Discord
          </a>
          <a
            className="flex flex-row gap-2 my-4 hover:underline"
            href="https://github.com/anthonyshew"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="relative top-0.5" /> Bugs
          </a>
        </div>
        <hr className="mt-4 mb-8" />
      </div>

      <h2 className="my-6 text-2xl font-medium text-black dark:text-white">
        Projects I&apos;m proud to be involved in
      </h2>

      <div className="flex flex-row flex-wrap justify-center gap-8">
        {data.map((repo) => (
          <RepoCard key={repo.repo} {...repo} />
        ))}
      </div>
    </div>
  );
}
