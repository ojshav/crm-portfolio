import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      
      {/* Left Card - Contact Info */}
      <div
        className="p-8 rounded-2xl shadow-xl relative overflow-hidden"
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(135, 206, 235, 0.4) 0%, 
              rgba(70, 130, 180, 0.3) 50%, 
              rgba(30, 144, 255, 0.2) 100%
            )
          `,
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        {/* Decorative elements */}
        <div 
          className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%)",
            transform: "translate(50%, -50%)"
          }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
            transform: "translate(-50%, 50%)"
          }}
        ></div>

        <h2 className="text-3xl font-bold mb-8 text-black relative z-10">Contact Info</h2>

        <div className="space-y-6 relative z-10">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/20 backdrop-blur-sm border border-black  transition-all duration-300">
            <div className="p-2 rounded-lg bg-black">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <span className="text-black font-medium">+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/20 backdrop-blur-sm border border-black transition-all duration-300">
            <div className="p-2 rounded-lg bg-black">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <span className="text-black font-medium">support@yourcrm.com</span>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/20 backdrop-blur-sm border border-black transition-all duration-300">
            <div className="p-2 rounded-lg bg-black">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <span className="text-black font-medium">
              123 Business Street, Mumbai, India
            </span>
          </div>
        </div>
      </div>
      {/* Right Side - Contact Form */}
      <div
        className="p-8 rounded-2xl shadow-xl"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(135, 206, 235, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.25) 0%, transparent 50%),
            rgba(239, 68, 68, 0.1)
          `,
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          Get in Touch
        </h2>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white/80"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white/80"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Your message..."
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white/80"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-900 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
