import error from '@/public/404.webp';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineArrowRight } from "react-icons/md";

export default function NotFound() {
  return(
    <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-4 items-center min-h-screen">
          
          {/* Image Container */}
          <div className="md:col-span-1">
            <Image src={error} alt="Polluted Earth" className="max-w-full h-auto"/>
          </div>

          {/* Text and Link Container */}
          <div className="md:col-span-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-3">404 - Lost in Pollution</h1>
            <p className="mb-5">Oops! You've stumbled upon a polluted part of our Earth. This is a reminder of the challenges our planet faces.</p>
            <span>            
              <Link href="/" className="flex w-max text-black hover:text-blue-800 px-3 py-2 rounded-md bg-white">Take me back to the clean and safe part <MdOutlineArrowRight className='mt-1' />             </Link>
            </span>
          </div>

        </div>
    </div>
  )
    

}