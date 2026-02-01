import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// The clean, professional sans-serif for body and technical text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// The premium, editorial serif for "Craft" and major headings
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ScriptedCraft | Instructional Design & E-Learning",
  description: "Architecting high-impact learning experiences through code and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}