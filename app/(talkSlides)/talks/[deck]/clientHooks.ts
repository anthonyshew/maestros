'use client'

import { useRouter } from "next/navigation";
import { useEffect, useCallback } from "react";

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


export function useKeyPress(callback: () => void, keys: string[]): void {
  const handler = useCallback(
    ({ key }: KeyboardEvent) => {
      if (keys.includes(key)) {
        callback();
      }
    },
    [callback, keys]
  );

  useEffect(() => {
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [handler]);
}
