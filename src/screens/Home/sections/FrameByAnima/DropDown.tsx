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
            ? "bg-[#fff0f0] text-[#9b4d6a] border-[#cda3b3]"
            : "text-[#d87a6a] border-[#f0a07a] hover:bg-[#fff0f0]"
        }`}
      >
        <span>{faq.question}</span>
        {isOpen ? (
          <FaChevronUp className="text-[#d87a6a]" />
        ) : (
          <FaChevronDown className="text-[#d87a6a]" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 px-4 py-3 border border-[#f0a07a] rounded-md text-[#d87a6a] font-medium text-sm leading-6 animate-fade-in">
          {faq.answer}
        </div>
      )}
    </div>
  );
};

const DropDown = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative bg-white min-h-screen flex items-center justify-center px-4 py-12 font-[Inter]">
      {/* Left Feather */}
      <img
        alt="Feather left"
        className="absolute left-0 top-1/2 -translate-y-1/2 max-w-[150px] max-h-[150px] pointer-events-none select-none"
        src="https://storage.googleapis.com/a1aa/image/8e9ed98e-d259-49c3-2ced-966b65e3bf90.jpg"
        style={{
          filter:
            "brightness(0) saturate(100%) invert(91%) sepia(3%) saturate(0%) hue-rotate(176deg) brightness(102%) contrast(89%)",
        }}
      />
      {/* Right Feather */}
      <img
        alt="Feather right"
        className="absolute right-0 bottom-0 max-w-[150px] max-h-[150px] pointer-events-none select-none"
        src="https://storage.googleapis.com/a1aa/image/6b8c85fd-cb61-4b9d-1b5d-0c9775f10543.jpg"
        style={{
          filter:
            "brightness(0) saturate(100%) invert(91%) sepia(3%) saturate(0%) hue-rotate(176deg) brightness(102%) contrast(89%)",
        }}
      />

      {/* FAQ Content */}
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
          <span className="inline-block bg-[#e6e1e1] rounded-md px-3 py-1 ml-1 text-[#d87a6a] font-medium">
            tarini@thepankhproject.com
          </span>
        </p>

        <div className="space-y-4 px-4 sm:px-0 text-left">
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
