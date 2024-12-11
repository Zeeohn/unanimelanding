import React from "react";
import Image from "next/image";
import riderscar from "../../../public/Assets/riderscar.svg";
import driverhandapp from "../../../public/Assets/driverhandapp.png";
import btnrightarrow from "../../../public/Assets/buttunrightarrow.svg";

const Ticketsupport = () => {
  return (
    <div>
      <div className="px-[5%] pt-8 md:pt-12 lg:pt-20 xl:pt-28">
        <p className="font-redhat font-bold text-xl md:text-3xl lg:text-4xl sm:text-center">
          Please select options related to your ticket issues
        </p>
        <div className="mt-6 md:mt-12 lg:mt-16 xl:mt-24 flex gap-[2%] w-full">
          <div className="flex-1 py-5 md:py-7 lg:py-10 flex  justify-center gap-16 items-center bg-[#F3F3F3] rounded-lg overflow-hidden">
            <p className=" font-semibold text-[9px] leading-3 md:text-xl lg:text-3xl font-opensans"> Riders</p>
            <Image src={riderscar} alt="riderscar" className="w-[10%] sm:w-[15%] md:w-[20%]" />
          </div>
          <div className="flex-1 py-5 md:py-7 lg:py-10 flex  justify-center gap-16 items-center bg-[#F3F3F3] rounded-lg overflow-hidden">
            <p className=" font-semibold text-[9px] leading-3 md:text-xl lg:text-3xl font-opensans"> Riders</p>
            <Image src={riderscar} alt="riderscar" className="w-[10%] sm:w-[15%] md:w-[20%]" />
          </div>
          <div className="flex-1 py-5 md:py-7 lg:py-10 flex  justify-center gap-16 items-center bg-[#F3F3F3] rounded-lg overflow-hidden">
            <p className=" font-semibold text-[9px] leading-3 md:text-xl lg:text-3xl font-opensans"> Riders</p>
            <Image src={riderscar} alt="riderscar" className="w-[10%] sm:w-[15%] md:w-[20%]" />
          </div>
        </div>
        <p className="font-redhat font-bold text-3xl md:text-4xl md:text-center pt-12 md:pt-16 lg:pt-20">
        Download the App
        </p>
        <p className="text-sm md:text-base lg:text-xl md:max-w-[70%] lg:max-w-[50%] mx-auto pt-2 md:pt-4 lg:pt-8 md:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        {/* <div className="pt-28 pb-28 ">
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
        <div className=" py-12 md:py-16 lg:py-20 xl:py-28 ">
        <div className="flex rounded-2xl md:rounded-3xl justify-between pl-[5%] items-center  bg-[#191919] ">
          <div className="md:max-w-[55%] flex flex-col justify-center py-6">
            <p className="font-bold text-lg font-opensans md:text-3xl lg:text-4xl text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p className="font-semibold text-xs md:text-base lg:text-xl pt-2 md:pt-4 lg:pt-8 max-w-[80%] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
            <div className="flex gap-2">
              <div>
                <button className="p-2 md:p-4  bg-white font-redhat font-semibold text-sm md:text-lg lg:text-xl flex items-center gap-2 rounded-lg mt-4  md:mt-8 lg:mt-12 border border-white">
                Get the app
                  <span className="inline-flex items-center text-white">
                    <Image src={btnrightarrow} alt="btnarrow " width={16}></Image>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-[35%] md:w-[45%] flex items-end flex-col">
          <Image
            src={driverhandapp}
            alt="driverapp"
            className=""
          />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Ticketsupport;
