import { useDeckTheme } from "./serverHooks";
import "../../../globals.css";
import globalMetadata from "../../../metadata";
import { notFound } from "next/navigation";

export const metadata = globalMetadata;

export default function RootLayout({
  children,
  params,
}: {
  params: { deck: string };
  children: React.ReactNode;
}) {
  const theme = useDeckTheme(params.deck);

  if (!theme) {
    console.error("No theme found!");
    notFound();
  }

  return (
    <body className={theme.body}>
      <main className={theme.main}>{children}</main>
    </body>
  );
}
