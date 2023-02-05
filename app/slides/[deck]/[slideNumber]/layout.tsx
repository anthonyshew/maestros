"use client";

import { allSlides } from "contentlayer/generated";
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
  const { push } = useRouter();
  useKeyPress(
    () =>
      push(
        `/slides/${deck}/${Math.min(
          Number(params.slideNumber) + 1,
          allSlides.filter((slide) => slide.deck === deck).length
        )}`
      ),
    ["ArrowRight"]
  );
  useKeyPress(
    () =>
      push(`/slides/${deck}/${Math.max(Number(params.slideNumber) - 1, 1)}`),
    ["ArrowLeft"]
  );

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
