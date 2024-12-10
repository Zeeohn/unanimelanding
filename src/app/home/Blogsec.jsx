"use client";
import blogimg from "../../../public/Assets/blogbg.png";
import arrowicon from "../../../public/Assets/arrow.svg";
import Image from "next/image";
import { useState, useEffect } from "react";

const Blogsec = ({ text, heading, cta }) => {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    const truncateText = () => {
      const maxWords =
        window.innerWidth < 640
          ? 12
          : window.innerWidth < 1024
          ? 20
          : text?.split(" ").length;
      const words = text?.split(" ");
      if (words?.length > maxWords) {
        setDisplayText(words?.slice(0, maxWords).join(" ") + "...");
      } else {
        setDisplayText(text);
      }
    };

    truncateText(); // Initial truncation
    window.addEventListener("resize", truncateText); // Update on window resize

    return () => window.removeEventListener("resize", truncateText); // Cleanup on unmount
  }, [text]);
  return (
    <div>
      <div className="md:px-[5%] sm:pt-4 md:pt-10 lg:pt-16 overflow-hidden md:rounded-2xl">
        <div className="relative  md:rounded-2xl overflow-hidden">
          <Image
            src={blogimg}
            alt="productimg"
            className="max-h-[700px] w-full object-cover object-center"
          />
          <div className="absolute w-full md:max-w-[80%] lg:max-w-[65%] xl:max-w-[45%] top-0 left-0 flex flex-col justify-end h-full px-[5%] pb-6 md:px-8 md:pb-10">
            <p className="font-bold text-xl md:text-2xl lg:text-4xl xl:text-5xl text-white ">
              {heading}
            </p>
            <p
              className=" pt-2 md:pt-6 lg:pt-10 sm:font-semibold text-white text-sm sm:text-xl"
              dangerouslySetInnerHTML={{ __html: displayText }}
            ></p>
            <div className="flex gap-2 md:gap-4 lg:gap-6 items-center pt-4 md:pt-6">
              <button className="text-white text-sm md:text-xl lg:text-2xl font-bold ">
                {cta}
              </button>{" "}
              <Image src={arrowicon} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogsec;
