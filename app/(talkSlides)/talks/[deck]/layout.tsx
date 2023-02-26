"use client";

import { useDeckTheme } from "./serverHooks";
import "#/app/globals.css";
import { notFound } from "next/navigation";

export default function RootLayout({
  children,
  params,
}: {
  params: { deck: string };
  children: React.ReactNode;
}) {
  const theme = useDeckTheme(params.deck);

  if (!theme) {
    notFound();
  }

  return (
    <body className={theme.body}>
      <main className={theme.main}>{children}</main>
    </body>
  );
}
