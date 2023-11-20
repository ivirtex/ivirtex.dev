import Footer from "@/app/components/footer";
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Project, allProjects } from "contentlayer/generated";
import "highlight.js/styles/github-dark.css";
import dart from "highlight.js/lib/languages/dart";
import { notFound } from "next/navigation";
import { Octokit } from "octokit";
import { Suspense } from "react";
import { SerializeOptions } from "next-mdx-remote/dist/types";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { CgSpinner } from "react-icons/cg";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import Nav, { Navigation } from "@/app/components/nav";
import { FaGithub } from "react-icons/fa6";

async function fetchReadme(project: Project) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_PAT,
  });

  const {
    data: { content: readme },
  } = await octokit.rest.repos.getReadme({
    owner: project.repoOwner,
    repo: project.repoName,
  })

  return Buffer.from(readme, "base64").toString("utf8");
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    params: { slug: project._raw.flattenedPath },
  }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = allProjects.find(
    (project) => project._raw.flattenedPath === params.slug
  );

  if (!project) {
    notFound();
  }

  const readme = await fetchReadme(project);

  const mdxOptions: SerializeOptions = {
    mdxOptions: {
      format: "md",
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        // @ts-ignore
        [rehypeHighlight, { languages: { dart } }],
      ],
    }
  }

  const navigation: Navigation[] = [
    { name: "Repository", href: project.repositoryUrl!, current: false, icon: <FaGithub size={26} /> },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Nav paths={navigation} />

      <main className="flex flex-grow flex-col">
        <div className="mx-auto flex max-w-4xl flex-col items-center space-y-8 px-4 sm:px-8 pb-16 ">
          <div className="text-3xl font-extrabold sm:text-5xl break-words flex items-center">
            {project.name}
            {project.landingPage && (
              <Link
                href={`/${project._raw.flattenedPath}`}
                className="ml-4 text-neutral-300 hover:text-neutral-400 transition duration-150"
              >
                <FiExternalLink size={24} />
              </Link>
            )}


          </div>
          <div className="text-center text-neutral-300 sm:text-xl">
            {project.description}
          </div>
        </div>
        <div className="flex grow flex-col justify-between bg-neutral-100 px-4 selection:bg-black selection:text-white">
          <div className="max-w-2xl py-4 sm:py-8 sm:mx-auto">
            <div className="prose prose-sm sm:prose-base prose-code:rounded-lg prose-img:inline-block prose-img:m-0 prose-headings:break-words">
              <Suspense fallback={<CgSpinner className="animate-spin ml-4" size={24} />}>
                <MDXRemote source={readme} options={mdxOptions} components={{ img: (props) => <img {...props} /> }} />
              </Suspense>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
