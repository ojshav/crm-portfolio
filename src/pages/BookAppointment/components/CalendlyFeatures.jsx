import React from 'react';

const CalendlyFeatures = () => {
  const videoUrl = "https://cdn-marketing.acuityscheduling.com/img/marketing/squarespace/v3/frontsite/feature-area/01.mp4";

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-8">
      {/* First Large Card - Control availability */}
      <div className="bg-gray-100 rounded-3xl p-8 lg:p-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Control your availability with 
              online appointments
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Tools to help you schedule and earn on your own terms—customize exactly how and when clients can book with you, host virtual appointments or classes, and block off personal time. Grow your business with scheduling automation.
            </p>
          </div>
          
          {/* Right - Video */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto"
              >
                <source src={"https://cdn-marketing.acuityscheduling.com/img/marketing/squarespace/v3/frontsite/feature-area/01.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Two Medium Cards */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Card 1 - Enable automated appointment booking */}
        <div className="bg-gray-100 rounded-3xl p-8">
          <div className="space-y-6">
            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-800 leading-tight">
                Enable automated 
                appointment booking
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Seamlessly manage multiple locations with your online scheduler and let clients easily cancel or reschedule their own appointments. Send automated receipts as well as reminder notifications throughout the scheduling process to keep clients prompt.
              </p>
            </div>
            
            {/* Video */}
            <div className="rounded-2xl overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto"
              >
                <source src={"https://cdn-marketing.acuityscheduling.com/img/marketing/squarespace/v3/frontsite/feature-area/02.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Card 2 - Grow your customer base */}
        <div className="bg-gray-100 rounded-3xl p-8">
          <div className="space-y-6">
            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-800 leading-tight">
                Grow your customer base 
                and keep them engaged
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Create <span className="text-blue-600 underline">custom intake forms</span> to streamline and personalize your customer experience. Use powerful loyalty tools to drive business growth and keep customers coming back to schedule more appointments.
              </p>
            </div>
            
            {/* Video */}
            <div className="rounded-2xl overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto"
              >
                <source src={"https://cdn-marketing.acuityscheduling.com/img/marketing/squarespace/v3/frontsite/feature-area/03.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Final Large Card - Protect your time */}
      <div className="bg-gray-100 rounded-3xl p-8 lg:p-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Protect your time and 
              maximize your income
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              <span className="text-blue-600 underline">Reduce no-shows</span> with protection tools like storing credit cards and secure deposits. Seamlessly offer recurring subscriptions, packages, and gift cards to up your earnings.
            </p>
          </div>
          
          {/* Right - Video */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto"
              >
                <source src={"https://cdn-marketing.acuityscheduling.com/img/marketing/squarespace/v3/frontsite/feature-area/04.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendlyFeatures;