"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home({ params }: { params: { deck: string } }) {
  const [child, setChild] = useState<any>(null);

  return (
    <main className="flex flex-col items-center content-center justify-center min-w-full min-h-screen ">
      <div className="flex flex-col gap-4">
        <p>Welcome to my slides.</p>
        <p>
          You'll be able to navigate with your keyboard with the left and right
          arrows.
        </p>
        <p>and there will be my speaking notes if you hit up.</p>
      </div>
      <button
        onClick={() =>
          child.postMessage({
            source: "slide-controller",
            payload: "howdyhowdy",
          })
        }
      >
        send thing
      </button>
      <button onClick={() => setChild(window.open(`/talks/${params.deck}/1`))}>
        Pop the presentation view
      </button>
      <Link href={`/talks/${params.deck}/1`}>Start</Link>
      <Link href="/talks">Back to slide deck library</Link>
    </main>
  );
}
