"use client";

import yellowstr from "../../../public/Assets/yellowstr.svg";
import curlyarrow from "../../../public/Assets/curlyarrow.svg";
import manyusers from "../../../public/Assets/2kusers.png";
import Image from "next/image";
import intercityimage from "../../../public/Assets/intercityimage.png";
import boldintercity from "../../../public/Assets/boldintercity.png";
import one from "../../../public/Assets/one.svg";
import two from "../../../public/Assets/two.svg";
import three from "../../../public/Assets/three.svg";
import boldadvertise from "../../../public/Assets/boldadvertise.png";
import whitearrow from "../../../public/Assets/whitearrow.svg";
import intercitybelowone from "../../../public/Assets/intercitybelowone.png";
import intercitybelowtwo from "../../../public/Assets/intercitybelowtwo.png";
import reviewer from "../../../public/Assets/reviewer.png";
import doublequotes from "../../../public/Assets/doublequotes.svg";
import prevbtn from "../../../public/Assets/prevbtn.png";
import nextbtn from "../../../public/Assets/blacknextbtn.png";
import miles from "../../../public/Assets/milescta.png";
import appsplash from "../../../public/Assets/app-preview.png";
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
import "../swiperslider.css";
import { FaArrowRight } from "react-icons/fa";

const Intercitypage = () => {
  const [isClient, setIsClient] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  
  useEffect(() => {
    setIsClient(true); // Ensure Swiper runs client-side
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // Check screen size
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ratings = [
    {
      index: 1,
      name: "Emma L.",
      rating: 4.8,
      review:
        "Bold Miles made my long-distance trips so much easier and affordable. I love how I can share rides and save money while traveling comfortably across cities and states.",
    },
    {
      index: 2,
      name: "Mark R.",
      rating: 4.9,
      review:
        "I’ve used Bold Miles for several road trips, and it’s been a game-changer. Booking is seamless, and the rides are always safe and reliable. Highly recommend!",
    },
    {
      index: 3,
      name: "Sarah T.",
      rating: 4.7,
      review:
        "As a student, the discounts are a huge bonus! Bold Miles makes travel affordable and sustainable without sacrificing comfort.",
    },
    {
      index: 4,
      name: "James W.",
      rating: 4.6,
      review:
        "I frequently travel for work and Bold Miles has been my go-to option for intercity travel. The rides are always on time, and the service is top-notch.",
    },
    {
      index: 5,
      name: "Olivia K.",
      rating: 4.6,
      review:
        "I appreciate how Bold Miles focuses on reducing carbon footprints. It’s great knowing that my travel is not only affordable but also eco-friendly.",
    },
  ];

  return (
    <div>
      <div className="bg-[#F3F3F3] px-[5%] py-12 md:pt-12 pb-16 gap-4  lg:pt-14 lg:pb-20 flex flex-col md:flex-row justify-between md:gap-[5%] md:items-center">
        <div className="md:max-w-[53%]">
          <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl">
            See the world, one city at a time. Explore Bold Miles.
          </p>
          <p className="text-sm md:text-xl pt-3 md:pt-6 lg:pt-8 text-[#777777] md:max-w-[70%]">
            From dreams to destinations, go the distance with Bold Miles. Travel
            intercity and across borders with secure, sustainable, and
            affordable shared rides.
          </p>
          {/* <p className="text-sm md:text-xl pt-4 text-[#777777]  md:max-w-[70%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p> */}
          <div className="flex gap-2">
            <div className="flex pt-6 lg:pt-10 items-center">
              <p className="font-opensans text-base md:text-xl lg:text-2xl">
                Ratings
              </p>
              <div className="flex  items-center pl-3 ">
                <Image src={yellowstr} alt="yellostr" height={16} />
                <p className="text-sm md:text-lg"> 4.8</p>
              </div>
              <Image
                src={manyusers}
                alt="manyusers"
                height={40}
                className="pl-8"
              />
            </div>
            <Image
              src={curlyarrow}
              alt="curlyarrw"
              className="md:block hidden"
            />
          </div>
        </div>
        <Image src={intercityimage} alt="intercity" className="w-full" />
      </div>
      <div className="px-[5%] mb-12 md:mb-20 lg:mb-28 gap-[8%] flex items-center">
        <div className="hidden md:block w-[70%]">
          <Image
            src={boldintercity}
            alt="driverapp"
            style={{ width: "100%" }}
          />
        </div>
        <div className=" pt-12 md:pt-16 lg:pt-20">
          <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl">
            Miles Without Limits! Discover And Explore The World With BoldMiles
          </p>
          <div className="flex gap-2 md:gap-6 justify-start pt-6 md:pt-10 lg:pt-14">
            <div className="w-[6%] md:w-[5%]">
              <Image src={one} alt="one" className="w-full" />
            </div>
            <div className="">
              <p className="font-bold text-base md:text-xl">
                {" "}
                Reimagine boundaries with long-distance trips across cities,
                states, and countries.
              </p>
              <p className=" pt-3 md:pt-4 text-[#777777] text-sm md:text-xl">
                Whether you&apos;re headed to the airport or planning an
                adventurous road trip, Bold Miles ensures your journey is
                seamless.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-2 md:gap-6 justify-start pt-4 md:pt-10 lg:pt-14">
            <div className="w-[6%] md:w-[5%]">
              <Image src={two} alt="one" className="w-full" />
            </div>
            <div className="">
              <p className="font-bold text-base md:text-xl">
                {" "}
                Share your ride and save money while exploring new places.
              </p>
              <p className=" pt-3 md:pt-4 text-[#777777] text-sm md:text-xl">
                Our affordable solutions make travel more accessible, so you can
                focus on the experiences that matter most.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-2 md:gap-6 justify-start pt-4 md:pt-10 lg:pt-14">
            <div className="w-[6%] md:w-[5%]">
              <Image src={three} alt="one" className="w-full" />
            </div>
            <div className="">
              <p className="font-bold text-base md:text-xl">
                {" "}
                Help reduce your carbon footprint by choosing shared rides.
              </p>
              <p className=" pt-3 md:pt-4 text-[#777777] text-sm md:text-xl">
                With every shared journey, you contribute to a greener planet
                while enjoying a more sustainable way to travel.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:px-[5%] ">
        <div className="flex md:rounded-3xl justify-between pl-[5%] items-center " style={{ background: "linear-gradient(94.35deg, #0C5E58 2.83%, #10BDA5 92.34%)"}}>
          <div className="md:max-w-[55%] flex flex-col justify-center py-6">
            <p className="font-bold text-lg font-opensans md:text-3xl lg:text-4xl text-white">
              Make Bold Moves! Take That Trip You’ve Dreamed of
            </p>
            <p className="font-semibold text-xs md:text-base lg:text-xl pt-2 md:pt-4 lg:pt-8 max-w-[80%] text-white">
              Get the Bold app and travel intercity, interstate, or
              intercountry.
            </p>
            <div className="flex gap-2">
              <div>
                <button className="p-2 md:p-4 text-white bg-[#18C4B8] hover:bg-[#12a096]  font-redhat font-semibold text-sm md:text-lg lg:text-xl flex items-center gap-2 rounded-lg mt-4  md:mt-8 lg:mt-12 ">
                  Download Now
                  <span className="inline-flex items-center text-white">
                    <Image src={whitearrow} alt="btnarrow " width={16}></Image>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-[35%] md:w-[45%] flex items-end flex-col">
            <Image src={miles} alt="driverapp" className="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse gap-2 md:gap-6 md:flex-row md:justify-between px-[5%] md:items-center pt-12 md:pt-20 lg:pt-28 md:pb-12 lg:pb-20 ">
        <div className="md:max-w-[50%] flex flex-col justify-center">
          <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl">
            Turn Your Trips into Money-Making Opportunities With BoldMiles
          </p>
          <p className="font-bold text-sm md:text-xl pt-2 md:pt-4 lg:pt-8">
            Why go solo when you can earn extra income along the way?
          </p>
          <p className="text-sm md:text-xl pt-2 md:pt-4 lg:pt-6 text-[#777777]">
            Own a car and traveling soon? Sign up on the Bold app, list your
            trip, and earn by carrying passengers heading your way. Download the
            app and make your travels rewarding!
          </p>
          <div className="flex gap-2">
            <div>
              <button className="py-[10px] px-4 md:py-3 md:px-6 text-white bg-[#18C4B8] hover:bg-[#12a096] font-redhat font-semibold  text-sm md:text-xl flex items-center gap-2 rounded-lg mt-6 md:mt-8 lg:mt-12">
                Download Now{" "}
                <span className="inline-flex items-center text-white">
                  <FaArrowRight size={20} />
                </span>
              </button>
            </div>
          </div>
        </div>
        <Image
          src={intercitybelowone}
          alt="driverapp"
          className=" rounded-2xl w-full md:max-w-[45%] object-cover object-center"
        />
      </div>

      {/* <div className="flex justify-between px-[5%] items-center py-28 ">
        <Image
          src={intercitybelowtwo}
          alt="driverapp"
          className="md:max-w-[45%]"
        />
        <div className="max-w-[50%] flex flex-col justify-center ">
          <p className="font-bold text-4xl text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <p className="font-bold text-xl pt-8 text-right">
            Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do
          </p>
          <p className="text-xl text-[#777777] pt-6 text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
          <p className="text-xl text-[#777777] pt-6 text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
        </div>
      </div> */}
      <div className="flex flex-col gap-2 md:gap-6 md:flex-row md:justify-between px-[5%] md:items-center py-12 md:pt-20 lg:pt-28 md:pb-12 lg:pb-20 ">
        <Image
          src={intercitybelowtwo}
          alt="driverapp"
          className=" rounded-2xl w-full md:max-w-[45%] object-cover object-center"
        />
        <div className="md:max-w-[50%] flex flex-col justify-center">
          <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl">
            Is Bold a secure and safe way to travel?
          </p>
          {/* <p className="font-bold text-sm md:text-xl pt-2 md:pt-4 lg:pt-8">
            Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do
          </p> */}
          <p className="text-sm md:text-xl pt-2 md:pt-4 lg:pt-6 text-[#777777]">
            Bold prioritizes your safety. Our drivers are thoroughly vetted, and
            all rides are tracked to ensure a secure and smooth experience.
            Whether you&apos;re traveling for work or leisure, you can trust us to
            get you to your destination safely.
          </p>
          <div className="flex gap-2">
            <div></div>
          </div>
        </div>
      </div>

      <div className="bg-[#F3F3F3] px-[5%] py-6 md:pt-14 md:pb-20">
        <div className="flex justify-between gap-[20%] mb-6 md:mb-10">
          <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl md:max-w-[50%]">
            What Our Customers Are Saying
          </p>
          {isLargeScreen && (
            <div className="flex gap-6">
              <button ref={prevRef}>
                <Image src={prevbtn} alt="Previous" />
              </button>
              <button ref={nextRef}>
                <Image src={nextbtn} alt="Next" />
              </button>
            </div>
          )}
        </div>

        {isClient && (
          <Swiper
            className="h-full w-full md:px-8"
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            navigation={
              isLargeScreen
                ? {
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }
                : true // Use inbuilt navigation for small screens
            }
            pagination={!isLargeScreen && { clickable: true }} // Enable pagination for small screens
            onSwiper={(swiper) => {
              if (isLargeScreen) {
                setTimeout(() => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                });
              }
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              480: { slidesPerView: 1, spaceBetween: 30 },
              640: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 2.5, spaceBetween: 20 },
            }}
          >
            {ratings.map((rate) => (
              <SwiperSlide key={rate.index}>
                <div className="px-3 py-6 md:px-6 md:py-8 h-[60vh] md:h-[50vh] flex flex-col justify-between bg-white rounded-2xl">
                  <div className="flex justify-between">
                    <p className="text-[#777777] font-semibold text-sm md:text-xl w-[90%]">
                      {rate.review}
                    </p>
                    <div className="w-10">
                      <Image
                        src={doublequotes}
                        alt="doublequotes"
                        className="w-3 md:w-8 lg:w-10"
                      />
                    </div>
                  </div>

                  <div className="mt-4 md:mt-6 lg:mt-12 flex gap-4 md:gap-6">
                    <Image
                      src={reviewer}
                      alt="reviewer"
                      className="w-11 md:w-16"
                    />
                    <div>
                      <p className="font-bold text-sm md:text-xl">
                        {rate.name}
                      </p>
                      <div className="mt-2 flex gap-2 items-center">
                        <Image
                          src={yellowstr}
                          alt="yellowstr"
                          className="w-3 md:w-6"
                        />
                        <p className="font-semibold text-sm md:text-xl">
                          {rate.rating}
                          <span className="font-normal text-sm md:text-xl text-[#777777]">
                            {" "}
                            (Customer ratings)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <div className="flex flex-col-reverse gap-2 md:gap-6 md:flex-row md:justify-between px-[5%] md:items-center pt-12 md:pt-20 lg:pt-28 md:pb-12 lg:pb-20 ">
        <div className="md:max-w-[60%] flex flex-col justify-center">
          <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl">
            Become a Bold Partner
          </p>
          <p className="text-sm md:text-lg pt-2 md:pt-4 lg:pt-6 text-black">
            Looking to expand your reach and grow with us? Become a Bold partner
            and join a community dedicated to providing convenient, affordable,
            and eco-friendly travel options. Whether you&apos;re a driver,
            business, or service provider, Bold is the perfect platform to help
            you connect with customers and elevate their travel experiences.
          </p>
          <div className="flex gap-2">
            <div>
              <button className="py-[10px] px-4 md:py-3 md:px-6 text-white  bg-[#18C4B8] hover:bg-[#12a096]  font-redhat font-semibold  text-sm md:text-xl flex items-center gap-2 rounded-lg mt-6 md:mt-8 lg:mt-12">
                Become a Bold partner{" "}
                <span className="inline-flex items-center text-white">
                  <FaArrowRight size={20} />
                </span>
              </button>
            </div>
          </div>
        </div>
        <Image
          src={appsplash}
          alt="driverapp"
          className=" rounded-2xl w-full md:max-w-[35%] object-cover object-center"
        />
      </div>

      {/* <FAQ /> */}
    </div>
  );
};

export default Intercitypage;
