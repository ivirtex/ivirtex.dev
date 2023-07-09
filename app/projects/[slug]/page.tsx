import Footer from "@/app/components/footer";
import { Project, allProjects } from "contentlayer/generated";
import "highlight.js/styles/github-dark.css";
import { getMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaGithub } from "react-icons/fa6";

export const revalidate = 60;

function ProjectNavigation(project: Project) {
  const className = "hover:text-neutral-300 duration-150 transition";

  return (
    <header className="sticky top-0 mb-16 flex h-16 w-full items-center justify-around bg-neutral-950/50 backdrop-blur-md backdrop-saturate-150">
      <nav className="flex w-full max-w-5xl justify-between px-4 text-xl transition-all duration-500">
        <Link href="/projects" className={className}>
          <FaArrowLeft size={26} />
        </Link>
        <div className="space-x-4">
          <a href={project.repositoryUrl} className={className}>
            <FaGithub size={26} />
          </a>
        </div>
      </nav>
    </header>
  );
}

export const generateStaticParams = async () =>
  allProjects.map((project) => ({
    params: { slug: project._raw.flattenedPath },
  }));

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = allProjects.find(
    (project) => project._raw.flattenedPath === params.slug
  );

  if (!project) {
    notFound();
  }

  const MDXContent = getMDXComponent(project.body.code);

  return (
    <div className="flex min-h-screen flex-col">
      <ProjectNavigation {...project} />
      <main className="flex flex-grow flex-col">
        <div className="mx-auto flex max-w-4xl flex-col items-center space-y-8 px-4 sm:px-8 pb-16 ">
          <div className="text-3xl font-extrabold sm:text-5xl break-words">
            {project.name}
          </div>
          <div className="text-center text-neutral-300 sm:text-xl">
            {project.description}
          </div>
        </div>
        <div className="flex grow flex-col justify-between bg-neutral-100 px-4 selection:bg-black selection:text-white">
          <div className="max-w-2xl py-4 sm:py-8 sm:mx-auto">
            <div className="prose prose-sm sm:prose-base prose-code:rounded-lg prose-img:inline-block prose-img:m-0 prose-headings:break-words">
              <MDXContent />
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
