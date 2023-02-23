"use client";

import { useState } from "react";
import {
  defaultPresentationValue,
  PresentationCtx,
} from "#/app/(talkSlides)/PresentationContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [presentation, setPresentation] = useState(
    defaultPresentationValue.childWindow
  );

  return (
    <PresentationCtx.Provider
      value={{
        childWindow: presentation,
        setChildWindow: setPresentation,
      }}
    >
      {children}
    </PresentationCtx.Provider>
  );
};

export default Layout;
