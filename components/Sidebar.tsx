import Link from "next/link";

interface Props {
  links: Array<{
    label: string;
    href: string;
  }>;
}

export const Sidebar = ({ links }: Props) => {
  return (
    <nav className="flex flex-col w-32">
      {links.map((link) => {
        return (
          <Link key={link.label} href={link.href}>
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};
