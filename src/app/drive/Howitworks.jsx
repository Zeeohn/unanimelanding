import React, {useState} from "react";
import trendingbanner from "../../../public/Assets/trendingbanner.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import whitearrow from "../../../public/Assets/whitearrow.svg";
import btnrightarrow from "../../../public/Assets/buttunrightarrow.svg";
import firststepdriver from "../../../public/Assets/firststepdriver.png";
import secondstepdriver from "../../../public/Assets/secondstepdriver.png";
import thirdstepdriver from "../../../public/Assets/thirdstepdriver.png";
import forthstepdriver from "../../../public/Assets/forthstepdriver.png";
import intercitybelowtwo from "../../../public/Assets/intercitybelowtwo.png";
import driverlast from "../../../public/Assets/driverlast.png";
import Footer from "../home/Footer";
import { FaArrowRight } from "react-icons/fa";

const Howitworks = () => {
  const [popup, setPopup] = useState(null);
  const router = useRouter();

  const handleRedirect = (path) => {
    router.push(path);
  }

  return (
    <div>
      <div className="relative">
        <Image
          src={trendingbanner}
          alt="logistic"
          className="min-h-[480px] max-h-[648px] w-full object-cover object-center"
        />
        <div className="absolute top-0 left-0 md:max-w-[75%] lg:max-w-[55%] h-full flex flex-col justify-center px-[5%] md:px-0 md:pl-[5%] ">
          <p className="font-redhat font-bold text-4xl lg:text-[40px] lg:leading-[60px] text-white md:pt-6">
            Start Your Journey: Drive Bold, Earn Big!
          </p>
          <p className="font-opensans text-2xl md:text-xl text-[#BBBBBB] pt-8 md:pt-6">
            Bold allows you to be your own boss and earn on your terms. You
            start driving with Bold—even if you don’t own a car. Here’s
            everything you need to get started.
          </p>
          <div className=" flex gap-6 pt-8 md:pt-6">
            <button className="hover:text-[#18C4B8] text-white font-opensans font-semibold text-base md:text-xl lg:text-2xl flex items-center gap-3 rounded-lg underline ">
              Begin your BOLD Journey
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="px-[5%] py-12 md:pb-16 md:pt-20 lg:pb-20 lg:pt-28 lg:max-w-[70%] xl:max-w-[50%]">
        <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl">
          Kickstart your BOLD Journey
        </p>
        <p className="text-sm md:text-base lg:text-xl pt-4 md:pt-6 lg:pt-8">
          Ready to turn your time on the road into earnings? Start your Bold
          journey today and discover a world of flexible earning opportunities.{" "}
        </p>
      </div>

      <div className="flex flex-col space-y-12 md:space-y-0">
        <div className="px-[5%] flex md:flex-row gap-2 flex-col justify-between md:items-center">
          <div className="md:max-w-[50%] md:py-10 ">
            <p className="font-opensans font-bold text-sm md:text-base lg:text-xl">
              Download the BOLD app and signup
            </p>
            <p className=" pt-3 md:pt-4 lg:pt-6 text-sm md:text-base lg:text-xl">
              Download the Bold app, sign up, and take control of your schedule.
              Whether you drive your own car, use a rental, or explore student
              dispatch options, it’s easy to get started.{" "}
            </p>
            <button className="mt-2 md:mt-6 hover:text-[#18C4B8] bg-white font-redhat font-semibold text-sm md:text-base lg:text-xl flex items-center gap-2 rounded-lg  border border-white">
              Get the BOLD app, Now!
              <FaArrowRight size={20} />
            </button>
          </div>
          <div className="border-r border-black w-[2%] h-auto self-stretch relative md:block hidden">
            <div className="h-6 w-6 rounded-full bg-black absolute top-0 -right-[50%]"></div>
          </div>
          <Image
            src={firststepdriver}
            alt="firststep"
            className="w-full md:w-[40%] object-cover object-center"
          />
        </div>
        <div className="px-[5%] flex md:flex-row gap-2 flex-col justify-between md:items-center">
          <div className="md:max-w-[50%] md:py-10 ">
            <p className="font-opensans font-bold text-sm md:text-base lg:text-xl">
              Get Your Docs Ready, Start Earning
            </p>
            <p className=" pt-3 md:pt-4 lg:pt-6 text-sm md:text-base lg:text-xl">
              The right documentation is your key to driving with BOLD. Check
              out the list of required documents based on your driving option
              and get ready to hit the road!{" "}
            </p>
            <button className="mt-2 md:mt-6 bg-white font-redhat font-semibold text-sm md:text-base lg:text-xl flex items-center gap-2 rounded-lg hover:text-[#18C4B8] ">
              Check the list of important documents
              <FaArrowRight size={20} />
            </button>
          </div>
          <div className="border-r border-black w-[2%] h-auto self-stretch relative md:block hidden">
            <div className="h-6 w-6 rounded-full bg-black absolute top-0 -right-[50%]"></div>
          </div>
          <Image
            src={secondstepdriver}
            alt="firststep"
            className="w-full md:w-[40%] object-cover object-center"
          />
        </div>
        <div className="px-[5%] flex md:flex-row gap-2 flex-col justify-between md:items-center">
          <div className="md:max-w-[50%] md:py-10 ">
            <p className="font-opensans font-bold text-sm md:text-base lg:text-xl">
              No Car? No Problem!
            </p>
            <p className=" pt-3 md:pt-4 lg:pt-6 text-sm md:text-base lg:text-xl">
              We’ll connect you with a fleet partner to provide a vehicle so you
              can start earning with <span className="font-bold">BOLD</span>.{" "}
            </p>
            <p className="pt-2 md:pt-4 text-sm md:text-base lg:text-xl">
              Register now to get matched with a fleet partner and start driving{" "}
              <span className="font-bold">BOLD</span>!{" "}
            </p>
          </div>
          <div className="border-r border-black w-[2%] h-auto self-stretch relative md:block hidden">
            <div className="h-6 w-6 rounded-full bg-black absolute top-0 -right-[50%]"></div>
          </div>
          <Image
            src={thirdstepdriver}
            alt="firststep"
            className="w-full md:w-[40%] object-cover object-center"
          />
        </div>
        <div className="px-[5%] flex md:flex-row gap-2 flex-col justify-between md:items-center">
          <div className="md:max-w-[50%] md:py-10 ">
            <p className="font-opensans font-bold text-sm md:text-base lg:text-xl">
              Make Money with BOLD
            </p>
            <p className=" pt-3 md:pt-4 lg:pt-6 text-sm md:text-base lg:text-xl">
              Be your own boss with Bold! Whether you’re taking scheduled trips,
              delivering packages, or going intercity, Bold offers endless ways
              to earn.{" "}
            </p>
            <button className="mt-2 md:mt-6 bg-white font-redhat font-semibold text-sm md:text-base lg:text-xl flex items-center gap-2 rounded-lg hover:text-[#18C4B8]">
              Begin your BOLD Journey!
              <FaArrowRight size={20} />
            </button>
          </div>
          <div className="border-r border-black w-[2%] h-auto self-stretch relative md:block hidden">
            <div className="h-6 w-6 rounded-full bg-black absolute top-0 -right-[50%]"></div>
          </div>
          <Image
            src={forthstepdriver}
            alt="firststep"
            className="w-full md:w-[40%] object-cover object-center"
          />
        </div>
        <div className="px-[5%] flex md:flex-row gap-2 flex-col justify-between md:items-center">
          <div className="md:max-w-[60%] md:py-10 ">
            <p className="font-opensans font-bold text-sm md:text-base lg:text-xl"></p>
            <p className=" pt-3 md:pt-4 lg:pt-6 text-sm md:text-base lg:text-xl"></p>
            {/* <button className="mt-2 md:mt-6 bg-white font-redhat font-semibold text-sm md:text-base lg:text-xl flex items-center gap-2 rounded-lg hover:text-[#18C4B8]">
            </button> */}
          </div>
          <div className="w-[2%] h-auto self-stretch relative md:block hidden">
            <div className="h-6 w-6 rounded-full bg-black absolute top-0 left-[300%]"></div>
          </div>
          <p className="md:max-w-[40%]"></p>
          {/* <Image
            src={forthstepdriver}
            alt="firststep"
            className="w-full md:w-[40%] object-cover object-center"
          /> */}
        </div>
      </div>

      <div className="px-[5%] pt-12 md:pt-16 lg:pt-20 ">
        <p className="font-opensans font-bold text-base md:text-2xl lg:text-4xl">
          Got Questions? We&apos;ve Got Answers
        </p>
        <div className=" flex flex-col md:flex-row gap-4 md:gap-[5%] pt-6 md:py-10">
          <div className="py-5 px-3 md:px-6 md:py-10 rounded-2xl border border-[#DDDDDD] md:w-1/2">
            <p className="font-redhat font-bold  text-sm md:text-base lg:text-xl">
              Reach Out!
            </p>
            <div className="flex justify-between ">
              <p className="pt-2 md:pt-4  text-sm md:text-base lg:text-xl font-opensans max-w-[75%]">
                Need help? Contact Bold Support, and we’ll make sure your
                experience is smooth and hassle-free. We’re always here for you.
              </p>
              <button onClick={() => handleRedirect("/support")}>
                <FaArrowRight
                  size={20}
                  className="text-black hover:text-[#18C4B8]"
                />
              </button>
            </div>
          </div>
          <div className="py-5 px-3 md:px-6 md:py-10 rounded-2xl border border-[#DDDDDD] md:w-1/2">
            <p className="font-redhat font-bold  text-sm md:text-base lg:text-xl">
              Get the BOLD app
            </p>
            <div className="flex justify-between ">
              <p className="pt-2 md:pt-4  text-sm md:text-base lg:text-xl font-opensans max-w-[75%]">
                Get started and discover your earning potential with the{" "}
                <span className="font-bold">BOLD</span> app!
              </p>
              <button onClick={() => setPopup("drive")}>
                <FaArrowRight
                  size={20}
                  className="text-black hover:text-[#18C4B8]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-12 md:gap-6 md:flex-row md:justify-between px-[5%] md:items-center py-12 md:pt-7 md:pb-20 lg:pb-28">
        <div className="md:max-w-[50%] flex flex-col justify-center">
          <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl">
            Join the BOLD Movement
          </p>
          <p className="font-semibold text-sm md:text-xl pt-2 md:pt-4 lg:pt-8">
            Become part of a community of eco-conscious drivers.
          </p>
          <p className="text-sm md:text-xl pt-2 md:pt-4 lg:pt-6 text-[#777777]">
            With Bold, you can drive green, reduce your carbon footprint, and
            deliver a top-tier experience to your passengers.
          </p>
          <div className="flex gap-2">
            <div></div>
          </div>
        </div>
        <Image
          src={driverlast}
          alt="driverapp"
          className=" rounded-2xl w-full md:max-w-[45%] object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Howitworks;
