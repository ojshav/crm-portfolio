import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import heroCrm1Img from '@/assets/hero-crm1.png';
import heroCrm2Img from '@/assets/hero-crm2.png';
import heroCrm3Img from '@/assets/hero-crm3.png';
import heroCrm4Img from '@/assets/hero-crm4.png';
import heroCrm5Img from '@/assets/hero-crm5.png';
import heroCrm6Img from '@/assets/hero-crm6.png';
import heroCrm7Img from '@/assets/hero-crm7.png';

const TimelineComponent = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  const menuScrollRef = useRef(null);

  const menuItems = [
    { id: 'gantt', label: 'Gantt' },
    { id: 'table', label: 'Table' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'workload', label: 'Workload' },
    { id: 'box', label: 'Box' },
    { id: 'activity', label: 'Activity' },
    { id: 'mind-map', label: 'Mind Map' },
    { id: 'map', label: 'Map' }
  ];

  const sections = [
    {
      id: 'gantt',
      title: 'Timeline',
      subtitle: 'Plan your work',
      description: 'Manage individual or team projects and quickly prioritize your work on a flexible timeline.',
      image: heroCrm1Img
    },
    {
      id: 'table',
      title: 'Create visual roadmaps',
      subtitle: 'Organize your data',
      description: 'Keep everyone up to date on team projects and workflows. Inform your users with public roadmaps, share project timelines with clients, and collaborate on priorities with your team.',
      image: heroCrm2Img
    },
    {
      id: 'timeline',
      title: 'Project Timeline View',
      subtitle: 'Track progress visually',
      description: 'Visualize project schedules, dependencies, and milestones in an intuitive timeline format that makes project management effortless.',
      image: heroCrm3Img
    },
    {
      id: 'workload',
      title: 'Team Workload Management',
      subtitle: 'Balance resources',
      description: 'Monitor team capacity and distribute work evenly across team members to prevent burnout and optimize productivity.',
      image: heroCrm4Img
    },
    {
      id: 'box',
      title: 'Box View Organization',
      subtitle: 'Card-based workflow',
      description: 'Organize tasks in a flexible card-based layout that adapts to your workflow and makes task management intuitive.',
      image: heroCrm5Img
    },
    {
      id: 'activity',
      title: 'Activity Tracking',
      subtitle: 'Monitor progress',
      description: 'Stay informed about project updates, team activities, and important changes with comprehensive activity tracking.',
      image: heroCrm6Img
    },
    {
      id: 'mind-map',
      title: 'Mind Map Visualization',
      subtitle: 'Think creatively',
      description: 'Brainstorm ideas and visualize project structures with interactive mind maps that enhance creative thinking.',
      image: heroCrm7Img
    },
    {
      id: 'map',
      title: 'Location Mapping',
      subtitle: 'Geographic insights',
      description: 'Visualize project locations and team distribution with integrated mapping features for location-based projects.',
      image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&h=400&fit=crop'
    }
  ];

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;

      let newActiveSection = 0;
      
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const element = ref;
          const elementTop = element.offsetTop;
          const elementHeight = element.offsetHeight;
          
          // Check if section is in viewport (at least 50% visible)
          if (scrollTop >= elementTop - containerHeight / 3 && 
              scrollTop < elementTop + elementHeight - containerHeight / 3) {
            newActiveSection = index;
          }
        }
      });

      setActiveSection(newActiveSection);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial call
      
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Handle menu click to scroll to section
  const handleMenuClick = (index) => {
    if (sectionRefs.current[index] && containerRef.current) {
      const element = sectionRefs.current[index];
      containerRef.current.scrollTo({
        top: element.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  };

  // Scroll active menu item into view on mobile
  useEffect(() => {
    if (menuScrollRef.current && window.innerWidth < 1024) {
      const activeButton = menuScrollRef.current.children[activeSection];
      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeSection]);

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className="flex flex-col lg:flex-row h-screen bg-white max-w-7xl w-full">
        {/* Mobile Menu - Top on mobile, hidden on desktop */}
        <div className="lg:hidden bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="p-4">
            <div 
              ref={menuScrollRef}
              className="flex space-x-2 overflow-x-auto scrollbar-hide pb-2"
            >
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleMenuClick(index)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex-shrink-0 ${
                    activeSection === index
                      ? 'bg-black text-white'
                      : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:w-4/5 flex flex-col">
          {/* Scrollable Content */}
          <div 
            ref={containerRef}
            className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8 scroll-smooth scrollbar-hide"
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                ref={el => sectionRefs.current[index] = el}
                className="mb-8 lg:mb-16 last:mb-4 lg:last:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mb-4 lg:mb-8">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {section.title}
                  </h1>
                  <h2 className="text-lg sm:text-xl text-gray-600 mb-3 lg:mb-4">
                    {section.subtitle}
                  </h2>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-4xl">
                    {section.description}
                  </p>
                </div>
                
                {/* Timeline Interface Mock */}
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4 lg:p-6 border border-gray-200">
                  <img 
                    src={section.image} 
                    alt={section.title}
                    className="w-full h-48 sm:h-64 lg:h-96 object-cover rounded-lg shadow-sm"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Sticky Menu - Right Side (hidden on mobile) */}
        <div className="hidden lg:flex w-1/5 bg-white justify-center items-start pt-8">
          <div className="rounded-2xl p-4 w-48 shadow-sm border border-gray-200 sticky top-8">
            <nav className="space-y-1">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleMenuClick(index)}
                  className={`w-full text-left px-6 py-2 rounded-2xl transition-all duration-200 text-lg ${
                    activeSection === index
                      ? 'bg-black text-white font-medium'
                      : 'text-gray-800 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: activeSection === index ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TimelineComponent;