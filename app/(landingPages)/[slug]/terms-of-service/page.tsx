import { allProjects } from "@/.contentlayer/generated";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return allProjects.map((project) => ({
        params: { slug: project._raw.flattenedPath },
    }));
}

export default async function TermsOfService({ params }: { params: { slug: string } }) {
    const project = allProjects.find(
        (project) => project._raw.flattenedPath === params.slug
    );

    if (!project || !project.termsOfServiceUrl) {
        notFound();
    }

    const termsOfService = await fetch(project?.termsOfServiceUrl!)
    const termsOfServiceMd = await termsOfService.text()

    return (
        <div className="prose prose-invert mx-auto max-w-5xl md:prose-lg px-8">
            <MDXRemote source={termsOfServiceMd} />
        </div>
    )
}