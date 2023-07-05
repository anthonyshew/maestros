import { links } from "#/app/(maestros)/navLinks";
import { SheetLink } from "#/components/Sheet";

export const SideBarContent = () => {
  return (
    <>
      {links.sidebarLinks.map((link) => {
        return (
          <SheetLink key={link.href} href={link.href}>
            {link.text}
          </SheetLink>
        );
      })}
    </>
  );
};
