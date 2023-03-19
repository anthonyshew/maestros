"use client";

import { useState } from "react";
import {
  defaultPresentationValue,
  PresentationCtx,
} from "#/app/(talkSlides)/PresentationContext";
import { ThemeProvider } from "next-themes";

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

export function PresentationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [areNotesOpen, setAreNotesOpen] = useState(false);
  const [childWindow, setChildWindow] = useState(
    defaultPresentationValue.childWindow
  );

  return (
    <PresentationCtx.Provider
      value={{
        childWindow,
        setChildWindow,
        areNotesOpen,
        setAreNotesOpen,
      }}
    >
      {children}
    </PresentationCtx.Provider>
  );
}
