import React from "react";
import Image from "next/image";
import ordertrack from "../../../public/Assets/ordertrack.png";
import boldadvertise from "../../../public/Assets/boldadvertise.png";
import whitearrow from "../../../public/Assets/whitearrow.svg";
import Footer from "../home/Footer";

const Trackdetails = () => {
  return (
    <div>
      <div className="px-[5%] py-6 flex justify-between items-center border-b border-[#DDDDDD]">
        <p className="font-opensans text-xl font-bold ">
          BOLD <span className="font-normal">Tracking</span>{" "}
        </p>
        <div className="flex gap-6 items-center">
          <button className="text-xl font-opensans underline">
            Tracking another package?
          </button>
          <p className="font-semibold text-xl font-opensans">FAQ</p>
        </div>
      </div>
      <div className="px-[5%] ">
        <div className="mx-auto max-w-[55%] flex flex-col items-center  py-12">
          <div className="flex justify-center gap-6 items-start  w-full">
            <div className="">
              <p className="font-opensans text-4xl font-bold">
                Order details #A23D43F7
              </p>
              <p className="text-2xl font-opensans pt-3 ">Date: 08/02/2024</p>
            </div>
            <div className="w-[20%] bg-[#18C4B838] rounded-2xl text-center py-4 text-2xl font-semibold">
              Delivered
            </div>
          </div>
          <Image src={ordertrack} alt="ordertrack" width={"55%"} />
          <div className="p-4 bg-[#F3F3F3] rounded-2xl w-full ">
            <p className="text-base font-opensans text-[#777777]">
              Package status
            </p>
            <p className="text-base font-opensans pt-5 pb-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
          <p className="font-semibold text-2xl font-opensans py-6 w-full text-center">
            For detailed information and delivering status Download{" "}
            <span className="font-bold">BOLD</span> App
          </p>
        </div>
      </div>
      <div className="px-[5%] pb-20 ">
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
    </div>
  );
};

export default Trackdetails;
