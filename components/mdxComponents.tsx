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
      <h1>
        <Balancer>{children}</Balancer>
      </h1>
    );
  },
  h2: ({ children }: { children: string }) => {
    return (
      <h2>
        <Balancer>{children}</Balancer>
      </h2>
    );
  },
  h3: ({ children }: { children: string }) => {
    return (
      <h3>
        <Balancer>{children}</Balancer>
      </h3>
    );
  },
  h4: ({ children }: { children: string }) => {
    return (
      <h4>
        <Balancer>{children}</Balancer>
      </h4>
    );
  },
  h5: ({ children }: { children: string }) => {
    return (
      <h5>
        <Balancer>{children}</Balancer>
      </h5>
    );
  },
  h6: ({ children }: { children: string }) => {
    return (
      <h6>
        <Balancer>{children}</Balancer>
      </h6>
    );
  },
};
