"use client"
import Link from "next/link";

const Sidebar = ({toggleSubMenu,isMenuOpen,subMenuOpen}) => {




 

  return (
    <>
      {/* Navbar */}

      {/* Sidebar */}
      <div
        className={`fixed top-[42px]   right-0 h-[calc(100vh-42px)] z-50 bg-white w-[50vw] shadow-lg transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`} 
      >
        <ul className="flex flex-col gap-10 md:gap-16 py-12 h-full overflow-y-auto">
        <Link href="/ride" passHref>
          <li className="relative">
            <button
              className="flex justify-center w-full gap-2  text-xl font-semibold text-black font-redhat"
              onClick={() => toggleSubMenu("ride")}
            >
              Ride
              <span>{subMenuOpen === "ride" ? "▲" : "▼"}</span>
            </button>
            {subMenuOpen === "ride" && (
              <ul className="pl-6 mt-2 space-y-2 text-gray-600">
            <li  className="text-center text-sm">Overview</li>
                <li  className="text-center text-sm">Trending locations</li>
                <li  className="text-center text-sm">Ride safety</li>
                <li  className="text-center text-sm">Blogs</li>
                <li  className="text-center text-sm">FAQ</li>
              </ul>
            )}
          </li>
          </Link>
          <Link href="/drive" passHref>
          <li className="relative">
            <button
              className="flex justify-center w-full gap-2  text-xl font-semibold text-black font-redhat"
              onClick={() => toggleSubMenu("drive")}
            >
              Drive
              <span>{subMenuOpen === "drive" ? "▲" : "▼"}</span>
            </button>
            {subMenuOpen === "drive" && (
              <ul className="pl-6 mt-2 space-y-2 text-gray-600">
                <li  className="text-center text-sm">Overview</li>
                <li  className="text-center text-sm">How it works</li>
                <li  className="text-center text-sm">Earnings</li>
                <li  className="text-center text-sm">Driver safety</li>
                <li  className="text-center text-sm">FAQ</li>
                
              </ul>
            )}
          </li>
          </Link>
          <Link href="/intercity" passHref>
          <li className="text-xl font-semibold text-black text-center">Intercity</li>
          </Link>
          <Link href="/logistics" passHref>
          <li className="text-xl font-semibold text-black text-center">Logistics</li>
          </Link>
          <Link href="/business" passHref>
          <li className="text-xl font-semibold text-black text-center">Business</li>
          </Link>
          <li className="relative">
            <button
              className="flex justify-center gap-2 w-full text-left text-lg font-semibold text-black font-redhat"
              onClick={() => toggleSubMenu("about")}
            >
              About
              <span>{subMenuOpen === "about" ? "▲" : "▼"}</span>
            </button>
            {subMenuOpen === "about" && (
              <ul className="pl-6 mt-2 space-y-2 text-gray-600">
              </ul>
            )}
          </li>
          <li className="text-xl font-semibold text-black text-center font-redhat">Signup</li>
          <li className="text-xl font-semibold text-black text-center font-redhat">Login</li>
        </ul>
      </div>

      {/* Overlay */}
    </>
  );
};

export default Sidebar;
