"use client";
import searchicon from "../../../public/Assets/searchicon.svg";
import Image from "next/image";
import downloadapp from "../../../public/Assets/downloadbold.png";
import fillindetails from "../../../public/Assets/fillindetails.png";
import pickuppackage from "../../../public/Assets/pickuppackage.png";
import rightdelivery from "../../../public/Assets/rightdelivery.png";
import boldadvertise from "../../../public/Assets/boldadvertise.png";
import FAQ from "../home/FAQ";
import Footer from "../home/Footer";
import whitearrow from "../../../public/Assets/whitearrow.svg";
import Trackdetails from "./Trackdetails";

const Packagepage = ({ setcurrentpage }) => {
  return (
    <div>
      <div className="bg-black px-[5%] flex items-center min-h-[560px]">
        <div className="">
          <p className="font-redhat font-bold text-2xl md:text-5xl text-white">
            BOLD <span className="font-normal">LOGISTICS</span>
          </p>
          <p className="font-redhat font-semibold text-2xl md:text-5xl text-white pt-4">
            Package delivery
          </p>
          <p className="font-opensans text-base md:text-xl pt-6 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <div className="mt-12 flex rounded-lg overflow-hidden w-[80vw] md:w-fit">
            <div className="p-4 flex gap-4 items-center bg-white">
              <Image src={searchicon} alt="searchicon" />{" "}
              <input placeholder="Enter tracking id" />
            </div>
            <button
              className="bg-[#18C4B8] font-semibold text-xl px-[18px] text-white"
              onClick={() => setcurrentpage("trackdetail")}
            >
              Track
            </button>
          </div>
        </div>
      </div>

      <div className="py-20 px-[8%]">
        <div className="md:max-w-[50%] mx-auto">
          <p className="md:flex hidden font-opensans font-bold text-4xl md:text-center">
            How simple you ship with BOLD
          </p>
          <p className="md:hidden font-opensans font-bold text-xl md:text-4xl md:text-center">
            How it works
          </p>
          <p className="font-opensans text-base md:text-xl pt-6 md:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex md:flex-row flex-col items-center gap-8 justify-between pt-20">
          <div className="md:max-w-[14%]">
            <div className="md:mx-auto w-[65%]">
              <Image src={downloadapp} alt="downloadapp" />
            </div>
            <p className="font-opensans font-bold text-base md:text-xl pt-4 ">
              Download Bold app
            </p>
          </div>

          <div className="md:max-w-[14%]">
            <div className="md:mx-auto w-[65%]">
              <Image src={fillindetails} alt="downloadapp" />
            </div>
            <p className="font-opensans font-bold text-base md:text-xl pt-4 ">
              Fill in your details
            </p>
          </div>

          <div className="md:max-w-[14%]">
            <div className="md:mx-auto  md:w-[65%] w-[60%]">
              <Image src={pickuppackage} alt="downloadapp" />
            </div>
            <p className="font-opensans font-bold text-base md:text-xl pt-4 ">
              We pickup your package
            </p>
          </div>

          <div className="md:max-w-[14%]">
            <div className="md:mx-auto md:w-[65%] w-[60%]">
              <Image src={rightdelivery} alt="downloadapp" />
            </div>
            <p className="font-opensans font-bold text-base md:text-xl pt-4 ">
              It is smoothly delivered
            </p>
          </div>
        </div>
      </div>

      <div className="md:px-[5%] pb-28 ">
        <div className="flex flex-row md:rounded-3xl justify-between pl-[5%] items-center  bg-[#191919] ">
          <div className="md:max-w-[55%] flex flex-col justify-center">
            <p className="font-bold mt-3 md:mt-0 text-xl md:text-4xl text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p className="md:font-semibold text-sm pt-2 md:pt-8 max-w-[70%] md:max-w-[80%] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
            <div className="flex gap-2 flex-row justify-between mb-3">
              <div>
                <button className="md:p-4 px-2 py-3 text-white font-redhat font-semibold text-base md:text-xl flex items-center gap-2 rounded-lg mt-6 border border-white">
                  Download App
                  <span className="inline-flex items-center text-white">
                    <Image src={whitearrow} alt="btnarrow " width={16}></Image>
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

      <FAQ />
    </div>
  );
};

export default Packagepage;
