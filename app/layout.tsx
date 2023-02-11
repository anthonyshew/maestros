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
    <html lang="en" className={`${inter.variable}`}>
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
