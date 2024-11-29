import Image from "next/image";
import logo from "../../../public/Assets/footerlogo.svg";
import subscribeemail from "../../../public/Assets/subscribeemail.svg";
import socials from "../../../public/Assets/socials.svg";

const Footer = () => {
  return (
    <div>
        <div className="px-[5%] pt-8 pb-28 bg-[#111111] flex justify-between">
            <div className="max-w-[22%]">
                <Image src={logo} alt="logo"></Image>
                <p className="font-semibold text-xl text-white ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore.</p>
            </div>
            <div className="flex items-end ">
                <div className="flex justify-between gap-[10%] pt-20">
                    <div className="">
                        <p className="font-bold text-xl text-white">Contact Info</p>
                        <p className="font-redhat text-lg text-white pt-10">service@unanimeplanet.com</p>
                    </div>
                    <div className="">
                        <p className="font-bold text-xl text-white">Important Links</p>
                        <p className="font-redhat text-lg text-white pt-10">Our products</p>
                        <p className="font-redhat text-lg text-white pt-6">Privacy policy</p>
                        <p className="font-redhat text-lg text-white pt-6">Terms & Conditions</p>
                    </div>

                    <div className="">
                    <p className="font-bold text-xl text-white">Newsletter</p>
                    <p className="font-redhat text-lg text-white pt-10">Stay updated with our newsletter and receive the latest news and offers.</p>
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
        <div className="flex justify-between bg-[#000000] px-[5%] py-6">
            <p className="text-sm text-white">Copyright 2022 | All rights reserved. </p>
            <div className="flex items-center gap-12 ">
                <p className="text-sm text-white">Follow us on: </p>
                <Image src={socials} alt="social"/>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
