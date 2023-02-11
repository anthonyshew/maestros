import Link from "next/link";

export const revalidate = 3600; // hourly

const getData = async () => {
  const pins = await fetch(
    "https://gh-pinned-repos.egoist.dev/?username=anthonyshew"
  ).then((res) => res.json());

  return pins;
};

export default async function Home() {
  const data = await getData();

  return (
    <div className="max-w-xl py-8 mx-auto">
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h1 className="mb-8 text-3xl font-bold text-center">Next.js Example</h1>
      <div className="flex flex-col">
        <Link href="/blog">Blog Posts</Link>
        <Link href="/slides">Slide Decks</Link>
      </div>
    </div>
  );
}
