import { ReactNode } from "react";

const replaceNonAlphanumericsWithDash = (str: string) =>
  str.toLowerCase().replace(/[^a-z0-9]/gi, "-");

interface Props {
  component: React.ElementType;
  children: NonNullable<ReactNode>;
}

export function LinkHeading({ component, children, ...props }: Props) {
  const Comp = component;
  return (
    <>
      <Comp
        id={replaceNonAlphanumericsWithDash(children.toString())}
        className="!mt-0"
      >
        <span className="block pt-8" />
        <a
          className="font-bold no-underline hover:underline"
          href={`#${replaceNonAlphanumericsWithDash(children.toString())}`}
          {...props}
        >
          {children}
        </a>
      </Comp>
    </>
  );
}
