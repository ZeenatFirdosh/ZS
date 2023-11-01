import React from "react";
import image from "./../../assets/images/image 5.png";
import imag1 from "./../../assets/images/Rectangle 30.png";
import imag2 from "./../../assets/images/Rectangle 31.png";
import imag3 from "./../../assets/images/Rectangle 32.png";
import Arrow from "./../../assets/icons/rArrow.svg";
import { fadeIn } from "../../motion/Variants";
import { motion } from "framer-motion";
const SuccessStory = () => {
  return (
    <>
      <div className="flex my-[224px]">
        <div className="absolute animate-spin-slow z-40 w-[226px] h-[225px] my-[-70px] left-[713px] bg-[url(../src/assets/icons/herbalCircle.svg)] bg-[100%_100%]" />
        ;
        <motion.div variants={fadeIn('right',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="absolute w-[840px] h-[1006px] left-0 bg-[#3b663c] rounded-[0px_8px_8px_0px]">
          <div className="w-[525px] h-[577px]">
            <img
              className="relative top-[91px] left-[150px] object-cover"
              alt="Image"
              src={image}
            />
            <div className="relative w-[369px] h-[60px] mt-[-145px] left-[439px] bg-white rounded-[8px] rotate-[180.00deg]">
              <div className="relative w-[271px] h-[60px] top-[] left-[98px] right-[98px] bg-[#a0c748] hover:bg-primary-purple rounded-[8px_0px_0px_8px] rotate-[180.00deg]">
                <div className="relative top-[19px] left-[73px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-white text-[18px] tracking-[0] leading-[normal]">
                  SHOP NOW
                </div>
                <img
                  className="relative w-[32px] h-[32px] top-[-5px] left-[300px] rotate-[-360.00deg]"
                  alt="Vector"
                  src={Arrow}
                />
              </div>
            </div>
          </div>
          <div className="w-[518px] h-[66px]">
            <div className="relative top-[120px] left-[150px] [font-family:'Praline',Helvetica] font-normal text-[#a0c748] text-[60px] tracking-[0] leading-[normal] whitespace-nowrap">
              Our Success Story
            </div>
          </div>
          <div className="w-[525px] h-[72px]">
            <p className="relative w-[525px] top-[140px] left-[150px] text-justify font-normal  text-white text-[length:var(--16-font-size)] tracking-[var(--16-letter-spacing)] leading-[var(--16-line-height)] [font-style:var(--16-font-style)]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s,
            </p>
          </div>
          <button className="flex w-[200px] h-[50px] left-[142px] top-[180px] items-center justify-center gap-[10px] hover:bg-grass-green p-[10px] relative rounded-[8px] border border-solid border-white">
            <div className="relative w-fit [font-family:'Montserrat-Medium',Helvetica]  font-medium text-white text-[18px] tracking-[0] leading-[normal]">
              LEARN MORE
            </div>
          </button>
        </motion.div>
        <div className="mx-[1000px] ">
          <motion.div variants={fadeIn('left',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="relative w-[495px] h-[132px] left-[70px]  [font-family:'Praline',Helvetica] font-normal text-[#b9b9b9] text-[60px] tracking-[0] leading-[normal]">
            Natural nutrition,
            <br />
            The Good Food.
          </motion.div>
          <motion.p variants={fadeIn('left',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className=" relative w-[601px] h-[48px] left-[70px] mt-[20px]  font-medium  text-[#4e4e4e] text-[18px] tracking-[var(--16-letter-spacing)] leading-[var(--16-line-height)] [font-style:var(--16-font-style)]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s.
          </motion.p>

          <motion.img variants={fadeIn('left',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}}
            className="relative w-[418px] h-[231px] mt-[20px] left-[70px]  object-cover"
            alt="Rectangle"
            src={imag1}
          />
          <div className="flex">
            <div>
              <motion.h2 variants={fadeIn('up',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="relative w-[439px] h-[132px] mt-[93px] ml-[-30px] [font-family:'Praline',Helvetica] font-normal text-[#b9b9b9] text-[60px] tracking-[0] leading-[normal]">
                Feel good, taste good.
              </motion.h2>

              <motion.p variants={fadeIn('up',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="relative w-[415px] h-[96px] ml-[-30px] mt-[20px]  font-medium text-[#4e4e4e] text-[18px] tracking-[var(--16-letter-spacing)] leading-[var(--16-line-height)] [font-style:var(--16-font-style)]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text ever since the 1500s,
              </motion.p>
            </div>
            <motion.div variants={fadeIn('up',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="w-[293px] h-[373px] ml-[39px]">
              <img
                className="relative  mt-[40px]  object-cover "
                src={imag2}
                alt=""
              />
            </motion.div>
          </div>
          <div className="flex ml-[-245px] mt-[40px]">
            <motion.img variants={fadeIn('up',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}}
              className="relative w-[462px] h-[265px]  object-cover "
              src={imag3}
              alt=""
            />
            <div className="mt-[41px] ml-[57px]">
              <motion.h2 variants={fadeIn('up',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="relative w-[480px] h-[132px] [font-family:'Praline',Helvetica] font-normal text-[#b9b9b9] text-[60px] tracking-[0] leading-[normal]">
                {" "}
                Never quit, Never <br /> Surrender{" "}
              </motion.h2>

              <motion.p variants={fadeIn('up',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="relative w-[439px] h-[72px] font-medium text-[#4e4e4e] text-[18px] tracking-[var(--16-letter-spacing)] leading-[var(--16-line-height)] [font-style:var(--16-font-style)]">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,{" "}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStory;
