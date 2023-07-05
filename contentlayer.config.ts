import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const BlogPost = defineDocumentType(() => ({
  name: 'BlogPost',
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    summary: {
      type: "string",
      description: "A summary of the post to show on OGs and other key spots.",
      required: true
    }
  },
  computedFields: {
    slug: {
      type: 'string',
      // The split is for handling the file structure
      // e.g. /blog/abc drops the "/blog/" to become "abc"
      resolve: (doc) => doc._raw.flattenedPath.split("/")[1],
    },
  },
}))

const MaestrosLanding = defineDocumentType(() => ({
  name: "MaestrosLanding",
  filePathPattern: "maestros/landings/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: 'string',
      description: 'The title of the lesson',
      required: true,
    },
    slug: {
      type: 'string',
      description: 'Slug for the lesson (automatically prefixed with `/monorepos`',
      required: true,
    },
    ogDescription: {
      type: 'string',
      description: 'Description for OpenGraph images',
      required: true,
    }
  }
}))

const MaestrosLesson = defineDocumentType(() => ({
  name: "MaestrosLesson",
  filePathPattern: "maestros/lessons/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: 'string',
      description: 'The title of the lesson',
      required: true,
    },
    slug: {
      type: 'string',
      description: 'Slug for the lesson (automatically prefixed with `/monorepos`',
      required: true,
    },
    ogDescription: {
      type: 'string',
      description: 'Description for OpenGraph images',
      required: true,
    }
  }
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [BlogPost, MaestrosLesson, MaestrosLanding],
})
