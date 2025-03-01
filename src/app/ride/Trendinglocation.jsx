import React from "react";
import trendingbanner from "../../../public/Assets/trendingbanner.png";
import Image from "next/image";
import btnrightarrow from "../../../public/Assets/buttunrightarrow.svg";
import whitearrow from "../../../public/Assets/whitearrow.svg";
import trendinglocationmobile from "../../../public/Assets/trendinglocationmobile.png";
import taximimgbg from "../../../public/Assets/taxiimage.jpeg";
import arrowicon from "../../../public/Assets/arrow.svg";
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
import prevbtn from "../../../public/Assets/prevbtn.png";
import nextbtn from "../../../public/Assets/blacknextbtn.png";
import { useRef, useEffect, useState } from "react";
import trendinglocationslider from "../../../public/Assets/trendinglocationslider.jpeg";
import popular1 from "../../../public/Assets/popular1.jpeg";
import popular2 from "../../../public/Assets/popular2.jpeg";
import popular3 from "../../../public/Assets/popular3.jpeg";
import belowarrowtrending from "../../../public/Assets/belowarrowtrending.svg";
import flag from "../../../public/Assets/flag.svg";
import belowtrendingsec from "../../../public/Assets/belowtrendingsec.png";
import blogsback from "../../../public/Assets/blogsback.png";
import Footer from "../home/Footer";
import { FaArrowRight } from "react-icons/fa";

const Trendinglocation = () => {
  const [isClient, setIsClient] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalBlogs = 4;
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalBlogs);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [totalBlogs]);

  useEffect(() => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.scrollWidth / totalBlogs;
      containerRef.current.scrollTo({
        left: activeIndex * scrollAmount,
        behavior: "smooth",
      });
    }
  }, [activeIndex, totalBlogs]);

  const mustVisit = [
    {
      index: 1,
      location: "Paris, France",
      description:
        "Experience the charm of the City of Lights with iconic spots like the Eiffel Tower, Louvre Museum, and vibrant cafes like Café de Flore.",
      image: trendinglocationslider,
    },
    {
      index: 2,
      location: "Tokyo, Japan",
      description:
        "A blend of modern innovation and rich culture—visit bustling Shibuya, historic Asakusa, and the serene gardens of Meiji Shrine.",
      image: popular1,
    },
    {
      index: 3,
      location: "Cape Town, South Africa",
      description:
        "From the breathtaking Table Mountain to the lively V&A Waterfront, Cape Town offers stunning views and unforgettable experiences.",
      image: popular3,
    },
    {
      index: 4,
      location: "New York City, USA",
      description:
        "Explore the energy of the Big Apple with attractions like Times Square, Central Park, and the Statue of Liberty.",
      image: popular2,
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div>
      <div className="relative">
        <Image
          src={trendingbanner}
          alt="logistic"
          className="h-[70vh] md:h-[90vh]"
        />
        <div className="absolute top-0 left-0 md:max-w-[55%] h-full flex flex-col justify-center pl-[5%] ">
          <p className="font-redhat font-bold text-[24px] md:text-[40px] md:leading-[60px] text-white">
            Ditch the Boredom, Dive into Fun with BOLD!
          </p>
          <p className="font-opensans text-base md:text-xl text-[#BBBBBB] pt-6">
            Turn ordinary moments into unforgettable adventures with{" "}
            <span className="font-bold">BOLD</span>. Discover trending events,
            book your tickets, and travel affordably by sharing a ride with
            friends or choosing eco-friendly options for a greener journey.{" "}
            <br />
            With reliable drivers, transparent pricing, and seamless travel,{" "}
            <span className="font-bold">BOLD</span> makes every trip as exciting
            as the destination.
          </p>
          <div className=" flex gap-6 pt-6">
            <button className=" text-white font-opensans font-semibold text-base md:text-2xl flex items-center gap-3 rounded-lg underline hover:text-[#18C4B8] ">
              Explore Trending Locations On Bold Now
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-[5%] items-center md:py-28 py-12 ">
        <div className="md:max-w-[50%] flex flex-col justify-center ">
          <p className="font-bold text-xl md:text-4xl font-redhat">
            What’s Trending Around You?
          </p>
          <p className="text-lg md:text-2xl font-semibold pt-4 font-opensans">
            Looking for the best spots in town? Bold’s got you covered! From
            cozy cafes and must-visit restaurants to popular tourist attractions
            and exciting event venues, we’ll help you find all the buzz-worthy
            places.
          </p>
          <p className="text-base md:text-xl  pt-8 font-opensans">
            Ready to explore? Let’s make your next outing unforgettable!
          </p>
        </div>
        <Image
          src={trendinglocationmobile}
          alt="driverapp"
          style={{ maxWidth: "45%" }}
          className="hidden md:block"
        />
      </div>

      <div className="bg-[#F3F3F3] px-[5%] pt-14 pb-20">
        <div className="flex justify-between gap-[20%] mb-10">
          <div className=" flex-grow flex gap-4 items-center">
            <p className="font-bold text-xl md:text-4xl">
              Must-Visit Destinations Near You
            </p>
            <Image src={flag} alt="flag" />
            <Image src={belowarrowtrending} alt="belowarrow" className="pt-6" />
          </div>
          <div className="flex gap-6">
            <button ref={prevRef}>
              <Image src={prevbtn} alt="Previous" />
            </button>
            <button ref={nextRef}>
              <Image src={nextbtn} alt="Next" />
            </button>
          </div>
        </div>
        {isClient && (
          <Swiper
            className="h-full md:w-full px-8"
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            // spaceBetween={20}
            // slidesPerView={2.5}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 20 },
              480: { slidesPerView: 2, spaceBetween: 30 },
              640: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 3.5, spaceBetween: 40 },
            }}
          >
            {mustVisit.map((must) => (
              <SwiperSlide key={must.index}>
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src={must.image}
                    alt="productimg"
                    className="h-[80vh] max-w-[200px] sm:max-h-full sm:max-w-full relative object-cover"
                    // style={{ maxHeight: 350 }}
                  />
                  <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                  <div className="absolute sm:w-full top-0 flex flex-col-reverse pt-6 justify-between h-full px-2 pb-10 z-20">
                    <p className="font-bold text-sm md:text-xl text-white ">
                      {must.description}
                    </p>
                    <div className="absolute top-1 -left-1  md:relative w-full flex justify-end">
                      <div className="w-fit h-5 rounded-3xl bg-white p-3 py-4 flex flex-nowrap items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#EF1D1D]"></div>
                        <p className="font-opensans text-xs md:text-sm text-nowrap font-bold">
                          {must.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <div className="flex justify-between px-[5%] items-center md:py-28 py-16">
        <Image
          src={belowtrendingsec}
          alt="driverapp"
          style={{ maxWidth: "45%" }}
          className="hidden md:block"
        />
        <div className="md:max-w-[50%] flex flex-col justify-center ">
          <p className="font-bold text-xl md:text-4xl font-redhat">
            Find Your Perfect Coffee Spot ☕
          </p>
          <p className="text-lg md:text-2xl font-semibold pt-4 font-opensans">
            Sometimes, the best way to recharge is with a great cup of coffee
            and some time to yourself. <span className="font-bold">BOLD</span>{" "}
            helps you discover cozy cafés where you can enjoy not just amazing
            coffee, but also delicious pastries that make your me-time extra
            special.
          </p>
          <p className="text-base md:text-xl pt-4 md:pt-8 font-opensans ">
            Whether you&apos;re looking for a quiet corner to unwind or a
            peaceful spot to reflect, these cafés offer the perfect environment
            to savor every moment.
            <br />
            Take a deep breath, sip slowly, and enjoy the simple joy of spending
            time with yourself. You’ve earned it.
          </p>
          <div className=" flex gap-6 pt-6">
            <button className="font-opensans font-semibold text-base md:text-2xl flex items-center gap-3 rounded-lg underline hover:text-[#18C4B8]">
              Find Your Perfect Café with Bold Today!
              <span className="inline-flex ">
                <FaArrowRight size={20} />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className=" w-full  px-[5%]">
        <p className="hidden md:flex font-redhat font-bold text-4xl pt-28 pb-10">
          Check Out Our Latest Blogs
        </p>
        <p className="md:hidden font-redhat font-bold text-xl pt-0 pb-4">
          Check Out Our Latest Blogs
        </p>
        {/* <p className="md:hidden font-redhat text-base  pb-6">
          Lorem ipsum dolor sit amet, consectetur
        </p> */}

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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trendinglocation;
