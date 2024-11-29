"use client";

import whitecheck from "../../../public/Assets/whitecheck.svg";
import Image from "next/image";
import btnrightarrow from "../../../public/Assets/buttunrightarrow.svg";
import iphonedrive from "../../../public/Assets/drivephone.png";
import flexiblework from "../../../public/Assets/flexiblework.svg";
import highearning from "../../../public/Assets/highearning.svg";
import smoothpayout from "../../../public/Assets/smoothpayout.svg";
import blackstr from "../../../public/Assets/blackstr.svg";
import blacktick from "../../../public/Assets/blacktick.svg";
import documents from "../../../public/Assets/documents.svg";
import driverappimage from "../../../public/Assets/driverapp.png";
import one from "../../../public/Assets/one.svg";
import two from "../../../public/Assets/two.svg";
import three from "../../../public/Assets/three.svg";
import Blogsec from "../home/Blogsec";
import driverappsingle from "../../../public/Assets/driverappsingle.png";
import curlyarrow from "../../../public/Assets/curlyarrow.svg";
import whitearrow from "../../../public/Assets/whitearrow.svg";
import yellowstr from "../../../public/Assets/yellowstr.svg";
import reviewer from "../../../public/Assets/reviewer.png";
import doublequotes from "../../../public/Assets/doublequotes.svg";
import prevbtn from "../../../public/Assets/prevbtn.png";
import nextbtn from "../../../public/Assets/blacknextbtn.png";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef, useEffect, useState } from "react";
import FAQ from "../home/FAQ";
import Footer from "../home/Footer";
import Howitworks from "./Howitworks";
import Earning from "./Earning";
import Drivesafety from "./Drivesafety";


const Drivepage = () => {
  const [isClient, setIsClient] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [currentpage, setcurrentpage] = useState("overview")

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
        <div className="relative">
            <div
            className="flex justify-between px-[5%] py-6 backdrop-blur  absolute top-0 left-0 w-full z-50 
    "
          >
            <p className="text-xl font-bold text-white ">
              BOLD <span className="font-normal">Drivers</span>{" "}
            </p>
            <div className="flex gap-8">
              <p className={`text-lg text-[#888888] ${currentpage==="overview"?"text-white font-bold":""}  hover:text-white hover:font-bold`} onClick={()=>setcurrentpage("overview")}>
                Overview
              </p>
              <p className={`text-lg text-[#888888] ${currentpage==="howitworks"?"text-white font-bold":""}  hover:text-white hover:font-bold`} onClick={()=>setcurrentpage("howitworks")}>
              How it works
              </p>
              <p className={`text-lg text-[#888888] ${currentpage==="earning"?"text-white font-bold":""}  hover:text-white hover:font-bold`} onClick={()=>setcurrentpage("earning")}>
              Earnings
              </p>
              <p className={`text-lg text-[#888888] ${currentpage==="drivesafety"?"text-white font-bold":""}  hover:text-white hover:font-bold`} onClick={()=>setcurrentpage("drivesafety")}>
              Driver safety
              </p>
              <p className={`text-lg text-[#888888] ${currentpage==="faq"?"text-white font-bold":""}  hover:text-white hover:font-bold`} onClick={()=>setcurrentpage("faq")}>
                FAQ
              </p>
            </div>
          </div>
          {currentpage==="drivesafety"?(<Drivesafety/>): currentpage==="howitworks"?(<Howitworks/>):currentpage==="earning"?(<Earning/>):(
          <div className="">
          <div className="bg-black pt-24 pb-14 px-[5%] flex">
            <div className="max-w-[50%]">
                <p className="font-bold text-[40px] leading-[60px] font-redhat text-white">Lorem ipsum amet, consectetur adipiscing elit dolor</p>
                <div className="flex flex-wrap justify-between pt-4 pb-10">
                    <div className="flex gap-4 items-center pt-6">
                        <Image src={whitecheck} alt="whitecheck" width={32}/>
                        <p className="text-lg text-white">Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="flex gap-4 items-center pt-6">
                        <Image src={whitecheck} alt="whitecheck" width={32}/>
                        <p className="text-lg text-white">Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="flex gap-4 items-center pt-6">
                        <Image src={whitecheck} alt="whitecheck" width={32}/>
                        <p className="text-lg text-white">Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <button className="p-4 bg-white font-redhat font-semibold text-xl flex items-center gap-2 rounded-lg mt-4">Become a partner <span className="inline-flex items-center"><Image src={btnrightarrow} alt="btnarrow " width={16}></Image></span></button>
            </div>
            <div className="flex justify-center flex-1">
                <Image src={iphonedrive} alt="drivephone" style={{maxWidth :"35%"}} />
            </div>
          </div>
          <div className="px-[5%] pt-20 pb-28">
            <p className="font-bold text-4xl">How it works</p>
            <p className="text-xl pt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <div className="mt-20 flex justify-between gap-[4%]">
              <div className="p-8 bg-[#FFFFFF] rounded-2xl box-shadow: 4px 4px 35px 0px #0000000D ">
                <Image src={highearning} alt="assist" height={80} />
                <p className="pt-12 font-bold text-3xl">Higher earnings</p>
                <p className="text-[#777777] text-xl pt-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
              <div className="p-8 bg-[#FFFFFF] rounded-2xl">
                <Image src={flexiblework} alt="assist" height={80} />
                <p className="pt-12 font-bold text-3xl">Flexible work</p>
                <p className="text-[#777777] text-xl pt-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
              <div className="p-8 bg-[#FFFFFF] rounded-2xl">
                <Image src={smoothpayout} alt="assist" height={80} />
                <p className="pt-12 font-bold text-3xl">Smooth payouts</p>
                <p className="text-[#777777] text-xl pt-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </div>
          </div>

          <div className="px-[5%] ">
            <p className="font-bold text-4xl">What do you need to become a BOLD partner?</p>
            <div className="flex justify-between mt-10 pb-28">
                <div className="">
                    <Image src={blackstr} alt="blackstr" width={48}/>
                    <p className="font-semibold text-2xl pt-8">Basic requirements</p>
                    <p className="text-base pt-2">. Lorem Ipsum is not simply random text.</p>
                    <p className="text-base pt-2">. Lorem Ipsum is not simply random text.</p>
                </div>
                <div className="">
                    <Image src={documents} alt="blackstr" width={48}/>
                    <p className="font-semibold text-2xl pt-8">Documents</p>
                    <p className="text-base pt-2">. Lorem Ipsum is not simply random text.</p>
                    <p className="text-base pt-2">. Lorem Ipsum is not simply random text.</p>
                </div>
                <div className="">
                    <Image src={blacktick} alt="blackstr" width={48}/>
                    <p className="font-semibold text-2xl pt-8">Sign up process</p>
                    <p className="text-base pt-2">. Lorem Ipsum is not simply random text.</p>
                    <p className="text-base pt-2">. Lorem Ipsum is not simply random text.</p>
                </div>
            </div>
          </div>

          <div className="px-[5%] mb-28 gap-[8%] flex items-center">
            <div className="w-[70%]">
             <Image src={driverappimage} alt="driverapp" style={{width:"100%"}}/>
             </div>
             <div className="">
                <p className="font-bold text-4xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <div className="flex gap-6 justify-start pt-14">
                    <div className="">
                    <Image src={one} alt="one" width={32} height={32}/>
                    </div>
                    <div className="">
                        <p className="font-bold text-xl">Packages</p>
                        <p className="pt-4 text-[#777777] text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
                <div className="flex gap-6 justify-start pt-14">
                    <div className="">
                    <Image src={two} alt="one" width={32} height={32}/>
                    </div>
                    <div className="">
                        <p className="font-bold text-xl">Intercity</p>
                        <p className="pt-4 text-[#777777] text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
                <div className="flex gap-6 justify-start pt-14">
                    <div className="">
                    <Image src={three} alt="one" width={32} height={32}/>
                    </div>
                    <div className="">
                        <p className="font-bold text-xl">Jumpstart</p>
                        <p className="pt-4 text-[#777777] text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
             </div>
          </div>

          <Blogsec uppertext={"Drive with care, arrive anywhere – your safety is our priority!"} belowtext={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis."} btntext={"Read our details on safety concerns"}/>

          <div className="flex justify-between px-[5%] items-center py-28 ">
            <div className="max-w-[50%] flex flex-col justify-center">
                <p className="font-bold text-4xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <p className="font-semibold text-xl pt-8 max-w-[80%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis.</p>
                <div className="flex gap-2">
                    <div>
                    <button className="p-4 text-white bg-black font-redhat font-semibold text-xl flex items-center gap-2 rounded-lg mt-12">Become a partner <span className="inline-flex items-center text-white"><Image src={whitearrow} alt="btnarrow " width={16}></Image></span></button>
                    </div>
                    <Image src={curlyarrow} alt="curlyarrow"/>
                </div>
            </div>
            <Image src={driverappsingle} alt="driverapp" style={{maxWidth:"35%"}}/>
          </div>

          <div className="bg-[#F3F3F3] px-[5%] pt-14 pb-20">
            <div className="flex justify-between gap-[20%] mb-10">
              <p className="font-bold text-4xl max-w-[50%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
              <div className="flex gap-6">
                <button ref={prevRef}>
                  <Image src={prevbtn} alt="Previous" />
                </button>
                <button ref={nextRef}>
                  <Image src={nextbtn} alt="Next" />
                </button>
              </div>
            </div>
            {isClient && (
              <Swiper
                className="h-full w-full px-8"
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={2.5}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onSwiper={(swiper) => {
                  // Delay setting navigation buttons to ensure refs are available
                  setTimeout(() => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  });
                }}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 20 },
                  480: { slidesPerView: 2, spaceBetween: 30 },
                  640: { slidesPerView: 3, spaceBetween: 30 },
                  1024: { slidesPerView: 2.5, spaceBetween: 20 },
                }}
              >
                {[...Array(10)].map((_, index) => (
                  <SwiperSlide key={index}>
                    <div className="px-6 py-8 bg-white rounded-2xl">
                        <div className="flex justify-between">
                        <p className="text-[#777777] font-semibold text-xl w-[90%]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        incididunt ut labore et dolore magna aliqua. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed incididunt
                        ut labore et dolore magna aliqua.{" "}
                      </p>
                      <div className="w-10">
                      <Image src={doublequotes} alt="doublequoes" />
                      </div>

                        </div>

                      <div className="mt-12 flex gap-6">
                        <Image src={reviewer} alt="reviewer" width={64}/>
                        <div>
                          <p className="font-bold text-xl">Carter Carder</p>
                          <div className="mt-2 flex gap-2 items-center">
                            <Image src={yellowstr} alt="yellowstr" />
                            <p className="font-semibold text-xl">4.8<span className="font-normal text-[#777777]"> (Customer ratings)</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
          <FAQ/>
        </div>
          )}
        </div>
    // {/* <Howitworks/> */}
    // {/* <Earning/> */}
    // <Drivesafety />
  );
};

export default Drivepage;
