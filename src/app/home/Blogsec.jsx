"use client";
import blogimg from "../../../public/Assets/blogbg.png";
import {useRouter} from "next/navigation";
import arrowicon from "../../../public/Assets/arrow.svg";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

const Blogsec = ({ text, heading, cta, bg, overlayImg, overlayColor, url }) => {
  const [displayText, setDisplayText] = useState(text);

  const router = useRouter();

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

  const handleRedirect = (url) => {
    if(url){
      router.push(url);
    }
    
    return;
  }

  return (
    <div>
      <div className="md:px-[5%] sm:pt-4 md:pt-10 overflow-hidden md:rounded-2xl">
        <div className="relative flex md:rounded-2xl overflow-hidden">
          <Image
            src={bg ? bg : blogimg}
            alt="productimg"
            className="max-h-[700px] w-full object-cover object-center"
          />
          {overlayImg && (
            <Image
              src={overlayImg}
              alt="blue overlay"
              className="flex absolute h-full opacity-60 w-full z-10"
            />
          )}
          {overlayColor && (
            <div className="absolute w-full h-full bg-[#0E0E0E] opacity-70 z-20"></div>
          )}
          <div className="absolute w-full md:max-w-[80%] lg:max-w-[65%] xl:max-w-[45%] top-0 left-0 flex flex-col justify-center h-full px-[5%] md:px-8 z-20">
            <p className="font-bold text-xl md:text-2xl lg:text-4xl xl:text-5xl text-white ">
              {heading}
            </p>
            <p
              className=" pt-2 md:pt-6 lg:pt-10 sm:font-semibold text-white text-sm sm:text-xl"
              dangerouslySetInnerHTML={{ __html: displayText }}
            ></p>
            <div className="">
              <button className="text-white flex gap-2 md:gap-4 lg:gap-6 items-center pt-4 md:pt-8  hover:underline text-sm md:text-xl lg:text-2xl hover:text-[#18C4B8] font-bold" onClick={() => handleRedirect(url)}>
                {cta}
              <FaArrowRight size={24} />
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogsec;
