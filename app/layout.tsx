import { rubik } from "./fonts";
import type { Metadata } from "next";
import AnalyticsWrapper from "#/components/Analytics";
import baseMetadata from "#/app/metadata";

export async function generateMetadata({}): Promise<Metadata> {
  const pageMetadata = baseMetadata;

  pageMetadata.openGraph.images = [
    {
      url: `https://${process.env.VERCEL_URL}/api/og?title=Welcome%20to%my%20site`,
      width: 1920,
      height: 1080,
    },
  ];

  return baseMetadata;
}

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
