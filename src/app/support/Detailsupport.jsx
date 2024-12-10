import React from "react";
import driverhandapp from "../../../public/Assets/driverhandapp.png";
import btnrightarrow from "../../../public/Assets/buttunrightarrow.svg";
import Image from "next/image";
import Footer from "../home/Footer";
import whitearrow from "../../../public/Assets/whitearrow.svg";

const Detailsupport = ({setcurrentsupport}) => {
  return (
    <div>
      <div className="px-[5%] pt-8 md:pt-12 lg:pt-20 xl:pt-28">
        <p className="font-semibold text-base md:text-xl lg:text-3xl xl:text-5xl" onClick={()=>setcurrentsupport("ticketsupport")}>
          I want to edit my personal information
        </p>
        <div className=" pt-6 lg:pt-8">
          <p className="text-sm md:text-base lg:text-lg font-opensans">
            You can edit the following account details via the Bold app:
          </p>
          <ul className="list-disc pl-[2%] pt-2 md:pt-4 lg:pt-6">
            <li className="text-[10px] md:text-sm lg:text-base">First and last names</li>
            <li className="text-[10px] md:text-sm lg:text-base">First and last names</li>
            <li className="text-[10px] md:text-sm lg:text-base">First and last names</li>
          </ul>
        </div>
        <div className="pt-4 md:pt-6 lg:pt-8">
          <p className="text-sm md:text-base lg:text-lg font-opensans">
            You can edit the following account details via the Bold app:
          </p>
          <ul className="list-disc pl-[2%] pt-2 md:pt-4 lg:pt-6">
            <li className="text-[10px] md:text-sm lg:text-base">First and last names</li>
            <li className="text-[10px] md:text-sm lg:text-base">First and last names</li>
            <li className="text-[10px] md:text-sm lg:text-base">First and last names</li>
          </ul>
        </div>

        <p className="text-[10px] md:text-sm lg:text-base xl:text-lg font-opensans pt-4 md:pt-6 lg:pt-8">
          If you update your email address, you will receive a verification
          request to your new email address. Ensure you verify your new email
          address following the instructions in the email sent by Bolt. The
          email address will be updated on your profile even if the email is not
          verified.
        </p>
        <p className="text-[10px] md:text-sm lg:text-base xl:text-lg font-opensans pt-2 md:pt-6 lg:pt-8">
          If you update your phone number, you will receive a verification
          request to your new phone number via SMS. Make sure you verify your
          new phone number following the instructions in SMS sent by Bolt. Once
          the phone number is verified, it will be changed in your profile
          automatically.
        </p>
        <p className="text-[10px] md:text-sm lg:text-base xl:text-lg font-opensans pt-2 md:pt-6 lg:pt-8">
          When you update your personal information in the Bolt app, the changes
          are also applied to the Bolt Food app.
        </p>
        <p className="text-[10px] md:text-sm lg:text-base xl:text-lg pt-2 md:pt-6 lg:pt-8">
          If you want to update any other data, please contact our Support Team:
        </p>
        <div className="pt-4 md:pt-6 lg:pt-8">
          <p className="text-sm md:text-base lg:text-lg font-opensans">
            You can edit the following account details via the Bold app:
          </p>
          <ul className="list-disc pl-[2%] pt-2 md:pt-4 lg:pt-6">
            <li className="text-[10px] md:text-sm lg:text-base">First and last names</li>
            <li className="text-[10px] md:text-sm lg:text-base">First and last names</li>
            <li className="text-[10px] md:text-sm lg:text-base">First and last names</li>
          </ul>
        </div>
        <div className="md:px-[5%] py-12 md:py-16 lg:py-20 xl:py-28 ">
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
                <button className="p-2 md:p-4 text-white font-redhat font-semibold text-sm md:text-lg lg:text-xl flex items-center gap-2 rounded-lg mt-4  md:mt-8 lg:mt-12 border border-white">
                Get the app
                  <span className="inline-flex items-center text-white">
                    <Image src={whitearrow} alt="btnarrow " width={16}></Image>
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

export default Detailsupport;
