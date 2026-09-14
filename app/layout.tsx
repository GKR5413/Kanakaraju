import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  Fraunces,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  axes: ["opsz"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f2ea" },
    { media: "(prefers-color-scheme: dark)", color: "#1e1913" },
  ],
};

const SITE = "https://rajugottumukkala.com";
const TITLE = "Raju Gottumukkala — AI/ML Engineer";
const DESCRIPTION =
  "AI/ML Engineer with over 6 years across silicon, payments, and retail at scale. Building production LLM systems, agentic AI workflows, MCP servers, and RAG pipelines.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "AI Engineer", "ML Engineer", "GenAI", "MCP", "Model Context Protocol",
    "RAG", "LangGraph", "LLM fine-tuning", "MLOps", "Raju Gottumukkala",
  ],
  authors: [{ name: "Raju Gottumukkala", url: SITE }],
  alternates: { canonical: SITE },
  openGraph: {
    type: "profile",
    url: SITE,
    siteName: TITLE,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

/** Person schema so recruiters' tooling and search engines read the page structurally. */
const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Raju Gottumukkala",
  jobTitle: "AI/ML Engineer",
  url: SITE,
  email: "mailto:gkrswe@gmail.com",
  telephone: "+1-470-242-1412",
  address: { "@type": "PostalAddress", addressLocality: "San Francisco", addressRegion: "CA", addressCountry: "US" },
  sameAs: ["https://www.linkedin.com/in/gkrswe", "https://github.com/gkr5413"],
  worksFor: { "@type": "Organization", name: "Arm" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Missouri — Kansas City" },
  knowsAbout: [
    "Generative AI", "Model Context Protocol", "Retrieval-Augmented Generation",
    "LLM fine-tuning", "MLOps", "Machine Learning", "Vector Databases",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${bricolage.variable} ${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <a href="#main" className="skip-link">Skip to content</a>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
