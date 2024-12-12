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
import rideoverview from "../../../public/Assets/rideoverview.png";
import { useStateContext } from "../Stateproviderwraper";
import "../swiperslider.css";

const RideDetails = ({ heading, paragraphs, listItems, imageSrc, altText }) => (
  <div className="flex flex-col-reverse md:flex-row justify-between gap-[5%] mt-8 md:mt-12">
    <div className="py-4 md:py-7 md:max-w-[50%]">
      {paragraphs.map((text, index) => (
        <p
          key={index}
          className={`text-sm md:text-xl ${index > 0 ? "pt-2 md:pt-4" : ""}`}
        >
          {text}
        </p>
      ))}
      <ul className="mr-8">
        {listItems.map((item, index) => (
          <li
            key={index}
            className="pt-2 md:pt-6 lg:pt-10 font-semibold text-sm md:text-xl list-disc"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
    <Image
      src={imageSrc}
      alt={altText}
      className="object-cover object-center rounded-2xl"
    />
  </div>
);

const RideOptions = ({ boldType, ridetaxiimg }) => {
  const data = {
    share: {
      heading: "BOLD Share",
      paragraphs: [
        "Split costs and reduce your carbon footprint with BOLD Share. Save more by sharing the fare with riders heading in the same direction.",
        "BOLD Share is a smart and affordable choice for a quick commute or long trip. Start sharing today!",
      ],
      listItems: [
        "Comfortable eco-friendly ride-sharing",
        "Enjoy lower fares",
        "Meet people while enjoying a fast journey",
      ],
    },
    regular: {
      heading: "BOLD Regular",
      paragraphs: [
        "Experience cost-effective luxury rides with BOLD Regular. Designed for your everyday travel needs, our private rides offer an unbeatable value.",
      ],
      listItems: [
        "Enjoy a premium experience without breaking the bank.",
        "Ideal for commuting, errands, or outings with friends and family.",
        "Comfortable seats up to four passengers.",
      ],
    },
    premium: {
      heading: "BOLD Premium",
      paragraphs: [
        "Treat yourself to a first-class experience with BOLD Premium. Ride in vehicles designed for comfort, elegance, and style. Whether it's a special occasion or just a regular outing, Bold Premium elevates the way you travel",
      ],
      listItems: [
        "Enjoy rides in premium cars designed for comfort.",
        "Perfect for special occasions or when you simply want to travel in style.",
        "Indulge in elegance and exclusivity.",
      ],
    },
    xl: {
      heading: "BOLD XL",
      paragraphs: [
        "Big trips need big solutions. There’s room for everyone and everything with BoldXL. These spacious rides make group trips a breeze.",
      ],
      listItems: [
        "Designed for families, friends, or work crews needing extra space.",
        "Comfortably accommodates up to six passengers.",
        "Perfect for luggage, equipment, or just spreading out.",
      ],
    },
  };

  const rideData = data[boldType];

  if (!rideData) {
    return (
      <p>Unknown error has occurred. Please refresh the page and try again!</p>
    );
  }

  return (
    <RideDetails
      heading={rideData.heading}
      paragraphs={rideData.paragraphs}
      listItems={rideData.listItems}
      imageSrc={ridetaxiimg}
      altText={rideData.heading}
    />
  );
};

const Ridepage = () => {
  const [isClient, setIsClient] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const { currentpage ,setCurrentPage} = useStateContext(); 
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [boldType, setBoldType] = useState("share");

  const handleSetBold = (data) => {
    setBoldType(data);
  };

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

  return (
    <div className="relative">
      <div
        className="md:flex justify-between px-[5%] py-6 backdrop-blur  absolute top-0 left-0 w-full z-40 hidden bg-white bg-opacity-[15%]
    "
      >
        <p className="text-xl font-bold text-white ">
          BOLD <span className="font-normal"> RIDE</span>{" "}
        </p>
        <div className="flex gap-8 alwaysdiv">
          <Link href={"/ride"}>
            <p
              className={`text-lg text-[#888888] ${
                currentpage === "overview" ? "text-white font-bold" : ""
              }  hover:text-white hover:font-bold`}
              onClick={() =>setCurrentPage("overview")}
            >
              Overview
            </p>
          </Link>
          <p
            className={`text-lg text-[#888888] ${
              currentpage === "trendinglocation" ? "text-white font-bold" : ""
            }  hover:text-white hover:font-bold`}
            onClick={() =>setCurrentPage("trendinglocation")}
          >
            Trending locations
          </p>
          <p
            className={`text-lg text-[#888888] ${
              currentpage === "ridesafety" ? "text-white font-bold" : ""
            }  hover:text-white hover:font-bold`}
            onClick={() =>setCurrentPage("ridesafety")}
          >
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
      {currentpage === "ridesafety" ? (
        <Ridesafety />
      ) : currentpage === "trendinglocation" ? (
        <Trendinglocation />
      ) : (
        <div>
          <div className="py-16 md:pt-24 md:pb-20 flex bg-[url('/Assets/rideoverview.png')] bg-cover px-[5%] justify-between relative  ">
            <div className="max-w-full lg:max-w-[33%]">
              <p className="text-4xl lg:text-[40px] font-bold text-white lg:leading-[60px]">
                <span className="font-extrabold">Ride with BOLD:</span> Comfort,
                Style, and Luxury
              </p>
              <p className="text-2xl md:text-xl  text-[#BBBBBB] pt-8 md:pt-10">
                Say goodbye to boring rides! Experience travel that’s fast,
                comfortable, and tailored to your needs. <br /> <br />
                Need a quick trip? An eco-friendly ride? Or a spacious ride for
                your group? We have it all. Join the{" "}
                <span className="font-bold">BOLD</span> side. <br />
                <br /> Download the <span className="font-bold">BOLD</span> app
                today!
              </p>
              <div className="md:hidden">
                <div className="flex gap-2 md:gap-4 items-center pt-8 md:pt-4">
                  {" "}
                  <Image src={staricon} alt="star" className="w-4 md:w-6" />
                  <p className="text-xl text-white ">
                    4.8{" "}
                    <span className="text-lg text-[#BBBBBB]">
                      {" "}
                      (Customer ratings){" "}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col gap-2 pt-6 lg:pt-10">
                  <p className="font-medium text-2xl md:text-4xl text-white">
                    380k+
                  </p>
                  <p className="text-base md:text-xl text-[#BBBBBB]">
                    Total Active Users
                  </p>
                </div>
                <div className="flex flex-col gap-2 pt-6 lg:pt-10">
                  <p className="font-medium text-2xl md:text-4xl text-white">
                    500k+
                  </p>
                  <p className="text-base md:text-xl text-[#BBBBBB]">
                    Downloads from all store
                  </p>
                </div>
              </div>
              <button className=" text-sm md:text-xl font-semibold bg-[#FFFFFF] py-4 px-6 rounded-lg mt-10 md:mt-7">
                Download App
              </button>
            </div>
            <Image
              src={ridegroup}
              alt="ridegruop"
              className="hidden lg:block"
            />
            <div className=" lg:max-w-[30%] ml-[8%] hidden md:block">
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
                <p className="text-xl text-[#BBBBBB]">
                  Downloads from all store
                </p>
              </div>
            </div>
          </div>

          <div className="px-[5%] py-12 lg:py-20">
            <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl lg:max-w-[40%]">
              Your Journey Starts Here! Choose The Service That Suits You
            </p>
            <div className="mt-6 md:mt-10 lg:mt-16 flex gap-2 md:gap-10 lg:gap-16 flex-wrap">
              <button
                className="hover:text-white focus:text-white text-[10px] flex items-center justify-center text-center md:text-xl text-[#777777] hover:font-semibold hover:bg-[#000000] focus:font-semibold focus:bg-[#000000] py-1 px-3 md:py-[10px] md:px-6 rounded-full"
                onClick={() => handleSetBold("share")}
              >
                BOLD Share
              </button>
              <button
                className="hover:text-white focus:text-white text-[10px] flex items-center justify-center text-center md:text-xl text-[#777777] focus:font-semibold focus:bg-[#000000] hover:font-semibold  hover:bg-[#000000] py-1 px-3 md:py-[10px] md:px-6 rounded-full"
                onClick={() => handleSetBold("regular")}
              >
                BOLD Regular
              </button>
              <button
                className="hover:text-white focus:text-white text-[10px] flex items-center justify-center text-center md:text-xl text-[#777777] focus:font-semibold focus:bg-[#000000] hover:font-semibold  hover:bg-[#000000] py-1 px-3 md:py-[10px] md:px-6 rounded-full"
                onClick={() => handleSetBold("premium")}
              >
                BOLD Premium
              </button>
              <button
                className="hover:text-white focus:text-white text-[10px] flex items-center justify-center text-center md:text-xl text-[#777777] focus:font-semibold focus:bg-[#000000] hover:font-semibold  hover:bg-[#000000] py-1 px-3 md:py-[10px] md:px-6 rounded-full"
                onClick={() => handleSetBold("xl")}
              >
                BOLD XL
              </button>
            </div>

            <RideOptions boldType={boldType} ridetaxiimg={ridetaxiimg} />

            {/* {boldType === "share" ? (
              <div className=" flex flex-col-reverse md:flex-row justify-between gap-[5%] mt-8 md:mt-12">
              <div className=" py-4 md:py-7 md:max-w-[50%]">
                <p className="text-sm md:text-xl">
                  Split costs and reduce your carbon footprint with BOLD Share.
                  Save more by sharing the fare with riders heading in the same
                  direction.
                </p>
                <p className="text-sm md:text-xl pt-2 md:pt-4">
                  BOLD Share is a smart and affordable choice for a quick
                  commute or long trip. Start sharing today!
                </p>
                <ul className="mr-8">
                  <li className="pt-2 md:pt-6 lg:pt-10 font-semibold text-sm md:text-xl list-disc">
                    Comfortable eco-friendly ride-sharing
                  </li>
                  <li className="pt-2 md:pt-6 lg:pt-10 font-semibold text-sm md:text-xl list-disc">
                    Enjoy lower fares
                  </li>
                  <li className="pt-2 md:pt-6 lg:pt-10 font-semibold text-sm md:text-xl list-disc">
                    Meet people while enjoying a fast journey
                  </li>
                </ul>
              </div>
              <Image
                src={ridetaxiimg}
                alt="ridetaxi"
                className="object-cover object-center rounded-2xl"
              />
            </div>
            )
            : boldType === "regular" ? (
              <div className=" flex flex-col-reverse md:flex-row justify-between gap-[5%] mt-8 md:mt-12">
              <div className=" py-4 md:py-7 md:max-w-[50%]">
                <p className="text-sm md:text-xl">
                Experience cost-effective luxury rides with BOLD Regular. Designed for your everyday travel needs, our private rides offer an unbeatable value.
                </p>               
                <ul className="mr-8">
                  <li className="pt-2 md:pt-6 lg:pt-10 font-semibold text-sm md:text-xl list-disc">
                  Enjoy a premium experience without breaking the bank.
                  </li>
                  <li className="pt-2 md:pt-6 lg:pt-10 font-semibold text-sm md:text-xl list-disc">
                  Ideal for commuting, errands, or outings with friends and family.
                  </li>
                  <li className="pt-2 md:pt-6 lg:pt-10 font-semibold text-sm md:text-xl list-disc">
                  Comfortably seats up to four passengers.
                  </li>
                </ul>
              </div>
              <Image
                src={ridetaxiimg}
                alt="ridetaxi"
                className="object-cover object-center rounded-2xl"
              />
            </div>
            )
             : boldType === "premium" ? (
              <div className=" flex flex-col-reverse md:flex-row justify-between gap-[5%] mt-8 md:mt-12">
              <div className=" py-4 md:py-7 md:max-w-[50%]">
                <p className="text-sm md:text-xl">
                  Split costs and reduce your carbon footprint with BOLD Share.
                  Save more by sharing the fare with riders heading in the same
                  direction.
                </p>
                <p className="text-sm md:text-xl pt-2 md:pt-4">
                  BOLD Share is a smart and affordable choice for a quick
                  commute or long trip. Start sharing today!
                </p>
                <ul className="mr-8">
                  <li className="pt-2 md:pt-6 lg:pt-10 font-semibold text-sm md:text-xl list-disc">
                    Comfortable eco-friendly ride-sharing
                  </li>
                  <li className="pt-2 md:pt-6 lg:pt-10 font-semibold text-sm md:text-xl list-disc">
                    Enjoy lower fares
                  </li>
                  <li className="pt-2 md:pt-6 lg:pt-10 font-semibold text-sm md:text-xl list-disc">
                    Meet people while enjoying a fast journey
                  </li>
                </ul>
              </div>
              <Image
                src={ridetaxiimg}
                alt="ridetaxi"
                className="object-cover object-center rounded-2xl"
              />
            </div>
            )
              : boldType === "xl" ? (
                <div className=" flex flex-col-reverse md:flex-row justify-between gap-[5%] mt-8 md:mt-12">
                <div className=" py-4 md:py-7 md:max-w-[50%]">
                  <p className="text-sm md:text-xl">
                    Split costs and reduce your carbon footprint with BOLD Share.
                    Save more by sharing the fare with riders heading in the same
                    direction.
                  </p>
                  <p className="text-sm md:text-xl pt-2 md:pt-4">
                    BOLD Share is a smart and affordable choice for a quick
                    commute or long trip. Start sharing today!
                  </p>
                  <ul className="mr-8">
                    <li className="pt-2 md:pt-6 lg:pt-10 font-semibold text-sm md:text-xl list-disc">
                      Comfortable eco-friendly ride-sharing
                    </li>
                    <li className="pt-2 md:pt-6 lg:pt-10 font-semibold text-sm md:text-xl list-disc">
                      Enjoy lower fares
                    </li>
                    <li className="pt-2 md:pt-6 lg:pt-10 font-semibold text-sm md:text-xl list-disc">
                      Meet people while enjoying a fast journey
                    </li>
                  </ul>
                </div>
                <Image
                  src={ridetaxiimg}
                  alt="ridetaxi"
                  className="object-cover object-center rounded-2xl"
                />
              </div>
              ) :<p>Unknown error has occurred please refresh the page and try again!</p>
            } */}
          </div>

          <div className="bg-[#F3F3F3] px-[5%] py-4 md:py-10 lg:py-16">
            <div className=" md:flex justify-between gap-[10%] lg:gap-[20%]">
              <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl lg:max-w-[40%]">
                Rides for Every Need. BOLDLY Tailored to You!
              </p>
              <p className="font-semibold text-sm md:text-xl text-[#777777] pt-2 md:pt-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam labore
              </p>
            </div>
            <div className="mt-4 md:mt-8 lg:mt-14 flex flex-col md:flex-row gap-4 justify-between md:gap-[4%]">
              <div className="px-2 py-8 md:p-8 bg-[#FFFFFF] rounded-2xl space-y-3 md:space-y-5 lg:space-y-0">
                <Image
                  src={petfriendly}
                  alt="assist"
                  className="md:h-20 md:w-20 h-12 w-12 "
                />
                <p className="lg:pt-12 font-bold text-xl md:text-3xl">
                  Pet Friendly
                </p>
                <p className="text-[#777777]  text-smmd:text-xl lg:pt-8">
                  Travel without any awkward stares. Our pet-friendly rides
                  welcome your pets with open doors. Whether it’s a vet visit, a
                  park day, or a pet playdate, we’ve got you covered. You and
                  your pet will stay relaxed throughout the journey.
                </p>
              </div>
              <div className="px-2 py-8 md:p-8 bg-[#FFFFFF] rounded-2xl space-y-3 md:space-y-5 lg:space-y-0">
                <Image
                  src={boldgreen}
                  alt="assist"
                  className="md:h-20 md:w-20 h-12 w-12 "
                />
                <p className="lg:pt-12 font-bold text-xl md:text-3xl">
                  BOLD Green
                </p>
                <p className="text-[#777777]  text-smmd:text-xl lg:pt-8">
                  Keep the planet clean with Bold Green! Enjoy fast eco-friendly
                  rides at affordable rates. You’ll reduce your carbon footprint
                  whether it’s a quick trip or a long haul.
                </p>
              </div>
              <div className="px-2 py-8 md:p-8 bg-[#FFFFFF] rounded-2xl space-y-3 md:space-y-5 lg:space-y-0">
                <Image
                  src={boldassist}
                  alt="assist"
                  className="md:h-20 md:w-20 h-12 w-12 "
                />
                <p className="lg:pt-12 font-bold text-xl md:text-3xl">
                  BOLD Assist
                </p>
                <p className="text-[#777777]  text-smmd:text-xl lg:pt-8">
                  Bold Assist is an affordable and reliable ride option for
                  individuals with reduced mobility. Our trained drivers go the
                  extra mile to ensure a comfortable experience and make travel
                  stress-free.
                </p>
              </div>
            </div>
          </div>

          <div className="px-[5%] py-12  md:py-16 lg:pt-20 lg:pb-28 ">
            <div className="flex md:flex-row flex-col-reverse justify-between md:gap-[10%] lg:gap-[20%]">
              <div className=" lg:max-w-[40%] pt-4 lg:pt-0">
                <p className="font-semibold text-xl font-opensans md:text-3xl lg:text-4xl ">
                  <span className="font-bold">Jump-Start Assistance:</span>{" "}
                  We’ll Get You Back on the Road Fast!
                </p>
                <p className="font-semibold text-sm pt-2 md:text-xl text-[#777777] lg:hidden block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam labore
                </p>
                <div className=" pt-6 md:pt-10 lg:pt-16">
                  <p className="text-sm md:text-xl font-bold">
                    Dead battery? No problem
                  </p>
                  <p className="text-sm md:text-xl font-semibold pt-2 md:pt-4 text-[#777777]">
                    We’re available when you need us. Whether it’s dawn or dusk,
                    we’ve got you covered.{" "}
                  </p>
                </div>
                <div className=" pt-6 md:pt-10 lg:pt-16">
                  <p className="text-sm md:text-xl font-bold">
                    Quick and Reliable Service
                  </p>
                  <p className="text-sm md:text-xl font-semibold pt-2 md:pt-4 text-[#777777]">
                    With just a few taps easily order a driver to help
                    jump-start your car.{" "}
                  </p>
                </div>
                <div className=" pt-6 md:pt-10 lg:pt-16">
                  <p className="text-sm md:text-xl font-bold">
                    Stress-Free Experience
                  </p>
                  <p className="text-sm md:text-xl font-semibold pt-2 md:pt-4 text-[#777777]">
                    Count on us to handle the hassle so you can get back on the
                    road and focus on the journey ahead.{" "}
                  </p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-xl text-[#777777] lg:block hidden">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam labore
                </p>
                <Image
                  src={youtubecover}
                  alt="youtubecover"
                  className="lg:mt-16"
                />
              </div>
            </div>
          </div>

          <div className="bg-[#F3F3F3] px-[5%] py-6 md:pt-14 md:pb-20">
            <div className="flex justify-between gap-[20%] mb-6 md:mb-10">
              <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl md:max-w-[50%]">
                See What Riders Have To Say About Bold
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
                {[...Array(10)].map((_, index) => (
                  <SwiperSlide key={index}>
                    <div className="px-3 py-6 md:px-6 md:py-8 bg-white rounded-2xl">
                      <div className="flex justify-between">
                        <p className="text-[#777777] font-semibold text-sm md:text-xl w-[90%]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed incididunt ut labore et dolore magna aliqua.
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
                            Carter Carder
                          </p>
                          <div className="mt-2 flex gap-2 items-center">
                            <Image
                              src={yellowstr}
                              alt="yellowstr"
                              className="w-3 md:w-6"
                            />
                            <p className="font-semibold text-sm md:text-xl">
                              4.8
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

          <div className="flex justify-between px-[5%] items-center py-12 md:py-4">
            <div className=" md:max-w-[40%]">
              <p className=" font-opensans md:text-3xl lg:text-4xl font-bold ">
                Don’t let another car ruin your day
              </p>
              <p className="text-sm md:text-xl text-[#BBBBBB] font-semibold pt-2 md:pt-6 lg:pt-10">
                Use the SOS feature to alert other drivers blocking your way.
                With just a few taps they’ll get out of your way.
              </p>
              <button className="text-sm md:text-xl font-semibold bg-black text-white px-4 py-2 md:py-3 md:px-6 rounded-lg mt-8 lg:mt-7">
                Download Now
              </button>
            </div>
            <Image
              src={downloadapppromo}
              alt="download"
              className="md:block hidden"
            />
          </div>

          <Blogsec
            text={`There’s more to <span class="font-extrabold">BOLD.</span> Bold is not just about getting you from point A to point B. We offer a variety of services designed to enhance your daily life and solve real-world problems.`}
            heading={"More Than Just Rides"}
            cta={"Read more details on BOLD"}
          />
          <FAQ />
        </div>
      )}
    </div>
    // <Ridesafety />
    // {/* <Trendinglocation/> */}
  );
};

export default Ridepage;
