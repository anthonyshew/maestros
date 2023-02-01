import slides from "../slides";
export default function Page({ params }: { params: { slide: string } }) {
  const { slide } = params;

  const slideContent = slides[Number(slide) - 1];

  return <>{slideContent.items.map((item) => item)}</>;
}
