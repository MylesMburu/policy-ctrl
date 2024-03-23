import Link from 'next/link';
import Image from 'next/image';

import logo from '@/public/logo.svg';
import logo1 from '@/public/logo1.svg';

export default function Home() {
  return (
    <div className="bg-yellow-50 text-black">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 text-black">
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

      {/* Header Section */}
      <div className="flex flex-col items-center justify-center min-h-screen pb-32">
        <div className="text-center p-4">
          {/* Headline and Subheadline */}
          <div className="flex justify-center items-center mx-auto">
          <Image src={logo} alt="Policy CTRL Logo" width={500} height={500} />
          </div>

          <h1 className="text-2xl font-bold mb-2">Empowering Climate Action through Data-Driven Policy Solutions</h1>
          <p className="text-lg mb-4">Unlock Insights, Drive Change, Build Resilience</p>

          {/* CTA Button */}
          <Link href="/geo-maps" className="bg-blue-500 text-white text-lg font-medium px-6 py-2 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors">
            Get Started
          </Link>

        </div>
      </div>

      {/* Main Section */}
      <div className="container mx-auto p-4">
        {/* Overview of Platform */}
        <p className="mb-4 text-center">
          Policy Ctrl is a groundbreaking platform that bridges the gap between climate policies and technology. Our mission is to empower stakeholders with data-driven insights to drive tangible and sustainable climate change solutions. With Policy Ctrl, you can streamline policy analysis, collaborate with stakeholders, and make informed decisions to address climate challenges.
        </p>

        {/* Key Features */}
        <div className="mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-64 bg-secondary text-text1 pb-6">
            <div className="card">
                <h5 className='font-bold border-b-2'>Comprehensive Data Analysis</h5>
                <p>Leverage cutting-edge technology and AI capabilities to analyze complex climate data and identify actionable insights.</p>
            </div>
            <div className="card">
                <h5 className='font-bold border-b-2'>Community Forum</h5>
                <p>Foster collaboration and knowledge sharing among governments, NGOs, businesses, and communities to drive collective action.</p>
            </div>
            <div className="card">
                <h5 className='font-bold border-b-2'>Policy Recommendations</h5>
                <p>Receive personalized policy recommendations based on data-driven analysis to inform evidence-based decision-making.</p>
            </div>
          </div>
        </div>


        {/* Social Media Icons */}
        {/* Placeholder for your social media icons */}
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 text-center p-4">
        <p>Connect with Policy Ctrl on Facebook, Twitter, LinkedIn</p>
        <p>&copy; 2024 Policy Ctrl</p>
      </footer>
    </div>
  );
}
