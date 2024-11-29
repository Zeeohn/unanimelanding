import aboutcompany from "../../../public/Assets/aboutcompany.jpeg";
import Image from "next/image";
import whitearrow from "../../../public/Assets/whitearrow.svg";
import aboutone from "../../../public/Assets/aboutone.png";
import abouttwo from "../../../public/Assets/abouttwo.png";
import btnrightarrow from "../../../public/Assets/buttunrightarrow.svg";
import corevalues from "../../../public/Assets/corevalues.svg";
import blogsback from "../../../public/Assets/blogsback.png";

const Aboutpage = () => {
  return (
    <div>
      <div className="max-w-[61%] mx-auto py-28 px-[5%]">
        <p className="font-opensans font-bold text-[50px] leading-[68px] text-center">
          Our company
        </p>
        <p className="font-opensans text-xl pt-4 text-center text-[#777777]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis.
        </p>
      </div>

      <div className="relative ">
        <Image
          src={aboutcompany}
          alt="deliverylogistics"
          style={{ maxHeight: 488 }}
        />
        <div className="absolute top-0 left-0 max-w-[50%] pl-[5%] flex flex-col justify-end h-full pb-20">
          <p className="font-bold text-4xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>

      <div className="px-[5%] py-28 flex justify-between ">
        <div className="max-w-[30%]">
          <p className="font-bold text-4xl">How we deal with our customers</p>
          <button className=" text-white bg-black py-3 px-6 font-redhat font-semibold text-xl flex items-center gap-3 rounded-lg mt-10">
            Contact us
            <span className="inline-flex items-center text-white">
              <Image src={whitearrow} alt="btnarrow " width={16}></Image>
            </span>
          </button>
        </div>
        <div className="flex flex-col gap-4 justify-center max-w-[60%]">
          <p className="font-opensans text-xl text-[#777777]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque
          </p>
          <p className="font-opensans text-xl text-[#777777]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo
          </p>
          <p className="font-opensans text-xl text-[#777777]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo
          </p>
        </div>
      </div>

      <div className=" flex justify-between w-full gap-[5%]  pb-20 px-[5%]">
        <div className="w-[55%]  flex flex-col justify-center">
          <p className="font-opensans font-bold text-4xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </p>
          <p className="font-opensans text-xl text-[#777777] pt-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
          <button className="  font-redhat font-bold text-xl flex items-center gap-2 rounded-lg mt-6 underline">
            Go to BOLD Business
            <span className="inline-flex items-center">
              <Image src={btnrightarrow} alt="btnarrow " width={16}></Image>
            </span>
          </button>
        </div>
        <div className="">
          <Image src={aboutone} alt="promotion" />
        </div>
      </div>

      <div className="flex justify-between px-[5%] items-center  gap-[5%]">
        <Image src={abouttwo} alt="driverapp" />
        <div className=" flex flex-col justify-center max-w-[50%]">
          <p className="font-bold text-4xl font-opensans">
            How we in BOLD grow with our business partners
          </p>
          <p className="text-xl text-[#777777] pt-6 font-opensans">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo
          </p>
          <button className=" text-white bg-black py-3 px-6 font-redhat font-semibold text-xl flex items-center gap-3 rounded-lg mt-10 w-fit">
            Read more
            <span className="inline-flex items-center text-white">
              <Image src={whitearrow} alt="btnarrow " width={16}></Image>
            </span>
          </button>
        </div>
      </div>

      <div className="max-w-[61%] mx-auto py-20 px-[5%]">
        <p className="font-opensans font-bold text-4xl text-center">
          Our Core Values
        </p>
        <p className="font-opensans text-xl pt-4 text-center text-[#777777]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque
        </p>
      </div>

      <div className=" flex gap-[4%] px-[5%]">
        <div className="py-12 px-16 bg-[#F3F3F3] rounded-2xl flex-grow relative">
          <div className="absolute -top-[30px] left-0 flex justify-center w-full">
            <Image src={corevalues} alt="corevalues" height={60} />
          </div>
          <p className="font-opensans font-bold text-4xl text-center">
            Customer value
          </p>
          <p className="font-opensans text-xl pt-4 text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="py-12 px-16 bg-[#F3F3F3] rounded-2xl flex-grow relative">
          <div className="absolute -top-[30px] left-0 flex justify-center w-full">
            <Image src={corevalues} alt="corevalues" height={60} />
          </div>
          <p className="font-opensans font-bold text-4xl text-center">
            Transparency
          </p>
          <p className="font-opensans text-xl pt-4 text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>
      <div className=" flex gap-[4%] px-[5%] py-20">
        <div className="py-12 px-16 bg-[#F3F3F3] rounded-2xl flex-grow relative">
          <div className="absolute -top-[30px] left-0 flex justify-center w-full">
            <Image src={corevalues} alt="corevalues" height={60} />
          </div>
          <p className="font-opensans font-bold text-4xl text-center">Trust</p>
          <p className="font-opensans text-xl pt-4 text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="py-12 px-16 bg-[#F3F3F3] rounded-2xl flex-grow relative">
          <div className="absolute -top-[30px] left-0 flex justify-center w-full">
            <Image src={corevalues} alt="corevalues" height={60} />
          </div>
          <p className="font-opensans font-bold text-4xl text-center">
            Integrity
          </p>
          <p className="font-opensans text-xl pt-4 text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>

      <div className="px-[5%] py-28 flex justify-between ">
        <div className="max-w-[45%]">
          <p className="font-bold text-4xl">Experience the team dedication and best customer service</p>
        </div>
        <div className="flex flex-col gap-4 justify-center max-w-[50%]">
          <p className="font-opensans text-xl text-[#777777]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          </p>
        </div>
      </div>

      <div className=" w-full  px-[5%]">

<p className="font-redhat font-bold text-4xl pt-28 pb-10">Read our latest Blogs</p>
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
<div className="flex w-full gap-4 mb-28 min-h-[360px]">
{[1,2, 3, 4].map((blog, index) => (
  <div
    key={index}
    className="group w-full basis-1/4 relative  hover:basis-1/2 rounded-2xl overflow-hidden  "
    
  >
    <Image src={blogsback} alt="blogsback" className="h-full object-center object-cover "/>
    <div className="group absolute w-full h-full top-0 left-0 px-8 pb-14 flex justify-end flex-col">
      <p className="text-white text-xl font-bold group-hover:text-4xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
      </p>
    </div>
  </div>
))}
</div>
</div>

      <div className="max-w-[75%] mx-auto py-20 px-[5%] flex flex-col items-center">
        <p className="font-opensans font-bold text-4xl text-center max-w-[75%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        </p>
        <p className="font-opensans text-xl pt-4 text-center ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </p>
      </div>
    </div>
  );
};

export default Aboutpage;
