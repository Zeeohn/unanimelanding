"use client";
import { useState } from 'react';
import dropdown from "../../../public/Assets/faqpagedown.svg";
import Image from 'next/image';

function CollapsibleSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#DDDDDD]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 sm:py-6 lg:py-10 text-sm  md:text-xl flex items-center justify-between md:justify-center text-left   md:text-center"
      >
        {title}
        <Image src={dropdown} alt="dropdown" className="inline-flex ml-16 h-5 md:h-10" />
      </button>
      {isOpen && (
        <div className="p-4">
          {children}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="px-[5%] pt-12 md:pt-20 lg:pt-28 lg:pb-20 md:pb-12 pb-0">
        <p className="md:text-center font-bold text-xl md:text-2xl lg:text-4xl pb-2 sm:pb-6 md:pb-10  lg:pb-16">Frequently asked questions</p>
      <CollapsibleSection title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore?">
        <p>Content for section 1.</p>
      </CollapsibleSection>
      <CollapsibleSection title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.">
        <p>Content for section 2.</p>
      </CollapsibleSection>
      <CollapsibleSection title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.">
        <p>Content for section 3.</p>
      </CollapsibleSection>
      <CollapsibleSection title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.">
        <p>Content for section 4.</p>
      </CollapsibleSection>
    </div>
  );
}
