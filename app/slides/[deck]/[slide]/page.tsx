import { allSlides, Slide } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { mdxComponents } from "components/mdxComponents";

export const generateStaticParams = () =>
  allSlides.map((slide, index) => ({
    deck: slide._raw.sourceFileDir.split("/")[1],
    slide: String(index + 1),
  }));

const SlideBody = (slide: Slide) => {
  const MDXContent = useMDXComponent(slide.body.code);
  return <MDXContent components={mdxComponents} />;
};

export default function Page({ params }: { params: { slide: string } }) {
  const { slide } = params;

  const slideContent = allSlides[Number(slide) - 1];

  return <SlideBody {...slideContent} />;
}
