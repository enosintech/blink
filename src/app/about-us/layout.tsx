import AboutUsNav from "@/components/about-us-nav"
import SectionFooter from "@/components/section-footer"
import SmoothScroll from "@/components/smooth-scroll"
import { ReactNode } from "react"

export default function AboutLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <SmoothScroll>
            <AboutUsNav />
            {children}
            <SectionFooter />
        </SmoothScroll>
    )
}