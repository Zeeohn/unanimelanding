"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import staricon from "../../../public/Assets/star.svg";
import circlepeople from "../../../public/Assets/circlespeople.svg";
import ridetaxiimg from "../../../public/Assets/ridetaxi.png";
import petfriendly from "../../../public/Assets/perfriendly.png";
import boldgreen from "../../../public/Assets/boldgreen.png";
import boldassist from "../../../public/Assets/boldassist.png";
import youtubecover from "../../../public/Assets/youtubecover.png";
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
import yellowstr from "../../../public/Assets/yellowstr.svg";
import reviewer from "../../../public/Assets/reviewer.png";
import doublequotes from "../../../public/Assets/doublequotes.svg";
import downloadapppromo from "../../../public/Assets/downloadtheapppromo.png";
import Blogsec from "../home/Blogsec";
import FAQ from "../home/FAQ";
import Footer from "../home/Footer";
import ridegroup from "../../../public/Assets/ridegroup.png";
import Link from "next/link";
import Ridesafety from "./ridesafety/page";
import Trendinglocation from "./Trendinglocation";


const Ridepage = () => {
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
              BOLD <span className="font-normal"> RIDE</span>{" "}
            </p>
            <div className="flex gap-8 alwaysdiv">
            <Link  href={"/ride"} >
              <p className={`text-lg text-[#888888] ${currentpage==="overview"?"text-white font-bold":""}  hover:text-white hover:font-bold`} onClick={()=>setcurrentpage("overview")}>
                Overview
              </p>
              </Link>
              <p className={`text-lg text-[#888888] ${currentpage==="trendinglocation"?"text-white font-bold":""}  hover:text-white hover:font-bold`} onClick={()=>setcurrentpage("trendinglocation")}>
                Trending locations
              </p>
              <p className={`text-lg text-[#888888] ${currentpage==="ridesafety"?"text-white font-bold":""}  hover:text-white hover:font-bold`} onClick={()=>setcurrentpage("ridesafety")} >
                Ride safety
              </p>
              <p className="text-lg text-[#888888] hover:text-white hover:font-bold">
                Blogs
              </p>
              <p className="text-lg text-[#888888] hover:text-white hover:font-bold">
                FAQ
              </p>
            </div>
          </div>
          {currentpage==="ridesafety"?(<Ridesafety/>): currentpage==="trendinglocation"?(<Trendinglocation/>):(
          <div>
          <div className="pt-24 pb-20 flex bg-[#090909] px-[5%] justify-between ">
            <div className="max-w-[33%]">
              <p className="text-[40px] font-bold text-white leading-[60px]">
                Lorem ipsum amet, consectetur adipiscing elit dolor
              </p>
              <p className="text-xl text-[#BBBBBB] pt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dolor
                eiusmod tempor incididunt
              </p>
              <button className="text-xl font-semibold bg-[#FFFFFF] py-4 px-6 rounded-lg mt-7">
                Download App
              </button>
            </div>
            <Image src={ridegroup} alt="ridegruop"/>
            <div className="max-w-[30%] ml-[8%]">
              <p className="text-xl text-[#BBBBBB]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt dolor
              </p>
              <div className="flex gap-4 items-center pt-4">
                {" "}
                <Image src={staricon} alt="star" />
                <p className="text-xl text-white ">
                  4.8{" "}
                  <span className="text-lg text-[#BBBBBB]">
                    {" "}
                    (Customer ratings){" "}
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-3 pt-6">
                <Image src={circlepeople} alt="star" />{" "}
                <p className="text-lg text-[#BBBBBB] ">300k+ users</p>
              </div>

              <div className="flex flex-col gap-2 pt-10">
                <p className="font-medium text-4xl text-white">380k+</p>
                <p className="text-xl text-[#BBBBBB]">Total Active Users</p>
              </div>
              <div className="flex flex-col gap-2 pt-10">
                <p className="font-medium text-4xl text-white">500k+</p>
                <p className="text-xl text-[#BBBBBB]">Downloads from all store</p>
              </div>
            </div>
          </div>

          <div className="px-[5%] py-20">
            <p className="font-bold text-4xl max-w-[40%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="mt-16 flex gap-16">
              <p className="text-white text-xl font-semibold bg-[#000000] py-[10px] px-6 rounded-full">
                BOLD Share
              </p>
              <p className="hover:text-white text-[#777777] text-xl hover:font-semibold  hover:bg-[#000000] py-[10px] px-6 rounded-full">
                BOLD Regular
              </p>
              <p className="hover:text-white text-[#777777] text-xl hover:font-semibold  hover:bg-[#000000] py-[10px] px-6 rounded-full">
                BOLD Premium
              </p>
              <p className="hover:text-white text-[#777777] text-xl hover:font-semibold  hover:bg-[#000000] py-[10px] px-6 rounded-full">
                BOLD XL
              </p>
            </div>

            <div className="flex justify-between gap-[5%] mt-12">
              <div className="py-7 max-w-[50%]">
                <p className="text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam labore
                </p>
                <p className="text-xl pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore.
                </p>
                <div className="pt-10">
                  <p className="font-semibold text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
                <div className="pt-10">
                  <p className="font-semibold text-xl">
                    Lorem ipsum dolor sit, adipiscing elit
                  </p>
                </div>
                <div className="pt-10">
                  <p className="font-semibold text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>
              <Image src={ridetaxiimg} alt="ridetaxi" />
            </div>
          </div>

          <div className="bg-[#F3F3F3] px-[5%] py-16">
            <div className="flex justify-between gap-[20%]">
              <p className="font-bold text-4xl max-w-[40%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
              <p className="font-semibold text-xl text-[#777777]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam labore
              </p>
            </div>
            <div className="mt-14 flex justify-between gap-[4%]">
              <div className="p-8 bg-[#FFFFFF] rounded-2xl">
                <Image src={petfriendly} alt="assist" height={80} />
                <p className="pt-12 font-bold text-3xl">Pet Friendly</p>
                <p className="text-[#777777] text-xl pt-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
              <div className="p-8 bg-[#FFFFFF] rounded-2xl">
                <Image src={boldgreen} alt="assist" height={80} />
                <p className="pt-12 font-bold text-3xl">BOLD Green</p>
                <p className="text-[#777777] text-xl pt-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
              <div className="p-8 bg-[#FFFFFF] rounded-2xl">
                <Image src={boldassist} alt="assist" height={80} />
                <p className="pt-12 font-bold text-3xl">BOLD Assist</p>
                <p className="text-[#777777] text-xl pt-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </div>
          </div>

          <div className="px-[5%] pt-20 pb-28 ">
            <div className="flex justify-between gap-[20%]">
              <div className="max-w-[40%]">
                <p className="font-bold text-4xl ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod
                </p>
                <div className="pt-16">
                  <p className="text-xl font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                  <p className="text-xl font-semibold pt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    incididunt ut labore et dolore magna aliqua.{" "}
                  </p>
                </div>
                <div className="pt-14">
                  <p className="text-xl font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                  <p className="text-xl font-semibold pt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    incididunt ut labore et dolore magna aliqua.{" "}
                  </p>
                </div>
                <div className="pt-14">
                  <p className="text-xl font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                  <p className="text-xl font-semibold pt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    incididunt ut labore et dolore magna aliqua.{" "}
                  </p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-xl text-[#777777]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam labore
                </p>
                <Image src={youtubecover} alt="youtubecover" className="mt-16" />
              </div>
            </div>
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

          <div className="flex justify-between px-[5%] items-center py-4">
          <div className="max-w-[40%]">
              <p className="text-4xl font-bold ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <p className="text-xl text-[#BBBBBB] font-semibold pt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dolor
                eiusmod tempor incididunt
              </p>
              <button className="text-xl font-semibold bg-black text-white py-3 px-6 rounded-lg mt-7">
                Download App
              </button>
            </div>
            <Image src={downloadapppromo} alt="download"/>
          </div>

          <Blogsec/>
          <FAQ/>
          </div>
          )}
        </div>
    // <Ridesafety />
    // {/* <Trendinglocation/> */}
  );
};

export default Ridepage;
