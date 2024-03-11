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
      {/* Drawer */}
      <div
        className={`z-50 h-full bg-gray-800 w-64 space-y-6 py-7 px-2 absolute transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-200 ease-in-out`}
      >
        <button onClick={toggleDrawer}>&times;</button>
        {/* Links */}
        <Link href="/geo-maps" className="block" >
            Geospatial Mapping
        </Link>

        <Link href="/document-repo" className="block" >
            Document Repo
        </Link>

        <Link href="/community-forum" className="block" >
            Community
        </Link>

        <Link href="/dashboard" className="block" >
            Dashboard
        </Link>

      </div>

      {/* Content */}
      <div className={`flex flex-1 flex-col overflow-hidden transition-margin duration-200 ease-in-out ${isOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-green-700">
          {/* Icon to toggle the drawer */}
          <button onClick={toggleDrawer} className="focus:outline-none px-3 py-1">
              <span><GiHamburgerMenu /></span>
          </button>

          <h1 className="text-xl text-start font-extrabold flex-1">PCTRL</h1>

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
