import SectionFooter from "@/components/section-footer";
import SmoothScroll from "@/components/smooth-scroll";

import { ReactNode } from "react";

export default function PassionLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <SmoothScroll>
            <div className="pt-20">
                {/* <div className="w-full h-20 flex items-center justify-center">
                    <PassionNav />
                </div> */}
                {children}
            </div>
            <SectionFooter />
        </SmoothScroll>
    )
}