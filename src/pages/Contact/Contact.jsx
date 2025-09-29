import React, { useRef } from "react";
import HelpSection from "./components/HelpSection";
import ContactForm from "./components/ContactForm";
import FAQ from "./components/FAQ";

const Contact = () => {
  const faqRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (target) => {
    if (target === "faq" && faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (target === "contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <HelpSection onScroll={handleScroll} />

      {/* ContactForm Section */}
      <div ref={contactRef}>
        <ContactForm />
      </div>

      {/* FAQ Section */}
      <div ref={faqRef}>
        <FAQ />
      </div>
    </div>
  );
};

export default Contact;
