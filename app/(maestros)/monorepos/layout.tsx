import { inter } from "#/app/fonts";
import type { Metadata } from "next";
import AnalyticsWrapper from "#/components/Analytics";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  // SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetLink,
} from "#/components/Sheet";
import { buildMeta } from "#/app/metadata";
import "#/app/globals.css";
import { ThemeWrapper } from "#/app/providers";
import { GitHub } from "#/components/Icons";
import { Twitter, SidebarOpen, Music } from "lucide-react";
import { ThemeController } from "#/components/ThemeController";
import Link from "next/link";
import { links } from "#/app/(maestros)/navLinks";
import { SideBarContent } from "#/app/(maestros)/monorepos/SidebarContent";
import { buildNavigationGroups } from "#/app/(maestros)/contentHandlers";
import { linkStyles } from "../navLinks";

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
      <body className="relative flex flex-row max-h-screen min-h-screen">
        <ThemeWrapper>
          <Sheet>
            <nav className="absolute flex flex-row items-center w-full gap-8 px-6 border-b h-14 border-yellow-400/80">
              <Link className="flex flex-row gap-4 font-bold" href="/monorepos">
                <Music />{" "}
                <span className="hidden sm:inline-block">Maestros</span>
              </Link>
              <SheetTrigger>
                <SidebarOpen className="md:hidden" />
              </SheetTrigger>
              <div className="flex-row hidden gap-8 md:flex">
                {links.mainLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="underline-offset-4 hover:underline"
                  >
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
            <aside className="hidden w-0 overflow-auto h-[calc(100vh-3.5rem)] p-6 border-r border-yellow-400/80 mt-14 md:w-80 md:flex md:flex-col md:gap-4">
              {buildNavigationGroups().map((link) => {
                return (
                  <>
                    <Link
                      key={link.path}
                      href={link.unpublished ? "" : link.path}
                      className={linkStyles({
                        status: link.unpublished ? "unpublished" : undefined,
                      })}
                      aria-disabled={link.unpublished}
                    >
                      {link.isNestedPage ? "- " : ""}
                      {link.title}
                    </Link>
                    {link.children.map((childLink) => {
                      return (
                        <Link
                          key={childLink.path}
                          href={childLink.unpublished ? "" : childLink.path}
                          className={linkStyles({
                            position: "isNested",
                            status: childLink.unpublished
                              ? "unpublished"
                              : undefined,
                          })}
                          aria-disabled={childLink.unpublished}
                        >
                          {"- "}
                          {childLink.title}
                        </Link>
                      );
                    })}
                  </>
                );
              })}
            </aside>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>
                  <Link
                    className="flex flex-row gap-4 font-bold"
                    href="/monorepos"
                  >
                    <Music /> Monorepo Maestros
                  </Link>
                </SheetTitle>

                <hr className="!my-4 border-yellow-400" />
                {links.mainLinks.map((link) => (
                  <SheetLink key={link.href} href={link.href}>
                    {link.text}
                  </SheetLink>
                ))}
                <hr className="!my-4 !mt-5 border-yellow-400" />
                {/* <SheetDescription>
                  This course is meant to work linearly but feel free to explore
                  as you wish.
                </SheetDescription> */}
                <SideBarContent />
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <main className="relative flex flex-col justify-start flex-auto h-[calc(100vh-3.5rem)] px-8 pt-8 md:px-12 overflow-auto mt-14 sm:py-8 lg:py-14">
            {children}
          </main>
        </ThemeWrapper>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
