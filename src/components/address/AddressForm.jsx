import React from 'react'
import ReactSelect from 'react-select'

const AddressForm = () => {
  return ( <div className="pl-[40px] pt-[19px] pr-[40px] pb-[33px] w-[1087px] h-[568px] top-0 left-0 bg-white rounded-[8px]">

    <div className="w-[196px] h-[22px]">
    <div className="top-0 left-0 [font-family:'Montserrat'] font-bold text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
      2. Add New Address
    </div>
  </div>
  
  <form className='w-[1120px] h-[500px] pt-[31px] grid grid-cols-2 grid-rows-3 '>
     
<div className='w-[100px] h-[20px]'>
<div className="w-[100px] h-[22px]">
    <p className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
      Full Name
    </p>
  </div>
  <div className="w-[443px] h-[50px] pt-[9px]">
    <input className="w-[443px] h-[50px] placeholder:[font-family:'Montserrat'] placeholder:font-medium placeholder:text-[#b9b9b9] placeholder:text-[18px] p-5 top-0 left-0 rounded-[8px] border border-solid border-[#d9d9d9] focus:outline-none " placeholder='Enter Full Name' />
  </div>
</div>
<div className='w-[100px] h-[20px]'>
<div className="w-[150px] h-[22px]">
    <p className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
      Phone Number
    </p>
  </div>
  <div className="w-[443px] h-[50px] pt-[9px]">
    <input className="w-[443px] h-[50px] placeholder:[font-family:'Montserrat'] placeholder:font-medium placeholder:text-[#b9b9b9] placeholder:text-[18px] p-5 top-0 left-0 rounded-[8px] border border-solid border-[#d9d9d9] focus:outline-none " placeholder='EX: 9876543210' />
  </div>
</div>
<div className='w-[100px] h-[20px] mt-[-15px]'>
<div className="w-[150px] h-[22px]">
    <p className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
      Address
    </p>
  </div>
  <div className="w-[443px] h-[100px] pt-[9px]">
    <textarea className="w-[443px] h-[100px] placeholder:[font-family:'Montserrat'] placeholder:font-medium placeholder:text-[#b9b9b9] placeholder:text-[18px] p-5 top-0 left-0 rounded-[8px] border border-solid border-[#d9d9d9] focus:border-[#d9d9d9]  " placeholder='Enter Address' />
  </div>
</div>
<div className='w-[100px] h-[20px] mt-[-15px]'>
<div className="w-[150px] h-[22px]">
    <p className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
      Pincode
    </p>
  </div>
  <div className="w-[443px] h-[50px] pt-[9px]">
    <input className="w-[443px] h-[50px] placeholder:[font-family:'Montserrat'] placeholder:font-medium placeholder:text-[#b9b9b9] placeholder:text-[18px] p-5 top-0 left-0 rounded-[8px] border border-solid border-[#d9d9d9] focus:outline-none " placeholder='Enter Pincode' />
  </div>
</div>
<div className='w-[100px] h-[20px]'>
<div className="w-[150px] h-[22px]">
    <p className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
      State
    </p>
  </div>
  <div className="w-[443px] h-[50px] pt-[9px]">
    <ReactSelect className="w-[443px] h-[50px] placeholder:[font-family:'Montserrat'] placeholder:font-medium placeholder:text-[#b9b9b9] placeholder:text-[18px] top-0 left-0 rounded-[8px] border border-solid border-[#d9d9d9 " placeholder='Select'  styles={{
  control: (baseStyles, events) => ({
    ...baseStyles,
            boxShadow: 'none',
            primary: 'black',
            padding: "6px",
            border: events.isFocused ? '#dfe1e3' : '#e4e7eb'
  }),
}} />
  </div>
</div>
<div className='w-[100px] h-[20px]'>
<div className="w-[150px] h-[22px]">
    <p className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
      City
    </p>
  </div>
  <div className="w-[443px] h-[50px] pt-[9px]">
    <input className="w-[443px] h-[50px] placeholder:[font-family:'Montserrat'] placeholder:font-medium placeholder:text-[#b9b9b9] placeholder:text-[18px] p-5 top-0 left-0 rounded-[8px] border border-solid border-[#d9d9d9] focus:outline-none " placeholder='Enter City' />
  </div>
</div>

<button className="flex w-[208px] h-[50px] items-center justify-center gap-[10px] p-[10px]  bg-[#642265] rounded-[8px] relative  [font-family:'Montserrat',Helvetica] font-medium text-white text-[18px] tracking-[0] leading-[normal]">
    
      SAVE
    
</button>
</form>
  
      </div>
  )
}

export default AddressForm