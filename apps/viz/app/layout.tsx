import './globals.css';
import '../components/styles.css';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center min-h-screen bg-black">
        <div className="flex flex-row min-w-full">
          <div className="flex flex-col gap-4 text-white w-52">
            <Link href="/">Home</Link>
            <Link href="/json">json</Link>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
