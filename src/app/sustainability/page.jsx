"use client";
import Image from "next/image";
import whitearrow from "../../../public/Assets/whitearrow.svg";
import boldadvertise from "../../../public/Assets/boldadvertise.png";
import nature from "../../../public/Assets/nature.jpeg";
import bicycle from "../../../public/Assets/bicycle.jpeg";
import cyclesky from "../../../public/Assets/cycle-sky.png";
import cyclemobile from "../../../public/Assets/cycle-mobile.png";
import lanes from "../../../public/Assets/lanes.png";
import patternbg from "../../../public/Assets/pattern-bg.png";
import greenhouse from "../../../public/Assets/green-house.png";
import greenmarket from "../../../public/Assets/green-market.png";
import greenshake from "../../../public/Assets/green-shake.png";
import cycler from "../../../public/Assets/cycler.png";
import fast from "../../../public/Assets/fast-car.png";
import Footer from "../home/Footer";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Sustainability = () => {
  const [currentpage, setcurrentpage] = useState("default");
  return (
    <div className="">
      <div>
        <div className="relative">
          <div className="absolute w-full md:h-[90vh] h-[70vh] opacity-50 bg-black z-10"></div>
          <Image
            src={nature}
            alt="logistic"
            className="h-[70vh] md:h-[90vh] object-cover"
          />
          <div className="absolute top-0 w-full left-0 md:max-w-[50%] h-full flex flex-col justify-center pl-[5%] z-20">
            <p className="hidden md:block font-opensans font-bold text-[56px] leading-[70px] text-white">
              Sustainability at Bold
            </p>
            <p className="md:hidden font-opensans font-bold text-[35px] text-white">
              Sustainability <br /> at Bold
            </p>
            <p className="font-opensans w-full text-base md:text-xl md:font-semibold text-white pt-6">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod.
            </p>
          </div>
        </div>

        <div className="px-[5%] pt-8 pb-10 md:pt-20 md:pb-28">
          <p className="hidden md:block font-opensans font-bold md:text-[35px]">
            Sustainability at Bold{" "}
          </p>
          <p className="md:hidden font-opensans font-bold text-[20px]">
            Sustainability at Bold
          </p>
          <p className="hidden md:block pt-10 text-black text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="md:hidden pt-5 text-black text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-col md:flex-row px-[5%] justify-between gap-8 md:gap-4">
          <div className="p-4 rounded-lg shadow-xl md:shadow-md flex flex-col gap-4">
            <p className="font-semibold text-xl">Environmental</p>
            <p className="text-gray-400 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-xl md:shadow-md flex flex-col gap-4">
            <p className="font-semibold text-xl">Social impact</p>
            <p className="text-gray-400 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-xl md:shadow-md flex flex-col gap-4">
            <p className="font-semibold text-xl">Risk management</p>
            <p className="text-gray-400 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
        </div>

        <div className="hidden my-20 px-[5%] md:flex flex-col gap-4">
          <h2 className="font-semibold text-2xl md:text-center">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="md:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
          </p>
        </div>

        <div className="md:hidden mt-20 mb-10 px-[5%] flex flex-col gap-4">
          <h2 className="font-semibold text-2xl md:text-center">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="md:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex flex-col md:flex-row-reverse justify-between px-[5%] items-center gap-[5%]">
          <Image src={lanes} alt="driverapp" />
          <div className=" flex flex-col justify-center md:max-w-[50%]">
            <p className="font-bold text-xl pt-6 md:pt-0 md:text-4xl font-opensans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
            <p className="hidden md:block text-base md:text-xl text-black md:text-[#777777] pt-6 font-opensans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </p>
            <p className="md:hidden text-base text-black pt-6 font-opensans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row-reverse justify-between px-[5%] items-center pt-10 md:pt-20 md:pb-28 pb-10 md:gap-[5%] gap-8">
          <div className=" flex flex-col justify-center md:max-w-[50%]">
            <p className="hidden md:block font-bold md:text-4xl font-opensans">
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
            </p>
            <p className="font-bold md:hidden text-xl font-opensans">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
            <p className="hidden md:block text-xl text-[#777777] pt-6 font-opensans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </p>
            <div className="flex mt-6 flex-col md:gap-1 gap-10 md:mt-12">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-3">
                  <p className="text-white bg-black rounded-full text-[16px] md:text-[20px] font-extrabold px-3 py-1 h-fit">
                    1
                  </p>
                  <p className="font-bold text-[16px] md:text-[20px] ">
                    Net-zero carbon emission by 2040.
                  </p>
                </div>
                <div>
                  <p className="text-[#777777] ml-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-3">
                  <p className="text-white bg-black rounded-full text-[16px] md:text-[20px] flex h-fit font-extrabold px-3 py-1">
                    2
                  </p>
                  <p className="font-bold text-[16px] md:text-[20px] ">
                    100% renewable electricity in Bolt-controlled offices,
                    warehouses, charging docks and Bolt Market premises by 2025.
                  </p>
                </div>
                <div>
                  <p className="text-[#777777] ml-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-3">
                  <p className="text-white bg-black rounded-full text-[16px] md:text-[20px] h-fit font-extrabold px-3 py-1">
                    3
                  </p>
                  <p className="font-bold text-[16px] md:text-[20px] ">
                    90% of our waste finds a new use through circular economy
                    solutions by 2030.
                  </p>
                </div>
                <div>
                  <p className="text-[#777777] ml-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Image src={cyclesky} alt="bicycle sky" className="hidden md:block" />
          <Image
            src={cyclemobile}
            alt="bicycle mobile"
            className="rounded-md md:hidden"
          />
        </div>

        <div className="flex flex-row gap-2 px-[5%]">
          <div className="flex w-1/2 h-[20vh] md:h-[70vh] bg-gray-500  relative rounded-lg">
            <Image
              src={patternbg}
              alt="Patterned background"
              className="rounded-lg absolute w-full h-[20vh] md:h-[70vh]"
            />
            <div className="w-fit flex flex-col gap-3 md:gap-5 justify-center px-5 z-10">
              <p className="font-bold text-black text-[9px] md:text-[35px]">
                Lorem ipsum dolor sit amet, consectetur{" "}
              </p>
              <p className="text-black text-[5px] md:text-[20px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut
              </p>
            </div>
          </div>
          <div className="flex w-1/2 flex-col h-[20vh] md:h-[70vh] gap-2 md:overflow-clip">
            <Image src={greenhouse} alt="green house" className="rounded-lg" />
            <div className="flex flex-row gap-2 h-1/2">
              <Image
                src={greenmarket}
                alt="green market"
                className="w-[48%] h-full rounded-lg"
              />
              <Image
                src={greenshake}
                alt="green handshake"
                className="w-[48%] md:w-[50%] h-full rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="flex mt-20 relative h-[40vh] md:h-[90vh]">
          <div className="absolute w-full h-[40vh] md:h-[90vh] opacity-50 bg-black z-10"></div>
          <Image
            src={bicycle}
            alt="cycling"
            // style={{ maxHeight: 700 }}
            className="absolute h-[40vh] md:h-[90vh] object-cover"
          />
          <div className="md:max-w-[50%] pl-[5%] flex flex-col justify-center z-20">
            <p className="font-bold text-[20px] md:text-[50px] md:leading-[70px] text-white">
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
            </p>
            <p className="text-[14px] text-white md:text-[20px] mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </p>
            <button className="rounded-lg mt-3 md:mt-10 md:py-3 md:px-6 py-2 px-4 font-redhat text-base md:text-xl font-semibold  bg-[#18C4B8] hover:bg-[#12a096] text-white w-fit">
              Download App Now
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between px-[5%] items-center gap-[5%] md:pt-28 pt-16">
          <Image src={cycler} alt="driverapp" />
          <div className=" flex flex-col justify-center md:max-w-[50%]">
            <p className="font-bold text-xl md:text-4xl mt-4 md:mt-0 font-opensans">
              Sustainability in our value chain
            </p>
            <p className="md:text-xl text-base pt-6 font-opensans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </p>
            <div className="flex mt-6 flex-col gap-10 md:mt-12">
              <div className="flex flex-row gap-3 items-center">
                <p className="text-white bg-[#18C4B8] rounded-full text-[16px] md:text-[20px] font-extrabold md:px-3 md:py-0.5 h-fit px-2 ">
                  1
                </p>
                <p className="font-bold text-[16px] md:text-[20px] ">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>

              <div className="flex flex-row gap-3 items-center">
                <p className="text-white bg-[#18C4B8] rounded-full text-[16px] md:text-[20px]  font-extrabold md:px-3 md:py-0.5 h-fit px-2">
                  2
                </p>
                <p className="font-bold text-[16px] md:text-[20px] ">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>

              <div className="flex flex-row gap-3">
                <p className="text-white bg-[#18C4B8] rounded-full text-[16px] md:text-[20px]  font-extrabold md:px-3 md:py-0.5 h-fit px-2 items-center">
                  3
                </p>
                <p className="font-bold text-[16px] md:text-[20px] ">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>

              <div className="hidden md:flex flex-row gap-3">
                <p className="text-white bg-[#18C4B8] rounded-full text-[16px] md:text-[20px]  font-extrabold px-3 py-0.5 items-center">
                  4
                </p>
                <p className="font-bold text-[16px] md:text-[20px] ">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse justify-between px-[5%] items-center gap-[5%] pt-28">
          <Image src={fast} alt="driverapp" />
          <div className=" flex flex-col justify-center md:max-w-[50%]">
            <p className="font-bold text-xl md:text-4xl mt-4 md:mt-0 font-opensans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <p className="font-bold text-[14px] my-2 md:my-4 md:text-[20px[">
              Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do
            </p>
            <p className="hidden md:block text-xl text-[#777777] font-opensans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
            <p className="md:hidden text-base text-black pt-6 font-opensans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
            <button className=" bg-[#18C4B8] hover:bg-[#12a096]  font-redhat font-semibold w-fit px-4 py-2  text-base md:text-xl flex items-center gap-2 text-white rounded-lg mt-8">
              Download App{" "}
              <span className="inline-flex items-center">
                <FaArrowRight size={20} />
              </span>
            </button>
          </div>
        </div>

        <div className="md:px-[5%] py-28 ">
          <div className="flex flex-row md:rounded-3xl justify-between pl-[5%] items-center  bg-[#191919] ">
            <div className="md:max-w-[55%] flex flex-col justify-center">
              <p className="font-bold mt-3 md:mt-0 text-xl md:text-4xl text-white">
                Unlock the Power of Fast Deliveries. Download Our App Today!
              </p>
              <p className="md:font-semibold text-sm pt-2 md:pt-8 max-w-[70%] md:max-w-[80%] text-white">
                Experience hassle-free deliveries with just a tap. Our app gives
                you access to fast, reliable, and secure shipping solutions, all
                in one place. Whether you’re sending a package across town or
                the country, we&apos;ve got you covered. Download the BOLD app
                and unlock the power of seamless deliveries at your fingertips.
              </p>
              <div className="flex gap-2 flex-row justify-between mb-3">
                <div>
                  <button className="md:p-4 px-2 py-3 text-white font-redhat font-semibold text-base md:text-xl flex items-center gap-2 rounded-lg mt-6 bg-[#18C4B8] hover:bg-[#12a096]">
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
      </div>
    </div>
  );
};

export default Sustainability;
