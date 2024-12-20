"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useStateContext } from "../Stateproviderwraper";
import sidebardown from "../../../public/Assets/sidebardown.png";
import sidebarup from "../../../public/Assets/sidebarup.png";
import Image from "next/image";

const Sidebar = ({
  toggleSubMenu,
  isMenuOpen,
  subMenuOpen,
  toggleDropdown,
  sidebarRef,
  closeDropdown,
  closeMenu,
}) => {
  const { currentpage, setCurrentPage } = useStateContext();

  const { push } = useRouter();

  const handleSetPage = (page) => {
    if (page) {
      setCurrentPage(page)
    }
    closeMenu();  
  }

  const handleNavigate = (page) => {
    if (page) {
      setCurrentPage(page)
      push(`/${page}`)
    }
    closeMenu();
  }

  return (
    <>
      <div
        ref={sidebarRef}
        className={`fixed top-[42px] sm:top-[88px] right-0 sm:h-[calc(100vh-88px)] h-[calc(100vh-42px)] z-50 bg-white w-[50vw] shadow-lg transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-10 md:gap-16 py-12 h-full overflow-y-auto">
          <li className="cursor-pointer relative w-[50%] mx-auto">
            <button
              className="flex justify-between items-center w-full gap-2  text-xl font-semibold text-black font-redhat"
              onClick={() => toggleSubMenu("ride")}
            >
              Ride
              <span>
                {subMenuOpen === "ride" ? (
                  <Image src={sidebarup} alt="sidebar" />
                ) : (
                  <Image src={sidebardown} alt="sidebar" />
                )}
              </span>
            </button>
            {subMenuOpen === "ride" && (
              <Link href="/ride" passHref>
                <ul className="pl-[10%] mt-4 space-y-4 text-[#777777] ">
                  <li
                    className="cursor-pointer text-sm"
                    onClick={() => handleSetPage("ride")}
                  >
                    Overview
                  </li>
                  <li
                    className="cursor-pointer text-sm"
                    onClick={() => handleSetPage("trendinglocation")}
                  >
                    Trending locations
                  </li>
                  <li
                    className="cursor-pointer text-sm"
                    onClick={() => handleSetPage("ridesafety")}
                  >
                    Ride safety
                  </li>
                  <li
                    className="cursor-pointer text-sm"
                    onClick={() => handleSetPage("blogs")}
                  >
                    Blogs
                  </li>
                  <li
                    className="cursor-pointer text-sm"
                    onClick={() => handleSetPage("faq")}
                  >
                    FAQ
                  </li>
                </ul>
              </Link>
            )}
          </li>

          <li className="cursor-pointer relative w-[50%] mx-auto">
            <button
              className="flex justify-between items-center w-full gap-2  text-xl font-semibold text-black font-redhat"
              onClick={() => toggleSubMenu("drive")}
            >
              Drive
              <span>
                {subMenuOpen === "drive" ? (
                  <Image src={sidebarup} alt="sidebar" />
                ) : (
                  <Image src={sidebardown} alt="sidebar" />
                )}
              </span>
            </button>
            {subMenuOpen === "drive" && (
              <Link href="/drive" passHref>
                <ul className="pl-[10%] mt-4  space-y-4 text-[#777777]">
                  <li
                    className="cursor-pointer text-sm"
                    onClick={() => handleSetPage("drive")}
                  >
                    Overview
                  </li>
                  <li
                    className="cursor-pointer text-sm"
                    onClick={() => handleSetPage("howitworks")}
                  >
                    How it works
                  </li>
                  <li
                    className="cursor-pointer text-sm"
                    onClick={() => handleSetPage("earning")}
                  >
                    Earnings
                  </li>
                  <li
                    className="cursor-pointer text-sm"
                    onClick={() => handleSetPage("drivesafety")}
                  >
                    Driver safety
                  </li>
                  <li
                    className="cursor-pointer text-sm"
                    onClick={() => handleSetPage("faq")}
                  >
                    FAQ
                  </li>
                </ul>
              </Link>
            )}
          </li>
          <Link href="/intercity" passHref>
            <li
              className="cursor-pointer text-xl font-semibold text-black font-redhat w-[50%] mx-auto"
              onClick={() => closeMenu()}
            >
              Intercity
            </li>
          </Link>
          <Link href="/logistics" passHref>
            <li
              className="cursor-pointer text-xl font-semibold text-black font-redhat w-[50%] mx-auto"
              onClick={() => closeMenu()}
            >
              Logistics
            </li>
          </Link>
          <Link href="/business" passHref>
            <li
              className="cursor-pointer text-xl font-semibold text-black font-redhat w-[50%] mx-auto"
              onClick={() => closeMenu()}
            >
              Business
            </li>
          </Link>
          <li className="cursor-pointer relative w-[50%] mx-auto">
            <button
              className="flex justify-between items-center gap-2 w-full text-left text-xl font-semibold text-black font-redhat"
              onClick={() => toggleSubMenu("about")}
            >
              About
              <span>
                {subMenuOpen === "about" ? (
                  <Image src={sidebarup} alt="sidebar" />
                ) : (
                  <Image src={sidebardown} alt="sidebar" />
                )}
              </span>
            </button>
            {subMenuOpen === "about" && (
              <>          
                  {/* <ul className="pl-6 mt-2 space-y-4 text-[#777777]">
                    <li className="cursor-pointer text-sm" onClick={() => handleNavigate("about")}>About us</li>
                  </ul>                 */}
                  <ul className="pl-6 mt-2 space-y-4 text-[#777777]">
                    <li className="cursor-pointer text-sm" onClick={() => handleNavigate("blogs")}>Blog</li>
                  </ul>                
                  <ul className="pl-6 mt-2 space-y-4 text-[#777777]">
                    <li className="cursor-pointer text-sm" onClick={() => handleNavigate("company")}>Company</li>
                  </ul>
                  <ul className="pl-6 mt-2 space-y-4 text-[#777777]">
                    <li className="cursor-pointer text-sm" onClick={() => handleNavigate("franchise")}>Franchise</li>
                  </ul>                               
                  <ul className="pl-6 mt-2 space-y-4 text-[#777777]">
                    <li className="cursor-pointer text-sm" onClick={() => handleNavigate("newsletter")}>Newsletter</li>
                  </ul>                              
                  <ul className="pl-6 mt-2 space-y-4 text-[#777777]">
                    <li className="cursor-pointer text-sm" onClick={() => handleNavigate("sustainability")}>Sustainability</li>
                  </ul>                                
                  <ul className="pl-6 mt-2 space-y-4 text-[#777777]">
                    <li className="cursor-pointer text-sm" onClick={() => handleNavigate("culture")}>Company culture</li>
                  </ul>           
              </>
            )}
          </li>
          <li
            className="cursor-pointer text-xl font-semibold text-black font-redhat w-[50%] mx-auto"
            onClick={() => toggleDropdown()}
          >
            Signup
          </li>
          <li className="cursor-pointer text-xl font-semibold text-black font-redhat w-[50%] mx-auto">
            Login
          </li>
        </ul>
      </div>

      {/* Overlay */}
    </>
  );
};

export default Sidebar;
