import { allProjects } from "@/.contentlayer/generated";
import Footer from "@/app/components/footer";
import Nav, { Navigation } from "@/app/components/nav";

export async function generateStaticParams() {
    return allProjects.map((project) => ({
        params: { slug: project._raw.flattenedPath },
    }));
}

export default function Layout({
    children,
    params,
}: {
    children: React.ReactNode
    params: { slug: string }
}) {
    const project = allProjects.find(
        (project) => project._raw.flattenedPath === params.slug
    );

    const navigation: Navigation[] = [];
    if (project?.privacyPolicyUrl) {
        navigation.push({
            name: 'Privacy Policy',
            href: `/${project._raw.flattenedPath}/privacy-policy`,
            current: false,
        })
    }
    if (project?.termsOfServiceUrl) {
        navigation.push({
            name: 'Terms of Service',
            href: `/${project._raw.flattenedPath}/terms-of-service`,
            current: false,
        })
    }

    return (
        <div className="flex min-h-screen flex-col" >
            <Nav paths={navigation} />
            {children}
            <Footer />
        </div>
    )
}