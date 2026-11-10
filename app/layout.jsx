import BackToTopButton from "@/components/layout/BackToTopButton";
import CircadianClock from "@/components/layout/CircadianClock";
import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";
import { acorn } from "./fonts";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  title: "Hayeen (Hanyu Xue) - Junior Software Developer",
  description:
    "Perth-based UWA IT graduate seeking junior software development roles. Explore Smart Doorbell and Portfolio projects using React, Next.js and PostgreSQL.",
  authors: [{ name: "Hanyu Xue", url: "https://github.com/Hayeensss" }],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${acorn.variable}`}
    >
      <body className="font-sans">
        <ThemeProvider>
          <Navbar />
          {children}
          <div className="hidden sm:block">
            <CircadianClock />
          </div>
          <Footer />
          <BackToTopButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
