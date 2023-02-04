import { Sidebar } from "../../components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row max-w-4xl mx-4 mt-8 mb-40 antialiased md:flex-row md:mt-20 lg:mt-32 lg:mx-auto">
      <main className="flex flex-col flex-auto min-w-0 px-2 mt-6 md:mt-0 md:px-0">
        {children}
      </main>
    </div>
  );
}
