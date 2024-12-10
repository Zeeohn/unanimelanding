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
import upperright from "../../../public/Assets/upperright.png";
import Image from "next/image";
import taximimgbg from "../../../public/Assets/taxiimage.jpeg";
import arrowicon from "../../../public/Assets/arrow.svg";

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
      image: taximimgbg,
      cta: "Learn More",
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
      image: taximimgbg,
      cta: "Learn More",
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
      image: taximimgbg,
      cta: "Learn More",
    },
  ];

  return (
    <div className=" px-[5%] pt-10 pb-16 bg-[#111111] mg:mt-28 md:mt-20 mt-12  ">
      <p className="sm:text-center text-xl  sm:text-lg text-white sm:font-medium font-bold text-left">
        OUR SERVICES
      </p>
      <p className="sm:text-center sm:font-bold pt-2 sm:pt-6 text-sm sm:text-2xl lg:text-4xl text-white font-normal text-left ">
        Explore Our Various Mobility Solutions for You and Your Business{" "}
      </p>
      <div className="md:pl-[8%] lg:pt-20 sm:pt-12 pt-6  ">
        <Swiper
          className="h-full w-full px-8"
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          navigation
          scrollbar={false}
          breakpoints={{
            320: { slidesPerView: 1.5, spaceBetween: 16 },
            480: { slidesPerView: 1.5, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 2.5, spaceBetween: 20 },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {services.map((service) => (
            <SwiperSlide key={service.index}>
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
              <div className="relative">
                <Image
                  src={service.image}
                  alt="productimg"
                  className="max-h-[200px] sm:max-h-full sm:max-w-full relative"
                />
                <div className="absolute w-full top-0 left-0 flex flex-col justify-end h-full p-3 md:p-5 lg:px-8 lg:pb-10">
                  <p className="font-bold text-lg text-white ">
                    {service.title}
                  </p>
                  <p className="pt-2 text-white md:block hidden">
                    {service.description}
                  </p>
                  <div className="flex gap-2 items-center pt-2 md:pt-6">
                    <button className="text-white font-bold text-sm md:text-base">
                      {service.cta}
                    </button>{" "}
                    <Image src={arrowicon} alt="arrow" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slidercomponent;
