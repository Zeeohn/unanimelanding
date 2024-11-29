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

const Intercitypage = () => {
  const [isClient, setIsClient] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div>
      <div className="bg-[#F3F3F3] px-[5%] pt-14 pb-20 flex justify-between gap-[5%] items-center">
        <div className="max-w-[53%]">
          <p className="font-bold text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <p className="text-xl pt-8 text-[#777777] max-w-[70%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>
          <p className="text-xl pt-4 text-[#777777]  max-w-[70%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex gap-2">
            <div className="flex pt-10 items-center">
              <p className="text-2xl">Ratings</p>
              <div className="flex  items-center pl-3 ">
                <Image src={yellowstr} alt="yellostr" height={16} />
                <p className="text-lg"> 4.8</p>
              </div>
              <Image
                src={manyusers}
                alt="manyusers"
                height={40}
                className="pl-8"
              />
            </div>
            <Image src={curlyarrow} alt="curlyarrw" className="" />
          </div>
        </div>
        <Image src={intercityimage} alt="intercity" />
      </div>
      <div className="px-[5%] mb-28 gap-[8%] flex items-center">
        <div className="w-[70%]">
          <Image
            src={boldintercity}
            alt="driverapp"
            style={{ width: "100%" }}
          />
        </div>
        <div className="pt-20">
          <p className="font-bold text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <div className="flex gap-6 justify-start pt-14">
            <div className="">
              <Image src={one} alt="one" width={32} height={32} />
            </div>
            <div className="">
              <p className="font-bold text-xl">
                Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do
              </p>
              <p className="pt-4 text-[#777777] text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-6 justify-start pt-14">
            <div className="">
              <Image src={two} alt="one" width={32} height={32} />
            </div>
            <div className="">
              <p className="font-bold text-xl">
                Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do
              </p>
              <p className="pt-4 text-[#777777] text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-6 justify-start pt-14">
            <div className="">
              <Image src={three} alt="one" width={32} height={32} />
            </div>
            <div className="">
              <p className="font-bold text-xl">
                Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do
              </p>
              <p className="pt-4 text-[#777777] text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[5%] ">
        <div className="flex rounded-3xl justify-between pl-[5%] items-center  bg-[#191919] ">
          <div className="max-w-[55%] flex flex-col justify-center">
            <p className="font-bold text-4xl text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p className="font-semibold text-xl pt-8 max-w-[80%] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
            <div className="flex gap-2">
              <div>
                <button className="p-4 text-white font-redhat font-semibold text-xl flex items-center gap-2 rounded-lg mt-12 border border-white">
                  Download App
                  <span className="inline-flex items-center text-white">
                    <Image src={whitearrow} alt="btnarrow " width={16}></Image>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <Image
            src={boldadvertise}
            alt="driverapp"
            style={{ maxWidth: "50%" }}
          />
        </div>
      </div>

      <div className="flex justify-between px-[5%] items-center py-28 ">
        <div className="max-w-[50%] flex flex-col justify-center">
          <p className="font-bold text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <p className="font-bold text-xl pt-8">
            Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do
          </p>
          <p className="text-xl text-[#777777] pt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
          <div className="flex gap-2">
            <div>
              <button className="py-3 px-6 text-white bg-black font-redhat font-semibold text-xl flex items-center gap-2 rounded-lg mt-12">
                Download App{" "}
                <span className="inline-flex items-center text-white">
                  <Image src={whitearrow} alt="btnarrow " width={16}></Image>
                </span>
              </button>
            </div>
          </div>
        </div>
        <Image
          src={intercitybelowone}
          alt="driverapp"
          style={{ maxWidth: "45%" }}
        />
      </div>

      <div className="flex justify-between px-[5%] items-center py-28 ">
        <Image
          src={intercitybelowtwo}
          alt="driverapp"
          style={{ maxWidth: "45%" }}
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed incididunt ut labore et dolore magna aliqua. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit, sed
                      incididunt ut labore et dolore magna aliqua.{" "}
                    </p>
                    <div className="w-10">
                      <Image src={doublequotes} alt="doublequoes" />
                    </div>
                  </div>

                  <div className="mt-12 flex gap-6">
                    <Image src={reviewer} alt="reviewer" width={64} />
                    <div>
                      <p className="font-bold text-xl">Carter Carder</p>
                      <div className="mt-2 flex gap-2 items-center">
                        <Image src={yellowstr} alt="yellowstr" />
                        <p className="font-semibold text-xl">
                          4.8
                          <span className="font-normal text-[#777777]">
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
  );
};

export default Intercitypage;
