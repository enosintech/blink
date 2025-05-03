import "./globals.css";

import { constructMetadata } from "@/lib/metadata";
import { mont } from "@/lib/fonts";
import Cursor from "@/components/cursor";
import SiteBackground from "@/components/site-background";
import { LoadingValueProvider } from "@/context/loadingValueContext";
import { ViewTransitions } from "next-view-transitions"
import Scroller from "@/components/scroller";
import Navbar from "@/components/navbar";
import Script from "next/script";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-B21P044ZZQ"
            strategy="afterInteractive"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-B21P044ZZQ');
              `,
            }}
          />
        </head>
        <body
          className={`${mont.className} text-white bg-black antialiased`}
        >
          <LoadingValueProvider>
            <Navbar />
            <Cursor />
            <Scroller />
            <SiteBackground />
            {children}
          </LoadingValueProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
