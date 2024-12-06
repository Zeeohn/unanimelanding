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
        <Image src={trendingbanner} alt="logistic" className="max-h-[616px]" />
        <div className="absolute top-0 left-0 max-w-[55%] h-full flex flex-col justify-center pl-[5%] ">
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

      <div className="px-[5%] pb-20 pt-28 max-w-[50%]">
        <p className="font-bold text-4xl">How to join BOLD as Driver</p>
        <p className="text-xl pt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </div>

      <div>
        <div className="px-[5%] flex justify-between items-center">
          <div className="max-w-[50%]">
            <p className="font-opensans font-bold text-xl">
              Download the app and signup
            </p>
            <p className="pt-6 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <p className="pt-4 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
            </p>
            <button className="mt-6 bg-white font-redhat font-semibold text-xl flex items-center gap-2 rounded-lg  border border-white">
              Download App
              <span className="inline-flex items-center text-white">
                <Image src={btnrightarrow} alt="btnarrow " width={16}></Image>
              </span>
            </button>
          </div>
          <div className="border-r border-black w-[2%] h-auto self-stretch relative">
            <div className="h-6 w-6 rounded-full bg-black absolute top-0 -right-[50%]"></div>
          </div>
          <Image
            src={firststepdriver}
            alt="firststep"
            style={{ maxWidth: "40%" }}
          />
        </div>
        <div className="px-[5%] flex justify-between items-center">
          <div className="max-w-[50%]">
            <p className="font-opensans font-bold text-xl">
              Upload your documents
            </p>
            <p className="pt-6 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <p className="pt-4 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
            </p>
            <button className="mt-6 bg-white font-redhat font-semibold text-xl flex items-center gap-2 rounded-lg  border border-white underline">
              View list of important documents
              <span className="inline-flex items-center text-white">
                <Image src={btnrightarrow} alt="btnarrow " width={16}></Image>
              </span>
            </button>
          </div>
          <div className="border-r border-black w-[2%] h-auto self-stretch relative">
            <div className="h-6 w-6 rounded-full bg-black absolute top-0 -right-[50%]"></div>
          </div>
          <Image
            src={secondstepdriver}
            alt="firststep"
            style={{ maxWidth: "40%" }}
          />
        </div>
        <div className="px-[5%] flex justify-between items-center">
          <div className="max-w-[50%]">
            <p className="font-opensans font-bold text-xl">
              Get fleet assigned
            </p>
            <p className="pt-6 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <p className="pt-4 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
            </p>
          </div>
          <div className="border-r border-black w-[2%] h-auto self-stretch relative">
            <div className="h-6 w-6 rounded-full bg-black absolute top-0 -right-[50%]"></div>
          </div>
          <Image
            src={thirdstepdriver}
            alt="firststep"
            style={{ maxWidth: "40%" }}
          />
        </div>
        <div className="px-[5%] flex justify-between items-center">
          <div className="max-w-[50%]">
            <p className="font-opensans font-bold text-xl">
              Get fleet assigned
            </p>
            <p className="pt-6 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <p className="pt-4 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
            </p>
          </div>
          <div className=" w-[2%] h-auto self-stretch relative">
            <div className="h-6 w-6 rounded-full bg-black absolute top-0 -right-[50%]"></div>
          </div>
          <Image
            src={forthstepdriver}
            alt="firststep"
            style={{ maxWidth: "40%" }}
          />
        </div>
      </div>

      <div className="px-[5%] pt-20 ">
        <p className="font-opensans font-bold text-4xl">Having any trouble?</p>
        <div className=" flex gap-[5%] py-10">
          <div className="px-6 py-10 rounded-2xl border border-[#DDDDDD] w-1/2">
            <p className="font-redhat font-bold text-xl">
              Contact BOLD support
            </p>
            <div className="flex justify-between ">
              <p className="pt-4 text-xl font-opensans max-w-[75%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing ut labore et
                dolore magna aliqua.
              </p>
              <button>
                <Image src={btnrightarrow} alt="rightarrow" />
              </button>
            </div>
          </div>
          <div className="px-6 py-10 rounded-2xl border border-[#DDDDDD] w-1/2">
            <p className="font-redhat font-bold text-xl">Download the app</p>
            <div className="flex justify-between ">
              <p className="pt-4 text-xl font-opensans max-w-[75%]">
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

      <div className="flex justify-between px-[5%] items-center pb-28 pt-7 ">
        <div className="max-w-[50%] flex flex-col justify-center ">
          <p className="font-bold text-4xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <p className="font-bold text-xl pt-10 ">
            Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do
          </p>
          <p className="text-xl text-[#777777] pt-6 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
        </div>
        <Image src={driverlast} alt="driverapp" style={{ maxWidth: "45%" }} />
      </div>
    </div>
  );
};

export default Howitworks;
