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
import logisticoverlay from "../../../public/Assets/logistic-overlay.png";
import Footer from "../home/Footer";
import { useState } from "react";
import Packagepage from "../package/page";
import Trackdetails from "../package/Trackdetails";
import { FaArrowRight } from "react-icons/fa";

const Logisticspage = () => {
  const [currentpage, setcurrentpage] = useState("default");
  return (
    <div className="">
      {currentpage === "trackpackage" ? (
        <Packagepage setcurrentpage={setcurrentpage} />
      ) : currentpage === "trackdetail" ? (
        <Trackdetails />
      ) : (
        <div>
          <div className="relative">
            <div className="absolute w-full md:h-[90vh] h-[70vh] opacity-60 bg-black z-10"></div>
            <video
              autoPlay
              loop
              muted
              className="h-[70vh] md:h-[90vh] w-[100vw] object-cover"
            >
              <source src="/Assets/logistics-hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute top-0 w-full left-0 md:max-w-[60%] h-full flex flex-col justify-center pl-[5%] z-20">
              <p className="hidden md:block font-opensans font-bold text-[45px] leading-[70px] text-white">
                Deliveries Made Easy With Your E-Commerce Logistics Partner
              </p>
              <p className="md:hidden font-opensans font-bold text-[25px] text-white">
                Deliveries Made Easy With Your E-Commerce Logistics Partner
              </p>
              <p className="font-opensans w-full text-base md:text-xl md:font-semibold text-white pt-6">
                Satisfy your customers with on-time deliveries. Whether you’re
                making a delivery within the city, intercity, or to another
                country, BOLD helps you deliver seamlessly.
              </p>
              <div className="flex flex-col gap-4 md:flex-row md:gap-6 pt-8 w-[70%] md:w-full">
                <button className="font-opensans text-xl font-semibold py-[10px] px-6  bg-[#18C4B8] hover:bg-[#12a096] text-white rounded-lg">
                  Ship with us today
                </button>
                <button
                  className=" text-white underline md:underline-none font-opensans font-semibold text-xl flex items-center gap-3 rounded-lg hover:text-[#18C4B8] "
                  onClick={() => setcurrentpage("trackpackage")}
                >
                  Track your package
                  <FaArrowRight size={20} />
                  {/* <span className="inline-flex items-center text-white">
                  </span> */}
                </button>
              </div>
            </div>
          </div>

          <div className="px-[5%] pt-8 pb-10 md:pt-20 md:pb-28">
            <p className="hidden md:block font-opensans font-bold md:text-4xl">
              Take a BOLD Step With Deliveries{" "}
            </p>
            <p className="md:hidden font-opensans font-bold text-lg">
              Take a BOLD Step With Deliveries
            </p>
            <p className="hidden md:block pt-10 text-[#777777] text-xl">
              No more delivery struggles. Experience fast and secure deliveries
              with <span className="font-bold">BOLD Logistics</span>. If you run
              an E-Commerce business, this one’s for you. And yes, even random
              people can send packages too. Sending packages is only a tap away.
            </p>
            <p className="md:hidden pt-5 text-black text-base">
              No more delivery struggles. Experience fast and secure deliveries
              with <span className="font-bold">BOLD Logistics</span>. If you run
              an E-Commerce business, this one’s for you. And yes, even random
              people can send packages too. Sending packages is only a tap away.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between px-[5%] items-center gap-[5%]">
            <Image src={pakageone} alt="driverapp" />
            <div className=" flex flex-col justify-center md:max-w-[50%]">
              <p className="font-bold text-xl pt-6 md:pt-0 md:text-4xl font-opensans">
                Level Up Your Online Business With BOLD Logistics
              </p>
              <p className="text-base md:text-xl text-black md:text-[#777777] pt-6 font-opensans">
                Join <span className="font-bold">BOLD Logistics</span> to keep
                your customers satisfied with fast delivery services. We partner
                with you for all your delivery needs so you can keep your online
                store running smoothly.
              </p>
              <button className=" bg-white hover:text-[#18C4B8] font-redhat font-semibold text-lg underline md:text-xl flex items-center gap-2 rounded-lg mt-8">
                Partner with us today{" "}
                <span className="inline-flex items-center">
                  <FaArrowRight size={20} />
                </span>
              </button>
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
              <button className="  bg-[#18C4B8] hover:bg-[#12a096]  text-white font-redhat font-semibold text-xl  rounded-lg py-3 px-6 mt-5 w-max">
                Download the App Now
              </button>
            </div>
            <Image src={pakagetwo} alt="driverapp" className="rounded-md" />
          </div>

          <div className="px-[5%]">
            <p className="font-bold text-xl md:text-4xl font-opensans">
              Send Packages With BOLD! Where Fast, Reliable Deliveries Drive
              Your Business.
            </p>
            <div className="flex flex-col md:flex-row justify-between gap-14 md:gap-0 pt-10 pb-28">
              <div className="md:max-w-[45%]">
                <Image src={businesspackage} alt="businesspackage" />
                <div className="bg-[#F3F3F3] md:h-[55vh] px-6 pb-9">
                  <p className="font-opensans font-semibold text-xl md:text-4xl pt-6">
                    For Business and E-commerce
                  </p>
                  <p className="font-opensans text-sm md:text-xl pt-6">
                    Seamlessly integrate BOLD into your platform and give your
                    customers a smooth experience. Our skilled delivery
                    professionals are ready to deliver when your customers place
                    an order.
                  </p>
                  <button className=" hover:text-[#18C4B8] font-redhat font-semibold text-base md:text-xl flex items-center gap-2 rounded-lg mt-6 underline">
                    Connect your business
                    <span className="inline-flex items-center">
                      <FaArrowRight size={20} />
                    </span>
                  </button>
                </div>
              </div>
              <div className="md:max-w-[45%] h-full">
                <Image src={domesticpackage} alt="businesspackage" />
                <div className="bg-[#F3F3F3] md:h-[55vh] px-6 pb-9">
                  <p className="font-opensans font-semibold text-xl md:text-4xl pt-6">
                    For domestic packages
                  </p>
                  <p className="font-opensans text-sm md:text-xl pt-6">
                    Sending a package to a friend or family? With{" "}
                    <span className="font-bold">BOLD’s</span> reliable same-day
                    delivery, we can deliver on time.
                  </p>
                  <button className="font-redhat hover:text-[#18C4B8] font-semibold text-base md:text-xl flex items-center gap-2 rounded-lg mt-6 underline">
                    Send your package now{" "}
                    <span className="inline-flex items-center">
                      <FaArrowRight size={20} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex">
            {/* <div className="absolute max-h-[700] opacity-50 bg-black z-10"></div> */}
            <Image
              src={deliverylogistics}
              alt="deliverylogistics"
              style={{ maxHeight: 700 }}
              className="max-w-[100%]"
            />
            <Image
              src={logisticoverlay}
              alt="blue overlay"
              className="flex absolute h-full opacity-60 w-full z-10"
            />
            <div className="absolute top-0 left-0 md:max-w-[50%] pl-[5%] flex flex-col justify-center md:justify-end h-full md:pb-24 z-20">
              <p className="font-bold text-[25px] md:text-[50px] md:leading-[70px] text-white">
                Get the BOLD App and Accelerate Your Deliveries. Join BOLD for
                Lightning-Fast, Reliable Logistics!
              </p>
              <button className="rounded-lg mt-2 md:mt-10 py-3 px-6 font-redhat text-xl font-semibold  bg-[#18C4B8] hover:bg-[#12a096] text-white w-fit">
                Download App Now
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between px-[5%] items-center gap-[5%] pt-28">
            <Image src={belowbusinessneeds} alt="driverapp" />
            <div className=" flex flex-col justify-center md:max-w-[50%]">
              <p className="font-bold text-xl md:text-4xl mt-4 md:mt-0 font-opensans">
                Use Bold Logistics for Your E-Commerce and Business Needs
              </p>
              <p className="hidden md:block text-xl text-[#777777] pt-6 font-opensans">
                Send packages locally, across cities, and internationally. We’re
                your trusted companion, whether you&apos;re a business, an
                individual, or an e-commerce platform. We prioritize efficiency,
                security, and transparency every step of the way. Track your
                package in real-time and stay connected to your delivery with
                the Bold app or website.
              </p>
              <p className="md:hidden text-base text-black pt-6 font-opensans">
                Send packages locally, across cities, and internationally. We’re
                your trusted companion, whether you&apos;re a business, an
                individual, or an e-commerce platform. We prioritize efficiency,
                security, and transparency every step of the way. Track your
                package in real-time and stay connected to your delivery with
                the Bold app or website.
              </p>
              <button className=" bg-white hover:text-[#18C4B8] font-redhat font-semibold text-base md:text-xl flex items-center gap-2 rounded-lg mt-8 underline">
                Join as business partner{" "}
                <span className="inline-flex items-center">
                  <FaArrowRight size={20} />
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

          <div className="md:px-[5%] pb-28">
            <div className="flex flex-row md:rounded-3xl justify-between pl-[5%] items-center  bg-[#041521] ">
              <div className="md:max-w-[55%] flex flex-col justify-center">
                <p className="font-bold mt-3 md:mt-0 text-xl md:text-4xl text-white">
                  Unlock the Power of Fast Deliveries. Get the BOLD App Today!
                </p>
                <p className="md:font-semibold text-sm pt-2 md:pt-8 max-w-[70%] md:max-w-[80%] text-white">
                  Experience hassle-free deliveries at your fingertips. Our app
                  gives you access to fast, reliable, and secure shipping
                  solutions. We&apos;ve got you covered whether you’re sending a
                  package across town or the country. Download the BOLD app and
                  unlock the power of seamless deliveries.
                </p>
                <div className="flex gap-2 flex-row justify-between mb-3">
                  <div>
                    <button className="md:p-4 px-2 py-3 text-white font-redhat font-semibold text-base md:text-xl flex items-center gap-2 rounded-lg mt-6  bg-[#18C4B8] hover:bg-[#12a096] ">
                      Download Now
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
      )}
    </div>
  );
};

export default Logisticspage;
