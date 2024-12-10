import React from "react";
import trendingbanner from "../../../public/Assets/trendingbanner.png";
import Image from "next/image";
import btnrightarrow from "../../../public/Assets/buttunrightarrow.svg";
import whitearrow from "../../../public/Assets/whitearrow.svg";
import trendinglocationmobile from "../../../public/Assets/trendinglocationmobile.png";
import taximimgbg from "../../../public/Assets/taxiimage.jpeg";
import arrowicon from "../../../public/Assets/arrow.svg";
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
//   import "./slwiperslider.css";
import prevbtn from "../../../public/Assets/prevbtn.png";
import nextbtn from "../../../public/Assets/blacknextbtn.png";
import { useRef, useEffect, useState } from "react";
import trendinglocationslider from "../../../public/Assets/trendinglocationslider.jpeg";
import belowarrowtrending from "../../../public/Assets/belowarrowtrending.svg";
import flag from "../../../public/Assets/flag.svg";
import belowtrendingsec from "../../../public/Assets/belowtrendingsec.png";
import blogsback from "../../../public/Assets/blogsback.png";
import Footer from "../home/Footer";

const Trendinglocation = () => {
  const [isClient, setIsClient] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalBlogs = 4;
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalBlogs);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [totalBlogs]);

  useEffect(() => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.scrollWidth / totalBlogs;
      containerRef.current.scrollTo({
        left: activeIndex * scrollAmount,
        behavior: "smooth",
      });
    }
  }, [activeIndex, totalBlogs]);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div>
      <div className="relative">
        <Image
          src={trendingbanner}
          alt="logistic"
          className="h-[50vh] md:max-h-[616px]"
        />
        <div className="absolute top-0 left-0 md:max-w-[55%] h-full flex flex-col justify-center pl-[5%] ">
          <p className="font-redhat font-bold text-[24px] md:text-[40px] md:leading-[60px] text-white">
            Lorem ipsum amet, consectetur adipiscing elit dolor eiusmod tempor
          </p>
          <p className="font-opensans text-base md:text-xl text-[#BBBBBB] pt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dolor
            eiusmod tempor incididunt
          </p>
          <div className=" flex gap-6 pt-6">
            <button className=" text-white font-opensans font-semibold text-base md:text-2xl flex items-center gap-3 rounded-lg underline ">
              Browse more trending locations
              <span className="inline-flex items-center text-white">
                <Image src={whitearrow} alt="btnarrow " width={16}></Image>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-[5%] items-center md:py-28 py-12 ">
        <div className="md:max-w-[50%] flex flex-col justify-center ">
          <p className="font-bold text-xl md:text-4xl font-redhat">
            What so Trending in your location
          </p>
          <p className="text-lg md:text-2xl font-semibold pt-4 font-opensans">
            Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do
          </p>
          <p className="text-base md:text-xl  pt-8 font-opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
          <p className="text-base md:text-xl  pt-8 font-opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
        </div>
        <Image
          src={trendinglocationmobile}
          alt="driverapp"
          style={{ maxWidth: "45%" }}
          className="hidden md:block"
        />
      </div>

      <div className="bg-[#F3F3F3] px-[5%] pt-14 pb-20">
        <div className="flex justify-between gap-[20%] mb-10">
          <div className=" flex-grow flex gap-4 items-center">
            <p className="font-bold text-xl md:text-4xl">
              Popular destinations in Portugal
            </p>
            <Image src={flag} alt="flag" />
            <Image src={belowarrowtrending} alt="belowarrow" className="pt-6" />
          </div>
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
            className="h-full md:w-full px-8"
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            // spaceBetween={20}
            // slidesPerView={2.5}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 20 },
              480: { slidesPerView: 2, spaceBetween: 30 },
              640: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 3.5, spaceBetween: 40 },
            }}
          >
            {[...Array(10)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src={trendinglocationslider}
                    alt="productimg"
                    className="max-h-[300px] max-w-[200px] sm:max-h-full sm:max-w-full relative object-cover"
                    // style={{ maxHeight: 350 }}
                  />
                  <div className="absolute max-w-[200px] sm:w-full top-0 left-0 flex flex-col-reverse pt-6 justify-between h-full px-2 md:px-8 pb-10">
                    <p className="font-bold text-base md:text-2xl text-white ">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                    <div className="absolute top-1 -left-1 md:relative w-full flex justify-end">
                      <div className=" h-5 rounded-3xl bg-white p-3 py-4 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#EF1D1D]"></div>
                        <p className="font-opensans text-xl font-bold">
                          Lisbon
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

      <div className="flex justify-between px-[5%] items-center md:py-28 py-16">
        <Image
          src={belowtrendingsec}
          alt="driverapp"
          style={{ maxWidth: "45%" }}
          className="hidden md:block"
        />
        <div className="md:max-w-[50%] flex flex-col justify-center ">
          <p className="font-bold text-xl md:text-4xl font-redhat md:text-right">
            Find the top place to have a best cup of coffee and date yourself ☕
          </p>
          <p className="text-lg md:text-2xl font-semibold pt-4 font-opensans md:text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
          </p>
          <p className="text-base md:text-xl pt-4 md:pt-8 font-opensans md:text-right ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
          <p className="text-base md:text-xl pt-4 md:pt-8 font-opensans md:text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
        </div>
      </div>

      <div className=" w-full  px-[5%]">
        <p className="hidden md:flex font-redhat font-bold text-4xl pt-28 pb-10">
          Read our latest Blogs
        </p>
        <p className="md:hidden font-redhat font-bold text-xl pt-0 pb-4">
          Our Blogs
        </p>
        <p className="md:hidden font-redhat text-base  pb-6">
          Lorem ipsum dolor sit amet, consectetur
        </p>

        {/* Other Blogs */}
        <div className="flex w-full gap-4 mb-12 md:mb-28 min-h-[360px] overflow-x-auto">
          {[1, 2, 3, 4].map((blog, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[calc(100vw-4rem)] md:w-1/4 relative rounded-2xl overflow-hidden 
                  hover:w-[calc(100vw-2rem)] md:hover:w-1/2 
                  transition-all duration-300"
            >
              <Image
                src={blogsback}
                alt="blogsback"
                className="w-full h-full object-center object-cover"
              />
              <div className="absolute w-full h-full top-0 left-0 px-8 pb-14 flex justify-end flex-col">
                <p className="text-white text-xl md:group-hover:text-2xl transition-all duration-300 font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trendinglocation;
