import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScroll from "./components/other/SmoothScroll";

const syne = Inter({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.example.com/"),
    title: "Daniel Nkencho - Developer & Designer",
    description:
    "Daniel Nkencho is a developer and designer building intelligent AI solutions to automate and scale your business. 100% open-source, and customizable.",
    generator: "Next.js",
    applicationName: "Daniel Nkencho",
    keywords: [
        "freelance",
        "developer",
        "freelance developer",
        "frontend",
        "react",
        "frontend developer",
        "frontend engineer",
        "creative",
        "creative developer",
        "creative engineer",
        "tech",
        "software",
        "software developer",
        "portfolio",
        "frontend developer portfolio",
        "creative developer portfolio",
    ],
    openGraph: {
        title: "Daniel Nkencho - Developer & Designer",
        description:
      "Daniel Nkencho is a developer and designer building intelligent AI solutions to automate and scale your business. 100% open-source, and customizable.",
        url: "https://www.example.com/",
        siteName: "www.example.com",
        images: [
            {
                url: "./public/metadata.jpg",
                width: 1200,
                height: 630,
                alt: "Daniel Nkencho - Developer & Designer",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Daniel Nkencho - Developer & Designer",
        description:
      "Daniel Nkencho is a developer and designer building intelligent AI solutions to automate and scale your business. 100% open-source, and customizable.",
        creator: "@danielnkencho",
        creatorId: "0000000000",
        images: ["./public/metadata.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

export const viewport = {
    colorScheme: "dark",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                <SmoothScroll>{children}</SmoothScroll>
            </body>
        </html>
    );
}