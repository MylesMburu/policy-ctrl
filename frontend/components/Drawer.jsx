// components/Drawer.jsx
import { useState } from 'react';
import Link from 'next/link';

import { GiHamburgerMenu } from "react-icons/gi";

export default function Drawer({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleDrawer}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`absolute z-20 h-full bg-gray-800 text-black w-64 space-y-6 py-7 px-2 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-200 ease-in-out`}
      >
        <button onClick={toggleDrawer}>&times;</button>
        {/* Links */}
        <Link href="/geo-maps" className="block" >
            Geospatial Mapping
        </Link>

        <Link href="/dashboard" className="block" >
            Document Repo
        </Link>

        <Link href="/dashboard" className="block" >
            Dashboard
        </Link>

        <Link href="/dashboard" className="block" >
            Dashboard
        </Link>

      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex justify-between items-center p-4 ">
        {/* Icon  to toggle the drawer */}
        <button onClick={toggleDrawer} className="focus:outline-none px-3 py-1">
            <span><GiHamburgerMenu /></span> 
        </button>

        <h1 className="text-xl text-start font-extrabold  flex-1">PCTRL</h1>

        <Link href="/logout" className="bg-black text-white rounded-md px-3 py-1 hover:bg-sky-600 hover:text-black focus:outline-none">
            Logout
        </Link>
        
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}
