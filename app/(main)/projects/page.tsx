import ProjectCard from "@/app/components/project_card";
import Title from "@/app/components/title";
import { allProjects } from "contentlayer/generated";

export const revalidate = 60;

export default function Projects() {
  // sort alphabetically
  const projects = allProjects.sort((a, b) => a.owner.localeCompare(b.owner));

  const authorProjects = projects.filter((project) => project.author);
  const contributionProjects = projects.filter((project) => !project.author);

  return (
    <main className="grow">
      <div className="mx-auto flex max-w-5xl flex-col px-8">
        <Title>Projects</Title>
        <p className="mb-3 sm:text-lg text-neutral-300">
          Here are some of the larger projects I have authored and contributed
          to:
        </p>
        {contributionProjects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
        {/* seperator */}
        <div className="bg-neutral-800 h-1 min-w-max mt-6 mb-8 rounded-full mx-8" />
        {authorProjects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </main>
  );
}
