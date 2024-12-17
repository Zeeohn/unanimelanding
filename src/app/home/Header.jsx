"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Boldlogo from "../../../public/Assets/Boldlogo.svg";
import languagechange from "../../../public/Assets/languagechange.svg";
import greydropdown from "../../../public/Assets/greydropdown.svg";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
import hamburger from "../../../public/Assets/hamburger.svg";
import right from "../../../public/Assets/right-sign.png";
import Sidebar from "./Mobilesidebar";

const Header = () => {
  const pathname = usePathname();

  // Navigation items with path and label
  const navItems = [
    { label: "Ride", path: "/ride" },
    { label: "Drive", path: "/drive" },
    { label: "Intercity", path: "/intercity" },
    { label: "Logistics", path: "/logistics" },
    { label: "Business", path: "/business" },
    {label: "About", path: "/about"},
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);

  // Function to check if the current path matches the nav item's path
  const isActive = (path) => pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }

    setIsDropdownOpen(!isDropdownOpen);
  }
  const closeDropdown = () => setIsDropdownOpen(false);

  const toggleSubMenu = (menu) => {
    setSubMenuOpen(subMenuOpen === menu ? "" : menu);
  };
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768)
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const menuItems = [
    { title: "Become a courier", subtitle: "Make money on your terms" },
    {
      title: "Become an intercity partner",
      subtitle: "Make money on your terms",
    },
    { title: "Sign up as a promoter", subtitle: "Lorem ipsum dolor sit amet" },
    { title: "Sign up as e-commerce", subtitle: "Lorem ipsum dolor sit amet" },
    {
      title: "Sign up as a fleet partner",
      subtitle: "Make money on your terms",
    },
    {
      title: "Add a restaurant or store",
      subtitle: "Make money on your terms",
    },
    { title: "BOLD Business", subtitle: "Make money on your terms" },
  ];

  return (
    <>
      <div className="fixed w-full flex items-center justify-between px-[5%] bg-black text-white z-50 h-[42px] sm:h-[88px]">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" passHref>
            <Image
              src={Boldlogo}
              alt="logo"
              className="sm:max-h-[88px] max-h-12"
            />
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
                {item.label === "About" ? (
                  <>
                    {item.label} <IoIosArrowDown />
                  </>
                ) : (
                  item.label
                )}
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
                <Image
                  src={languagechange}
                  alt="language"
                  className="h-5 sm:h-full"
                />
                <Image src={greydropdown} alt="greydropdown" />
              </button>
            </div>
            <Link href="/support" passHref>
              <button
                className={`lg:block hidden  ${
                  isActive("/support")
                    ? "text-white font-bold"
                    : "text-[#888888]"
                } hover:text-white text-lg font-redhat transition-colors`}
              >
                Support
              </button>
            </Link>
            <a
              href="#"
              className="hover:text-white text-[#888888] text-lg font-redhat lg:block hidden"
            >
              Login
            </a>

            {/* Sign Up Dropdown Button */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="bg-white text-black font-semibold text-xl font-redhat px-9 py-3 rounded-lg lg:block hidden"
                onClick={toggleDropdown}
              >
                Sign Up
              </button>

              {/* Dropdown */}
              {isDropdownOpen && (
                <div
                  className={`absolute top-full mt-2 bg-white rounded-lg shadow-lg z-50 ${
                    isMobile
                      ? "mt-6 -right-10 p-4 flex h-[100vh] w-[90vw] overflow-y-auto"
                      : "w-72 right-0 "
                  }`}
                >
                  {/* Mobile Header with Cancel */}
                  {isMobile && (
                    <div className="absolute right-2 top-1">
                      <button
                        onClick={closeDropdown}
                        className="text-white bg-black rounded-full px-2.5 py-0.1 hover:text-gray-800 text-3xl font-bold"
                      >
                        &times;
                      </button>
                    </div>
                  )}

                  <ul className={`${isMobile && "mt-6"}`}>
                    {menuItems.map((item, index) => (
                      <li
                        key={index}
                        onClick={closeDropdown}
                        className={`cursor-pointer px-4 py-3 hover:bg-gray-100 my-2 md:my-3 ${
                          isMobile && "w-[80vw]"
                        }`}
                      >
                        <div className="flex flex-row justify-between">
                          <div>
                            <p className="text-sm md:text-base text-black font-redhat">
                              {item.title}
                            </p>
                            <p className="text-xs text-gray-500">
                              {item.subtitle}
                            </p>
                          </div>
                          <div className="">
                            <Image src={right} alt="right" />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Hamburger Menu */}
          <div className="lg:hidden relative">
            <Image
              src={hamburger}
              alt="hamburger"
              style={{ width: "100%" }}
              className="max-w-6 sm:max-w-none"
              onClick={() => toggleMenu()}
            />
            {isMenuOpen && (
              <Sidebar
                toggleSubMenu={toggleSubMenu}
                isMenuOpen={isMenuOpen}
                subMenuOpen={subMenuOpen}
                toggleDropdown={toggleDropdown}
                closeDropdown={closeDropdown}
              />
            )}
          </div>
        </div>
      </div>
      {isDropdownOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={closeDropdown}
        ></div>
      )}
    </>
  );
};

export default Header;
