import { firaCode } from "#/app/fonts";
import { Avatar, AvatarFallback, AvatarImage } from "#/components/Avatar";
import { Github, Twitter } from "lucide-react";
import { RepoCard, PinnedRepos } from "#/components/molecules/RepoCard";

export const revalidate = 3600; // hourly

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
      <div className="flex flex-row gap-6">
        <Avatar className="w-20 h-20">
          <AvatarImage src="https://pbs.twimg.com/profile_images/1610356747478368256/nQ6lE-av_400x400.jpg" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <div className="my-auto">
          <h1 className="m-0 text-4xl text-black dark:text-white">
            Anthony Shew
          </h1>
          <p className={`m-0 mt-1 ${firaCode.className}`}>
            Engineer. Creator. Educator.
          </p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto mt-8 prose dark:prose-invert">
        <p>
          Hey, I'm Anthony. I played professional baseball for six years and now
          I write software. Currently at Vercel as a Content Engineer.
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

      <h2 className="my-6 text-2xl font-semibold text-black dark:text-white">
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
