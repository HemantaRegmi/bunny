import type { Metadata } from "next";
import { Bree_Serif, Nunito_Sans } from "next/font/google";
import "./globals.css";

const heading = Bree_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading"
});

const body = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "BunnyHaven | Bunny Breeds, Diet, and Latest News",
  description:
    "A bunny-only zoo-style experience with breed spotlights, diet guidance, and a live rabbit news feed."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} bg-meadow-50 text-meadow-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
