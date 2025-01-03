"use client";
import Image from "next/image";
import whitearrow from "../../../public/Assets/whitearrow.svg";
import boldadvertise from "../../../public/Assets/boldadvertise.png";
import nature from "../../../public/Assets/nature.jpeg";
import bicycle from "../../../public/Assets/bicycle.jpeg";
import cyclesky from "../../../public/Assets/cycle-sky.png";
import cyclemobile from "../../../public/Assets/cycle-mobile.png";
import lanes from "../../../public/Assets/lanes.png";
import patternbg from "../../../public/Assets/pattern-bg.png";
import greenhouse from "../../../public/Assets/green-house.png";
import greenmarket from "../../../public/Assets/green-market.png";
import greenshake from "../../../public/Assets/green-shake.png";
import cycler from "../../../public/Assets/cycler.png";
import fast from "../../../public/Assets/fast-car.png";
import people from "../../../public/Assets/people.jpeg";
import mission from "../../../public/Assets/mission.png";
import culture from "../../../public/Assets/culture.png";
import culture1 from "../../../public/Assets/culture1.png";
import culture2 from "../../../public/Assets/culture2.png";
import happy from "../../../public/Assets/happy-staffs.png";
import blogsback from "../../../public/Assets/blogsback.png";
import FAQ from "../home/FAQ"
import Footer from "../home/Footer";
import { useState } from "react";

const Culture = () => {
  const [currentpage, setcurrentpage] = useState("default");

  return (
    <div className="">
      <div>
        <div className="relative">
          <div className="absolute w-full md:h-[90vh] h-[70vh] opacity-70 bg-black z-10"></div>
          <Image
            src={people}
            alt="logistic"
            className="h-[70vh] md:h-[90vh] object-cover"
          />
          <div className="absolute top-0 w-full left-0 md:max-w-[55%] h-full flex flex-col justify-center pl-[5%] z-20">
            <p className="hidden md:block font-opensans font-bold text-[56px] leading-[70px] text-white">
              Discover the Bold Spirit: People & Culture at BOLD
            </p>
            <p className="md:hidden font-opensans font-bold text-[35px] text-white">
              Discover the Bold Spirit: People & Culture at BOLD
            </p>
            <p className="font-opensans w-full text-base md:text-xl md:font-semibold text-white pt-6">
              At Bold, our success is driven by our people. We create an
              inclusive culture where innovation and collaboration flourish, and
              every voice is heard. We’re shaping a future where every journey,
              on the road or in our careers, counts. Bold ideas lead to bold
              results. And here, everyone feels valued.
            </p>
          </div>
        </div>

        <div className="px-[5%] pt-8 pb-10 md:pt-20 md:pb-28">
          <p className="hidden md:block font-opensans font-bold md:text-[35px] text-center">
            Empowering Bold Connections{" "}
          </p>
          <p className="md:hidden font-opensans font-bold text-[20px]">
            Empowering Bold Connections
          </p>
          <p className="hidden md:block pt-10 text-black text-xl text-center">
            We are dedicated to creating connections that truly matter,
            transforming the way people move and interact. Our customer-centric
            approach ensures every journey is designed with safety, comfort, and
            efficiency in mind. We are deeply committed to sustainability,
            adopting eco-friendly practices and technologies to build a greener
            future. Through active community engagement, we empower individuals
            and foster opportunities for growth, connection, and success.
            Together, we strive to make everyday experiences extraordinary by
            delivering seamless transportation solutions and fostering a
            collaborative, innovative work environment.
          </p>
          <p className="md:hidden pt-5 text-black text-base">
            We are dedicated to creating connections that truly matter,
            transforming the way people move and interact. Our customer-centric
            approach ensures every journey is designed with safety, comfort, and
            efficiency in mind. We are deeply committed to sustainability,
            adopting eco-friendly practices and technologies to build a greener
            future.
          </p>
        </div>

        <p className="md:hidden font-bold text-xl pt-4 font-opensans px-[5%] pb-1">
          Our Mission
        </p>

        <div className="flex flex-col md:flex-row-reverse justify-between px-[5%] items-center gap-[5%]">
          <Image src={mission} alt="driverapp" />
          <div className=" flex flex-col justify-center md:max-w-[50%]">
            <p className="hidden md:block font-bold  md:text-4xl font-opensans mb-6">
              Our Mission
            </p>
            <p className="font-bold text-xl pt-6 md:pt-0 md:text-3xl font-opensans">
              Driving Change One Ride At A Time
            </p>
            <p className="hidden md:block text-base md:text-xl text-black pt-6 font-opensans">
              Our mission is to connect people and businesses
              seamlessly while shaping a more sustainable, inclusive future.
              From providing reliable transportation solutions to empowering
              communities through technology, we’re committed to delivering
              excellence every step of the way.{" "}
            </p>
            <p className="md:hidden text-base text-black pt-6 font-opensans">
              Our mission is to connect people and businesses
              seamlessly while shaping a more sustainable, inclusive future.
              From providing reliable transportation solutions to empowering
              communities through technology, we’re committed to delivering
              excellence every step of the way.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between px-[5%] my-10 md:my-24 items-center gap-[5%]">
          <Image src={culture} alt="people in a meeting" />
          <div className=" flex flex-col justify-center md:max-w-[50%]">
            <p className="font-bold text-xl pt-6 md:pt-0 md:text-3xl font-opensans">
              Collaboration in Action
            </p>
            <p className="hidden md:block text-base md:text-xl text-black pt-6 font-opensans">
              Teamwork drives everything we do, from brainstorming
              sessions to rides across the city. We believe in the power of
              collaboration to overcome challenges and unlock new opportunities.
              Our open culture fosters innovation by welcoming fresh ideas,
              respect by valuing every unique perspective, and accountability by
              owning our actions and successes. Together, we create an
              environment where bold thinking leads to impactful results.{" "}
            </p>
            <p className="md:hidden text-base text-black pt-6 font-opensans">
              Teamwork drives everything we do, from brainstorming
              sessions to rides across the city. We believe in the power of
              collaboration to overcome challenges and unlock new opportunities.
              Our open culture fosters innovation by welcoming fresh ideas,
              respect by valuing every unique perspective, and accountability by
              owning our actions and successes. Together, we create an
              environment where bold thinking leads to impactful results.
            </p>
          </div>
        </div>

        <div className="flex mt-20 relative h-[40vh] md:h-[90vh]">
          <div className="absolute w-full h-[40vh] md:h-[90vh] opacity-50 bg-black z-10"></div>
          <Image
            src={happy}
            alt="cycling"
            // style={{ maxHeight: 700 }}
            className="absolute h-[40vh] md:h-[90vh] object-cover"
          />
          <div className="top-0 left-0 h-[40vh] md:h-[90vh] md:max-w-[50%] pl-[5%] flex flex-col justify-center md:mb-24 z-20">
            <p className="font-bold text-[20px] md:text-[50px] md:leading-[70px] text-white">
              Experience the Bold Difference. Download The Bold App Today!
            </p>
            <p className="text-[14px] text-white md:text-[20px] mt-3">
              Our culture is about connecting, innovating, and making an impact
              every day. Join us as a rider or driver and be part of our
              commitment to sustainability, efficiency, and inclusivity.
              Download the Bold app today and help shape the future of mobility!
            </p>
            <button className="rounded-lg mt-3 md:mt-10 md:py-3 md:px-6 py-2 px-4 font-redhat text-base md:text-xl font-semibold text-white bg-[#18C4B8] hover:bg-[#12a096] w-fit">
              Download Now
            </button>
          </div>
        </div>
        <div className="px-[5%]">
          <p className="font-redhat font-bold text-xl md:text-4xl pt-20 md:pt-28 pb-10">
            Read our latest News and Events
          </p>
          {/* Blog 1 */}
          {/* <div className="group flex-grow basis-1/2 transition-all duration-300 relative bg-cover bg-center hover:basis-1/2"
              style={{ backgroundImage: "url('/path-to-image-1.jpg')" }}>
           <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
             <p className="text-white text-2xl font-bold">
               How to connect your e-commerce <br /> with BOLD logistics
             </p>
           </div>
         </div> */}

          {/* Other Blogs */}
          <div className="flex w-full gap-4 mb-12 md:mb-28 min-h-[360px] overflow-x-auto">
            {[1, 2, 3, 4].map((blog, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[calc(100vw-4rem)] md:w-1/4 relative rounded-2xl overflow-hidden 
                  hover:w-[calc(100vw-2rem)] md:hover:w-1/2 
                  transition-all duration-300"
              >
                <Image
                  src={blogsback}
                  alt="blogsback"
                  className="w-full h-full object-center object-cover"
                />
                <div className="absolute w-full h-full top-0 left-0 px-8 pb-14 flex justify-end flex-col">
                  <p className="text-white text-xl md:group-hover:text-2xl transition-all duration-300 font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col-reverse gap-2 md:gap-6 md:flex-row md:justify-between px-[5%] md:items-center pt-8 md:pt-12 md:pb-12 lg:pb-20 ">
          <div className="md:max-w-[50%] flex flex-col justify-center">
            <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl">
              Passion Meets Purpose
            </p>
            <p className="text-sm md:text-xl pt-2 md:pt-4 lg:pt-6 text-[#777777]">
              We go beyond just providing services. We aim to make a difference.
              Our people are passionate about sustainability, safety, and making
              mobility accessible to everyone. From cycling initiatives to
              innovative app features, Bold’s team is dedicated to developing
              sustainable transportation solutions.
            </p>
          </div>
          <Image
            src={culture1}
            alt="driverapp"
            className=" rounded-2xl w-full md:max-w-[45%] object-cover object-center"
          />
        </div>

        <div className="flex flex-col-reverse gap-2 md:gap-6 md:flex-row-reverse md:justify-between px-[5%] md:items-center pt-12 pb-12 lg:pb-20 ">
          <div className="md:max-w-[50%] flex flex-col justify-center">
            <p className="font-bold text-xl font-opensans md:text-3xl lg:text-4xl">
              We’re committed to Innovation, Inclusivity, And Sustainability
            </p>
            <p className="text-sm md:text-xl pt-2 md:pt-4 lg:pt-6 text-[#777777]">
              Our core values guide us. Innovation drives eco-friendly
              solutions, inclusivity fosters a diverse, welcoming culture, and
              sustainability reflects our commitment to a healthier planet.
            </p>
          </div>
          <Image
            src={culture2}
            alt="driverapp"
            className=" rounded-2xl w-full md:max-w-[45%] object-cover object-center"
          />
        </div>
        {/* <FAQ /> */}
      </div>
    </div>
  );
};

export default Culture;
