import React from 'react'
import hCart from "./../../assets/images/Group.png";
import hCartAuth from "./../../assets/images/image 9.png";
import { IoIosCall } from "react-icons/io";
import { FaTelegramPlane, FaMapMarkerAlt } from "react-icons/fa";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";

const Footer2 = () => {
  return (
    <div className="flex flex-col bg-black text-white place-content-around Montserrat mt-[490px] w-full">
    {/* 1 */}
    <div className="w-full flex justify-center items-center">
      {/* 2 */}
      <div className="bg-[#6D8F3C] h-28 mx-4 flex justify-center items-center rounded-lg -translate-y-1/2 md:mx-20 lg:w-4/6 ">
        {/* 3 */}
        <div className="flex justify-center w-full mx-4 px-4 md:mx-16 lg:w-4/6">
          <input type="email" placeholder="EMAIL ADDRESS" className="bg-[#6D8F3C] placeholder:text-[#3B663C] w-2/3 font-semibold text-sm border border-white py-2 px-6 rounded-l-lg outline-1 font-secondary"/>
          <button className="border border-[#642265] rounded-r-lg text-white bg-[#642265] p-2 w-1/4 font-secondary">SUBSCRIBE</button>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="mt-30 w-full flex justify-center mb-8">
      {/* main Footer */}
      <div className="flex flex-col place-content-around md:flex-row w-4/5 md:ml-40 mt-8 font-secondary ">
        {/* 1st */}
        <div className="w-full md:w-1/5 px-6 md:px-0">
          <img src={hCart} alt="" className="w-3/5 md:w-4/5"/>
          <p className="text-[#FFFFFF] Montserrat text-sm leading-tight font-medium font-secondary mt-8 mb-4 not-italic ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy.
          </p>
          <img src={hCartAuth} alt="" className="w-4/5"/>
        </div>

        {/* 2nd */}
        <div className="w-full md:w-1/6 px-6 md:px-0 ">
          <h3 className="font-bold my-8">Account</h3>
          <p>My Account</p>
          <p className="my-2">My Order</p>
          <p className="my-2">Track Order</p>
        </div>

        {/* 3rd */}
        <div className="w-full md:w-1/5 px-6 md:px-0 ">
          <h3 className="font-bold my-8 ">Need Help?</h3>
          <p className="my-2">Contact Us</p>
          <p className="my-2">Store Locator</p>
          <p className="my-2">Privacy Policy</p>
          <p className="my-2">Terms & Conditions</p>
          <p className="my-2">Return & Refund Policy</p>
          <p className="my-2">FAQ</p>
        </div>

        {/* 4th */}
        <div className="w-max px-6 md:px-0 ">
          <div>
            {/* 1 */}
            <div className="flex items-center gap-4 mt-20">
              <IoIosCall className="text-xl"/>
              <span>1800 309 2495</span>
            </div>

            {/* 2 */}
            <div className="flex items-center gap-4 mt-4">
              <FaTelegramPlane className="text-xl"/>
              <span>support@herbalcart.com</span>
            </div>
            {/* 3 */}
            <div className="flex items-center gap-4 mt-4">
              <FaMapMarkerAlt className="text-xl"/>
              <span>B-10, Sector 59, Noida, U.P. 201301</span>
            </div>

            {/* 4 */}
            <div className="flex gap-3 mt-8 text-xl">
              <AiFillFacebook />
              <AiOutlineInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr/>
    <p className="my-2 text-[18px] text-center text-sm text-[#CECECE] font-secondary">
    Copyright © 2023 HerbalCart. All rights reserved</p>
  </div>
  )
}

export default Footer2