import React from "react";
import trendingbanner from "../../../public/Assets/trendingbanner.png";
import Image from "next/image";
import whitearrow from "../../../public/Assets/whitearrow.svg";
import btnrightarrow from "../../../public/Assets/buttunrightarrow.svg";
import firststepdriver from "../../../public/Assets/firststepdriver.png";
import secondstepdriver from "../../../public/Assets/secondstepdriver.png";
import thirdstepdriver from "../../../public/Assets/thirdstepdriver.png";
import forthstepdriver from "../../../public/Assets/forthstepdriver.png";
import intercitybelowtwo from "../../../public/Assets/intercitybelowtwo.png";
import driverlast from "../../../public/Assets/driverlast.png";
import Footer from "../home/Footer";

const Howitworks = () => {
  return (
    <div>
      <div className="relative">
        <Image src={trendingbanner} alt="logistic" className="min-h-[480px] max-h-[648px] w-full object-cover object-center" />
        <div className="absolute top-0 left-0 md:max-w-[75%] lg:max-w-[55%] h-full flex flex-col justify-center px-[5%] md:px-0 md:pl-[5%] ">
          <p className="font-redhat font-bold text-4xl lg:text-[40px] lg:leading-[60px] text-white md:pt-6">
            Lorem ipsum amet, consectetur adipiscing elit dolor eiusmod tempor
            incididunt
          </p>
          <p className="font-opensans text-2xl md:text-xl text-[#BBBBBB] pt-8 md:pt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dolor
            eiusmod tempor incididunt
          </p>
          <div className=" flex gap-6 pt-8 md:pt-6">
            <button className=" text-white font-opensans font-semibold text-base md:text-xl lg:text-2xl flex items-center gap-3 rounded-lg underline ">
            Lorem ipsum dolor sit amet
              <span className="inline-flex items-center text-white">
                <Image src={whitearrow} alt="btnarrow " width={16}></Image>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="px-[5%] py-12 md:pb-16 md:pt-20 lg:pb-20 lg:pt-28 lg:max-w-[70%] xl:max-w-[50%]">
        <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl">How to join BOLD as Driver</p>
        <p className="text-sm md:text-base lg:text-xl pt-4 md:pt-6 lg:pt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </div>

      <div className="flex flex-col space-y-12 md:space-y-0">
        <div className="px-[5%] flex md:flex-row gap-2 flex-col justify-between md:items-center">
          <div className="md:max-w-[50%] md:py-10 ">
            <p className="font-opensans font-bold text-sm md:text-base lg:text-xl">
              Download the app and signup
            </p>
            <p className=" pt-3 md:pt-4 lg:pt-6 text-sm md:text-base lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <p className="pt-2 md:pt-4 text-sm md:text-base lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
            </p>
            <button className="mt-2 md:mt-6 bg-white font-redhat font-semibold text-sm md:text-base lg:text-xl flex items-center gap-2 rounded-lg  border border-white">
              Download App
              <span className="inline-flex items-center text-white">
                <Image src={btnrightarrow} alt="btnarrow " className="w-3 md:w-4"></Image>
              </span>
            </button>
          </div>
          <div className="border-r border-black w-[2%] h-auto self-stretch relative md:block hidden">
            <div className="h-6 w-6 rounded-full bg-black absolute top-0 -right-[50%]"></div>
          </div>
          <Image
            src={firststepdriver}
            alt="firststep"
            className="w-full md:w-[40%] object-cover object-center"
          />
        </div>
        <div className="px-[5%] flex md:flex-row gap-2 flex-col justify-between md:items-center">
          <div className="md:max-w-[50%] md:py-10 ">
            <p className="font-opensans font-bold text-sm md:text-base lg:text-xl">
            Upload your documents
            </p>
            <p className=" pt-3 md:pt-4 lg:pt-6 text-sm md:text-base lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <p className="pt-2 md:pt-4 text-sm md:text-base lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
            </p>
            <button className="mt-2 md:mt-6 bg-white font-redhat font-semibold text-sm md:text-base lg:text-xl flex items-center gap-2 rounded-lg  border border-white">
            View list of important documents
              <span className="inline-flex items-center text-white">
                <Image src={btnrightarrow} alt="btnarrow " className="w-3 md:w-4"></Image>
              </span>
            </button>
          </div>
          <div className="border-r border-black w-[2%] h-auto self-stretch relative md:block hidden">
            <div className="h-6 w-6 rounded-full bg-black absolute top-0 -right-[50%]"></div>
          </div>
          <Image
            src={secondstepdriver}
            alt="firststep"
            className="w-full md:w-[40%] object-cover object-center"
          />
        </div>
        <div className="px-[5%] flex md:flex-row gap-2 flex-col justify-between md:items-center">
          <div className="md:max-w-[50%] md:py-10 ">
            <p className="font-opensans font-bold text-sm md:text-base lg:text-xl">
            Get fleet assigned
            </p>
            <p className=" pt-3 md:pt-4 lg:pt-6 text-sm md:text-base lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <p className="pt-2 md:pt-4 text-sm md:text-base lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
            </p>
          </div>
          <div className="border-r border-black w-[2%] h-auto self-stretch relative md:block hidden">
            <div className="h-6 w-6 rounded-full bg-black absolute top-0 -right-[50%]"></div>
          </div>
          <Image
            src={thirdstepdriver}
            alt="firststep"
            className="w-full md:w-[40%] object-cover object-center"
          />
        </div>
        <div className="px-[5%] flex md:flex-row gap-2 flex-col justify-between md:items-center">
          <div className="md:max-w-[50%] md:py-10 ">
            <p className="font-opensans font-bold text-sm md:text-base lg:text-xl">
            Get fleet assigned
            </p>
            <p className=" pt-3 md:pt-4 lg:pt-6 text-sm md:text-base lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <p className="pt-2 md:pt-4 text-sm md:text-base lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
            </p>
          </div>
          <div className=" w-[2%] h-auto self-stretch relative md:block hidden">
            <div className="h-6 w-6 rounded-full bg-black absolute top-0 -right-[50%]"></div>
          </div>
          <Image
            src={forthstepdriver}
            alt="firststep"
            className="w-full md:w-[40%] object-cover object-center"
          />
        </div>
      </div>

      <div className="px-[5%] pt-12 md:pt-16 lg:pt-20 ">
        <p className="font-opensans font-bold text-base md:text-2xl lg:text-4xl">Having any trouble?</p>
        <div className=" flex flex-col md:flex-row gap-4 md:gap-[5%] pt-6 md:py-10">
          <div className="py-5 px-3 md:px-6 md:py-10 rounded-2xl border border-[#DDDDDD] md:w-1/2">
            <p className="font-redhat font-bold  text-sm md:text-base lg:text-xl">
              Contact BOLD support
            </p>
            <div className="flex justify-between ">
              <p className="pt-2 md:pt-4  text-sm md:text-base lg:text-xl font-opensans max-w-[75%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing ut labore et
                dolore magna aliqua.
              </p>
              <button>
                <Image src={btnrightarrow} alt="rightarrow" />
              </button>
            </div>
          </div>
          <div className="py-5 px-3 md:px-6 md:py-10 rounded-2xl border border-[#DDDDDD] md:w-1/2">
            <p className="font-redhat font-bold  text-sm md:text-base lg:text-xl">
            Download the app
            </p>
            <div className="flex justify-between ">
              <p className="pt-2 md:pt-4  text-sm md:text-base lg:text-xl font-opensans max-w-[75%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing ut labore et
                dolore magna aliqua.
              </p>
              <button>
                <Image src={btnrightarrow} alt="rightarrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-12 md:gap-6 md:flex-row md:justify-between px-[5%] md:items-center py-12 md:pt-7 md:pb-20 lg:pb-28">
    
        <div className="md:max-w-[50%] flex flex-col justify-center">
          <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <p className="font-semibold text-sm md:text-xl pt-2 md:pt-4 lg:pt-8">
            Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do
          </p>
          <p className="text-sm md:text-xl pt-2 md:pt-4 lg:pt-6 text-[#777777]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
          <div className="flex gap-2">
            <div>
            </div>
          </div>
        </div>
        <Image
          src={driverlast}
          alt="driverapp"
          className=" rounded-2xl w-full md:max-w-[45%] object-cover object-center" 
        />
      </div>
    </div>
  );
};

export default Howitworks;
