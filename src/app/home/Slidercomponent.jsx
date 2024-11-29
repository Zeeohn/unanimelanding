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
  return (
    <div className=" pt-10 pb-16 bg-[#111111] mt-28 ">
        <p className="text-center text-lg text-white">Our services</p>
        <p className="text-center font-bold pt-6 text-4xl text-white">Lorem ipsum dolor sit amet, consectetur </p>
       <div className="pl-[8%] pt-20">
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
              1024: { slidesPerView: 2.5, spaceBetween: 20  },
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
                <div className="">
                <Image
                    src={taximimgbg}
                    alt="productimg"
                    className="max-h-[200px] max-w-[200px] sm:max-h-full sm:max-w-full relative"
                  />
                  <div className="absolute w-full top-0 left-0 flex flex-col justify-end h-full px-8 pb-10">
                    <p className="font-bold text-lg text-white ">Lorem ipsum dolor</p>
                    <p className="pt-2 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                   <div className="flex gap-2 items-center pt-6"><button className="text-white">View details</button> <Image src={arrowicon} alt="arrow"/></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </div>
  )
}

export default Slidercomponent
