import React, { useEffect, useState } from "react";
import Line12 from "./../../assets/images/Line 12.png";
import youtube from "./../../assets/icons/youtube.svg";
import Rectangle46 from "./../../assets/images/Rectangle 46.png";
import Rectangle64 from "./../../assets/images/Rectangle 64.png";
import play from "./../../assets/icons/play.svg";
import left from './../../assets/icons/leftArrow.svg'
import { v4 as uuidv4 } from "uuid";

import { config } from "react-spring";
import VideoCards from "../../components/videoCards";
import Carousel3D from "../../components/Carousel";
import { fadeIn } from "../../motion/Variants";
import { motion } from "framer-motion"; 

const HerbalCartVideos = (props) => {

  let cards = [
    {
      key: uuidv4(),
      content: (
        <VideoCards  vcount={1} play={play} imagen={Rectangle46} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <VideoCards vcount={2} play={play} imagen={Rectangle64} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <VideoCards vcount={3} play={play} imagen={Rectangle46} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <VideoCards vcount={4} play={play} imagen={Rectangle46} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <VideoCards vcount={5} play={play} imagen={Rectangle64} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <VideoCards vcount={6} play={play} imagen={Rectangle64} />
      )
    },
  ];

  return ( <>
  
    <div className="relative w-[1920px] h-[1118px]  bg-[#3b663c]">
      <motion.h2 variants={fadeIn('right',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="absolute top-[115px] left-[147px] [font-family:'Praline',Helvetica] font-normal text-[#a3cb49] text-[60px] tracking-[0] leading-[normal] whitespace-nowrap">
        {" "}
        HerbalCart Videos{" "}
      </motion.h2>
      <motion.p variants={fadeIn('left',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className=" absolute w-[475px] top-[201px] left-[147px] font-medium text-white text-[16px]">
        {" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's.{" "}
      </motion.p>
      <div className="relative w-[96px] h-[22px] top-[130px] left-[1251px] [font-family:'Praline',Helvetica] font-normal  text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
        {" "}
        Youtube{" "}
      </div>
      <img
        className="relative w-[349px] top-[120px] left-[1351px] h-px  object-cover"
        alt="Line"
        src={Line12}
      />
      <img
        className="relative w-[48px] top-[95px] left-[1720px] h-[48px] "
        alt="Vector"
        src={youtube}
      />

<Carousel3D
    cards={cards}
    height="1000px"
    width="80%"
    margin="auto"
    offsetRadius={2}
    offset={200}

/>


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
      <img
            className="absolute w-[50px] h-[50px] top-[936px] left-[1720px] fill-blue-100"
            alt="Ph arrow up"
            src={left}
          />
    </div>
    </>
  );
};

export default HerbalCartVideos;
