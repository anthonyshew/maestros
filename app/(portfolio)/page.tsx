import Link from "next/link";
import { github } from "lib/github";

export const revalidate = 3600; // hourly

const getData = async () => {
  const [pinned, kittr, personalRepos] = await Promise.all([
    fetch("https://gh-pinned-repos.egoist.dev/?username=anthonyshew").then(
      (res) => res.json()
    ),
    github.rest.repos.get({
      owner: "kittrgg",
      repo: "kittr",
    }),
    github.rest.repos.listForUser({
      username: "anthonyshew",
      sort: "pushed",
    }),
  ]);

  console.log(pinned);

  return [
    {
      name: pinned[0].repo,
      stargazers_count: pinned[0].stars,
      forks: pinned[0].forks,
      fork: false,
      private: false,
    },
    kittr.data,
    ...personalRepos.data,
  ];
};

export default async function Home() {
  const data = await getData();

  return (
    <div className="max-w-xl py-8 mx-auto">
      <pre>
        {JSON.stringify(
          data
            .filter((repo) => !repo.fork)
            .filter((repo) => !repo.private)
            .map((repo) => ({
              name: repo.name,
              forks: repo.forks,
              stargazers: repo.stargazers_count,
            })),
          null,
          2
        )}
      </pre>
      {/* <pre>{data.data.stargazers_count}</pre>
      <pre>{data.data.open_issues_count}</pre>
      <pre>{data.data.description ?? "No description"}</pre> */}
      <h1 className="mb-8 text-3xl font-bold text-center">Next.js Example</h1>
      <div className="flex flex-col">
        <Link href="/blog">Blog Posts</Link>
        <Link href="/slides">Slide Decks</Link>
      </div>
    </div>
  );
}
