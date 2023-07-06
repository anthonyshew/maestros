import { SheetLink } from "#/components/Sheet";
import { sideBarItems } from "#/app/(maestros)/contentHandlers";
import { linkStyles } from "#/app/(maestros)/navLinks";

export const SideBarContent = () => {
  return (
    <>
      {sideBarItems.map((link) => {
        return (
          <SheetLink
            key={link.path}
            href={link.unpublished ? "" : link.path}
            className={linkStyles({
              position: link.isNestedPage ? "isNested" : undefined,
              status: link.unpublished ? "unpublished" : undefined,
            })}
            aria-disabled={link.unpublished}
          >
            {link.isNestedPage ? "- " : ""}
            {link.title}
          </SheetLink>
        );
      })}
    </>
  );
};
