import { Navbar } from "#/components/Navbar";
import "../globals.css";
import { Providers } from "#/app/providers";
import { ThemeController } from "#/components/ThemeController";
import { Metadata } from "next";
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

  return { ...baseMetadata, title: "Home" };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      <Providers>
        <main className="flex flex-col flex-auto max-w-5xl min-h-screen px-4 pb-4 mx-auto sm:py-8 lg:py-20 md:flex-row">
          <ThemeController />
          <Navbar
            links={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Talks", href: "/talks" },
            ]}
          />
          {children}
        </main>
      </Providers>
    </body>
  );
}
