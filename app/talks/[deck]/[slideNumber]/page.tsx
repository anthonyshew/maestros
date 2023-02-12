"use client";

import { allSlides, Slide } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import { mdxComponents } from "components/mdxComponents";
import { useEffect } from "react";

export const generateStaticParams = () =>
  allSlides.map((slide, index) => ({
    deck: slide._raw.sourceFileDir.split("/")[1],
    slideNumber: String(index + 1),
  }));

const SlideBody = (slide: Slide) => {
  const MDXContent = useMDXComponent(slide.body.code);
  return <MDXContent components={mdxComponents} />;
};

export default function Page({
  params,
}: {
  params: { deck: string; slideNumber: string };
}) {
  const { slideNumber, deck } = params;

  useEffect(() => {
    const handler = (event) => console.log("wut", event.data);

    if (typeof window === "undefined") return;
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [window]);

  const slideContent = allSlides
    .filter((slide) => slide.deck === deck)
    .filter((slide) => slide.order === Number(slideNumber))[0];

  if (!slideContent) return notFound();

  return <SlideBody {...slideContent} />;
}
