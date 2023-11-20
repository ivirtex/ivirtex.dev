'use client'

// Use usePathname for catching route name.
import { usePathname } from 'next/navigation';
import Nav, { Navigation } from './nav';
import Footer from './footer';

export const LayoutProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const pathname = usePathname();
    const belongsToProject = pathname.includes("/projects/");

    const navigation: Navigation[] = [
        { name: "projects", href: "/projects", current: false },
        { name: "about", href: "/about", current: false },
        { name: "contact", href: "/contact", current: false },
    ];

    return (
        <>
            {!belongsToProject && <Nav paths={navigation} />}
            {children}
            {!belongsToProject && <Footer />}
        </>
    )
};