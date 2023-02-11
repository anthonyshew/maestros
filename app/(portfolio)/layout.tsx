import { Navbar } from "#/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
  );
}
