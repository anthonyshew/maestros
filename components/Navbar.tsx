import Link from "next/link";
import type { Route } from "next";

interface Props<T extends string> {
  links: Array<{
    label: string;
    href: Route<T> | URL;
  }>;
}

export const Navbar = <T extends string>({ links }: Props<T>) => {
  return (
    <nav className="flex flex-row justify-center w-full gap-4 py-4 md:mx-10 md:mr-20 md:mt-24 md:flex-col md:w-16 md:justify-start">
      {links.map((link) => {
        return (
          <Link
            key={link.label}
            href={link.href}
            className="tracking-wider group"
          >
            {link.label}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1px] bg-slate-800 dark:bg-white"></span>
          </Link>
        );
      })}
    </nav>
  );
};
