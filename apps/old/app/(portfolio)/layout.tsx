import { inter } from "#/app/fonts";
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
      className={`min-h-screen ${inter.className} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeWrapper>
          <main className="relative flex flex-col flex-auto max-w-5xl min-h-screen px-6 pb-4 mx-auto sm:py-8 lg:py-20 md:flex-row">
            <div className="absolute right-4 top-8 md:hidden">
              <ThemeController />
            </div>
            <Navbar
              links={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Talks", href: "/talks" },
              ]}
            />
            {children}
          </main>
        </ThemeWrapper>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
