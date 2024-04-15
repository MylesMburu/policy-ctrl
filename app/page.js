'use client'
import Link from 'next/link';
import Image from 'next/image';

import { Nav } from '@/components/Nav';

import logo from '@/public/logo.svg';
import { Header } from '@/components/Header';


export default function Home() {
  return (
    <div className="bg-yellow-50 text-black">
      <Nav />

      <Header/>


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
