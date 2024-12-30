import { useState, useEffect } from "react";
import Image from "next/image";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import taximimgbg from "../../../public/Assets/taxiimage.jpeg";
import logis from "../../../public/Assets/logistic-serv.png";
import jump from "../../../public/Assets/vehicle-jump.png";
import affordable from "../../../public/Assets/affordable-ride.png";
import eco from "../../../public/Assets/eco-friendly.png";
import realtime from "../../../public/Assets/realtime-gps.png";
import multi from "../../../public/Assets/multi-payment.png";

const Slidercomponent = () => {
  const services = [
    {
      index: 1,
      title: "Ride-Hailing Services",
      description: (
        <>
          <span className="font-bold">BOLD</span> offers eco-friendly rides,
          spacious Bold XL options, and premium travel experiences, all designed
          for your convenience and comfort. Choose your ride and start your Bold
          journey today!
        </>
      ),
      image: affordable,
      cta: "Learn More",
      url: "/ride",
    },
    {
      index: 2,
      title: "Bold Logistics/Packages",
      description: (
        <>
          <span className="font-bold">BOLD</span> Logistics provides fast,
          reliable package delivery for individuals and businesses, offering
          local, intercity, and international shipping solutions. We ensure your
          packages are delivered on time, every time.
        </>
      ),
      image: logis,
      cta: "Learn More",
      url: "/logistics",
    },
    {
      index: 3,
      title: "Jumpstart Services",
      description: (
        <>
          Are you having emergency battery issues?{" "}
          <span className="font-bold">BOLD</span> makes it easier for you to
          order a driver to jump-start your car.
        </>
      ),
      image: jump,
      cta: "Learn More",
      url: "/ride",
    },
    {
      index: 4,
      title: "Bold Miles/Intercity",
      description: (
        <>
          Book comfortable, affordable long-distance trips across cities,
          states, and countries easily. Whether you&apos;re going on a road
          trip, travelling out of town for work, heading to the airport, or just
          craving a change of scenery, we&apos;ve got you covered.{" "}
        </>
      ),
      image: eco,
      cta: "Learn More",
      url: "/intercity",
    },
    {
      index: 5,
      title: "Bold Business",
      description: (
        <>
          <span className="font-bold">BOLD</span> revolutionizes business
          mobility with reliable transportation and package delivery solutions.
          Whether you&apos;re a small business or a large corporation, we
          provide the tools to help you grow.
        </>
      ),
      image: multi,
      cta: "Learn More",
      url: "/business",
    },
    {
      index: 6,
      title: "Bold Ads",
      description: (
        <>
          Are you having emergency battery issues?{" "}
          <span className="font-bold">BOLD</span> makes it easier for you to
          order a driver to jump-start your car.
        </>
      ),
      image: realtime,
      cta: "Learn More",
      url: "/business#promotions",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < services.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <div className="px-[5%] pt-10 pb-16 bg-[#111111] mg:mt-28 md:mt-20 mt-12">
      <p className="sm:text-center text-[20px] md:text-[35px] font-bold text-white text-left">
        Our Services
      </p>
      <p className="sm:text-center sm:font-bold pt-2 sm:pt-6 text-sm md:text-[20px] text-white font-normal text-left">
        Explore Our Various Mobility Solutions for You and Your Business
      </p>
      <div className="md:pl-[8%] lg:pt-20 sm:pt-12 pt-6 relative">
        {/* Custom Navigation Buttons */}
        <button
          onClick={handlePrev}
          disabled={currentSlide === 0}
          className={`absolute top-1/2 -left-2 md:left-4 transform  z-10 rounded-full p-3 shadow-md ${
            currentSlide === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-white hover:bg-gray-200"
          }`}
          aria-label="Previous"
        >
          <FaLongArrowAltLeft className="w-3 h-3 md:w-6 md:h-6" />
        </button>
        <button
          onClick={handleNext}
          disabled={currentSlide === services.length - 1}
          className={`absolute top-1/2 right-2 transform z-10 rounded-full p-3 shadow-md ${
            currentSlide === services.length - 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-white hover:bg-gray-200"
          }`}
          aria-label="Next"
        >
          <FaLongArrowAltRight className="w-3 h-3 md:w-6 md:h-6" />
        </button>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={
              isMobile
                ? {
                    transform: `translateX(-${currentSlide * (100 / 2)}%)`,
                    width: `${services.length * (100 / 1.5)}%`,
                  }
                : {
                    transform: `translateX(-${currentSlide * (100 / 3)}%)`,
                    width: `${services.length * (100 / 4.5)}%`,
                  }
            }
          >
            {services.map((service) => (
              <div
                key={service.index}
                className="flex-shrink-0 px-2 cursor-pointer"
                onClick={() => window.open(service.url, "_self")}
                style={
                  isMobile
                    ? { flexBasis: `${100 / 2}%` }
                    : { flexBasis: `${100 / 3}%` }
                }
              >
                <div className="relative h-72 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={service.image}
                    alt="productimg"
                    className="w-full h-full object-cover"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                  {/* Text content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-10">
                    <p className="font-bold text-lg">{service.title}</p>
                    <p className="pt-2 text-sm">{service.description}</p>
                    <button className="flex items-center gap-2 mt-4 font-bold hover:underline hover:text-[#18C4B8] hover:gap-4 transition-transform translate-x-2">
                      {service.cta} <FaLongArrowAltRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slidercomponent;
