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

export const metadata = {
  title: "Ashish Codes | Full Stack Developer Portfolio",
  description:
    "Ashish Codes – Full Stack Web Developer portfolio. Built real-world projects with React, Next.js, Node.js,Express, Prisma, MongoDB, PostgreSQL, and Razorpay.",
  keywords: [
    "Ashish Codes",
    "Ashish Full Stack Developer",
    "Web Developer Portfolio India",
    "MERN Stack Developer",
    "React Developer Portfolio",
    "UrbanMart e-commerce project",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://ashish-codes.web.app/",
  },
  icons: {
    icon: "/favicon.png",
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
