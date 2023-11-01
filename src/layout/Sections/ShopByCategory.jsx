import React from "react";
import protienShaker from "./../../assets/images/protienShaker.png";
import rectangle1 from "./../../assets/images/Rectangle 59.png";
import rectangle2 from "./../../assets/images/Rectangle 58.png";
import rectangle3 from "./../../assets/images/Rectangle 60.png";
import rectangle4 from "./../../assets/images/Rectangle 61.png";
import { fadeIn } from "../../motion/Variants";
import { motion } from "framer-motion";

protienShaker;

const ShopByCategory = () => {
  return (
    <div className="relative ">
      <div className="w-[246px] h-[326px]">
        {" "}
        <img
          className="relative w-[246px] h-[326px] top-[-100px] left-[1674px] mix-blend-darken object-cover"
          alt="Element"
          src={protienShaker}
        />{" "}
      </div>
      <motion.h2 variants={fadeIn('up',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="relative top-[-240px] left-[20px] [font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[60px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
        {" "}
        Shop By Category{" "}
      </motion.h2>
      <div className="relative container flex left-[160px]">
      <motion.div variants={fadeIn('up',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="relative w-[405px] h-[671px] top-[-100px] mix-blend-luminosity hover:mix-blend-normal left-[150px]">
        
        <div className="relative hover:transition duration-700 hover:ease-in-out hover:p-5 hover:bg-secondary-leaf-green   hover:text-white top-[-20px] left-0 [font-family:'Praline',Helvetica] font-normal text-[#b9b9b9] text-[30px] text-center tracking-[0] leading-[normal]">
          {" "}
          Products For <br /> everyone{" "}
        </div>
        <img
          className="relative w-[405px] h-[532px] top-0 left-0  object-cover"
          alt="Rectangle"
          src={rectangle1}
        />{" "}
      </motion.div>
      <motion.div variants={fadeIn('up',0.6)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="relative w-[405px] h-[671px] top-[-100px] left-[150px] mix-blend-luminosity hover:mix-blend-normal">
        <div className="relative hover:transition duration-700 hover:ease-in-out hover:p-5 hover:bg-secondary-leaf-green   hover:text-white top-[-20px] left-0 [font-family:'Praline',Helvetica] font-normal text-[#b9b9b9] text-[30px] text-center tracking-[0] leading-[normal]">
          {" "}
          Products For The <br /> busy Bees
        </div>
        <img
          className="relative w-[405px] h-[532px] top-0 left-0 object-cover"
          alt="Rectangle"
          src={rectangle2}
        />{" "}
      </motion.div>
      <motion.div variants={fadeIn('up',0.9)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="relative w-[405px] h-[671px] top-[-100px] left-[150px] mix-blend-luminosity hover:mix-blend-normal">
        <div className="relative hover:transition duration-700 hover:ease-in-out hover:p-5 hover:bg-secondary-leaf-green   hover:text-white top-[-20px] left-0 [font-family:'Praline',Helvetica] font-normal text-[#b9b9b9] text-[30px] text-center tracking-[0] leading-[normal]">
          {" "}
          Products for Fitness <br /> Enthusiasts
        </div>
        <img
          className="relative w-[405px] h-[532px] top-0 left-0  object-cover"
          alt="Rectangle"
          src={rectangle3}
        />{" "}
      </motion.div>
      <motion.div variants={fadeIn('up',1.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="relative w-[405px] h-[671px] top-[-100px] left-[150px] mix-blend-luminosity hover:mix-blend-normal">
        <div className="relative hover:transition duration-700 hover:ease-in-out hover:p-5 hover:bg-secondary-leaf-green   hover:text-white top-[-20px] left-0 [font-family:'Praline',Helvetica] font-normal text-[#b9b9b9] text-[30px] text-center tracking-[0] leading-[normal]">
          {" "}
          Products for The <br /> Less Eaters
        </div>
        <img
          className="relative w-[405px] h-[532px] top-0 left-0  object-cover"
          alt="Rectangle"
          src={rectangle4}
        />{" "}
      </motion.div>
      </div>
    </div>
  );
};

export default ShopByCategory;
