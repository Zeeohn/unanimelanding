import React from "react";
import Image from "next/image";
import detailblog from "../../../public/Assets/detailblog.jpeg";
import detailbloginnerbanner from "../../../public/Assets/detailbloginnerbanner.png";
import Slidercomponent from "../home/Slidercomponent";
import Footer from "../home/Footer";

const Detailblog = () => {
  return (
    <div>
      <div className="relative ">
        <Image
          src={detailblog}
          alt="deliverylogistics"
          className="object-cover"
          style={{ maxHeight: 456 }}
        />
        <div className="absolute top-0 left-0 max-w-[80%] pl-[5%] flex flex-col justify-end h-full pb-6">
          <p className="text-lg text-white">10 November, 2024</p>
          <p className="font-bold text-4xl text-white pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
      </div>

      <div className="px-[5%] py-20 flex justify-between gap-[10%]">
        <div className="flex flex-col gap-8 max-w-[15%] ">
          <div className="">
            <p className="text-xl text-[#888888]">Date</p>
            <p className="text-xl text-black pt-2">10 Oct, 2024</p>
          </div>

          <div className="">
            <p className="text-xl text-[#888888]">Source</p>
            <p className="text-xl text-black pt-2">BOLD Community</p>
          </div>

          <div className="">
            <p className="text-xl text-[#888888]">Instagram</p>
            <p className="text-xl text-black pt-2">@boldapp</p>
          </div>

          <div className="">
            <p className="text-xl text-[#888888]">Facebook</p>
            <p className="text-xl text-black pt-2">@boldapp</p>
          </div>
        </div>

        <div className="max-w-[75%]">
          <p className="font-opensans font-semibold text-xl">
            {" "}
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>
          <p className="font-opensans font-bold text-[50px] leading-[68px] pt-16">
            Lorem ipsum
          </p>
          <p className="font-opensans text-xl pt-6">
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
            className="mt-24"
          />
          <p className="font-opensans text-xl pt-4">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit.
          </p>
          <p className="font-opensans text-xl pt-16">
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

      <Slidercomponent />
    </div>
  );
};

export default Detailblog;
