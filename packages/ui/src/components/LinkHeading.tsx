import type { ReactNode } from 'react';

const replaceNonAlphanumericsWithDash = (str: string) => {
  return str.toLowerCase().replace(/[^a-z0-9]/gi, '-');
};
interface Props {
  component: React.ElementType;
  children: NonNullable<ReactNode>;
}

export function LinkHeading({ component, children, ...props }: Props) {
  const Comp = component;

  // The MDX can come back with an object for certain strings. (e.g. "`apps`")
  // This ensures we handle those correctly.
  const getChildren = (nodeChildren: ReactNode) => {
    // @ts-expect-error
    if (nodeChildren.props) {
      // @ts-expect-error
      return children.props.children;
    }
    return nodeChildren;
  };

  const handledChildren = getChildren(children);

  return (
    <>
      <Comp
        id={replaceNonAlphanumericsWithDash(handledChildren.toString())}
        className="!mt-0"
      >
        <span className="block pt-8" />
        <a
          className="font-bold no-underline hover:underline"
          href={`#${replaceNonAlphanumericsWithDash(
            handledChildren.toString(),
          )}`}
          {...props}
        >
          {children}
        </a>
      </Comp>
    </>
  );
}
