import React from "react";
import OfferBanner from "./../../assets/images/Offersbanners.png";
import { Carousel } from "@material-tailwind/react";
import { fadeIn } from "../../motion/Variants";
import { motion } from "framer-motion";
const OffersSection = () => {
  return (
    <motion.div variants={fadeIn('up',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="container">
      <div className="relative mt-[200px] left-[300px] [font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[60px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
        Offer Zone
      </div>
      <div>
        <p className="absolute w-[785px] mt-[10px]  left-[567px] font-16 font-medium text-[#4e4e4e] text-[18px] text-center tracking-[var(--16-letter-spacing)] leading-[var(--16-line-height)] [font-style:var(--16-font-style)]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&#39;s standard dummy text
          ever since the 1500s.
        </p>
      </div>
      <div className=" relative w-[1920px] mt-[100px] h-[650px]">
      <Carousel
      className="rounded-xl"
      animation="slide"
      autoplayDelay={3000}
      autoplay={true}
      prevArrow={false}
      nextArrow={false}
      loop={true}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={` w-[62px] h-[8px] block  cursor-pointer rounded-2xl transition-all ${
                activeIndex === i ? "w-8 bg-[#4e4e4e]" : "w-4 bg-[#d5d1c9]"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
        <img
          className=" left-0 object-cover"
          alt="Banners copy"
          src={OfferBanner}
        />
        <img
          className=" left-0 object-cover"
          alt="Banners copy"
          src={OfferBanner}
        />
        <img
          className=" left-0 object-cover"
          alt="Banners copy"
          src={OfferBanner}
        />
    </Carousel>
    </div>
      {/* <div className=" relative w-[1920px] mt-[100px] h-[650px]">
        <img
          className=" left-0 object-cover"
          alt="Banners copy"
          src={OfferBanner}
        />
      </div>
      <div className="relative w-[62px] h-[8px] mt-[30px] left-[929px]">
        <div className="absolute w-[32px] h-[8px] top-0 left-0 bg-[#4e4e4e] rounded-[6px]" />
        <div className="left-[54px] absolute w-[8px] h-[8px] top-0 bg-[#d5d1c9] rounded-[4px]" />
        <div className="left-[39px] absolute w-[8px] h-[8px] top-0 bg-[#d5d1c9] rounded-[4px]" />
      </div> */}
    </motion.div>
  );
};

export default OffersSection;
