import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from 'sonner'

const inter = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Niroj Thapa",
    template: "%s | Niroj Thapa",
  },
  description: "Frontend Developer  Portfolio of nirojt — building scalable, elegant web apps with React and design precision.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Portfolio",
    "Web Developer",
    "nirojt"
  ],
  authors: [{ name: "Niroj Thapa", url: "https://github.com/Niroj-t" }],
  creator: "nirojt",
  metadataBase: new URL("https://minimal-portfolio-ps.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://minimal-portfolio-ps.vercel.app",
    title: "Niroj Thapa - Portfolio",
    description:
      "Explore the portfolio of Niroj, a frontend developer focused on performance, scalability, and clean UI/UX.",
    siteName: "nirojt",
    images: [
      {
        url: "/og_bannerr.jpeg",
        width: 1200,
        height: 630,
        alt: "nirojt",
      },
    ],
    locale: "en_NP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niroj Thapa - Portfolio",
    description:
      "Niroj Thapa Portfolio of Niroj.",
    creator: "@nirojthapa",
    images: ["/og_bannerr_1.jpeg"],
  },
  icons: {
    icon: "/favicon-v2.ico",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="ydHSzattedGcB-5-HAZYQTflySCqIgWSVqZD8wgedEo" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
