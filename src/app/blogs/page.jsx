"use client";
import searchicon from "../../../public/Assets/searchicon.svg";
import Image from "next/image";
import { useState } from "react";
import dropdownmenu from "../../../public/Assets/dropdownmenu.svg";
import blogone from "../../../public/Assets/blogone.png";
import blogtwo from "../../../public/Assets/blogtwo.png";
import blogthree from "../../../public/Assets/blogthree.png";
import blogauthor from "../../../public/Assets/blogauthor.png";
import Footer from "../home/Footer";
import Detailblog from "./Detailblog";

const Blogspage = () => {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);

  const toggleDropdown1 = () => setDropdown1Open(!dropdown1Open);
  const toggleDropdown2 = () => setDropdown2Open(!dropdown2Open);
  return (
    //     <div>

    //         <div className="px-[5%] py-16 flex gap-6">
    //         <div className="p-2 flex gap-4 items-center bg-[#F3F3F3] w-fit rounded-lg">
    //                     <Image src={searchicon} alt="searchicon"/>
    //                     <input placeholder="Search blog..." className="bg-[#F3F3F3]"/>
    //                 </div>

    //                 <div className="flex space-x-4 items-center justify-center">
    //       {/* Dropdown Button 1 */}
    //       <div className="relative">
    //         <button
    //           onClick={toggleDropdown1}
    //           className=" font-semibold text-base font-opensans  px-4 py-2 rounded-lg shadow-md border border-[#EEEEEE] flex items-center gap-1 "
    //         >
    //           Blogs

    //           <span className="inline-flex items-center text-white">
    //               <Image src={dropdownmenu} alt="btnarrow " width={16}></Image>
    //             </span>
    //         </button>
    //         {dropdown1Open && (
    //           <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg">
    //             <ul className="py-2">
    //               <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
    //               <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
    //               <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
    //             </ul>
    //           </div>
    //         )}
    //       </div>

    //       {/* Dropdown Button 2 */}
    //       <div className="relative">
    //         <button
    //           onClick={toggleDropdown1}
    //           className=" text-base font-opensans  px-4 py-2 rounded-lg shadow-md border border-[#EEEEEE] flex items-center gap-1 "
    //         >
    //           Category

    //           <span className="inline-flex items-center text-white">
    //               <Image src={dropdownmenu} alt="btnarrow " width={16}></Image>
    //             </span>
    //         </button>
    //         {dropdown1Open && (
    //           <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg">
    //             <ul className="py-2">
    //               <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
    //               <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
    //               <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
    //             </ul>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //         </div>
    // <div className="pb-28">
    //         <div className="px-[5%] pt-8 mb-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[5%]">
    //       { [...Array(9)].map((_, index) => (
    //             <div className="" key={index} style={{boxShadow: "4px 4px 33px 0px #0000000D"
    //             }}>
    //                 <Image src={blogone} alt="blogone"/>
    //                 <div className="px-4 py-6">
    //                     <p className="font-semibold text-base font-opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore</p>
    //                     <div className="flex justify-between pt-3">
    //                     <p className="font-semibold text-base font-opensans text-[#777777]">12 November, 2024</p>
    //                     <p className=" text-base font-opensans text-[#777777] ">Added to <span className="text-[#18C4B8]">Ride</span></p>
    //                     </div>
    //                     <div className="flex gap-4 items-center pt-6 ">
    //                       <Image src={blogauthor} alt="blogauthor" width={32}/>
    //                       <p className="font-opensans text-base text-[#777777]">by <span className="text-black">Davis Press</span></p>
    //                     </div>
    //                 </div>
    //             </div>
    //         ))}
    //         </div>
    //         </div>

    //         <Footer/>

    //     </div>
    <Detailblog />
  );
};

export default Blogspage;
