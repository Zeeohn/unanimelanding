"use client";
import bgimg from "../../public/Assets/landingmainimg.jpeg";
import Image from "next/image";
import videogif from "../../public/Assets/video.png";
import uppericon from "../../public/Assets/uppericon.png";
import upperright from "../../public/Assets/upperright.png";
import upperleft  from "../../public/Assets/lowerleft.png";
import { useState, useEffect } from "react";
import Slidercomponent from "./home/Slidercomponent";
import partner1 from "../../public/Assets/partner1.svg";
import partner2 from "../../public/Assets/partner2.svg";
import partner3 from "../../public/Assets/partner3.svg";

import FAQ from "./home/FAQ";
import Footer from "./home/Footer";
import Blogsec from "./home/Blogsec";
import Header from "./home/Header";

const Homepage = () => {
  return (
    <div>
      <div className="min-h-[500px] relative">
        {/* <img src={bgimg} alt="backimg" /> */}
        <Image
          src={bgimg}
          alt="backimg"
          style={{
            maxHeight: "650px",
          }}
        />
        <div className=" absolute top-[16%] flex flex-col items-center ">
          <p className="font-redhat font-bold text-5xl text-white max-w-[50%] text-center ">
            The BOLD way to move forward
          </p>
          <p className="font-normal text-xl pt-8 5xl text-white max-w-[50%] text-center  ">
            Experience seamless travel with our professional cab services.
            Whether you need a quick ride to the airport or a leisurely journey
            across town, we prioritize your comfort and safety.
          </p>
          <div className="flex gap-6 justify-center max-w-[50%] pt-14">
            <button className="py-3 px-8 font-redhat bg-[#18C4B8] text-white rounded-3xl ">
              Get started
            </button>
            <button className="py-3 px-8 font-redhat border-white border-2 text-white rounded-3xl ">
              Know more
            </button>
          </div>
        </div>
      </div>
      <div className="videosec relative">
        <div className="upperone absolute flex justify-center w-full -top-[150px]">
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
        <div className="pt-[500px] flex justify-center px-[5%]">
            <div className="w-[75%] text-center">
            <p className="font-bold text-4xl">Lorem ipsum dolor sit amet</p>
            <p className="text-xl pt-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, necessitatibus, cum provident illo vitae perspiciatis labore soluta error omnis inventore minus praesentium totam mollitia.</p>
            </div>
        </div>
      </div>
      <div className="flex justify-between px-[5%] gap-[6%] pt-20">
        <div className="max-w-[50%]">
            <Image src={uppericon} alt="uppericon"></Image>
        <p className="font-bold text-4xl pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        <p className="text-xl pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
        </div>
        <Image src={upperright} alt="right"></Image>
      </div>

      <div className="flex justify-between px-[5%] gap-[6%] pt-20">
      <Image src={upperleft} alt="right"></Image>
        <div className="max-w-[50%] ">
        <p className="font-bold text-4xl pt-10 text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        <p className="text-xl pt-6 text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
       <div className="text-right pt-10"><button className="py-3 px-8 font-redhat border-black border-2 text-black rounded-3xl  ">
              Know more
            </button>
            </div>
        </div>
      
      </div>

      <div><Slidercomponent/></div>

      {/* // partnersec */}

      <div className="px-6 pt-28 pb-20">
        <div className="max-w-[65%] mx-auto">
        <p className="text-lg text-center ">Our partners</p>
        <p className="font-semibold text-xl text-center pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
        </div>

        <div className="pt-28 flex justify-between">
          <Image src={partner1} alt="partner" />
          <Image src={partner2} alt="partner" />
          <Image src={partner3} alt="partner" />
          <Image src={partner1} alt="partner" />
          <Image src={partner2} alt="partner" />
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
