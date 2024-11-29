"use client"
import React from "react";
import Image from "next/image";
import supportbanner from "../../../public/Assets/supportbanner.jpeg";
import riderscar from "../../../public/Assets/riderscar.svg";
import Footer from "../home/Footer";
import Sepratesupport from "./Sepratesupport";
import Detailsupport from "./Detailsupport";
import Ticketsupport from "./Ticketsupport";
import { useState } from "react";

const Supportpage = () => {
 

  const [currentsupport, setcurrentsupport] = useState("default")

  return (
    <div>
      {currentsupport==="detailsupport"?<Detailsupport setcurrentsupport={setcurrentsupport}/>:currentsupport==="sepratesupport"?<Sepratesupport setcurrentsupport={setcurrentsupport}/>:currentsupport==="ticketsupport"?<Ticketsupport/>:(
      <div className="relative">
          <Image src={supportbanner} alt='support' style={{maxHeight:"730px"}}/>
          <div className="absolute w-full top-0 left-0 h-full flex flex-col justify-center items-center ">
            <p className="font-redhat font-bold text-[50px] leading-[66px] text-white text-center">Welcome to Bold Support</p>
            <p className="text-xl text-white max-w-[35%] pt-8 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <div className="px-[5%] mt-24 flex gap-4 w-full">
                <div className="flex-1 py-10 flex flex-col justify-center items-center bg-white rounded-lg overflow-hidden" onClick={()=>setcurrentsupport("sepratesupport")}>
                    <Image src={riderscar} alt='riderscar' style={{width:"20%"}}/>
                    <p className="pt-4 font-semibold text-xl font-opensans"> Riders</p>
                </div>
                <div className="flex-1 py-10 flex flex-col justify-center items-center bg-white rounded-lg overflow-hidden" onClick={()=>setcurrentsupport("sepratesupport")}>
                    <Image src={riderscar} alt='riderscar' style={{width:"20%"}}/>
                    <p className="pt-4 font-semibold text-xl font-opensans"> Riders</p>
                </div>
                <div className="flex-1 py-10 flex flex-col justify-center items-center bg-white rounded-lg overflow-hidden" onClick={()=>setcurrentsupport("sepratesupport")}>
                    <Image src={riderscar} alt='riderscar' style={{width:"20%"}}/>
                    <p className="pt-4 font-semibold text-xl font-opensans"> Riders</p>
                </div>
                <div className="flex-1 py-10 flex flex-col justify-center items-center bg-white rounded-lg overflow-hidden" onClick={()=>setcurrentsupport("sepratesupport")}>
                    <Image src={riderscar} alt='riderscar' style={{width:"20%"}}/>
                    <p className="pt-4 font-semibold text-xl font-opensans"> Riders</p>
                </div>
                <div className="flex-1 py-10 flex flex-col justify-center items-center bg-white rounded-lg overflow-hidden" onClick={()=>setcurrentsupport("sepratesupport")}>
                    <Image src={riderscar} alt='riderscar' style={{width:"20%"}}/>
                    <p className="pt-4 font-semibold text-xl font-opensans"> Riders</p>
                </div>
                
            </div>
          </div>
        </div>
        )}
    </div>
  );
};

export default Supportpage;
