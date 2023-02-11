import { firaCode } from "#/app/fonts";
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
      <h1 className="text-4xl">Anthony Shew</h1>
      <p className={`${firaCode.className}`}>Engineer. Creator. Educator.</p>
      <div className="max-w-2xl mx-auto">
        <p>
          Hey, I'm Anthony. I played professional baseball for six years and now
          I write software. I'm currently based in Arizona and work at Vercel as
          a Content Engineer.
        </p>

        <p>
          I love helping folks with Next.js, Turborepo, Typescript, and mental
          performance skills. I also love shipping.
        </p>

        <p>
          In my spare time, I like to make content, contribute to open source,
          play guitar, and play hockey.
        </p>
      </div>

      <h2></h2>

      <div className="flex flex-row flex-wrap justify-center gap-8">
        {data.map((repo) => (
          <RepoCard key={repo.repo} {...repo} />
        ))}
      </div>
    </div>
  );
}
