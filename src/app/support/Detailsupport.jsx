import React from "react";
import driverhandapp from "../../../public/Assets/driverhandapp.png";
import btnrightarrow from "../../../public/Assets/buttunrightarrow.svg";
import Image from "next/image";
import Footer from "../home/Footer";

const Detailsupport = ({setcurrentsupport}) => {
  return (
    <div>
      <div className="px-[5%] pt-28">
        <p className="font-semibold text-5xl">
          I want to edit my personal information
        </p>
        <div className="pt-8">
          <p className="text-lg font-opensans">
            You can edit the following account details via the Bold app:
          </p>
          <ul className="list-disc pl-[2%] pt-6">
            <li>First and last names</li>
            <li>First and last names</li>
            <li>First and last names</li>
          </ul>
        </div>
        <div className="pt-8">
          <p className="text-lg font-opensans">
            You can edit the following account details via the Bold app:
          </p>
          <ul className="list-disc pl-[2%] pt-6">
            <li>First and last names</li>
            <li>First and last names</li>
            <li>First and last names</li>
          </ul>
        </div>

        <p className="text-lg font-opensans pt-8">
          If you update your email address, you will receive a verification
          request to your new email address. Ensure you verify your new email
          address following the instructions in the email sent by Bolt. The
          email address will be updated on your profile even if the email is not
          verified.
        </p>
        <p className="text-lg font-opensans pt-8">
          If you update your phone number, you will receive a verification
          request to your new phone number via SMS. Make sure you verify your
          new phone number following the instructions in SMS sent by Bolt. Once
          the phone number is verified, it will be changed in your profile
          automatically.
        </p>
        <p className="text-lg font-opensans pt-8">
          When you update your personal information in the Bolt app, the changes
          are also applied to the Bolt Food app.
        </p>
        <p className="text-lg font-opensans pt-8">
          If you want to update any other data, please contact our Support Team:
        </p>
        <div className="pt-8">
          <p className="text-lg font-opensans">
            You can edit the following account details via the Bold app:
          </p>
          <ul className="list-disc pl-[2%] pt-6">
            <li className="text-lg font-opensans">First and last names</li>
            <li className="text-lg font-opensans">First and last names</li>
            <li className="text-lg font-opensans">First and last names</li>
          </ul>
        </div>
        <div className="pt-28 pb-28 ">
          <div className="flex rounded-3xl justify-between pl-[5%] items-center  bg-[#191919] " onClick={()=>setcurrentsupport("ticketsupport")}>
            <div className="max-w-[55%] flex flex-col justify-center">
              <p className="font-bold text-4xl text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum
                dolor sit.
              </p>
              <p className="font-semibold text-xl pt-8  text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
              <div className="flex gap-2 ">
                <div>
                  <button className="px-6 py-3 bg-white font-redhat font-semibold text-xl flex items-center gap-2 rounded-lg mt-12 border border-white">
                    Get the app
                    <span className="inline-flex items-center text-white">
                      <Image
                        src={btnrightarrow}
                        alt="btnarrow "
                        width={16}
                      ></Image>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <Image
              src={driverhandapp}
              alt="driverapp"
              style={{ maxWidth: "50%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailsupport;
