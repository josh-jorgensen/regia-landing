import "./globals.css";

export const metadata = {
  title: "REGIA-UN",
  description: "Retrieval-Enhanced Generation for International Affairs",
  keywords: ["UN", "international affairs", "AI", "Generative AI", "UN documents", "research", "diplomacy", "policy", "briefing", "REGIA"],
  authors: [{ name: "REGIA-UN Team" }],
  creator: "REGIA-UN",
  publisher: "REGIA-UN",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://regia.info",
    siteName: "REGIA-UN",
    title: "REGIA-UN - AI-Powered Research for International Affairs",
    description: "AI-powered assistant for diplomats and policy teams. Combines retrieval-augmented generation with curated UN documents to deliver fast, factual briefs and drafts.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "REGIA-UN - AI-Powered Research for International Affairs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "REGIA-UN - AI-Powered Research for International Affairs",
    description: "AI-powered assistant for diplomats and policy teams. Combines retrieval-augmented generation with curated UN documents.",
    images: ["/og.png"],
    creator: "@regia_un",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#5A7F9C" />
      </head>
      <body>{children}</body>
    </html>
  );
}
