import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import Navbar from "./components/Navbar";
import StarsCanvas from "./components/Stars";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-y-scroll-hidden overflow-x-hidden select-none  mx-auto tracking-[.1em] bg-[#d7c9ff] dark:bg-[#110828] text-[#474c92] dark:text-[#cde3ff]`} >
      <Providers>
        <StarsCanvas />
        <Navbar />
          {children}
        
      </Providers>
      </body>
    </html>
  );
}
