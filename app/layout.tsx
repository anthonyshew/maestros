import "../styles/globals.css";
import { Inter } from "@next/font/google";
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
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
