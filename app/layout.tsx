import "../styles/globals.css";
import { rubik } from "./fonts";
import AnalyticsWrapper from "../components/Analytics";
import globalMetadata from "./metadata";
import { Providers } from "./providers";

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
        <Providers>{children}</Providers>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
