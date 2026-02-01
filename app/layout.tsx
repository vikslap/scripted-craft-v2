import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
// Import the new GlobalUI component we created in the components folder
import GlobalUI from "./components/GlobalUI";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

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
        {/* GlobalUI ensures the Navbar and 'Let's Collaborate' button 
            persist across Home, Repository, and Individual Notes */}
        <GlobalUI />
        
        {children}
      </body>
    </html>
  );
}