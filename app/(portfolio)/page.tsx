import Link from "next/link";
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
    <>
      <div className="flex flex-row flex-wrap justify-center min-w-full gap-8">
        {data.map((repo) => (
          <RepoCard key={repo.repo} {...repo} />
        ))}
      </div>
      <h1 className="mb-8 text-3xl font-bold text-center">Next.js Example</h1>
      <div className="flex flex-col">
        <Link href="/blog">Blog Posts</Link>
        <Link href="/slides">Slide Decks</Link>
      </div>
    </>
  );
}
