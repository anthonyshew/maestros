import type { Metadata } from 'next';
import { ThemeController, Navbar } from '@repo/ui';
import { Analytics } from '@repo/analytics';
import { inter } from '#/app/fonts';
import { ThemeWrapper } from '#/app/providers';
import { buildMeta } from '#/app/metadata';
import '#/app/globals.css';

export const generateMetadata = (): Metadata => {
  return buildMeta({
    title: 'Anthony Shew',
  });
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`min-h-screen ${inter.className} antialiased`}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <Analytics />
        <ThemeWrapper>
          <main className="relative flex flex-col flex-auto max-w-5xl min-h-screen px-6 pb-4 mx-auto sm:py-8 lg:py-20 md:flex-row">
            <div className="absolute right-4 top-8 md:hidden">
              <ThemeController />
            </div>
            <Navbar
              links={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: 'Talks', href: '/talks' },
              ]}
            />
            {children}
          </main>
        </ThemeWrapper>
      </body>
    </html>
  );
}
