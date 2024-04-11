'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import { RiArrowDownSFill } from "react-icons/ri";

import logo1 from '@/public/logo1.svg';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white border-b border-gray-200 text-black top-0">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          {!isOpen && (
            <Link href="/">
              <Image src={logo1} alt="Policy CTRL Logo" width={100} height={100} style={{ cursor: 'pointer' }} />
            </Link>
          )}

          {/* Menu Toggle Icon */}
          <div className="md:hidden">
            {isOpen ? (
              <FiX className="text-black cursor-pointer mb-24" onClick={() => setIsOpen(false)} />
            ) : (
              <FiMenu className="text-black cursor-pointer" onClick={() => setIsOpen(true)} />
            )}
          </div>

          {/* Navigation Links */}
          <ul className={`md:flex ${isOpen ? 'flex flex-col mr-24 gap-2 ' : 'hidden'} md:flex-row gap-4`}>
          <li className="relative">
      <span 
        className="hover:text-blue-500 cursor-pointer flex"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        About Us <RiArrowDownSFill className='mt-1 ml-1'/>
      </span>
      
      {isDropdownOpen && (
        <div className="absolute mt-1 bg-white shadow-lg rounded min-w-max">
          <ul>
            <li>
              <Link href="/about/history" className="block px-4 py-2 hover:bg-gray-100">Our History
              </Link>
            </li>
            <li>
              <Link href="/about/team" className="block px-4 py-2 hover:bg-gray-100">Our Team
              </Link>
            </li>
            {/* Add more dropdown items here */}
          </ul>
        </div>
      )}
    </li>
            <li><Link href="/pricing"><span className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Pricing</span></Link></li>
            <li><Link href="https://medium.com/@policyctrl" target='_blank'><span className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Blog</span></Link></li>
            <li><Link href="/contact"><span className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Contact Us</span></Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
