"use client";

import { usePresentationCtx } from "../../../(talkSlides)/usePresentationContext";
import { useRouter } from "next/navigation";
import { talksData } from "../talksData";

export default function Home({ params }: { params: { deck: string } }) {
  const { setChildWindow } = usePresentationCtx();
  const { push } = useRouter();

  return (
    <div className="prose">
      <h1>{talksData[params.deck]?.title}</h1>
      <ul>
        <li>Press your left arrow to go back a slide.</li>
        <li>Press your right arrow to go forward a slide.</li>
        <li>Press your up arrow to see my speaking notes.</li>
      </ul>

      <button
        className="flex flex-col w-full p-4 text-left border-2 rounded border-slate-500"
        onClick={() => {
          const target = `/talks/${params.deck}/1`;
          push(target);
        }}
      >
        <span>Viewer Mode</span>
        <span>Just browse the slides and speaking notes. </span>
        <span className="ml-auto">Enter →</span>
      </button>

      <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2">
        <div className="w-full sm:w-1/2">
          <button
            className="block p-2 mx-auto my-2 text-white border rounded-lg bg-slate-800"
            onClick={() => {
              const target = `/talks/${params.deck}/1`;
              push(target);
            }}
          >
            Enter viewer mode
          </button>
          <p>Just browse the slides and speaking notes. </p>
        </div>
        <div className="w-full sm:w-1/2">
          <button
            className="block p-2 mx-auto my-2 text-white border rounded-lg bg-slate-800"
            onClick={() => {
              const target = `/talks/${params.deck}/1`;
              setChildWindow ? setChildWindow(window.open(target)) : null;
              push(target);
            }}
          >
            Enter presenter mode
          </button>
          <p>
            You&apos;ll get a second window to show to the audience on a
            different screen. Both tabs will stay in sync for the slide number.
          </p>
        </div>
      </div>
    </div>
  );
}
