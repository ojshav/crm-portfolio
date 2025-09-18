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
    { id: 'sales-crm', label: 'Sales ' },
    { id: 'ecommerce-crm', label: 'E-commerce' },
    { id: 'retail-crm', label: 'Retail & Mall' },
    { id: 'service-crm', label: 'Service Provider' },
    { id: 'realestate-crm', label: 'Real Estate' },
    { id: 'education-crm', label: 'Education' },
    { id: 'healthcare-crm', label: 'Healthcare' },
  ];

  const sections = [
    {
      id: 'sales-crm',
      title: 'Sales CRM',
      subtitle: 'Streamline your sales pipeline',
      description:
        'A powerful CRM that helps sales teams manage leads, track pipelines, and close deals faster with automated reminders and analytics.',
      image: heroCrm1Img,
    },
    {
      id: 'ecommerce-crm',
      title: 'E-commerce CRM',
      subtitle: 'Boost online customer engagement',
      description:
        'Seamlessly integrates with online stores to provide customer support, recover abandoned carts, and manage loyalty programs for repeat sales.',
      image: heroCrm2Img,
    },
    {
      id: 'retail-crm',
      title: 'Retail & Mall CRM',
      subtitle: 'Personalize customer experiences',
      description:
        'Enables malls and retail businesses to run membership programs, targeted SMS/email campaigns, and track customer behavior for smarter marketing.',
      image: heroCrm3Img,
    },
    {
      id: 'service-crm',
      title: 'Service Provider CRM',
      subtitle: 'Simplify client management',
      description:
        'Built for consultants, lawyers, gyms, and spas to manage appointments, service history, and automated reminders for improved customer retention.',
      image: heroCrm4Img,
    },
    {
      id: 'realestate-crm',
      title: 'Real Estate CRM',
      subtitle: 'Close more property deals',
      description:
        'Manages property inquiries, automates follow-ups, and nurtures leads to help real estate agents and firms convert prospects faster.',
      image: heroCrm5Img,
    },
    {
      id: 'education-crm',
      title: 'Education CRM',
      subtitle: 'Streamline admissions',
      description:
        'Helps schools and colleges manage student inquiries, admission pipelines, and automated communication to increase enrollment efficiency.',
      image: heroCrm6Img,
    },
    {
      id: 'healthcare-crm',
      title: 'Healthcare CRM',
      subtitle: 'Enhance patient care',
      description:
        'Designed for clinics and hospitals to manage patient records, appointment reminders, and follow-up communication, ensuring better patient engagement.',
      image: heroCrm7Img,
    },
  ];

  // Use IntersectionObserver to determine which section is most visible within the scroll container.
useEffect(() => {
  const container = containerRef.current;

  // If container is not scrollable, fall back to window
  const observer = new IntersectionObserver(
    (entries) => {
      let maxEntry = null;
      entries.forEach((entry) => {
        if (!maxEntry || entry.intersectionRatio > maxEntry.intersectionRatio) {
          maxEntry = entry;
        }
      });

      if (maxEntry && maxEntry.target && maxEntry.target.dataset?.index) {
        const idx = Number(maxEntry.target.dataset.index);
        if (!Number.isNaN(idx)) {
          setActiveSection(idx);
        }
      }
    },
    {
      root: container || null, // ✅ fallback to window if container is not valid
      rootMargin: '0px 0px -50% 0px', // ✅ activates when section is halfway in view
      threshold: [0.25, 0.5, 0.75, 1],
    }
  );

  sectionRefs.current.forEach((el) => {
    if (el) observer.observe(el);
  });

  return () => {
    observer.disconnect();
  };
}, [sections.length]);


  // Handle menu click to scroll to section (robust calculation using bounding rects)
  const handleMenuClick = (index) => {
    const container = containerRef.current;
    const element = sectionRefs.current[index];
    if (!container || !element) return;

    // Calculate element's position relative to the container's scrollTop using getBoundingClientRect
    const containerRect = container.getBoundingClientRect();
    const elemRect = element.getBoundingClientRect();

    // desired scroll target (current scrollTop + offset from top of container to element)
    const targetScrollTop = container.scrollTop + (elemRect.top - containerRect.top);

    container.scrollTo({
      top: targetScrollTop - 16, // small offset so heading isn't flush to top
      behavior: 'smooth',
    });
  };

  // Scroll active menu item into view on mobile
  useEffect(() => {
    if (menuScrollRef.current && window.innerWidth < 1024) {
      const activeButton = menuScrollRef.current.children[activeSection];
      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  }, [activeSection]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col lg:flex-row bg-white max-w-7xl w-full">
        {/* Mobile Menu */}
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
                      ? 'bg-gray-200 text-black font-semibold'
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
          <div
            ref={containerRef}
            className="flex-1 px-4 sm:px-6 lg:px-8 py-4 lg:py-8 scroll-smooth scrollbar-hide overflow-y-auto"
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                data-index={index}
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

        {/* Desktop Menu */}
        <div className="hidden lg:flex w-1/5 bg-white justify-center items-start pt-8">
          <div className="rounded-2xl p-4 w-48 shadow-sm border border-gray-200 sticky top-8">
            <nav className="space-y-2">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleMenuClick(index)}
                  className={`w-full text-left px-4 py-2 rounded-xl transition-all duration-200 text-sm ${
                    activeSection === index
                      ? 'bg-gray-200 text-black font-semibold'
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
