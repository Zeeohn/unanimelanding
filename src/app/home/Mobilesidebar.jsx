"use client";
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
  closeMenu,
}) => {
  const { currentpage, setCurrentPage } = useStateContext();
  const { push } = useRouter();

  const handleSetPage = (page) => {
    if (page) {
      if(page === "drive") setCurrentPage("overview");
      if (page === "ride") setCurrentPage("overview");
      setCurrentPage(page);
      // push(`/${page}`);
    }
    closeMenu();
  };

  return (
    <>
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-[42px] sm:top-[88px] right-0 sm:h-[calc(100vh-88px)] h-[calc(100vh-42px)] z-50 bg-white w-[50vw] shadow-lg transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-10 md:gap-16 py-12 h-full overflow-y-auto">
          {/* Ride Section */}
          <li className="cursor-pointer relative w-[50%] mx-auto">
            <button
              className="flex justify-between items-center w-full gap-2 text-xl font-semibold text-black font-redhat"
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
              <ul className="pl-[10%] mt-4 space-y-4 text-[#777777]">
                {[
                  "Overview",
                  "Trending locations",
                  "Ride safety",
                  "Blogs",
                  "FAQ",
                ].map((item) => (
                  <li
                    key={item}
                    className={`cursor-pointer text-sm ${
                      currentpage === item.toLowerCase().replace(/\s+/g, "") &&
                      "text-blue-500 font-bold"
                    }`}
                    onClick={() =>
                      handleSetPage(
                        item.toLowerCase() === "overview"
                          ? "ride"
                          : item.toLowerCase().replace(/\s+/g, "")
                      )
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Drive Section */}
          <li className="cursor-pointer relative w-[50%] mx-auto">
            <button
              className="flex justify-between items-center w-full gap-2 text-xl font-semibold text-black font-redhat"
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
              <ul className="pl-[10%] mt-4 space-y-4 text-[#777777]">
                {[
                  "Overview",
                  "How it works",
                  "Earnings",
                  "Driver safety",
                  "FAQ",
                ].map((item) => (
                  <li
                    key={item}
                    className={`cursor-pointer text-sm ${
                      currentpage === item.toLowerCase().replace(/\s+/g, "") &&
                      "text-blue-500 font-bold"
                    }`}
                    onClick={() =>
                      handleSetPage(
                        item.toLowerCase() === "overview"
                          ? "drive"
                          : item.toLowerCase().replace(/\s+/g, "")
                      )
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Other Links */}
          {["Bold Miles", "Logistics", "Business"].map((item) => (
            <li
              key={item}
              className={`cursor-pointer text-xl font-semibold text-black font-redhat w-[50%] mx-auto ${
                currentpage === item.toLowerCase() && "text-blue-500 font-bold"
              }`}
              onClick={() => handleSetPage(item === "Bold Miles" ? "intercity" : item.toLowerCase())}
            >
              {item}
            </li>
          ))}

          {/* Signup and Login */}
          <li
            className="cursor-pointer text-xl font-semibold text-black font-redhat w-[50%] mx-auto"
            onClick={toggleDropdown}
          >
            Signup
          </li>
          <li
            className="cursor-pointer text-xl font-semibold text-black font-redhat w-[50%] mx-auto"
            onClick={() => handleSetPage("login")}
          >
            Login
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
