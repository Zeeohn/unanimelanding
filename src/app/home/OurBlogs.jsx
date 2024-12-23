import { useState, useEffect } from "react";
import Image from "next/image";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import taximimgbg from "../../../public/Assets/taxiimage.jpeg";

const OurBlogs  = () => {
  const services = [
    {
      index: 1,
      title: "Moving with Bold:",
      description: (
        <>
          How Our Tailored Services Make Relocation Effortless, No Matter the
          Distance.
        </>
      ),
      image: taximimgbg,
      cta: "Learn More",
      url: "",
    },
    {
      index: 2,
      title: "Reliable Deliveries with Bold: ",
      description: (
        <>
          Ensuring Your Packages Arrive Safe and On Time.
        </>
      ),
      image: taximimgbg,
      cta: "Here's How",
      url: "",
    },
    {
      index: 3,
      title: "Stuck with a Flat Battery?",
      description: (
        <>How Bold&apos;s Jumpstart Service Gets You Back on Track Fast.</>
      ),
      image: taximimgbg,
      cta: "More Details",
      url: "",
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
      <p className="sm:text-center text-xl sm:text-lg text-white sm:font-medium font-bold text-left">
        More Blogs
      </p>
      <p className="sm:text-center sm:font-bold pt-2 sm:pt-6 text-sm sm:text-2xl lg:text-4xl text-white font-normal text-left">
        Discover The Bold Way Of Life
      </p>
      <div className="lg:pt-20 sm:pt-12 pt-6 relative">
        {/* Custom Navigation Buttons */}
        <button
          onClick={handlePrev}
          disabled={currentSlide === 0}
          className={`absolute top-[60%] -left-2 md:-left-6 transform -translate-y-1/2 z-10 rounded-full p-3 shadow-md ${
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
          className={`absolute top-[60%] right-2 transform -translate-y-1/2 z-10 rounded-full p-3 shadow-md ${
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
                    width: `${services.length * (100 / 2.5)}%`,
                  }
            }
          >
            {services.map((service) => (
              <div
                key={service.index}
                className="flex-shrink-0 px-2"
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
                    <button className="flex items-center mt-4 font-bold">
                      {service.cta} <FaLongArrowAltRight className="ml-2" />
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

export default OurBlogs;
