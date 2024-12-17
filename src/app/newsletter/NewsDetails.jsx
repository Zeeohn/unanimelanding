import React from "react";
import Image from "next/image";
import detailblog from "../../../public/Assets/detailblog.jpeg";
import detailbloginnerbanner from "../../../public/Assets/detailbloginnerbanner.png";
import Slidercomponent from "../home/Slidercomponent";
import Footer from "../home/Footer";

const NewsDetails = () => {
  return (
    <div>
      <div className="relative flex flex-col-reverse md:flex-col">
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
      <div className="mb-16 -mt-20 ">
        <Slidercomponent />
      </div>
    </div>
  );
};

export default NewsDetails;
