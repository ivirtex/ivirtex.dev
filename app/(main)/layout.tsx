import { LayoutProvider } from "../components/layout_provider"

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col" >
            <LayoutProvider>
                {children}
            </LayoutProvider>
        </div>
    )
}