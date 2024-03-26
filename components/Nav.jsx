'use client';

import { useState } from "react"

import Link from 'next/link';
import Image from 'next/image';

import logo1 from '@/public/logo1.svg';


export const Nav = () => {
  return (
    <div>
        <nav className="bg-white border-b border-gray-200 text-black top-0">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image src={logo1} alt="Policy CTRL Logo" width={100} height={100} />
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="flex gap-4">
            <li><Link href="/about" className="hover:text-blue-500">About Us</Link></li>
            <li><Link href="/features" className="hover:text-blue-500">Features</Link></li>
            <li><Link href="/pricing" className="hover:text-blue-500">Pricing</Link></li>
            <li><Link href="/blog" className="hover:text-blue-500">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-blue-500">Contact Us</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
