import { Sidebar } from "../../components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-row flex-auto max-w-5xl px-2 pt-8 pb-40 md:pt-10 lg:pt-20 md:px-0">
      <Sidebar
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
