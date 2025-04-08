import "./globals.css";

import { constructMetadata } from "@/lib/metadata";
import { mont } from "@/lib/fonts";
import Cursor from "@/components/cursor";
import SiteBackground from "@/components/site-background";
import { LoadingValueProvider } from "@/context/loadingValueContext";
import { ViewTransitions } from "next-view-transitions"
import Scroller from "@/components/scroller";
import Navbar from "@/components/navbar";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
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
