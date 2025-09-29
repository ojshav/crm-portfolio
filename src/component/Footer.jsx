import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-sky-300 via-purple-300 to-pink-300 rounded-t-3xl sm:rounded-t-4xl lg:rounded-t-5xl overflow-hidden">
      <div className="relative z-10">
        <div className="px-4 py-8 sm:px-6 md:px-8 lg:px-12 sm:py-10 md:py-12 lg:py-16">
          
          {/* Footer Top */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10 lg:mb-12">
            
            {/* Company Info */}
            <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <img src="/logo.png" alt="Company Logo" className='h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28' />
              </div>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed text-center sm:text-left max-w-xs mx-auto sm:mx-0">
                The everything app for productivity. Organize, collaborate, and streamline your workflow.
              </p>
              <div className="flex items-center justify-center sm:justify-start space-x-3 sm:space-x-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors p-1" aria-label="Twitter">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors p-1" aria-label="LinkedIn">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors p-1" aria-label="Facebook">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
              <h3 className="text-gray-900 font-semibold text-base sm:text-lg">Product</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link to="/services" className="text-gray-700 hover:text-gray-900 transition-colors text-xs sm:text-sm block py-1">Features</Link></li>
                <li><Link to="/pricing" className="text-gray-700 hover:text-gray-900 transition-colors text-xs sm:text-sm block py-1">Pricing</Link></li>
                <li><Link to="/services" className="text-gray-700 hover:text-gray-900 transition-colors text-xs sm:text-sm block py-1">Integrations</Link></li>
                <li><Link to="/portfolio" className="text-gray-700 hover:text-gray-900 transition-colors text-xs sm:text-sm block py-1">Templates</Link></li>
                <li><Link to="/services" className="text-gray-700 hover:text-gray-900 transition-colors text-xs sm:text-sm block py-1">API</Link></li>
              </ul>
            </div>

            {/* Solutions Links */}
            <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
              <h3 className="text-gray-900 font-semibold text-base sm:text-lg">Solutions</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link to="/crm-sales" className="text-gray-700 hover:text-gray-900 transition-colors text-xs sm:text-sm block py-1">CRM Sales</Link></li>
                <li><Link to="/email-automation" className="text-gray-700 hover:text-gray-900 transition-colors text-xs sm:text-sm block py-1">Email Automation</Link></li>
                <li><Link to="/chat-bot" className="text-gray-700 hover:text-gray-900 transition-colors text-xs sm:text-sm block py-1">Chatbot</Link></li>
                <li><Link to="/help-desk" className="text-gray-700 hover:text-gray-900 transition-colors text-xs sm:text-sm block py-1">Help Desk</Link></li>
                <li><Link to="/book-appointment" className="text-gray-700 hover:text-gray-900 transition-colors text-xs sm:text-sm block py-1">Book Appointment</Link></li>
              </ul>
            </div>

            {/* Support & Resources */}
            <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
              <h3 className="text-gray-900 font-semibold text-base sm:text-lg">Support</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link to="/help-desk" className="text-gray-700 hover:text-gray-900 transition-colors text-xs sm:text-sm block py-1">Help Center</Link></li>
                <li><Link to="/contact" className="text-gray-700 hover:text-gray-900 transition-colors text-xs sm:text-sm block py-1">Contact Us</Link></li>
                <li><Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors text-xs sm:text-sm block py-1">About Us</Link></li>
                <li><Link to="/services" className="text-gray-700 hover:text-gray-900 transition-colors text-xs sm:text-sm block py-1">Community</Link></li>
                <li><Link to="/portfolio" className="text-gray-700 hover:text-gray-900 transition-colors text-xs sm:text-sm block py-1">Portfolio</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-white/50 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
              <div className="text-center md:text-left">
                <h3 className="text-gray-900 font-semibold text-base sm:text-lg mb-1 sm:mb-2">Stay updated</h3>
                <p className="text-gray-700 text-xs sm:text-sm">Get the latest product updates and productivity tips delivered to your inbox.</p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-white/70 border border-gray-300 rounded-lg sm:rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-xs sm:text-sm"
                />
                <button className="bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-white font-medium hover:from-sky-600 hover:via-purple-600 hover:to-pink-600 transition-all text-xs sm:text-sm shadow-lg hover:shadow-xl whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-300 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
              
              {/* Copyright */}
              <div className="text-gray-600 text-xs sm:text-sm text-center sm:text-left">
                © 2024 CRM. All rights reserved.
              </div>

              {/* Legal Links */}
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-xs sm:text-sm justify-center">
                <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <span className="text-gray-500 dark:text-gray-400 font-medium">
                            <span className="mb-4">
                                <Link to="/privacy-policy" className="hover:underline">Privacy Policy | </Link>
                            </span>
                            <span>
                                <Link to="/terms-conditions" className="hover:underline">Terms &amp; Conditions</Link>
                            </span>
                        </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements - Hidden on very small screens */}
      <div className="hidden sm:block">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-sky-300 to-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse delay-3000"></div>
      </div>
    </footer>
  );
}