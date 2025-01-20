import React, { useState } from "react";
import { FiChevronDown, FiChevronUp, FiX } from "react-icons/fi";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I adopt a pet through Shelter Me?",
      answer:
        "You can adopt a pet by visiting our website, browsing through available pet profiles, and submitting an adoption application. Our team will guide you through the rest of the process, including a home check and meeting the pet.",
    },
    {
      question: "What is the process for donating to Shelter Me?",
      answer:
        "Donations can be made securely through our website via credit card, PayPal, or other supported methods. You can also contact us directly for offline donations. Every contribution goes towards the care and welfare of the animals.",
    },
    {
      question: "Are all the pets on Shelter Me vaccinated and healthy?",
      answer:
        "Yes, every pet listed on Shelter Me undergoes thorough health checks, vaccinations, and deworming to ensure they are ready for adoption.",
    },
    {
      question: "Can I visit the pets before adopting them?",
      answer:
        "Yes, we encourage potential adopters to meet the pets before adopting. You can schedule a visit through our website or by contacting us directly.",
    },
    {
      question: "Does Shelter Me offer any post-adoption support?",
      answer:
        "Yes, we provide post-adoption support including advice, resources, and a community of pet owners to help your new family member adjust to their new home.",
    },
  ];

  const toggleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const handleClose = () => {
    window.history.back();
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      {/* Header Image */}
      <img
        src="assets/images/faq-header.png"
        alt="FAQ Header"
        className="w-full object-cover"
        style={{ height: "300px" }}
      />

      {/* FAQ Section */}
      <div className="bg-white mt-[-80px] p-8 rounded-lg shadow-lg w-full max-w-[1062px] relative">
        <button className="absolute top-4 right-4" onClick={handleClose}>
          <FiX className="text-gray-700 hover:text-red-500" size={30} />
        </button>
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 transition-transform duration-300 hover:scale-105"
          >
            <button
              onClick={() => toggleFaq(index)}
              className={`flex justify-between items-center w-full p-4 border rounded-lg bg-gray-100 hover:bg-gray-200 focus:outline-none ${
                openIndex === index ? "text-blue-500" : "text-gray-800"
              }`}
              style={{
                fontSize: "18px",
                fontFamily: "Poppins",
                fontWeight: "500",
                transition: "background-color 0.3s ease",
              }}
            >
              <span>{faq.question}</span>
              <span>
                {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </button>
            {openIndex === index && (
              <div
                className="p-4 bg-gray-50 border-l-4 border-blue-500 rounded-lg mt-2"
                style={{
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  lineHeight: "1.6",
                }}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
