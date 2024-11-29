"use client";
import React from "react";
import Image from "next/image";
import whitearrow from "../../../public/Assets/whitearrow.svg";
import businessmain from "../../../public/Assets/businessmain.png";
import leftbigpromotion from "../../../public/Assets/leftbigpromotion.png";
import promotion from "../../../public/Assets/promotion.png";
import trendinglocation from "../../../public/Assets/trendinglocation.png";
import trendloc from "../../../public/Assets/trendloc.png";
import businessdownloadapp from "../../../public/Assets/businessdownloadapp.png";
import businessthirdparty from "../../../public/Assets/businessthirdparty.png";
import businessmoney from "../../../public/Assets/businessmoney.png";
import businessslider from "../../../public/Assets/businessslider.png";
import van from "../../../public/Assets/van.svg";
import pickanddropone from "../../../public/Assets/pickanddropone.png";
import pickanddroptwo from "../../../public/Assets/pickanddroptwo.png";
import btnrightarrow from "../../../public/Assets/buttunrightarrow.svg";
import boldfuel from "../../../public/Assets/boldfuel.png";
import businessfuel from "../../../public/Assets/businessfuel.png";
import businesscustomerbase from "../../../public/Assets/businesscustomerbase.png";
import FAQ from "../home/FAQ";
import Footer from "../home/Footer";
import Promotion from "./Promotion";

const Businesspage = () => {
  return (
    //    {
    //      <div>
    //         <div className="bg-black">
    //             <div className="flex justify-between px-[5%] py-20">
    //                 <div className="w-[50%]">
    //                 <div className="  h-full flex flex-col justify-center">
    //           <p className="font-opensans font-bold text-[50px] leading-[68px] text-white">Lorem ipsum dolor amet, consecteur adipiscing, sed eiusmod</p>
    //           <p className="font-opensans text-xl  text-[#777777] pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
    //           <div className=" flex gap-6 pt-8">
    //             <button className="font-opensans text-xl font-semibold py-[10px] px-6 bg-white rounded-lg">Sign up for business</button>
    //             <button className=" text-white font-opensans font-semibold text-xl flex items-center gap-3 rounded-lg ">Sign up as fleet owner<span className="inline-flex items-center text-white"><Image src={whitearrow} alt="btnarrow " width={16}></Image></span></button>
    //           </div>
    //         </div>
    //                 </div>
    //                 <div className="flex items-center w-[42%]">
    //                 <Image src={businessmain} alt='business'/>
    //                 </div>
    //             </div>

    //             <div className='w-[80%] border-b border-white mx-auto'></div>

    //             <div className='px-[5%] pt-20 pb-24 '>
    //                 <p className="font-opensans text-[40px] leading-[54px] font-semibold text-white max-w-[50%]">Lorem ipsum dolor amet, consecteur adipiscing, sed eiusmod</p>
    //             </div>
    //         </div>

    //         <div className="px-[5%]">
    //             <p className="font-semibold text-2xl font-opensans text-[#777777] pt-20">Why choosing BOLD for your business?</p>
    //             <p className="font-opensans font-bold text-[50px] leading-[68px]  pt-6">We have created it in a way to solve all your business requirements and to meet all your transportation needs</p>
    //             <div className=" flex justify-between w-full gap-[5%] pt-28 pb-20">
    //                 <div className="">
    //                     <Image src={leftbigpromotion} alt='promotion'/>
    //                 </div>
    //                 <div className="w-[50%] flex flex-col justify-center">
    //                     <Image src={promotion } alt='promotion'/>
    //                     <p className="font-opensans font-bold text-4xl pt-4">Sell your upcoming concert or event ticket directly on our app and get <span className='text-[#18C4B8]'>Bigger Audience</span> reach</p>
    //                     <p className="font-opensans text-xl text-[#777777] pt-6">Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, eaque ipsa ab. voluptatem accusantium doloremque laudantium, eaque ipsa ab <span className='text-black font-bold underline'> Read more</span></p>
    //                     <button className='py-3 px-6 bg-black text-white font-redhat font-semibold text-xl w-fit mt-16 rounded-lg'>Learn more</button>
    //                 </div>
    //             </div>
    //             <div className="w-[25%] mx-auto flex flex-col items-center">
    //           <button className='font-bold text-xl py-4 px-10 rounded-[40px] bg-black text-white w-fit '>More on business</button>
    //           <p className="text-xl text-[#777777] text-center pt-6">900+ trusted business partners</p>
    //             </div>

    //             <div className=" flex justify-between w-full gap-[5%] pt-28 pb-20">
    //                 <div className="">
    //                     <Image src={trendinglocation} alt='promotion'/>
    //                 </div>
    //                 <div className="w-[50%] flex flex-col justify-center">
    //                     <Image src={trendloc } alt='promotion' width={"18%"}/>
    //                     <p className="font-opensans font-bold text-4xl pt-4">More than <span className='text-[#18C4B8]'>50+ shops & restaurants </span> have chose BOLD advertisement and got 20 times revenue growth</p>
    //                     <p className="font-opensans text-xl text-[#777777] pt-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.<span className='text-black font-bold underline'> Read more</span></p>
    //                     <button className='py-3 px-6 bg-black text-white font-redhat font-semibold text-xl w-fit mt-12 rounded-lg'>Start advertising</button>
    //                 </div>
    //             </div>

    //             <div className="w-[85%] mx-auto flex flex-col items-center pt-8 pb-28">
    //          <p className="font-opensans font-bold text-4xl">Lorem ipsum dolor sit amet</p>
    //           <p className="text-xl  text-center pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
    //             </div>

    //         </div>

    //         <div className="bg-black px-[5%] relative pb-72">
    //             <div className="w-[75%] mx-auto flex flex-col items-center pt-12 pb-16">
    //          <p className="font-opensans font-semibold text-4xl text-white text-center">How you can make some extra money with BOLD 3rd party</p>
    //           <p className="text-xl  text-center pt-6 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    //             </div>

    //             <div className="flex justify-between pt-20">
    //                 <div className="w-[20%]">
    //                     <div className="mx-auto w-[65%]  flex justify-center"><Image src={businessdownloadapp} alt="downloadapp"/></div>
    //                     <p className="font-opensans font-bold text-xl pt-10 text-center text-white">1. Download our app</p>
    //                 </div>

    //                 <div className="w-[20%]">
    //                     <div className="mx-auto w-[65%] flex justify-center"><Image src={businessthirdparty} alt="downloadapp"/></div>
    //                     <p className="font-opensans font-bold text-xl pt-10 text-center text-white">2. Sign up as intercity or 3rd party partner</p>
    //                 </div>

    //                 <div className="w-[20%]">
    //                     <div className="mx-auto w-[65%]  flex justify-center"><Image src={businessmoney} alt="downloadapp"/></div>
    //                     <p className="font-opensans font-bold text-xl pt-10 text-center text-white">3. Utilise your free time and make money working independently</p>
    //                 </div>
    //             </div>

    //            <div className="w-full absolute -bottom-36 flex justify-center left-0 " >
    //              <div className="w-[85%]  bg-white rounded-2xl overflow-hidden flex  " style={{boxShadow: "4px 4px 33px 0px #00000014"
    // }}>
    //                 <div className="w-[50%]">
    //                 <Image src={businessslider} alt='business'/>
    //                 </div>
    //                 <div className="px-[5%] w-[50%] flex flex-col justify-center ">
    //                     <p className="font-bold font-opensans text-3xl">Lorem ipsum dolor sit amet, sed consectetur elit, sed do</p>
    //                     <div className="mt-12 flex justify-between">
    //                      <button className='bg-black text-white font-semibold text-xl py-3 px-7 rounded-[40px]'>Sign up now</button>
    //                      <div className="flex gap-4 items-center">
    //                       <Image src={van} alt='van'/>
    //                       <div className="f">
    //                         <p className="font-opensans text-sm text-[#777777]">Even for your startups</p>
    //                         <p className="font-opensans font-semibold text-base pt-1">Ship your products faster</p>
    //                       </div>
    //                      </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             </div>
    //             </div>

    //             <div className="pt-72 flex items-center justify-center gap-6 px-[5%]">
    //                 <div className="w-[25%] border-b border-[#CCCCCC]"></div>
    //                 <p className="font-bold font-opensans text-5xl text-center">Our corporate solution</p>
    //                 <div className="w-[25%] border-b border-[#CCCCCC]"></div>
    //             </div>

    //             <div className=" flex justify-between w-full gap-[5%] pt-28 pb-20 px-[5%]">

    //                 <div className="w-[55%] pt-8">
    //                     <p className="font-opensans font-bold text-4xl">Bring your employees to office on time with our 9-5 pickup and drop off model</p>
    //                     <p className="font-opensans text-xl text-[#777777] pt-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.<span className='text-black font-bold underline'> Read more</span></p>
    //                 </div>

    //                 <div className="">
    //                     <Image src={pickanddropone} alt='promotion'/>
    //                 </div>
    //             </div>

    //             <div className=" flex justify-between w-full gap-[5%] pt-28 pb-20 px-[5%]">

    //             <div className="">
    //                     <Image src={pickanddroptwo} alt='promotion'/>
    //                 </div>

    //                 <div className="w-[55%] pt-8">
    //                     <p className="font-opensans font-bold text-4xl">Easy register your employee and we will pickup and drop them home safely</p>
    //                     <p className="font-opensans text-xl text-[#777777] pt-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.<span className='text-black font-bold underline'> Read more</span></p>
    //                     <button className="  font-redhat font-bold text-xl flex items-center gap-2 rounded-lg mt-6 underline">Get started now<span className="inline-flex items-center"><Image src={btnrightarrow} alt="btnarrow " width={16}></Image></span></button>
    //                 </div>

    //             </div>

    //             <div className="flex flex-col justify-center items-center bg-blue-300 py-20">
    //                 <p className="font-opensans font-bold text-[50px] leading-[68px] text-white w-[70%] text-center ">More than 10k customers preferred to use BOLD Business</p>
    //                 <div className="flex  gap-6">
    //                 <button className='py-3 px-6 bg-white border-2  border-white text-black font-redhat font-semibold text-xl w-fit mt-12 rounded-lg'>Get started now</button>
    //                 <button className='py-3 px-6  text-white border-2 border-white font-redhat font-semibold text-xl w-fit mt-12 rounded-lg'>Contact sales</button>
    //                 </div>
    //             </div>

    //             <div className=" flex justify-between w-full gap-[5%] pt-28 pb-20 px-[5%] bg-[#F3F3F3]">

    //                 <div className="w-[55%] flex flex-col justify-center">
    //                     <Image src={boldfuel} alt='promotion' width={"18%"}/>
    //                     <p className="font-opensans font-bold text-4xl pt-4">More than <span className='text-[#18C4B8]'>100+ fuel stations</span> have partnered BOLD for easy refuelling</p>
    //                     <p className="font-opensans text-xl text-[#777777] pt-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed.<span className='text-black font-bold underline'> Read more</span></p>
    //                     <button className='py-3 px-6 bg-black text-white font-redhat font-semibold text-xl w-fit mt-10 rounded-lg'>Become a partner</button>
    //                 </div>

    //                 <div className="">
    //                     <Image src={businessfuel} alt='promotion'/>
    //                 </div>
    //             </div>

    //             <div className=" flex justify-between w-full gap-[5%] pt-28 pb-20 px-[5%]">

    //                <div className="w-[55%] flex flex-col justify-center">

    //                    <p className="font-opensans font-bold text-4xl pt-4">Join your fleet with us and get <span className='text-[#18C4B8]'>Bigger Customer Base</span></p>
    //                    <p className="font-opensans text-xl text-[#777777] pt-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed. totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.<span className='text-black font-bold underline'> Read more</span></p>
    //                    <button className="  font-redhat font-bold text-xl flex items-center gap-2 rounded-lg mt-6 underline">Register your fleet<span className="inline-flex items-center"><Image src={btnrightarrow} alt="btnarrow " width={16}></Image></span></button>
    //                    <p className="text-base pt-2">100k + fleet partners have joined BOLD</p>
    //                </div>

    //                <div className="">
    //                    <Image src={businesscustomerbase} alt='promotion'/>
    //                </div>
    //            </div>

    //            <FAQ/>
    //            <Footer/>

    //     </div>
    // }
    <Promotion />
  );
};

export default Businesspage;
