"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  const isLeft = pathname.includes("left");

  return (
    <main>
      <button onClick={() => setIsVisible(!isVisible)}>switch</button>
      <div>
        <Link href="/test/left">left</Link>
        <Link href="/test/right">right</Link>
        <motion.div
          transition={{ duration: 1 }}
          animate={{ x: isLeft ? 0 : "20vw" }}
        >
          LALALALL
        </motion.div>
      </div>
      <AnimatePresence mode="wait" initial={false}>
        {isVisible ? (
          <motion.div
            key="testing"
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            make me do things
          </motion.div>
        ) : null}
        {children}
      </AnimatePresence>
    </main>
  );
};

export default Layout;
