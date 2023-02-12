"use client";

"use client";

import { allSlides } from "contentlayer/generated";
import { useNextSlideKeyPress, usePrevSlideKeyPress } from "./hooks";
import { notFound } from "next/navigation";
import { firaCode } from "../../../fonts";
import { useState } from "react";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slideNumber: string; deck: string };
}) {
  const [child, setChild] = useState<any>(null);
  const { slideNumber, deck } = params;

  useNextSlideKeyPress({
    childWindowReference: child,
    currentSlide: Number(slideNumber),
    deck,
  });

  usePrevSlideKeyPress({
    childWindowReference: child,
    currentSlide: Number(slideNumber),
    deck,
  });

  if (isNaN(Number(slideNumber))) return notFound();

  const slideContent = allSlides
    .filter((slide) => slide.deck === deck)
    .filter((slide) => slide.order === Number(slideNumber))[0];

  if (!slideContent) return notFound();

  return (
    <>
      <p className={`absolute ${firaCode.className} top-4 left-4`}>
        <span className="text-black">anthonyshew 👟</span>
        <span className="ml-2 text-sky-400">~/{slideContent.cliFlair}</span>
      </p>
      <div>{children}</div>
    </>
  );
}
