import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { SITENAME } from "@/lib/constants";
import { ThemeProvider } from "@/components/theme-provider";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: `${SITENAME} - Video Bokep Indo Viral Terbaru`,
    description: `${SITENAME} Video bokep indo jepang indonesia barat terbaru viral korea simontok china tante live sma paksa ngentot abg jilbab cewek bocil smp pijat pelajar.`,
    metadataBase: new URL("https://bokepsmp.pages.dev"),
    alternates: {
        canonical: `/`,
    },
    openGraph: {
        title: `${SITENAME} - Video Bokep Indo Jepang Barat Viral Terbaru`,
        description: `${SITENAME} Video bokep indo jepang indonesia barat terbaru viral korea simontok china tante live sma paksa ngentot abg jilbab cewek bocil smp pijat pelajar.`,
        url: `/`,
        type: `website`,
    },
    verification: {
        google: 'iHjpzVEYyvm6UloazucKIhuLYd08sOQFZjopsGc1BOI',
        yandex: '04c01ea1c8975926',
    },
};

export const runtime = "edge";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": `${SITENAME}`,
        "description": `${SITENAME} Video bokep indo jepang indonesia barat terbaru viral korea simontok china tante live sma paksa ngentot abg jilbab cewek bocil smp pijat pelajar.`,
        "logo": "https://bokepsmp.pages.dev/favicon.ico",
        "url": "https://bokepsmp.pages.dev",
        "founder":{
            "@type":"Person",
            "name":"admin",
            "url":"https://bokepsmp.pages.dev"
            },
            "foundingDate":"2024-01-09"
        }
        const jsonLd1 = {
            "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `${SITENAME}`,
        "url": "https://bokepsmp.pages.dev",
        "description": `${SITENAME} Video bokep indo jepang indonesia barat terbaru viral korea simontok china tante live sma paksa ngentot abg jilbab cewek bocil smp pijat pelajar.`,
        "image": "https://bokepsmp.pages.dev/favicon.ico",
        "potentialAction":{
            "@type":"ReadAction",
            "target":"https://bokepsmp.pages.dev"}
        }
        const jsonLd2 = {
            "@context": "https://schema.org",
        "@type": "WebSite",
        "name": `${SITENAME}`,
        "url": "https://bokepsmp.pages.dev",
        "description": `${SITENAME} Video bokep indo jepang indonesia barat terbaru viral korea simontok china tante live sma paksa ngentot abg jilbab cewek bocil smp pijat pelajar.`,
        "potentialAction": { 
        "@type": "SearchAction", 
          "target": "https://bokepsmp.pages.dev/?q={search_term}", 
            "query-input": "required name=search_term"}
        }
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={font.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd1) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
        />
                    {children}
                </ThemeProvider>
            </body>
<Script src="https://js.juicyads.com/jp.php?c=947403z2v256s2x2w264x294&u=http%3A%2F%2Fwww.juicyads.rocks"/>
        </html>
    );
}
