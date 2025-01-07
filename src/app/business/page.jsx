"use client";
import React from "react";
import Image from "next/image";
import whitearrow from "../../../public/Assets/whitearrow.svg";
import businessmain from "../../../public/Assets/businessmain.png";
import leftbigpromotion from "../../../public/Assets/leftbigpromotion.png";
import promotion from "../../../public/Assets/promotion.png";
import trendinglocation from "../../../public/Assets/trendinglocation.png";
import trendloc from "../../../public/Assets/trendloc.png";
import businessdownloadapp from "../../../public/Assets/businessdownloadapp.png";
import businessthirdparty from "../../../public/Assets/businessthirdparty.png";
import businessmoney from "../../../public/Assets/businessmoney.png";
import businessslider from "../../../public/Assets/businessslider.png";
import van from "../../../public/Assets/van.svg";
import pickanddropone from "../../../public/Assets/pickanddropone.png";
import pickanddroptwo from "../../../public/Assets/pickanddroptwo.png";
import btnrightarrow from "../../../public/Assets/buttunrightarrow.svg";
import boldfuel from "../../../public/Assets/boldfuel.png";
import businessfuel from "../../../public/Assets/businessfuel.png";
import businesscustomerbase from "../../../public/Assets/businesscustomerbase.png";
import patternbg from "../../../public/Assets/transparent-pattern.png";
import boldadvertise from "../../../public/Assets/boldadvertise.png";
import FAQ from "../home/FAQ";
import Footer from "../home/Footer";
import yellow from "../../../public/Assets/yellow-taxis.png";
import Promotion from "./Promotion";
import { useState } from "react";
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
import Blogsec from '../home/Blogsec';
import { FaArrowRight } from "react-icons/fa";

const Businesspage = () => {
  const questions = [
    {
      question: "How do I sign up for Bold’s services?",
      answer: "Content for section 1.",
    },
    {
      question: "What payment methods are accepted on the Bold platform?",
      answer: "Content for section 2.",
    },
    {
      question:
        "How does Bold handle vehicle maintenance and safety for fleet owners?",
      answer: "Content for section 3.",
    },
    {
      question:
        "How do you ensure data security and privacy for my business information?",
      answer: "Content for section 4.",
    },
    {
      question: "Can I track my shipments with Bold?",
      answer: "Content for section 5.",
    },
  ];

  const collection = [
    {
      index: 1,
      heading: "Deliver Your Products Faster with Bold Logistics!",
      cta: "Get Started Now",
      title1: "Perfect for Your Startups Too!",
      title2: "Get the Bold App Today Ship your Products with Bold",
    },
    {
      index: 2,
      heading: "Maximize Your Fleet’s Potential with Bold!",
      cta: "Sign Up Now",
      title1: "Made for Your Fleet’s Success!",
      title2:
        "Register on the Bold App Maximize your fleet’s earning potential.",
    },
    {
      index: 3,
      heading: "Advertise Smarter with Bold!",
      cta: "Join today",
      title1: "Tailored Advertising for Your Business!",
      title2:
        "Download the Bold App Now Reach more customers by advertising with Bold.",
    },
    {
      index: 4,
      heading: "Unlock Seamless Solutions for Your Company!",
      cta: "Start Today",
      title1: "Effortless Solutions for Your Business!",
      title2:
        "Get the Bold App Now Streamline your Logistics. Transport and Marketing.",
    },
  ];

  const [currentpage, setcurrentpage] = useState("Business");
  return (
    <div>
      {currentpage === "promotion" ? (
        <Promotion />
      ) : (
        <div className="">
          <div
            className=""
            style={{
              background:
                "linear-gradient(112.03deg, #01040D 35.12%, #56080B 165.69%)",
            }}
          >
            <div className="flex justify-between px-[5%] py-20">
              <div className="md:w-[50%]">
                <div className="  h-full flex flex-col justify-center">
                  <p className="font-opensans font-bold text-[25px] md:text-[50px] md:leading-[68px] text-white">
                    Transforming mobility and logistics for business success
                  </p>
                  <p className="font-opensans text-base md:text-xl  text-[#777777] pt-6">
                    <span className="font-bold">BOLD</span> revolutionizes
                    business mobility with reliable transportation and package
                    delivery solutions. Whether you&apos;re a small business or
                    a large corporation, we provide the tools to help you grow.
                    <br />
                    <br />
                    Fleet owners can maximize earnings by integrating their
                    vehicles into the <span className="font-bold">
                      BOLD
                    </span>{" "}
                    platform, ensuring consistent revenue and supporting local
                    and international operations.
                  </p>
                  <div className=" flex gap-6 pt-8">
                    <button className="font-opensans text-base md:text-xl font-semibold py-[10px] px-6  bg-[#18C4B8] hover:bg-[#12a096] text-white rounded-lg">
                      Sign up for business
                    </button>
                    <button className="text-white font-opensans font-semibold md:text-xl flex items-center gap-3 rounded-lg hover:text-[#18C4B8]">
                      Sign up as fleet owner
                      <FaArrowRight size={20} />
                      {/* <span className="inline-flex items-center text-white">
                      </span> */}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center w-[42%]">
                <Image src={businessmain} alt="business" />
              </div>
            </div>

            <div className="w-[80%] border-b border-white mx-auto"></div>

            <div className="px-[5%] pt-20 pb-24 ">
              <p className="font-opensans text-[20px] md:text-[40px] md:leading-[54px] font-semibold text-white md:max-w-[50%]">
                Accelerate Your Growth with BOLD Business
              </p>
            </div>
          </div>

          <div className="px-[5%]">
            <p className="font-semibold text-lg md:text-2xl font-opensans text-[#777777] pt-20">
              Why Bold is the Perfect Partner for Your Business
            </p>
            <p className="font-opensans font-bold text-[25px] md:text-[50px] md:leading-[68px] pt-6">
              We’ve got everything you need to streamline your logistics, keep
              your team moving, and grow your brand—all in one place.
            </p>
            <div className=" flex justify-between w-full gap-[5%] pt-28 pb-20">
              <div className="">
                <Image src={leftbigpromotion} alt="promotion" />
              </div>
              <div className="md:w-[50%] flex flex-col justify-center">
                <Image src={promotion} alt="promotion" />
                <p className="font-opensans font-bold text-xl md:text-4xl pt-4">
                  <span className="text-[#18C4B8]">Get </span> Your Event seen
                  with Bold
                </p>
                <p className="font-opensans text-base md:text-xl text-[#777777] pt-6">
                  Take your event to the next level by showcasing it on the BOLD
                  platform. With thousands of active users, BOLD offers event
                  promoters unparalleled exposure to a diverse audience. Sell
                  your tickets directly on the app and ensure your event gets
                  the attention it deserves. Whether it’s a concert, festival,
                  or exclusive gathering, BOLD connects you with people who are
                  ready to engage, making it easier than ever to fill seats and
                  create unforgettable experiences.{" "}
                  {/* <span className="text-black font-bold underline">
                    {" "}
                    Read more
                  </span> */}
                </p>
                <button className="flex items-center underline gap-2 hover:text-[#18C4B8] text-black font-redhat font-semibold  text-base md:text-xl text-center mt-8 rounded-lg">
                  Promote on BOLD Today and Reach Millions of Users
                  <span className="inline-flex items-center ">
                    <FaArrowRight size={20} />
                  </span>
                </button>
              </div>
            </div>
            <div className="w-[25%] mx-auto flex flex-col items-center">
              <button
                className="font-bold text-xl py-4 px-10 rounded-[40px]  bg-[#18C4B8] hover:bg-[#12a096] text-white w-fit"
                onClick={() => setcurrentpage("promotion")}
              >
                Discover More
              </button>
              <p className="text-base md:text-xl text-[#777777] text-center pt-6">
                1000+ Trusted Partners
              </p>
            </div>

            <div className=" flex justify-between w-full gap-[5%] pt-28 pb-20">
              <div className="">
                <Image src={trendinglocation} alt="promotion" />
              </div>
              <div className="w-[50%] flex flex-col justify-center">
                <Image src={trendloc} alt="promotion" width={"18%"} />
                <p className="font-opensans font-bold text-4xl pt-4">
                  Over{" "}
                  <span className="text-[#18C4B8]">
                    50+ shops and restaurants{" "}
                  </span>{" "}
                  have used Bold for advertising—and they’ve seen 20x revenue
                  growth
                </p>
                <p className="font-opensans text-xl text-[#777777] pt-6">
                  Shops and restaurants using{" "}
                  <span className="font-bold">BOLD’S</span> advertising platform
                  have seen impressive results by reaching more customers and
                  growing their businesses. With{" "}
                  <span className="font-bold">BOLD</span>, you can easily tap
                  into the same opportunities to increase your brand’s
                  visibility, connect with a wider audience, and drive more
                  sales. Let Bold’s advertising solutions help you take your
                  business to the next level.
                  {/* <span className="text-black font-bold underline">
                    {" "}
                    Read more
                  </span> */}
                </p>
                <button className="py-3 px-6  bg-[#18C4B8] hover:bg-[#12a096]  text-white font-redhat font-semibold text-xl w-fit mt-12 rounded-lg">
                  Advertise with bold
                </button>
              </div>
            </div>

            <div className="w-[85%] mx-auto flex flex-col items-center pt-8 pb-28">
              <p className="font-opensans font-bold text-4xl">
                <span className="font-bold">Start Getting Noticed:</span>{" "}
                Promote Your Business with Bold
              </p>
              <p className="text-xl  text-center pt-6">
                <span className="font-bold">
                  Unlock Your Business’s Potential with Bold
                </span>{" "}
                and start reaching more customers today! With our powerful
                advertising platform, you’ll easily expand your reach, enhance
                visibility, and drive growth. Whether you&apos;re a small
                business or a large corporation, Bold has the tools to take your
                brand to the next level. Don’t miss out—get started now and
                watch your business thrive!
              </p>
            </div>
          </div>

          <div className="bg-black px-[5%] relative pb-72">
            <div className="w-[75%] mx-auto flex flex-col items-center pt-12 pb-16">
              <p className="font-opensans font-semibold text-4xl text-white text-center">
                Earn extra cash in your free time with Bold’s third-party
                opportunities
              </p>
              <p className="text-xl  text-center pt-6 text-white">
                Have some free time? Sign up as a third-party partner or
                intercity driver and start earning extra cash on your schedule.
                It’s flexible, simple, and all up to you. Join{" "}
                <span className="font-bold">BOLD</span> today and start driving!
              </p>
            </div>

            <div className="flex justify-between pt-20">
              <div className="w-[20%]">
                <div className="mx-auto w-[65%]  flex justify-center">
                  <Image src={businessdownloadapp} alt="downloadapp" />
                </div>
                <p className="font-opensans font-bold text-xl pt-10 text-center text-white">
                  1. Download the BOLD App
                </p>
              </div>

              <div className="w-[20%]">
                <div className="mx-auto w-[65%] flex justify-center">
                  <Image src={businessthirdparty} alt="downloadapp" />
                </div>
                <p className="font-opensans font-bold text-xl pt-10 text-center text-white">
                  2. Sign Up As An Intercity Driver or a 3rd Party Partner
                </p>
              </div>

              <div className="w-[20%]">
                <div className="mx-auto w-[65%]  flex justify-center">
                  <Image src={businessmoney} alt="downloadapp" />
                </div>
                <p className="font-opensans font-bold text-xl pt-10 text-center text-white">
                  3. Now, Make Money on Your Terms!
                </p>
              </div>
            </div>

            <div className="w-full absolute -bottom-36 flex justify-center left-0 ">
              <div
                className="w-[85%]  bg-white rounded-2xl overflow-hidden"
                style={{ boxShadow: "4px 4px 33px 0px #00000014" }}
              >
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  pagination={true}
                  slidesPerView={1}
                  loop={true}
                  speed={800}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                >
                  {collection.map((collect) => (
                    <SwiperSlide key={collect.index}>
                      <div className="flex">
                        <div className="w-[45%] h-full">
                          <Image
                            src={businessslider}
                            alt="business"
                            className="h-full"
                          />
                        </div>
                        <div className="px-[3%] w-[55%] flex flex-col justify-center ">
                          <p className="font-bold font-opensans text-[30px]">
                            {collect.heading}
                          </p>
                          <div className="mt-8 flex flex-row items-center gap-8 justify-between">
                            <button className=" bg-[#18C4B8] hover:bg-[#12a096]  text-white text-[16px] py-3 h-fit px-4 w-full rounded-full">
                              {collect.cta}
                            </button>
                            <div className="flex gap-4 items-center">
                              <Image src={van} alt="van" />
                              <div className="">
                                <p className="font-opensans text-sm text-[#777777]">
                                  {collect.title1}
                                </p>
                                <p className="font-opensans font-semibold text-base pt-1">
                                  {collect.title2}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          <div className="pt-72 flex items-center justify-center gap-6 px-[5%]">
            <div className="w-[25%] border-b border-[#CCCCCC]"></div>
            <p className="font-bold font-opensans text-5xl text-center">
              Tailored Solutions for Your Company
            </p>
            <div className="w-[25%] border-b border-[#CCCCCC]"></div>
          </div>

          <div className=" flex justify-between w-full gap-[5%] pt-28 pb-20 px-[5%]">
            <div className="w-[55%] pt-8">
              <p className="font-opensans font-bold text-4xl">
                Reliable 9-5 Employee Transport: Timely Pickup and Drop-Off
              </p>
              <p className="font-opensans text-xl text-[#777777] pt-6">
                Bold offers employee transportation solutions with our 9-5
                pickup and drop-off model, ensuring your team gets to work on
                time, every time. Our flexible, cost-effective transport options
                help streamline your operations while improving employee
                punctuality and satisfaction. Whether for small teams or large
                companies, <span className="font-bold">BOLD</span>’s transport
                service keeps your workforce moving efficiently.
                {/* <span className="text-black font-bold underline">
                  {" "}
                  Read more
                </span> */}
              </p>
            </div>

            <div className="">
              <Image src={pickanddropone} alt="promotion" />
            </div>
          </div>

          <div className=" flex justify-between w-full gap-[5%] pt-10 pb-20 px-[5%]">
            <div className="">
              <Image src={pickanddroptwo} alt="promotion" />
            </div>

            <div className="w-[55%] pt-8">
              <p className="font-opensans font-bold text-4xl">
                Simplify Employee Transportation with Bold
              </p>
              <p className="font-opensans text-xl text-[#777777] pt-6">
                Easily register your employees, and we’ll take care of their
                daily commute. With <span className="font-bold">BOLD</span>’s
                reliable pickup and drop-off service, your team travels safely
                and arrives on time. Simplify workplace transportation and
                ensure a smooth, efficient experience for everyone.
                {/* <span className="text-black font-bold underline">
                  {" "}
                  Discover more
                </span> */}
              </p>
              <button className="  font-redhat font-bold flex items-center gap-2 rounded-lg mt-6 hover:text-[#18C4B8] text-base md:text-xl underline">
                Get Started Today and Keep Your Team Moving on Time!
                <span className="inline-flex items-center">
                  <FaArrowRight size={20} />{" "}
                </span>
              </button>
            </div>
          </div>

          <div className="flex py-10 flex-col relative">
            <Image
              src={patternbg}
              alt="pattern background"
              className="w-full h-[100vh] overflow-hidden absolute flex z-10"
            />
            <div className="relative flex flex-col justify-center items-center bg-[#18C4B8] w-[100vw] h-[60vh]">
              <p className="font-opensans font-bold text-[50px] z-20 leading-[68px] text-white w-[70%] text-center ">
                Trusted by Over 10k Businesses and Counting!
              </p>
              <div className="flex  gap-6">
                <button className="py-3 px-6 bg-white border-2 z-20  border-white text-[#18C4B8] font-redhat font-semibold text-xl w-fit mt-12 rounded-lg">
                  Join BOLD Today
                </button>
                <button className="py-3 px-6  text-white border-2 z-20 border-white font-redhat font-semibold text-xl w-fit mt-12 rounded-lg">
                  Get in Touch with Sales
                </button>
              </div>
            </div>
          </div>

          <div className=" flex justify-between w-full gap-[5%] pt-28 pb-20 px-[5%] bg-[#F3F3F3]">
            <div className="w-[55%] flex flex-col justify-center">
              <Image src={boldfuel} alt="promotion" width={"18%"} />
              <p className="font-opensans font-bold text-4xl pt-4">
                BOLD Partners with{" "}
                <span className="text-[#18C4B8]">100+ Fuel Stations</span> for
                Hassle-Free Refueling
              </p>
              <p className="font-opensans text-xl text-[#777777] pt-6">
                Join Bold Fuel and become part of our growing network of over
                100 stations. Gain access to a larger customer base and offer
                drivers a seamless refueling experience. Let’s grow together and
                make fueling more convenient for everyone.
                {/* <span className="text-black font-bold underline">
                  {" "}
                  Know more
                </span> */}
              </p>
              <button className="py-3 px-6 bg-[#18C4B8] hover:bg-[#12a096] text-white font-redhat font-semibold text-xl w-fit mt-10 rounded-lg">
                Partner with BOLD
              </button>
            </div>

            <div className="">
              <Image src={businessfuel} alt="promotion" />
            </div>
          </div>

          <div className=" flex justify-between w-full gap-[5%] pt-28 pb-20 px-[5%]">
            <div className="w-[55%] flex flex-col justify-center">
              <p className="font-opensans font-bold text-4xl pt-4">
                <span className="text-[#18C4B8]">Boost Your Fleet’s</span> Reach
                with Bold
              </p>
              <p className="font-opensans text-xl text-[#777777] pt-6">
                When you team up with Bold, your fleet gets access to a bigger
                audience, helping you grow your customer base faster. We make it
                easy for you to stay busy and boost your business. Let’s work
                together to take your fleet to the next level.
                {/* <span className="text-black font-bold underline">
                  {" "}
                  Learn more
                </span> */}
              </p>
              <button className="hover:text-[#18C4B8] font-redhat font-bold text-xl flex items-center gap-2 rounded-lg mt-6 underline">
                Register your Fleet with BOLD
                <span className="inline-flex items-center">
                  <FaArrowRight size={20} />
                </span>
              </button>
              <p className="text-base pt-2">
                Be a part of 100k+ Fleet Owners on Bold
              </p>
            </div>

            <div className="">
              <Image src={businesscustomerbase} alt="promotion" />
            </div>
          </div>
          <div className="md:px-[5%] pb-28">
            <div className="flex flex-row md:rounded-3xl justify-between pl-[5%] items-center  bg-[#041521] ">
              <div className="md:max-w-[55%] flex flex-col justify-center">
                <p className="font-bold mt-3 md:mt-0 text-xl md:text-4xl text-white">
                  Unlock the Power of Fast Deliveries. Download Our App Today!
                </p>
                <p className="md:font-semibold text-sm pt-2 md:pt-8 max-w-[70%] md:max-w-[80%] text-white">
                  Experience hassle-free deliveries with just a tap. Our app
                  gives you access to fast, reliable, and secure shipping
                  solutions, all in one place. Whether you’re sending a package
                  across town or the country, we&apos;ve got you covered.
                  Download the BOLD app and unlock the power of seamless
                  deliveries at your fingertips.
                </p>
                <div className="flex gap-2 flex-row justify-between mb-3">
                  <div>
                    <button className="md:p-4 px-2 py-3 text-white font-redhat font-semibold text-base md:text-xl flex items-center gap-2 rounded-lg mt-6  bg-[#18C4B8] hover:bg-[#12a096] ">
                      Download App Now
                      <span className="inline-flex items-center text-white">
                        <FaArrowRight size={20} />
                      </span>
                    </button>
                  </div>
                  <Image
                    src={boldadvertise}
                    alt="driverapp"
                    // style={{ maxWidth: "50%" }}
                    className="md:hidden max-w-[40%]"
                  />
                </div>
              </div>
              <Image
                src={boldadvertise}
                alt="driverapp"
                // style={{ maxWidth: "50%" }}
                className="md:max-w-[50%] hidden md:flex"
              />
            </div>
          </div>

          {/* <FAQ questions={questions} /> */}
        </div>
      )}

      <div className="flex flex-col-reverse gap-2 md:gap-6 md:flex-row-reverse md:justify-between px-[5%] md:items-center pt-8 md:pt-4 md:pb-12 lg:pb-20 ">
        <div className="md:max-w-[50%] flex flex-col justify-center">
          <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl">
            Get Thousands of Eyeballs on Your Brand With BOLD
          </p>
          <p className="font-bold text-sm md:text-xl pt-2 md:pt-4 lg:pt-8">
            Turn your everyday people into your biggest advocates
          </p>
          <p className="text-sm md:text-xl pt-2 md:pt-4 lg:pt-6 text-[#777777]">
            Do you run a restaurant or cafe? BOLD helps you connect with the
            right audience. Get noticed and stay memorable with ads that impact.
            Boost your visibility, attract loyal customers, and grow your
            business effortlessly.
          </p>
        </div>
        <Image
          src={yellow}
          alt="driverapp"
          className=" rounded-2xl w-full md:max-w-[45%] object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Businesspage;
