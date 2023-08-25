import type { Metadata } from 'next';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetLink,
  GitHub,
  ThreadsApp,
} from '@repo/ui';
import Link from 'next/link';
import { Analytics } from '@repo/analytics';
import { Twitter, SidebarOpen, Music } from 'lucide-react';
import { Fragment } from 'react';
import { linkStyles } from '../navLinks';
import { inter } from '#/app/fonts';
import { buildMeta, metadataBaseURI } from '#/app/metadata';
import '#/app/globals.css';
import { ThemeWrapper } from '#/app/providers';
import { ThemeController } from '#/components/ThemeController';
import { links } from '#/app/(maestros)/navLinks';
import { SideBarContent } from '#/app/(maestros)/monorepos/SidebarContent';
import { buildNavigationGroups } from '#/app/(maestros)/contentHandlers';
import { AuthSessionProvider } from '#/app/(maestros)/monorepos/SessionProvider';

export const generateMetadata = (): Metadata => {
  return buildMeta({
    title: 'Monorepo Maestros',
    description: 'Make beautiful monorepo music.',
    ogImage: encodeURI(`${metadataBaseURI}/monorepos/api/og`),
  });
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`min-h-screen ${inter.className} antialiased dark`}
      lang="en"
      suppressHydrationWarning
    >
      <body className="relative flex flex-row max-h-screen min-h-screen">
        <AuthSessionProvider>
          <ThemeWrapper>
            <Sheet>
              <nav className="absolute flex flex-row items-center w-full gap-8 px-6 border-b h-14 border-yellow-400/80">
                <Link
                  className="flex flex-row gap-4 font-bold"
                  href="/monorepos"
                >
                  <Music />{' '}
                  <span className="hidden sm:inline-block">Maestros</span>
                </Link>
                <SheetTrigger>
                  <SidebarOpen className="md:hidden" />
                </SheetTrigger>
                <div className="flex-row hidden gap-8 md:flex">
                  {links.mainLinks.map((link) => (
                    <Link
                      className="underline-offset-4 hover:underline"
                      href={link.href}
                      key={link.href}
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-row gap-4 ml-auto">
                  <ThemeController />
                  <a
                    href="https://github.com/anthonyshew/maestros"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <GitHub className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com/anthonysheww"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Twitter className="w-6 h-6 fill-white" />
                  </a>

                  <a
                    href="https://www.threads.net/@anthonyshew"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <ThreadsApp className="w-6 h-6 fill-white" />
                  </a>
                </div>
              </nav>
              <aside className="hidden w-0 overflow-auto h-[calc(100vh-3.5rem)] p-6 border-r border-yellow-400/80 mt-14 md:w-80 md:flex md:flex-col md:gap-4">
                {buildNavigationGroups().map((link) => {
                  return (
                    <Fragment key={link.path}>
                      <Link
                        aria-disabled={link.unpublished}
                        className={linkStyles({
                          status: link.unpublished ? 'unpublished' : undefined,
                        })}
                        href={link.unpublished ? '' : link.path}
                      >
                        {link.isNestedPage ? '↳ ' : ''}
                        {link.title}
                      </Link>
                      {link.children.map((childLink) => {
                        return (
                          <Link
                            aria-disabled={childLink.unpublished}
                            className={linkStyles({
                              position: 'isNested',
                              status: childLink.unpublished
                                ? 'unpublished'
                                : undefined,
                            })}
                            href={childLink.unpublished ? '' : childLink.path}
                            key={link.path}
                          >
                            {'↳ '}
                            {childLink.title}
                          </Link>
                        );
                      })}
                    </Fragment>
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
                    <SheetLink
                      href={link.href}
                      key={link.href}
                      linkComponent={Link}
                    >
                      {link.text}
                    </SheetLink>
                  ))}
                  <hr className="!my-4 !mt-5 border-yellow-400" />
                  <SideBarContent />
                </SheetHeader>
              </SheetContent>
            </Sheet>
            <main className="relative flex flex-col justify-start flex-auto h-[calc(100vh-3.5rem)] px-8 pt-8 md:px-12 overflow-auto mt-14 sm:py-8 lg:py-14">
              {children}
            </main>
          </ThemeWrapper>
        </AuthSessionProvider>
        <Analytics />
      </body>
    </html>
  );
}
