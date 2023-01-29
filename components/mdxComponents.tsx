import NextImage from "next/image";

import type { ImageProps } from "next/image";

export const mdxComponents = {
  Img: (props: ImageProps) => {
    return (
      <div>
        <NextImage {...props} />
      </div>
    );
  },
};
