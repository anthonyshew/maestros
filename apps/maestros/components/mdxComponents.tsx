import NextImage from 'next/image';
import { Code } from 'bright';
import Balancer from 'react-wrap-balancer';
import { LinkHeading } from '#/components/LinkHeading';
import type { ImageProps } from 'next/image';
import { TwoColumns, TwoColumnsProps } from '#/components/TwoColumns';
import { focus } from './bright/focus';
import { ReactNode } from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';

type UseMDXComponent = ReturnType<typeof useMDXComponent>;

interface CustomImageProps extends ImageProps {
  containerClassName: string;
}

Code.theme = {
  dark: 'github-dark',
  light: 'github-light',
};

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
  pre: async (props: {
    children: ReactNode;
    filename?: string;
    lang: 'ts' | 'js' | 'json';
    note?: string;
    // Meh, it works.
    // @ts-expect-error
  }): JSX.Element => {
    return (
      <>
        <div data-theme="dark" className="hidden dark:block">
          <Code
            lang={props.lang}
            className="!m-0 border border-gray-800"
            title={props.filename}
            extensions={[focus]}
          >
            {props.children}
          </Code>
          {props.note ? (
            <p className="!my-0 p-2 px-4 border-[1px] border-gray-800 text-sm border-t-0">
              Note: {props.note}
            </p>
          ) : null}
        </div>

        <div data-theme="light" className="block dark:hidden">
          <Code
            lang={props.lang}
            title={props.filename}
            className="!m-0 border border-gray-300"
            extensions={[focus]}
          >
            {props.children}
          </Code>
          {props.note ? (
            <p className="!my-0 p-2 px-4 border-[1px] border-gray-300 text-sm border-t-0">
              Note: {props.note}
            </p>
          ) : null}
        </div>
      </>
    );
  },
};
