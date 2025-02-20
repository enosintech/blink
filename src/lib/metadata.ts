import { Metadata } from "next";

export function constructMetadata({
    title = "Blink Marketing Solutions — We Desire to Create",
    description = "We are an innovative Marketing firm that comprises of an exceptional team of marketing and industry experts built to help our clients achieve profitable growth through creating, implementing and sustaining marketing strategies.",
    image = "",
    icons = "/favicon.ico",
    noIndex=false
}: { 
    title?: string;
    description?: string;
    image?: string;
    icons?: string;
    noIndex?: boolean;
} = {}): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: image,
                }
            ]
        },
        icons,
        metadataBase: new URL("https://www.blink.co.zm/"),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false
            }
        })
    }
}