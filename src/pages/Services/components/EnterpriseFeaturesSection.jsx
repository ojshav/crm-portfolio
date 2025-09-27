import React from 'react';
import Img1 from "@/assets/services/gridimg/1.png";
import Img2 from "@/assets/services/gridimg/2.png";
import Img3 from "@/assets/services/gridimg/3.png";
import Img4 from "@/assets/services/gridimg/4.png";
import Img5 from "@/assets/services/gridimg/5.png";
import Img6 from "@/assets/services/gridimg/6.png";
import Img7 from "@/assets/services/gridimg/7.png";
import Img8 from "@/assets/services/gridimg/8.png";

const EnterpriseFeaturesSection = () => {
    return (
        <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-24">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight px-2">
                        Built for unmatched enterprise
                        <br className="hidden sm:block" />
                        <span className="block sm:inline"> scalability, security, and reliability.</span>
                    </h2>
                </div>

                <div className='flex flex-col gap-6 sm:gap-8'>
                    {/* First Row - Two Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                        {/* Card 1 - Uptime Guarantee */}
                        <div className="bg-gray-50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-sky-100/50 border border-gray-300">
                            {/* Text Section with Padding */}
                            <div className="p-6 sm:p-8">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                                    99.9% uptime guarantee
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                    Ensure your operations never skip a beat with our 99.9% uptime guarantee, keeping your workflow smooth and uninterrupted.
                                </p>
                            </div>

                            {/* Image Section */}
                            <div className="bg-white">
                                <img
                                    src={Img1}
                                    alt="Uptime guarantee visualization"
                                    className="w-full h-48 sm:h-56 md:h-64 object-fit"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Card 2 - Speed and Scalability */}
                        <div className="bg-gray-50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-sky-100/50 border border-gray-300">
                            {/* Text Section with Padding */}
                            <div className="p-6 sm:p-8">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                                    Unmatched speed and scalability
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                    Leverage our exclusive RapidViews DB™ technology for ultimate scalability and performance unmatched by any other solution.
                                </p>
                            </div>

                            {/* Image Section */}
                            <div className="bg-white">
                                <img
                                    src={Img2}
                                    alt="Speed and scalability metrics"
                                    className="w-full h-48 sm:h-56 md:h-64 object-fit"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Second Row - Full Width Card */}
                    <div className="grid grid-cols-1">
                        <div className="bg-gray-50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-sky-100/50 border border-gray-300">
                            {/* Text Section with Padding */}
                            <div className="p-6 sm:p-8">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                                    Advanced admin tools
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl">
                                    Everything you need to protect your data, manage access, configure permissions and keep a comprehensive activities log is built-in.
                                </p>
                            </div>

                            {/* Image Section */}
                            <div className="bg-white">
                                <img
                                    src={Img3}
                                    alt="Advanced admin tools dashboard"
                                    className="w-full h-64 sm:h-80 md:h-96 lg:h-[65vh] object-fit"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Third Row - Two Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                        {/* Card 1 - AI-powered workflows */}
                        <div className="bg-gray-50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-sky-100/50 border border-gray-300">
                            {/* Text Section with Padding */}
                            <div className="p-6 sm:p-8">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                                    AI-powered workflows
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                    The world's first neural network connecting tasks, docs, people, and all of your company's knowledge with AI.
                                </p>
                            </div>

                            {/* Image Section */}
                            <div className="bg-white">
                                <img
                                    src={Img4}
                                    alt="AI-powered workflows interface"
                                    className="w-full h-48 sm:h-56 md:h-64 object-fit"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Card 2 - Internationally compliant */}
                        <div className="bg-gray-50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-sky-100/50 border border-gray-300">
                            {/* Text Section with Padding */}
                            <div className="p-6 sm:p-8">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                                    Internationally compliant
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                    Our unwavering commitment to international standards guarantees your data is managed with exceptional care.
                                </p>
                            </div>

                            {/* Image Section */}
                            <div className="bg-white">
                                <img
                                    src={Img5}
                                    alt="International compliance certificates"
                                    className="w-full h-48 sm:h-56 md:h-64 object-fit"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Fourth Row - Three Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Card 1 - Loved by all teams */}
                        <div className="bg-gray-50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-sky-100/50 border border-gray-300">
                            {/* Text Section with Padding */}
                            <div className="p-6 sm:p-8">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                                    Loved by all teams
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                    Unmatched flexibility, standards, and scale to support any team - no matter the size or complexity.
                                </p>
                            </div>

                            {/* Image Section */}
                            <div className="bg-white">
                                <img
                                    src={Img6}
                                    alt="Team collaboration interface"
                                    className="w-full h-40 sm:h-44 md:h-48 object-fit"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Card 2 - Trusted by leadership */}
                        <div className="bg-gray-50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-sky-100/50 border border-gray-300">
                            {/* Text Section with Padding */}
                            <div className="p-6 sm:p-8">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                                    Trusted by leadership
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                    Clear visibility from strategic plans to daily execution, for a single source for updates, risks, and progress.
                                </p>
                            </div>

                            {/* Image Section */}
                            <div className="bg-white">
                                <img
                                    src={Img7}
                                    alt="Leadership dashboard and analytics"
                                    className="w-full h-40 sm:h-44 md:h-48 object-fit"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Card 3 - Endorsed by IT */}
                        <div className="bg-gray-50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-sky-100/50 border border-gray-300 sm:col-span-2 lg:col-span-1">
                            {/* Text Section with Padding */}
                            <div className="p-6 sm:p-8">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                                    Endorsed by IT
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                    Data is encrypted, safeguarded, and fully compliant with HIPAA, GDPR, Privacy Shield, and more.
                                </p>
                            </div>

                            {/* Image Section */}
                            <div className="bg-white">
                                <img
                                    src={Img8}
                                    alt="IT security and compliance features"
                                    className="w-full h-40 sm:h-44 md:h-48 object-fit"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnterpriseFeaturesSection;