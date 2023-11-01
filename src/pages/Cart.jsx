import React from 'react'
import close from "../assets/icons/close.svg"
import image1 from "../assets/images/1kgInCart.png"
import line30 from "../assets/images/Line 30.png"
import minus from "../assets/icons/round-minus.svg"
import plus from "../assets/icons/round-plus.svg"
import Delete from "../assets/icons/delete.svg"
import shaker from "../assets/images/image 17.png"
import glutamine from "../assets/images/Layer 1 3.png"
import freedl from "../assets/icons/Group 40.svg"
import verified from "../assets/icons/Frame 15.svg"
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material'

const Cart = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex justify-end items-end pt-[28px] pr-[20px] ">
       <Button onClick={handleOpen}>Open modal</Button>
   <Modal
    style={{overflow:'scroll',display: 'flex', justifyContent: "end"}}
   
    open={open}
    onClose={handleClose}
    aria-labelledby="parent-modal-title"
    aria-describedby="parent-modal-description"
    disableBackdropClick>
      <div className="w-[498px] h-[1188px] top-0 left-0 bg-white rounded-[8px]">
      <div className="pt-[28px] pl-[28px] w-full flex justify-between">
      <div className="w-[64px] h-[33px] top-0 left-0 [font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[30px] tracking-[0] leading-[normal] whitespace-nowrap">
        Cart
      </div>
      <div className="w-[32px] h-[32px] mr-[20px]">
        <button onClick={handleClose}>
      <img className="w-[32px] h-[32px] top-0 left-0" alt="Close" src={close} />
      </button>
    </div>
    </div>
    <div className='  grid-rows-3'>
        <div className='w-full pl-6 flex'> 
        <div className="pt-[41px] pl-5">
      <img className="w-[115px] h-[142px] object-cover" alt="Element copy" src={image1} />
    </div>
    <div className="w-full pl-10 pt-[50px]">
       
      <h2 className="top-0 left-0 [font-family:'Montserrat'] font-semibold text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
        Whey Protein Concentrate,
        <br />
        Mango Flavour
      </h2>
      <p className="mt-[16px] top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[14px] tracking-[0] leading-[normal]">
        Flavour: Banana
      </p>
      <div  className='flex'>
        <div className='w-[80px] h-[17px] mt-1'>
      <p className=" top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[14px] tracking-[0] leading-[normal]">
        Size: 1KG
      </p>
      </div>
      <div className="w-full pr-11 flex justify-end">
      <div className=" flex justify-between w-[82px] h-[34px] p-1 top-0 left-0 rounded-[5.93px] border-[0.66px] border-solid border-[#4e4e4e]">
      <div className="relative pt-1 w-[16px] h-[16px]">
      <img className="absolute " alt="Vector" src={minus} />
    </div>
    <div className="w-[9px] h-[16px]">
      <span className=" top-0 left-0 [font-family:'Arial_Rounded_MT_Bold-Regular',Helvetica] font-normal text-[#4e4e4e] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
        1
      </span>
    </div>

    <div className="relative pt-1 w-[16px] h-[16px]">
      <img className="absolute " alt="Vector" src={plus} />
    </div>
        </div>
    </div>
      </div>

      <div className="pt-[8px] flex justify-between">
      <div className="w-[99px] h-[29px] top-0 left-0 [font-family:'Montserrat',Helvetica] font-extrabold text-[#4e4e4e] text-[24px] tracking-[0] leading-[normal]">
        ₹3000/-
      </div>
      <div className="pt-1 pr-[72px]">
        <button>
      <img className=" w-[24px] h-[24px] top-0 left-0" alt="Delete" src={Delete} />
      </button>
    </div>
  
    </div>
    </div>
   
    </div>
    <div className='mt-5'>
      <img className="w-[497px] h-px top-0 left-0 object-cover" alt="Line" src={line30}/>
      </div>
      <div className='w-full pl-6 flex'> 
        <div className=" w-[115px] h-[142px] pt-[41px] pl-5">
      <img className=" object-cover" alt="Element copy" src={glutamine} />
    </div>
    <div className="w-full pl-10 pt-[50px]">
       
      <h2 className="top-0 left-0 [font-family:'Montserrat'] font-semibold text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
        Whey Protein Concentrate,
        <br />
        Mango Flavour
      </h2>
      <p className="mt-[16px] top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[14px] tracking-[0] leading-[normal]">
        Flavour: Banana
      </p>
      <div  className='flex'>
        {/* <div className='w-[80px] h-[17px] mt-1'>
      <p className=" top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[14px] tracking-[0] leading-[normal]">
        Size: 1KG
      </p>
      </div> */}
      <div className="w-full pr-11 flex justify-end">
      <div className=" flex justify-between w-[82px] h-[34px] p-1 top-0 left-0 rounded-[5.93px] border-[0.66px] border-solid border-[#4e4e4e]">
      <div className="relative pt-1 w-[16px] h-[16px]">
      <img className="absolute " alt="Vector" src={minus} />
    </div>
    <div className="w-[9px] h-[16px]">
      <span className=" top-0 left-0 [font-family:'Arial_Rounded_MT_Bold-Regular',Helvetica] font-normal text-[#4e4e4e] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
        1
      </span>
    </div>

    <div className="relative pt-1 w-[16px] h-[16px]">
      <img className="absolute " alt="Vector" src={plus} />
    </div>
        </div>
    </div>
      </div>

      <div className="pt-[8px] flex justify-between">
      <div className="w-[99px] h-[29px] top-0 left-0 [font-family:'Montserrat',Helvetica] font-extrabold text-[#4e4e4e] text-[24px] tracking-[0] leading-[normal]">
        ₹3000/-
      </div>
      <div className="pt-1 pr-[72px]">
        <button>
      <img className=" w-[24px] h-[24px] top-0 left-0" alt="Delete" src={Delete} />
      </button>
    </div>
  
    </div>
    </div>
   
    </div>
    {/* <div className='mt-6'>
      <img className="w-[497px] h-px top-0 left-0 object-cover" alt="Line" src={line30}/>
      </div>
      <div className='w-full pl-6 flex'> 
        <div className="pt-[41px] pl-5">
      <img className="w-[115px] h-[142px] object-cover" alt="Element copy" src={image1} />
    </div>
    <div className="w-full pl-10 pt-[50px]">
       
      <h2 className="top-0 left-0 [font-family:'Montserrat'] font-semibold text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
        Whey Protein Concentrate,
        <br />
        Mango Flavour
      </h2>
      <p className="mt-[16px] top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[14px] tracking-[0] leading-[normal]">
        Flavour: Banana
      </p>
      <div  className='flex'>
        <div className='w-[80px] h-[17px] mt-1'>
      <p className=" top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[14px] tracking-[0] leading-[normal]">
        Size: 1KG
      </p>
      </div>
      <div className="w-full pr-11 flex justify-end">
      <div className=" flex justify-between w-[82px] h-[34px] p-1 top-0 left-0 rounded-[5.93px] border-[0.66px] border-solid border-[#4e4e4e]">
      <div className="relative pt-1 w-[16px] h-[16px]">
      <img className="absolute " alt="Vector" src={minus} />
    </div>
    <div className="w-[9px] h-[16px]">
      <span className=" top-0 left-0 [font-family:'Arial_Rounded_MT_Bold-Regular',Helvetica] font-normal text-[#4e4e4e] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
        1
      </span>
    </div>

    <div className="relative pt-1 w-[16px] h-[16px]">
      <img className="absolute " alt="Vector" src={plus} />
    </div>
        </div>
    </div>
      </div>

      <div className="pt-[8px] flex justify-between">
      <div className="w-[99px] h-[29px] top-0 left-0 [font-family:'Montserrat',Helvetica] font-extrabold text-[#4e4e4e] text-[24px] tracking-[0] leading-[normal]">
        ₹3000/-
      </div>
      <div className="pt-1 pr-[72px]">
        <button>
      <img className=" w-[24px] h-[24px] top-0 left-0" alt="Delete" src={Delete} />
      </button>
    </div>
  
    </div>
    </div>
   
    </div>
    <div className='mt-6'>
      <img className="w-[497px] h-px top-0 left-0 object-cover" alt="Line" src={line30}/>
      </div> */}
    </div>

   
    <div className="pl-[28px] mt-[150px]">
    
      <div className="p-5 justify-center w-[443px] h-[340px] top-0 left-0 bg-white rounded-[8px] border border-solid border-[#d9d9d9] shadow-[0px_14px_39px_#bdb4ab40]">
        
        <div className='flex'>
      <div className="w-[248px] h-[26px] ml-20 mt-2">
      <h2 className=" top-0 left-0 [font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
        Free HerbalCart Gifts!
      </h2>
      <div className="w-[249px] h-[23px]">
      <p className=" top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[14px] tracking-[0] leading-[23.3px] whitespace-nowrap">
        Free Gifts will be Added to the Cart
      </p>
    </div>
      
    </div>
    <div className="w-[32px] h-[32px] ml-10">
      <img className=" w-[32px] h-[32px] top-0 left-0" alt="Close" src={close} />
    </div>

    
        </div>
        <div className="w-[397px] h-[74px] mt-10 space-y-4">
        <div className='relative top-2 left-1 flex justify-end'>
    <div className="absolute w-[24px] h-[24px]  ">
      <img className="h-[24px] bg-green-600 rounded-[12px]  bg-[100%_100%]" src={verified} />
    </div>
    </div>
      <div className=" p-5 flex space-x-[36px] w-[397px] h-[74px] top-0 left-0 bg-[#f8fff8] rounded-[8px] border-[0.6px] border-solid border-[#3b663c] shadow-[0px_14px_39px_#bdb4ab40]">
        
      <div className="w-[65px] h-[36px]">
      <img className="w-[65px] h-[36px] top-0 left-0" alt="Group" src={freedl} />
    </div>
    <div className="w-[134px] h-[22px] mt-1">
      <h2 className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
        Free Shipping
      </h2>
    </div>
        </div>
      <div className="p-5 flex w-[397px] h-[109px] top-0 left-0 bg-white rounded-[8px] shadow-[0px_14px_39px_#bdb4ab40]">
      <div className="w-[65px] h-[79px]">
      <img className="w-[65px] h-[79px] top-0 left-0 object-cover" alt="Image" src={shaker}/>
    </div>

    <div className="w-[189px] h-[23px] mt-1">
      <h2 className="top-0 left-0 [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#4e4e4e] text-[14px] tracking-[0] leading-[23.3px] whitespace-nowrap">
        Spend only ₹500.00 more
      </h2>
      <div className="w-[255px] h-[23px]">
      <p className=" top-0 left-0 [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#4e4e4e] text-[14px] tracking-[0] leading-[23.3px] whitespace-nowrap">
        <span className="[font-family:'Montserrat-Medium',Helvetica] font-medium text-[#4e4e4e] text-[14px] tracking-[0] leading-[23.3px]">
          to get a free gift :{" "}
        </span>
        <span className="underline">HerbalCart Shaker</span>
      </p>
    </div>

    <div className="w-[33px] h-[23px] flex space-x-3">
      <div className="top-0 left-0 [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#b9b9b9] text-[14px] tracking-[0] leading-[23.3px] line-through whitespace-nowrap">
        ₹199
      </div>
      <div className="w-[42px] h-[23px]">
      <div className=" top-0 left-0 [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#96bd47] text-[14px] tracking-[0] leading-[23.3px] whitespace-nowrap">
        ₹0.00
      </div>
    </div>
    </div>

    </div>
    
        </div>
        
    </div>

   
        </div>
        
    </div>
    <div className=" pl-[28px] pr-[28px] mt-[70px] space-y-4">
      <div className='flex justify-between'>
      <span className=" top-0 left-0 [font-family:'Montserrat',Helvetica] font-normal text-[#4e4e4e] text-[24px] tracking-[0] leading-[normal]">
        Subtotal
      </span>
      <span className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-extrabold text-[#4e4e4e] text-[24px] tracking-[0] leading-[normal]">
        ₹3000/-
    </span>
    </div>
    <div className="flex w-[443px] h-[50px] items-center justify-center gap-[10px] p-[10px] relative bg-[#642265] rounded-[8px]">
      <button className="relative w-fit [font-family:'Montserrat',Helvetica] font-medium text-white text-[18px] tracking-[0] leading-[normal]">
        CONTINUE
      </button>
    </div>
   
    </div>
   
        </div>
        </Modal>
    </div>
  )
}

export default Cart