import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/general/ThemeProvider";
import { Toaster } from "@/components/ui/sonner"
  
export const metadata: Metadata = {
  metadataBase: new URL("https://tuumdejobs.com"),
  title: "Tuumde Jobs",
  description: "Find opportunities across industries with Tuumde Jobs – your trusted platform for all types of careers.",
  keywords: [
    "Job Board",
    "Career Opportunities",
    "Remote Jobs",
    "Part-Time Jobs",
    "Full-Time Jobs",
    "Internships",
    "Skilled Trades Careers",
    "Corporate Jobs",
    "Healthcare Jobs",
    "Education Careers",
    "Retail Jobs",
    "Engineering Careers",
    "Administrative Jobs",
    "Marketing Jobs",
    "Freelance Opportunities",
  ],
  authors: [
    {
      name: "Tuumde Jobs",
      url: "https://tuumdejobs.com/about", // Link to about us page
    },
  ],
  creator: "Tuumde Jobs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tuumdejobs.com",
    title: "Tuumde Jobs - Your Trusted Platform for All Careers",
    description:
      "Explore jobs across industries, including healthcare, education, retail, engineering, marketing, and more. Tuumde Jobs connects you with the right opportunities for your next career move.",
    siteName: "Tuumde Jobs",
    images: [
      {
        url: "https://tuumdejobs.com/images/og-jobboard.jpg",
        width: 1200,
        height: 630,
        alt: "Tuumde Jobs - Your Trusted Platform for All Careers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuumde Jobs - Your Trusted Platform for All Careers",
    description:
      "Discover job opportunities in all industries, including healthcare, education, retail, and more. Connect with top employers and find your next role today.",
    creator: "@TuumdeJobs", // Replace with the actual Twitter handle if available
    images: {
      url: "https://tuumdejobs.com/images/twitter-card-jobboard.jpg",
      alt: "Tuumde Jobs - Career Platform Across All Industries",
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster closeButton richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
