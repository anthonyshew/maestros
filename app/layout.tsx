import { rubik } from "./fonts";
import type { Metadata } from "next";
import AnalyticsWrapper from "#/components/Analytics";
import { buildMeta } from "#/app/metadata";

export const generateMetadata = async (): Promise<Metadata> => {
  return await buildMeta({
    title: "Anthony Shew",
  });
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`min-h-screen ${rubik.className} antialiased`}
      suppressHydrationWarning
    >
      {children}
      <AnalyticsWrapper />
    </html>
  );
}
