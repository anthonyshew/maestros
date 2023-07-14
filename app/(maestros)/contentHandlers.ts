import { MaestrosLesson, allDocuments } from "contentlayer/generated";

export const sideBarItems = allDocuments
  .filter((doc) => doc.type === "MaestrosLesson")
  .sort((a: MaestrosLesson, b: MaestrosLesson) => a.sidebarOrderPosition - b.sidebarOrderPosition)
  .map((lesson: MaestrosLesson) => {
    return {
      title: lesson.title,
      isNestedPage: (lesson._raw.flattenedPath.match(/\//g) ?? []).length > 2,
      unpublished: lesson.unpublished,
      directory: lesson._raw.sourceFileDir,
      sidebarOrderPosition: lesson.sidebarOrderPosition,
      isIndex: lesson._raw.sourceFileName === "index.mdx",
      path: "/monorepos/".concat(
        lesson._raw.flattenedPath
          .replaceAll("maestros/lessons/", "")
          .replaceAll("index", "")
      ),
    };
  });

export const buildNavigationGroups = () => {
  const buildMe: Array<typeof sideBarItems[number] & { children: typeof sideBarItems }> = []
  const items = sideBarItems

  const allTopLevels = items.filter(item => item.isIndex)

  allTopLevels.forEach(item => {
    buildMe[item.sidebarOrderPosition] = { ...item, children: [] }
  })

  const allChildren = items.filter(item => !item.isIndex)

  allChildren.forEach(item => {
    const ind = buildMe.findIndex(i => {
      return i.directory === item.directory
    })

    if (ind > -1) {
      // @ts-expect-error I just don't feel like dealing with this correctly if I'm being honest.
      buildMe[ind].children[item.sidebarOrderPosition] = item
    }
  })

  return buildMe
}

export const getPageDocument = (slug: string[]): MaestrosLesson => {
  return allDocuments.filter((doc) => {
    return (
      doc._id
        .replaceAll(".mdx", "")
        .replace("/index", "")
        .split("/")
        .slice(2)
        .join("/") === slug.join("/")
    );
  })[0] as MaestrosLesson
}