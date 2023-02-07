import Link from "next/link";
import { github } from "lib/github";

export const revalidate = 3600; // hourly

const getData = async () =>
  await github.rest.repos.get({
    owner: "anthonyshew",
    repo: "portfolio",
  });

export default async function Home() {
  const data = await getData();

  return (
    <div className="max-w-xl py-8 mx-auto">
      <pre>{data.data.full_name}</pre>
      <pre>{data.data.stargazers_count}</pre>
      <pre>{data.data.open_issues_count}</pre>
      <pre>{data.data.description ?? "No description"}</pre>
      <h1 className="mb-8 text-3xl font-bold text-center">Next.js Example</h1>
      <div className="flex flex-col">
        <Link href="/blog">Blog Posts</Link>
        <Link href="/slides">Slide Decks</Link>
      </div>
    </div>
  );
}
