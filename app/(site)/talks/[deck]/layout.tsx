"use client";

import { useState } from "react";
import {
  defaultPresentationValue,
  PresentationCtx,
} from "../../../(talkSlides)/PresentationContext";

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
      <main className="grid h-screen text-black place-items-center">
        {children}
      </main>
    </PresentationCtx.Provider>
  );
};

export default Layout;
