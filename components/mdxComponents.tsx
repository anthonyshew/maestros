import NextImage from "next/image";
import Balancer from "react-wrap-balancer";
import { LinkHeading } from "#/components/LinkHeading";
import type { ImageProps } from "next/image";
import { TwoColumns, TwoColumnsProps } from "#/components/TwoColumns";
import { getHighlighter } from "shiki";

interface CustomImageProps extends ImageProps {
  containerClassName: string;
}

export const mdxComponents = {
  TwoColumns: (props: TwoColumnsProps) => {
    return (
      <>
        <TwoColumns {...props} />
      </>
    );
  },
  Img: (props: CustomImageProps) => {
    const { containerClassName, ...rest } = props;

    return (
      <div className={`relative block ${containerClassName}`}>
        <NextImage {...rest} className="object-contain rounded-md" />
      </div>
    );
  },
  h1: ({ children }: { children: string }) => {
    return (
      <h1>
        <Balancer>{children}</Balancer>
      </h1>
    );
  },
  h2: ({ children }: { children: string }) => {
    return <LinkHeading component="h2">{children}</LinkHeading>;
  },
  h3: ({ children }: { children: string }) => {
    return <LinkHeading component="h3">{children}</LinkHeading>;
  },
  h4: ({ children }: { children: string }) => {
    return <LinkHeading component="h4">{children}</LinkHeading>;
  },
  h5: ({ children }: { children: string }) => {
    return <LinkHeading component="h5">{children}</LinkHeading>;
  },
  h6: ({ children }: { children: string }) => {
    return <LinkHeading component="h6">{children}</LinkHeading>;
  },
  // Not in love with this but it works. ✨
  // @ts-expect-error
  pre: async (props): JSX.Element => {
    const { children } = props as {
      children: { props: { children: string; className: string } };
    };
    const code = children.props.children;
    const lang = children.props.className.replace("language-", "");

    return (
      <div
        dangerouslySetInnerHTML={{
          __html: await getHighlighter({
            theme: "github-dark-dimmed",
            langs: ["json", "ts", "tsx"],
          }).then((highlighter) => {
            return highlighter.codeToHtml(code, { lang });
          }),
        }}
      />
    );
  },
};
