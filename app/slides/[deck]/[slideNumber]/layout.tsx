"use client";

import { useNextSlideKeyPress, usePrevSlideKeyPress } from "./hooks";
import { useRouter, notFound } from "next/navigation";
import { firaCode } from "../../../fonts";
import { useKeyPress } from "../../hooks";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slideNumber: string; deck: string };
}) {
  const { slideNumber, deck } = params;

  useNextSlideKeyPress({ currentSlide: Number(slideNumber), deck });
  usePrevSlideKeyPress({ currentSlide: Number(slideNumber), deck });

  if (isNaN(Number(slideNumber))) return notFound();

  return (
    <>
      <p className={`${firaCode.className} absolute top-4 left-4`}>
        <span className="text-white">anthonyshew 👟</span>
        {/* <span className="ml-2 text-gray-800">{slideContent.cliFlair}</span> */}
      </p>
      <div>{children}</div>
    </>
  );
}
