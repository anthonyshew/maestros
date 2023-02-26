import { allSlides } from "contentlayer/generated";
import { useDeckTheme } from "../serverHooks";
import { notFound } from "next/navigation";
import { firaCode } from "#/app/fonts";
import { Metadata } from "next";
import { buildMeta } from "#/app/metadata";
import { talksData } from "#/content/talks/talksData";

export interface PageParams {
  params: {
    deck: string;
    slideNumber: string;
  };
}
export const generateMetadata = async ({
  params,
}: PageParams): Promise<Metadata> => {
  return await buildMeta({
    title: "Talks",
    description: `Slide ${params.slideNumber} of my ${
      talksData[params.deck]?.title ?? "talk"
    }`,
  });
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slideNumber: string; deck: string };
}) {
  const { slideNumber, deck } = params;
  const theme = useDeckTheme(deck);

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
