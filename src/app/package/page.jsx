"use client";
import searchicon from "../../../public/Assets/searchicon.svg";
import Image from "next/image";
import downloadapp from "../../../public/Assets/downloadbold.png";
import fillindetails from "../../../public/Assets/fillindetails.png";
import pickuppackage from "../../../public/Assets/pickuppackage.png";
import rightdelivery from "../../../public/Assets/rightdelivery.png";
import boldadvertise from "../../../public/Assets/boldadvertise.png";
import track from "../../../public/Assets/track-van.png";
import FAQ from "../home/FAQ";
import Footer from "../home/Footer";
import whitearrow from "../../../public/Assets/whitearrow.svg";
import Trackdetails from "./Trackdetails";

const Packagepage = ({ setcurrentpage }) => {
  return (
    <div>
      <div className=" flex items-center min-h-[560px]">
        <Image
          src={track}
          alt="bold van"
          className="h-[70vh] -mt-2 md:h-[90vh] w-[100vw] object-cover"
        />
        <div className="absolute px-[5%]">
          <p className="hidden md:block font-redhat font-bold text-2xl md:text-5xl text-white">
            Find out where your <br /> package is
          </p>
          <p className="md:hidden font-redhat font-bold text-2xl md:text-5xl text-white">
            Find out where your <br /> package is
          </p>
          <p className="font-opensans text-base md:text-xl pt-6 text-white md:w-[50%]">
            Watch your package closely with our tracker. Enter your shipping ID
            to start tracking and stay up to date with your delivery.
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

      <div className="md:py-20 px-[8%]">
        <div className="md:flex md:flex-col md:justify-center mx-auto">
          <p className="hidden md:block font-opensans font-bold text-4xl text-center">
            How to ship with Bold
          </p>
          <p className="md:hidden mt-10 font-opensans font-bold text-xl md:text-4xl md:text-center">
            How to ship with Bold
          </p>
          <p className="font-opensans text-base md:text-xl pt-6 md:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex md:flex-row flex-col items-center gap-8 justify-center md:justify-between py-10 md:pt-20">
          <div className="md:max-w-[20%] flex flex-col items-center">
            <div className="md:mx-auto w-[50%]">
              <Image src={downloadapp} alt="downloadapp" />
            </div>
            <p className="font-opensans font-bold text-base md:text-xl pt-4 ">
              Download the app
            </p>
          </div>

          <div className="md:max-w-[20%] flex flex-col items-center">
            <div className="md:mx-auto w-[60%]">
              <Image src={fillindetails} alt="downloadapp" />
            </div>
            <p className="font-opensans font-bold text-base md:text-xl pt-4 ">
              Fill your details
            </p>
          </div>

          <div className="md:max-w-[20%] flex flex-col items-center">
            <div className="md:mx-auto  md:w-[40%] w-[45%]">
              <Image src={pickuppackage} alt="downloadapp" />
            </div>
            <p className="font-opensans font-bold text-base md:text-xl pt-4 ">
              We ship your package
            </p>
          </div>

          <div className="md:pt-4 md:max-w-[20%] flex flex-col items-center">
            <div className="md:mx-auto md:w-[40%] w-[30%]">
              <Image src={rightdelivery} alt="downloadapp" />
            </div>
            <p className="font-opensans font-bold text-base md:text-xl pt-4 md:text-center">
              Your package is delivered in one piece
            </p>
          </div>
        </div>
      </div>

      <div className="md:px-[5%] pb-28 ">
        <div className="flex flex-row md:rounded-3xl justify-between pl-[5%] items-center  bg-[#191919] ">
          <div className="md:max-w-[55%] flex flex-col justify-center">
            <p className="font-bold mt-3 md:mt-0 text-xl md:text-4xl text-white">
              Send packages with BOLD
            </p>
            <p className="md:font-semibold text-sm pt-2 md:pt-8 max-w-[70%] md:max-w-[80%] text-white">
              Get the BOLD app and enjoy seamless delivery when you send
              packages safely to your friends and family.
            </p>
            <div className="flex gap-2 flex-row justify-between mb-3">
              <div>
                <button className="md:p-4 px-2 py-3 text-white font-redhat font-semibold text-base md:text-xl flex items-center gap-2 rounded-lg mt-6 border border-white">
                  Download Now
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

      {/* <FAQ /> */}
    </div>
  );
};

export default Packagepage;
