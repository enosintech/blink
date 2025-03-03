import AboutUsNav from "@/components/about-us-nav"
import SectionFooter from "@/components/section-footer"
import { ReactNode } from "react"

export default function AboutLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <div>
            <AboutUsNav />
            {children}
            <SectionFooter />
        </div>
    )
}