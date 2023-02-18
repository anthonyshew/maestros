"use client";

import { useContext } from "react";
import { PresentationCtx } from "./PresentationContext";

export const usePresentationCtx = () => useContext(PresentationCtx);
