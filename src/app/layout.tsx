import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import ScrollToTop from "@/components/ui/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio | Khanh Nguyen",
    template: "%s | Khanh Nguyen",
  },
  description: "Personal portfolio of Khanh Nguyen — Data Engineer specializing in scalable pipelines, cloud analytics, and ETL systems.",
  openGraph: {
    title: "Portfolio | Khanh Nguyen",
    description: "Personal portfolio of Khanh Nguyen — Data Engineer specializing in scalable pipelines, cloud analytics, and ETL systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Portfolio | Khanh Nguyen",
    description: "Personal portfolio of Khanh Nguyen — Data Engineer specializing in scalable pipelines, cloud analytics, and ETL systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <SmoothScrollProvider>
            <Preloader />
            <Navbar />
            <main className="min-h-screen pt-16">{children}</main>
            <Footer />
            <ScrollToTop />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
