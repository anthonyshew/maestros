import { allMaestrosLandings } from "contentlayer/generated";

export const getLanding = (path?: string) => {
  const landing = allMaestrosLandings.find((page) => {
    return page.path === path;
  });

  return landing;
};
