"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  console.log(pathname);

  const isLeft = pathname.includes("left");

  return (
    <main>
      <div>
        <Link href="/test/left">left</Link>
        <Link href="/test/right">right</Link>
        <motion.div animate={{ x: isLeft ? 0 : "20vw" }}>LALALALL</motion.div>
      </div>
      <div>{children}</div>
    </main>
  );
};

export default Layout;
