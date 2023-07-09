import { defineDocumentType, makeSource } from "contentlayer/source-files";
import dart from "highlight.js/lib/languages/dart";
import highlight from "rehype-highlight";
import rehypeImgSize from "rehype-img-size";
import remarkGfm from "remark-gfm";

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    owner: { type: "string", required: true },
    name: { type: "string", required: true },
    description: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" }, required: true },
    landingPageUrl: { type: "string", required: false },
    repositoryUrl: { type: "string", required: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (project) => `projects/${project._raw.flattenedPath}`,
    },
    author: {
      type: "boolean",
      resolve: (project) => project.owner === "ivirtex",
    },
    repoOwner: {
      type: "string",
      resolve: (project) => project.repositoryUrl?.split("/").slice(-2)[0],
    },
    repoName: {
      type: "string",
      resolve: (project) => project.repositoryUrl?.split("/").pop(),
    },
  },
}));

export default makeSource({
  contentDirPath: "content/projects",
  documentTypes: [Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      // @ts-ignore
      [highlight, { languages: { dart } }],
      // @ts-ignore
      [rehypeImgSize, { dir: "public" }],
    ],
  },
});
