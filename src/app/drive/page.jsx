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
import drivebackground from "../../../public/Assets/drivebackground.png";
import { useStateContext } from "../Stateproviderwraper";
import "../swiperslider.css";

const Drivepage = () => {
  const [isClient, setIsClient] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const { currentpage , setCurrentPage} = useStateContext(); 
  console.log(currentpage);
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
  return (
    <div className="relative">
      <div
        className="md:flex justify-between px-[5%] py-6 backdrop-blur  absolute top-0 left-0 w-full z-40 hidden bg-white bg-opacity-[15%]
    "
      >
        <p className="text-xl font-bold text-white ">
          BOLD <span className="font-normal">Drivers</span>{" "}
        </p>
        <div className="flex gap-8">
          <p
            className={`text-lg text-[#888888] ${
              currentpage === "overview" ? "text-white font-bold" : ""
            }  hover:text-white hover:font-bold`}
            onClick={() => setCurrentPage("overview")}
          >
            Overview
          </p>
          <p
            className={`text-lg text-[#888888] ${
              currentpage === "howitworks" ? "text-white font-bold" : ""
            }  hover:text-white hover:font-bold`}
            onClick={() => setCurrentPage("howitworks")}
          >
            How it works
          </p>
          <p
            className={`text-lg text-[#888888] ${
              currentpage === "earning" ? "text-white font-bold" : ""
            }  hover:text-white hover:font-bold`}
            onClick={() => setCurrentPage("earning")}
          >
            Earnings
          </p>
          <p
            className={`text-lg text-[#888888] ${
              currentpage === "drivesafety" ? "text-white font-bold" : ""
            }  hover:text-white hover:font-bold`}
            onClick={() => setCurrentPage("drivesafety")}
          >
            Driver safety
          </p>
          <p
            className={`text-lg text-[#888888] ${
              currentpage === "faq" ? "text-white font-bold" : ""
            }  hover:text-white hover:font-bold`}
            onClick={() => setCurrentPage("faq")}
          >
            FAQ
          </p>
        </div>
      </div>
      {currentpage === "drivesafety" ? (
        <Drivesafety />
      ) : currentpage === "howitworks" ? (
        <Howitworks />
      ) : currentpage === "earning" ? (
        <Earning />
      ) : (
        <div className="">
          <div className="bg-[url('/Assets/drivebackground.png')] bg-cover py-16 md:pt-24 md:pb-14 px-[5%] flex">
            <div className=" md:max-w-[50%]">
              <p className="font-bold text-4xl lg:text-[40px] lg:leading-[60px] font-redhat text-white">
                Drive on your terms and make money with BOLD!
              </p>
              <div className="flex flex-wrap justify-between py-8 md:pt-4 md:pb-10">
                <div className="flex gap-4 items-center pt-6">
                  <Image
                    src={whitecheck}
                    alt="whitecheck"
                    className="w-4 sm:w-6"
                  />
                  <p className=" text-base md:text-lg text-white">
                    No need to own a car
                  </p>
                </div>
                <div className="flex gap-4 items-center pt-6">
                  <Image
                    src={whitecheck}
                    alt="whitecheck"
                    className="w-4 sm:w-6"
                  />
                  <p className="text-base md:text-lg text-white">
                    Flexible hours
                  </p>
                </div>
                <div className="flex gap-4 items-center pt-6">
                  <Image
                    src={whitecheck}
                    alt="whitecheck"
                    className="w-4 sm:w-6"
                  />
                  <p className="text-base md:text-lg text-white">
                    24/7 in‑app safety and support
                  </p>
                </div>
              </div>

              <button className=" text-sm md:text-xl font-semibold bg-white py-4 px-6 rounded-lg lg:mt-10 gap-2 md:mt-7 flex items-center">
                Become a partner today
                <span className="inline-flex items-center">
                  <Image src={btnrightarrow} alt="btnarrow " width={16}></Image>
                </span>
              </button>
            </div>
            <div className="md:flex justify-center flex-1 hidden">
              <Image
                src={iphonedrive}
                alt="drivephone"
                style={{ maxWidth: "35%" }}
              />
            </div>
          </div>
          <div className="px-[5%] py-12 md:pt-16 md:pb-20 lg:pt-20 lg:pb-28">
            <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl">
              How it works
            </p>
            <p className="text-sm md:text-xl pt-2 md:pt-4 lg:pt-8">
              You&apos;re in control with the BOLD app. Drive anytime you want, day
              or night.
            </p>
            <div className="mt-4 md:mt-8 lg:mt-14 xl:mt-20 flex flex-col md:flex-row gap-4 justify-between md:gap-[4%]">
              <div
                className="px-4 py-8 md:p-8 bg-[#FFFFFF] rounded-2xl space-y-3 md:space-y-5 lg:space-y-0"
                style={{ boxShadow: "4px 4px 35px 0px #0000000D" }}
              >
                <Image
                  src={highearning}
                  alt="assist"
                  className="md:h-20 md:w-20 h-12 w-12"
                />
                <p className="lg:pt-12 font-bold text-xl md:text-3xl">
                  Higher earnings
                </p>
                <p className="text-[#777777]  text-smmd:text-xl lg:pt-8">
                  Maximise your income with competitive rates, bonuses, and
                  peak-hour incentives. Drive smarter, earn more, and unlock the
                  potential of your hustle.
                </p>
              </div>
              <div
                className="px-4 py-8 md:p-8 bg-[#FFFFFF] rounded-2xl space-y-3 md:space-y-5 lg:space-y-0"
                style={{ boxShadow: "4px 4px 35px 0px #0000000D" }}
              >
                <Image
                  src={flexiblework}
                  alt="assist"
                  className="md:h-20 md:w-20 h-12 w-12 "
                />
                <p className="lg:pt-12 font-bold text-xl md:text-3xl">
                  Flexible work
                </p>
                <p className="text-[#777777]  text-sm md:text-xl lg:pt-8">
                  Say goodbye to rigid schedules. Take charge of your time and
                  be your own boss with BOLD. Whether it’s a few hours a day or
                  a full-time hustle, you decide when and how you work.
                </p>
              </div>
              <div
                className="px-4 py-8 md:p-8 bg-[#FFFFFF] rounded-2xl space-y-3 md:space-y-5 lg:space-y-0"
                style={{ boxShadow: "4px 4px 35px 0px #0000000D" }}
              >
                <Image
                  src={smoothpayout}
                  alt="assist"
                  className="md:h-20 md:w-20 h-12 w-12 "
                />
                <p className="lg:pt-12 font-bold text-xl md:text-3xl">
                  Smooth payouts
                </p>
                <p className="text-[#777777]  text-sm md:text-xl lg:pt-8">
                  Get paid seamlessly and on time. BOLD ensures hassle-free
                  payouts so that you can access your earnings easily.
                </p>
              </div>
            </div>
          </div>

          <div className="px-[5%] ">
            <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl">
              What do you need to become a BOLD partner?
            </p>
            <div className="flex md:flex-row flex-col gap-6 justify-between mt-6 md:mt-8 lg:mt-10 pb-12 md:pb-20 lg:pb-28 md:gap-6 lg:gap-8">
              <div className="">
                <Image src={blackstr} alt="blackstr" className="w-7 md:w-12" />
                <p className="font-semibold text-base md:text-xl lg:text-2xl pt-[14px] md:pt-6 lg:pt-8">
                  Basic requirements
                </p>
                <p className="text-sm md:text-base pt-2">
                  . Lorem Ipsum is not simply random text.
                </p>
                <p className="text-sm md:text-base pt-2">
                  . Lorem Ipsum is not simply random text.
                </p>
              </div>
              <div className="">
                <Image src={documents} alt="blackstr" className="w-7 md:w-12" />
                <p className="font-semibold text-base md:text-xl lg:text-2xl pt-[14px] md:pt-6 lg:pt-8">
                  Documents
                </p>
                <p className="text-sm md:text-base pt-2">
                  . Lorem Ipsum is not simply random text.
                </p>
                <p className="text-sm md:text-base pt-2">
                  . Lorem Ipsum is not simply random text.
                </p>
              </div>
              <div className="">
                <Image src={blacktick} alt="blackstr" className="w-7 md:w-12" />
                <p className="font-semibold text-base md:text-xl lg:text-2xl pt-[14px] md:pt-6 lg:pt-8">
                  Sign up process
                </p>
                <p className="text-sm md:text-base pt-2">
                  . Lorem Ipsum is not simply random text.
                </p>
                <p className="text-sm md:text-base pt-2">
                  . Lorem Ipsum is not simply random text.
                </p>
              </div>
            </div>
          </div>

          <div className="px-[5%] mb-12 md:mb-20 lg:mb-28 lg:gap-[5%] xl:gap-[8%] flex lg:flex-row flex-col gap-4 lg:items-center">
            <div className=" w-[80%] lg:w-[70%]">
              <Image
                src={driverappimage}
                alt="driverapp"
                style={{ width: "100%" }}
              />
            </div>
            <div className="">
              <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl">
              Earn more money from BOLD
              </p>
              <div className="flex gap-6 justify-start pt-6 md:pt-10 lg:pt-14">
                <div className="">
                  <Image src={one} alt="one" width={32} height={32} />
                </div>
                <div className="">
                  <p className="font-bold text-base md:text-xl">Packages</p>
                  <p className=" pt-3 md:pt-4 text-[#777777] text-sm md:text-xl">
                  Boost your earnings by delivering packages quickly and securely. From e-commerce orders to personal deliveries, turn every trip into a money-making opportunity.{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-6 justify-start pt-4 md:pt-10 lg:pt-14">
                <div className="">
                  <Image src={two} alt="one" width={32} height={32} />
                </div>
                <div className="">
                  <p className="font-bold text-base md:text-xl">Boldmiles</p>
                  <p className=" pt-3 md:pt-4 text-[#777777] text-sm md:text-xl">
                  Drive between cities and boost your earnings on longer trips with BOLD Intercity feature.{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-6 justify-start pt-4 md:pt-10 lg:pt-14">
                <div className="">
                  <Image src={three} alt="one" width={32} height={32} />
                </div>
                <div className="">
                  <p className="font-bold text-base md:text-xl">Jumpstart</p>
                  <p className=" pt-3 md:pt-4 text-[#777777] text-sm md:text-xl">
                  Assist stranded drivers and make money by providing quick, reliable jumpstart services. Turn car troubles into your next earning opportunity. {" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Blogsec
            heading={
              "Your safety drives everything we do"
            }
            text={
              "Your well-being and safety matter. That’s why we’ve designed an experience that keeps you comfortable whether driving at night or during the day."
            }
            cta={"Learn More"}
          />

          <div className="flex justify-between px-[5%] items-center py-12 md:py-20 lg:py-28 ">
            <div className="md:max-w-[50%] lg:max-w-[50%] flex flex-col justify-center">
              <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl">
              Earn money and drive with confidence
              </p>
              <p className="font-semibold text-sm md:text-xl pt-2 sm:pt-4 md:pt-6 lg:pt-8 max-w-[80%]">
              Drive on your terms and earn more with every trip. Whether it’s passengers or packages, our platform lets you maximize your earnings across all our services. 
              </p>
              <div className="flex gap-2">
                <div>
                  <button className="p-4 text-white bg-black font-redhat font-semibold text-sm md:text-xl flex items-center gap-2 rounded-lg mt-6 md:mt-8 lg:mt-12">
                    Become a partner today{" "}
                    <span className="inline-flex items-center text-white">
                      <Image
                        src={whitearrow}
                        alt="btnarrow "
                        width={16}
                      ></Image>
                    </span>
                  </button>
                </div>
                <Image
                  src={curlyarrow}
                  alt="curlyarrow"
                  className="max-h-[48px] md:max-h-full"
                />
              </div>
            </div>
            <Image
              src={driverappsingle}
              alt="driverapp"
              className="md:w-[50%] lg:w-[35%] md:block hidden"
            />
          </div>

          <div className="bg-[#F3F3F3] px-[5%] py-6 md:pt-14 md:pb-20">
            <div className="flex justify-between gap-[20%] mb-6 md:mb-10">
              <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl md:max-w-[50%]">
               Reviews
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
          <FAQ />
        </div>
      )}
    </div>
    // {/* <Howitworks/> */}
    // {/* <Earning/> */}
    // <Drivesafety />
  );
};

export default Drivepage;
