import React from 'react';
import test1 from "./../../assets/icons/test1.svg"
import test2 from "./../../assets/icons/test2.svg"
import test3 from "./../../assets/icons/test3.svg"
import test4 from "./../../assets/icons/test4.svg"
import test5 from "./../../assets/icons/test5.svg"
import herbalLogo from "./../../assets/images/herbalLogo.png"
import { fadeIn } from '../../motion/Variants';
import { motion } from 'framer-motion';


const FeaturedProducts = () => {
  return (
    <>
    <div className="container">
    <img className="absolute animate-none w-[359px] h-[450px] top-[1050px] left-[149px]" alt="Vector" src={herbalLogo} />
        </div>
    <div className="">
    <motion.div variants={fadeIn('up',0.2)} initial='hidden' whileInView={'show'} viewport={{once:true, amount: 0.1}} className="absolute w-[1328px] h-[388px] top-[852px] left-[592px] bg-[#3b663c] rounded-[8px]">
    <div className="w-[588px] h-[66px]">
      <div className="absolute top-[75px] left-[83px] [font-family:'Praline',Helvetica] font-normal text-[#a3cb49] text-[60px] tracking-[0] leading-[normal] whitespace-nowrap">
        Our USP
      </div>
    </div>
    <div className="w-[981px] h-[42px]">
      <p className="absolute w-[981px] top-[161px] left-[83px] [font-family:'Montserrat',Helvetica] font-medium text-white text-[16px] tracking-[0]">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum <br/>has been the
        industry&#39;s standard dummy text ever since the 1500s,
      </p>
    </div>
    <div className='w-[171px] h-[172px] ml-[60px] mt-[130px] rounded-[8px]  hover:bg-grass-green duration-300 hover:[box-shadow:10px_19px_19px_0px_rgba(0,_0,_0,_0.10)]'>
      <img className="absolute  w-[58px] h-[58px] top-[264px] left-[118px] bottom-[66px]" alt="Vector" src={test1} />
      <div className="w-[127px] h-[22px]">
      <div className="absolute top-[332px] left-[83px] bottom-[32px] [font-family:'Montserrat',Helvetica] font-medium text-white text-[18px] tracking-[0] leading-[normal]">
        Natural Herbs
      </div>
    </div>
    </div>
    <div className='w-[171px] h-[172px] ml-[289px] mt-[-173px] rounded-[8px]  hover:bg-grass-green duration-300 hover:[box-shadow:10px_19px_19px_0px_rgba(0,_0,_0,_0.10)]'>
    <img className="absolute w-[82px] h-[32px] top-[277] left-[331px] bottom-[79px]" alt="Vector" src={test2} />
    
    <div className="w-[130px] h-[24px]">
      <div className="absolute top-[332px] left-[307px] bottom-[32px] [font-family:'Montserrat',Helvetica] font-medium text-white text-[18px] tracking-[0] leading-[normal]">
        FSSAI Certified
      </div>
        </div></div>
        <div className='w-[171px] h-[172px] ml-[497px] mt-[-173px] rounded-[8px]  hover:bg-grass-green duration-300 hover:[box-shadow:10px_19px_19px_0px_rgba(0,_0,_0,_0.10)]'>
      <img className="absolute w-[58px] h-[58px] top-[264px] left-[554px] bottom-[66px]" alt="Vector" src={test3} />
      <div className="w-[84px] h-[24px]">
      <div className="absolute top-[332px] left-[539px] bottom-[32px] [font-family:'Montserrat',Helvetica] font-medium text-white text-[18px] tracking-[0] leading-[normal]">
        No GMOs
      </div>
    </div>
    </div>
    <div className='w-[171px] h-[172px] ml-[660px] mt-[-173px] rounded-[8px]  hover:bg-grass-green duration-300 hover:[box-shadow:10px_19px_19px_0px_rgba(0,_0,_0,_0.10)]'>
      <img className="absolute w-[48px] h-[52px] top-[267px] left-[723px] bottom-[69px]" alt="Vector" src={test4} />
      <div className="w-[43px] h-[24px]">
      <div className="absolute top-[332px] left-[725px] bottom-[32px] [font-family:'Montserrat',Helvetica] font-medium  text-white text-[18px] tracking-[0] leading-[normal]">
        GMP
      </div>
    </div>
    </div>
    <div className='w-[171px] h-[172px] ml-[830px] mt-[-173px] rounded-[8px]  hover:bg-grass-green duration-300 hover:[box-shadow:10px_19px_19px_0px_rgba(0,_0,_0,_0.10)]'>
      <img className="absolute w-[48px] h-[48px] top-[269px] left-[890px] bottom-[71px]" alt="Vector" src={test5} />
      <div className="w-[94px] h-[24px]">
      <div className="absolute top-[332px] left-[870px] bottom-[32px] [font-family:'Montserrat',Helvetica] font-medium text-white text-[18px] tracking-[0] leading-[normal]">
        Lab Tested
      </div>
    </div>
    </div>
    </motion.div>
  </div>
  </>  )
}

export default FeaturedProducts