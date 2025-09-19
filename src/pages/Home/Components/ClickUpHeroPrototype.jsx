import React from 'react';
import { Link } from 'react-router-dom';
import heroCrm3Img from '@/assets/hero-crm3.png';

export default function ClickUpHeroPrototype() {
    const handleScroll = () => {
        window.scrollBy({
          top: window.innerHeight * 0.9, // Scroll down by 90% of the viewport height
          behavior: 'smooth',
        });
      };
  return (
    <div className="relative max-w-6xl mx-auto bg-gradient-to-br from-black via-purple-950 to-purple-800 rounded-3xl overflow-hidden mb-36">
      {/* Left Content Section */}
      <div className="relative z-10">
        <div className="px-8 py-12 lg:px-12 lg:py-16 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="space-y-8">
            {/* Logo */}
            {/* <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 rounded-lg"></div>
              <span className="text-white text-2xl font-bold">CRM</span>
            </div> */}

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Supercharge
                <br />
                your productivity
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg lg:text-xl text-gray-300 max-w-lg leading-relaxed">
                Organize tasks, collaborate on docs, track goals, and streamline team communication
                —all in one place, enhanced by AI.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link to="/pricing">
                <button className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2">
                  <span>Get started. It's FREE</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative lg:block">
            {/* Glow effect behind the glassmorphism container */}
            <div className="absolute -inset-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-3xl opacity-30"></div>
            
            {/* Glassmorphism Container */}
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl">
              <img 
                src={heroCrm3Img} 
                alt="CRM Dashboard"
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
    </div>
  );
}