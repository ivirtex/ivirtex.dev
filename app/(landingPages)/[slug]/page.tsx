import { allProjects } from "@/.contentlayer/generated";
import AppStoreBadge from "@/app/components/app_store_badge";
import GooglePlayBadge from "@/app/components/google_play_badge";
import Image from 'next/image'
import { notFound } from "next/navigation";

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

    return (
        <main className="sm:pt-32 grow">
            <div className="mx-auto flex flex-col max-w-5xl space-x-8 items-center justify-center sm:flex-row px-8" >
                <Image src={project.iconUrl!} alt="NetworkArch logo" className="max-w-xs hidden sm:block py-4" width={1024} height={1024} />
                <div className="flex flex-col">
                    <div className="text-4xl md:text-5xl font-bold">{project.name}</div>
                    <div className="text-xl md:text-2xl my-4">{project.description}</div>

                    <div className='flex-wrap flex gap-4'>
                        {project.appStoreUrl && <AppStoreBadge link={project.appStoreUrl!} />}
                        {project.playStoreUrl && <GooglePlayBadge link={project.playStoreUrl!} />}
                    </div>
                </div>
            </div>
        </main >
    );
}