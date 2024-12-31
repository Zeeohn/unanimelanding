import React from "react";
import trendingbanner from "../../../../public/Assets/trendingbanner.png";
import Image from "next/image";
import whitearrow from "../../../../public/Assets/whitearrow.svg";
import blackstr from "../../../../public/Assets/blackstr.svg";
import blacktick from "../../../../public/Assets/blacktick.svg";
import documents from "../../../../public/Assets/documents.svg";
import ridetaxi from "../../../../public/Assets/ridetaxi.png";
import ridesafetyfamily from "../../../../public/Assets/ridesafetyfamily.png";
import drivesafe from "../../../../public/Assets/drivesafe.jpeg";
import boldadvertise from "../../../../public/Assets/boldadvertise.png";
import appadvertise from "../../../../public/Assets/appadvertise.png";
import btnrightarrow from "../../../../public/Assets/buttunrightarrow.svg";
import safety1 from "../../../../public/Assets/safety1.jpeg";
import safety2 from "../../../../public/Assets/safety2.jpeg";
import FAQ from "@/app/home/FAQ";
import { FaArrowRight } from "react-icons/fa";

const Ridesafety = () => {
  return (
    <div className="">
      <div className="relative">
        <div className="absolute w-full bg-black opacity-60 h-[60vh] md:h-[100vh]"></div>
        <Image
          src={drivesafe}
          alt="logistic"
          className="h-[60vh] md:h-[100vh]"
        />
        <div className="absolute top-0 left-0 md:max-w-[55%] h-full flex flex-col justify-center pl-[5%] ">
          <p className="font-redhat font-bold text-[25px] md:text-[40px] md:leading-[60px] text-white">
            Your Safety Drives Everything We Do
          </p>
          <p className="font-opensans md:text-xl text-base text-[#BBBBBB] pt-6">
            Bold is a place where everyone feels at home. We prioritize respect
            and safety by setting high standards from your first ride. With real
            human support available 24/7, we&apos;re by your side on every ride.
          </p>
          {/* <div className=" flex gap-6 pt-6">
            <button className=" text-white hover:text-[#18C4B8] font-opensans font-semibold text-base md:text-2xl flex items-center gap-3 rounded-lg underline ">
              Browse more trending locations
              <FaArrowRight size={20} />
              <span className="inline-flex items-center text-white">
              </span> 
            </button>
          </div> */}
        </div>
      </div>

      <div className="pl-[5%] py-12 md:py-20 md:max-w-[70%]">
        <p className="font-redhat font-bold text-[24px] md:text-[40px] md:leading-[60px] ">
          Embark on a Journey of Safety and Connection
        </p>
        <p className="font-opensans text-base md:text-xl text-[#777777] pt-6">
          Every ride is an adventure, and we’re here to guide you with tools and
          values that ensure your trip is safe, inclusive, and supported.
        </p>
      </div>

      <div className="flex flex-col gap-12 md:flex-row justify-between md:mt-10 md:pb-20 px-[5%]">
        <div className="">
          <Image src={blackstr} alt="blackstr" width={48} />
          <p className="font-semibold text-lg md:text-2xl pt-8">
            In-App Safety Features
          </p>
          <p className=" text-sm md:text-base pt-2">
            Share your trip details with loved ones, track your ride in real
            time, and enjoy the peace of mind our technology provides.
          </p>
        </div>
        <div className="">
          <Image src={documents} alt="blackstr" width={48} />
          <p className="font-semibold text-lg md:text-2xl pt-8">
            A Community Built on Inclusivity
          </p>
          <p className=" text-sm md:text-base pt-2">
            Millions of riders and drivers follow shared Community Guidelines,
            fostering accountability and promoting the right actions.
          </p>
        </div>
        <div className="">
          <Image src={blacktick} alt="blackstr" width={48} />
          <p className="font-semibold text-lg md:text-2xl pt-8">
            Round-the-Clock Support
          </p>
          <p className=" text-sm md:text-base pt-2">
            Our dedicated team is available 24/7 to assist you. Whether you have
            questions or safety concerns, you can reach them anytime directly
            through the app.
          </p>
        </div>
      </div>
      <h2 className="font-bold text-xl md:mt-0 mt-10 px-[5%] md:text-4xl">
        Safety Tips
      </h2>
      <div className="flex flex-col gap-12 md:flex-row justify-between mt-10 md:pb-20 px-[5%]">
        <div className="">
          <Image src={blackstr} alt="blackstr" width={48} />
          <p className="font-semibold text-lg md:text-2xl pt-8">
            Confirm the driver
          </p>
          <p className=" text-sm md:text-base pt-2">
            Make sure you verify the identity of the driver picking you up.
          </p>
        </div>
        <div className="">
          <Image src={documents} alt="blackstr" width={48} />
          <p className="font-semibold text-lg md:text-2xl pt-8">
            Check the vehicle make and model
          </p>
          <p className=" text-sm md:text-base pt-2">
            Make sure the colour and model of the vehicle match with what’s in
            the app
          </p>
        </div>
        <div className="">
          <Image src={blacktick} alt="blackstr" width={48} />
          <p className="font-semibold text-lg md:text-2xl pt-8">
            Confirm the license plate
          </p>
          <p className=" text-sm md:text-base pt-2">
            Check out the vehicle plate number before you enter
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between px-[5%] items-center py-12 md:py-28 ">
        <Image
          src={ridetaxi}
          alt="driverapp"
          className="mb-8 md:mb-0 md:max-w-[45%]"
        />
        <div className="md:max-w-[50%] flex flex-col justify-center ">
          <p className="font-bold text-xl md:text-4xl font-redhat">
            Ride in Comfort, Luxury, and Style to Your Next Destination
          </p>
          <p className="text-base md:text-xl pt-8 font-opensans">
            Travel the BOLD way and elevate your journey. Whether you’re
            commuting to work, visiting another city, or heading out with
            friends, Bold ensures every ride is an experience of luxury and
            convenience. Choose from a variety of ride options to suit your
            needs, from premium sedans to eco-friendly vehicles. Travel
            effortlessly across cities, states, or countries.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between px-[5%] gap-8 items-center pb-28 ">
        <div className="md:max-w-[50%] flex flex-col justify-center ">
          <p className="font-bold text-xl md:text-4xl font-redhat">
            Use BOLD XL When Traveling as a Group
          </p>
          <p className="text-base md:text-xl pt-8 font-opensans">
            Big trips need big solutions, and BoldXL delivers. With room for
            everyone and everything, it’s perfect for family vacations, team
            outings, or getaways with friends. Enjoy spacious seating, ample
            luggage space, and a smooth ride that makes group travel effortless.
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
              More Than Just Rides
            </p>
            <p className="md:font-semibold text-sm md:text-xl md:pt-8 pt-2 max-w-[70%] md:max-w-[80%] text-white">
              {" "}
              There’s more to <span className="font-bold">BOLD</span>. Bold is
              not just about getting you from point A to point B. We offer a
              variety of services designed to enhance your daily life and solve
              real-world problems.
            </p>
            <div className="flex gap-2 flex-row justify-between ">
              <div>
                <button className="md:px-6 px-2 py-3 bg-[#18C4B8] hover:bg-[#12a096] font-redhat font-semibold text-base md:text-xl flex items-center gap-2 rounded-lg mt-5 md:mt-12 text-white">
                  Download Now
                  <FaArrowRight size={20} />
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

      <div className="px-[5%] pb-28 ">
        <h1 className="text-[20px] md:text-[35px] font-bold font-redhat text-center mb-8">
          Comprehensive Safety Measures for Every Ride
        </h1>
        <p className="text-center text-base md:text-xl">
          We’ve put in place comprehensive measures to ensure that each ride is
          secure, comfortable, and reliable. From detailed driver background
          checks to 24/7 emergency assistance, we’ve crafted a range of features
          that give you peace of mind from start to finish. Whether you’re
          riding solo or with a group, our commitment to your safety means you
          can focus on enjoying the journey, knowing we’ve got your back every
          mile of the way.
        </p>
      </div>

      <div className="flex flex-col-reverse gap-2 md:gap-6 md:flex-row md:justify-between px-[5%] md:items-center pt-8 md:pt-12 md:pb-12 lg:pb-20 ">
        <div className="md:max-w-[50%] flex flex-col justify-center">
          <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl">
            Driver Background Checks
          </p>
          <p className="font-bold text-sm md:text-xl pt-2 md:pt-4 lg:pt-8">
            Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do
          </p>
          <p className="text-sm md:text-xl pt-2 md:pt-4 lg:pt-6 text-[#777777]">
            We’re committed to connecting you with drivers you can trust. Every
            Bold driver undergoes a rigorous background check, including
            verification of identity, driving history, and criminal records. Our
            screening process ensures only the best are behind the wheel, giving
            you peace of mind on every ride.
          </p>
        </div>
        <Image
          src={safety1}
          alt="driverapp"
          className=" rounded-2xl w-full md:max-w-[45%] object-cover object-center"
        />
      </div>

      <div className="flex flex-col-reverse gap-2 md:gap-6 md:flex-row-reverse md:justify-between px-[5%] md:items-center pt-8 md:pt-12 md:pb-12 lg:pb-20 ">
        <div className="md:max-w-[50%] flex flex-col justify-center">
          <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl">
            Enhanced Vehicle Inspections
          </p>
          <p className="font-bold text-sm md:text-xl pt-2 md:pt-4 lg:pt-8">
            Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do
          </p>
          <p className="text-sm md:text-xl pt-2 md:pt-4 lg:pt-6 text-[#777777]">
            Every Bold Ride is more than a vehicle; it’s a promise of safety.
            All cars in our network undergo regular, thorough inspections to
            meet our high safety and quality standards. From functioning
            seatbelts to well-maintained brakes, we ensure every ride is as
            secure as it is comfortable.
          </p>
        </div>
        <Image
          src={safety2}
          alt="driverapp"
          className=" rounded-2xl w-full md:max-w-[45%] object-cover object-center"
        />
      </div>

      {/* <FAQ /> */}
    </div>
  );
};

export default Ridesafety;
