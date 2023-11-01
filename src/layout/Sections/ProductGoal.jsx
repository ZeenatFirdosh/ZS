import React from "react";
import products from "./../../assets/images/products.png";
import freeShipping from "./../../assets/icons/freeshipping.svg";
import refund from "./../../assets/icons/refund.svg";
import support from "./../../assets/icons/support.svg";
import blackUnderline from "./../../assets/icons/Line 13.svg";
import whiteUnderline1 from "./../../assets/icons/Line 14.png";
import whiteUnderline2 from "./../../assets/icons/Line 15.svg";
import Frame9 from "./../../assets/images/Frame 9.png";
import { fadeIn } from "../../motion/Variants";
import { motion } from "framer-motion";

const ProductGoal = () => {
  return (
    <div className="w-[1905px] relative">
      {" "}
      <motion.p variants={fadeIn('up',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="relative top-0 left-[10px] [font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[60px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
        {" "}
        Are We A Perfect Fit Or Misfit?{" "}
      </motion.p>
      <div className="w-[463px] h-[143px]">
        {" "}
        <motion.p variants={fadeIn('left',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="relative w-[463px] top-[90px] left-[1306px] font-medium text-[#4e4e4e] text-[18px] tracking-[var(--16-letter-spacing)] leading-[var(--16-line-height)] [font-style:var(--16-font-style)]">
          {" "}
          If you have fictitious health goals, YOU and WE can’t be US; if you
          have real health goals, YOU and WE are MADE FOR EACH OTHER. You
          promise to add our nutritional range in your active routine; we
          promise overcoming your nutritional gaps and rediscovering wellness
          &amp; fitness you are worthy of.{" "}
        </motion.p>{" "}
      </div>{" "}
      <div className="w-[1920px] h-[466px]">
        {" "}
        <div className="relative flex w-[1920px] h-[466px] top-[130px] left-0 bg-[#642265]">
          <div className="relative w-[710px] h-[766px] left-[580px] top-[-250px] ">
            {" "}
            <motion.div variants={fadeIn('down',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="relative w-[401px] h-[734px] top-[11px] left-[190px] rounded-[500px_500px_0px_0px] border-[1.5px] border-solid border-[#3b663c] rotate-[29.44deg]" />{" "}
              {" "}
              <motion.img variants={fadeIn('down',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}}
                className="relative w-[757px] h-[548px] top-[-620px] left-[10px] object-cover"
                alt="Element copy"
                src={products}
              />{" "}
          </div>{" "}
          <img className="relative w-[466px] h-[466px] top-0 left-[700px] opacity-[20]" alt="Vector" src={Frame9} />
        </div>
      </div>
        <>
          {" "}
          <motion.img variants={fadeIn('right',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}}
            className="relative w-[60px] h-[60px] top-[-410px] left-[269px]"
            alt="freeShipping"
            src={freeShipping}
          />{" "}
          <motion.div variants={fadeIn('right',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="absolute w-[128px] top-[290px] left-[349px] [font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap ">
            {" "}
            Free Shipping{" "}
          </motion.div>
          <motion.img variants={fadeIn('right',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}}
            className="absolute w-[234px] h-px top-[318px] left-[349px] object-cover"
            alt="Line"
            src={blackUnderline}
          />
        </>
      <div>
        <div className="">
          {" "}
          <motion.img variants={fadeIn('right',0.4)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}}
            className="relative w-[55px] h-[55px] top-[-320px] left-[197px]"
            alt="Vector"
            src={support}
          />
            {" "}
            <motion.div variants={fadeIn('right',0.4)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="relative w-[174px] top-[-357px] left-[277px] [font-family:'Praline',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
              {" "}
              Dedicated Support{" "}
          </motion.div>
          <motion.img variants={fadeIn('right',0.4)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}}
          className="relative w-[281px] h-px top-[-350px] left-[277px] object-cover"
          alt="whiteUnderline1"
          src={whiteUnderline1}
        />
        </div>
       
      </div>
      <div className="">
   <motion.img variants={fadeIn('right',0.6)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="relative w-[60px] h-[60px] top-[-250px] left-[270px]" alt="Indian rupee symbol" src={refund} /> 
   <motion.div variants={fadeIn('right',0.6)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="relative w-[113px] top-[-290px] left-[356px] [font-family:'Praline',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap"> Money Back </motion.div>
   <motion.img variants={fadeIn('right',0.6)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="relative w-[220px] h-px top-[-283px] left-[354px] object-cover" alt="Line" src={whiteUnderline2} />
         </div>
      </div>
  );
};

export default ProductGoal;
