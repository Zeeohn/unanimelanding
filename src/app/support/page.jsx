"use client"
import React from "react";
import Image from "next/image";
import supportbanner from "../../../public/Assets/supportbanner.jpeg";
import riderscar from "../../../public/Assets/riderscar.svg";
import car from "../../../public/Assets/car-icon.png";
import business from "../../../public/Assets/business-icon.png";
import delivery from "../../../public/Assets/delivery-icon.png";
import Footer from "../home/Footer";
import Sepratesupport from "./Sepratesupport";
import Detailsupport from "./Detailsupport";
import Ticketsupport from "./Ticketsupport";
import { useState } from "react";

const Supportpage = () => {
 

  const [currentsupport, setcurrentsupport] = useState("default")

  return (
    <div className="flex-1">
      {currentsupport==="detailsupport"?<Detailsupport setcurrentsupport={setcurrentsupport}/>:currentsupport==="sepratesupport"?<Sepratesupport setcurrentsupport={setcurrentsupport}/>:currentsupport==="ticketsupport"?<Ticketsupport/>:(
      <div className="relative  ">
          <div className="absolute w-full bg-black opacity-60 h-[60vh] md:h-[100%]"></div>
          <Image src={supportbanner} alt='support' className="min-h-[400px] h-full max-h-full max-w-full object-cover object-center"/>
          <div className="absolute w-full top-0 left-0 h-full flex flex-col justify-center md:items-center px-[5%] ">
            <p className="font-redhat font-bold text-xl sm:text-2xl md:text-4xl lg:text-[50px] lg:leading-[66px] text-white md:text-center">Hi There, Welcome to Bold Support</p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white  md:max-[55%] lg:max-w-[60%] pt-2 md:pt-4 lg:pt-8 md:text-center">Need help? We’re here for you. Whether you’re using our ride-hailing services, managing logistics, or navigating fleet solutions, Bold Support has you covered. Our team is dedicated to providing quick, reliable assistance so you can get back to what matters. </p>
            <div className=" mt-6 md:mt-12 lg:mt-20 xl:mt-[92px] flex flex-wrap gap-[5%]  md:gap-4 w-full">
                <div className="md:flex-1 py-2 md:py-6 lg:py-10 flex flex-col justify-center items-center bg-white rounded-lg overflow-hidden min-w-[30%]  md:min-w-[15%]" onClick={()=>setcurrentsupport("sepratesupport")}>
                    <Image src={riderscar} alt='riderscar' style={{width:"20%"}}/>
                    <p className="pt-4 font-semibold text-xs md:text-base lg:text-xl font-opensans">Riders</p>
                </div>
                <div className="md:flex-1 py-2 md:py-6 lg:py-10 flex flex-col justify-center items-center bg-white rounded-lg overflow-hidden min-w-[30%] md:min-w-[15%]" onClick={()=>setcurrentsupport("sepratesupport")}>
                    <Image src={delivery} alt='riderscar' style={{width:"20%"}}/>
                    <p className="pt-4 font-semibold text-xs md:text-base lg:text-xl font-opensans">Logistics</p>
                </div>
                <div className="md:flex-1 py-2 md:py-6 lg:py-10 flex flex-col justify-center items-center bg-white rounded-lg overflow-hidden min-w-[30%]  md:min-w-[15%]" onClick={()=>setcurrentsupport("sepratesupport")}>
                    <Image src={business} alt='riderscar' style={{width:"20%"}}/>
                    <p className="pt-4 font-semibold text-xs md:text-base lg:text-xl font-opensans">Business</p>
                </div>
                <div className="md:flex-1 py-2 md:py-6 lg:py-10 flex flex-col justify-center items-center bg-white rounded-lg overflow-hidden min-w-[30%] md:min-w-[15%] mt-6 md:mt-0" onClick={()=>setcurrentsupport("sepratesupport")}>
                    <Image src={business} alt='riderscar' style={{width:"20%"}}/>
                    <p className="pt-4 font-semibold text-xs md:text-base lg:text-xl font-opensans">Ticket issues</p>
                </div>
                <div className="md:flex-1 py-2 md:py-6 lg:py-10 flex flex-col justify-center items-center bg-white rounded-lg overflow-hidden min-w-[30%] md:min-w-[15%]  mt-6 md:mt-0" onClick={()=>setcurrentsupport("sepratesupport")}>
                    <Image src={car} alt='riderscar' style={{width:"20%"}}/>
                    <p className="pt-4 font-semibold text-xs md:text-base lg:text-xl font-opensans">3rd party courier</p>
                </div>                
            </div>
          </div>
        </div>
        )}
    </div>
  );
};

export default Supportpage;
