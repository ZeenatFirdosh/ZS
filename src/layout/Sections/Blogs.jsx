import React from "react";
import herbalLogo from "./../../assets/images/herbalLogo.png";
import rectangle47 from "./../../assets/images/Rectangle 47.png";
import rectangle51 from "./../../assets/images/Rectangle 51.png";
import rectangle52 from "./../../assets/images/Rectangle 52.png";
import rectangle53 from "./../../assets/images/Rectangle 53.png";
import { fadeIn } from "../../motion/Variants";
import { motion } from "framer-motion";

const Blogs = () => {
  return (
    <div className="relative ">
      <img
        className="absolute animate-none w-[359px] h-[450px] left-[379px] top-[245px] "
        alt="Vector"
        src={herbalLogo}
      />
      <motion.div variants={fadeIn('up',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="absolute top-[200px] left-[1122px] [font-family:'Praline',Helvetica] font-normal text-[#b9b9b9] text-[200px] tracking-[0] leading-[normal] whitespace-nowrap">
        Blogs{" "}
      </motion.div>
      <motion.p variants={fadeIn('down',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="absolute w-[564px] top-[440px] left-[1122px] [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[18px] tracking-[0] leading-[24px]">
        {" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's.{" "}
      </motion.p>
      <div>
        <motion.img variants={fadeIn('up',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}}
          className="absolute w-[342px] h-[619px] top-[600px] left-0 object-cover"
          alt="Rectangle"
          src={rectangle47}
        />
        <div className="w-[536px] h-[619px] ">
          {" "}
          <motion.img variants={fadeIn('down',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}}
            className="absolute top-[740px] left-[370px] object-cover"
            alt="Rectangle"
            src={rectangle51}
          />
          <motion.p variants={fadeIn('up',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="absolute w-[330px] top-[1350px] left-[400px] [font-family:'Praline',Helvetica] font-normal text-[#cecece] text-[40px] tracking-[0] leading-[normal]">
            {" "}
            Lorem Ipsum Is <br /> Dummy Text{" "}
          </motion.p>
        </div>
        <div className="w-[536px] h-[500px] ">
          {" "}
          <motion.img variants={fadeIn('up',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}}
            className="absolute  top-[536px] left-[906px]"
            alt="Rectangle"
            src={rectangle52}
          />
          <motion.p variants={fadeIn('down',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="absolute w-[330px] top-[1025px] left-[930px] [font-family:'Praline',Helvetica] font-normal text-[#cecece] text-[40px] tracking-[0] leading-[normal]">
            {" "}
            Lorem Ipsum Is <br /> Dummy Text{" "}
          </motion.p>
        </div>
        <div className="w-[506px] h-[500px] ">
          <motion.img variants={fadeIn('down',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}}
            className="absolute  top-[600px] left-[1400px] object-cover"
            alt="Rectangle"
            src={rectangle53}
          />{" "}
          <motion.p variants={fadeIn('up',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="absolute w-[330px] top-[1089px] left-[1470px] [font-family:'Praline',Helvetica] font-normal text-[#cecece] text-[40px] tracking-[0] leading-[normal]">
            {" "}
            Lorem Ipsum Is <br /> Dummy Text{" "}
          </motion.p>
        </div>
      </div>
      <div className="">
          {" "}
          <motion.p variants={fadeIn('up',0.2)} initial='hidden' whileInView={'show'} viewport={{once:true, amount: 0.1}} className=" top-0 [font-family:'Praline',Helvetica] font-normal text-[#c2c2c2] text-[100px] text-center tracking-[0] leading-[normal]">
            {" "}
            Let’s Talk About The <br /> big Think{" "}
          </motion.p>{" "}
        </div>
    </div>
  );
};

export default Blogs;
