import { Inter } from "next/font/google";
import Head from 'next/head';
import "@/styles/globals.css";
import logo from '@/public/logo.svg'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Policy CTRL",
  description: "Empowering Climate Action through Data-Driven Policy Solutions",
  
  metadataBase: new URL('https://policy-ctrl.vercel.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    images: {logo},
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
