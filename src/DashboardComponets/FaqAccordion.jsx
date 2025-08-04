import React, { useContext, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { ThemeContext } from "../context/ThemeContext";

const faqData = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur",
    answer:
      "Ut enim ad minim veniam, quis exercitation ullamco laboris commodo consequat. Duis aute irure dolor in reprehenderit in.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur",
    answer: "Answer content for the second FAQ item.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur",
    answer: "Answer content for the third FAQ item.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur",
    answer: "Answer content for the fourth FAQ item.",
  },
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default
  const { darkMode } = useContext(ThemeContext) || {};

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`max-w-7xl mx-auto mt-10 px-4 rounded-lg transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-white text-black"
      }`}
    >
      <h2 className="text-2xl font-bold mb-6 pt-1">FAQ</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-lg border transition-all duration-300 ${
                darkMode
                  ? isOpen
                    ? "bg-gray-800 border-gray-600 text-white"
                    : "bg-gray-700 border-gray-600 text-gray-300"
                  : isOpen
                  ? "bg-blue-600 border-blue-400 text-white"
                  : "bg-gray-100 border-gray-300 text-black"
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-5 py-4 flex justify-between items-center focus:outline-none"
              >
                <span className="text-sm font-medium">{item.question}</span>
                <FiChevronDown
                  className={`text-lg transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-4 text-sm">{item.answer}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqAccordion;
