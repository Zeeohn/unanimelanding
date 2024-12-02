"use client";
import bgimg from "../../public/Assets/landingmainimg.jpeg";
import Image from "next/image";
import videogif from "../../public/Assets/video.png";
import uppericon from "../../public/Assets/uppericon.png";
import upperright from "../../public/Assets/upperright.png";
import upperleft  from "../../public/Assets/lowerleft.png";
import { useState, useEffect, useRef } from "react";
import Slidercomponent from "./home/Slidercomponent";
import partner1 from "../../public/Assets/partner1.svg";
import partner2 from "../../public/Assets/partner2.svg";
import partner3 from "../../public/Assets/partner3.svg";

import FAQ from "./home/FAQ";
import Footer from "./home/Footer";
import Blogsec from "./home/Blogsec";
import Header from "./home/Header";

const Homepage = () => {
  const imageRef = useRef(null);
  const [paddingTop, setPaddingTop] = useState(0);

  useEffect(() => {
    const updatePadding = () => {
      if (imageRef.current) {
        setPaddingTop(imageRef.current.clientHeight +200); // Get the image's height
      }
    };

    updatePadding(); // Initial calculation
    window.addEventListener("resize", updatePadding); // Recalculate on resize

    return () => {
      window.removeEventListener("resize", updatePadding); // Cleanup on unmount
    };
  }, []);

  return (
    <div>
      <div className="min-h-[650px] relative">
        {/* <img src={bgimg} alt="backimg" /> */}
        <Image
        className="object-cover object-center"
          src={bgimg}
          alt="backimg"
          style={{
          minHeight: "650px",
          }}
        />
        <div className=" absolute w-full h-full top-0 left-0 flex flex-col justify-center sm:items-center px-[5%] ">
          <p className="font-redhat font-bold text-4xl  lg:text-5xl text-white max-w-[100%] md:max-w-[70%] lg:max-w-[50%] sm:text-center  ">
            The <span className="font-extrabold"> BOLD</span> way to move forward
          </p>
          <p className="font-normal font-opensans text-2xl sm:text-xl pt-8  text-white max-w-[100%] sm:max-w-[70%] lg:max-w-[50%] sm:text-center  ">
            Experience seamless travel with our professional cab services.
            Whether you need a quick ride to the airport or a leisurely journey
            across town, we prioritize your comfort and safety.
          </p>
          <div className="flex sm:flex-row flex-col gap-6 justify-start max-w-[100%] sm:max-w-[70%] lg:max-w-[50%] pt-14">
            <button className="py-3 sm:px-8 font-redhat bg-[#18C4B8] text-white text-sm  sm:text-base md:text-xl rounded-3xl font-bold sm:w-fit w-[50%]">
              Get started
            </button>
            <button className="py-3 sm:px-8 font-redhat font-semibold border-white border-2 text-sm  sm:text-base md:text-xl text-white rounded-3xl sm:w-fit w-[50%]  ">
              Know more
            </button>
          </div>
        </div>
      </div>
      <div className="videosec relative">
        <div   ref={imageRef} className="upperone absolute hidden justify-center w-full -top-[150px]  md:flex ">
          <Image
            src={videogif}
            alt="backimg"
            style={{
              maxHeight: "600px",
              width: "85%",
              objectFit:"fill",
              borderRadius:"16px",
            }}
          />
        </div>
        <div style={{ paddingTop: paddingTop>200? `${paddingTop/2}px`:"48px" }} className=" flex justify-center px-[5%] ">
            <div className="sm:w-[75%]  sm:text-center">
            <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl">Lorem ipsum dolor sit amet</p>
            <p className=" text-sm md:text-xl pt-2  sm:pt-4 md:pt-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, necessitatibus, cum provident illo vitae perspiciatis labore soluta error omnis inventore minus praesentium totam mollitia.</p>
            </div>
        </div>
      </div>
      <div className="flex flex-col gap-4  md:flex-row justify-between px-[5%] md:gap-[6%] pt-12 md:pt-16  lg:pt-20">
        <div className=" md:max-w-[50%]">
            <Image src={uppericon} alt="uppericon"></Image>
        <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        <p className="text-sm md:text-xl pt-2  sm:pt-4 md:pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
        </div>
        <Image src={upperright} alt="right" style={{width:"100%"}} className="max-h-[200px] sm:max-h-full object-cover object-center rounded-lg md:rounded-2xl"></Image>
      </div>

      <div className="flex flex-col-reverse gap-4  md:flex-row justify-between px-[5%] md:gap-[6%] pt-12 md:pt-16  lg:pt-20">
      <Image src={upperleft} alt="right" style={{width:"100%"}} className="max-h-[200px] sm:max-h-full object-cover object-center rounded-lg md:rounded-2xl"></Image>
        <div className=" md:max-w-[50%]">
          
        <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        <p className="text-sm md:text-xl pt-2  sm:pt-4 md:pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
        <div className=" md:text-right pt-6  md:pt-10"><button className="py-2 px-4 md:py-3  md:px-8 text-sm sm:text-base font-redhat border-black border-2 text-black rounded-3xl  ">
              Know more
            </button>
            </div> 
        </div>
       
      </div>

      {/* <div className="flex justify-between px-[5%] gap-[6%] pt-20">
      <Image src={upperleft} alt="right"></Image>
        <div className="max-w-[50%] ">
        <p className="font-bold text-4xl pt-10 text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        <p className="text-xl pt-6 text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
       <div className="text-right pt-10"><button className="py-3 px-8 font-redhat border-black border-2 text-black rounded-3xl  ">
              Know more
            </button>
            </div>
        </div>
      
      </div> */}

      <div><Slidercomponent/></div>

      {/* // partnersec */}

      <div className="px-[5%] pt-12 md:pt-20 lg:pt-28 lg:pb-20 md:pb-16 pb-12 ">
        <div className="md:max-w-[65%] md:mx-auto">
        {/* <p className="text-lg text-center ">Our partners</p>
        <p className="font-semibold text-xl text-center pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p> */}
        <p className="sm:text-center text-xl  sm:text-lg sm:font-medium font-bold text-left">Our partners</p>
        <p className="sm:text-center pt-2 sm:pt-6 text-sm sm:text-2xl lg:text-4xl  font-semibold text-left ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
        </div>

        <div className=" pt-6 sm:pt-12 md:pt-20 lg :pt-28 flex justify-between overflow-x-hidden">
          <Image src={partner1} alt="partner" style={{width:"15%"}} />
          <Image src={partner2} alt="partner" style={{width:"15%"}} />
          <Image src={partner3} alt="partner" style={{width:"15%"}} />
          <Image src={partner1} alt="partner" style={{width:"15%"}} />
          <Image src={partner2} alt="partner" style={{width:"15%"}}/>
        </div>
      </div>

      {/* // blog sec */}
     <Blogsec/>

      {/* //FAQ */}
      <FAQ/>

      {/* //footersec */}
    </div>
  );
};

export default Homepage;
