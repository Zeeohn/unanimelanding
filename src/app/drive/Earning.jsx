import React from "react";
import ridegroup from "../../../public/Assets/driveearninggroup.png";
import Image from "next/image";
import earningdriver from "../../../public/Assets/earningdriver.png";
import blackcircletick from "../../../public/Assets/blackcircletick.svg";
import btnrightarrow from "../../../public/Assets/buttunrightarrow.svg";
import Qrdriver from "../../../public/Assets/Qrdriver.png";
import Footer from "../home/Footer";
const Earning = () => {
  return (
    <div>
      <div className="py-16 md:pt-24  md:pb-20 flex bg-[#090909] px-[5%] justify-between ">
        <div className="md:max-w-[50%] xl:max-w-[35%]">
          <p className="text-4xl lg:text-[40px] lg:leading-[60px] font-bold text-white">
            Earnings you can rely on!
          </p>
          <p className="text-2xl md:text-xl text-[#BBBBBB] pt-8 md:pt-10">
          We know you’re wondering how much you can make driving for BOLD. And all we can say is A LOT! Your earnings grow with every ride. It all depends on when, where, and how often you drive.
          </p>
          <div className="flex gap-4 md:gap-8 items-center pt-14">
            <button className="font-semibold bg-[#FFFFFF] py-3 px-5 md:py-4 md:px-6 rounded-lg flex items-center gap-2 text-sm md:text-xl ">
              Start earning now
               <span className="inline-flex items-center text-white">
                <Image src={btnrightarrow} alt="btnarrow " width={16}></Image>
              </span>
            </button>
             {/* <button className=" bg-white text-white font-opensans font-semibold text-base md:text-xl lg:text-2xl flex items-center gap-3 rounded-lg underline ">
            Lorem ipsum dolor sit amet
             
            </button> */}
            <div className="flex flex-col gap-1 ">
              <p className="font-bold text-base md:text-lg  lg:text-xl text-white">380k+</p>
              <p className="text-xs md:text-base lg:text-lg text-[#BBBBBB]">Total Active Users</p>
            </div>
          </div>
        </div>
        <Image src={ridegroup} alt="ridegruop" className="md:block hidden max-w-[45%]" />
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

      <div className="px-[5%] pt-16 pb-12 md:pt-16 md:pb-20 lg:pt-20 lg:pb-28  flex md:flex-row gap-2 flex-col justify-between ">
        <div className="md:max-w-[45%]">
          <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl">
            How BOLDS's earning work
          </p>
        </div>
        <div className="flex flex-col gap-4 justify-center md:max-w-[50%]">
          <p className="font-opensans text-sm md:text-xl text-[#777777]">
            Lorem ipsum doLorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididuntlor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
          </p>
        </div>
      </div>

      <div className="px-[5%] gap-[12%] flex md:flex-row flex-col  ">
        <div className="pt-3 pb-6 md:py-8 border-t-2 border-black flex-1">
          <div className="flex gap-3 items-center">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <p className="font-opensans text-sm">Surge</p>
          </div>
          <p className="font-opensans text-sm md:text-xl pt-[14px] md:pt-6 lg:pt-8 font-normal">
          Earn more when there’s a high demand from passengers 
          </p>
        </div>
        <div className="pt-3 pb-6 md:py-8 border-t-2 border-black flex-1">
          <div className="flex gap-3 items-center ">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <p className="font-opensans text-sm">Standard Fare</p>
          </div>
          {/* <p className="text-xl md:text-3xl lg:text-[40px] font-bold font-opensans lg:leading-[54px]  pt-2 md:pt-6">
          210k +
          </p> */}
          <p className="font-opensans text-sm md:text-xl pt-[14px] md:pt-6 lg:pt-8 font-normal">
          Receive a complete and standard fare each time you complete a trip
          </p>
        </div>
        <div className="pt-3 pb-6 md:py-8 border-t-2 border-black flex-1">
          <div className="flex gap-3 items-center ">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <p className="font-opensans text-sm">Boost</p>
          </div>
          {/* <p className="text-xl md:text-3xl lg:text-[40px] font-bold font-opensans lg:leading-[54px]  pt-2 md:pt-6">
          82%
          </p> */}
          <p className="font-opensans text-sm md:text-xl pt-[14px] md:pt-6 lg:pt-8 font-normal">
          Enjoy in-app bonuses when you hit certain driving milestones.
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="flex-1 lg:block hidden">
          <Image
            src={earningdriver}
            alt="earning"
            style={{ width: "100%", height: "100%" }}
            className="object-cover object-center"
          />
        </div>
        <div className="flex-1 px-[5%] lg:px-12 py-7 md:py-12  lg:py-16 bg-[#F3F3F3] flex flex-col justify-center">
          <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <p className="font-opensans text-sm md:text-xl pt-2 md:pt-6 lg:pt-8">
            Lorem ipsum doLorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididuntlor sit amet.
          </p>
          <Image
            src={earningdriver}
            alt="earning"
            className="object-cover object-center rounded-lg mt-12 lg:hidden"
          />

          <div className="flex flex-wrap justify-between pt-4">
            <div className="flex gap-4 items-center pt-2 md:pt-6">
              <Image src={blackcircletick} alt="whitecheck" className="w-4 md:w-6" />
              <p className="text-base md:text-lg ">Offer ride-hailing services</p>
            </div>
            <div className="flex gap-4 items-center pt-2 md:pt-6">
              <Image src={blackcircletick} alt="whitecheck" className="w-4 md:w-6" />
              <p className="text-base md:text-lg ">Offer jumpstart services</p>
            </div>
            <div className="flex gap-4 items-center pt-2 md:pt-6">
              <Image src={blackcircletick} alt="whitecheck" className="w-4 md:w-6" />
              <p className="text-base md:text-lg ">Drive Intercity</p>
            </div>
             <div className="flex gap-4 items-center pt-2 md:pt-6">
              <Image src={blackcircletick} alt="whitecheck" className="w-4 md:w-6" />
              <p className="text-base md:text-lg ">Run Logistics Services</p>
            </div>
           {/* <div className="flex gap-4 items-center pt-2 md:pt-6">
              <Image src={blackcircletick} alt="whitecheck" className="w-4 md:w-6" />
              <p className="text-base md:text-lg ">Lorem ipsum dolor sit amet</p>
            </div> */}
          </div>
        </div>
      </div>

      <div className="px-[5%] py-12 md:py-20 lg:py-28">
        <div className="md:max-w-[70%] lg:max-w-[50%]">
          <p className="font-opensans font-bold text-base md:text-2xl lg:text-4xl">
            Become your own boss today!
          </p>
          <div className="p-4 rounded-2xl border border-[#DDDDDD] flex gap-4 md:gap-6 items-center mt-10 ">
            <Image
              src={Qrdriver}
              alt="qr"
              style={{ width: "25%", height: "100%" }}
              className="object-cover"
            />
            <div className="">
              <p className="font-redhat font-bold text-sm sm:text-base lg:text-xl">
              Download now
              </p>
              <div className="flex justify-between ">
                <p className=" pt-2 md:pt-4 text-xs sm:text-base lg:text-xl font-opensans max-w-[75%]">
                Get the Bold app and track your earnings at a glance. Start driving and earning on your own terms today. 
                </p>
                <button>
                  <Image src={btnrightarrow} alt="rightarrow" className="w-5" />
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
