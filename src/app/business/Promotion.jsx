import React from "react";
import ridegroup from "../../../public/Assets/ridegroup.png";
import Image from "next/image";
import promotionside from "../../../public/Assets/promotionside.png";
import belowpromotioncard from "../../../public/Assets/belowpromotioncard.svg";
import promotionstep from "../../../public/Assets/promotionstep.svg";
import pickanddropone from "../../../public/Assets/pickanddropone.png";
import FAQ from "../home/FAQ";
import Footer from "../home/Footer";

const Promotion = () => {
  return (
    <div>
      <div className="px-[5%]">
        <div className="pt-12 flex justify-between ">
          <div className="max-w-[45%] flex flex-col justify-center">
            <p className="text-4xl font-bold">
              Lorem ipsum amet, consectetur adipiscing elit dolor
            </p>
            <p className="text-xl text-[#BBBBBB] pt-10">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque voluptatem. Sed ut perspiciatis unde omnis
              iste natus error sit voluptatem accusantium doloremque voluptatem
            </p>
            <div className="flex gap-8 items-center pt-14">
              <button className="text-xl font-semibold  bg-[#18C4B8] hover:bg-[#12a096]  text-white py-4 px-6 rounded-lg ">
                Start promoting
              </button>
            </div>
          </div>
          <Image src={promotionside} alt="ridegruop" style={{ width: "45%" }} />
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
        <div className="py-20 flex gap-[4%] justify-between">
          <div className="flex-1 bg-[#F3F3F3] rounded-full p-3 flex gap-4 items-center">
            <Image src={belowpromotioncard} alt="promotioncard" width={"20%"} />
            <p className="font-bold font-opensans text-base">
              Larger audience and reach
            </p>
          </div>
          <div className="flex-1 bg-[#F3F3F3] rounded-full p-3 flex gap-4 items-center">
            <Image src={belowpromotioncard} alt="promotioncard" width={"20%"} />
            <p className="font-bold font-opensans text-base">
              Larger audience and reach
            </p>
          </div>
          <div className="flex-1 bg-[#F3F3F3] rounded-full p-3 flex gap-4 items-center">
            <Image src={belowpromotioncard} alt="promotioncard" width={"20%"} />
            <p className="font-bold font-opensans text-base">
              Larger audience and reach
            </p>
          </div>
          <div className="flex-1 bg-[#F3F3F3] rounded-full p-3 flex gap-4 items-center">
            <Image src={belowpromotioncard} alt="promotioncard" width={"20%"} />
            <p className="font-bold font-opensans text-base">
              Larger audience and reach
            </p>
          </div>
        </div>

        <div className="w-[85%] mx-auto flex flex-col items-center pt-8 pb-28">
          <p className="font-opensans font-bold text-4xl">How it works?</p>
          <p className="text-xl  text-center pt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
          </p>
        </div>

        <div className="flex gap-[4%] justify-between">
          <div
            className="flex-1 flex flex-col justify-center items-center p-4"
            style={{ boxShadow: "4px 4px 33px 0px #0000000D" }}
          >
            <Image src={promotionstep} alt="promotiostep" width={"25%"} />
            <p className="font-semibold text-xl font-opensans pt-6">
              Create an account
            </p>
            <p className="text-xl font-opensans text-[#777777] text-center pt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
          <div
            className="flex-1 flex flex-col justify-center items-center p-4"
            style={{ boxShadow: "4px 4px 33px 0px #0000000D" }}
          >
            <Image src={promotionstep} alt="promotiostep" width={"25%"} />
            <p className="font-semibold text-xl font-opensans pt-6">
              Create an account
            </p>
            <p className="text-xl font-opensans text-[#777777] text-center pt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
          <div
            className="flex-1 flex flex-col justify-center items-center p-4"
            style={{ boxShadow: "4px 4px 33px 0px #0000000D" }}
          >
            <Image src={promotionstep} alt="promotiostep" width={"25%"} />
            <p className="font-semibold text-xl font-opensans pt-6">
              Create an account
            </p>
            <p className="text-xl font-opensans text-[#777777] text-center pt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
          <div
            className="flex-1 flex flex-col justify-center items-center p-4"
            style={{ boxShadow: "4px 4px 33px 0px #0000000D" }}
          >
            <Image src={promotionstep} alt="promotiostep" width={"25%"} />
            <p className="font-semibold text-xl font-opensans pt-6">
              Create an account
            </p>
            <p className="text-xl font-opensans text-[#777777] text-center pt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center  bg-[#18C4B8] hover:bg-[#12a096] py-20 my-20">
        <p className="font-opensans font-bold text-[50px] leading-[68px] text-white w-[70%] text-center ">
          More than 10k customers preferred to use BOLD Business
        </p>
        <div className="flex  gap-6">
          <button className="py-3 px-6 bg-white border-2  border-white text-[#18C4B8] font-redhat font-semibold text-xl w-fit mt-12 rounded-lg">
            Get promoting now
          </button>
        </div>
      </div>

      <div className=" flex justify-between w-full gap-[5%] pt-28 pb-20 px-[5%]">
        <div className="w-[55%] pt-8">
          <p className="font-opensans font-bold text-4xl">
            Sell your concert tickets on BOLD and get bigger & better audience
            reach
          </p>
          <p className="font-opensans text-xl text-[#777777] pt-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
            {/* <span className="text-black font-bold underline"> Read more</span> */}
          </p>
        </div>

        <div className="">
          <Image src={pickanddropone} alt="promotion" />
        </div>
      </div>

      {/* <FAQ /> */}
    </div>
  );
};

export default Promotion;
