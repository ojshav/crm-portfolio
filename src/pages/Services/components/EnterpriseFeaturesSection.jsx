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
        <div className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12 lg:mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        Built for unmatched enterprise
                        <br />
                        scalability, security, and reliability.
                    </h2>
                </div>

                <div className='flex flex-col gap-8 '>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Card 1 - Uptime Guarantee */}
                        <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg shadow-sky-100/50 border border-gray-300">
                            {/* Text Section with Padding */}
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    99.9% uptime guarantee
                                </h3>
                                <p className="text-gray-600 text-md leading-relaxed">
                                    Ensure your operations never skip a beat with our 99.9% uptime guarantee, keeping your workflow smooth and uninterrupted.
                                </p>
                            </div>

                            {/* Image Section without Padding */}
                            <div className="bg-white">
                                <img
                                    src={Img1}
                                    alt="Uptime guarantee visualization"
                                    className="w-full h-64 object-fit"
                                />
                            </div>
                        </div>

                        {/* Card 2 - Speed and Scalability */}
                        <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg shadow-sky-100/50 border border-gray-300">
                            {/* Text Section with Padding */}
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Unmatched speed and scalability
                                </h3>
                                <p className="text-gray-600 text-md leading-relaxed">
                                    Leverage our exclusive RapidViews DB™ technology for ultimate scalability and performance unmatched by any other solution.
                                </p>
                            </div>

                            {/* Image Section without Padding */}
                            <div className="bg-white">
                                <img
                                    src={Img2}
                                    alt="Speed and scalability metrics"
                                    className="w-full h-64 object-fit"
                                />
                            </div>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Card 1 - Uptime Guarantee */}
                        <div className="bg-gray-50 col-span-2 rounded-3xl overflow-hidden shadow-lg shadow-sky-100/50 border border-gray-300">
                            {/* Text Section with Padding */}
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Advanced admin tools
                                </h3>
                                <p className="text-gray-600 text-md leading-relaxed">
                                    Everything you need to protect your data, manage access, configure permissions and keep a compressive activities log is built-in.
                                </p>
                            </div>

                            {/* Image Section without Padding */}
                            <div className="bg-white">
                                <img
                                    src={Img3}
                                    alt="Uptime guarantee visualization"
                                    className="w-full h-[65vh] object-fit"
                                />
                            </div>
                        </div>

                    </div>


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Card 1 - Uptime Guarantee */}
                        <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg shadow-sky-100/50 border border-gray-300">
                            {/* Text Section with Padding */}
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    AI-powered workflows
                                </h3>
                                <p className="text-gray-600 text-md leading-relaxed">
                                    The world's first neural network connecting tasks, docs, people, and all of your company’s knowledge with AI.
                                </p>
                            </div>

                            {/* Image Section without Padding */}
                            <div className="bg-white">
                                <img
                                    src={Img4}
                                    alt="Uptime guarantee visualization"
                                    className="w-full h-64 object-fit"
                                />
                            </div>
                        </div>

                        {/* Card 2 - Speed and Scalability */}
                        <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg shadow-sky-100/50 border border-gray-300">
                            {/* Text Section with Padding */}
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Internationally compliant
                                </h3>
                                <p className="text-gray-600 text-md leading-relaxed">
                                    Our unwavering commitment to international standards guarantees your data is managed with exceptional care.
                                </p>
                            </div>

                            {/* Image Section without Padding */}
                            <div className="bg-white">
                                <img
                                    src={Img5}
                                    alt="Speed and scalability metrics"
                                    className="w-full h-64 object-fit"
                                />
                            </div>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Card 1 - Uptime Guarantee */}
                        <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg shadow-sky-100/50 border border-gray-300">
                            {/* Text Section with Padding */}
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Loved by all teams
                                </h3>
                                <p className="text-gray-600 text-md leading-relaxed">
                                    Unmatched flexibility, standards, and scale to support any team - no matter the size or complexity.
                                </p>
                            </div>

                            {/* Image Section without Padding */}
                            <div className="bg-white">
                                <img
                                    src={Img6}
                                    alt="Uptime guarantee visualization"
                                    className="w-full h-48 object-fit"
                                />
                            </div>
                        </div>

                        {/* Card 2 - Speed and Scalability */}
                        <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg shadow-sky-100/50 border border-gray-300">
                            {/* Text Section with Padding */}
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Trusted by leadership
                                </h3>
                                <p className="text-gray-600 text-md leading-relaxed">
                                    Clear visibility from strategic plans to daily execution, for a single source for updates, risks, and progress.
                                </p>
                            </div>

                            {/* Image Section without Padding */}
                            <div className="bg-white">
                                <img
                                    src={Img7}
                                    alt="Speed and scalability metrics"
                                    className="w-full h-48 object-fit"
                                />
                            </div>
                        </div>

                        {/* Card 3 - Endorsed by IT */}
                        <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg shadow-sky-100/50 border border-gray-300">
                            {/* Text Section with Padding */}
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Endorsed by IT
                                </h3>
                                <p className="text-gray-600 text-md leading-relaxed">
                                    Data is encrypted, safeguarded, and fully compliant with HIPAA, GDPR, Privacy Shield, and more.
                                </p>
                            </div>

                            {/* Image Section without Padding */}
                            <div className="bg-white">
                                <img
                                    src={Img8}
                                    alt="Speed and scalability metrics"
                                    className="w-full h-48 object-fit"
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