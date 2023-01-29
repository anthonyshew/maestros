import "../styles/globals.css";
import { Inter } from "@next/font/google";
import { Sidebar } from "../components/Sidebar";
import AnalyticsWrapper from "../components/Analytics";
import globalMetadata from "./metadata";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = globalMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="flex flex-row max-w-4xl mx-4 mt-8 mb-40 antialiased md:flex-row md:mt-20 lg:mt-32 lg:mx-auto">
        <Sidebar />
        <main className="flex flex-col flex-auto min-w-0 px-2 mt-6 md:mt-0 md:px-0">
          {children}
          <AnalyticsWrapper />
        </main>
      </body>
    </html>
  );
}
