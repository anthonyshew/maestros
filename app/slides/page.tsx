import Link from "next/link";
import { allSlides } from "contentlayer/generated";

export default function Home() {
  // The split is for handling the file structure
  // e.g. /slides/abc drops the "/slides/" to become "abc"
  const paths = [
    ...new Set(allSlides.map((a) => a._raw.sourceFileDir.split("/")[1])),
  ];

  return (
    <main className="flex items-center content-center justify-center min-w-full min-h-screen">
      <div className="flex flex-col gap-4">
        {paths.map((path, index) => (
          <Link key={index} href={`slides/${path}`}>
            {path}
          </Link>
        ))}
      </div>
    </main>
  );
}
