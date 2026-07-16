import type { Metadata } from "next";
import { Sora, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "HASSNAIN PORTFOLIO",
  description:
    "Building software and professional websites that power modern businesses. Custom web applications, desktop software, POS systems, and inventory management solutions.",
  keywords: [
    "full stack developer",
    "business software",
    "POS system",
    "inventory management",
    "web application",
    "desktop application",
    "Python developer",
    "C# developer",
    "professional websites",
  ],
  openGraph: {
    title: "HASSNAIN PORTFOLIO",
    description:
      "Building software and professional websites that power modern businesses.",
    type: "website",
    locale: "en_US",
    siteName: "Hassnain Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hassnain Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HASSNAIN PORTFOLIO",
    description:
      "Building software and professional websites that power modern businesses.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen bg-base text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
