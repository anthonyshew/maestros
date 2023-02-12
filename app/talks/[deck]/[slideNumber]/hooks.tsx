import { allSlides } from "contentlayer/generated";
import { useRouter } from "next/navigation";
import { useKeyPress } from "../../hooks";

interface SlideHandlerParams {
  // TODO: no any
  childWindowReference: any;
  currentSlide: number;
  deck: string;
}

export const useNextSlideKeyPress = ({
  childWindowReference,
  currentSlide,
  deck,
}: SlideHandlerParams): void => {
  const { push } = useRouter();

  useKeyPress(() => {
    const nextSlide = Math.min(
      currentSlide + 1,
      allSlides.filter((slide) => slide.deck === deck).length
    );

    if (nextSlide === currentSlide) return;

    childWindowReference.postMessage({
      source: "slide-controller",
      payload: "howdyhowdy",
    });

    return push(`/talks/${deck}/${nextSlide}`);
  }, ["ArrowRight"]);
};

export const usePrevSlideKeyPress = ({
  childWindowReference,
  currentSlide,
  deck,
}: SlideHandlerParams) => {
  const { push } = useRouter();
  useKeyPress(() => {
    const prevSlide = Math.max(currentSlide - 1, 1);

    if (prevSlide === currentSlide) return;

    childWindowReference.postMessage({
      source: "slide-controller",
      payload: "howdyhowdy",
    });

    return push(`/talks/${deck}/${Math.max(currentSlide - 1, 1)}`);
  }, ["ArrowLeft"]);
};
