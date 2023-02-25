"use client";

import { usePresentationCtx } from "#/app/(talkSlides)/usePresentationContext";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import Balancer from "react-wrap-balancer";

interface Params {
  deck: string;
  mode: "Presenter" | "Viewer";
  description: string;
}

export const StartButton = ({ deck, mode, description }: Params) => {
  const { setChildWindow } = usePresentationCtx();
  const { setTheme } = useTheme();
  const { push } = useRouter();

  return (
    <button
      className="flex flex-col w-full p-4 text-left transition-all border-2 rounded-lg border-slate-500 dark:hover:bg-slate-800"
      onClick={() => {
        const target = `/talks/${deck}/1`;
        setTheme("light");
        if (mode === "Presenter") {
          setChildWindow ? setChildWindow(window.open(target)) : null;
        }
        push(target);
      }}
    >
      <span className="font-semibold">{mode} Mode</span>
      <span className="w-10/12">
        <Balancer>{description}</Balancer>
      </span>
      <span className="ml-auto font-bold">Start</span>
    </button>
  );
};
