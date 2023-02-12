"use client";

import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [child, setChild] = useState<any>(null);
  return (
    <main className="grid h-screen text-black place-items-center">
      {children}
    </main>
  );
};

export default Layout;
