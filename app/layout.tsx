import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import Navbar from "./components/Navbar";
import StarsCanvas from "./components/Stars";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orpheus Chatbot",
  description: "Friendly chatbot with jokes and riddles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-y-scroll-hidden overflow-x-hidden select-none  mx-auto tracking-[.1em] bg-gradient-to-b from-[#090417] via-[#120d36] to-[#090417] text-[#474c92] dark:text-[#cde3ff]`} >
      <Providers>
      <StarsCanvas />
        <Navbar />
          {children}
          
      </Providers>
      </body>
    </html>
  );
}
