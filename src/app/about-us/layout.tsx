import AboutUsNav from "@/components/about-us-nav"
import SectionFooter from "@/components/section-footer"
import { ReactNode } from "react"

export default function AboutLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <div className="px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32">
            <AboutUsNav />
            {children}
            <SectionFooter />
        </div>
    )
}