"use client";
import { useRouter } from 'next/navigation';
import bgimg from "../../public/Assets/landingmainimg.png";
import Image from "next/image";
import videogif from "../../public/Assets/landing-gif.gif";
import blogimg from "../../public/Assets/blogbg.png";
import uppericon from "../../public/Assets/uppericon.png";
import upperright from "../../public/Assets/upperright.png";
import upperleft from "../../public/Assets/lowerleft.png";
import { useState, useEffect, useRef } from "react";
import Slidercomponent from "./home/Slidercomponent";
import partner1 from "../../public/Assets/partner1.svg";
import partner2 from "../../public/Assets/partner2.svg";
import partner3 from "../../public/Assets/partner3.svg";
import street from "../../public/Assets/taxi-street.png";
import yellow from "../../public/Assets/yellow-taxis.png";
import whitearrow from "../../public/Assets/whitearrow.svg";
import FAQ from "./home/FAQ";
import Footer from "./home/Footer";
import Blogsec from "./home/Blogsec";
import Header from "./home/Header";

const Homepage = () => {
  const imageRef = useRef(null);
  const [paddingTop, setPaddingTop] = useState(0);

  const router = useRouter()

  const handleRedirect = (page) => {
    if(page){
      router.push(page);
    }
  };

  useEffect(() => {
    const updatePadding = () => {
      if (imageRef.current) {
        setPaddingTop(imageRef.current.clientHeight + 200); // Get the image's height
        console.log(imageRef.current.clientHeight);
      }
    };

    updatePadding(); // Initial calculation
    window.addEventListener("resize", updatePadding); // Recalculate on resize

    return () => {
      window.removeEventListener("resize", updatePadding); // Cleanup on unmount
    };
  }, []);

  return (
    <div>
      <div className="h-[70vh] md:h-[100vh] relative">
        {/* <img src={bgimg} alt="backimg" /> */}
        <Image
          className="h-[70vh] md:h-[100vh] object-cover object-center"
          src={bgimg}
          alt="backimg"
        />
        <div className=" absolute w-full h-full top-0 left-0 flex flex-col pt-10 sm:items-center px-[5%] ">
          <p className="font-redhat font-bold text-[25px] md:text-4xl  lg:text-5xl text-white max-w-[100%] md:max-w-[70%] sm:text-center  ">
            Innovative Technology Connecting You Globally
          </p>
          <p className="font-normal font-opensans md:text-[20px] text-base sm:text-xl pt-8  text-white max-w-[100%] sm:max-w-[70%] sm:text-center">
            Bold is more than just a platform—it’s a revolutionary technology
            designed to connect people and businesses, enabling seamless
            movement across the globe. Whether you’re booking a ride in your
            city, delivering packages internationally, or renting a vehicle for
            your journey, Bold integrates cutting-edge solutions to redefine how
            we move and interact.
          </p>
          <div className="flex sm:flex-row flex-col gap-6 justify-start max-w-[100%] sm:max-w-[70%] pt-14">
            <button className="py-3 sm:px-8 font-redhat bg-[#18C4B8] text-white text-sm  sm:text-base md:text-xl rounded-3xl font-bold sm:w-fit w-[50%]">
              Get Started
            </button>
            <button
              className="py-3 sm:px-8 font-redhat font-semibold border-white border-2 text-sm  sm:text-base md:text-xl text-white rounded-3xl sm:w-fit w-[50%]"
              onClick={() => handleRedirect("/company")}
            >
              Know more
            </button>
          </div>
        </div>
      </div>
      <div className="videosec relative">
        <div
          ref={imageRef}
          className="upperone absolute hidden justify-center w-full -top-[160px]  md:flex "
        >
          <Image
            src={videogif}
            alt="backimg"
            style={{
              maxHeight: "600px",
              width: "80%",
              objectFit: "fill",
              borderRadius: "16px",
            }}
          />
        </div>
        <div
          style={{
            paddingTop: paddingTop > 200 ? `${paddingTop / 2}px` : "48px",
          }}
          className=" flex justify-center mt-6 px-[5%] "
        >
          <div className="sm:w-[75%] lg:mt-28 sm:text-center">
            <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl">
              The world feels closer with Bold
            </p>
            <p className=" text-sm md:text-xl pt-2  sm:pt-4 md:pt-6">
              Experience the future of global mobility with Bold. Stay connected
              and in control wherever you go with Bold’s advanced technology,
              everything happens at your fingertips.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4  md:flex-row justify-between px-[5%] md:gap-[6%] pt-12 md:pt-16  lg:pt-20">
        <div className=" md:max-w-[50%]">
          <Image src={uppericon} alt="uppericon"></Image>
          <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl pt-4">
            Global reach and smart solutions
          </p>
          <p className="text-sm md:text-xl pt-2  sm:pt-4 md:pt-6">
            Move effortlessly with Bold across cities, states and countries. We
            have solutions for every need. Whether you want to send packages,
            book a ride or rent a car, BOLD does it all.
          </p>
        </div>
        <Image
          src={upperright}
          alt="right"
          style={{ width: "100%" }}
          className="max-h-[200px] sm:max-h-full object-cover object-center rounded-lg md:rounded-2xl"
        ></Image>
      </div>

      <div className="flex flex-col-reverse gap-4  md:flex-row justify-between px-[5%] md:gap-[6%] pt-12 md:pt-16  lg:pt-20">
        <Image
          src={upperleft}
          alt="right"
          style={{ width: "100%" }}
          className="max-h-[200px] sm:max-h-full object-cover object-center rounded-lg md:rounded-2xl"
        ></Image>
        <div className=" md:max-w-[50%]">
          <p className="font-bold text-xl font-opensans md:text-3xl md:text-right lg:text-4xl pt-4">
            Innovative features
          </p>
          <p className="text-sm md:text-right md:text-xl pt-2  sm:pt-4 md:pt-6">
            Discover exciting locations near you, pay effortlessly with flexible
            options, contact vehicle owners blocking your way, and connect with
            trusted insurance companies. Need a jump start? Get it done hassle
            free all in one app.
          </p>
          {/* <div className=" md:text-right pt-6  md:pt-10">
            <button className="py-2 px-4 md:py-3  md:px-8 text-sm sm:text-base font-redhat border-black border-2 text-black rounded-3xl  ">
              Know more
            </button>
          </div> */}
        </div>
      </div>

      {/* <div className="flex justify-between px-[5%] gap-[6%] pt-20">
      <Image src={upperleft} alt="right"></Image>
        <div className="max-w-[50%] ">
        <p className="font-bold text-4xl pt-10 text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        <p className="text-xl pt-6 text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
       <div className="text-right pt-10"><button className="py-3 px-8 font-redhat border-black border-2 text-black rounded-3xl  ">
              Know more
            </button>
            </div>
        </div>
      
      </div> */}

      <div>
        <Slidercomponent />
      </div>

      {/* // partnersec */}

      <div className="px-[5%] pt-12 md:pt-20 lg:pt-28 lg:pb-20 md:pb-16 pb-12 ">
        <div className="md:max-w-[85%] md:mx-auto">
          {/* <p className="text-lg text-center ">Our partners</p>
        <p className="font-semibold text-xl text-center pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p> */}
          <p className="sm:text-center text-xl  sm:text-lg sm:font-medium font-bold text-left">
            Our Partners
          </p>
          <p className="sm:text-center pt-2 sm:pt-6 text-sm sm:text-2xl md:text-[20px] font-semibold text-left ">
            <span className="font-bold">BOLD</span> builds trust through strong
            partnerships with fleet providers, businesses, and e-commerce
            brands, offering reliable services and rewarding loyalty with
            exclusive programs for frequent users.
          </p>
        </div>

        <div className=" pt-6 sm:pt-12 md:pt-20 lg:pt-28 flex justify-between overflow-x-hidden">
          <Image src={partner1} alt="partner" style={{ width: "15%" }} />
          <Image src={partner2} alt="partner" style={{ width: "15%" }} />
          <Image src={partner3} alt="partner" style={{ width: "15%" }} />
          <Image src={partner1} alt="partner" style={{ width: "15%" }} />
          <Image src={partner2} alt="partner" style={{ width: "15%" }} />
        </div>
      </div>

      {/* // blog sec */}
      <div className="mb-20">
        <Blogsec
          text={`Your safety is our top priority at <span class="font-extrabold">BOLD</span>. With real-time GPS tracking, vetted drivers, and in-app safety tools, 24/7 support, we prioritize your security for a worry-free ride. Travel confidently with <span class="font-extrabold">BOLD</span>’s trusted and secure services.`}
          heading={"Travel The Safe Way"}
          cta={"Read our details on safety concerns"}
          bg={blogimg}
        />
      </div>

      <div className="flex flex-col-reverse gap-2 md:gap-6 md:flex-row md:justify-between px-[5%] md:items-center pt-8 md:pt-12 md:pb-12 lg:pb-20 ">
        <div className="md:max-w-[50%] flex flex-col justify-center">
          <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <p className="font-bold text-sm md:text-xl pt-2 md:pt-4 lg:pt-8">
            Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do
          </p>
          <p className="text-sm md:text-xl pt-2 md:pt-4 lg:pt-6 text-[#777777]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
          <div className="flex gap-2">
            <div>
              <button className="py-[10px] px-4 md:py-3 md:px-6 text-white bg-black font-redhat font-semibold  text-sm md:text-xl flex items-center gap-2 rounded-lg mt-6 md:mt-8 lg:mt-12">
                Download App{" "}
                <span className="inline-flex items-center text-white">
                  <Image src={whitearrow} alt="btnarrow " width={16}></Image>
                </span>
              </button>
            </div>
          </div>
        </div>
        <Image
          src={street}
          alt="driverapp"
          className=" rounded-2xl w-full md:max-w-[45%] object-cover object-center"
        />
      </div>

      <div className="flex flex-col-reverse gap-2 md:gap-6 md:flex-row-reverse md:justify-between px-[5%] md:items-center pt-8 md:pt-12 md:pb-12 lg:pb-20 ">
        <div className="md:max-w-[50%] flex flex-col justify-center">
          <p className="font-bold text-xl font-opensans md:text-right md:text-3xl lg:text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <p className="font-bold text-sm md:text-xl pt-2 md:pt-4 lg:pt-8 md:text-right">
            Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do
          </p>
          <p className="text-sm md:text-xl pt-2 md:pt-4 lg:pt-6 text-[#777777] md:text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>          
        </div>
        <Image
          src={yellow}
          alt="driverapp"
          className=" rounded-2xl w-full md:max-w-[45%] object-cover object-center"
        />
      </div>
      {/* //FAQ */}
      {/* <FAQ /> */}

      {/* //footersec */}
    </div>
  );
};

export default Homepage;
