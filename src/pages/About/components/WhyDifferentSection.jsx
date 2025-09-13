import React from 'react';

import heroCrm3Img from '@/assets/hero-crm3.png';
import heroCrm4Img from '@/assets/hero-crm4.png';
import heroCrm5Img from '@/assets/hero-crm5.png';
import heroCrm6Img from '@/assets/hero-crm6.png';
import heroCrm7Img from '@/assets/hero-crm7.png';

const WhyDifferentSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why We Are Different
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our platform stands out with innovative features and comprehensive solutions 
            designed to transform the way you work and manage your projects.
          </p>
        </div>

        {/* Cards Container */}
        <div className="space-y-8">
          {/* Row 1 - Two Big Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-100/50 rounded-2xl border border-gray-200">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  15+ views for any project type by our Team
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Manage projects with List, Gantt, Calendar, and more—
                  so every team can work the way that works best for them.
                </p>
              </div>
              <div className="w-full h-64 rounded-lg overflow-hidden pl-8">
                <img 
                  src={heroCrm3Img}
                  alt="Project management views" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100/50 rounded-2xl border border-gray-200">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Docs centralize project knowledge and plans
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Create SOWs, project plans, and requirements
                  that stay connected to your tasks and timeline.
                </p>
              </div>
              <div className="w-full h-64 rounded-lg overflow-hidden pl-8">
                <img 
                  src={heroCrm4Img}
                  alt="Document management" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Row 2 - Three Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 3 */}
            <div className="bg-gray-100/50 rounded-2xl border border-gray-200">
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Forms to streamline project requests
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Capture incoming work, change requests, and feedback—then 
                  automatically route them to the right workflow and team.
                </p>
              </div>
              <div className="w-full h-48 rounded-lg overflow-hidden pl-8">
                <img 
                  src={heroCrm5Img}
                  alt="Forms and requests" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-100/50 rounded-2xl border border-gray-200">
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Templates speed setup and standardization
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Deploy standardized workflows for any project type—from agile 
                  sprints to waterfall plans, without having to start from scratch.
                </p>
              </div>
              <div className="w-full h-48 rounded-lg overflow-hidden pl-8">
                <img 
                  src={heroCrm6Img}
                  alt="Templates and workflows" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-gray-100/50 rounded-2xl border border-gray-200">
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Whiteboards bring project plans to life
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Map out project flows, capture requirements, and instantly convert 
                  any concept into assignable tasks.
                </p>
              </div>
              <div className="w-full h-48 rounded-lg overflow-hidden pl-8">
                <img 
                  src={heroCrm7Img}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
