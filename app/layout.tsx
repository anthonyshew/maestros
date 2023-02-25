import { rubik } from "./fonts";
import AnalyticsWrapper from "#/components/Analytics";
import globalMetadata from "./metadata";

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
      {children}
      <AnalyticsWrapper />
    </html>
  );
}
