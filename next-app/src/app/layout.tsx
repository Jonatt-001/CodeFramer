import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "@/components/ui/toaster";
import ReactQueryProvider from "@/context/ReactQueryProvider";
import { ThemeProvider } from "@/context/ThemeProvider";
import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";
import CookieBanner from "@/components/Consent/CookieBanner";
import GoogleAnalytics from "@/components/Consent/GoogleAnalytics";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || ""),
  title: "Kaali Coder: Online IDE & Compilers",
  description:
    "Kaali Coder is an advanced online IDE and compiler supporting Python, C, C++, Node.js, and full web environments. Build, execute, and manage projects seamlessly with an AI-powered coding experience.",
  keywords: [
    "kaali coder",
    "kaali space",
    "python compiler",
    "javascript compiler",
    "shell compiler",
    "bash compiler",
    "sql editor",
    "html editor",
    "css editor",
    "c compiler",
    "c++ compiler",
    "node.js compiler",
    "web editor",
    "online compiler",
    "online editor",
    "code editor",
    "code compiler",
    "kaali coder web editor",
    "kaali coder online compiler",
  ],
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
        <body className={`overflow-x-hidden antialiased ${geistSans.variable} ${geistMono.variable}`}>
          <ReactQueryProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
            >
              <Navbar />
              {children}
              <div id="modal" />
            </ThemeProvider>
          </ReactQueryProvider>
          <Toaster />

          {process.env.NODE_ENV === "production" && (
            <Suspense fallback={null}>
              <GoogleAnalytics GA_MEASUREMENT_ID={process.env.GOOGLE_ANALYTICS!} />
              {/* <Script
                async
                src={process.env.GOOGLE_ADS}
                crossOrigin="anonymous"
              ></Script> */}
              {/* <CookieBanner /> */}
            </Suspense>
          )}
        </body>
      </html>
    </SessionProvider>
  );
}