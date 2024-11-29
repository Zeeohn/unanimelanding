"use client";
import trendingbanner from "../../../public/Assets/trendingbanner.jpeg";
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
import btnrightarrow from "../../../public/Assets/buttunrightarrow.svg";

const Drivesafety = () => {
  const [isClient, setIsClient] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <div className="relative">
        <Image src={trendingbanner} alt="logistic" className="max-h-[616px]" />
        <div className="absolute top-0 right-0 max-w-[55%] h-full flex flex-col justify-center pr-[5%] ">
          <p className="font-redhat font-bold text-[40px] leading-[60px] text-white">
            Lorem ipsum amet, consectetur adipiscing elit dolor eiusmod tempor
            incididunt
          </p>
          <p className="font-opensans text-xl text-[#BBBBBB] pt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dolor
            eiusmod tempor incididunt
          </p>
          <div className=" flex gap-6 pt-6">
            <button className=" text-white font-opensans font-semibold text-2xl flex items-center gap-3 rounded-lg underline ">
              Browse more trending locations
              <span className="inline-flex items-center text-white">
                <Image src={whitearrow} alt="btnarrow " width={16}></Image>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="pl-[5%] py-20 max-w-[70%]">
        <p className="font-redhat font-bold text-[40px] leading-[60px] ">
          Lorem ipsum amet, consectetur adipiscing elit dolor eiusmod tempor
          incididunt
        </p>
        <p className="font-opensans text-xl text-[#777777] pt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dolor
          eiusmod tempor incididunt
        </p>
      </div>

      <div className="flex justify-between mt-10 pb-20 px-[5%]">
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
      </div>
      <div className="flex justify-between mt-10  px-[5%]">
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
      </div>

      <div className="flex px-[5%] py-28 gap-[5%] justify-between">
        <div className="flex-1 rounded-2xl overflow-hidden max-w-[40%]">
          <Image
            src={Drivesafe}
            alt="earning"
            style={{ width: "100%", height: "100%" }}
            className="object-cover object-center"
          />
        </div>
        <div className="flex-1 px-12 py-16 flex flex-col justify-center">
          <p className="font-bold text-4xl font-opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <div className="flex flex-wrap justify-between pt-4">
            <div className="flex gap-4 pt-6 w-[45%]">
              <div className="text-white text-center bg-[#18C4B8] w-6 px-2 rounded-full h-fit">
                1
              </div>
              <div className="">
                <p className="text-xl font-semibold font-opensans text-[#2F313F] ">
                  Pick up the correct rider
                </p>
                <p className="font-opensans text-[#121D2B99] pt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-4 pt-6 w-[45%]">
              <div className="text-white text-center bg-[#18C4B8] w-6 px-2 rounded-full h-fit">
                2
              </div>
              <div className="">
                <p className="text-xl font-semibold font-opensans text-[#2F313F] ">
                  Remain professional
                </p>
                <p className="font-opensans text-[#121D2B99] pt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-4 pt-6 w-[45%]">
              <div className="text-white text-center bg-[#18C4B8] w-6 px-2 rounded-full h-fit">
                3
              </div>
              <div className="">
                <p className="text-xl font-semibold font-opensans text-[#2F313F] ">
                  Focus on your driving
                </p>
                <p className="font-opensans text-[#121D2B99] pt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod{" "}
                </p>
              </div>
            </div>
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
      <div className="px-[5%] pb-28 ">
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
      </div>
      <FAQ />
    </div>
  );
};

export default Drivesafety;
