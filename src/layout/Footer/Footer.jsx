import React from "react";
import hCart from "./../../assets/images/Group.png";
import hCartAuth from "./../../assets/images/image 9.png";
import call from "./../../assets/icons/call.svg";
import facebook from "./../../assets/icons/facebook.svg";
import insta from "./../../assets/icons/insta.svg";
import telegram from "./../../assets/icons/telegram.svg";
import location from "./../../assets/icons/location.svg";
import line17 from "./../../assets/images/Line 17.png";
import { fadeIn } from "../../motion/Variants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <div className="relative">
        <motion.div variants={fadeIn('up',0.2)} initial='hidden' whileInView={'show'} viewport={{once:true, amount: 0.1}} className="absolute z-40 w-[1246px] h-[143px] top-[80px] left-[350px] bg-[#6d8f3c] rounded-[8px] shadow-[0px_33px_28px_#00000026]">
          <input
            type="text"
            className="relative  pl-[29px] w-[490px] h-[50px] top-[50px] left-[280px] rounded-[8px] border border-solid border-white placeholder:relative  placeholder:[font-family:'Montserrat',Helvetica]  placeholder:text-[18px] placeholder: font-medium  placeholder:text-[#3b663c]"
            placeholder="EMAIL ADDRESS"
          />{" "}
          <button className="flex w-[200px] h-[50px] left-[760px] items-center justify-center gap-[10px] p-[10px] relative bg-[#642265] rounded-[0px_8px_8px_0px]">
            {" "}
            <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-medium text-white text-[18px] tracking-[0] leading-[normal]">
              {" "}
              SUBSCRIBE{" "}
            </div>{" "}
          </button>
        </motion.div>{" "}
      </div>
      <div className=" relative  w-[1920px] h-[698px] mt-[140px] bg-black">
        <ul className="w-[220px] h-[62px]">
          <img
            className="absolute top-[200px] left-[337px]"
            alt="Group"
            src={hCart}
          />
          <p className="absolute w-[293px] top-[303px] left-[337px] [font-family:'Montserrat',Helvetica] font-light text-white text-[18px] tracking-[0] leading-[normal]">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy.{" "}
          </p>
          <img
            className="absolute w-[248px] h-[179px] top-[420px] left-[338px] object-cover"
            alt="Image"
            src={hCartAuth}
          />
        </ul>
        <ul className="absolute top-[240px] left-[711px] [font-family:'Montserrat',Helvetica] font-light text-white text-[18px] tracking-[0] leading-[normal]">
          <li className=" pb-[37px] [font-family:'Montserrat',Helvetica] font-bold text-white text-[20px] tracking-[0] leading-[normal]">
            Account
          </li>
          <li className=" cursor-pointer pb-[20px] [font-family:'Montserrat-Light',Helvetica] font-light text-white text-[20px] tracking-[0] leading-[normal]">
            My Account
          </li>
          <li className=" cursor-pointer pb-[20px] [font-family:'Montserrat-Light',Helvetica] font-light text-white text-[20px] tracking-[0] leading-[normal]">
            My Order
          </li>
          <li className=" cursor-pointer pb-[20px] [font-family:'Montserrat-Light',Helvetica] font-light text-white text-[20px] tracking-[0] leading-[normal]">
            Track Order
          </li>
          <li className=" cursor-pointer pb-[20px] [font-family:'Montserrat-Light',Helvetica] font-light text-white text-[20px] tracking-[0] leading-[normal]">
            Check Authenticity
          </li>
        </ul>

        <ul className="absolute top-[240px] left-[1023px] [font-family:'Montserrat',Helvetica] font-light text-white text-[18px] tracking-[0] leading-[normal]">
          <li className=" pb-[37px] [font-family:'Montserrat',Helvetica] font-bold text-white text-[20px] tracking-[0] leading-[normal]">
            Need Help?
          </li>
          <li className=" cursor-pointer pb-[20px] [font-family:'Montserrat-Light',Helvetica] font-light text-white text-[20px] tracking-[0] leading-[normal]">
            Contact Us
          </li>
          <li className=" cursor-pointer pb-[20px] [font-family:'Montserrat-Light',Helvetica] font-light text-white text-[20px] tracking-[0] leading-[normal]">
            Store Locator
          </li>
          <li className=" cursor-pointer pb-[20px] [font-family:'Montserrat-Light',Helvetica] font-light text-white text-[20px] tracking-[0] leading-[normal]">
            Privacy Policy
          </li>
          <li className=" cursor-pointer pb-[20px] [font-family:'Montserrat-Light',Helvetica] font-light text-white text-[20px] tracking-[0] leading-[normal]">
            Terms & Conditions
          </li>
          <li className=" cursor-pointer pb-[20px] [font-family:'Montserrat-Light',Helvetica] font-light text-white text-[20px] tracking-[0] leading-[normal]">
            Return & Refund Policy
          </li>
          <li className=" cursor-pointer pb-[20px] [font-family:'Montserrat-Light',Helvetica] font-light text-white text-[20px] tracking-[0] leading-[normal]">
            FAQ
          </li>
        </ul>
        <ul className="absolute top-[300px] left-[1377px] [font-family:'Montserrat',Helvetica] font-light text-white text-[18px] tracking-[0] leading-[normal]">
          <li className=" pb-[20px] [font-family:'Montserrat-Light',Helvetica] font-light text-white text-[20px] tracking-[0] leading-[normal]">
            <img
              className="absolute w-[24px] h-[24px]  left-[-50px]"
              alt="Vector"
              src={call}
            />{" "}
            1800 309 2495
          </li>
          <li className=" pb-[20px] [font-family:'Montserrat-Light',Helvetica] font-light text-white text-[20px] tracking-[0] leading-[normal]">
            <img
              className="absolute w-[24px] h-[24px]  left-[-50px]"
              alt="Vector"
              src={telegram}
            />
            support@herbalcart.com
          </li>
          <li className=" pb-[20px] [font-family:'Montserrat-Light',Helvetica] font-light text-white text-[20px] tracking-[0] leading-[normal]">
            <img
              className="absolute w-[24px] h-[24px]  left-[-50px]"
              alt="Vector"
              src={location}
            />
            B-10, Sector 59, Noida, U.P. 201301
          </li>
          <li className=" pt-[30px]">
            <img
              className="absolute w-[24px] h-[24px]  left-[-50px]"
              alt="Vector"
              src={facebook}
            />
            <img
              className="absolute w-[24px] h-[24px]  left-[10px]"
              alt="Vector"
              src={insta}
            />
          </li>
        </ul>
        <div className="w-[1920px] h-px">
          {" "}
          <img
            className="absolute w-[1920px] h-px top-[642px] left-0 object-cover"
            alt="Line"
            src={line17}
          />{" "}
        </div>
        <div className="w-[422px] h-[24px]">
          {" "}
          <p className="absolute top-[658px] left-[749px] [font-family:'Montserrat',Helvetica] font-light text-[#cecece] text-[18px] tracking-[0] leading-[normal]">
            {" "}
            Copyright © 2023 HerbalCart. All rights reserved{" "}
          </p>{" "}
        </div>
      </div>
    </>
  );
};

export default Footer;
