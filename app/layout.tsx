import { rubik } from "./fonts";
import type { Metadata } from "next";
import AnalyticsWrapper from "#/components/Analytics";

export async function generateMetadata({}): Promise<Metadata> {
  return {
    title: {
      default: "Anthony Shew",
      template: "%s | Anthony Shew",
    },
    robots: {
      index: true,
      follow: true,
    },
    description: "Engineer. Educator. Full stack comedian.",
    openGraph: {
      title: "Anthony Shew",
      description: "Engineer. Educator. Full stack comedian.",
      url: "https://shew.dev/images/me.png",
      siteName: "Anthony Shew",
      images: [
        {
          url: "https://shew.dev/images/me.png",
          width: 1920,
          height: 1080,
        },
      ],
      locale: "en-US",
      type: "website",
    },
    twitter: {
      title: "Anthony Shew",
      card: "summary_large_image",
    },
    icons: {
      shortcut: "/favicon.ico",
    },
  };
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
