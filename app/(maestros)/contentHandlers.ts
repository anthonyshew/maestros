import { MaestrosLesson, allDocuments } from "contentlayer/generated";

export const sideBarItems = allDocuments
  .filter((doc) => doc.type === "MaestrosLesson")
  .sort((a: MaestrosLesson, b: MaestrosLesson) => a.sidebarOrderPosition - b.sidebarOrderPosition)
  .map((lesson: MaestrosLesson) => {
    return {
      title: lesson.title,
      isNestedPage: (lesson._raw.flattenedPath.match(/\//g) ?? []).length > 2,
      unpublished: lesson.unpublished,
      path: "/monorepos/".concat(
        lesson._raw.flattenedPath
          .replaceAll("maestros/lessons/", "")
          .replaceAll("index", "")
      ),
    };
  });