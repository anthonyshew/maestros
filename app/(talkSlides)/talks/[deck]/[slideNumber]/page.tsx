"use client";

import { allSlides } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import { mdxComponents } from "components/mdxComponents";
import { useDeckListener } from "../clientHooks";
import { Metadata } from "next";
import { buildMeta } from "#/app/metadata";
import { talksData } from "#/content/talks/talksData";

interface PageParams {
  params: {
    deck: string;
    slideNumber: string;
  };
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  return await buildMeta({
    title: "Talks",
    description: `Slide ${params.slideNumber} of my ${
      talksData[params.deck]?.title ?? "talk"
    }`,
  });
}

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

  const slideContent = allSlides
    .filter((slide) => slide.deck === deck)
    .filter((slide) => slide.order === Number(slideNumber))[0];

  const MDXContent = useMDXComponent(slideContent?.body.code ?? "");

  if (!slideContent) return notFound();

  return <MDXContent components={mdxComponents} />;
}
