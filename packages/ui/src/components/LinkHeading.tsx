import type { ReactNode } from 'react';

const replaceNonAlphanumericsWithDash = (str?: string) => {
  return str?.toLowerCase().replace(/[^a-z0-9]/gi, '-') ?? '';
};
interface LinkHeadingProps {
  component: React.ElementType;
  children: ReactNode;
}

export function LinkHeading({
  component,
  children,
  ...props
}: LinkHeadingProps) {
  const Comp = component;

  // The MDX can come back with an object for certain strings. (e.g. "`apps`")
  // This ensures we handle those correctly.
  const getChildren = (nodeChildren: ReactNode): ReactNode => {
    // @ts-expect-error Don't care at the moment!
    if (nodeChildren.props) {
      // @ts-expect-error Don't care at the moment!
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
      return children.props.children;
    }
    return nodeChildren;
  };

  const handledChildren = getChildren(children);

  return (
    <Comp
      className="!mt-0"
      id={replaceNonAlphanumericsWithDash(handledChildren?.toString())}
    >
      <span className="block pt-8" />
      <a
        className="font-bold no-underline hover:underline"
        href={`#${replaceNonAlphanumericsWithDash(
          handledChildren?.toString()
        )}`}
        {...props}
      >
        {children}
      </a>
    </Comp>
  );
}
