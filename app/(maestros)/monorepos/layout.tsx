import { inter } from "#/app/fonts";
import type { Metadata } from "next";
import AnalyticsWrapper from "#/components/Analytics";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetDescription,
  SheetLink,
  SheetHeader,
  SheetTitle,
} from "#/components/Sheet";
import { buildMeta } from "#/app/metadata";
import "#/app/globals.css";
import { ThemeWrapper } from "#/app/providers";
import { GitHub } from "#/components/Icons";
import { Twitter, SidebarOpen } from "lucide-react";
import { ThemeController } from "#/components/ThemeController";
import Link from "next/link";
import { links } from "#/app/(maestros)/navLinks";

export const generateMetadata = async (): Promise<Metadata> => {
  return await buildMeta({
    title: "Monorepo Maestros",
    description: "Make beautiful monorepo music.",
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
      className={`min-h-screen ${inter.className} antialiased dark`}
      suppressHydrationWarning
    >
      <body>
        <ThemeWrapper>
          <Sheet>
            <nav className="flex flex-row items-center gap-8 px-6 h-14">
              <p>Logo</p>
              <SheetTrigger>
                <SidebarOpen className="md:hidden" />
              </SheetTrigger>
              <div className="flex-row hidden gap-8 md:flex">
                {links.mainLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.text}
                  </Link>
                ))}
              </div>
              <div className="flex flex-row gap-4 ml-auto">
                <a
                  href="https://github.com/anthonyshew/maestros"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/anthonysheww"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-6 h-6 fill-white" />
                </a>
                <ThemeController />
              </div>
            </nav>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  This course is meant to work linearly but feel free to explore
                  as you wish.
                </SheetDescription>

                {links.sidebarLinks.map((link) => (
                  <SheetLink key={link.href} href={link.href}>
                    {link.text}
                  </SheetLink>
                ))}
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <main className="relative flex flex-col justify-center flex-auto min-h-screen px-4 pb-4 mx-auto sm:py-8 lg:py-20 md:flex-row">
            {children}
          </main>
        </ThemeWrapper>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
