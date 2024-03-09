// pages/index.js
import Link from 'next/link';
import Image from 'next/image';

import logo from '@/public/logo.png'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Container for content */}
      <div className="text-center p-4">
        {/* Logo/Icon Placeholder */}
        <div className="flex justify-center items-center mx-auto mb-4">
          <Image src={logo} alt="Policy CTRL Logo" width={500} height={500} />
        </div>
        
        {/* Horizontal Rule */}
        <hr className="border-2 border-gray-200 mb-4"/>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-4">
          Policy Ctrl is an innovative platform leveraging AI technology to revolutionize climate action and combat greenwashing. By providing comprehensive insights into policies, agreements, and adaptations, it empowers a diverse spectrum of stakeholders, including activists, journalists, and policymakers. This dynamic tool serves as a beacon of transparency, enabling users to hold decision-makers accountable for their environmental commitments.
        </p>

        {/* We'll add the login funtionality where this will navigate to */}
        <Link href="/geo-maps"
           className="inline-block bg-blue-500 text-white text-lg font-medium px-6 py-2 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors">
            Join Us Today →
        </Link>
      </div>
    </div>
  );
}
