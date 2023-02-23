import { allSlides } from "contentlayer/generated";
import { useRouter } from "next/navigation";
import { useKeyPress } from "./clientHooks";
import { usePresentationCtx } from "../../usePresentationContext";
import { themesStyles, DeckTheme } from "./themes";

interface SlideHandlerParams {
  currentSlide: number;
  deck: string;
}

export const useDeckTheme = (deck: string): DeckTheme | undefined => {
  return themesStyles[deck];
};

export const useNextSlideKeyPress = ({
  currentSlide,
  deck,
}: SlideHandlerParams): void => {
  const { childWindow } = usePresentationCtx();
  const { push } = useRouter();

  useKeyPress(() => {
    const nextSlide = Math.min(
      currentSlide + 1,
      allSlides.filter((slide) => slide.deck === deck).length
    );

    if (nextSlide === currentSlide) return;

    childWindow?.postMessage({
      source: "slide-controller",
      payload: { newSlide: nextSlide },
    });

    return push(`/talks/${deck}/${nextSlide}`);
  }, ["ArrowRight"]);
};

export const usePrevSlideKeyPress = ({
  currentSlide,
  deck,
}: SlideHandlerParams) => {
  const { childWindow } = usePresentationCtx();
  const { push } = useRouter();

  useKeyPress(() => {
    const prevSlide = Math.max(currentSlide - 1, 1);

    if (prevSlide === currentSlide) return;

    childWindow?.postMessage({
      source: "slide-controller",
      payload: { newSlide: prevSlide },
    });

    return push(`/talks/${deck}/${Math.max(currentSlide - 1, 1)}`);
  }, ["ArrowLeft"]);
};
