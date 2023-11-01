import React from "react";
import left from './../../assets/icons/leftArrow.svg'
import right from './../../assets/icons/rightArrow.svg'
import Line11 from './../../assets/images/Line 11.png'
import instagram from './../../assets/icons/instagram.svg'
import rectangle39 from './../../assets/images/Rectangle 39.png'
import rectangle40 from './../../assets/images/Rectangle 40.png'
import Carousel from "react-multi-carousel";
import { fadeIn } from "../../motion/Variants";
import { motion } from "framer-motion";


const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide,slide } } = rest;
  return (<>
    <div className="my-[300px]">
    <img
        className={`absolute cursor-pointer left-[797px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110   ${currentSlide===0 ? 'w-[32px] h-[32px] my-[9px]' : 'w-[50px] h-[50px]  rotate-180'}`}
        alt="Ph arrow up"
        src={currentSlide===0 ? right : left}
        onClick={() => 
          previous()}
      />
      <img
        className={`absolute cursor-pointer left-[873px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  ${currentSlide<6 ? 'w-[50px] h-[50px]' : 'w-[32px] h-[32px] my-[9px] rotate-180'}`}
        alt="Ph arrow up"
        src={currentSlide<6 ? left :right}
        onClick={() => next()}
      />
      </div>
      {/* <div className="carousel-button-group mb-4  gap-4 flex justify-end 
      items-center w-full">
        <button className='block p-3 bg-slate-300' onClick={() => 
        previous()}> <FiChevronLeft /></button>
        <button onClick={() => next()}><span className='block p-3 bg-slate-300' ><BiChevronRight /></span></button>
     </div> */}
     </>
   );
 };

const ProductInfluencers = () => {
  return (
        <div className="relative flex w-[1920px] h-[816px] bg-[#f2efe6]">
          <div className="my-[160px]">
        <motion.h2 variants={fadeIn('right',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="relative left-[146px] [font-family:'Praline',Helvetica] font-normal text-[#b6b3a9] text-[100px] tracking-[0] leading-[normal]">
          {" "}
          HerbalCart <br /> Influencers{" "}
        </motion.h2>
        <motion.p variants={fadeIn('right',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="relative w-[564px]  left-[147px] mt-[20px] [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[18px] tracking-[0] leading-[24px]">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's.{" "}
        </motion.p>
        <motion.p variants={fadeIn('right',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="relative w-[564px]  left-[147px] mt-[14px] [font-family:'Montserrat',Helvetica] font-medium   text-[#4e4e4e] text-[18px] tracking-[0] leading-[24px]">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </motion.p>{" "}
       
        </div>
       
         <span className="relative  w-[96px] h-[22px] left-[665px] top-[240px]  [font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap"> Instagram </span>
          <img className="relative w-[349px]  h-px top-[255px] left-[680px] object-cover" alt="Line" src={Line11} /> 
           <img className="relative w-[48px] h-[48px] top-[225px] left-[690px] " alt="Vector" src={instagram} />
    
           <div className="mx-[-100px] my-[320px]">
          <div className=" flex gap-6 w-[950px] h-[369px]">
          <Carousel
  additionalTransfrom={0}
  arrows={false}
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container"
  customButtonGroup={ <ButtonGroup/>}
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite={false}
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={true}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={true}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
> 
          <motion.img variants={fadeIn('left',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="relative w-[304px] h-[369px] " alt="Rectangle" src={rectangle39} /> 
          <motion.img variants={fadeIn('left',0.4)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="relative w-[304px] h-[369px] " alt="Rectangle" src={rectangle39} /> 
          <motion.img variants={fadeIn('left',0.6)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="relative w-[304px] h-[369px] " alt="Rectangle" src={rectangle40} /> 
          <img className="relative w-[304px] h-[369px] " alt="Rectangle" src={rectangle39} /> 
          <img className="relative w-[304px] h-[369px] " alt="Rectangle" src={rectangle39} /> 
          <img className="relative w-[304px] h-[369px] " alt="Rectangle" src={rectangle40} /> 
          <img className="relative w-[304px] h-[369px] " alt="Rectangle" src={rectangle39} /> 
          <img className="relative w-[304px] h-[369px] " alt="Rectangle" src={rectangle39} /> 
          <img className="relative w-[304px] h-[369px] " alt="Rectangle" src={rectangle40} /> 
          </Carousel>
          </div>
          </div>
          </div>
     
  );
};

export default ProductInfluencers;
