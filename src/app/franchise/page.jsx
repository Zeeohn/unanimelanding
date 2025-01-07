"use client";
import Image from "next/image";
import franchiselanding from "../../../public/Assets/franchise-landing.png";
import whitearrow from "../../../public/Assets/whitearrow.svg";
import pakagetwo from "../../../public/Assets/pakagetwo.png";
import btnrightarrow from "../../../public/Assets/buttunrightarrow.svg";
import businesspackage from "../../../public/Assets/businesspackage.png";
import domesticpackage from "../../../public/Assets/domesticpackage.png";
import belowbusinessneeds from "../../../public/Assets/belowbusinessneeds.png";
import deliverylogistics from "../../../public/Assets/deliverylogistics.jpeg";
import blogsback from "../../../public/Assets/blogsback.png";
import boldadvertise from "../../../public/Assets/boldadvertise.png";
import high from "../../../public/Assets/highrise.png";
import growing from "../../../public/Assets/growing.png";
import growing2 from "../../../public/Assets/growing2.png";
import growing3 from "../../../public/Assets/growing3.png";
import franchise2 from "../../../public/Assets/franchise2.png";
import franchise3 from "../../../public/Assets/franchise3.png";
import franchise4 from "../../../public/Assets/franchise4.png";
import supportbanner from "../../../public/Assets/supportbanner.jpeg";
import Footer from "../home/Footer";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Franchisepage = () => {
    const [currentpage, setcurrentpage] = useState("default");
    
     const checklistItems = [
       "Innovative Technology",
       "Customer-Centric Approach",
       "Scalable Solutions",
     ];
    
    const checklist2 = [
      {
      index: 1,
      title: "Commitment to Service Excellence",
      content: "Deliver high- quality, on - time transportation with a customer - first attitude."
    },
      {
        index: 2,
        title: "Leadership and Drive",
        content: "Manage your team, build a local network, and be an ambassador for BOLD in your community."
      },
      {
        index: 3,
        title: "Understanding of the Market",
        content: "Know the local market dynamics and adapt to customer needs, creating growth opportunities."
      },
      {
        index: 4,
        title: "Adaptability and Growth Mindset",
        content: "Work with our innovative technology and systems to scale your franchise quickly and effectively."
      },
    ];
    
  return (
    <div>
      <div className="relative">
        <div className="absolute w-full md:h-[90vh] h-[70vh] opacity-70 bg-black z-10"></div>
        <Image
          src={franchiselanding}
          alt="logistic"
          className="h-[70vh] md:h-[90vh] object-cover"
        />
        <div className="absolute top-0 w-full left-0 md:max-w-[50%] h-full flex flex-col justify-center pl-[5%] z-20">
          <p className="hidden md:block font-opensans font-bold text-[45px] leading-[70px] text-white">
            Join the mission: Become a
            <br />
            <span className="text-[#18C4B8] font-bold">BOLD</span> Franchise
          </p>
          <p className="md:hidden font-opensans font-bold text-[25px] text-white">
            Join the mission: Become a
            <br />
            <span className="text-[#18C4B8] font-bold">BOLD</span> Franchise
          </p>
          <p className="font-opensans w-full text-base md:text-xl text-white pt-6">
            BOLD is expanding rapidly, and we invite you to be part of the
            growth. As a franchise partner, you’ll lead local operations and
            drive market success. With our innovative technology, strong brand,
            and expert support, you’ll have the tools to thrive.
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:gap-6 pt-8 w-[70%] md:w-full">
            <button className="font-opensans text-xl font-semibold py-[10px] px-6 text-white bg-[#18C4B8] hover:bg-[#12a096] rounded-lg">
              Partner with us
            </button>
            {/* <button
              className=" text-white underline md:underline-none font-opensans font-semibold text-xl flex items-center gap-3 rounded-lg "
              onClick={() => setcurrentpage("trackpackage")}
            >
              Track your package
              <span className="inline-flex items-center text-white">
                <Image src={whitearrow} alt="btnarrow " width={16}></Image>
              </span>
            </button> */}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between px-[5%] items-center gap-[5%] pt-8 md:pt-20 ">
        <Image src={high} alt="high rise building" />
        <div className=" flex flex-col justify-center md:max-w-[50%]">
          <p className="font-bold text-xl pt-6 md:pt-0 md:text-4xl font-opensans">
            About <span className="text-cyan-500 font-bold">BOLD</span>
          </p>
          <p className="text-base md:text-xl text-black pt-6 font-opensans">
            <span className="font-bold">BOLD</span> is more than just a
            platform; we’re a movement in the transportation industry. Our
            mission is to effortlessly connect people and businesses to their
            destinations and customers, offering flexible and reliable services
            designed to meet diverse needs. Through cutting-edge technology, a
            commitment to safety, and an expansive vehicle network, we’re
            revolutionizing how people and goods get where they need to go.
          </p>
          <ul className="space-y-3 mt-6">
            {checklistItems.map((item, index) => (
              <li key={index} className="flex items-center">
                <svg
                  className="flex-shrink-0 w-8 h-8 mt-1 text-cyan-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-3 font-semibold">{item}</span>
              </li>
            ))}
          </ul>
          {/* <button className=" bg-white font-redhat font-semibold text-lg underline md:text-xl flex items-center gap-2 rounded-lg mt-8">
            Partner with us today{" "}
            <span className="inline-flex items-center">
              <Image src={btnrightarrow} alt="btnarrow " width={16}></Image>
            </span>
          </button> */}
        </div>
      </div>

      <div className="px-[5%] pt-8 pb-10 md:pt-20 md:pb-20">
        <p className="hidden md:block font-opensans font-bold md:text-4xl">
          Why choose <span className="text-cyan-500 font-bold">BOLD</span>{" "}
          franchise?{" "}
        </p>
        <p className="md:hidden font-opensans font-bold text-lg">
          Why choose <span className="text-cyan-500 font-bold">BOLD</span>{" "}
          franchise?{" "}
        </p>
        <p className="hidden md:block pt-10 text-xl">
          Partnering with BOLD offers a unique opportunity to become part of one
          of the fastest-growing companies in the transportation industry.
        </p>
        <p className="md:hidden pt-5 text-black text-base">
          Partnering with BOLD offers a unique opportunity to become part of one
          of the fastest-growing companies in the transportation industry.
        </p>
      </div>

      <div className="flex md:flex-row flex-col md:justify-evenly items-center justify-center gap-10 px-[5%]">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Image src={growing} alt="" />
          <div>
            <p className="font-bold text-base md:text-xl font-opensans underline md:no-underline">
              Fastest growing company
            </p>
            <p className="text-gray-400 hidden md:block">
              Join a leader in the industry, expanding across multiple regions
              with high demand.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <Image src={growing2} alt="" />
          <div>
            <p className="font-bold text-base md:text-xl font-opensans underline md:no-underline">
              Fast business setup
            </p>
            <p className="text-gray-400 hidden md:block">
              Start your franchise quickly with a proven system. We'll provide
              you full support.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <Image src={growing3} alt="" />
          <div>
            <p className="font-bold text-base md:text-xl font-opensans underline md:no-underline">
              Large vehicle network
            </p>
            <p className="text-gray-400 hidden md:block">
              Benefit from access to our extensive fleet and scalable business
              model that fits local needs.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row-reverse justify-between px-[5%] items-center pt-20 md:pb-28 pb-10 md:gap-[5%] gap-8">
        <div className=" flex flex-col justify-center md:max-w-[50%]">
          <p className="font-bold text-xl md:text-4xl font-opensans">
            What do we expect from you?
          </p>
          <p className="text-base text-black pt-4 md:text-xl  md:pt-6 font-opensans">
            At BOLD, we expect franchise partners to be driven,
            customer-focused, and ready to embrace technology.
          </p>
          <ul className="flex flex-col md:items-center md:flex-row md:flex-wrap md:gap-6 space-y-3 mt-6">
            {checklist2.map((check) => (
              <li key={check.index} className="flex items-center">
                <svg
                  className="flex-shrink-0 w-8 h-8 mt-1 text-cyan-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-3 font-semibold">{check.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <Image src={franchise2} alt="driverapp" className="rounded-md" />
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between px-[5%] items-center md:pb-28 pb-10 md:gap-[5%] gap-8">
        <div className=" flex flex-col justify-center md:max-w-[50%]">
          <p className="font-bold text-xl md:text-4xl font-opensans">
            Own a Piece of the Future
          </p>
          <p className="text-base text-black pt-4 md:text-xl  md:pt-6 font-opensans">
            Bring sustainable and innovative transportation to your city and
            grow with us. Join the BOLD movement and redefine urban mobility.
            When you own a BOLD franchise, you invest in a greener, smarter, and
            more connected future. Together, we’ll help people move better,
            businesses deliver faster, and cities thrive sustainably.
            {/* <span className="font-bold underline cursor-pointer">
              Read more
            </span> */}
          </p>
        </div>
        <Image src={franchise3} alt="driverapp" className="rounded-md" />
      </div>

      <div className="flex flex-col-reverse md:flex-row-reverse justify-between items-center md:mb-28 py-8 bg-gray-100 mb-10 md:gap-[5%] gap-8">
        <div className=" flex flex-col justify-center px-[5%] md:pr-[5%] md:max-w-[50%]">
          <p className="font-bold text-lg md:text-4xl font-opensans mb-4">
            How to Start Your Journey To Own BOLD Franchise
          </p>
          <div className="my-3">
            <p className="font-semibold my-1">Fill Out The Application Form</p>
            <p className="text-gray-400 text-sm">
              Start your journey by filling out our application form. We’ll
              review your details and get back to you with the next steps.
            </p>
          </div>
          <div className="my-3">
            <p className="font-semibold my-1">
              Connect With Our Franchise Team
            </p>
            <p className="text-gray-400 text-sm">
              Once your application is submitted, you’ll connect with our
              dedicated franchise team. We’ll discuss your goals and set you up
              for success.
            </p>
          </div>
          <div className="my-3">
            <p className="font-semibold my-1">Launch Your Bold Franchise</p>
            <p className="text-gray-400 text-sm">
              Get ready to open your franchise and make a lasting impact in your
              community. Our team will provide support to ensure a smooth and
              successful launch.
            </p>
          </div>
        </div>
        <Image
          src={supportbanner}
          alt="driverapp"
          className="md:w-[50vw] h-full"
        />
      </div>

      {/* style={{
              background:
                "linear-gradient(114.27deg, #617FF6 14.24%, #D98DB6 109.91%)",
            }} */}

      <div className="md:px-[5%] pb-28 relative">
        <div className="flex flex-row md:rounded-3xl justify-between items-center ">
          <Image
            src={franchise4}
            alt="logistic"
            className="object-cover h-[35vh] md:h-full md:rounded-3xl"
          />
          <div className="md:max-w-[55%] flex flex-col justify-center pl-[5%] absolute ">
            <p className="font-bold mt-3 md:mt-0 text-xl md:text-4xl text-white">
              Get started
            </p>
            <p className="hidden md:block md:font-semibold text-base md:text-xl pt-2 md:pt-8 max-w-[70%] md:max-w-[80%] text-white">
              Ready to be part of the BOLD movement? Apply now and take the
              first step toward owning a BOLD franchise. Leverage our
              industry-leading technology, expertise, and growth potential to
              build a successful business in your area.
            </p>
            <p className="font-semibold md:hidden pt-2 text-white">
              Ready to be part of the BOLD movement? Apply now and take the
              first step toward owning a BOLD franchise. Leverage our
              industry-leading technology, expertise, and growth potential to
              build a successful business in your area.
            </p>
            <div className="flex gap-2 flex-row justify-between mb-3">
              <div>
                <button className="md:p-4 px-2 py-3 text-white font-redhat font-semibold  bg-[#18C4B8] hover:bg-[#12a096]  text-base md:text-xl flex items-center gap-2 rounded-lg mt-6 ">
                  Apply Now
                  <span className="inline-flex md:hidden items-center text-white">
                    <FaArrowRight size={20} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Franchisepage;
