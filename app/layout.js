import { Inter } from "next/font/google";
import Head from 'next/head';
import "@/styles/globals.css";
import logo from '@/public/logo.svg'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>POLICY CTRL</title>
        <meta name="description" content="Empowering Climate Action through Data-Driven Policy Solutions. Policy Ctrl is a groundbreaking platform that bridges the gap between climate policies and technology." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://policy-ctrl.vercel.app/" />
        <meta property="og:title" content="POLICY CTRL" />
        <meta property="og:description" content="Empowering Climate Action through Data-Driven Policy Solutions. Policy Ctrl is a groundbreaking platform that bridges the gap between climate policies and technology." />
        <meta property="og:image" content={logo} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://policy-ctrl.vercel.app/" />
        <meta property="twitter:title" content="POLICY CTRL" />
        <meta property="twitter:description" content="Empowering Climate Action through Data-Driven Policy Solutions. Policy Ctrl is a groundbreaking platform that bridges the gap between climate policies and technology." />
        <meta property="twitter:image" content={logo} />


        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        {/* Add your Google font link here */}
      </Head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
