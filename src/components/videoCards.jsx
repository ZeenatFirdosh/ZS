
import React, { useState } from "react";
import { useSpring, animated, useSprings } from "react-spring";
import { fadeIn } from "../motion/Variants";
import { motion } from "framer-motion";

function VideoCards({ imagen,vcount,play }) {
  const [show, setShown] = useState(false);


  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  return (
    <div
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    > 
    <motion.div variants={fadeIn('up',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="w-[561px] h-[561px]">
        <div className=" relative ml-[20px] mb-[10px] w-[62px] h-[66px]  [font-family:'Praline',Helvetica] font-normal text-[#a3cb49] text-[60px]  leading-[normal] whitespace-nowrap">
          {" "}
          {"0"}{vcount}
        </div>
        
        <img
          className=" hover:scale-[1.03] w-[427px] h-[432px]  object-cover"
          alt=""
          src={imagen}
        />
        <img
            className=" z-40 relative mt-[-320px] ml-[140px] w-[150px] h-[150px]  transition ease-in-out hover:delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer"
            alt=""
            src={play}
          />
          {/* <div className="relative w-[250px] h-[250px] left-[200px] top-[-20px] bg-[#6d8f3c] rounded-[153px] opacity-70" />
          <div className="relative w-[170px] h-[170px] top-[-280px] left-[245px]  bg-[#6d8f3c] rounded-[106.73px]"></div> */}
           </motion.div>
        <motion.p variants={fadeIn('down',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="relative left-[30px] mt-[-60px] [font-family:'Montserrat',Helvetica] font-semibold text-white text-[30px] tracking-[0] leading-[normal]">
          {" "}
          Lorem Ipsum Is <br /> Dummy Text{" "}
        </motion.p>
      {/* <img src={imagen} alt="" />
      <h2>Title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p> */}
     


      {/* <div>
        <div className="absolute w-[62px] h-[66px] top-[400px] left-[150px] [font-family:'Praline',Helvetica] font-normal text-[#a3cb49] text-[60px] tracking-[0] leading-[normal] whitespace-nowrap">
          {" "}
          01{" "}
        </div>
        <img
          className="absolute w-[427px] h-[432px] top-[500px] left-[125px] object-cover"
          alt="Rectangle"
          src={Rectangle46}
        />
        <p className="absolute top-[920px] left-[147px] [font-family:'Montserrat',Helvetica] font-semibold text-white text-[30px] tracking-[0] leading-[normal]">
          {" "}
          Lorem Ipsum Is <br /> Dummy Text{" "}
        </p>

        <div className="absolute top-[254px] left-[680px] [font-family:'Praline',Helvetica] font-normal text-[#a3cb49] text-[60px] tracking-[0] leading-[normal] whitespace-nowrap">
          {" "}
          02{" "}
        </div>
        <div className="w-[561px] h-[561px]">
          {" "}
          <div className="relative w-[306px] h-[306px] top-[660px] left-[1050px] bg-[#6d8f3c] rounded-[153px] opacity-70" />
          <div className="absolute w-[213px] h-[213px] top-[778px] left-[1100px] bg-[#6d8f3c] rounded-[106.73px]">
            {" "}
          </div>
          <img
            className="absolute w-[617px] h-[622px] top-[344px] left-[660px]"
            alt="Rectangle"
            src={Rectangle64}
          />
          <img
            className="absolute w-[200px] h-[200px] top-[530px] left-[865px] transition ease-in-out hover:delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer"
            alt="Vector"
            src={play}
          />
        </div>
        <p className="absolute top-[940px] left-[690px] [font-family:'Montserrat',Helvetica] font-semibold text-white text-[30px] tracking-[0] leading-[normal]">
          {" "}
          Lorem Ipsum Is <br /> Dummy Text{" "}
        </p>
        <div className="absolute top-[400px] left-[1399px] [font-family:'Praline',Helvetica] font-normal text-[#a3cb49] text-[60px] tracking-[0] leading-[normal] whitespace-nowrap">
          {" "}
          03{" "}
        </div>
        <img
          className="absolute w-[427px] h-[432px] top-[500px] left-[1370px] object-cover"
          alt="Rectangle"
          src={Rectangle46}
        />
        <p className="absolute top-[900px] left-[1400px] [font-family:'Montserrat',Helvetica] font-semibold text-white text-[30px] tracking-[0] leading-[normal]">
          {" "}
          Lorem Ipsum Is <br /> Dummy Text{" "}
        </p>
      </div> */}
    </div>
  );
}

export default VideoCards;
