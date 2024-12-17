"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import videogif from "../../../public/Assets/video.png";
import newsletter from "../../../public/Assets/newsletter.jpeg";
import beach from "../../../public/Assets/beach.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { LuRefreshCcw } from "react-icons/lu";
import { FaLongArrowAltRight } from "react-icons/fa";
import NewsDetails from "./NewsDetails";

// Custom utility to get query parameters
const getQueryParams = (search) => {
  const params = new URLSearchParams(search);
  return Object.fromEntries(params.entries());
};

const Newsletter = () => {
  const imageRef = useRef(null);
  const [paddingTop, setPaddingTop] = useState(0);
  const [page, setPage] = useState("home");

  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    // Get the query parameters from the URL when the component mounts
    const params = getQueryParams(window.location.search);
    setPage(params.page || "home");
  }, []);

  const handleStatus = (status) => {
    const params = new URLSearchParams(window.location.search);
    if (status) {
      params.set("page", status);
    } else {
      params.delete("page");
    }
    replace(`${pathname}?${params.toString()}`);
    setPage(status || "home"); // Update state to reflect the change
  };
  const sliderData = [
    {
      id: 1,
      title: "Green environment with EV",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Doloremque laudantium, totam rem aperiam perspiciatis unde omnis iste natus error sit.",
      date: "8 Jun 2024",
      imageUrl: beach, 
    },
    {
      id: 2,
      title: "Sustainable Urban Future",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, illum. Dolore harum error officiis impedit corporis.",
      date: "12 Dec 2023",
      imageUrl: beach,
    },
    {
      id: 3,
      title: "Bold Innovations in EV Tech",
      description:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
      date: "3 Mar 2024",
      imageUrl: beach,
    },
  ];

  const newsData = [
    {
      id: 1,
      title: "Green environment with EV",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, illum. Dolore harum error officiis impedit corporis",
      date: "Nov 14, 2024",
      imageUrl: beach,
    },
    {
      id: 2,
      title: "Green environment with EV",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, illum. Dolore harum error officiis impedit corporis",
      date: "Nov 14, 2024",
      imageUrl: beach,
    },
    {
      id: 3,
      title: "Green environment with EV",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, illum. Dolore harum error officiis impedit corporis",
      date: "Nov 14, 2024",
      imageUrl: beach,
    },
    {
      id: 4,
      title: "Green environment with EV",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, illum. Dolore harum error officiis impedit corporis",
      date: "Nov 14, 2024",
      imageUrl: beach,
    },
    {
      id: 5,
      title: "Green environment with EV",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, illum. Dolore harum error officiis impedit corporis",
      date: "Nov 14, 2024",
      imageUrl: beach,
    },
    {
      id: 6,
      title: "Green environment with EV",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, illum. Dolore harum error officiis impedit corporis",
      date: "Nov 14, 2024",
      imageUrl: beach,
    },
    {
      id: 7,
      title: "Green environment with EV",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, illum. Dolore harum error officiis impedit corporis",
      date: "Nov 14, 2024",
      imageUrl: beach,
    },
    {
      id: 8,
      title: "Green environment with EV",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, illum. Dolore harum error officiis impedit corporis",
      date: "Nov 14, 2024",
      imageUrl: beach,
    },
  ];

   const [currentIndex, setCurrentIndex] = useState(0);

   // Navigation functions
   const goToNextSlide = () => {
     setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
   };

   const goToPrevSlide = () => {
     setCurrentIndex(
       (prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length
     );
   };

  useEffect(() => {
    const updatePadding = () => {
      if (imageRef.current) {
        setPaddingTop(imageRef.current.clientHeight + 200); // Get the image's height
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
      {page === "home" ? (
        <>
        <div className="hidden md:block min-h-[650px] relative">
        {/* <img src={bgimg} alt="backimg" /> */}
        <div className="absolute flex w-full h-[70vh] bg-black opacity-70"></div>
        <Image
          className="object-cover object-center h-[70vh]"
          src={newsletter}
          alt="backimg"
        />
        <div className="absolute w-full h-full top-10 left-0 flex flex-col px-[5%] ">
          <p className="font-redhat font-bold text-[25px] md:text-4xl  lg:text-5xl text-white max-w-[100%] ">
            Welcome to BOLD Newsroom! <br />
            Get all the latest updates from BOLD
          </p>
        </div>
      </div>

      <div className="md:hidden px-[5%] my-10 bg-white">
        <p className="font-bold text-3xl text-black">
          Welcome to BOLD Newsroom! <br />
          Get all the latest updates from BOLD
        </p>
      </div>

      <div className="bg-gray-200 md:hidden py-6">
        <div ref={imageRef} className="md:hidden px-[5%]">
          <div className="w-full h-full bg-gray-200">
            {/* Card Content */}
            <div className="flex flex-col">
              {/* Left: Image */}
              <div className="">
                <Image
                  src={sliderData[currentIndex].imageUrl}
                  alt="Card Image"
                  className="rounded-lg "
                />
              </div>

              {/* Right: Content */}
              <div className="w-full p-6 flex flex-col justify-between">
                <div>
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm ">
                      Global / {sliderData[currentIndex].date}
                    </p>
                    {/* Next/Prev Buttons */}
                    <div className="flex flex-row justify-end items-center">
                      <button
                        onClick={goToPrevSlide}
                        className="w-12 h-12 -mr-4"
                      >
                        <MdChevronLeft />
                      </button>
                      <button onClick={goToNextSlide} className="w-12 h-12 ">
                        <MdChevronRight />
                      </button>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {sliderData[currentIndex].title}
                  </h2>
                  <p className="text-gray-600">
                    {sliderData[currentIndex].description}
                  </p>
                </div>

                <div className="flex justify-end mt-4 space-x-4">
                  <button
                    onClick={() => handleStatus("details")}
                    className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition"
                  >
                    <FaLongArrowAltRight />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots Navigation */}
            {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {sliderData.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer border-gray-300 ${
                  index === currentIndex ? "bg-cyan-500" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div> */}
          </div>
        </div>
      </div>

      <div className="videosec relative">
        <div
          ref={imageRef}
          className="absolute hidden justify-center w-full md:-top-[350px] md:flex "
        >
          <div className="relative w-[90%] shadow-lg rounded-lg overflow-hidden bg-white">
            {/* Card Content */}
            <div className="flex flex-col md:flex-row">
              {/* Left: Image */}
              <div className="w-full lg:h-auto relative">
                <Image
                  src={sliderData[currentIndex].imageUrl}
                  alt="Card Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-l-lg "
                />
              </div>

              {/* Right: Content */}
              <div className="w-full p-6 flex flex-col justify-between">
                <div>
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm ">
                      Global / {sliderData[currentIndex].date}
                    </p>
                    {/* Next/Prev Buttons */}
                    <div className="flex justify-end items-center -gap-2">
                      <button
                        onClick={goToPrevSlide}
                        className="w-10 h-10 flex transition"
                      >
                        <MdChevronLeft />
                      </button>
                      <button
                        onClick={goToNextSlide}
                        className="w-10 h-10 flex transition"
                      >
                        <MdChevronRight />
                      </button>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {sliderData[currentIndex].title}
                  </h2>
                  <p className="text-gray-600">
                    {sliderData[currentIndex].description}
                  </p>
                </div>

                <div className="flex justify-end mt-4 space-x-4">
                  <button
                    onClick={() => handleStatus("details")}
                    className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition"
                  >
                    <FaLongArrowAltRight />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {sliderData.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full cursor-pointer border-gray-300 ${
                    index === currentIndex ? "bg-cyan-500" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="px-[5%] flex flex-row justify-between items-center mt-10 mb-6 md:mt-1 md:mb-10">
          <p className="font-semibold text-xl md:text-3xl">Recent news</p>
          <p className="text-gray-400 text-lg md:2xl">See All</p>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap md:gap-5 px-[5%] gap-6">
          {newsData.map((data) => (
            <div
              key={data.id}
              className="w-full md:w-[48%] lg:w-[32%] bg-white shadow-lg rounded-lg"
            >
              <div className="relative w-full h-[200px]">
                <Image
                  src={data.imageUrl}
                  alt="Card Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <p className="font-semibold text-black">{data.description}</p>
                <p className="text-gray-500 pt-4 text-sm">{data.date}</p>
                {/* <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {data.title}
                  </h2> */}
              </div>
            </div>
          ))}
        </div>
        <button className="mx-[5%] mt-10 rounded-full md:hidden flex flex-row gap-3 items-center text-xl border border-black px-3 py-2">
          <LuRefreshCcw /> <span>Load more</span>
        </button>
      </div>
      <div className="hidden md:flex flex-row px-[5%] mt-16 mb-20">
        <div className="w-1/2 bg-black h-[300px] px-10 flex justify-center flex-col rounded-tl-lg rounded-bl-lg gap-10">
          <p className="text-white font-semibold leading-24 text-3xl">
            Get a ride in 500+ cities <br />
            across the world
          </p>
          <a href="#" className="underline text-white">
            Download app
          </a>
        </div>
        <div className="w-1/2 bg-[#6C68CF] h-[300px] px-10 flex justify-center flex-col gap-10 rounded-tr-lg rounded-br-lg">
          <p className="text-white font-semibold text-3xl">
            Get a ride in 500+ cities <br />
            across tne world
          </p>
          <a href="#" className="underline text-white">
            Download app
          </a>
        </div>
      </div>

      <div className="mt-16 mb-8 md:hidden bg-black h-[300px] mx-[5%] px-10 flex justify-center flex-col rounded-lg gap-10">
        <p className="text-white font-semibold leading-24 text-2xl">
          Get a ride in 500+ cities <br />
          across the world
        </p>
        <a href="#" className="underline text-white">
          Download app
        </a>
      </div>
      <div className="mt-8 mb-8 md:hidden bg-[#6C68CF] h-[300px] mx-[5%] px-10 flex justify-center flex-col rounded-lg gap-10">
        <p className="text-white font-semibold leading-24 text-2xl">
          Get a ride in 500+ cities <br />
          across the world
        </p>
        <a href="#" className="underline text-white">
          Download app
        </a>
          </div>
          </>
      ) : (
          <NewsDetails />
      )}
      
    </div>
  );
};

export default Newsletter;
