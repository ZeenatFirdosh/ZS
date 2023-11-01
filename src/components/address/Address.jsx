import React from 'react'
import checked from "./../assets/icons/Frame 15.svg"

const Address = () => {
  return (
    <>     <div className="relative pl-[40px] pt-[20px] pr-[40px]  w-[1087px] h-[124px] top-0 left-0 bg-white rounded-[8px]">

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
</>
  )
}

export default Address