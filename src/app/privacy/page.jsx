"use client";
import React from "react";
import btnrightarrow from "../../../public/Assets/buttunrightarrow.svg";
import Image from "next/image";
import Footer from "../home/Footer";
import { useState } from "react";

const Privacypolicy = () => {
  const [policy, setpolicy] = useState("General");

  return (
    <div>
      <div>
      <div className="px-[5%] bg-black py-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28">
        <p className="font-redhat font-bold text-4xl md:text-[50px] md:leading-[66px] text-white">
        Privacy policy
        </p>
      </div>

        <div className="px-[5%]  pt-12 md:pt-16 lg:pt-20 flex gap-[5%] ">
          <div
            className={`font-redhat  pb-2 lg:pb-3 w-fit text-xl md:text-3xl lg:text-4xl ${
              policy === "General"
                ? "border-b-[6px] border-[#18C4B8] font-bold text-black "
                : "text-[#777777]"
            }`}
            onClick={() => setpolicy("General")}
          >
            General policy
          </div>
          <div
            className={`font-redhat pb-2 lg:pb-3 w-fit text-xl md:text-3xl lg:text-4xl ${
              policy === "Legal"
                ? "border-b-[6px] border-[#18C4B8] font-bold text-black "
                : "text-[#777777]"
            }`}
            onClick={() => setpolicy("Legal")}
          >
            Legal policy
          </div>
        </div>
        <div className="px-[5%]  pb-12 md:pb-16 lg:pb-20 ">
          <p className="text-xl pt-8 md:pt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-xl pt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-xl pt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>


      </div>
    </div>
  );
};

export default Privacypolicy;
