import { Navbar } from "#/components/Navbar";
import "../globals.css";
import globalMetadata from "../metadata";
// import { Providers } from "#/app/providers";

export const metadata = globalMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      <main className="flex flex-col flex-auto max-w-5xl min-h-screen px-4 pb-4 mx-auto sm:py-8 lg:py-20 md:px-0 md:flex-row">
        <Navbar
          links={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Talks", href: "/talks" },
          ]}
        />
        {/* <Providers>{children}</Providers> */}
        {children}
      </main>
    </body>
  );
}
