"use client";

import { allSlides } from "contentlayer/generated";
import { usePresentationCtx } from "#/app/(talkSlides)/usePresentationContext";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import { mdxComponents } from "components/mdxComponents";
import { useDeckListener, useToggleNotes } from "../clientHooks";
import { useNextSlideKeyPress, usePrevSlideKeyPress } from "../serverHooks";

export const generateStaticParams = () =>
  allSlides.map((slide, index) => ({
    deck: slide._raw.sourceFileDir.split("/")[1],
    slideNumber: String(index + 1),
  }));

export default function Page({
  params,
}: {
  params: { deck: string; slideNumber: string };
}) {
  const { slideNumber, deck } = params;

  useDeckListener(deck);
  useToggleNotes();
  const { areNotesOpen } = usePresentationCtx();

  useNextSlideKeyPress({
    currentSlide: Number(slideNumber),
    deck,
  });

  usePrevSlideKeyPress({
    currentSlide: Number(slideNumber),
    deck,
  });

  const slideContent = allSlides
    .filter((slide) => slide.deck === deck)
    .filter((slide) => slide.order === Number(slideNumber))[0];
  const MDXContent = useMDXComponent(slideContent?.body.code ?? "");

  if (!slideContent) return notFound();

  return (
    <>
      {areNotesOpen ? <p>jaklsdlkjfajkfdsjkldsaljkf</p> : null}
      <MDXContent components={mdxComponents} />
    </>
  );
}
