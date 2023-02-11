import "../styles/globals.css";
import { inter } from "./fonts";
import AnalyticsWrapper from "../components/Analytics";
import globalMetadata from "./metadata";

export const metadata = globalMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} min-h-screen antialiased `}>
      <body className="container min-h-screen mx-auto text-slate-700">
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
