import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StartBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { Toaster } from "react-hot-toast";

const inter = Roboto_Condensed({ subsets: ["latin"], weight: ["400", "500", "700", "900"] });

export const metadata: Metadata = {
  title: "The Lpa Club",
  description: "In a world flooded with self-paced online courses and scattered tutorials, we’re bringing back what works: learning together in a structured, supportive community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}

        />
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
