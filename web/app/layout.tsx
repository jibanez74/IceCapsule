import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "IceCapsule",
  description:
    "IceCapsule is a secure and open-source file storage platform offering privacy-focused features like file encryption, passwordless authentication, and global search. Self-hosted and designed for seamless file sharing and management.",
  keywords: [
    "IceCapsule file storage",
    "Secure file sharing platform",
    "Open-source file storage solution",
    "Self-hosted file encryption",
    "Passwordless authentication system",
    "File sharing with privacy",
    "Scalable cloud storage alternative",
    "Google Drive replacement app",
    "Modern file storage system",
    "File management and sharing app",
  ],
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
