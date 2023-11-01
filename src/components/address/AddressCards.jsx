import React from 'react'
import bin from "./../../assets/icons/delete.svg"
import editIcon from "./../../assets/icons/edit.svg"
import verified from "./../../assets/icons/verified.svg"

const AddressCards = () => {
  return (
    <div className="pl-[40px] pt-[19px] pr-[40px] pb-[33px] w-[1087px] h-[369px] top-0 left-0 bg-white rounded-[8px]">
    
     {/* Delivery Address List ****************************************************************************/}

    <div className='w-full h-[60px] flex justify-between'>
  <div className="w-[187px] h-[22px] space-y-[10px]">
  <h2 className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
    2. Delivery Address
  </h2>
  <div className="w-[217px] h-[17px]">
  <p className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[14px] tracking-[0] leading-[normal]">
    We will deliver your order here
  </p>
  </div>
</div>
<div className="w-[132px] h-[22px]">
  <button className=" top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#642265] text-[18px] tracking-[0] leading-[normal]">
    + Add Address
  </button>
</div>
</div>

<div className=" flex gap-[100px]  w-full h-[201px] mt-[40px]">
  <div className="p-[20px] w-[329px] h-[201px] group top-0 left-0 hover:bg-[#f9fff9] rounded-[8px] border-[0.6px] border-solid hover:border-[#3b663c] border-neutral-300">
  <div className="flex  h-[20px] justify-between">
  <div className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[16px] tracking-[0] leading-[normal]">
    Abhishek Singh
  </div>
  <div className='flex gap-5'>
  <button className="w-[18px] h-[18px]">
  <img className="w-[18px] h-[18px] top-0 left-0" alt="Delete" src={editIcon} />
</button>
  <button className="w-[18px] h-[18px]">
  <img className="w-[18px] h-[18px] top-0 left-0" alt="Edit" src={bin} />
</button>
</div>
</div>

<div className="w-[175px] h-[85px] mt-[16px]">
  <p className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[14px] tracking-[0] leading-[normal]">
    <span className="[font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[14px] tracking-[0]">
      B-10, Sector 59,{" "}
      NOIDA
      <br />
      UTTAR PRADESH, 201301
      <br />
      <br />
      +91 9876543210
    </span>
  </p>
</div>

<div className=" hidden group-hover:flex w-[164px] h-[40px]  items-center justify-center gap-[10px] p-[10px] relative bg-[#642265] rounded-[8px]">
  <button className=" relative w-fit [font-family:'Montserrat',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
    DELIVER HERE
  </button>
</div>
    </div>
    <div className="p-[20px] w-[329px] h-[201px] top-0 left-0 group  hover:bg-[#f9fff9] rounded-[8px] border-[0.6px] border-solid hover:border-[#3b663c] border-neutral-300">
  <div className="flex  h-[20px] justify-between">
  <div className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[16px] tracking-[0] leading-[normal]">
    Abhishek Singh
  </div>
  <div className='flex gap-5'>
  <button className="w-[18px] h-[18px]">
  <img className="w-[18px] h-[18px] top-0 left-0" alt="Delete" src={editIcon} />
</button>
  <button className="w-[18px] h-[18px]">
  <img className="w-[18px] h-[18px] top-0 left-0" alt="Edit" src={bin} />
</button>
</div>
</div>

<div className="w-[175px] h-[85px] mt-[16px]">
  <p className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[14px] tracking-[0] leading-[normal]">
    <span className="[font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[14px] tracking-[0]">
      B-10, Sector 59,{" "}
      NOIDA
      <br />
      UTTAR PRADESH, 201301
      <br />
      <br />
      +91 9876543210
    </span>
  </p>
</div>

<div className="hidden group-hover:flex w-[164px] h-[40px] items-center justify-center gap-[10px] p-[10px] relative bg-[#642265] rounded-[8px]">
  <button className="relative w-fit [font-family:'Montserrat',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
    DELIVER HERE
  </button>
</div>
    </div>
</div>
<div className='flex pt-[9px] pl-[9px] gap-[11px]'>
<div className="w-[20px] h-[20px]">
  <img className="w-[20px] h-[20px] top-0 left-0" alt="New releases" src={verified} />
</div>
<div className="w-[267px] h-[17px] mt-[2px]">
  <p className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[14px] tracking-[0] leading-[normal]">
    Expected Deliver by Mon, 23 Oct 2023
  </p>
</div>
</div>
</div>
  )
}

export default AddressCards