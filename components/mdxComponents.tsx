import NextImage from "next/image";

import type { ImageProps } from "next/image";
import { Grid, GridProps } from "components/Grid";

export const mdxComponents = {
  Grid: (props: GridProps) => {
    return (
      <>
        <Grid {...props} />
      </>
    );
  },
  Img: (props: ImageProps) => {
    return (
      <div>
        <NextImage {...props} />
      </div>
    );
  },
};
