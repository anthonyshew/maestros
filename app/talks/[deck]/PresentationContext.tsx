import { createContext, SetStateAction, Dispatch } from "react";

export interface Presentation {
  childWindow: Window | null;
  setChildWindow: Dispatch<SetStateAction<Window | null>> | null;
}

export const defaultPresentationValue: Presentation = {
  childWindow: null,
  setChildWindow: null,
};

export const PresentationCtx = createContext<Presentation>({
  childWindow: null,
  setChildWindow: null,
});
