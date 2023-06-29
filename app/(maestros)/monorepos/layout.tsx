import { rubik } from "#/app/fonts";
import type { Metadata } from "next";
import AnalyticsWrapper from "#/components/Analytics";
import { buildMeta } from "#/app/metadata";
import { Navbar } from "#/components/Navbar";
import "#/app/globals.css";
import { ThemeWrapper } from "#/app/providers";
import { ThemeController } from "#/components/ThemeController";

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
      <body>
        <ThemeWrapper>
          <main className="relative flex flex-col flex-auto max-w-5xl min-h-screen px-4 pb-4 mx-auto sm:py-8 lg:py-20 md:flex-row">
            <div className="absolute right-4 top-4 md:hidden">
              <ThemeController />
            </div>
            {children}
          </main>
        </ThemeWrapper>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
