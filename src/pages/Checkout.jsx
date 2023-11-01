import React from 'react'
import checkout from "./../assets/images/Checkout.png"
import coupon from "./../assets/icons/coupon.svg"
import image1 from "./../assets/images/image3.png"
import glutamine from "./../assets/images/Glutamine.png"
import baseLine from "./../assets/images/Line 30.png"

import checked from "./../assets/icons/Frame 15.svg"
import { Select } from '@mui/material'
import ReactSelect from 'react-select'
import AddressForm from '../components/address/AddressForm'
import AddressCards from '../components/address/AddressCards'

const Checkout = () => {
  return (
    <div className="md:min-h-[80vh] flex justify-center items-center">
    <main className="m-[161px] flex md:flex-cols-2 gap-[48px]">
      {/* <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        setIsOrderPlaced={setIsOrderPlaced}
      /> */}
     
      <section className="relative w-[1087px] h-px  mt-[87px] grid md:grid-rows gap-[20px]">
      <div className="absolute top-[28px] left-[-12px] w-[24px] h-[24px]">
      <img className="h-[24px] bg-white rounded-[12px] bg-[url(vector.svg)] bg-[100%_100%]" src={checked}/>
    </div>

    {/* Log In Section */}
      <div className=" pl-[40px] pr-[40px] pb-[29px] flex pt-[29px] w-[1087px] h-[80px] top-0 left-0 bg-white rounded-[8px]" >
<div className="w-[106px] h-[22px]">
      <h2 className=" top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
       1. Login ID
      </h2>
    </div>
    <div className="w-[210px] h-[22px] ml-[183px] ">
      <p className="top-0 left-0[font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
        herbalcart@gmail.com
      </p>
    </div>
    <div className="w-[72px] h-[22px] ml-[436px]">
      <button className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#642265] text-[18px] tracking-[0] leading-[normal]">
        Change
      </button>
    </div>

    </div>

    {/* Address Section */}

      <div className="relative pl-[40px] pt-[20px] pr-[40px]  w-[1087px] h-[124px] top-0 left-0 bg-white rounded-[8px]">

      <div className="absolute top-[40px] left-[-12px] w-[24px] h-[24px]">
      <img className="h-[24px] bg-white rounded-[12px] bg-[url(vector.svg)] bg-[100%_100%]" src={checked}/>
    </div>

    <div className="w-[187px] h-[22px]">
      <p className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
       2. Delivery Address
      </p>
    </div>
    <div className="w-[150px] h-[20px] pt-5">
      <p className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[16px] tracking-[0] leading-[normal]">
        Abhishek Singh
      </p>
    </div>
    <div className="w-[483px] h-[17px] pt-7">
      <p className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[14px] tracking-[0] leading-[normal]">
        B 10, Sector 59, NOIDA, UTTAR PRADESH, 201301, Phone: 9876543210
      </p>
    </div>

   {/* <AddressCards/> */}

    {/* <AddressForm/> */}
</div>

      <div className="pt-[29px] pl-[40px] w-[1087px] h-[150px] top-0 left-0 bg-white rounded-[8px]">
      <div className="w-[191px] h-[22px]">
      <div className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#b9b9b9] text-[18px] tracking-[0] leading-[normal]">
        3. Payment Method
      </div>
    </div>
    <button className="mt-[29px] ml-2 flex w-[987px] h-[50px] items-center justify-center gap-[10px] p-[10px] relative bg-[#642265] rounded-[8px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-white text-[18px] tracking-[0] leading-[normal]">
        PROCEED TO PAY
    </button>
    </div>
        {/* <Address /> */}
      </section>
      <section className='mt-[87px]'>

      <div className=" w-[474px] h-[847px] top-0 left-0 bg-summary">
      <div className="w-[474px] h-[100px] pt-[22px] pl-[38px]">
      <p className=" top-0 left-0 [font-family:'Montserrat'] font-normal text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
        <span className='font-semibold' >Order Summary </span>
        <span className="[font-family:'Montserrat',Helvetica]">(1 item)</span>
      </p>
    </div>

    <div className='flex gap-[18px]'>
    <div className="w-[150px] h-[142px]">
      <img className="w-[150px] h-[142px] top-0 left-0 object-cover" alt="Element copy" src={image1} />
    </div>
    <div className="w-[300px] h-[44px]">
      <div className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-semibold text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
        Whey Protein Concentrate,
        <br />
        mango Flavour
      </div>
      <div className="w-[113px] h-[17px] mt-[16px]">
      <span className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-normal text-[#4e4e4e] text-[14px] tracking-[0] leading-[normal]">
        Flavour: Banana
      </span>
      <div className="w-[90px] h-[17px] mt-[1px]">
      <div className="top-0 left-0 [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#4e4e4e] text-[14px] tracking-[0] leading-[normal]">
        Size: 1KG
      </div>
    </div>
    <div className="w-[50px] h-[17px] mt-[5px]">
      <div className="top-0 left-0 [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#4e4e4e] text-[14px] tracking-[0] leading-[normal]">
        QTY: 1
      </div>
    </div>
    </div>
    </div>
    </div>
    <div className="w-[474px] h-px mt-[50px]">
      <img className="w-[474px] h-px top-0 left-0 object-cover" alt="Line" src={baseLine} />
    </div>
    <div className='flex gap-[50px] mt-[46px]'>
    <div className="w-[77px] h-[89px] ml-[40px]">
      <img className=" top-0 left-0 object-cover" alt="Element copy" src={glutamine} />
    </div>
    <div className="w-[300px] h-[44px]">
      <div className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-semibold text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
      L-Glutamine
      </div>
      <div className="w-[113px] h-[17px] mt-[16px]">
      {/* <span className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-normal text-[#4e4e4e] text-[14px] tracking-[0] leading-[normal]">
        Flavour: Banana
      </span> */}
      <div className="w-[90px] h-[17px] mt-[1px]">
      <div className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-normal text-[#4e4e4e] text-[14px] tracking-[0] leading-[normal]">
        Size: 500 gm
      </div>
    </div>
    <div className="w-[50px] h-[17px] mt-[4px]">
      <div className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-normal text-[#4e4e4e] text-[14px] tracking-[0] leading-[normal]">
        QTY: 1
      </div>
    </div>
    </div>
    </div>
    </div>

    <div className="w-[397px] h-[60px] ml-[39px] mt-[45px]">
      <div className="pl-[19px] pt-[19px] flex  gap-[20px] w-[397px] h-[60px] top-0 left-0 bg-[#f8fff8] rounded-[8px] border-[0.6px] border-solid border-[#3b663c]" >
      <div className="relative w-[24px] h-[24px] ">
      <img className="absolute w-[24px] h-[24px]" alt="Vector" src={coupon} />
    </div>
    <div className="w-[180px] h-[22px]">
      <div className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
        Apply Coupon
      </div>
    </div>
      </div>
    </div>
    <div className='w-full pt-10 pl-10 pr-10 pb-5 mt-1'>
    <div className="w-[120px] h-[22px]">
      <p className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-semibold text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
        Bill Details
      </p>
    </div>
    <div className='pt-[20px] flex justify-between'>
      <span className="w-full top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
        Total MRP
      </span>
      <span className="w-[60px] h-[22px] top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[18px] text-right tracking-[0] leading-[normal]">
        ₹3000
      </span>
    </div>
    <div className='pt-[10px] flex justify-between'>
      <span className="w-full top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
        Total Discount
      </span>
      <span className="w-[60px] h-[22px] top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#96bd47] text-[18px] text-right tracking-[0] leading-[normal]">
        ₹3000
      </span>
    </div>
    <div className='pt-[10px] flex justify-between'>
      <span className="w-full top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
        Shipping Charge
      </span>
      <span className="w-[60px] h-[22px] top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#96bd47] text-[18px] text-right tracking-[0] leading-[normal]">
        Free
      </span>
    </div>
    
    </div>
    <div className="w-[474px] h-px ">
      <img className="w-[474px] h-px top-0 left-0 object-cover" alt="Line" src={baseLine} />
    </div>

   
    <div className="pt-5 pl-[38px] pb-4 pr-[38px] flex justify-between">
      <span className="w-[80px] h-[22px] top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
        TO PAY
      </span>
      <span className="w-[61px] h-[22px] top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[18px] text-right tracking-[0] leading-[normal]">
        ₹3000
      </span>
    </div>
    <div className="w-[474px] h-px ">
      <img className="w-[474px] h-px top-0 left-0 object-cover" alt="Line" src={baseLine} />
    </div>
    <div className="pt-[10px] pl-[38px] pb-[39px]">
      <p className="w-[234px] h-[17px] top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#96bd47] text-[14px] tracking-[0] leading-[normal]">
        You will Save ₹1000 on this order
      </p>
    </div>
    </div>
      
      </section>
      {/* <SummaryCard setShowModal={setShowModal} /> */}
    </main>
  </div>
  )
}

export default Checkout