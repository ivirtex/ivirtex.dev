import { allProjects } from "contentlayer/generated";

import Footer from "../components/footer";
import Nav from "../components/nav";
import ProjectCard from "../components/project_card";
import Title from "../components/title";

export default function Projects() {
  // sort alphabetically
  const projects = allProjects.sort((a, b) => a.owner.localeCompare(b.owner));

  const authorProjects = projects.filter((project) => project.author);
  const contributionProjects = projects.filter((project) => !project.author);

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <div className="bg-noisy-gradient absolute w-full h-full opacity-10 mix-blend-overlay pointer-events-none" />
      <main className="flex-grow">
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
      <Footer />
    </div>
  );
}
