"use client";
import Image from "next/image";
import logisticmain from "../../../public/Assets/logisticmain.png";
import whitearrow from "../../../public/Assets/whitearrow.svg";
import pakageone from "../../../public/Assets/pakageone.png";
import pakagetwo from "../../../public/Assets/pakagetwo.png";
import btnrightarrow from "../../../public/Assets/buttunrightarrow.svg";
import businesspackage from "../../../public/Assets/businesspackage.png";
import domesticpackage from "../../../public/Assets/domesticpackage.png";
import belowbusinessneeds from "../../../public/Assets/belowbusinessneeds.png";
import deliverylogistics from "../../../public/Assets/deliverylogistics.jpeg";
import blogsback from "../../../public/Assets/blogsback.png";
import boldadvertise from "../../../public/Assets/boldadvertise.png";
import Footer from "../home/Footer";
import { useState } from "react";
import Packagepage from "../package/page";
import Trackdetails from "../package/Trackdetails";

const Logisticspage = () => {

  const [currentpage, setcurrentpage] = useState("default")
  return (
    <div className="">
      {currentpage==="trackpackage"?<Packagepage setcurrentpage={setcurrentpage}/>:currentpage==="trackdetail"?<Trackdetails/>: (
         <div>
         <div className="relative">
           <Image src={logisticmain} alt="logistic" className="" />
           <div className="absolute top-0 left-0 max-w-[39%] h-full flex flex-col justify-center pl-[5%] ">
             <p className="font-opensans font-bold text-[64px] leading-[88px] text-white">
               Your new way to logistics
             </p>
             <p className="font-opensans text-xl font-semibold text-white pt-6">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
               ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
             </p>
             <div className=" flex gap-6 pt-8">
               <button className="font-opensans text-xl font-semibold py-[10px] px-6 bg-white rounded-lg">
                 Ship with us
               </button>
               <button className=" text-white font-opensans font-semibold text-xl flex items-center gap-3 rounded-lg " onClick={()=>setcurrentpage("trackpackage")}>
                 Track your package
                 <span className="inline-flex items-center text-white">
                   <Image src={whitearrow} alt="btnarrow " width={16}></Image>
                 </span>
               </button>
             </div>
           </div>
         </div>
   
         <div className="px-[5%] pt-20 pb-28">
           <p className="font-opensans font-bold text-4xl">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
           </p>
           <p className="pt-10 text-[#777777] text-xl">
             Sed ut perspiciatis unde omnis iste natus error sit voluptatem
             accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
             ab illo inventore veritatis et quasi architecto beatae vitae dicta
             sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
             aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
             qui ratione voluptatem sequi nesciunt.
           </p>
         </div>
   
         <div className="flex justify-between px-[5%] items-center gap-[5%]">
           <Image src={pakageone} alt="driverapp" />
           <div className=" flex flex-col justify-center max-w-[50%]">
             <p className="font-bold text-4xl font-opensans">
               Join BOLD package for all your e-commerce & business needs.
             </p>
             <p className="text-xl text-[#777777] pt-6 font-opensans">
               Sed ut perspiciatis unde omnis iste natus error sit voluptatem
               accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
               quae ab illo inventore veritatis et quasi architecto beatae vitae
               dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
               aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
               eos qui ratione voluptatem sequi nesciunt.
             </p>
             <button className=" bg-white font-redhat font-semibold text-xl flex items-center gap-2 rounded-lg mt-8">
               Join as business partner{" "}
               <span className="inline-flex items-center">
                 <Image src={btnrightarrow} alt="btnarrow " width={16}></Image>
               </span>
             </button>
           </div>
         </div>
   
         <div className="flex justify-between px-[5%] items-center pt-20 pb-28 gap-[5%]">
           <div className=" flex flex-col justify-center max-w-[50%]">
             <p className="font-bold text-4xl font-opensans">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit
             </p>
             <p className="text-xl text-[#777777] pt-6 font-opensans">
               Sed ut perspiciatis unde omnis iste natus error sit voluptatem
               accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
               quae ab illo inventore veritatis et quasi architecto beatae vitae
               dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
               aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
             </p>
             <button className=" bg-black text-white font-redhat font-semibold text-xl  rounded-lg py-3 px-6 mt-10 w-max">
               Download App
             </button>
           </div>
           <Image src={pakagetwo} alt="driverapp" />
         </div>
   
         <div className="px-[5%]">
           <p className="font-bold text-4xl font-opensans">
             Join our logistics for all fast your delivery needs
           </p>
           <div className="flex justify-between pt-10 pb-28">
             <div className="max-w-[45%]">
               <Image src={businesspackage} alt="businesspackage" />
               <div className="bg-[#F3F3F3]  px-6 pb-9">
                 <p className="font-opensans font-semibold text-4xl pt-6">
                   For business and e-commerce
                 </p>
                 <p className="font-opensans text-xl pt-6">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                   enim ad minim veniam, quis.
                 </p>
                 <button className="  font-redhat font-semibold text-xl flex items-center gap-2 rounded-lg mt-6 underline">
                   Connect your business
                   <span className="inline-flex items-center">
                     <Image src={btnrightarrow} alt="btnarrow " width={16}></Image>
                   </span>
                 </button>
               </div>
             </div>
             <div className="max-w-[45%]">
               <Image src={domesticpackage} alt="businesspackage" />
               <div className="bg-[#F3F3F3]  px-6 pb-9">
                 <p className="font-opensans font-semibold text-4xl pt-6">
                   For business and e-commerce
                 </p>
                 <p className="font-opensans text-xl pt-6">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                   enim ad minim veniam, quis.
                 </p>
                 <button className="  font-redhat font-semibold text-xl flex items-center gap-2 rounded-lg mt-6 underline">
                   Send your package now{" "}
                   <span className="inline-flex items-center">
                     <Image src={btnrightarrow} alt="btnarrow " width={16}></Image>
                   </span>
                 </button>
               </div>
             </div>
           </div>
         </div>
   
         <div className="relative ">
           <Image
             src={deliverylogistics}
             alt="deliverylogistics"
             style={{ maxHeight: 700 }}
           />
           <div className="absolute top-0 left-0 max-w-[50%] pl-[5%] flex flex-col justify-end h-full pb-24">
             <p className="font-bold text-[50px] leading-[70px] text-white">
               Join our logistics for all your fast delivery needs
             </p>
             <button className="rounded-lg mt-10 py-3 px-6 font-redhat text-xl font-semibold bg-white w-fit">
               Download App
             </button>
           </div>
         </div>
   
         <div className="flex justify-between px-[5%] items-center gap-[5%] pt-28">
           <Image src={belowbusinessneeds} alt="driverapp" />
           <div className=" flex flex-col justify-center max-w-[50%]">
             <p className="font-bold text-4xl font-opensans">
               Join BOLD package for all your e-commerce & business needs.
             </p>
             <p className="text-xl text-[#777777] pt-6 font-opensans">
               Sed ut perspiciatis unde omnis iste natus error sit voluptatem
               accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
               quae ab illo inventore veritatis et quasi architecto beatae vitae
               dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
               aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
               eos qui ratione voluptatem sequi nesciunt.
             </p>
             <button className=" bg-white font-redhat font-semibold text-xl flex items-center gap-2 rounded-lg mt-8">
               Join as business partner{" "}
               <span className="inline-flex items-center">
                 <Image src={btnrightarrow} alt="btnarrow " width={16}></Image>
               </span>
             </button>
           </div>
         </div>
   
         <div className=" w-full  px-[5%]">
           <p className="font-redhat font-bold text-4xl pt-28 pb-10">
             Read our latest Blogs
           </p>
           {/* Blog 1 */}
           {/* <div className="group flex-grow basis-1/2 transition-all duration-300 relative bg-cover bg-center hover:basis-1/2"
              style={{ backgroundImage: "url('/path-to-image-1.jpg')" }}>
           <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
             <p className="text-white text-2xl font-bold">
               How to connect your e-commerce <br /> with BOLD logistics
             </p>
           </div>
         </div> */}
   
           {/* Other Blogs */}
           <div className="flex w-full gap-4 mb-28 min-h-[360px]">
             {[1, 2, 3, 4].map((blog, index) => (
               <div
                 key={index}
                 className="group w-full basis-1/3 relative  hover:basis-1/2 rounded-2xl overflow-hidden  "
               >
                 <Image
                   src={blogsback}
                   alt="blogsback"
                   className="h-full object-center object-cover "
                 />
                 <div className="group absolute w-full h-full top-0 left-0 px-8 pb-14 flex justify-end flex-col">
                   <p className="text-white text-xl font-bold group-hover:text-4xl">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
                   </p>
                 </div>
               </div>
             ))}
           </div>
         </div>
   
         <div className="px-[5%] pb-28 ">
           <div className="flex rounded-3xl justify-between pl-[5%] items-center  bg-[#191919] ">
             <div className="max-w-[55%] flex flex-col justify-center">
               <p className="font-bold text-4xl text-white">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit
               </p>
               <p className="font-semibold text-xl pt-8 max-w-[80%] text-white">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
               </p>
               <div className="flex gap-2">
                 <div>
                   <button className="p-4 text-white font-redhat font-semibold text-xl flex items-center gap-2 rounded-lg mt-12 border border-white">
                     Download App
                     <span className="inline-flex items-center text-white">
                       <Image src={whitearrow} alt="btnarrow " width={16}></Image>
                     </span>
                   </button>
                 </div>
               </div>
             </div>
             <Image
               src={boldadvertise}
               alt="driverapp"
               style={{ maxWidth: "50%" }}
             />
           </div>
         </div>
       </div>
      )}
   
    </div>
  );
};

export default Logisticspage;
