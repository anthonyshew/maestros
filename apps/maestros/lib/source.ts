import { allDocs } from 'content-collections';

// Simple source implementation without fumadocs
export const source = {
  getPage: (slug: string[]) => {
    const path = slug.join('/');
    return allDocs.find(doc => 
      doc._meta.path.replace('lessons/', '').replace('.mdx', '').replace('/index', '') === path
    );
  },
  getPages: () => allDocs,
};