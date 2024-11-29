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
        className="w-full py-10 text-xl   text-center"
      >
        {title}
        <Image src={dropdown} alt="dropdown" className="inline-flex ml-16" height={40}/>
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
    <div className="px-[5%] pt-28 pb-20">
        <p className="text-center font-bold text-4xl pb-16">Frequently asked questions</p>
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
