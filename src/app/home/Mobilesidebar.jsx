"use client"
import Link from "next/link";
import { useStateContext } from "../Stateproviderwraper";
import sidebardown from "../../../public/Assets/sidebardown.png";
import sidebarup from "../../../public/Assets/sidebarup.png";
import Image from "next/image";

const Sidebar = ({toggleSubMenu,isMenuOpen,subMenuOpen}) => {
  const { currentpage ,setCurrentPage} = useStateContext(); 
  return (
    <>
      <div
        className={`fixed top-[42px] sm:top-[88px] right-0 sm:h-[calc(100vh-88px)] h-[calc(100vh-42px)] z-50 bg-white w-[50vw] shadow-lg transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`} 
      >
        <ul className="flex flex-col gap-10 md:gap-16 py-12 h-full overflow-y-auto">
        
          <li  className="cursor-pointerrelative w-[50%] mx-auto">
            <button
              className="flex justify-between items-center w-full gap-2  text-xl font-semibold text-black font-redhat"
              onClick={() => toggleSubMenu("ride")}
            >
              Ride
              <span>{subMenuOpen === "ride" ? <Image src={sidebarup} alt="sidebar"/> : <Image src={sidebardown} alt="sidebar"/>}</span>
            </button>
            {subMenuOpen === "ride" && (
               <Link href="/ride" passHref>
              <ul className="pl-[10%] mt-4 space-y-4 text-[#777777] ">
            <li  className="cursor-pointer text-sm">Overview</li>
                <li  className="cursor-pointer text-sm" onClick={() =>setCurrentPage("trendinglocation")}>Trending locations</li>
                <li  className="cursor-pointer text-sm" onClick={() =>setCurrentPage("ridesafety")}>Ride safety</li>
                <li  className="cursor-pointer text-sm">Blogs</li>
                <li  className="cursor-pointertext-sm">FAQ</li>
              </ul>
              </Link>
            )}
          </li>
         
          <li  className="cursor-pointerrelative w-[50%] mx-auto">
            <button
              className="flex justify-between items-center w-full gap-2  text-xl font-semibold text-black font-redhat"
              onClick={() => toggleSubMenu("drive")}
            >
              Drive
              <span>{subMenuOpen === "drive" ?<Image src={sidebarup} alt="sidebar"/> : <Image src={sidebardown} alt="sidebar"/>}</span>
            </button>
            {subMenuOpen === "drive" && (
               <Link href="/drive" passHref>
              <ul className="pl-[10%] mt-4  space-y-4 text-[#777777]">
                
                <li  className="cursor-pointer text-sm">Overview</li>
                <li  className="cursor-pointer text-sm"  onClick={() => setCurrentPage("howitworks")}>How it works</li>
                <li  className="cursor-pointer text-sm"  onClick={() => setCurrentPage("earning")}>Earnings</li>
                <li  className="cursor-pointer text-sm"  onClick={() => setCurrentPage("drivesafety")}>Driver safety</li>
                <li  className="cursor-pointer text-sm"  onClick={() => setCurrentPage("faq")}>FAQ</li>
                
              </ul>
              </Link>
            )}
          </li>
          <Link href="/intercity" passHref>
          <li  className="cursor-pointer text-xl font-semibold text-black font-redhat w-[50%] mx-auto">Intercity</li>
          </Link>
          <Link href="/logistics" passHref>
          <li  className="cursor-pointer text-xl font-semibold text-black font-redhat w-[50%] mx-auto">Logistics</li>
          </Link>
          <Link href="/business" passHref>
          <li  className="cursor-pointer text-xl font-semibold text-black font-redhat w-[50%] mx-auto">Business</li>
          </Link>
          <li  className="cursor-pointerrelative w-[50%] mx-auto">
            <button
              className="flex justify-between items-center gap-2 w-full text-left text-xl font-semibold text-black font-redhat"
              onClick={() => toggleSubMenu("about")}
            >
              About
              <span>{subMenuOpen === "about" ? <Image src={sidebarup} alt="sidebar"/> : <Image src={sidebardown} alt="sidebar"/>}</span>
            </button>
            {subMenuOpen === "about" && (
               <Link href="/about" passHref>
              <ul className="pl-6 mt-2 space-y-4 text-[#777777]">
                <li  className="cursor-pointer text-sm">About us</li>
              </ul>
              </Link>
            )}
          </li>
          <li  className="cursor-pointer text-xl font-semibold text-black font-redhat w-[50%] mx-auto">Signup</li>
          <li  className="cursor-pointer text-xl font-semibold text-black font-redhat w-[50%] mx-auto">Login</li>
        </ul>
      </div>

      {/* Overlay */}
    </>
  );
};

export default Sidebar;
