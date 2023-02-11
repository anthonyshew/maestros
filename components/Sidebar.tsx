import { firaCode } from "#/app/fonts";
import Link from "next/link";

interface Props {
  links: Array<{
    label: string;
    href: string;
  }>;
}

export const Sidebar = ({ links }: Props) => {
  return (
    <nav className="flex flex-col w-16 gap-4 mx-10 mt-24 mr-20">
      {links.map((link) => {
        return (
          <Link
            key={link.label}
            href={link.href}
            className="tracking-wider group"
          >
            {link.label}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-slate-800"></span>
          </Link>
        );
      })}
    </nav>
  );
};
