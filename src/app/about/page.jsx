"use client";
import anotheraboutbanner from "../../../public/Assets/anotheraboutbanner.png";
import Image from "next/image";
import yellowstr from "../../../public/Assets/yellowstr.svg";
import manyusers from "../../../public/Assets/2kusers.png";
import taxiimage from "../../../public/Assets/taxiimage.jpeg";
import smallanotherabout from "../../../public/Assets/smallanotherabout.png";
import aboutbigbanner from "../../../public/Assets/aboutbigbanner.png";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
//   import "./slwiperslider.css";
import taximimgbg from "../../../public/Assets/taxiimage.jpeg";
import arrowicon from "../../../public/Assets/arrow.svg";
import btnrightarrow from "../../../public/Assets/buttunrightarrow.svg";
import Footer from "../home/Footer";

const Anotherabout = () => {
  return (
    <div className="">
      <div className="relative w-full">
        <div className="absolute w-full bg-black opacity-60 h-[70vh] md:h-[90vh]"></div>
        <Image
          src={anotheraboutbanner}
          alt="anotherabout"
          className="object-cover h-[70vh] md:h-[90vh]"
        />
        <div className="absolute w-full top-0 left-0 h-full flex items-center">
          <div className="md:max-w-[55%] flex flex-col justify-center mx-4 md:mx-auto md:items-center">
            <p className="font-bold text-4xl font-opensans text-white md:text-center">
              BOLD…MORE THAN AN APP
            </p>
            <p className="text-xl pt-6 md:font-semibold text-white md:text-center ">
              Bold is more than just a ride-hailing service—it’s your all-in-one
              solution for getting around with ease. We connect people and
              businesses to their destinations with services tailored to fit
              your needs, letting you move without the hassle.
            </p>
            <div className="flex gap-2">
              <div className="flex pt-8 items-center">
                <p className="md:text-2xl text-xl text-white">Ratings</p>
                <div className="flex  items-center pl-3 gap-1 ">
                  <Image src={yellowstr} alt="yellostr" height={16} />
                  <p className="text-lg text-white"> 4.8</p>
                </div>
                <Image
                  src={manyusers}
                  alt="manyusers"
                  height={40}
                  className="pl-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col-reverse md:flex-row justify-between w-full gap-4 md:gap-[5%]  py-20 px-[5%]">
        <div className="md:w-[55%] flex flex-col justify-center">
          <p className="font-opensans  text-xl md:text-4xl">
            <span className="font-bold">MOVE SMARTER, LIVE BOLDER:</span> THE
            FUTURE OF TRANSPORTATION
          </p>
          <p className="font-opensans text-base md:text-xl pt-6">
            Bold is designed to revolutionize transportation, logistics, and
            rentals, offering a seamless experience for individual users,
            businesses, and drivers. We integrate ride-hailing, package
            delivery, car rentals, and more into one platform, delivering
            convenience, efficiency, and flexibility tailored to the diverse
            needs of users. Whether it’s vehicles fit for a family road trip or
            on-demand services available 24/7, Bold provides solutions designed
            for your convenience. We prioritize your safety, comfort, and peace
            of mind through innovative and trusted technology. Our services
            include:
            <ul className="mx-8 list-disc">
              <li>Eco-friendly rides</li>
              <li>Affordable and spacious rides.</li>
              <li>Logistics services</li>
              <li>Vehicle jump-starts</li>
              <li>Car leasing</li>
              <li>Parking solutions</li>
              <li>Real-time GPS tracking</li>
              <li>A dual-sided marketplace</li>
              <li>Transparent pricing with bidding options</li>
              <li>Multiple payment methods</li>
            </ul>
            Bold is your all-in-one hub for seamless movement, saving you time
            while delivering top-tier service.
          </p>
        </div>
        <div className="md:w-[42%] rounded-2xl overflow-hidden">
          <Image src={taxiimage} alt="promotion" />
        </div>
      </div>
      <div className=" px-[5%]">
        <Image src={aboutbigbanner} alt="smallanother" />
      </div>

      <div className=" flex flex-col md:flex-row justify-between w-full gap-[5%]  py-20 px-[5%]">
        <div className="md:w-[42%] rounded-2xl overflow-hidden">
          <Image src={smallanotherabout} alt="promotion" />
        </div>
        <div className="md:w-[55%] flex flex-col justify-center">
          <p className="font-opensans font-bold text-xl md:text-4xl">
            Ride green and save the planet with BOLD!
          </p>
          <p className="font-opensans text-base md:text-xl pt-6">
            We’re on a mission to save the planet.{" "}
            <span className="font-bold">BOLD</span>’s eco-friendly vehicles are
            a movement toward a greener future. You get comfort and reliability
            while making choices that reduce your carbon footprint. Whether
            you’re commuting to work, running errands, or heading out for a fun
            day, every ride helps protect the environment. By choosing{" "}
            <span className="font-bold">BOLD</span>, you’re showing that small
            changes can make a big impact. Together, we can create a cleaner,
            healthier planet for generations to come. Make a{" "}
            <span className="font-bold">BOLD</span> move for the Earth today!
          </p>
        </div>
      </div>

      <div className="px-[5%] bg-[#F3F3F3] pt-10 pb-14">
        <p className="font-bold text-xl md:text-4xl md:text-center">
          Our Blogs
        </p>
        <p className="text-base md:hidden">
          Lorem ipsum dolor sit amet, consectetur{" "}
        </p>
        <div className="pt-8 md:pt-20">
          <Swiper
            className="h-full w-full px-8"
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={false}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              480: { slidesPerView: 2, spaceBetween: 30 },
              640: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {[...Array(10)].map((_, index) => (
              <SwiperSlide key={index}>
                {/* <div className="flex flex-col justify-center items-center py-8 px-6 ">
                  <Image
                    src={upperright}
                    alt="productimg"
                    className="max-h-[200px] max-w-[200px] sm:max-h-full sm:max-w-full"
                  />
                  <p className="text-[#D29A5A] text-lg text-center">
                    CINNAMON HONEY
                  </p>
                  <p className="text-white text-center text-base ">
                  <span className="line-through">  $12.00 </span> <span className="text-lg pl-2">$9.00</span>
                  </p>
                </div> */}
                <div className="rounded-2xl overflow-hidden ">
                  <Image
                    src={taximimgbg}
                    alt="productimg"
                    className="max-h-[200px] max-w-[200px] sm:max-h-full sm:max-w-full relative"
                  />
                  <div className="absolute w-full top-0 left-0 flex flex-col justify-end h-full px-8 pb-10">
                    <p className="font-bold text-lg text-white ">
                      Lorem ipsum dolor
                    </p>
                    <p className="pt-2 text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                    <div className="flex gap-2 items-center pt-6">
                      <button className="text-white">Read more</button>{" "}
                      <Image src={arrowicon} alt="arrow" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="md:hidden font-redhat font-bold text-base flex items-center gap-2 rounded-lg mt-4">
            Partner with us
            <span className="inline-flex items-center">
              <Image src={btnrightarrow} alt="btnarrow " width={16}></Image>
            </span>
          </button>
        </div>
      </div>

      <button className="hidden  font-redhat font-bold text-4xl md:flex items-center gap-2 rounded-lg pl-[5%] mt-20 mb-36">
        Partner with us
        <span className="inline-flex items-center">
          <Image src={btnrightarrow} alt="btnarrow " width={16}></Image>
        </span>
      </button>
    </div>
  );
};

export default Anotherabout;
