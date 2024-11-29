import blogimg from "../../../public/Assets/blogbg.jpeg";
import arrowicon from "../../../public/Assets/arrow.svg";
import Image from "next/image";

const Blogsec = () => {
  return (
    <div>
         <div className="px-[5%] pt-16">
      <div className="relative rounded-2xl overflow-hidden">
                <Image
                    src={blogimg}
                    alt="productimg"
                    className="max-h-[700px] w-full"
                  />
                  <div className="absolute w-full max-w-[45%] top-0 left-0 flex flex-col justify-end h-full px-8 pb-10">
                    <p className="font-bold text-5xl text-white ">Your safest way to ride</p>
                    <p className="pt-10 font-semibold text-white text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis.</p>
                   <div className="flex gap-6 items-center pt-6"><button className="text-white text-2xl font-bold">Read our details on safety concerns</button> <Image src={arrowicon} alt="arrow"/></div>
                  </div>
                </div>
      </div>
      
    </div>
  )
}

export default Blogsec;
