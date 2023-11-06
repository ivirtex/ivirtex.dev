import { Project } from "@/.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { Suspense } from "react";
import { CgSpinner } from "react-icons/cg";

import Card from "./card";
import DisclosureSection from "./discloure_section";
import ProjectStars from "./project_stars";
import Tag from "./tag";

export default function ProjectCard(project: Project) {
  const MDXContent = useMDXComponent(project.body.code);

  const card = (
    <Card
      className={`border border-neutral-950 transition mb-3 ${project.author && "hover:border-neutral-600 hover:bg-neutral-800"
        }`}
    >
      <div className="flex flex-col">
        <div className="mb-2 text-xl sm:text-2xl font-extrabold break-words flex justify-between items-center">
          {project.author ? (
            <span>{project.name}</span>
          ) : (
            <span>
              {project.owner}/{project.name}
            </span>
          )}
          <Suspense
            fallback={<CgSpinner className="animate-spin ml-4" size={24} />}
          >
            <ProjectStars project={project} />
          </Suspense>
        </div>
        <div className="sm:text-lg text-neutral-300">{project.description}</div>
        <div className="mt-4 flex flex-wrap gap-1.5 text-sm sm:text-base">
          {project.author ? (
            <div className="rounded-lg border border-transparent bg-blue-600 px-2 py-1 flex items-center">
              Author
            </div>
          ) : (
            <div className="rounded-lg border border-transparent bg-purple-600 px-2 py-1 flex items-center">
              Contributor
            </div>
          )}
          {project.tags && (
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, idx) => (
                <Tag key={idx} tag={tag} />
              ))}
            </div>
          )}
        </div>
        {!project.author && (
          <DisclosureSection title="My part">
            <MDXContent />
          </DisclosureSection>
        )}
      </div>
    </Card>
  );

  if (!project.author) {
    return card;
  } else {
    return <Link href={project.url}>{card}</Link>;
  }
}
