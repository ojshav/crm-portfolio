import React from "react";

const supportItems = [
  {
    id: 1,
    title: "Help desk topics",
    subtitle: "Explore now",
    img: "https://assets.keap.com/image/upload/c_scale,w_400,q_95,dpr_2/v1722370294/keap/keap-pages/contact/help-desk-full.webp", // replace with your image
  },
  {
    id: 2,
    title: "CRM integrations info",
    subtitle: "See more",
    img: "https://assets.keap.com/image/upload/c_scale,w_400,q_95,dpr_2/v1648773469/keap/keap-pages/contact/integrations_cover.webp",
  },
  {
    id: 3,
    title: "Training for customers",
    subtitle: "Watch now",
    img: "https://assets.keap.com/image/upload/c_scale,w_400,q_95,dpr_2/v1648851238/keap/keap-pages/contact/webinars_cover.webp",
  },
  {
    id: 4,
    title: "User community",
    subtitle: "Get connected",
    img: "https://assets.keap.com/image/upload/c_scale,w_400,q_95,dpr_2/v1648851238/keap/keap-pages/contact/community_cover.webp",
  },
];

export default function HelpSection() {
  return (
    <section className="w-full py-20 px-6 lg:px-20 text-center max-w-7xl mx-auto">
      {/* Subtitle */}
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 font-semibold tracking-wide uppercase">
        Contact Us
      </p>

      {/* Heading */}
      <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-4">
        Need some help?{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500">
          Let’s talk it out.
        </span>
      </h2>

      {/* Description */}
      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        We’re always here for our community of entrepreneurs. Our growth and
        customer service teams are ready to help you take your business to the
        next level.
      </p>

      {/* Cards Grid */}
      <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {supportItems.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6 text-left">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <button className="mt-3 inline-flex items-center text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 group-hover:underline">
                {item.subtitle}
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
