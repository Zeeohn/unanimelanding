"use client";
import React from "react";
import Image from "next/image";
import Boldlogo from "../../../public/Assets/Boldlogo.svg";
import languagechange from "../../../public/Assets/languagechange.svg";
import greydropdown from "../../../public/Assets/greydropdown.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  // Function to check if the current path matches the nav item's path
  const isActive = (path) => pathname===path
   

  return (
    <div className="flex items-center justify-between px-[5%] bg-black text-white">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href="/" passHref>
          <Image src={Boldlogo} alt="logo" />
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
              } hover:text-white text-lg font-redhat transition-colors`}
            >
              {item.label}
            </button>
          </Link>
        ))}
      </div>

      {/* Language Selector and Actions */}
      <div className="flex items-center space-x-6">
        {/* Language Dropdown */}
        <div className="flex items-center space-x-1">
          <button className="hover:text-white text-[#888888] text-lg font-redhat flex gap-2">
            <Image src={languagechange} alt="language" />
            <Image src={greydropdown} alt="greydropdown" />
          </button>
        </div>
        <Link href="/support" passHref>
        <button className={`${
                isActive("/support")
                  ? "text-white font-bold"
                  : "text-[#888888]"
              } hover:text-white text-lg font-redhat transition-colors`}>
          Support
        </button>
        </Link>
        <a href="#" className="hover:text-white text-[#888888] text-lg font-redhat">
          Login
        </a>

        {/* Sign Up Button */}
        <button className="bg-white text-black font-semibold text-xl font-redhat px-9 py-3 rounded-lg">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
