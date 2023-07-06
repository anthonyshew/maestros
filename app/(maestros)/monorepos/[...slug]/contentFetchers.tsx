import { allDocuments, allMaestrosLandings } from "contentlayer/generated";

export const getLanding = (path?: string) => {
  const landing = allMaestrosLandings.find((page) => {
    return page.path === path;
  });

  return landing;
};

export const sideBarItems = allDocuments
  .filter((doc) => doc.type === "MaestrosLesson")
  .map((lesson) => {
    return {
      title: lesson.title,
      isNestedPage: (lesson._raw.flattenedPath.match(/\//g) ?? []).length > 2,
      path: "/monorepos/".concat(
        lesson._raw.flattenedPath
          .replaceAll("maestros/lessons/", "")
          .replaceAll("index", "")
      ),
    };
  });
