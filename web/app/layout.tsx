import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drive.blindpenguincoder.com"),
  title: {
    template: "%s | BPC Drive",
    default: "BPC Drive - BlindPenguin's Enterprise Cloud Storage",
  },
  description:
    "BPC Drive is BlindPenguin's secure enterprise cloud storage solution. Seamlessly store, organize, and collaborate on company files with military-grade encryption, real-time syncing, and powerful search capabilities.",
  keywords: [
    "enterprise cloud storage",
    "secure file sharing",
    "business document management",
    "BlindPenguin cloud",
    "BPC Drive",
    "company file storage",
    "team collaboration",
    "secure enterprise storage",
    "corporate file management",
    "business cloud solution",
  ],
  authors: [{ name: "BlindPenguin", url: "https://blindpenguincoder.com" }],
  creator: "BlindPenguin",
  publisher: "BlindPenguin LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
    url: "https://drive.blindpenguincoder.com",
    siteName: "BPC Drive",
    title: "BPC Drive - Enterprise Cloud Storage by BlindPenguin",
    description:
      "BlindPenguin's secure enterprise cloud storage solution. Access, share, and manage company files with confidence.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BPC Drive - BlindPenguin's Cloud Storage Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BPC Drive - Enterprise Cloud Storage by BlindPenguin",
    description:
      "Secure enterprise cloud storage for BlindPenguin. Manage company files with confidence.",
    images: ["/twitter-image.png"],
    creator: "@blindpenguin",
    site: "@blindpenguin",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon-16x16.png",
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  },
  category: "business",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  appleWebApp: {
    title: "BPC Drive",
    statusBarStyle: "black-translucent",
    startupImage: [
      "/apple-splash-2048-2732.png",
      "/apple-splash-1668-2224.png",
      "/apple-splash-1536-2048.png",
    ],
  },
  other: {
    "msapplication-TileColor": "#000000",
    "apple-mobile-web-app-capable": "yes",
    "mobile-web-app-capable": "yes",
    "application-name": "BPC Drive",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} font-poppins antialiased`}>
        {children}
      </body>
    </html>
  );
}
