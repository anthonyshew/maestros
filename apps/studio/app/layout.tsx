import './globals.css';
import '../components/styles.css';
import { Sidebar } from './Sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center min-h-screen bg-black">
        <div className="flex flex-row min-w-full">
          <Sidebar />
          <div className="w-full min-h-screen">{children}</div>
        </div>
      </body>
    </html>
  );
}
