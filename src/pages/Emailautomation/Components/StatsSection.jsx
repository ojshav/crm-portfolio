import React from "react";
import { Mail, Users, Building2 } from "lucide-react";
import img1 from "../../../assets/Emailautomation/img1.png";
import img2 from "../../../assets/Emailautomation/img2.png";
const Statssection = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 md:px-12 md:py-20 ">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 h-auto lg:h-[600px]">
          {/* Left Column - Email Stats */}
          <div className="lg:col-span-4 space-y-6">
            {/* Email Success Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-blue-100">
                  <Mail className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">
                    Email sent successfully
                  </h3>
                  <p className="text-sm text-slate-500 font-medium">
                    Delivered high-impact emails
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="text-6xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300 leading-none">
                  576M+
                </div>
                <p className="text-slate-600 font-semibold text-base">
                  Emails sent
                </p>
              </div>
            </div>

            {/* Active Users Card */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  {/* User Avatar Stack */}
                  <div className="flex -space-x-3">
                    <div className="w-12 h-12 rounded-full border-3 border-white shadow-lg overflow-hidden bg-gradient-to-br from-amber-400 to-orange-500">
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDzTLiQfZt1FJPKE25gm_nnyOdpYdWkLrJxg&s"
                          alt="Professional woman"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full border-3 border-white shadow-lg overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600">
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                        <img
                          src="data:image/jpeg;base64,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"
                          alt="Professional woman"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full border-3 border-white shadow-lg overflow-hidden bg-gradient-to-br from-green-400 to-emerald-600">
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                        <img
                          src="data:image/jpeg;base64,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"
                          alt="Professional woman"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full border-3 border-white shadow-lg overflow-hidden bg-gradient-to-br from-purple-400 to-pink-500">
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ90ggq_Xx8fOzPxQAnnuQ8EtALhdIRP4Y9w&s"
                          alt="Professional woman"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 964K+ Number */}
                  <div className="text-5xl md:text-5xl font-black text-white group-hover:scale-105 transition-transform duration-300 leading-none">
                    964K+
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Active Users
                  </h3>
                  <p className="text-slate-300 leading-relaxed font-medium">
                    More than 900,000 people has usingCustria
                    <br />
                    and satisfied with our platform.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Team Image & Client Stats */}
          <div className="lg:col-span-4 space-y-6 ">
            {/* Team Image Card */}
            <div className=" backdrop-blur-sm rounded-3xl  shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden group">
              <img
                src={img2}
                alt="Professional woman"
                className="w-full h-full object-fill"
              />
            </div>

            {/* Client Business Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-50 to-purple-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-cyan-100">
                  <Building2 className="w-7 h-7 text-cyan-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">
                    Client business served
                  </h3>
                  <p className="text-sm text-slate-500 font-medium">
                    Worked with 1.5K+ industries
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300 leading-none">
                  1,500+
                </div>
                <p className="text-slate-600 font-semibold text-base">
                  Companies Served
                </p>
              </div>
            </div>
          </div>

          {/* Right Column -Custria Brand */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="h-full rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 group relative overflow-hidden min-h-[500px] lg:min-h-full">
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                {/* Image Placeholder - Replace with your professional woman image */}
                <img
                  src={img1}
                  alt="Professional woman"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Custria Branding - Bottom Right */}
              <div className="absolute bottom-8 right-8">
                <div className="text-right">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 group-hover:scale-105 transition-transform duration-300 leading-none tracking-tight drop-shadow-2xl">
                    Custria
                  </h1>
                  <div className="h-1.5 w-24 md:w-28 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 rounded-full ml-auto group-hover:w-32 md:group-hover:w-36 transition-all duration-500 shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statssection;


