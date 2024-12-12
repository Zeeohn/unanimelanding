"use client";
import React from "react";
import Image from "next/image";
import Boldlogo from "../../../public/Assets/Boldlogo.svg";
import languagechange from "../../../public/Assets/languagechange.svg";
import greydropdown from "../../../public/Assets/greydropdown.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import hamburger from "../../../public/Assets/hamburger.svg";
import { useState } from "react";
import Sidebar from "./Mobilesidebar";

const Header = () => {

  // Navigation items with path and label
  const pathname = usePathname();
  const navItems = [
    { label: "Ride", path: "/ride" },
    { label: "Drive", path: "/drive" },
    { label: "Intercity", path: "/intercity" },
    { label: "Logistics", path: "/logistics" },
    { label: "Business", path: "/business" },
   
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState("");

  // Function to check if the current path matches the nav item's path
  const isActive = (path) => pathname===path

  const toggleMenu = () => {
    console.log("1")
    console.log(isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = (menu) => {
    setSubMenuOpen(subMenuOpen === menu ? "" : menu);
  };
   

  return (
    <div className="fixed w-full flex items-center justify-between px-[5%] bg-black text-white z-50 h-[42px] sm:h-[88px]">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href="/" passHref>
          <Image src={Boldlogo} alt="logo" className="sm:max-h-[88px] max-h-12 "/>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <Link key={item.path} href={item.path} passHref>
            <button
              className={`${
                isActive(item.path)
                  ? "text-white font-bold"
                  : "text-[#888888]"
              } hover:text-white md:text-base lg:text-lg font-redhat transition-colors`}
            >
              {item.label}
            </button>
          </Link>
        ))}
      </div>

      {/* Language Selector and Actions */}
   <div className="flex items-center">
      <div className="flex items-center space-x-6">
        {/* Language Dropdown */}
        <div className="flex items-center space-x-1">
          <button className="hover:text-white text-[#888888] text-lg font-redhat flex gap-2 items-center">
            <Image src={languagechange} alt="language" className="h-5 sm:h-full"/>
            <Image src={greydropdown} alt="greydropdown" />
          </button>
        </div>
        <Link href="/support" passHref>
        <button className={`lg:block hidden  ${
                isActive("/support")
                  ? "text-white font-bold"
                  : "text-[#888888]"
              } hover:text-white text-lg font-redhat transition-colors`}>
          Support
        </button>
        </Link>
        <a href="#" className="hover:text-white text-[#888888] text-lg font-redhat lg:block hidden">
          Login
        </a>

        {/* Sign Up Button */}
       
        <button className="bg-white text-black font-semibold text-xl font-redhat px-9 py-3 rounded-lg lg:block hidden">
          Sign Up
        </button>
      </div>
      <div className="lg:hidden relative ">
        <Image src={hamburger} alt="hamburger" style={{width:"100%"}} className="max-w-6 sm:max-w-none" onClick={()=>toggleMenu()}/>
        {isMenuOpen && <Sidebar toggleSubMenu={toggleSubMenu} isMenuOpen={isMenuOpen} subMenuOpen={subMenuOpen}/>}
      </div>

      </div>
    </div>
  );
};

export default Header;
