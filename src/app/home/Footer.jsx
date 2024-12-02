import Image from "next/image";
import logo from "../../../public/Assets/footerlogo.svg";
import subscribeemail from "../../../public/Assets/subscribeemail.svg";
import socials from "../../../public/Assets/socials.svg";

const Footer = () => {
  return (
    <div>
        <div className="px-[5%] pt-8 pb-8  md:pb-20 lg:pb-28 bg-[#111111] flex flex-col md:flex-row justify-between gap-6 xl:gap-6">
            <div className="md:max-w-[22%]">
                <Image src={logo} alt="logo"></Image>
                <p className="font-semibold text-sm md:text-lg lg:text-xl text-white ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore.</p>
            </div>
            <div className="flex items-end ">
                <div className="flex justify-between gap-6 sm:gap-[3%] xl:gap-[7%] pt-2 sm:pt-6 md:pt-12 lg:pt-20 flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap w-[80%] sm:w-full">
                    <div className="">
                        <p className="font-bold text-xl text-white">Contact Info</p>
                        <p className="font-redhat sm:text-lg text-white text-sm font-semibold sm:font-normal pt-10">service@unanimeplanet.com</p>
                    </div>
                    <div className="min-w-[15%]">
                        <p className="font-bold text-xl text-white">Important Links</p>
                        <p className="font-redhat sm:text-lg text-white text-sm font-semibold sm:font-normal pt-10">Our products</p>
                        <p className="font-redhat sm:text-lg text-white text-sm font-semibold sm:font-normal pt-6">Privacy policy</p>
                        <p className="font-redhat sm:text-lg text-white text-sm font-semibold sm:font-normal pt-6">Terms & Conditions</p>
                    </div>
                    <div className="">
                        <p className="font-bold text-xl text-white">Products</p>
                        <p className="font-redhat sm:text-lg text-white text-sm font-semibold sm:font-normal pt-10">Bold Ride</p>
                        <p className="font-redhat sm:text-lg text-white text-sm font-semibold sm:font-normal pt-6">Bold Drive</p>
                        <p className="font-redhat sm:text-lg text-white text-sm font-semibold sm:font-normal pt-6">Logistics</p>
                    </div>

                    <div className="">
                    <p className="font-bold text-xl text-white">Newsletter</p>
                    <p className="font-redhat sm:text-lg text-white text-sm font-semibold sm:font-normal pt-10">Stay updated with our newsletter and receive the latest news and offers.</p>
                    <div className=" p-2 mt-8 rounded-3xl overflow-hidden bg-white flex justify-between">
                        <input type="text" placeholder="Email address"/>
                        <div className="bg-[#18C4B8] rounded-full flex justify-center items-center h-10 w-10">
                            <Image src={subscribeemail} alt="subscribe"></Image>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-between bg-[#000000] px-[5%] pt-6 pb-24 sm:py-6  flex-wrap gap-6">
            <p className="text-sm text-white">Copyright 2022 | All rights reserved. </p>
            <div className="flex items-center gap-12 ">
                <p className=" font-semibold text-xl  md:font-normal md:text-sm  text-white">Follow us on: </p>
                <Image src={socials} alt="social"/>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
