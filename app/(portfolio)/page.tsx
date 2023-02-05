import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-xl py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center">Next.js Example</h1>
      <div className="flex flex-col">
        <Link href="/blog">Blog Posts</Link>
        <Link href="/slides">Slide Decks</Link>
      </div>
    </div>
  );
}
