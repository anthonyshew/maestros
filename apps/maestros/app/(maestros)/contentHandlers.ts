import { allDocs, type Doc } from "content-collections";

export const sideBarItems = allDocs
	.filter((doc) => doc.sidebarOrderPosition !== undefined)
	.sort((a, b) => (a.sidebarOrderPosition || 0) - (b.sidebarOrderPosition || 0))
	.map((lesson) => {
		const pathParts = lesson._meta.path.split('/');
		const isNestedPage = pathParts.length > 2;
		const directory = lesson._meta.directory?.replace('content/maestros/', '') || '';
		const isIndex = lesson._meta.fileName === "index.mdx";
		
		return {
			title: lesson.title,
			isNestedPage,
			unpublished: lesson.unpublished,
			directory,
			sidebarOrderPosition: lesson.sidebarOrderPosition || 0,
			isIndex,
			path: "/monorepos/".concat(
				lesson._meta.path
					.replace('lessons/', '')
					.replace('/index', ''),
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

export const getPageDocument = (slug: string[]): Doc | undefined => {
	return allDocs.find((doc) => {
		const docPath = doc._meta.path
			.replace('.mdx', '')
			.replace('/index', '')
			.replace('lessons/', '');
		
		return docPath === slug.join("/");
	});
};
