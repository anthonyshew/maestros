import "../globals.css";
import globalMetadata from "../metadata";

export const metadata = globalMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col flex-auto max-w-5xl px-2 mx-auto sm:py-8 lg:py-20 md:px-0 md:flex-row">
      {children}
    </main>
  );
}
