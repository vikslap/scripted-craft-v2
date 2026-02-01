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
  icons: {
    // Encoded SVG creates a professional favicon using brand colors and fonts
    icon: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
      <text y=%22.9em%22 font-size=%2275%22 font-weight=%22800%22 font-family=%22sans-serif%22 fill=%22%232F3640%22>S</text>
      <text x=%2240%22 y=%22.9em%22 font-size=%2275%22 font-style=%22italic%22 font-family=%22serif%22 fill=%22%23E1B12C%22>C</text>
      <circle cx=%2285%22 cy=%2272%22 r=%229%22 fill=%22%2300A8FF%22 />
    </svg>`,
  },
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