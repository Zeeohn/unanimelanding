import React from "react";
import Image from "next/image";
import detailblog from "../../../../public/Assets/detailblog.jpeg";
import detailbloginnerbanner from "../../../../public/Assets/detailbloginnerbanner.png";
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
import lonely from "../../../../public/Assets/lonely-car.jpeg";
import arrowicon from "../../../../public/Assets/arrow.svg";
import btnrightarrow from "../../../../public/Assets/buttunrightarrow.svg";

const NewsDetails = () => {
  return (
    <div>
      <div className="relative flex flex-col-reverse md:flex-col">
        <div className="absolute w-full bg-black opacity-60 h-[50vh] md:h-[50vh]"></div>
        <Image
          src={detailblog}
          alt="deliverylogistics"
          className="h-[50vh] md:h-[50vh] object-cover"
          // style={{ maxHeight: 456 }}
        />
        <div className="md:absolute md:top-0 left-0 md:max-w-[80%] pl-[5%] flex flex-col justify-end h-full pb-6">
          <p className="text-lg  text-black md:text-white pt-16 md:pt-0">
            10 November, 2024
          </p>
          <p className="font-bold md:text-4xl text-lg text-black md:text-white pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
      </div>

      <div className="px-[5%] py-20 flex md:flex-row flex-col justify-between md:gap-[10%]">
        <div className="flex flex-row md:flex-col gap-8 md:max-w-[15%] ">
          <div className="">
            <p className="text-sm md:text-xl text-[#888888]">Date</p>
            <p className="text-sm md:text-xl text-black pt-2">10 Oct, 2024</p>
          </div>

          <div className="">
            <p className="text-sm md:text-xl text-[#888888]">Source</p>
            <p className="text-sm md:text-xl text-black pt-2">BOLD Community</p>
          </div>

          <div className="">
            <p className="text-sm md:text-xl text-[#888888]">Instagram</p>
            <p className="text-sm md:text-xl text-black pt-2">@boldapp</p>
          </div>

          <div className="">
            <p className="text-sm md:text-xl text-[#888888]">Facebook</p>
            <p className="text-sm md:text-xl text-black pt-2">@boldapp</p>
          </div>
        </div>

        <div className="md:max-w-[75%]">
          <p className="mt-8 md:mt-0 font-opensans md:font-semibold text-base md:text-xl">
            {" "}
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>
          <p className="font-opensans font-bold text-[25px] md:text-[50px] leading-[68px] pt-6 md:pt-16">
            Lorem ipsum
          </p>
          <p className="font-opensans text-base md:text-xl pt-3">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum. Ut enim ad minima veniam,
            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
            ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum.
          </p>
          <Image
            src={detailbloginnerbanner}
            alt="detail"
            height={496}
            className="mt-12 md:mt-24"
          />
          <p className="font-opensans text-base md:text-xl pt-4">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit.
          </p>
          <p className="font-opensans text-base md:text-xl md:pt-16 pt-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum. Ut enim ad minima veniam,
            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
            ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum.
          </p>
        </div>
      </div>
      <div className="mb-16 mt-20 ">
        <div className="px-[5%] bg-[#F3F3F3] pt-10 pb-14">
          <p className="font-bold text-xl md:text-4xl ">Popular news on BOLD</p>

          <div className="pt-8 md:pt-20">
            <Swiper
              className="h-full w-full px-8"
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={4}
              navigation
              // pagination={{ clickable: true }}
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
                      src={lonely}
                      alt="productimg"
                      className="max-h-[200px] max-w-[200px] sm:max-h-full sm:max-w-full relative"
                    />
                    <div className="bg-white w-full flex flex-col justify-end h-full px-4 pb-4">
                      <p className="font-bold text-lg pt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sit amet.
                      </p>
                      <div className="flex pt-6">
                        <p className="">Nov 12, 2024</p>{" "}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="md:hidden font-redhat font-bold text-base flex items-center gap-2 rounded-lg mt-4">
              Partner with us now
              <span className="inline-flex items-center">
                <Image src={btnrightarrow} alt="btnarrow " width={16}></Image>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
