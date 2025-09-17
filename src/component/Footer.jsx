import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-black via-purple-950 to-purple-800 rounded-5xl overflow-hidden">
      <div className="relative z-10">
        <div className="px-8 py-12 lg:px-12 lg:py-16">
          
          {/* Footer Top */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src="/logo.png" alt="" className='h-28 w-28' />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                The everything app for productivity. Organize, collaborate, and streamline your workflow.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Features</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Pricing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Integrations</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Templates</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">API</a></li>
              </ul>
            </div>

            {/* Solutions Links */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Solutions</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">For Teams</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">For Agencies</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">For Startups</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">For Enterprise</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Remote Work</a></li>
              </ul>
            </div>

            {/* Support & Resources */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Webinars</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Community</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Status</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Stay updated</h3>
                <p className="text-gray-300 text-sm">Get the latest product updates and productivity tips delivered to your inbox.</p>
              </div>
              <div className="flex space-x-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40 text-sm"
                />
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-xl text-white font-medium hover:from-pink-600 hover:to-purple-700 transition-all text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                © 2024 CRM. All rights reserved.
              </div>

              {/* Legal Links */}
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-8 right-8 w-32 h-32 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-500"></div>
      <div className="absolute bottom-8 left-8 w-32 h-32 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-1500"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
    </footer>
  );
}