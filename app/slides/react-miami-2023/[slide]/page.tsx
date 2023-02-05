import slides from "../slides";

export const generateStaticParams = () =>
  slides.map((_, index) => ({ slide: String(index + 1) }));

export default function Page({ params }: { params: { slide: string } }) {
  const { slide } = params;

  const slideContent = slides[Number(slide) - 1];

  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      {slideContent.items.map((item) => item)}
    </div>
  );
}
