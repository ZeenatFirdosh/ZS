import React, { useState } from 'react'
import Offer from './../../assets/images/OfferImg.png'
import { Rating } from 'react-simple-star-rating'
import Whey from './../../assets/images/Whey.png'
import Meal from './../../assets/images/Meal.png'
import Glutamine from './../../assets/images/Glutamine.png'
import prodOffer from './../../assets/images/prodOffer.png'
import Vector from './../../assets/images/Vector.png'
import Carousel from "react-multi-carousel";
import left from './../../assets/icons/leftArrow.svg'
import { fadeIn } from '../../motion/Variants'
import { motion } from 'framer-motion' 

const CustomButtonGroupAsArrows = () => {
return (
  <div>
    <img
     className="relative cursor-pointer w-[50px] h-[50px] top-[-400px] left-[-180px] rotate-180"
     alt="Ph arrow up"
     src={left}
   />
    <img
     className="relative cursor-pointer w-[50px] h-[50px] top-[-455px] left-[1600px] "
     alt="Ph arrow up"
     src={left}
   />
    </div>
)
}

const PopularProducts = () => {
  const [rating, setRating] = useState(0)

  const handleRating = (rate) => {
    setRating(rate)
  }
  const handleReset = () => {
    // Set the initial value
    setRating(0)
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return ( <>
  
  
  
  <div className='container mt-[275px]'>
    <motion.div variants={fadeIn('up',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}}>
    <div className="w-[607px] h-[66px]">
      <div className="absolute left-[656px] [font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[60px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
        Our Popular Products
      </div>
    </div>
    <div className="w-[785px] h-[48px]">
      <p className="relative items-center w-[785px] top-[13px] left-[567px] [font-family:'Montserrat'] font-medium  text-[#4e4e4e] text-[18px] text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry&#39;s standard dummy text ever since the 1500s.
      </p>
    </div>
    <div className="w-[83px] h-[26px]">
      <div className="relative top-[50px] left-[1687px] cursor-pointer hover:text-primary-leaf-green [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[18px] text-center tracking-[0] leading-[normal]">
        SEE ALL
      </div>
    </div>
    </motion.div>
   
   <div className='relative left-[180px] top-[200px] mb-[350px]'>
    <Carousel
  additionalTransfrom={0}
  autoPlaySpeed={3000}
  arrows={true}
  centerMode={false}
  className="w-[1600px]"
  containerClass="container-with-dots"
  // customButtonGroup={<CustomButtonGroupAsArrows/>}
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside
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
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
  <div className='flex gap-[45px]'>
    <motion.div variants={fadeIn('up',0.2)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="w-[510px] h-[749px] bg-[#EAE7E1]  hover:[background:linear-gradient(180deg,rgba(59,102,60,0)_0%,rgb(59,102,60)_100%)]">
      <div className="w-[540px] h-[749px] top-0 left-0 ">
      <img
        className=""
        alt="Offer"
        src={prodOffer}
      />
      <div className="w-[187px] h-[334px]">
      <img className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 w-[187px] h-[334px] top-[60px] left-[171px] object-cover" alt="Layer" src={Whey} />
    </div>
      <div className=" mt-[120px] left-[143px] [font-family:'Montserrat',Helvetica] font-black text-[#4e4e4e] text-[30px] text-center tracking-[0] leading-[normal]">
        WHEY PROTEIN
    </div>
    <div className='top-[589px] left-[151px]'>
      <Rating  className='top-[15px] left-[185px]' onClick={handleRating} initialValue={rating}  size={32}
                    transition
                    allowFraction
                    SVGstyle={{'display' : 'inline'}}
                    fillColor='#642265'
                    />
                    </div>
                    <span className="relative top-[20px] left-[66px] [font-family:'Montserrat',Helvetica] font-[800] text-[#a8a8a8] text-[24px] tracking-[0] leading-[normal] line-through">
        ₹4000/-
      </span>
      <span className="relative top-[25px] left-[85px] [font-family:'Montserrat',Helvetica] font-[800] text-[#4e4e4e] text-[40px] tracking-[0] leading-[normal]">
        ₹3000/-
      </span>
      <span className="relative top-[20px] left-[100px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#642265] text-[24px] tracking-[0] leading-[normal]">
        (20% OFF)
      </span>
      </div>
    </motion.div>
    <motion.div variants={fadeIn('up',0.4)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="w-[510px] h-[749px] bg-[#EAE7E1] hover:[background:linear-gradient(180deg,rgba(59,102,60,0)_0%,rgb(59,102,60)_100%)]">
      <div className=" w-[540px] h-[749px] top-0 left-0">
      <img
        className=""
        alt="Offer"
        src={prodOffer}
      />
      <div className="w-[187px] h-[334px]">
      <img className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 w-[187px] h-[334px] top-[60px] left-[171px] object-cover" alt="Layer" src={Meal} />
    </div>
    <div className=" mt-[120px] left-[143px] [font-family:'Montserrat',Helvetica] font-black text-[#4e4e4e] text-[30px] text-center tracking-[0] leading-[normal]">
        MEAL REPLACEMENT
    </div>
    <div className='top-[589px] left-[151px]'>
      <Rating  className='top-[15px] left-[185px]' onClick={handleRating} initialValue={rating}  size={32}
                    transition
                    allowFraction
                    SVGstyle={{'display' : 'inline'}}
                    fillColor='#642265'
                    />
                    </div>
                    <span className="relative top-[20px] left-[66px] [font-family:'Montserrat',Helvetica] font-[800] text-[#a8a8a8] text-[24px] tracking-[0] leading-[normal] line-through">
        ₹1000/-
      </span>
      <span className="relative top-[25px] left-[85px] [font-family:'Montserrat',Helvetica] font-[800] text-[#4e4e4e] text-[40px] tracking-[0] leading-[normal]">
        ₹700/-
      </span>
      <span className="relative top-[20px] left-[100px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#642265] text-[24px] tracking-[0] leading-[normal]">
        (20% OFF)
      </span>
      </div>
    </motion.div>
    <motion.div variants={fadeIn('up',0.6)} initial='hidden' whileInView={'show'} viewport={{once:false, amount: 0.1}} className="w-[510px] h-[749px] bg-[#EAE7E1] hover:[background:linear-gradient(180deg,rgba(59,102,60,0)_0%,rgb(59,102,60)_100%)]">
      <div className=" w-[510px] h-[749px] top-0 left-0">
      <img
        className=""
        alt="Offer"
        src={prodOffer}
      />
      <div className="w-[187px] h-[334px]">
      <img className="relative  transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 w-[227px] h-[258px] top-[90px] left-[161px] object-cover" alt="Layer" src={Glutamine} />
    </div>
    <div className=" mt-[120px] left-[143px] [font-family:'Montserrat',Helvetica] font-black text-[#4e4e4e] text-[30px] text-center tracking-[0] leading-[normal]">
        L-GLUTAMINE
    </div>
    <div className='top-[510px] left-[110px]'>
      <Rating  className='top-[15px] left-[175px]' onClick={handleRating} initialValue={rating}  size={32}
                    transition
                    allowFraction
                    SVGstyle={{'display' : 'inline'}}
                    fillColor='#642265'
                    />
                    </div>
                    <span className="relative top-[20px] left-[55px] [font-family:'Montserrat',Helvetica] font-[800] text-[#a8a8a8] text-[24px] tracking-[0] leading-[normal] line-through">
        ₹4000/-
      </span>
      <span className="relative top-[25px] left-[75px] [font-family:'Montserrat',Helvetica] font-[800] text-[#4e4e4e] text-[40px] tracking-[0] leading-[normal]">
        ₹3000/-
      </span>
      <span className="relative top-[20px] left-[85px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#642265] text-[24px] tracking-[0] leading-[normal]">
        (20% OFF)
      </span>
      </div>
    </motion.div>
    <div className="w-[540px] h-[749px] hover:[background:linear-gradient(180deg,rgba(59,102,60,0)_0%,rgb(59,102,60)_100%)]">
      <div className=" w-[540px] h-[749px] top-0 left-0 [background:linear-gradient(180deg,rgba(244,241,234,0)_0%,rgb(244,241,234)_100%)]">
      <img
        className=""
        alt="Offer"
        src={prodOffer}
      />
      <div className="w-[187px] h-[334px]">
      <img className="relative w-[187px] h-[334px] top-[60px] left-[171px] object-cover" alt="Layer" src={Whey} />
    </div>
      <div className=" mt-[120px] left-[143px] [font-family:'Montserrat',Helvetica] font-black text-[#4e4e4e] text-[30px] text-center tracking-[0] leading-[normal]">
        WHEY PROTEIN
    </div>
    <div className='top-[589px] left-[151px]'>
      <Rating  className='top-[15px] left-[185px]' onClick={handleRating} initialValue={rating}  size={32}
                    transition
                    allowFraction
                    SVGstyle={{'display' : 'inline'}}
                    fillColor='#642265'
                    />
                    </div>
                    <span className="relative top-[20px] left-[66px] [font-family:'Montserrat',Helvetica] font-[800] text-[#a8a8a8] text-[24px] tracking-[0] leading-[normal] line-through">
        ₹4000/-
      </span>
      <span className="relative top-[25px] left-[85px] [font-family:'Montserrat',Helvetica] font-[800] text-[#4e4e4e] text-[40px] tracking-[0] leading-[normal]">
        ₹3000/-
      </span>
      <span className="relative top-[20px] left-[100px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#642265] text-[24px] tracking-[0] leading-[normal]">
        (20% OFF)
      </span>
      </div>
    </div>
    <div className="hover:[background:linear-gradient(180deg,rgba(59,102,60,0)_0%,rgb(59,102,60)_100%)]">
      <div className=" w-[540px] h-[749px] top-0 left-0 [background:linear-gradient(180deg,rgba(244,241,234,0)_0%,rgb(244,241,234)_100%)]">
      <img
        className=""
        alt="Offer"
        src={prodOffer}
      />
      <div className="w-[187px] h-[334px]">
      <img className="relative w-[187px] h-[334px] top-[60px] left-[171px] object-cover" alt="Layer" src={Meal} />
    </div>
    <div className=" mt-[120px] left-[143px] [font-family:'Montserrat',Helvetica] font-black text-[#4e4e4e] text-[30px] text-center tracking-[0] leading-[normal]">
        MEAL REPLACEMENT
    </div>
    <div className='top-[589px] left-[151px]'>
      <Rating  className='top-[15px] left-[185px]' onClick={handleRating} initialValue={rating}  size={32}
                    transition
                    allowFraction
                    SVGstyle={{'display' : 'inline'}}
                    fillColor='#642265'
                    />
                    </div>
                    <span className="relative top-[20px] left-[66px] [font-family:'Montserrat',Helvetica] font-[800] text-[#a8a8a8] text-[24px] tracking-[0] leading-[normal] line-through">
        ₹1000/-
      </span>
      <span className="relative top-[25px] left-[85px] [font-family:'Montserrat',Helvetica] font-[800] text-[#4e4e4e] text-[40px] tracking-[0] leading-[normal]">
        ₹700/-
      </span>
      <span className="relative top-[20px] left-[100px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#642265] text-[24px] tracking-[0] leading-[normal]">
        (20% OFF)
      </span>
      </div>
    </div>
    <div className="hover:[background:linear-gradient(180deg,rgba(59,102,60,0)_0%,rgb(59,102,60)_100%)]">
      <div className=" w-[540px] h-[749px] top-0 left-0 [background:linear-gradient(180deg,rgba(244,241,234,0)_0%,rgb(244,241,234)_100%)]">
      <img
        className=""
        alt="Offer"
        src={prodOffer}
      />
      <div className="w-[187px] h-[334px]">
      <img className="relative w-[187px] h-[334px] top-[60px] left-[171px] object-cover" alt="Layer" src={Glutamine} />
    </div>
    <div className=" mt-[120px] left-[143px] [font-family:'Montserrat',Helvetica] font-black text-[#4e4e4e] text-[30px] text-center tracking-[0] leading-[normal]">
        L-GLUTAMINE
    </div>
    <div className='top-[589px] left-[151px]'>
      <Rating  className='top-[15px] left-[185px]' onClick={handleRating} initialValue={rating}  size={32}
                    transition
                    allowFraction
                    SVGstyle={{'display' : 'inline'}}
                    fillColor='#642265'
                    />
                    </div>
                    <span className="relative top-[20px] left-[66px] [font-family:'Montserrat',Helvetica] font-[800] text-[#a8a8a8] text-[24px] tracking-[0] leading-[normal] line-through">
        ₹4000/-
      </span>
      <span className="relative top-[25px] left-[85px] [font-family:'Montserrat',Helvetica] font-[800] text-[#4e4e4e] text-[40px] tracking-[0] leading-[normal]">
        ₹3000/-
      </span>
      <span className="relative top-[20px] left-[100px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#642265] text-[24px] tracking-[0] leading-[normal]">
        (20% OFF)
      </span>
      </div>
    </div>
    </div>
    </Carousel>
    </div>
    {/* <div className=" w-[540px] h-[749px] mt-[104px] ml-[250px] [background:linear-gradient(180deg,rgba(59,102,60,0)_0%,rgb(59,102,60)_100%)] ">
      <img className="relative w-[444px] h-[401px] top-[90px] left-0" alt="Vector" src={Vector} />
      </div>
      <div className=" w-[540px] h-[749px] mt-[104px] ml-[250px] [background:linear-gradient(180deg,rgba(59,102,60,0)_0%,rgb(59,102,60)_100%)]">
      <img className="relative w-[444px] h-[401px] top-[90px] left-0" alt="Vector" src={Vector} />
      </div>
      <div className=" w-[540px] h-[749px] mt-[104px] ml-[250px] [background:linear-gradient(180deg,rgba(59,102,60,0)_0%,rgb(59,102,60)_100%)]">
      <img className="relative w-[444px] h-[401px] top-[90px] left-0" alt="Vector" src={Vector} />
      </div> */}
    </div>
 </>
 )
}

export default PopularProducts