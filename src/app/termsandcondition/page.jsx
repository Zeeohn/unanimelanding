import React from "react";
import btnrightarrow from "../../../public/Assets/buttunrightarrow.svg";
import Image from "next/image";
import Footer from "../home/Footer";

const Termsandcondition = () => {
  return (
    <div>
      <div className="px-[5%] bg-black py-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28">
        <p className="font-redhat font-bold text-4xl md:text-[50px] md:leading-[66px] text-white">
          Terms & Conditions
        </p>
      </div>
      <div className="px-[5%] py-12 md:py-16 lg:py-20 ">
        <p className="font-redhat font-bold text-xl md:text-3xl lg:text-4xl">User agreement</p>
        <p className="text-xl pt-8 md:pt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="text-xl pt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="text-xl pt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className="  font-opensans font-semibold text-xl md:text-3xl lg:text-4xl flex items-center gap-6 rounded-lg mt-12 md:mt-16 md:mb-12 lg:mt-20 lg:mb-16">
          Go to our Privacy policy
          <span className="inline-flex items-center">
            <Image src={btnrightarrow} alt="btnarrow " className="w-8"></Image>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Termsandcondition;
