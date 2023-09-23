import NextImage from 'next/image';
import { Code } from 'bright';
import Balancer from 'react-wrap-balancer';
import { LinkHeading } from '@repo/ui';
import type { ImageProps } from 'next/image';
import type { ReactNode } from 'react';
import { focus } from './bright/focus';

interface CustomImageProps extends ImageProps {
  containerClassName: string;
  srcDark: string;
  srcLight: string;
}

Code.theme = {
  dark: 'github-dark',
  light: 'github-light',
};

export const mdxComponents = {
  Img: (props: CustomImageProps) => {
    const { containerClassName, srcDark, srcLight, src: _src, ...rest } = props;

    return (
      <div className={`relative block ${containerClassName}`}>
        <NextImage
          className="hidden object-contain w-full h-auto rounded-md dark:block"
          height={1}
          sizes="100vw"
          src={srcDark}
          width={1}
          {...rest}
        />
        <NextImage
          className="block object-contain w-full h-auto rounded-md dark:hidden"
          height={1}
          sizes="100vw"
          src={srcLight}
          width={1}
          {...rest}
        />
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
  pre: (props: {
    children: ReactNode;
    filename?: string;
    lang: 'js' | 'json' | 'ts';
    note?: string;
    // Meh, it works.
  }): JSX.Element => {
    return (
      <>
        <div className="hidden dark:block" data-theme="dark">
          <Code
            className="!m-0 border border-gray-800"
            extensions={[focus]}
            lang={props.lang}
            title={props.filename}
          >
            {props.children}
          </Code>
          {props.note ? (
            <p className="!my-0 p-2 px-4 border-[1px] border-gray-800 text-sm border-t-0">
              Note: {props.note}
            </p>
          ) : null}
        </div>

        <div className="block dark:hidden" data-theme="light">
          <Code
            className="!m-0 border border-gray-300"
            extensions={[focus]}
            lang={props.lang}
            title={props.filename}
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
