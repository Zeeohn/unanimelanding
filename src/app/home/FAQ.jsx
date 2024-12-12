"use client";
import { useState } from "react";
import dropdown from "../../../public/Assets/faqpagedown.svg";
import Image from "next/image";

function CollapsibleSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#DDDDDD]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 sm:py-6 lg:py-10 text-sm md:text-xl flex items-center justify-between text-left "
      >
        <div>
        {title}
        </div>
        <Image src={dropdown} alt="dropdown" className="inline-flex  h-5 md:h-10" />
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
}

export default function FAQ({ questions }) {
  const placeholderFaqs = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore?",
      answer: "Content for section 1.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      answer: "Content for section 2.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      answer: "Content for section 3.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      answer: "Content for section 4.",
    },
  ];

  const faqs = questions && questions.length > 0 ? questions : placeholderFaqs;

  return (
    <div className="px-[5%] pt-6 md:pt-20 lg:pt-28 lg:pb-20 md:pb-12 pb-0">
      <p className="md:text-center font-bold text-xl md:text-2xl lg:text-4xl pb-2 sm:pb-6 md:pb-10 lg:pb-16">
        Frequently Asked Questions
      </p>
      {faqs.map((faq, index) => (
        <CollapsibleSection key={index} title={faq.question}>
          <p>{faq.answer}</p>
        </CollapsibleSection>
      ))}
    </div>
  );
}
