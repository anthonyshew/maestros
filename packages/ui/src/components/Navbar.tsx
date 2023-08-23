import { ThemeController } from '#components/ThemeController';
import Link from 'next/link';

interface Props {
  links: Array<{
    label: string;
    href: string;
  }>;
}

export const Navbar = ({ links }: Props) => {
  return (
    <nav className="flex flex-row justify-center w-full gap-4 py-8 md:mx-10 md:mr-20 md:mt-24 md:flex-col md:w-16 md:justify-start">
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
      <div className="hidden md:inline">
        <ThemeController />
      </div>
    </nav>
  );
};
