import React from 'react';

const TestimonialCard = ({ logo, rating, review, reviewerName, reviewerId }) => {
  return (
    <div
      className="rounded-2xl p-6 hover:shadow-lg border border-white/20 relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
      style={{
        background: 'linear-gradient(135deg, rgba(135, 206, 235, 0.05) 0%, rgba(147, 51, 234, 0.03) 50%, rgba(236, 72, 153, 0.04) 100%)',
        transformStyle: 'preserve-3d',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'rotateY(10deg) rotateX(10deg) scale(1.02)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
      }}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/10 to-purple-50/10 opacity-30 rounded-2xl"></div>
      
      <div className="relative z-10">
        {/* Header with logo and rating */}
        <div className="flex justify-between items-start mb-4">
          <img 
            src={logo} 
            alt="Company Logo" 
            className="h-8 object-contain"
          />
          <div 
            className="flex items-center gap-1 rounded-full px-3 py-1 border border-white/30"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)',
            }}
          >
            <span className="text-gray-800 font-semibold text-sm">{rating}</span>
            <svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>

        {/* Review text */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          "{review}"
        </p>

        {/* Reviewer info */}
        <div>
          <h4 className="font-semibold text-gray-900 text-lg">{reviewerName}</h4>
          <p className="text-gray-500 text-sm">{reviewerId}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      logo: "https://www.sonepar.com/resource/blob/107488/0b58c4208ebb4485334436b247a93c32/sonepar-logo-black-with-tagline-png-data.png",
      rating: "4.9",
      review: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of features.",
      reviewerName: "Kate Davis",
      reviewerId: "friable_captain_8"
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Ganesha_Operation_Logo.png",
      rating: "4.7",
      review: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of features.",
      reviewerName: "Martin Kazlauskas",
      reviewerId: "sartorial_statue_59"
    },
    {
      logo: "https://www.freepnglogos.com/uploads/logo-tokopedia-png/tokopedia-apa-itu-startup-pengertian-cara-memulai-dan-1.png",
      rating: "4.9",
      review: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of features.",
      reviewerName: "Sanjay Sharma",
      reviewerId: "voracious_rainbows_68"
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Trustly-logo.png/1200px-Trustly-logo.png",
      rating: "4.2",
      review: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of features.",
      reviewerName: "Tawanna Afumba",
      reviewerId: "intransigent_toejam_15"
    },
    {
      logo: "https://itucekirdek.com/wp-content/uploads/2020/04/cekirdeklogo-guncel-en.png",
      rating: "4.9",
      review: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of features.",
      reviewerName: "Larry King",
      reviewerId: "pendulous_unicorn_46"
    },
    {
      logo: "https://decisioninc.com/wp-content/uploads/2023/06/Case-study-greencore.png",
      rating: "5.0",
      review: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of features.",
      reviewerName: "Fatima Mohamed",
      reviewerId: "salubrious_artist_72"
    }
  ];

  return (
    <section className="min-h-screen bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Our trusted{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-sky-400 to-pink-400 text-transparent bg-clip-text">
                Clients
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-sky-400 to-pink-400 opacity-20 rounded-full"></div>
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Our mission is to drive progress and enhance the lives of our customers by delivering 
            superior products and services that exceed expectations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`
              }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;