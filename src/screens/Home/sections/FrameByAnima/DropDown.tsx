import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is dance movement therapy?",
    answer:
      "Dance movement therapy (DMT) is a therapeutic approach that uses movement and dance to support emotional, cognitive, physical, and social integration of individuals.",
  },
  {
    question: "How do I become a DMT?",
    answer:
      "To become a DMT, you typically need to complete a specialized training program in dance movement therapy and obtain certification or licensure depending on your location.",
  },
  {
    question:
      "If I have a background in professional dance can I become a DMT?",
    answer:
      "Yes, a background in professional dance can be beneficial, but you will still need to complete the required training in therapy and psychology to become a certified DMT.",
  },
  {
    question: "How can I practice DMT as a psychotherapist?",
    answer:
      "Psychotherapists can integrate DMT techniques into their practice after receiving appropriate training and certification in dance movement therapy.",
  },
  {
    question: "What does a dance/movement therapy session look like?",
    answer:
      "A typical DMT session involves guided movement exercises, creative expression through dance, and verbal processing to explore emotions and experiences.",
  },
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`w-full flex justify-between items-center border rounded-md px-4 py-3 font-semibold text-sm leading-5 transition-colors ${
          isOpen
            ? " bg-gradient-to-r from-[#AA587C] to-[#FD8950]  bg-clip-text text-transparent font-semibold  "
            : "bg-gradient-to-r from-[#AA587C] to-[#FD8950]  bg-clip-text text-transparent font-semibold hover:underline border-[#f0a07a] hover:bg-[#fff0f0]"
        }`}
      >
        <span>{faq.question}</span>
        {isOpen ? (
          <FaChevronUp className="text-[#d87a6a]" />
        ) : (
          <FaChevronDown className="text-[#d87a6a]" />
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-[500px] opacity-100 mt-2 py-3"
            : "max-h-0 opacity-0 py-0"
        } px-4 border border-[#f0a07a] rounded-md text-[#d87a6a] font-medium text-sm leading-6`}
      >
        <div className="transition-opacity duration-500">{faq.answer}</div>
      </div>
    </div>
  );
};

const DropDown = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative bg-white flex items-center justify-center px-4 py-12 font-[Inter]">
      <img
        alt="Feather left"
        className="absolute -left-48 top-1/2 -translate-y-1/2 max-w-[450px] w-full h-[450px] pointer-events-none select-none z-[-10] sm:z-auto"
        src="/birdleft.png"
        style={{
          filter:
            "brightness(0) saturate(100%) invert(91%) sepia(3%) saturate(0%) hue-rotate(176deg) brightness(102%) contrast(89%)",
        }}
      />
      <img
        alt="Feather right"
        className="absolute -right-20 bottom-0 w-[250px] h-[250px] pointer-events-none z-[-10]  sm:z-auto select-none"
        src="/birdright.png"
        style={{
          filter:
            "brightness(0) saturate(100%) invert(91%) sepia(3%) saturate(0%) hue-rotate(176deg) brightness(102%) contrast(89%)",
        }}
      />

      <div className="max-w-3xl w-full text-center">
        <div className="mb-4 flex justify-center">
          <div className="w-12 h-1 rounded-full bg-[#9b4d6a]"></div>
          <div className="w-24 h-1 rounded-full bg-[#cda3b3] ml-1"></div>
        </div>
        <h2 className="text-[#3f2f3f] font-semibold text-lg leading-6 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-[#6b6b6b] text-sm mb-8 px-4 sm:px-0">
          See below for frequently asked questions and if you need further
          assistance, please email:
          <span className="inline-block bg-gradient-to-r from-[#AA587C] to-[#FD8950]  bg-clip-text text-transparent font-semibold hover:underline rounded-md px-3 py-1 ml-1 text-[#d87a6a] font-medium">
            tarini@thepankhproject.com
          </span>
        </p>

        <div className="space-y-4 px-4 sm:px-0 text-left bg-gradient-to-r from-[#AA587C] to-[#FD8950]  bg-clip-text text-transparent font-semibold hover:underline">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              faq={faq}
              isOpen={openIndex === idx}
              onClick={() => toggle(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
