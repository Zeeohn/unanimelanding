import React from "react";
import ridegroup from "../../../public/Assets/ridegroup.png";
import Image from "next/image";
import earningdriver from "../../../public/Assets/earningdriver.png";
import blackcircletick from "../../../public/Assets/blackcircletick.svg";
import btnrightarrow from "../../../public/Assets/buttunrightarrow.svg";
import Qrdriver from "../../../public/Assets/Qrdriver.png";
import Footer from "../home/Footer";

const Earning = () => {
  return (
    <div>
      <div className="pt-24 pb-20 flex bg-[#090909] px-[5%] justify-between ">
        <div className="max-w-[35%]">
          <p className="text-[40px] font-bold text-white leading-[60px]">
            Lorem ipsum amet, consectetur adipiscing elit dolor
          </p>
          <p className="text-xl text-[#BBBBBB] pt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dolor
            eiusmod tempor incididunt
          </p>
          <div className="flex gap-8 items-center pt-14">
            <button className="text-xl font-semibold bg-[#FFFFFF] py-4 px-6 rounded-lg ">
              Download App
            </button>
            <div className="flex flex-col gap-1 ">
              <p className="font-bold text-xl text-white">380k+</p>
              <p className="text-lg text-[#BBBBBB]">Total Active Users</p>
            </div>
          </div>
        </div>
        <Image src={ridegroup} alt="ridegruop" />
        {/* <div className="max-w-[30%] ml-[8%]">
          <p className="text-xl text-[#BBBBBB]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt dolor
          </p>
          <div className="flex gap-4 items-center pt-4">
            {" "}
            <Image src={staricon} alt="star" />
            <p className="text-xl text-white ">
              4.8{" "}
              <span className="text-lg text-[#BBBBBB]">
                {" "}
                (Customer ratings){" "}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-3 pt-6">
            <Image src={circlepeople} alt="star" />{" "}
            <p className="text-lg text-[#BBBBBB] ">300k+ users</p>
          </div>

          <div className="flex flex-col gap-2 pt-10">
            <p className="font-medium text-4xl text-white">380k+</p>
            <p className="text-xl text-[#BBBBBB]">Total Active Users</p>
          </div>
          <div className="flex flex-col gap-2 pt-10">
            <p className="font-medium text-4xl text-white">500k+</p>
            <p className="text-xl text-[#BBBBBB]">Downloads from all store</p>
          </div>
        </div> */}
      </div>

      <div className="px-[5%] py-28 flex justify-between ">
        <div className="max-w-[45%]">
          <p className="font-bold text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </div>
        <div className="flex flex-col gap-4 justify-center max-w-[50%]">
          <p className="font-opensans text-xl text-[#777777]">
            Lorem ipsum doLorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididuntlor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
          </p>
        </div>
      </div>

      <div className="px-[5%] gap-[12%] flex ">
        <div className="py-8 border-t-2 border-black flex-1">
          <div className="flex gap-3 items-center">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <p className="font-opensans text-sm">Driver engagement</p>
          </div>
          <p className="text-[40px] font-bold font-opensans leading-[54px] pt-6">
            2215
          </p>
        </div>
        <div className="py-8 border-t-2 border-black flex-1">
          <div className="flex gap-3 items-center ">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <p className="font-opensans text-sm">Average customers</p>
          </div>
          <p className="text-[40px] font-bold font-opensans leading-[54px] pt-6">
            2215
          </p>
          <p className="font-opensans text-xl pt-8 font-normal">
            Lorem ipsum doLorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>
        <div className="py-8 border-t-2 border-black flex-1">
          <div className="flex gap-3">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <p className="font-opensans text-sm">Impact on earnings</p>
          </div>
          <p className="text-[40px] font-bold font-opensans leading-[54px] pt-6">
            2215
          </p>
          <p className="font-opensans text-xl pt-8 font-normal">
            Lorem ipsum doLorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="flex-1">
          <Image
            src={earningdriver}
            alt="earning"
            style={{ width: "100%", height: "100%" }}
            className="object-cover object-center"
          />
        </div>
        <div className="flex-1 px-12 py-16 bg-[#F3F3F3] flex flex-col justify-center">
          <p className="font-bold text-4xl font-opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <p className="font-opensans text-xl pt-8">
            Lorem ipsum doLorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididuntlor sit amet.
          </p>
          <div className="flex flex-wrap justify-between pt-4">
            <div className="flex gap-4 items-center pt-6">
              <Image src={blackcircletick} alt="whitecheck" width={24} />
              <p className="text-lg ">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="flex gap-4 items-center pt-6">
              <Image src={blackcircletick} alt="whitecheck" width={24} />
              <p className="text-lg ">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="flex gap-4 items-center pt-6">
              <Image src={blackcircletick} alt="whitecheck" width={24} />
              <p className="text-lg">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="flex gap-4 items-center pt-6">
              <Image src={blackcircletick} alt="whitecheck" width={24} />
              <p className="text-lg">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="flex gap-4 items-center pt-6">
              <Image src={blackcircletick} alt="whitecheck" width={24} />
              <p className="text-lg">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[5%] py-28">
        <div className="max-w-[50%]">
          <p className="font-opensans font-bold text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <div className="p-4 rounded-2xl border border-[#DDDDDD] flex gap-6 items-center mt-10 ">
            <Image
              src={Qrdriver}
              alt="qr"
              style={{ width: "25%", height: "100%" }}
              className="object-cover"
            />
            <div className="">
              <p className="font-redhat font-bold text-xl">
                Contact BOLD support
              </p>
              <div className="flex justify-between ">
                <p className="pt-4 text-xl font-opensans max-w-[75%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing ut labore
                  et dolore magna aliqua.
                </p>
                <button>
                  <Image src={btnrightarrow} alt="rightarrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earning;
