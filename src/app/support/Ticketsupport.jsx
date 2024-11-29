import React from "react";
import Image from "next/image";
import riderscar from "../../../public/Assets/riderscar.svg";
import driverhandapp from "../../../public/Assets/driverhandapp.png";
import btnrightarrow from "../../../public/Assets/buttunrightarrow.svg";
import Footer from "../home/Footer";

const Ticketsupport = () => {
  return (
    <div>
      <div className="px-[5%] pt-28">
        <p className="font-redhat font-bold text-4xl text-center">
          Please select options related to your ticket issues
        </p>
        <div className="px-[5%] mt-24 flex gap-[2%] w-full">
          <div className="flex-1 py-10 flex  justify-center gap-16 items-center bg-[#F3F3F3] rounded-lg overflow-hidden">
            <p className=" font-semibold text-3xl font-opensans"> Riders</p>
            <Image src={riderscar} alt="riderscar" style={{ width: "20%" }} />
          </div>
          <div className="flex-1 py-10 flex  justify-center gap-16 items-center bg-[#F3F3F3] rounded-lg overflow-hidden">
            <p className=" font-semibold text-3xl font-opensans"> Riders</p>
            <Image src={riderscar} alt="riderscar" style={{ width: "20%" }} />
          </div>
          <div className="flex-1 py-10 flex  justify-center gap-16 items-center bg-[#F3F3F3] rounded-lg overflow-hidden">
            <p className=" font-semibold text-3xl font-opensans"> Riders</p>
            <Image src={riderscar} alt="riderscar" style={{ width: "20%" }} />
          </div>
        </div>
        <p className="font-redhat font-bold text-4xl text-center pt-20">
          Welcome to Bold Support
        </p>
        <p className="text-xl  max-w-[50%] mx-auto pt-8 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <div className="pt-28 pb-28 ">
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
      </div>
    </div>
  );
};

export default Ticketsupport;
