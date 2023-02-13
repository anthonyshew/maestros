"use client";

import Link from "next/link";
import { usePresentationCtx } from "./[slideNumber]/usePresentationContext";
import { useRouter } from "next/navigation";

export default function Home({ params }: { params: { deck: string } }) {
  const { setChildWindow } = usePresentationCtx();
  const { push } = useRouter();

  return (
    <main className="flex flex-col items-center content-center justify-center min-w-full min-h-screen ">
      <div className="flex flex-col gap-4">
        <p>Welcome to my slides.</p>
        <p>
          You&apos;ll be able to navigate with your keyboard with the left and
          right arrows.
        </p>
        <p>and there will be my speaking notes if you hit up.</p>
      </div>
      <button
        onClick={() => {
          const target = `/talks/${params.deck}/1`;
          setChildWindow(window.open(target));
          push(target);
        }}
      >
        Begin Presenting
      </button>
      <Link href="/talks">Back to slide deck library</Link>
    </main>
  );
}
