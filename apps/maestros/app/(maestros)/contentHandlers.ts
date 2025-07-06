import type { MaestrosLesson } from "contentlayer/generated";
import { allDocuments } from "contentlayer/generated";

export const sideBarItems = allDocuments
	.filter((doc): doc is MaestrosLesson => doc.type === "MaestrosLesson")
	.sort((a, b) => a.sidebarOrderPosition - b.sidebarOrderPosition)
	.map((lesson) => {
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
					.replaceAll("index", ""),
			),
		};
	});

export const buildNavigationGroups = () => {
	const buildMe: ((typeof sideBarItems)[number] & {
		children: typeof sideBarItems;
	})[] = [];
	const items = sideBarItems;

	const allTopLevels = items.filter((item) => item.isIndex);

	allTopLevels.forEach((item) => {
		buildMe[item.sidebarOrderPosition] = { ...item, children: [] };
	});

	const allChildren = items.filter((item) => !item.isIndex);

	allChildren.forEach((item) => {
		const ind = buildMe.findIndex((i) => {
			return i.directory === item.directory;
		});

		if (ind > -1) {
			buildMe[ind].children[item.sidebarOrderPosition] = item;
		}
	});

	return buildMe;
};

export const getPageDocument = (slug: string[]): MaestrosLesson | undefined => {
	return allDocuments.filter((doc) => {
		return (
			doc._id
				.replaceAll(".mdx", "")
				.replace("/index", "")
				.split("/")
				.slice(2)
				.join("/") === slug.join("/")
		);
	})[0] as MaestrosLesson;
};
