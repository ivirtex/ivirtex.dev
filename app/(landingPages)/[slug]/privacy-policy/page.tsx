import { allProjects } from "@/.contentlayer/generated";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return allProjects.map((project) => ({
        params: { slug: project._raw.flattenedPath },
    }));
}

export default async function PrivacyPolicy({ params }: { params: { slug: string } }) {
    const project = allProjects.find(
        (project) => project._raw.flattenedPath === params.slug
    );

    if (!project || !project.privacyPolicyUrl) {
        notFound();
    }

    const privacyPolicy = await fetch(project?.privacyPolicyUrl!)
    const privacyPolicyMd = await privacyPolicy.text()

    return (
        <div className="prose prose-invert mx-auto max-w-5xl md:prose-lg px-8">
            <MDXRemote source={privacyPolicyMd} />
        </div>
    )
}