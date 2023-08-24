import { SheetLink } from '@repo/ui';
import Link from 'next/link';
import { buildNavigationGroups } from '#/app/(maestros)/contentHandlers';
import { linkStyles } from '#/app/(maestros)/navLinks';

export function SideBarContent() {
  return (
    <>
      {buildNavigationGroups().map((link) => {
        return (
          <>
            <SheetLink
              aria-disabled={link.unpublished}
              className={linkStyles({
                position: link.isNestedPage ? 'isNested' : undefined,
                status: link.unpublished ? 'unpublished' : undefined,
              })}
              linkComponent={Link}
              key={link.path}
              // href={link.unpublished ? "" : link.path}
              href={link.unpublished ? '' : link.path}
            >
              {link.isNestedPage ? '↳ ' : ''}
              {link.title}
            </SheetLink>
            {link.children.map((childLink) => {
              return (
                <SheetLink
                  aria-disabled={childLink.unpublished}
                  className={linkStyles({
                    position: 'isNested',
                    status: childLink.unpublished ? 'unpublished' : undefined,
                  })}
                  href={childLink.unpublished ? '' : childLink.path}
                  key={childLink.path}
                  linkComponent={Link}
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
}
