import React from "react";
import trendingbanner from "../../../../public/Assets/trendingbanner.png";
import Image from "next/image";
import whitearrow from "../../../../public/Assets/whitearrow.svg";
import blackstr from "../../../../public/Assets/blackstr.svg";
import blacktick from "../../../../public/Assets/blacktick.svg";
import documents from "../../../../public/Assets/documents.svg";
import ridetaxi from "../../../../public/Assets/ridetaxi.png";
import ridesafetyfamily from "../../../../public/Assets/ridesafetyfamily.png";
import boldadvertise from "../../../../public/Assets/boldadvertise.png";
import appadvertise from "../../../../public/Assets/appadvertise.png";
import btnrightarrow from "../../../../public/Assets/buttunrightarrow.svg";
import FAQ from "@/app/home/FAQ";

const Ridesafety = () => {
  return (
    <div className="container mx-0 w-[100vw]">
      <div className="relative">
        <Image src={trendingbanner} alt="logistic" className="h-[50vh] md:h-[100vh]" />
        <div className="absolute top-0 left-0 md:max-w-[55%] h-full flex flex-col justify-center pl-[5%] ">
          <p className="font-redhat font-bold text-[25px] md:text-[40px] md:leading-[60px] text-white">
            Lorem ipsum amet, consectetur adipiscing elit dolor eiusmod tempor
            incididunt
          </p>
          <p className="font-opensans md:text-xl text-base text-[#BBBBBB] pt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dolor
            eiusmod tempor incididunt
          </p>
          <div className=" flex gap-6 pt-6">
            <button className=" text-white font-opensans font-semibold text-base md:text-2xl flex items-center gap-3 rounded-lg underline ">
              Browse more trending locations
              <span className="inline-flex items-center text-white">
                <Image src={whitearrow} alt="btnarrow " width={16}></Image>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="pl-[5%] py-12 md:py-20 md:max-w-[70%]">
        <p className="font-redhat font-bold text-[24px] md:text-[40px] md:leading-[60px] ">
          Lorem ipsum amet, consectetur adipiscing elit dolor eiusmod tempor
          incididunt
        </p>
        <p className="font-opensans text-base md:text-xl text-[#777777] pt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dolor
          eiusmod tempor incididunt
        </p>
      </div>

      <div className="flex flex-col gap-12 md:flex-row justify-between md:mt-10 md:pb-20 px-[5%]">
        <div className="">
          <Image src={blackstr} alt="blackstr" width={48} />
          <p className="font-semibold text-lg md:text-2xl pt-8">Basic requirements</p>
          <p className=" text-sm md:text-base pt-2">
            . Lorem Ipsum is not simply random text.
          </p>
          <p className=" text-sm md:text-base pt-2">
            . Lorem Ipsum is not simply random text.
          </p>
        </div>
        <div className="">
          <Image src={documents} alt="blackstr" width={48} />
          <p className="font-semibold text-lg md:text-2xl pt-8">Documents</p>
          <p className=" text-sm md:text-base pt-2">
            . Lorem Ipsum is not simply random text.
          </p>
          <p className=" text-sm md:text-base pt-2">
            . Lorem Ipsum is not simply random text.
          </p>
        </div>
        <div className="">
          <Image src={blacktick} alt="blackstr" width={48} />
          <p className="font-semibold text-lg md:text-2xl pt-8">Sign up process</p>
          <p className=" text-sm md:text-base pt-2">
            . Lorem Ipsum is not simply random text.
          </p>
          <p className=" text-sm md:text-base pt-2">
            . Lorem Ipsum is not simply random text.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-12 md:flex-row justify-between mt-10 md:pb-20 px-[5%]">
        <div className="">
          <Image src={blackstr} alt="blackstr" width={48} />
          <p className="font-semibold text-lg md:text-2xl pt-8">Basic requirements</p>
          <p className=" text-sm md:text-base pt-2">
            . Lorem Ipsum is not simply random text.
          </p>
          <p className=" text-sm md:text-base pt-2">
            . Lorem Ipsum is not simply random text.
          </p>
        </div>
        <div className="">
          <Image src={documents} alt="blackstr" width={48} />
          <p className="font-semibold text-lg md:text-2xl pt-8">Documents</p>
          <p className=" text-sm md:text-base pt-2">
            . Lorem Ipsum is not simply random text.
          </p>
          <p className=" text-sm md:text-base pt-2">
            . Lorem Ipsum is not simply random text.
          </p>
        </div>
        <div className="">
          <Image src={blacktick} alt="blackstr" width={48} />
          <p className="font-semibold text-lg md:text-2xl pt-8">Sign up process</p>
          <p className=" text-sm md:text-base pt-2">
            . Lorem Ipsum is not simply random text.
          </p>
          <p className=" text-sm md:text-base pt-2">
            . Lorem Ipsum is not simply random text.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between px-[5%] items-center py-12 md:py-28 ">
        <Image src={ridetaxi} alt="driverapp" className="mb-8 md:mb-0 md:max-w-[45%]" />
        <div className="md:max-w-[50%] flex flex-col justify-center ">
          <p className="font-bold text-xl md:text-4xl font-redhat">
            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
          </p>
          <p className="text-base md:text-xl font-semibold pt-8 font-opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between px-[5%] gap-8 items-center pb-28 ">
        <div className="md:max-w-[50%] flex flex-col justify-center ">
          <p className="font-bold text-xl md:text-4xl font-redhat">
            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
          </p>
          <p className="text-base md:text-xl font-semibold pt-8 font-opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam.
          </p>
        </div>
        <Image
          src={ridesafetyfamily}
          alt="driverapp"
          className="mb-8 md:mb-0 md:max-w-[45%]"
        />
      </div>

      <div className="px-[5%] pb-28 ">
        <div className="flex flex-row rounded-3xl justify-between pl-[5%] items-center  bg-[#191919] ">
          <div className="md:max-w-[55%] flex flex-col justify-center">
            <p className="font-bold mt-3 md:mt-0 text-xl md:text-4xl text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum
              dolor sit.
            </p>
            <p className="md:font-semibold text-sm md:text-xl md:pt-8 pt-2 max-w-[70%] md:max-w-[80%] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
            <div className="flex gap-2 flex-row justify-between ">
              <div>
                <button className="md:px-6 px-2 py-3 bg-white font-redhat font-semibold text-base md:text-xl flex items-center gap-2 rounded-lg mt-5 md:mt-12 border border-white">
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
              <Image
            src={appadvertise}
            alt="driverapp"
            // style={{ maxWidth: "50%" }}
            className="md:hidden -mt-16 max-w-[35%]"
          />
            </div>
          </div>
          <Image
            src={appadvertise}
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

export default Ridesafety;
