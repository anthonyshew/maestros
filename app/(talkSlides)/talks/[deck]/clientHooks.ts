'use client'

import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation';
import { useEffect, useCallback } from "react";
import { usePresentationCtx } from '#/app/(talkSlides)/usePresentationContext';

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
        push(`/talks/${deck}/${message.data.payload.newSlide}?blockSpeakerNotes=true`);
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

export const useToggleNotes = () => {
  const { areNotesOpen, setAreNotesOpen } = usePresentationCtx()
  const searchParams = useSearchParams()
  const isViewerWindow = searchParams?.get("blockSpeakerNotes")

  useKeyPress(() => {
    if (isViewerWindow) return
    setAreNotesOpen ? setAreNotesOpen(!areNotesOpen) : null
  }, ["ArrowUp"]);
};
