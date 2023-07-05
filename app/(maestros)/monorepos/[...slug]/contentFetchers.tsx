import {
  allMaestrosLessons,
  allMaestrosLandings,
} from "contentlayer/generated";

export const getLanding = (path?: string) => {
  const landing = allMaestrosLandings.find((page) => {
    return page.path === path;
  });

  return landing;
};

export const getLesson = (path?: string) => {
  const lesson = allMaestrosLessons.find((page) => {
    return page.path === path;
  });

  return lesson;
};
