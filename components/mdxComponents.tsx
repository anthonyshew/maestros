import NextImage from "next/image";

import Balancer from "react-wrap-balancer";
import type { ImageProps } from "next/image";
import { TwoColumns, TwoColumnsProps } from "components/TwoColumns";

export const mdxComponents = {
  TwoColumns: (props: TwoColumnsProps) => {
    return (
      <>
        <TwoColumns {...props} />
      </>
    );
  },
  Img: (props: ImageProps) => {
    return (
      <div className="relative block">
        <NextImage {...props} className="rounded-md" />
      </div>
    );
  },
  h1: ({ children }: { children: string }) => {
    return (
      <h1 className="text-6xl">
        <Balancer>{children}</Balancer>
      </h1>
    );
  },
  h2: ({ children }: { children: string }) => {
    return (
      <h2 className="text-5xl">
        <Balancer>{children}</Balancer>
      </h2>
    );
  },
  h3: ({ children }: { children: string }) => {
    return (
      <h3 className="text-4xl">
        <Balancer>{children}</Balancer>
      </h3>
    );
  },
  h4: ({ children }: { children: string }) => {
    return (
      <h4 className="text-3xl">
        <Balancer>{children}</Balancer>
      </h4>
    );
  },
  h5: ({ children }: { children: string }) => {
    return (
      <h5 className="text-2xl">
        <Balancer>{children}</Balancer>
      </h5>
    );
  },
  h6: ({ children }: { children: string }) => {
    return (
      <h6 className="text-xl">
        <Balancer>{children}</Balancer>
      </h6>
    );
  },
};
