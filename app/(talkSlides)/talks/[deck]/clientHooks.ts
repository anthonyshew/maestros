import { useRouter } from "next/navigation";
import { useEffect } from "react";


/** Listen to the messages from the slide controller window. */
export const useDeckListener = (deck: string) => {
  const { push } = useRouter();

  useEffect(() => {
    const handleMessage = (message: {
      data: {
        source: string;
        payload: { newSlide: string };
      };
    }) => {
      if (message.data.source === "slide-controller") {
        push(`/talks/${deck}/${message.data.payload.newSlide}`);
      }
    };

    if (typeof window === "undefined") return;
    window.addEventListener("message", handleMessage);

    return () => window.removeEventListener("message", handleMessage);
  }, [push, deck]);
};