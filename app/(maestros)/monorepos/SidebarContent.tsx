import { SheetLink } from "#/components/Sheet";
import { sideBarItems } from "#/app/(maestros)/monorepos/[...slug]/contentFetchers";

export const SideBarContent = () => {
  return (
    <>
      {sideBarItems.map((link) => {
        return (
          <SheetLink key={link.path} href={link.path}>
            {link.title}
          </SheetLink>
        );
      })}
    </>
  );
};
