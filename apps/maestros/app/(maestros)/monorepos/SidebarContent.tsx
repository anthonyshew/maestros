import { SheetLink } from '@repo/ui';
import { buildNavigationGroups } from '#/app/(maestros)/contentHandlers';
import { linkStyles } from '#/app/(maestros)/navLinks';

export const SideBarContent = () => {
  return (
    <>
      {buildNavigationGroups().map((link) => {
        return (
          <>
            <SheetLink
              key={link.path}
              // href={link.unpublished ? "" : link.path}
              href={link.unpublished ? '' : link.path}
              className={linkStyles({
                position: link.isNestedPage ? 'isNested' : undefined,
                status: link.unpublished ? 'unpublished' : undefined,
              })}
              aria-disabled={link.unpublished}
            >
              {link.isNestedPage ? '↳ ' : ''}
              {link.title}
            </SheetLink>
            {link.children.map((childLink) => {
              return (
                <SheetLink
                  key={childLink.path}
                  href={childLink.unpublished ? '' : childLink.path}
                  className={linkStyles({
                    position: 'isNested',
                    status: childLink.unpublished ? 'unpublished' : undefined,
                  })}
                  aria-disabled={childLink.unpublished}
                >
                  {'↳ '}
                  {childLink.title}
                </SheetLink>
              );
            })}
          </>
        );
      })}
    </>
  );
};
