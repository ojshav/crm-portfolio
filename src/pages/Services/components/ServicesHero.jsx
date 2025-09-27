import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesHero = () => {
    // Mock data for the cards
    const cardData = [
        { id: 1, title: "Proofing and Annotation", color: "bg-blue-100", img: "https://images.ctfassets.net/w8fc6tgspyjz/6EHjZHoK97B8yRTcKbOUSS/b99b02c65bf76f64c2d60af067a7cc59/proffing_and_annotation.png", height: "h-52" },
        { id: 2, title: "Automations", color: "bg-green-100", img: "https://images.ctfassets.net/w8fc6tgspyjz/2Qzkje7uqbSaeZrMRRugWH/050160b3162bc3f3b2ccd5e800e6d1a8/automations.png", height: "h-52" },

        { id: 3, title: "Custom Fields", color: "bg-purple-100", img: "https://images.ctfassets.net/w8fc6tgspyjz/2sIwF1cPLzio8zc1OP6Fsf/10382f549ac9e40b6eb7ff6c4ac2e88f/custom_fields.png", height: "h-52" },
        { id: 4, title: "Connected Search", color: "bg-yellow-100", img: "https://images.ctfassets.net/w8fc6tgspyjz/7bzzy2K8gaoCjlz5sFRF75/b3dc026e077d6d31ee03b101b792bf4e/connected_search.png", height: "h-52" },

        { id: 5, title: "Views", color: "bg-red-100", img: "https://images.ctfassets.net/w8fc6tgspyjz/3Kfd0v5OOxYqOfFtgomFS7/91440f473dd184d158ac272faf4a3dbb/views.png", height: "h-96" },

        { id: 6, title: "AI Writing", color: "bg-pink-100", img: "https://images.ctfassets.net/w8fc6tgspyjz/2HvJMG4iJVpjgFvgdAom3H/582a007ca3c6e8259def73fa2a669cbc/Frame_2121453033.png", height: "h-36" },
        { id: 7, title: "Chat", color: "bg-indigo-100", img: "https://images.ctfassets.net/w8fc6tgspyjz/4VshDZWj5qAgxt6XopZz65/984e403fee1c5c93c49e4c69d2fa3370/Frame_2121453034.png", height: "h-72" },

        { id: 8, title: "Whiteboard", color: "bg-orange-100", img: "https://images.ctfassets.net/w8fc6tgspyjz/1RKhR9eSJyJElv2kcUonLY/5abe59a96880a4cd45f38fa6c057cf00/Frame_2121453035.png", height: "h-52" },
        { id: 9, title: "Docs", color: "bg-teal-100", img: "https://images.ctfassets.net/w8fc6tgspyjz/34eN51LgGkne0jhMBvLiet/2ba56045dc492e24a5256bea919fb162/Frame_2121453036.png", height: "h-52" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const Card = ({ title, img, gradientBorder = false, height = "h-auto" }) => (
        <motion.div
            variants={cardVariants}
            className={`relative rounded-2xl shadow-lg backdrop-blur-xl bg-white/30 border 
        ${gradientBorder
                    ? "border-transparent bg-clip-padding p-[2px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                    : "border-white/40"} ${height} w-full mb-4`}
        >
            <div className="w-full h-full rounded-2xl bg-white/70 backdrop-blur-lg flex flex-col">
                <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-800 truncate">{title}</h3>
                </div>
                <div className="flex-1 relative h-">
                    <img
                        src={img}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover rounded-b-2xl"
                    />
                </div>
            </div>
        </motion.div>
    );

    return (
        <div className="bg-gray-50 py-6 px-4 ">
            <div className="">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        The everything CRM
                        <br />
                        for large teams
                    </h1>

                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        CRM activates your sales team by bringing everything from lead
                        tracking to customer onboarding and deal collaboration into one place.
                    </p>

                    <Link to="/pricing">
                        <motion.button
                            className="relative overflow-hidden z-20 bg-[linear-gradient(to_right,_#00d5ff,_#1d4ed8,_#6112ff,_#ec4899,_#ec4899)] text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 mb-3 sm:mb-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10 font-sans">Get started. It's FREE!</span>

                            {/* Shiny effect overlay */}
                            <span className="absolute inset-0 w-full h-full rounded-lg overflow-hidden">
                                <span className="absolute -top-1 -left-1 w-1/3 h-[200%] bg-white/40 rotate-12 transform translate-x-[-120%] hover:translate-x-[300%] transition-transform duration-700 ease-in-out"></span>
                            </span>
                        </motion.button>
                    </Link>

                    <div className="mt-4 text-sm text-gray-500">
                        Free forever. No credit card.
                    </div>

                    <div className="flex items-center justify-center mt-4 space-x-2">
                        <div className="flex text-yellow-400">
                            {"★".repeat(4)}
                            <span className="text-gray-300">★</span>
                        </div>
                        <span className="text-sm text-gray-600">25,000+ reviews</span>

                    </div>
                </motion.div>

                {/* Cards Grid Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative"
                >


                    <div className="grid grid-cols-2  md:grid-col-4 lg:grid-cols-6 gap-6">
                        {/* Column 1 - Highest position */}
                        <div className="hidden lg:flex flex-col" style={{ marginTop: '0px' }}>
                            <Card title={cardData[0].title} color={cardData[0].color} img={cardData[0].img} height={cardData[0].height} />
                            <Card title={cardData[1].title} color={cardData[1].color} img={cardData[1].img} height={cardData[1].height} />
                        </div>

                        {/* Column 2 - Medium-high position */}
                        <div className="hidden md:flex flex-col" style={{ marginTop: '60px' }}>
                            <Card title={cardData[2].title} color={cardData[2].color} img={cardData[2].img} height={cardData[2].height} />
                            <Card title={cardData[3].title} color={cardData[3].color} img={cardData[3].img} height={cardData[2].height} />
                        </div>

                        {/* Column 3 - Largest card in center */}
                        <div className="flex flex-col col-span-2 relative" style={{ marginTop: '120px' }}>

                            <Card
                                title={cardData[4].title}
                                color={cardData[4].color}
                                isLarge={true}
                                img={cardData[4].img}
                                height={cardData[4].height}
                            />
                        </div>

                        {/* Column 4 - Medium-high position (same as column 2) */}
                        <div className="hidden md:flex flex-col" style={{ marginTop: '60px' }}>
                            <Card title={cardData[5].title} color={cardData[5].color} img={cardData[5].img} height={cardData[5].height} />
                            <Card title={cardData[6].title} color={cardData[6].color} img={cardData[6].img} height={cardData[6].height} />
                        </div>

                        {/* Column 5 - Highest position (same as column 1) */}
                        <div className="hidden lg:flex flex-col" style={{ marginTop: '0px' }}>
                            <Card title={cardData[7].title} color={cardData[7].color} img={cardData[7].img} height={cardData[7].height} />
                            <Card title={cardData[8].title} color={cardData[8].color} img={cardData[8].img} height={cardData[8].height} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesHero;