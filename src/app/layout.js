import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = 'https://ashish-codes.web.app';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Ashish Kumar | Full Stack Developer Portfolio',
  description:
    'Ashish Kumar — Full Stack Developer from Chandigarh. Building real-world apps with MERN, Next.js, Socket.IO, PostgreSQL & more. Final-year Diploma graduate, actively seeking opportunities.',
  keywords: [
    'Ashish Kumar',
    'Ashish Full Stack Developer',
    'Full Stack Developer Chandigarh',
    'MERN Stack Developer',
    'Next.js Developer Portfolio',
    'React Developer India',
    'Node.js Developer',
    'Web Developer Portfolio India',
    'ChatSpark',
    'UrbanMart',
    'StudyHub',
  ],
  robots: 'index, follow',
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: 'R3MPwDbeKhFvFw0Mdu_ya7In-9zJcKxQSrt478Vyu8k',
  },
  icons: {
    icon: '/favicon.png',
  },

  // ── Open Graph (LinkedIn, Facebook, WhatsApp, Slack) ──
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Ashish Kumar — Portfolio',
    title: 'Ashish Kumar | Full Stack Developer',
    description:
      'Full Stack Developer from Chandigarh building real-world apps with MERN, Next.js & Socket.IO. Final-year graduate, open to opportunities.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ashish Kumar — Full Stack Developer Portfolio',
      },
    ],
  },

  // ── Twitter / X Card ──
  twitter: {
    card: 'summary_large_image',
    site: '@iam_ashish_dev',
    creator: '@iam_ashish_dev',
    title: 'Ashish Kumar | Full Stack Developer',
    description:
      'Full Stack Developer from Chandigarh building real-world apps with MERN, Next.js & Socket.IO. Final-year graduate, open to opportunities.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
