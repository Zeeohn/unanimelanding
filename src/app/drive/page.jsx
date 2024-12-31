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
import cyantick from "../../../public/Assets/cyan-tick.png";
import cyandoc from "../../../public/Assets/cyan-document.png";
import cyanstar from "../../../public/Assets/cyan-star.png";
import drivebackground from "../../../public/Assets/drivebackground.png";
import driveoverlay from "../../../public/Assets/drive-overlay.png";
import drivebanner from "../../../public/Assets/drive-banner.jpeg";
import { useStateContext } from "../Stateproviderwraper";
import "../swiperslider.css";
import { FaArrowRight } from "react-icons/fa";

const Drivepage = () => {
  const [isClient, setIsClient] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const { currentpage, setCurrentPage } = useStateContext();
  console.log(currentpage);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const questions = [
    {
      question: "Do I need to own a car to become a BOLD partner?",
      answer:
        "No, you don’t need to own a car to start driving and earning with BOLD. You can partner with us using a vehicle that you have access to, whether it’s your own or rented.",
    },
    {
      question: "How flexible are the working hours with BOLD?",
      answer:
        "With BOLD, you have complete control over your schedule. You can choose when and how much you want to drive—whether it’s part-time or full-time, during the day or night. It's all up to you!",
    },
    {
      question: "What kind of support does BOLD offer drivers?",
      answer:
        "BOLD provides 24/7 in-app safety and support to ensure that you’re always covered, no matter where you are or when you’re working. Our team is always available to help with any issues or questions.",
    },
    {
      question: "How do I make extra money with BOLD?",
      answer:
        "You can boost your earnings by bidding for higher-demand trip fares, driving longer distances with the BOLD Intercity feature, or delivering packages as part of our Boost package. Plus, you can earn additional income by assisting stranded drivers with our Jumpstart service.",
    },
  ];

  const ratings = [
    {
      index: 1,
      name: "Mark Rupert",
      rating: 4.8,
      review:
        "Driving for BOLD was a game-changer. The sign-up process was quick, and I was on the road earning money in no time. The app is easy to use, and I love having full control over my schedule.",
    },
    {
      index: 2,
      name: "Fernando Lopez",
      rating: 4.9,
      review:
        "With BOLD, I noticed a big difference right away. The platform offers better rates, and I love the bonus incentives for completing rides during busy times.",
    },
    {
      index: 3,
      name: "Pedro Rodriguez",
      rating: 4.7,
      review:
        "BOLD let me set my own hours, so I can drive between classes and on weekends. The app even helps me find the best routes to maximize my time.",
    },
    {
      index: 4,
      name: "Natalie Smith",
      rating: 4.6,
      review:
        "BOLD proved me wrong. The demand is high, and the app helps me optimize my routes to minimize downtime. Plus, I earn extra with referral bonuses!",
    },
  ];

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
              <div className="flex flex-col py-8 md:pt-4 md:pb-10">
                <div className="flex flex-col md:gap-24 md:flex-row">
                  <div className="flex gap-4 items-center pt-6">
                    <Image
                      src={whitecheck}
                      alt="whitecheck"
                      className="w-4 sm:w-6"
                    />
                    <p className=" text-base md:text-[16px] text-white">
                      No need to own a car
                    </p>
                  </div>
                  <div className="flex gap-4 items-center pt-6">
                    <Image
                      src={whitecheck}
                      alt="whitecheck"
                      className="w-4 sm:w-6"
                    />
                    <p className="text-base md:text-[16px] text-white">
                      Flexible hours
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center pt-6">
                  <Image
                    src={whitecheck}
                    alt="whitecheck"
                    className="w-4 sm:w-6"
                  />
                  <p className="text-base md:text-[16px] text-white">
                    24/7 in‑app safety and support
                  </p>
                </div>
              </div>

              <button className=" text-sm md:text-xl font-semibold bg-[#18C4B8] hover:bg-[#12a096] text-white py-4 px-6 rounded-lg lg:mt-10 gap-2 md:mt-7 flex items-center">
                Become a partner today
                <span className="inline-flex items-center">
                  <FaArrowRight size={20} />
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
              The BOLD app puts you in charge of your driving schedule. Whether
              it&apos;s day or night, you decide when to hit the road. Drive
              across cities, states, or even countries, and take on parcel
              deliveries along the way. Maximize your time by carrying riders
              heading in the same direction, so you spend less time waiting for
              requests and more time earning on the move.
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
            <div className="flex w-full md:flex-row flex-col gap-6 justify-between mt-6 md:mt-8 lg:mt-10 pb-12 md:pb-20 lg:pb-28 md:gap-6 lg:gap-8">
              <div className="md:w-1/3">
                <Image src={cyanstar} alt="blackstr" className="w-7 md:w-12" />
                <p className="font-semibold text-base md:text-xl lg:text-2xl pt-[14px] md:pt-6 lg:pt-8">
                  Basic requirements
                </p>
                <p className="text-sm md:text-base pt-2">
                  <span className="font-semibold">. Driving Skills:</span> You
                  need to know how to drive a vehicle confidently and
                  responsibly.
                </p>
                <p className="text-sm md:text-base pt-2">
                  <span className="font-semibold">. Age Requirement:</span>{" "}
                  Ensure you meet the minimum age required to drive in your
                  area.
                </p>
                <p className="text-sm md:text-base pt-2">
                  <span className="font-semibold">. Background Check:</span> You
                  should have a clean criminal and driving record.
                </p>
              </div>
              <div className="md:w-1/3">
                <Image src={cyandoc} alt="blackstr" className="w-7 md:w-12" />
                <p className="font-semibold text-base md:text-xl lg:text-2xl pt-[14px] md:pt-6 lg:pt-8">
                  Documents
                </p>
                <p className="text-sm md:text-base pt-2">
                  <span className="font-semibold">
                    . Driver&apos;s License:
                  </span>{" "}
                  A valid driver’s license for the type of vehicle you intend to
                  drive.
                </p>
                <p className="text-sm md:text-base pt-2">
                  <span className="font-semibold">. Vehicle Registration:</span>{" "}
                  Proof that your vehicle is legally registered.
                </p>
                <p className="text-sm md:text-base pt-2">
                  <span className="font-semibold">. Insurance:</span> A valid
                  insurance policy for the vehicle.
                </p>
              </div>
              <div className="md:w-1/3">
                <Image src={cyantick} alt="blackstr" className="w-7 md:w-12" />
                <p className="font-semibold text-base md:text-xl lg:text-2xl pt-[14px] md:pt-6 lg:pt-8">
                  Sign up process
                </p>
                <p className="text-sm md:text-base pt-2">
                  <span className="font-semibold">. Online Application:</span>{" "}
                  Begin by signing up through our user-friendly platform. Fill
                  in your details and upload the required documents.
                </p>
                <p className="text-sm md:text-base pt-2">
                  <span className="font-semibold">. Verification:</span> Our
                  team will review your application and conduct the necessary
                  background checks.
                </p>
                <p className="text-sm md:text-base pt-2">
                  <span className="font-semibold">. Orientation:</span> Once
                  approved, you’ll be invited for an onboarding session to
                  familiarize yourself with our platform and policies.
                </p>
              </div>
            </div>
          </div>

          <div className="px-[5%] mb-12 md:mb-20 lg:mb-28 lg:gap-[5%] xl:gap-[8%] flex lg:flex-row flex-col gap-4 lg:items-center">
            <div className=" w-[80%] lg:w-1/2">
              <Image
                src={driverappimage}
                alt="driverapp"
                style={{ width: "100%" }}
              />
            </div>
            <div className="lg:w-1/2">
              <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl">
                Earn more money with BOLD
              </p>
              <div className="flex gap-6 justify-start pt-6 md:pt-5 lg:pt-5">
                <div className="">
                  <p className="rounded-full px-2.5 py-0.5 text-lg font-bold text-white bg-black h-fit w-fit">
                    1
                  </p>
                </div>
                <div className="">
                  <p className="font-bold text-base md:text-xl">Packages</p>
                  <p className=" pt-3 text-[#777777] text-sm md:text-xl">
                    Boost your earnings by delivering packages quickly and
                    securely. From e-commerce orders to personal deliveries,
                    turn every trip into a money-making opportunity. Whether
                    it’s a gift, business delivery, or customer order, each
                    package is a chance to earn more while helping keep goods
                    moving efficiently.{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-6 justify-start pt-4 md:pt-5 lg:pt-5">
                <div className="">
                  <p className="rounded-full px-2.5 py-0.5 text-lg font-bold text-white bg-black h-fit w-fit">
                    2
                  </p>
                </div>
                <div className="">
                  <p className="font-bold text-base md:text-xl">Boldmiles</p>
                  <p className="pt-3 text-[#777777] text-sm md:text-xl">
                    Drive between cities, states, and countries with the BOLD
                    Intercity feature and boost your earnings on longer trips.
                    Whether for business, leisure, or routine commutes, you can
                    turn cross-country travel into a profitable opportunity,
                    enjoying the freedom of choosing your routes while earning
                    extra income.{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-6 justify-start pt-4 md:pt-5 lg:pt-5">
                <div className="">
                  <p className="rounded-full px-2.5 py-0.5 text-lg font-bold text-white bg-black h-fit w-fit">
                    3
                  </p>
                </div>
                <div className="" id="jumpstart">
                  <p className="font-bold text-base md:text-xl">Jumpstart</p>
                  <p className=" pt-3 text-[#777777] text-sm md:text-xl">
                    Earn money by assisting stranded drivers with quick,
                    reliable jumpstart services. Car troubles can happen
                    anytime, and you can be the one to help. Turn roadside
                    emergencies into a profitable opportunity, all while
                    offering a valuable service to your community.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Blogsec
            heading={"Your safety drives everything we do"}
            text={
              "Your well-being and safety matter. That’s why we’ve designed an experience that keeps you comfortable whether driving at night or during the day."
            }
            cta={"Learn More"}
            bg={drivebanner}
            overlayImg={driveoverlay}
          />

          <div className="flex justify-between px-[5%] items-center py-12 md:py-20 lg:py-28 ">
            <div className="md:max-w-[50%] lg:max-w-[50%] flex flex-col justify-center">
              <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl">
                Make Money and Drive With Confidence
              </p>
              <p className="font-semibold text-sm md:text-xl pt-2 sm:pt-4 md:pt-6 lg:pt-8 max-w-[80%]">
                Drive on your terms and earn more with every trip. Whether it’s
                passengers or packages, our platform lets you maximize your
                earnings across all our services.
              </p>
              <div className="flex gap-2">
                <div>
                  <button className="p-4 text-white bg-[#18C4B8] hover:bg-[#12a096] font-redhat font-semibold text-sm md:text-xl flex items-center gap-2 rounded-lg mt-6 md:mt-8 lg:mt-12">
                    Become a partner today{" "}
                    <span className="inline-flex items-center text-white">
                      <FaArrowRight size={20} />
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
                See What Other Drivers Are Saying
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
                    <div className="px-3 py-6 md:px-6 md:py-8 h-[50vh] bg-white rounded-2xl flex flex-col justify-between">
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
          <FAQ questions={questions} />
        </div>
      )}
    </div>
    // {/* <Howitworks/> */}
    // {/* <Earning/> */}
    // <Drivesafety />
  );
};

export default Drivepage;
