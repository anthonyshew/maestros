import { Navbar } from "#/components/Navbar";
import "../styles/globals.css";
import { rubik } from "./fonts";
import AnalyticsWrapper from "#/components/Analytics";
import globalMetadata from "./metadata";
// import { Providers } from "#/app/providers";

export const metadata = globalMetadata;

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
      <body className="container min-h-screen mx-auto text-slate-700 dark:text-slate-100">
        {/* <Providers>{children}</Providers> */}
        <main className="flex flex-col flex-auto max-w-5xl px-2 mx-auto sm:py-8 lg:py-20 md:px-0 md:flex-row">
          <Navbar
            links={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Talks", href: "/talks" },
            ]}
          />
          {children}
        </main>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
