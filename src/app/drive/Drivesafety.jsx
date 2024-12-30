"use client";
import trendingbanner from "../../../public/Assets/trendingbanner.png";
import Image from "next/image";
import whitearrow from "../../../public/Assets/whitearrow.svg";
import blackstr from "../../../public/Assets/blackstr.svg";
import blacktick from "../../../public/Assets/blacktick.svg";
import documents from "../../../public/Assets/documents.svg";
import Drivesafe from "../../../public/Assets/drivesafety.png";
import yellowstr from "../../../public/Assets/yellowstr.svg";
import reviewer from "../../../public/Assets/reviewer.png";
import doublequotes from "../../../public/Assets/doublequotes.svg";
import prevbtn from "../../../public/Assets/prevbtn.png";
import nextbtn from "../../../public/Assets/blacknextbtn.png";
import { useRef, useEffect, useState } from "react";
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
import FAQ from "../home/FAQ";
import Footer from "../home/Footer";
import driverhandapp from "../../../public/Assets/driverhandapp.png";
import safety from"../../../public/Assets/safety.png";
import btnrightarrow from "../../../public/Assets/buttunrightarrow.svg";
import safe from "../../../public/Assets/drive-safe.png";
import "../swiperslider.css";

const Drivesafety = () => {
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

  return (
    <div>
      <div className="relative">
        <Image
          src={safety}
          alt="logistic"
          className="min-h-[480px] max-h-[616px] w-full object-cover object-center"
        />
        <div className="absolute top-0 right-0 md:max-w-[75%] lg:max-w-[55%] h-full flex flex-col justify-center px-[5%] md:px-0 md:pr-[5%] ">
          <p className="font-redhat font-bold text-4xl lg:text-[40px] lg:leading-[60px] text-white md:pt-6">
            Your safety drives us
          </p>
          <p className="font-opensans text-2xl md:text-xl text-[#BBBBBB] pt-8 md:pt-6">
            Our goal is to help you move freely, maximize your time, and stay
            connected to the people and places that matter most. That’s why we
            prioritize safety standards and develop technology designed to
            minimize risks.
          </p>
          {/* <div className=" flex gap-6 pt-8 md:pt-6">
            <button className=" text-white font-opensans font-semibold text-base md:text-xl lg:text-2xl flex items-center gap-3 rounded-lg underline ">
              Browse more trending locations
              <span className="inline-flex items-center text-white">
                <Image src={whitearrow} alt="btnarrow " width={16}></Image>
              </span>
            </button>
          </div> */}
        </div>
      </div>

      <div className="px-[5%] md:pl-[5%] pt-12 pb-8 md:py-16 lg:py-[88px] md:max-w-[70%]">
        <p className="font-redhat font-bold text-xl md:text-3xl lg:text-[40px] lg:leading-[60px] ">
          Lorem ipsum amet, consectetur adipiscing elit dolor eiusmod tempor
          incididunt
        </p>
        <p className="font-opensans text-sm md:text-xl text-[#777777] pt-2 md:pt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dolor
          eiusmod tempor incididunt
        </p>
      </div>

      <div className="flex gap-4 md:gap-6 lg:gap-12 xl:gap-20 md:flex-row flex-col md:justify-between md:mt-10 pb-12 md:pb-16 lg:pb-[88px] px-[5%]">
        <div className="space-y-2 md:space-y-0 lg:min-w-[25%]">
          <Image src={blackstr} alt="blackstr" className="w-6 md:w-8 lg:w-12" />
          <p className="font-semibold text-base md:text-xl lg:text-2xl md:pt-4 lg:pt-8">
            In-App Safety Features
          </p>
          <p className="text-sm sm:text-base md:pt-2">
            Share your trip details with loved ones, track your ride in real
            time, and enjoy the peace of mind our technology provides.
          </p>
        </div>
        <div className="space-y-2 md:space-y-0 lg:min-w-[25%]">
          <Image
            src={documents}
            alt="blackstr"
            className="w-6 md:w-8 lg:w-12"
          />
          <p className="font-semibold text-base md:text-xl lg:text-2xl md:pt-4 lg:pt-8">
            A Community Built on Inclusivity{" "}
          </p>
          <p className="text-sm sm:text-base md:pt-2">
            Millions of riders and drivers follow shared community guidelines,
            fostering accountability and promoting the right actions.
          </p>
        </div>
        <div className="space-y-2 md:space-y-0 lg:min-w-[25%]">
          <Image
            src={blacktick}
            alt="blackstr"
            className="w-6 md:w-8 lg:w-12"
          />
          <p className="font-semibold text-base md:text-xl lg:text-2xl md:pt-4 lg:pt-8">
            Round-the-Clock Support
          </p>
          <p className="text-sm sm:text-base md:pt-2">
            Our dedicated team is available 24/7 to assist you. Whether you have
            questions or safety concerns, you can reach them anytime directly
            through the app.
          </p>
        </div>
        {/*<div className="space-y-2 md:space-y-0 lg:min-w-[25%]">
          <Image src={blackstr} alt="blackstr" className="w-6 md:w-8 lg:w-12" />
          <p className="font-semibold text-base md:text-xl lg:text-2xl md:pt-4 lg:pt-8">Basic requirements</p>
          <p className="text-sm sm:text-base md:pt-2">
            . Lorem Ipsum is not simply random text.
          </p>
          <p className="text-sm sm:text-base md:pt-2">
            . Lorem Ipsum is not simply random text.
          </p>
        </div>
        <div className="space-y-2 md:space-y-0 lg:min-w-[25%]">
          <Image src={documents} alt="blackstr" className="w-6 md:w-8 lg:w-12" />
          <p className="font-semibold text-base md:text-xl lg:text-2xl md:pt-4 lg:pt-8">Documents</p>
          <p className="text-sm sm:text-base md:pt-2">
            . Lorem Ipsum is not simply random text.
          </p>
          <p className="text-sm sm:text-base md:pt-2">
            . Lorem Ipsum is not simply random text.
          </p>
        </div>
        <div className="space-y-2 md:space-y-0 lg:min-w-[25%]">
          <Image src={blacktick} alt="blackstr" className="w-6 md:w-8 lg:w-12" />
          <p className="font-semibold text-base md:text-xl lg:text-2xl md:pt-4 lg:pt-8">Sign up process</p>
          <p className="text-sm sm:text-base md:pt-2">
            . Lorem Ipsum is not simply random text.
          </p>
          <p className="text-sm sm:text-base md:pt-2">
            . Lorem Ipsum is not simply random text.
          </p>
        </div>*/}
      </div>
      {/* <div className="flex justify-between mt-10  px-[5%]">
        <div className="">
          <Image src={blackstr} alt="blackstr" width={48} />
          <p className="font-semibold text-2xl pt-8">Basic requirements</p>
          <p className="text-base pt-2">
            . Lorem Ipsum is not simply random text.
          </p>
          <p className="text-base pt-2">
            . Lorem Ipsum is not simply random text.
          </p>
        </div>
        <div className="">
          <Image src={documents} alt="blackstr" width={48} />
          <p className="font-semibold text-2xl pt-8">Documents</p>
          <p className="text-base pt-2">
            . Lorem Ipsum is not simply random text.
          </p>
          <p className="text-base pt-2">
            . Lorem Ipsum is not simply random text.
          </p>
        </div>
        <div className="">
          <Image src={blacktick} alt="blackstr" width={48} />
          <p className="font-semibold text-2xl pt-8">Sign up process</p>
          <p className="text-base pt-2">
            . Lorem Ipsum is not simply random text.
          </p>
          <p className="text-base pt-2">
            . Lorem Ipsum is not simply random text.
          </p>
        </div>
      </div> */}

      <div className="flex lg:flex-row flex-col px-[5%] pt-0 pb-12 lg:pb-28 gap-[3%] xl:gap-[5%] justify-between">
        <div className="lg:block lg:flex-1 hidden rounded-2xl overflow-hidden max-w-[40%]">
          <Image
            src={Drivesafe}
            alt="earning"
            style={{ width: "100%", height: "100%" }}
            className="object-cover object-center"
          />
        </div>
        <div className="flex-1 lg:px-12 lg:py-16 flex flex-col justify-center">
          <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl">
            Tips to Stay Safe
          </p>
          <Image
            src={Drivesafe}
            alt="earning"
            style={{ width: "100%", height: "100%" }}
            className="object-cover object-center lg:hidden pt-6 md:pt-8"
          />
          <div className="flex flex-wrap justify-between pt-2 md:pt-4">
            <div className="flex gap-4 pt-4 md:pt-6 lg:w-[45%]">
              <div className="text-white text-center bg-[#18C4B8] w-6 px-2 rounded-full h-fit">
                1
              </div>
              <div className="">
                <p className=" text-sm md:text-base lg:text-xl font-semibold font-opensans text-[#2F313F] ">
                  Pick up the correct rider
                </p>
                <p className="font-opensans  text-sm md:text-base text-[#121D2B99] pt-2">
                  Make sure you verify the identity of the passenger you’re
                  picking up.{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-4 pt-4 md:pt-6 lg:w-[45%]">
              <div className="text-white text-center bg-[#18C4B8] w-6 px-2 rounded-full h-fit">
                2
              </div>
              <div className="">
                <p className=" text-sm md:text-base lg:text-xl font-semibold font-opensans text-[#2F313F] ">
                  Remain professional
                </p>
                <p className="font-opensans  text-sm md:text-base text-[#121D2B99] pt-2">
                  Ensure you remain professional and treat passengers with
                  respect and courtesy.{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-4 pt-4 md:pt-6 lg:w-[45%]">
              <div className="text-white text-center bg-[#18C4B8] w-6 px-2 rounded-full h-fit">
                3
              </div>
              <div className="">
                <p className=" text-sm md:text-base lg:text-xl font-semibold font-opensans text-[#2F313F] ">
                  Focus on your driving
                </p>
                <p className="font-opensans  text-sm md:text-base text-[#121D2B99] pt-2">
                  Focus on what matters most. Drive and give your passenger an
                  exotic experience.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F3F3F3] px-[5%] py-6 md:pt-14 md:pb-20">
        <div className="flex justify-between gap-[20%] mb-6 md:mb-10">
          <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl md:max-w-[50%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed incididunt ut labore et dolore magna aliqua.
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
      {/* <div className="px-[5%] pb-28 ">
        <div className="flex rounded-3xl justify-between pl-[5%] items-center  bg-[#191919] ">
          <div className="max-w-[55%] flex flex-col justify-center">
            <p className="font-bold text-4xl text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum
              dolor sit.
            </p>
            <p className="font-semibold text-xl pt-8  text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
            <div className="flex gap-2 ">
              <div>
                <button className="px-6 py-3 bg-white font-redhat font-semibold text-xl flex items-center gap-2 rounded-lg mt-12 border border-white">
                  Get the app
                  <span className="inline-flex items-center text-white">
                    <Image
                      src={btnrightarrow}
                      alt="btnarrow "
                      width={16}
                    ></Image>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <Image
            src={driverhandapp}
            alt="driverapp"
            style={{ maxWidth: "50%" }}
          />
        </div>
      </div> */}
      <div className="md:px-[5%] mt-10 ">
        <div className="flex md:rounded-3xl justify-between pl-[5%] items-center  bg-[#191919] ">
          <div className="md:max-w-[55%] flex flex-col justify-center py-6">
            <p className="font-bold text-lg font-opensans md:text-3xl lg:text-4xl text-white">
              Become your own boss today!
            </p>
            <p className="font-semibold text-xs md:text-base lg:text-xl pt-2 md:pt-4 lg:pt-8 max-w-[80%] text-white">
              Get the Bold app to start driving and earning on your own terms.
            </p>
            <div className="flex gap-2">
              <div>
                <button className="p-2 md:p-4 text-white font-redhat font-semibold text-sm md:text-lg lg:text-xl flex items-center gap-2 rounded-lg mt-4  md:mt-8 lg:mt-12  bg-[#18C4B8] hover:bg-[#12a096] ">
                  Download Now
                  <span className="inline-flex items-center text-white">
                    <Image src={whitearrow} alt="btnarrow " width={16}></Image>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-[35%] md:w-[45%] flex items-end flex-col">
            <Image src={driverhandapp} alt="driverapp" className="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse gap-2 md:gap-6 md:flex-row-reverse md:justify-between px-[5%] md:items-center pt-12 md:pt-20 lg:pt-28 md:pb-12 lg:pb-20 ">
        <div className="md:max-w-[60%] flex flex-col justify-center">
          <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          <p className="text-sm md:text-lg pt-2 md:pt-4 lg:pt-6 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis.
          </p>
        </div>
        <Image
          src={safe}
          alt="driverapp"
          className=" rounded-2xl w-full md:max-w-[35%] object-cover object-center"
        />
      </div>
      {/* <FAQ /> */}
    </div>
  );
};

export default Drivesafety;
