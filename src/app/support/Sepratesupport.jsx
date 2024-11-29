import React from "react";
import Image from "next/image";
import searchicon from "../../../public/Assets/searchicon.svg";
import rightarrowjust from "../../../public/Assets/rightarrowjust.svg";
import driverhandapp from "../../../public/Assets/driverhandapp.png";
import btnrightarrow from "../../../public/Assets/buttunrightarrow.svg";
import Footer from "../home/Footer";

const Sepratesupport = ({setcurrentsupport}) => {
  return (
    <div className="">
      <div className="px-[5%] py-20">
        <p className="font-redhat font-bold text-4xl">
          Support Resources for Bold Riders
        </p>
        <p className="pt-4 font-opensans text-xl text-[#444444] max-w-[60%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur.
        </p>
        <div className="bg-[#EEEEEE] flex px-4 py-6 gap-4 rounded-2xl w-4/5 mt-16">
          <Image src={searchicon} alt="searchicon" />
          <input
            type="text"
            placeholder="Search queries here..."
            className="bg-[#EEEEEE]"
          />
        </div>
        <p className="font-semibold text-6xl mt-16">Riders</p>
        <div className="pt-20 pb-5 flex border-b border-[#DDDDDD]">
          <div className="flex-1">
            <p className="font-opensans font-semibold text-3xl text-[#2F313F]">
              About Bold
            </p>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center" onClick={()=>setcurrentsupport("detailsupport")}>
              <p className="font-opensans text-base text-[#2F313F]">
                Bold public API
              </p>
              <Image src={rightarrowjust} alt="rightarrow" />
            </div>
            <div className="flex justify-between items-center pt-8">
              <p className="font-opensans text-base text-[#2F313F]">
                Where can I find Bold offices?
              </p>
              <Image src={rightarrowjust} alt="rightarrow" />
            </div>
            <div className="flex justify-between items-center pt-8">
              <p className="font-opensans text-base text-[#2F313F]">
                Where does Bold operate?
              </p>
              <Image src={rightarrowjust} alt="rightarrow" />
            </div>
          </div>
        </div>
        <div className="pt-20 pb-5 flex border-b border-[#DDDDDD]">
          <div className="flex-1">
            <p className="font-opensans font-semibold text-3xl text-[#2F313F]">
              Account and data
            </p>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <p className="font-opensans text-base text-[#2F313F]">
                Changing the language of marketing messages
              </p>
              <Image src={rightarrowjust} alt="rightarrow" />
            </div>
            <div className="flex justify-between items-center pt-8">
              <p className="font-opensans text-base text-[#2F313F]">
                Delete my Bold data
              </p>
              <Image src={rightarrowjust} alt="rightarrow" />
            </div>
            <div className="flex justify-between items-center pt-8">
              <p className="font-opensans text-base text-[#2F313F]">
                Delete my account
              </p>
              <Image src={rightarrowjust} alt="rightarrow" />
            </div>
            <div className="flex justify-between items-center pt-8">
              <p className="font-opensans text-base text-[#2F313F]">
                I want to edit my personal information
              </p>
              <Image src={rightarrowjust} alt="rightarrow" />
            </div>
          </div>
        </div>
        <div className="pt-20 pb-5 flex border-b border-[#DDDDDD]">
          <div className="flex-1">
            <p className="font-opensans font-semibold text-3xl text-[#2F313F]">
              About Bold
            </p>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <p className="font-opensans text-base text-[#2F313F]">
                Bold public API
              </p>
              <Image src={rightarrowjust} alt="rightarrow" />
            </div>
            <div className="flex justify-between items-center pt-8">
              <p className="font-opensans text-base text-[#2F313F]">
                Where can I find Bold offices?
              </p>
              <Image src={rightarrowjust} alt="rightarrow" />
            </div>
            <div className="flex justify-between items-center pt-8">
              <p className="font-opensans text-base text-[#2F313F]">
                Where does Bold operate?
              </p>
              <Image src={rightarrowjust} alt="rightarrow" />
            </div>
          </div>
        </div>
        <div className="pt-20 pb-5 flex border-b border-[#DDDDDD]">
          <div className="flex-1">
            <p className="font-opensans font-semibold text-3xl text-[#2F313F]">
              Account and data
            </p>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <p className="font-opensans text-base text-[#2F313F]">
                Changing the language of marketing messages
              </p>
              <Image src={rightarrowjust} alt="rightarrow" />
            </div>
            <div className="flex justify-between items-center pt-8">
              <p className="font-opensans text-base text-[#2F313F]">
                Delete my Bold data
              </p>
              <Image src={rightarrowjust} alt="rightarrow" />
            </div>
            <div className="flex justify-between items-center pt-8">
              <p className="font-opensans text-base text-[#2F313F]">
                Delete my account
              </p>
              <Image src={rightarrowjust} alt="rightarrow" />
            </div>
            <div className="flex justify-between items-center pt-8">
              <p className="font-opensans text-base text-[#2F313F]">
                I want to edit my personal information
              </p>
              <Image src={rightarrowjust} alt="rightarrow" />
            </div>
          </div>
        </div>

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

export default Sepratesupport;
