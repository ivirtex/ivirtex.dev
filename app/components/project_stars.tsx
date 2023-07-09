import { Project } from "@/.contentlayer/generated";
import { Octokit } from "octokit";
import { PiStarFill } from "react-icons/pi";

export default async function ProjectStars({ project }: { project: Project }) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_PAT,
  });

  const {
    data: { stargazers_count: stars },
  } = await octokit.rest.repos
    .get({
      owner: project.repoOwner,
      repo: project.repoName,
    })
    .catch(() => ({
      data: {
        stargazers_count: null,
      },
    }));

  // format number to be with k postifx if > 1000
  const starsStr = (
    stars && stars > 1000 ? `${Math.round(stars / 100) / 10}k` : stars
  )?.toString();

  return (
    starsStr && (
      <div className="text-base flex items-center bg-neutral-800 px-1.5 py-1 rounded-lg ml-4">
        <span>{starsStr}</span>
        <PiStarFill className="ml-1" size={16} />
      </div>
    )
  );
}
