import React from 'react'
import herbal from "./../assets/images/herbal.png"
import Line from "./../assets/images/Line.png"
import Frame1 from "./../assets/images/Frame1.png"
import Frame2 from "./../assets/images/Frame2.png"
import Navbar3 from '../layout/Navbar/Navbar3'
import Footer2 from '../layout/Footer/Footer2'

const AboutUs = () => {
  return (
    <>
    <Navbar3/>
    <div className='pt-[200px]'> 
    <div className=" mt-w-full text-center justify-center flex mb-36">
    <div className="text-center justify-center mt-20 w-3/5">
      <h1 className="text-[#BABABA] text-centre text-[165px]  leading-none font-primary">
        Who We Are
      </h1>
      <p className="text-center  text-[30px] text-[#4E4E4E] my-2 font-primary">
        “An unhealthy body & mind overshadow every goal of life”.
      </p>
        <div className="text-center text-[#4E4E4E] text-sm font-medium font-secondary text-[18px]">
        <p className="[font-family:'Montserrat',Helvetica] text-[18px] leading-normal">
          Everyone has different perspective about health, but everyone
          desires a healthy life. Respecting everyone’s outlook, we <br/> become
          their wellness partner in their journey towards an active & fit
          routine- today, tomorrow and in every stage of life. 
        </p>
        <p className="mt-8 [font-family:'Montserrat',Helvetica] text-[18px] leading-normal ">
        Mismanaged
          lifestyle is like a parasite that sucks joy, laughter, peace and
          nutrition.   HerbalCart understands the strains of <br/> today’s hectic lifestyle,
          owing to which, we have created dietary supplements to raise
          everyone’s wellness and fitness bar. <br/> Addressing the health concerns
          people face these days, we have our chain of premium products to
          advance their pursuit of a <br/> lively life.
        </p>
      </div>
    </div>
  </div>
  <div className="pt-[76px] relative h-[1479px] w-full">
      {/*Background div*/}
      <div className="w-full h-full absolute rounded-t-[960px] bg-[#EBEBEB] -z-10"/>
      <div>
        {/*upper div*/}
        <div className="w-full justify-center flex ">
          <img src={herbal} alt="" className="w-2/3 lg:w-1/2 -translate-y-[140px] --tw-translate-y:-8rem" />
        </div>

        {/*lower div*/}

        <div className=" flex flex-col ml-[100px] my-8 md:my-16 md:flex-row">
          {/*left div*/}
          <div className="w-full mx-5   ">
            <h2 className="text-[#642265] font-[400px]  sm:text-[100px]   font-primary">
              We Promise
            </h2>
            <p className="text-[#4E4E4E] leading-tight  text-[18.5px]  font-medium font-secondary">
              Lorem Ipsum is simply dummy text of the printing and <br/> typesetting
              industry. Lorem Ipsum has been the industry's <br/> standard dummy text
              ever since the 1500s, when an <br/> unknown printer took a galley of
              type and scrambled it to <br/> make a type specimen book.{" "}
            </p>

            <div className=" flex mt-20">
              <img
                src={Frame1}
                alt=""
                className=" px-16"
              />
              <img
                src={Frame2}
                alt=""
                className="absolute mt-[-6px]  ml-[351px]"
              />
            </div>
          </div>
          {/*right div*/}
          <div className="pt-36 mr-36">
            <div className="mt-2 w-[800px]">
              <h2 className="text-[#642265]  mb-2 text-[30px] font-primary">
                Quality Products
              </h2>
              <p className="text-[#4E4E4E] leading-tight mb-6 md:mb-6  text-[18px]  font-medium font-secondary">
                Working with the established suppliers and keeping an eye on the{" "}
                <br /> manufacturing process, we deliver 100% quality products.
              </p>
              <img src={Line} alt=""className="h-[1px] w-[800px] mt-10 mb-4"/>
            </div>

            <div className="pt-4 mt-2">
              <h2 className="text-[#642265]  mb-2 text-[30px] font-primary">
                Well-Researched Approach
              </h2>
              <p className="text-[#4E4E4E] leading-tight mb-6 md:mb-6  text-[18px]  font-medium font-secondary">
                Carefully thought and science-backed nutritional solutions
                ensure our products <br /> meet the expected needs.
              </p>
              <img src={Line} alt="" className="h-[1px] w-[800px] mt-10 mb-4"/>
            </div>
            <div className="pt-4 mt-2">
              <h2 className="text-[#642265]  mb-2 text-[30px] font-primary">
                Tested & Approved Products
              </h2>
              <p className="text-[#4E4E4E] leading-tight mb-6 md:mb-6  text-[18px]  font-medium font-secondary">
                Clean, safe and clinically tested ingredients make our
                supplements a trustworthy <br /> source to enjoy an
                uncompromised health.
              </p>
              <img src={Line} alt="" className="h-[1px] w-[800px] mt-10 mb-4"/>
            </div>
            <div className="pt-4 mt-2">
              <h2 className="text-[#642265]  mb-2 text-[30px] font-primary">
                No Adulteration
              </h2>
              <p className="text-[#4E4E4E] leading-tight mb-6 md:mb-6  text-[18px]  font-medium font-secondary">
                Keeping a healthy distance from impure and harmful ingredients,
                our products <br /> have no place for any kind of adulterants.
              </p>
            </div>
          </div>
        </div>
        
      <div className="pt-32" >
        <h2 className="text-[#4E4E4E] text-center  text-[100px]  font-medium font-primary leading-none">“The greatest wealth <br/> is health”</h2>
      </div>
    </div>
     
    </div></div>
    <Footer2/>
    </>
  )
}

export default AboutUs