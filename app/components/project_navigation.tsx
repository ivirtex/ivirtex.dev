import { Project } from "@/.contentlayer/generated";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import Logo from "./logo";

export default function ProjectNavigation({project} : {project: Project}) {
  const className = "hover:text-neutral-300 duration-150 transition";

  return (
    <header className="sticky top-0 mb-16 flex h-16 w-full items-center justify-around bg-neutral-950/50 backdrop-blur-md backdrop-saturate-150">
      <nav className="flex w-full max-w-5xl justify-between px-4 text-xl transition-all duration-500">
        <Link
          href="/"
          className={`${className} font-semibold`}
          aria-label="Home"
        >
          <Logo className="animate-svg h-7 w-auto fill-white" />
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