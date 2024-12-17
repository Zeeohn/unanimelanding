"use client";
import Image from "next/image";
import logisticmain from "../../../public/Assets/logisticmain.png";
import whitearrow from "../../../public/Assets/whitearrow.svg";
import pakageone from "../../../public/Assets/pakageone.png";
import pakagetwo from "../../../public/Assets/pakagetwo.png";
import btnrightarrow from "../../../public/Assets/buttunrightarrow.svg";
import businesspackage from "../../../public/Assets/businesspackage.png";
import domesticpackage from "../../../public/Assets/domesticpackage.png";
import belowbusinessneeds from "../../../public/Assets/belowbusinessneeds.png";
import deliverylogistics from "../../../public/Assets/deliverylogistics.jpeg";
import blogsback from "../../../public/Assets/blogsback.png";
import boldadvertise from "../../../public/Assets/boldadvertise.png";
import nature from "../../../public/Assets/nature.jpeg";
import bicycle from "../../../public/Assets/bicycle.jpeg";
import lanes from "../../../public/Assets/lanes.png";
import Footer from "../home/Footer";
import { useState } from "react";

const Sustainability = () => {
  const [currentpage, setcurrentpage] = useState("default");
  return (
    <div className="">
      <div>
        <div className="relative">
          <div className="absolute w-full md:h-[90vh] h-[70vh] opacity-50 bg-black z-10"></div>
          <Image
            src={nature}
            alt="logistic"
            className="h-[70vh] md:h-[90vh] object-cover"
          />
          <div className="absolute top-0 w-full left-0 md:max-w-[50%] h-full flex flex-col justify-center pl-[5%] z-20">
            <p className="hidden md:block font-opensans font-bold text-[45px] leading-[70px] text-white">
              Sustainability at Bold
            </p>
            <p className="md:hidden font-opensans font-bold text-[25px] text-white">
              Sustainability at Bold
            </p>
            <p className="font-opensans w-full text-base md:text-xl md:font-semibold text-white pt-6">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod.
            </p>
          </div>
        </div>

        <div className="px-[5%] pt-8 pb-10 md:pt-20 md:pb-28">
          <p className="hidden md:block font-opensans font-bold md:text-4xl">
            Sustainability at Bold{" "}
          </p>
          <p className="md:hidden font-opensans font-bold text-lg">
            Sustainability at Bold
          </p>
          <p className="hidden md:block pt-10 text-black text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="md:hidden pt-5 text-black text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-col md:flex-row px-[5%] justify-between gap-4 md:gap-0">
          <div>
            <p className="font-semibold text-xl">Environmental</p>
            <p className="text-gray-400 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
          <div>
            <p className="font-semibold text-xl">Social impact</p>
            <p className="text-gray-400 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
          <div>
            <p className="font-semibold text-xl">Risk management</p>
            <p className="text-gray-400 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
        </div>

        <div className="my-20 px-[5%] flex flex-col justify-center items-center">
          <h2 className="font-semibold text-2xl text-center">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
          </p>
        </div>

        <div className="flex flex-col md:flex-row-reverse justify-between px-[5%] items-center gap-[5%]">
          <Image src={lanes} alt="driverapp" />
          <div className=" flex flex-col justify-center md:max-w-[50%]">
            <p className="font-bold text-xl pt-6 md:pt-0 md:text-4xl font-opensans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
            <p className="text-base md:text-xl text-black md:text-[#777777] pt-6 font-opensans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut  
              </p>          
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between px-[5%] items-center pt-20 md:pb-28 pb-10 md:gap-[5%] gap-8">
          <div className=" flex flex-col justify-center md:max-w-[50%]">
            <p className="font-bold text-xl md:text-4xl font-opensans">
              BOLD Logistics For Individuals
            </p>
            <p className="hidden md:block text-xl text-[#777777] pt-6 font-opensans">
              Need to send something special? BOLD makes it easy! Use the BOLD
              app to deliver gifts, documents, and other items to your friends
              and loved ones. Our reliable same-day delivery ensures your
              packages reach their destination quickly and safely.
            </p>
            <p className="md:hidden text-base text-black pt-4 font-opensans">
              Need to send something special? BOLD makes it easy! Use the BOLD
              app to deliver gifts, documents, and other items to your friends
              and loved ones. Our reliable same-day delivery ensures your
              packages reach their destination quickly and safely.
            </p>
            <button className=" bg-black text-white font-redhat font-semibold text-xl  rounded-lg py-3 px-6 mt-5 w-max">
              Download the App Now
            </button>
          </div>
          <Image src={pakagetwo} alt="driverapp" className="rounded-md" />
        </div>

        <div className="px-[5%]">
          <p className="font-bold text-xl md:text-4xl font-opensans">
            Send Packages With BOLD! Where Fast, Reliable Deliveries Drive Your
            Business.
          </p>
          <div className="flex flex-col md:flex-row justify-between gap-14 md:gap-0 pt-10 pb-28">
            <div className="md:max-w-[45%]">
              <Image src={businesspackage} alt="businesspackage" />
              <div className="bg-[#F3F3F3]  px-6 pb-9">
                <p className="font-opensans font-semibold text-xl md:text-4xl pt-6">
                  For Business and E-commerce
                </p>
                <p className="font-opensans text-sm md:text-xl pt-6">
                  Seamlessly integrate BOLD into your platform and give your
                  customers a smooth experience. Our skilled delivery
                  professionals are ready to deliver when your customers place
                  an order.
                </p>
                <button className="  font-redhat font-semibold text-base md:text-xl flex items-center gap-2 rounded-lg mt-6 underline">
                  Connect your business
                  <span className="inline-flex items-center">
                    <Image
                      src={btnrightarrow}
                      alt="btnarrow "
                      width={16}
                    ></Image>
                  </span>
                </button>
              </div>
            </div>
            <div className="md:max-w-[45%]">
              <Image src={domesticpackage} alt="businesspackage" />
              <div className="bg-[#F3F3F3]  px-6 pb-9">
                <p className="font-opensans font-semibold text-xl md:text-4xl pt-6">
                  For domestic packages
                </p>
                <p className="font-opensans text-sm md:text-xl pt-6">
                  Sending a package to a friend or family? With{" "}
                  <span className="font-bold">BOLD’s</span> reliable same-day
                  delivery, we can deliver on time.
                </p>
                <button className="font-redhat font-semibold text-base md:text-xl flex items-center gap-2 rounded-lg mt-6 underline">
                  Send your package now{" "}
                  <span className="inline-flex items-center">
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
        </div>

        <div className="relative ">
          <div className="absolute h-[90vh] opacity-50 bg-black z-50"></div>
          <Image
            src={bicycle}
            alt="cycling"
            // style={{ maxHeight: 700 }}
            className="relative h-[90vh] object-cover"
          />
          <div className="absolute top-0 left-0 md:max-w-[50%] pl-[5%] flex flex-col justify-center md:justify-end h-full md:pb-24">
            <p className="font-bold text-[25px] md:text-[50px] md:leading-[70px] text-white">
              Get the BOLD App and Accelerate Your Deliveries. Join BOLD for
              Lightning-Fast, Reliable Logistics!
            </p>
            <button className="rounded-lg mt-2 md:mt-10 py-3 px-6 font-redhat text-xl font-semibold bg-white w-fit">
              Download App Now
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between px-[5%] items-center gap-[5%] pt-28">
          <Image src={belowbusinessneeds} alt="driverapp" />
          <div className=" flex flex-col justify-center md:max-w-[50%]">
            <p className="font-bold text-xl md:text-4xl mt-4 md:mt-0 font-opensans">
              Join BOLD package for all your e-commerce & business needs.
            </p>
            <p className="hidden md:block text-xl text-[#777777] pt-6 font-opensans">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
            <p className="md:hidden text-base text-black pt-6 font-opensans">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
            <button className=" bg-white font-redhat font-semibold text-base md:text-xl flex items-center gap-2 rounded-lg mt-8 underline">
              Join as business partner{" "}
              <span className="inline-flex items-center">
                <Image src={btnrightarrow} alt="btnarrow " width={16}></Image>
              </span>
            </button>
          </div>
        </div>

        <div className="px-[5%]">
          <p className="font-redhat font-bold text-xl md:text-4xl pt-20 md:pt-28 pb-10">
            Read our latest Blogs
          </p>
          {/* Blog 1 */}
          {/* <div className="group flex-grow basis-1/2 transition-all duration-300 relative bg-cover bg-center hover:basis-1/2"
              style={{ backgroundImage: "url('/path-to-image-1.jpg')" }}>
           <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
             <p className="text-white text-2xl font-bold">
               How to connect your e-commerce <br /> with BOLD logistics
             </p>
           </div>
         </div> */}

          {/* Other Blogs */}
          <div className="flex w-full gap-4 mb-12 md:mb-28 min-h-[360px] overflow-x-auto">
            {[1, 2, 3, 4].map((blog, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[calc(100vw-4rem)] md:w-1/4 relative rounded-2xl overflow-hidden 
                  hover:w-[calc(100vw-2rem)] md:hover:w-1/2 
                  transition-all duration-300"
              >
                <Image
                  src={blogsback}
                  alt="blogsback"
                  className="w-full h-full object-center object-cover"
                />
                <div className="absolute w-full h-full top-0 left-0 px-8 pb-14 flex justify-end flex-col">
                  <p className="text-white text-xl md:group-hover:text-2xl transition-all duration-300 font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:px-[5%] pb-28 ">
          <div className="flex flex-row md:rounded-3xl justify-between pl-[5%] items-center  bg-[#191919] ">
            <div className="md:max-w-[55%] flex flex-col justify-center">
              <p className="font-bold mt-3 md:mt-0 text-xl md:text-4xl text-white">
                Unlock the Power of Fast Deliveries. Download Our App Today!
              </p>
              <p className="md:font-semibold text-sm pt-2 md:pt-8 max-w-[70%] md:max-w-[80%] text-white">
                Experience hassle-free deliveries with just a tap. Our app gives
                you access to fast, reliable, and secure shipping solutions, all
                in one place. Whether you’re sending a package across town or
                the country, we&apos;ve got you covered. Download the BOLD app
                and unlock the power of seamless deliveries at your fingertips.
              </p>
              <div className="flex gap-2 flex-row justify-between mb-3">
                <div>
                  <button className="md:p-4 px-2 py-3 text-white font-redhat font-semibold text-base md:text-xl flex items-center gap-2 rounded-lg mt-6 border border-white">
                    Download App Now
                    <span className="inline-flex items-center text-white">
                      <Image
                        src={whitearrow}
                        alt="btnarrow "
                        width={16}
                      ></Image>
                    </span>
                  </button>
                </div>
                <Image
                  src={boldadvertise}
                  alt="driverapp"
                  // style={{ maxWidth: "50%" }}
                  className="md:hidden max-w-[40%]"
                />
              </div>
            </div>
            <Image
              src={boldadvertise}
              alt="driverapp"
              // style={{ maxWidth: "50%" }}
              className="md:max-w-[50%] hidden md:flex"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
