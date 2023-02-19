"use client";

import { allSlides } from "contentlayer/generated";
import {
  useDeckTheme,
  useNextSlideKeyPress,
  usePrevSlideKeyPress,
} from "../serverHooks";
import { notFound } from "next/navigation";
import { firaCode } from "#/app/fonts";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slideNumber: string; deck: string };
}) {
  const { slideNumber, deck } = params;
  const theme = useDeckTheme(deck);

  useNextSlideKeyPress({
    currentSlide: Number(slideNumber),
    deck,
  });

  usePrevSlideKeyPress({
    currentSlide: Number(slideNumber),
    deck,
  });

  if (!theme) return notFound();
  if (isNaN(Number(slideNumber))) return notFound();

  const slideContent = allSlides
    .filter((slide) => slide.deck === deck)
    .filter((slide) => slide.order === Number(slideNumber))[0];

  if (!slideContent) return notFound();

  return (
    <>
      <p className={`absolute ${firaCode.className} top-4 left-4`}>
        <span className={theme.cliPrefix}>anthonyshew 👟</span>
        <span className={theme.cli}>~/{slideContent.cliFlair}</span>
      </p>
      {children}
    </>
  );
}
