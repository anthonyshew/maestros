import { ReactNode } from "react";

const replaceNonAlphanumericsWithDash = (str: string) => {
  return str.toLowerCase().replace(/[^a-z0-9]/gi, "-");
};
interface Props {
  component: React.ElementType;
  children: NonNullable<ReactNode>;
}

export function LinkHeading({ component, children, ...props }: Props) {
  const Comp = component;

  // The MDX can come back with an object for certain strings. (e.g. "`apps`")
  // This ensures we handle those correctly.
  const getChildren = (childrenn: ReactNode) => {
    // @ts-expect-error
    if (childrenn?.props) {
      // @ts-expect-error
      return children.props.children;
    }
    return childrenn;
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
            handledChildren.toString()
          )}`}
          {...props}
        >
          {children}
        </a>
      </Comp>
    </>
  );
}
