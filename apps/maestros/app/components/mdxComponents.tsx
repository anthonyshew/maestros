import NextImage from 'next/image';
import { Code } from 'bright';
import Balancer from 'react-wrap-balancer';
import type { ImageProps } from 'next/image';
import type { ReactNode } from 'react';
import type { TwoColumnsProps } from '@repo/ui';
import { LinkHeading, TwoColumns } from '@repo/ui';
import { focus } from './bright-focus';

interface CustomImageProps extends ImageProps {
  containerClassName: string;
}

Code.theme = {
  dark: 'github-dark',
  light: 'github-light',
};

export const mdxComponents = {
  TwoColumns: (props: TwoColumnsProps) => {
    return <TwoColumns {...props} />;
  },
  Img: (props: CustomImageProps) => {
    const { containerClassName, ...rest } = props;

    return (
      <div className={`relative block ${containerClassName}`}>
        <NextImage {...rest} className="object-contain rounded-md" />
      </div>
    );
  },
  h1: ({ children }: { children?: ReactNode }) => {
    return (
      <h1>
        <Balancer>{children}</Balancer>
      </h1>
    );
  },
  h2: ({ children }: { children?: ReactNode }) => {
    return <LinkHeading component="h2">{children}</LinkHeading>;
  },
  h3: ({ children }: { children?: ReactNode }) => {
    return <LinkHeading component="h3">{children}</LinkHeading>;
  },
  h4: ({ children }: { children?: ReactNode }) => {
    return <LinkHeading component="h4">{children}</LinkHeading>;
  },
  h5: ({ children }: { children?: ReactNode }) => {
    return <LinkHeading component="h5">{children}</LinkHeading>;
  },
  h6: ({ children }: { children?: ReactNode }) => {
    return <LinkHeading component="h6">{children}</LinkHeading>;
  },
  pre: (props: {
    children?: ReactNode;
    filename?: string;
    note?: string;
  }): ReactNode => {
    // lang is indeed a prop but useMDXComponent hates it
    // Punting the type issue to here.
    const lang = (props as { lang: string }).lang;

    return (
      <>
        <div className="hidden dark:block" data-theme="dark">
          <Code
            className="!m-0 border border-gray-800"
            extensions={[focus]}
            lang={lang}
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
            lang={lang}
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
