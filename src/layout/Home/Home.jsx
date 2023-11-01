import React from 'react'
import favourite from './../../assets/icons/favourite.svg'
import massGainerImg from './../../assets/images/MassGainerFront.png'
import Offer from './../../assets/images/OfferImg.png'
import roundPlus from './../../assets/icons/round-plus.svg'
import roundMinus from './../../assets/icons/round-minus.svg'
import Line from './../../assets/images/Line.png'
import left from './../../assets/icons/leftArrow.svg'
import right from './../../assets/icons/rightArrow.svg'
import group from './../../assets/icons/Group.svg'
import Carousel from 'react-multi-carousel'
import { motion } from 'framer-motion'
import { fadeIn } from '../../motion/Variants'
import OfferBanner from "./../../assets/images/Offersbanners.png";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";


const CustomDot = ({ onMove, index, onClick, active }) => {
  return (
    <ul className='relative z-40 my-[-490px] left-[470px]'>
    <li className={`${active ? "active" : "inactive"}`}
    onClick={() => onClick()}>
    <div className={index === 0  && `absolute w-[32px] h-[8px] top-0 left-0 ${ active ? 'bg-[#4e4e4e]' : 'bg-[#d5d1c9]' } rounded-[6px]` } onClick={() => onClick()}/>
    <div className={index === 1 && `left-[54px] absolute w-[8px] h-[8px]  top-0 ${ active ? 'bg-[#4e4e4e]' : 'bg-[#d5d1c9]' } rounded-[4px]` } onClick={() => onClick()} />
    <div className={index === 2 && `left-[39px] absolute w-[8px] h-[8px] top-0 ${ active ? 'bg-[#4e4e4e]' : 'bg-[#d5d1c9]' } rounded-[4px]`} onClick={() => onClick()}/>
    <div className={index === 3 &&`left-[70px] absolute w-[8px] h-[8px] top-0 ${ active ? 'bg-[#4e4e4e]' : 'bg-[#d5d1c9]' } rounded-[4px]`} onClick={() => onClick()}/>
    <div className={index === 4 &&`left-[86px] absolute w-[8px] h-[8px] top-0 ${ active ? 'bg-[#4e4e4e]' : 'bg-[#d5d1c9]' } rounded-[4px]` } />
 {console.log(index +1,"index")}
</li>
</ul>
  );
};


const Home = () => {
  const [open, setOpen] = React.useState(1);
 
  const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }

  const handleOpen = (value) => setOpen(open === value ? 0 : value);  
  return ( 
    < >


  <div className='relative'>
    <Carousel
  additionalTransfrom={0}
  arrows={true}
  customLeftArrow={<img
    className="absolute cursor-pointer w-[50px] h-[50px] top-[480px] left-[1397px] rotate-180"
    alt="right"
    src={left}
  />}
  customRightArrow={ <img
    className="absolute cursor-pointer w-[50px] h-[50px] top-[480px] left-[1456px]"
    alt="Ph arrow up"
    src={left}
  />}
  autoPlaySpeed={3000}
  centerMode={false}
  customDot={  <CustomDot/>
  }
  className=""
  containerClass="container-with-dots z-40 "
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={true}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 1
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 1
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots
  sliderClass=""
  slidesToSlide={1}
  swipeable 
>
   
    <div>
      <motion.div variants={fadeIn('right',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} >
    <h2 className="absolute top-[110px] left-[152px] [font-family:'Praline'] font-normal text-[#4e4e4e] text-[100px] tracking-[0] leading-[normal]">
      Lorem Ipsum
      <br />
      is dummy
    </h2>
    <div className="w-[152px] h-[53px]">
      <div className="absolute top-[340px] left-[152px] font-secondary font-black not-italic  text-[#4e4e4e] text-[40px] tracking-[0] leading-[normal]">
        ₹3000/-
      </div>
    </div>
    <div className="w-[95px] h-[33px]">
      <div className="absolute top-[355px] left-[330px] [font-family:'Montserrat'] font-extrabold text-[#a8a8a8] text-[25px] tracking-[0] leading-[normal] line-through">
        ₹4000/-
      </div>
    </div>
    <div className="w-[430px] h-[48px]">
      <p className="absolute top-[420px] left-[152px] font-[400] font-[number:var(--16-font-weight)] text-[#4d4d4d] text-16 tracking-[var(--16-letter-spacing)] leading-[var(--16-line-height)] [font-style:var(--16-font-style)]">
        Lorem Ipsum is simply dummy text of the printing and
        <br />
        typesetting industry.
      </p>
    </div>
    <div>
    <button className="flex w-[200px] h-[50px] top-[370px] left-[152px] hover:bg-dark-green items-center justify-center gap-[10px] p-[10px] relative bg-[#642265] rounded-[8px]">
      <div className="relative w-fit [font-family:'Montserrat-Medium',Helvetica] font-bold text-white text-[18px] tracking-[0] leading-[normal]">
        ORDER NOW
      </div>
    </button>
    </div>
    <button className="relative w-[24px] h-[24px] ">
      <img className="absolute w-[24px] h-[24px] top-[330px] left-[378px]" alt="favourite" src={favourite} />
    </button>
    </motion.div>

  <motion.div variants={fadeIn('up',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="w-[502px] h-[637px] ">
  <img
        className="relative w-[85px] h-[98px] top-[-130px] left-[860px]"
        alt="Offer"
        src={Offer}
      />
      <img
        className="relative w-[646px] h-[781px] overflow-visible top-[-220px] left-[850px] object-cover"
        alt="Mass gainer front"
        src={massGainerImg}
      />
    </motion.div>
    <div className=' w-[400px] my-[-100px]'>
    <motion.div variants={fadeIn('left',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className='relative left-[1399px] top-[-590px]'>
    <Accordion open={open === 1} animate={CUSTOM_ANIMATION} icon={<Icon id={1} open={open} />}>
      <AccordionHeader onClick={() => handleOpen(1)} className="[font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
        Description
      </AccordionHeader>
      <div className=" w-[24px] h-[24px]">
      <img className="absolute  top-[180px] left-[1659px]" alt="Vector" src={roundPlus} />
    </div>
    <div className="w-[281px] h-px">
      <img className=" absolute w-[281px] h-px top-[225px] left-[1397px]" alt="Line" src={Line} />
    </div>
    <AccordionBody className="w-[300px] h-[120px] mt-[-20px]">
      <p className=" [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
        Lorem Ipsum is simply dummy
        <br />
        text of the printing and
        <br />
        typesetting industry.
      </p>
    </AccordionBody>
    </Accordion>
    </motion.div>  

    <motion.div variants={fadeIn('left',0.6)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className='relative left-[1399px] top-[-608px]'>
    <Accordion open={open === 2} animate={CUSTOM_ANIMATION} icon={<Icon id={2} open={open} />}>
      <AccordionHeader onClick={() => handleOpen(2)} className=" [font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
        Nutrition
      </AccordionHeader>
      <div className=" w-[24px] h-[24px]">
      <img className="absolute  top-[246px] left-[1659px]" alt="Vector" src={roundPlus} />
    </div>
    <div className="w-[281px] h-px">
      <img className=" absolute w-[281px] h-px top-[290px] left-[1397px]" alt="Line" src={Line} />
    </div>
    <AccordionBody className="w-[300px] h-[120px] mt-[-20px]">
      <p className=" [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
        Lorem Ipsum is simply dummy
        <br />
        text of the printing and
        <br />
        typesetting industry.
      </p>
    </AccordionBody>
    </Accordion>
    </motion.div>  

    <motion.div variants={fadeIn('left',0.9)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}}  className='relative left-[1399px] top-[-620px]'>
    <Accordion open={open === 3} animate={CUSTOM_ANIMATION} icon={<Icon id={3} open={open} />}>
      <AccordionHeader onClick={() => handleOpen(3)} className="absolute  [font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
        Ingredients
      </AccordionHeader>
      <div className=" w-[24px] h-[24px]">
      <img className="absolute  top-[312px] left-[1659px]" alt="Vector" src={roundMinus} />
    </div>
    {/* <div className="w-[281px] h-px">
      <img className=" absolute w-[281px] h-px top-[522px] left-[1397px]" alt="Line" src={Line} />
    </div> */}
    <AccordionBody className="w-[300px] h-[120px] mt-7">
      <p className=" [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
        Lorem Ipsum is simply dummy
        <br />
        text of the printing and
        <br />
        typesetting industry.
      </p>
    </AccordionBody>
    </Accordion></motion.div>  
    </div>
    </div>
    
    <div>
    <div className="absolute top-[110px] left-[152px] [font-family:'Praline'] font-normal text-[#4e4e4e] text-[100px] tracking-[0] leading-[normal]">
      Lorem Ipsum
      <br />
      is dummy
    </div>
    <div className="w-[152px] h-[53px]">
      <div className="absolute top-[340px] left-[152px] font-secondary font-black not-italic  text-[#4e4e4e] text-[40px] tracking-[0] leading-[normal]">
        ₹3000/-
      </div>
    </div>
    <div className="w-[95px] h-[33px]">
      <div className="absolute top-[355px] left-[330px] [font-family:'Montserrat'] font-extrabold text-[#a8a8a8] text-[25px] tracking-[0] leading-[normal] line-through">
        ₹4000/-
      </div>
    </div>
    <div className="w-[430px] h-[48px]">
      <p className="absolute top-[420px] left-[152px] font-[400] font-[number:var(--16-font-weight)] text-[#4d4d4d] text-16 tracking-[var(--16-letter-spacing)] leading-[var(--16-line-height)] [font-style:var(--16-font-style)]">
        Lorem Ipsum is simply dummy text of the printing and
        <br />
        typesetting industry.
      </p>
    </div>
    <div>
    <button className="flex w-[200px] h-[50px] top-[370px] left-[152px] hover:bg-dark-green items-center justify-center gap-[10px] p-[10px] relative bg-[#642265] rounded-[8px]">
      <div className="relative w-fit [font-family:'Montserrat-Medium',Helvetica] font-bold text-white text-[18px] tracking-[0] leading-[normal]">
        ORDER NOW
      </div>
    </button>
    </div>
    <button className="relative w-[24px] h-[24px] ">
      <img className="absolute w-[24px] h-[24px] top-[330px] left-[378px]" alt="favourite" src={favourite} />
    </button>

  <div className="relative top-[-200px] left-[884px]">
  </div>
  <div className="w-[502px] h-[637px] ">
  <img
        className="relative w-[85px] h-[98px] top-[-120px] left-[910px]"
        alt="Offer"
        src={Offer}
      />
      <img
        className="absolute  z-40 w-[646px] h-[781px] top-[87px] left-[802.31px] object-cover"
        alt="Mass gainer front"
        src={massGainerImg}
      />
    </div>
    {/* <div >
    <div>
      <div className="absolute top-[180px] left-[1399px] [font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
        Description
      </div>
      <div className=" w-[24px] h-[24px]">
      <img className="absolute  top-[180px] left-[1659px]" alt="Vector" src={roundPlus} />
    </div>
    <div className="w-[281px] h-px">
      <img className=" absolute w-[281px] h-px top-[225px] left-[1397px]" alt="Line" src={Line} />
    </div>
    </div>  

    <div>
      <div className="absolute top-[246px] left-[1399px] [font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
        Nutrition
      </div>
      <div className=" w-[24px] h-[24px]">
      <img className="absolute  top-[246px] left-[1659px]" alt="Vector" src={roundPlus} />
    </div>
    <div className="w-[281px] h-px">
      <img className=" absolute w-[281px] h-px top-[290px] left-[1397px]" alt="Line" src={Line} />
    </div>
    </div>  

    <div>
      <div className="absolute top-[312px] left-[1399px] [font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
        Ingredients
      </div>
      <div className=" w-[24px] h-[24px]">
      <img className="absolute  top-[312px] left-[1659px]" alt="Vector" src={roundMinus} />
    </div>
    <div className="w-[281px] h-px">
      <img className=" absolute w-[281px] h-px top-[522px] left-[1397px]" alt="Line" src={Line} />
    </div>
    <div className="w-[274px] h-[72px]">
      <p className="absolute top-[358px] left-[1399px] [font-family:'Montserrat',Helvetica] font-light text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
        Lorem Ipsum is simply dummy
        <br />
        text of the printing and
        <br />
        typesetting industry.
      </p>
    </div>
    </div>  
    </div> */}
     <div className=' w-[400px] h-[400px] my-[-100px]'>
    <div className='relative w- left-[1399px] top-[-590px]'>
    <Accordion open={open === 1} animate={CUSTOM_ANIMATION} icon={<Icon id={1} open={open} />}>
      <AccordionHeader onClick={() => handleOpen(1)} className="[font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
        Description
      </AccordionHeader>
      <div className=" w-[24px] h-[24px]">
      <img className="absolute  top-[180px] left-[1659px]" alt="Vector" src={roundPlus} />
    </div>
    <div className="w-[281px] h-px">
      <img className=" absolute w-[281px] h-px top-[225px] left-[1397px]" alt="Line" src={Line} />
    </div>
    <AccordionBody className="w-[300px] h-[120px] mt-[-20px]">
      <p className=" [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
        Lorem Ipsum is simply dummy
        <br />
        text of the printing and
        <br />
        typesetting industry.
      </p>
    </AccordionBody>
    </Accordion>
    </div>  

    <div className='relative left-[1399px] top-[-608px]'>
    <Accordion open={open === 2} animate={CUSTOM_ANIMATION} icon={<Icon id={2} open={open} />}>
      <AccordionHeader onClick={() => handleOpen(2)} className=" [font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
        Nutrition
      </AccordionHeader>
      <div className=" w-[24px] h-[24px]">
      <img className="absolute  top-[246px] left-[1659px]" alt="Vector" src={roundPlus} />
    </div>
    <div className="w-[281px] h-px">
      <img className=" absolute w-[281px] h-px top-[290px] left-[1397px]" alt="Line" src={Line} />
    </div>
    <AccordionBody className="w-[300px] h-[120px] mt-[-20px]">
      <p className=" [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
        Lorem Ipsum is simply dummy
        <br />
        text of the printing and
        <br />
        typesetting industry.
      </p>
    </AccordionBody>
    </Accordion>
    </div>  

    <div className='relative left-[1399px] top-[-620px]'>
    <Accordion open={open === 3} animate={CUSTOM_ANIMATION} icon={<Icon id={3} open={open} />}>
      <AccordionHeader onClick={() => handleOpen(3)} className="absolute  [font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
        Ingredients
      </AccordionHeader>
      <div className=" w-[24px] h-[24px]">
      <img className="absolute  top-[312px] left-[1659px]" alt="Vector" src={roundMinus} />
    </div>
    {/* <div className="w-[281px] h-px">
      <img className=" absolute w-[281px] h-px top-[522px] left-[1397px]" alt="Line" src={Line} />
    </div> */}
    <AccordionBody className="w-[300px] h-[120px] mt-7">
      <p className=" [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
        Lorem Ipsum is simply dummy
        <br />
        text of the printing and
        <br />
        typesetting industry.
      </p>
    </AccordionBody>
    </Accordion></div>  
    </div>
    </div>

    {/* <div>
    <div className="absolute top-[110px] left-[152px] [font-family:'Praline'] font-normal text-[#4e4e4e] text-[100px] tracking-[0] leading-[normal]">
      Lorem Ipsum
      <br />
      is dummy
    </div>
    <div className="w-[152px] h-[53px]">
      <div className="absolute top-[340px] left-[152px] font-secondary font-black not-italic  text-[#4e4e4e] text-[40px] tracking-[0] leading-[normal]">
        ₹3000/-
      </div>
    </div>
    <div className="w-[95px] h-[33px]">
      <div className="absolute top-[355px] left-[330px] [font-family:'Montserrat'] font-extrabold text-[#a8a8a8] text-[25px] tracking-[0] leading-[normal] line-through">
        ₹4000/-
      </div>
    </div>
    <div className="w-[430px] h-[48px]">
      <p className="absolute top-[420px] left-[152px] font-[400] font-[number:var(--16-font-weight)] text-[#4d4d4d] text-16 tracking-[var(--16-letter-spacing)] leading-[var(--16-line-height)] [font-style:var(--16-font-style)]">
        Lorem Ipsum is simply dummy text of the printing and
        <br />
        typesetting industry.
      </p>
    </div>
    <div>
    <button className="flex w-[200px] h-[50px] top-[370px] left-[152px] hover:bg-dark-green items-center justify-center gap-[10px] p-[10px] relative bg-[#642265] rounded-[8px]">
      <div className="relative w-fit [font-family:'Montserrat-Medium',Helvetica] font-bold text-white text-[18px] tracking-[0] leading-[normal]">
        ORDER NOW
      </div>
    </button>
    </div>
    <button className="relative w-[24px] h-[24px] ">
      <img className="absolute w-[24px] h-[24px] top-[330px] left-[378px]" alt="favourite" src={favourite} />
    </button>

  <div className="relative top-[-200px] left-[884px]">
  </div>
  <div className="w-[502px] h-[637px] ">
  <img
        className="relative w-[85px] h-[98px] top-[-120px] left-[910px]"
        alt="Offer"
        src={Offer}
      />
      <img
        className="absolute  z-40 w-[646px] h-[781px] top-[87px] left-[802.31px] object-cover"
        alt="Mass gainer front"
        src={massGainerImg}
      />
    </div>
     <div className=' w-[400px] my-[-100px]'>
    <div className='relative left-[1399px] top-[-600px]'>
    <Accordion open={open === 1} animate={CUSTOM_ANIMATION} icon={<Icon id={1} open={open} />}>
      <AccordionHeader onClick={() => handleOpen(1)} className="[font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
        Description
      </AccordionHeader>
      <div className=" w-[24px] h-[24px]">
      <img className="absolute  top-[180px] left-[1659px]" alt="Vector" src={roundPlus} />
    </div>
    <div className="w-[281px] h-px">
      <img className=" absolute w-[281px] h-px top-[225px] left-[1397px]" alt="Line" src={Line} />
    </div>
    <AccordionBody className="w-[274px] h-[120px] mt-[-20px]">
      <p className=" [font-family:'Montserrat',Helvetica] font-light text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
        Lorem Ipsum is simply dummy
        <br />
        text of the printing and
        <br />
        typesetting industry.
      </p>
    </AccordionBody>
    </Accordion>
    </div>  

    <div className='relative left-[1399px] top-[-600px]'>
    <Accordion open={open === 2} animate={CUSTOM_ANIMATION} icon={<Icon id={2} open={open} />}>
      <AccordionHeader onClick={() => handleOpen(2)} className=" [font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
        Nutrition
      </AccordionHeader>
      <div className=" w-[24px] h-[24px]">
      <img className="absolute  top-[246px] left-[1659px]" alt="Vector" src={roundPlus} />
    </div>
    <div className="w-[281px] h-px">
      <img className=" absolute w-[281px] h-px top-[290px] left-[1397px]" alt="Line" src={Line} />
    </div>
    <AccordionBody className="w-[274px] h-[120px] mt-[-20px]">
      <p className=" [font-family:'Montserrat',Helvetica] font-light text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
        Lorem Ipsum is simply dummy
        <br />
        text of the printing and
        <br />
        typesetting industry.
      </p>
    </AccordionBody>
    </Accordion>
    </div>  

    <div className='relative left-[1399px] top-[-600px]'>
    <Accordion open={open === 3} animate={CUSTOM_ANIMATION} icon={<Icon id={3} open={open} />}>
      <AccordionHeader onClick={() => handleOpen(3)} className="absolute  [font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
        Ingredients
      </AccordionHeader>
      <div className=" w-[24px] h-[24px]">
      <img className="absolute  top-[312px] left-[1659px]" alt="Vector" src={roundMinus} />
    </div>

    <AccordionBody className="w-[274px] h-[120px] mt-7">
      <p className=" [font-family:'Montserrat',Helvetica] font-light text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
        Lorem Ipsum is simply dummy
        <br />
        text of the printing and
        <br />
        typesetting industry.
      </p>
    </AccordionBody>
    </Accordion></div>  
    </div>
    </div> */}
    
    <div className=" relative w-[1920px] mt-[100px] h-[650px]">
    <img
          className=" left-0 object-cover"
          alt="Banners copy"
          src={OfferBanner}
        />
    </div>
    {/* <div>
    <div className="absolute top-[110px] left-[152px] [font-family:'Praline'] font-normal text-[#4e4e4e] text-[100px] tracking-[0] leading-[normal]">
      Lorem Ipsum
      <br />
      is dummy
    </div>
    <div className="w-[152px] h-[53px]">
      <div className="absolute top-[340px] left-[152px] font-secondary font-black not-italic  text-[#4e4e4e] text-[40px] tracking-[0] leading-[normal]">
        ₹3000/-
      </div>
    </div>
    <div className="w-[95px] h-[33px]">
      <div className="absolute top-[355px] left-[330px] [font-family:'Montserrat'] font-extrabold text-[#a8a8a8] text-[25px] tracking-[0] leading-[normal] line-through">
        ₹4000/-
      </div>
    </div>
    <div className="w-[430px] h-[48px]">
      <p className="absolute top-[420px] left-[152px] font-[400] font-[number:var(--16-font-weight)] text-[#4d4d4d] text-16 tracking-[var(--16-letter-spacing)] leading-[var(--16-line-height)] [font-style:var(--16-font-style)]">
        Lorem Ipsum is simply dummy text of the printing and
        <br />
        typesetting industry.
      </p>
    </div>
    <div>
    <button className="flex w-[200px] h-[50px] top-[370px] left-[152px] hover:bg-dark-green items-center justify-center gap-[10px] p-[10px] relative bg-[#642265] rounded-[8px]">
      <div className="relative w-fit [font-family:'Montserrat-Medium',Helvetica] font-bold text-white text-[18px] tracking-[0] leading-[normal]">
        ORDER NOW
      </div>
    </button>
    </div>
    <button className="relative w-[24px] h-[24px] ">
      <img className="absolute w-[24px] h-[24px] top-[330px] left-[378px]" alt="favourite" src={favourite} />
    </button>

  <div className="relative top-[-200px] left-[884px]">
  </div>
  <div className="w-[502px] h-[637px] ">
  <img
        className="relative w-[85px] h-[98px] top-[-120px] left-[910px]"
        alt="Offer"
        src={Offer}
      />
      <img
        className="absolute  z-40 w-[646px] h-[781px] top-[87px] left-[802.31px] object-cover"
        alt="Mass gainer front"
        src={massGainerImg}
      />
    </div>
    <div >
    <div>
      <div className="absolute top-[180px] left-[1399px] [font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
        Description
      </div>
      <div className=" w-[24px] h-[24px]">
      <img className="absolute  top-[180px] left-[1659px]" alt="Vector" src={roundPlus} />
    </div>
    <div className="w-[281px] h-px">
      <img className=" absolute w-[281px] h-px top-[225px] left-[1397px]" alt="Line" src={Line} />
    </div>
    </div>  

    <div>
      <div className="absolute top-[246px] left-[1399px] [font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
        Nutrition
      </div>
      <div className=" w-[24px] h-[24px]">
      <img className="absolute  top-[246px] left-[1659px]" alt="Vector" src={roundPlus} />
    </div>
    <div className="w-[281px] h-px">
      <img className=" absolute w-[281px] h-px top-[290px] left-[1397px]" alt="Line" src={Line} />
    </div>
    </div>  

    <div>
      <div className="absolute top-[312px] left-[1399px] [font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
        Ingredients
      </div>
      <div className=" w-[24px] h-[24px]">
      <img className="absolute  top-[312px] left-[1659px]" alt="Vector" src={roundMinus} />
    </div>
    <div className="w-[281px] h-px">
      <img className=" absolute w-[281px] h-px top-[522px] left-[1397px]" alt="Line" src={Line} />
    </div>
    <div className="w-[274px] h-[72px]">
      <p className="absolute top-[358px] left-[1399px] [font-family:'Montserrat',Helvetica] font-light text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
        Lorem Ipsum is simply dummy
        <br />
        text of the printing and
        <br />
        typesetting industry.
      </p>
    </div>
    </div>  
    </div>
    </div> */}


</Carousel>
</div>
          {/* <img
            className="absolute w-[50px] h-[50px] top-[653px] left-[1456px]"
            alt="Ph arrow up"
            src={left}
          /> */}
    <div className="w-[32px] h-[32px]">
      {/* <img
        className="absolute w-[32px] h-[32px] top-[662px] left-[1397px]"
        alt="right"
        src={right}
      /> */}
       {/* <img
        className="absolute w-[94px] h-[8px] top-[721px] left-[1404px]"
        alt="group"
        src={group}
      /> */}
     
    </div>
        
 </>
  )
}

export default Home