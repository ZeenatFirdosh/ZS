import React, { useState } from "react";
import ellipse from "../assets/images/Ellipse 25.png";
import image1 from "../assets/images/image 10.png";
import image2 from "../assets/images/Layer 22.png";
import image3 from "../assets/images/image3.png";
import powder from "../assets/images/powder.png";
import logo from "../assets/images/herbalLogo.png";
import favourite from "../assets/icons/favourite.svg";
import protien from "../assets/images/1kg copy 2.png";
import line from "../assets/images/Line 25.png";
import line2 from "../assets/images/Line 26.png";
import dot from "../assets/icons/Ellipse 31.svg";
import icon1 from "../assets/icons/Gluten.svg";
import lab from "../assets/icons/Lab.svg";
import digest from "../assets/icons/digest.svg";
import veg from "../assets/icons/veg.svg";
import artificial from "../assets/icons/artificial.svg";
import Whey from '../assets/images/Whey.png'
import Meal from '../assets/images/Meal.png'
import Glutamine from '../assets/images/Glutamine.png'
import { Rating } from "react-simple-star-rating";
import Navbar3 from "../layout/Navbar/Navbar3";
import Footer from "../layout/Footer/Footer";

const ProductDetail = () => {
  const [rating, setRating] = useState(0);
  const [quantity,setQuantity] = useState(1);
  const [size,setSize] = useState(1);
  const [flavours,setFlavours] = useState('Banana');


  const handleRating = (rate) => {
    setRating(rate);
  };
  return (<>
  <Navbar3/>
    <div className="items-center pb-2 ml-16 ">
      <main className="grid grid-rows-1 sm:grid-cols-2 gap-2 sm:gap-10 ">
        <section className="relative space-x-20 p-7  flex  justify-center items-center rounded-lg">
          <div className="mt-[500px] ml-10 space-y-10">
            <div className="w-[134px] h-[134px] flex justify-center items-center bg-white rounded-[8px] shadow-[0px_16px_17px_#bdb4ab66]">
              <img className="" src={image2} />
            </div>
            <div className="w-[134px] h-[134px] bg-white flex justify-center items-center rounded-[8px] shadow-[0px_16px_17px_#bdb4ab66]">
              <img src={image1} />
            </div>
          </div>
          <div className="w-[654px] h-[614px]">
            <img
              src={ellipse}
              alt=""
              className="absolute w-[542px] h-[542px] mt-[180px]"
            />
            <div className=" w-[98px] h-[98px] flex justify-center items-center bg-secondary-leaf-green rounded-[200px] mt-[150px]">
              <span className="text-white text-[28px] ml-1 font-bold font-primary">
                30%
                <br />
                OFF
              </span>
            </div>
            <img
              src={image3}
              alt=""
              className="absolute w-[654px] h-[614px] ml-[-60px]"
            />
          </div>
        </section>
        <section className="relative w-[721px] h-[703px] top-[270px]  bg-white/[0.7] flex flex-col gap-3 sm:gap-5 rounded-[8px] shadow-[0px_33px_39px_#bdb4ab40] ">
          <div className=" pt-[40px] pl-[45px] flex flex-col gap-2">
            <h1 className=" mt-2 [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[40px] tracking-[0] leading-[normal]">
              Whey Protein Concentrate,
              <br />
              mango Flavour
            </h1>
            {/* <p className=" text-gray-600 text-sm sm:text-base">
              {'product?.description'}
            </p> */}
            <div className="flex items-center gap-1">
              {/* <StarRating /> */}
              <Rating
                onClick={handleRating}
                initialValue={rating}
                size={27}
                transition
                allowFraction
                SVGstyle={{ display: "inline" }}
                fillColor="#642265"
              />

              <span className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-[#642265] text-[18px] tracking-[0] leading-[normal]">
                120 Reviews
              </span>
            </div>
            <p className="top-0 left-0 mt-3 [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#4e4e4e] text-[24px] tracking-[0] leading-[normal]">
              Product SKU: TDG124970
            </p>

            <span className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
              Flavour
            </span>
            <div className="grid grid-rows-1 sm:grid-cols-3 ">
              <button className={`w-[170px] h-[50px] top-0 left-0 ${flavours==='Banana' ? 'text-white bg-[#3b663c]' :'text-[#4e4e4e] border border-solid border-[#4e4e4e]' } rounded-[8px]`} onClick={() => setFlavours('Banana')}>
                BANANA
              </button>
              <button className={` w-[170px] h-[50px] top-0 left-0 ${flavours==='Mango' ? 'text-white bg-[#3b663c]' :'text-[#4e4e4e]' } rounded-[8px] border border-solid border-[#4e4e4e]`} onClick={() => setFlavours('Mango')} >
                MANGO
              </button>
              <button className={`w-[170px] h-[50px] text-[#4e4e4e] top-0 left-0 border border-solid border-[#4e4e4e] ${'bg-[#d9d9d9]'}  rounded-[8px]`} disabled={flavours === '' && true} onClick={() => setFlavours('Choco')}>
                CHOCO MOCHA
              </button>
            </div>

            <span className="mt-8 top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
              Size
            </span>
            <div className="grid grid-rows-1 sm:grid-cols-5 ">
              <button className={` w-[100px] h-[50px]  top-0 left-0 ${size===1 ? 'text-white bg-[#3b663c]' :'text-[#4e4e4e] border border-solid border-[#4e4e4e]' } rounded-[8px]`} onClick={() => setSize(1)}>
                1 KG
              </button>
              <button className={`w-[100px] h-[50px] top-0 left-0 rounded-[8px] border border-solid border-[#4e4e4e] ${size===2 ? 'text-white bg-[#3b663c]' :'text-[#4e4e4e]' }`} onClick={() => setSize(2)}>
                2 KG
              </button>
            </div>
            <span className="mt-8 top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
              Sale :
            </span>

            <div className="flex ">
              <div className="w-[205px] h-[61px] top-0 left-0 [font-family:'Montserrat',Helvetica] font-extrabold text-[#4e4e4e] text-[50px] tracking-[0] leading-[normal]">
                ₹3000/-
              </div>
              <div>
                <span className="ml-8 top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                  MRP :
                </span>
                <br />
                <span className=" ml-7 top-0 left-0 [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#b9b9b9] text-[24px] tracking-[0] leading-[normal] line-through">
                  ₹4000/-
                </span>
              </div>
            </div>

            <div className=" mt-4 grid grid-rows-1 sm:grid-cols-4 ">
              <div className=" flex w-[125px] h-[52px]  pt-2 justify-center items-center top-0 left-0 rounded-[9px] border border-solid border-[#4e4e4e]">
                <div className="p-4">
              <button className="w-[18px] h-[18px] font-medium text-[20px]" onClick={()=>setQuantity(quantity === 1 ?  1 : quantity - 1)}> - </button>
              </div>
              <div className="p-4">
               <span className=" font-medium "> {quantity} </span>
               </div>
               <div className="p-4">
               <button className="font-medium text-[20px]" onClick={()=>setQuantity(quantity + 1)}> + </button></div>
              </div>
              <button className=" w-[414px] h-[50px]  p-[10px]  bg-[#642265] rounded-[8px]">
      <span className=" w-fit [font-family:'Montserrat-Medium',Helvetica] font-medium text-white text-[18px] tracking-[0] leading-[normal]">
        ADD TO CART
      </span>
    </button>
    <button className=""><img className='w-[24px] h-[24px] ml-[280px]' src={favourite}/></button>
            </div>
          </div>
        </section>

       
      </main>

      <div className="pt-[300px]  space-x-20 p-7 w-full  justify-center items-center rounded-lg">
<div className=" space-y-2 flex flex-col-2 gap-2">
  <div className="pl-7">
<h2 className="top-0 left-0 [font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[60px] tracking-[0] leading-[normal] whitespace-nowrap">
        About Whey Protein
      </h2>
      <p className="w-[1117px] pt-5 top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[18px] tracking-[0] leading-[24px]">
        Containing all the nine essential amino acids, eight proteins found in milk and low lactose quantity, Whey
        Protein is a complete protein in itself. Upon making it a regular part of diet, an individual, irrespective of
        their age or gender, can enhance their energy levels, have healthy muscles and a physically fit body.
        <br />
        Fitness enthusiasts who are strict about their physical stats and calorie count should take whey protein to stay
        full for longer, burn body fat and preserve muscles. This form of protein is a blessing for those people as well
        who are unable to consume enough protein from whole food sources. Overall, whatever be one&#39;s weight goals,
        whey protein is an aid in every way.
      </p>
      </div>
      <section className="relative pl-[40px] top-[200px]">
      <img
        className=" w-[394px] h-[335px] top-0 left-0 mix-blend-multiply object-cover"
        alt="Istock"
        src={powder}
      />
      </section>
</div>


</div>


     
    </div>
    <div className=" flex flex-col-3 gap-2 mt-[140px]">
      <div>
  <img src={protien}/>
  </div>
  <div className="mt-[160px] ml-[-150px]">
  <img src={line}/>
  </div>
  <div>
  <img className="mt-[155px]" src={dot}/>
  </div>
  <div>
  <div className=" mt-[145px] ml-[30px] top-0 left-0 [font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[30px] tracking-[0] leading-[normal] whitespace-nowrap">
        Product Details
      </div>
    <div className="mt-5 ml-14">
      <p className="w-[832px] h-[292px] top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[18px] tracking-[0] leading-[18px]">
      <img className="relative ml-[-30px] top-[20px]" src={dot}/>
        <span className="leading-[30.0px]">
          HerbalCart&#39;s Whey Protein is infused with EAAs (essential amino acids) to prevent muscle{" "}
          breakdown and boost fat loss effectively, since EAAs have low calories.
          <br />
        </span>
        <img className="relative ml-[-30px] top-[20px]" src={dot}/>
        <span className="leading-[30.0px]">
          BCAA present in the product helps in protein synthesis and building maximum muscle mass.
          <br />
          </span>
          <img className="relative ml-[-30px] top-[20px]" src={dot}/>
          <span className="leading-[30.0px]">
          HerbalCart&#39;s Whey Protein is certified for accuracy &amp; purity and contains excellent quality of{" "}
          protein.
          <br />
        </span>
        <img className="relative ml-[-30px] top-[20px]" src={dot}/>
        <span className="leading-[30.0px]">
          Glutamic acid and glutamine have been added to enhance the performance during workout,{" "}
          increase strength, prevent muscle breakdown and speed up the recovery.
          <br />
        </span>
        <img className="relative ml-[-30px] top-[20px]" src={dot}/>
        <span className="leading-[30.0px]">
          High quality protein carefully made to provide the required quantity of protein every day.
          <br />
        </span>
      </p>
      </div>
  </div>
  
</div>


<div className=" mt-[180px] flex justify-center">
<section className=" w-[1073px] h-[481px] top-0 left-0 bg-white rounded-[8px] shadow-[0px_33px_39px_#bdb4ab40]">
<div className="pt-[40px] items-center flex flex-col gap-2">
      <h2 className="w-[756px] h-[66px] top-0 left-0 [font-family:'Praline',Helvetica] font-normal text-[#b9b9b9] text-[60px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
        Why Whey Protein Matters
      </h2>
    </div>
    <div className="mt-3 ml-24">
      <p className="w-[927px] h-[44px] top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[18px] tracking-[0] leading-[18px]">
      <img className="relative ml-[-30px] top-[20px]" src={dot}/>
        <span className="leading-[30.0px]">
        As per researchers, whey protein decreases the symptoms associated with stress and depression. By improving the
        brain&#39;s serotonin levels and lifting the mood, it supports on a serious note.
    
          <br />
        </span>
        <img className="relative ml-[-30px] top-[20px]" src={dot}/>
        <span className="leading-[30.0px]">
        Immunity is vital for all and stands like a one-man army, fighting against any attack or disorder. Via an increase in glutathione concentrations, whey protein strengthens the immune system and prepares it to ward off the infections.
          <br />
          </span>
          <img className="relative ml-[-30px] top-[20px]" src={dot}/>
          <span className="leading-[30.0px]">
          Being a prebiotic, the protein supports the good bacteria in the gut, which in turn, support a healthy digestive system.
          <br />
        </span>
        <img className="relative ml-[-30px] top-[20px]" src={dot}/>
        <span className="leading-[30.0px]">
        Whey protein, other than supporting the exercise or work out goals, repairs damaged cells and tissues, owing to which athletes and gym freaks consume it to recover from muscle soreness after workout.
          <br />
        </span>
      </p>
      </div>
  </section>

  </div>

  <div>
  <div className="mt-[200px] flex justify-center items-center">
      <h2 className=" w-[673px] h-[66px] top-0 left-0 [font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[60px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
        Why Our Whey Protein?
      </h2>
    </div>
    <div className="mt-[70px] ml-7 flex justify-center">
        <div className="grid grid-cols-5 gap-10">
          <div className="w-[250px] h-[250px] p-14">
          <img className='pb-10 pl-5' src={icon1}/>
         <span className="ml-3 text-[18px] [font-family:'Montserrat',Helvetica]">Gluten free </span> 
          </div>
          <div className="w-[250px] h-[250px] p-14 ">
          <img className='pb-10 pl-5' src={lab}/>
         <span className="ml-3 text-[18px] [font-family:'Montserrat',Helvetica]">Lab tested </span> 
          </div>
          <div className="w-[250px] h-[250px] p-14 ">
          <img className='pb-10 pl-5' src={digest}/>
         <span className="ml-1 text-[18px] [font-family:'Montserrat',Helvetica]">Easy to digest </span> 
          </div>
          <div className="w-[250px] h-[250px] p-14 text-center">
          <img className='pb-10 pl-5' src={veg}/>
         <span className="text-[18px] [font-family:'Montserrat',Helvetica] text-center">Contains no fish,
poultry, meat or egg </span> 
          </div>
          <div className="w-[250px] h-[250px] p-14  text-center ">
          <img className='pb-10 pl-5' src={artificial}/>
         <span className="text-[18px] [font-family:'Montserrat',Helvetica] text-center">No artificial sweeteners
or added sugars </span> 
          </div>
        </div>
      </div>

      <div>
      <div className=" mt-[160px] ml-[150px] w-[506px] h-[110px]">
      <h2 className="top-0 left-0 [font-family:'Praline',Helvetica] font-normal text-[#b9b9b9] text-[100px] tracking-[0] leading-[normal] whitespace-nowrap">
        Disclaimer
      </h2>
    </div>

    <div className="mt-5 ml-[190px]  flex space-x-[300px]">
      <p className="w-[832px] h-[292px] top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[18px] tracking-[0] leading-[18px]">
      <img className="relative ml-[-30px] top-[20px]" src={dot}/>
        <span className="leading-[30.0px]">
        This product is made of 100% natural ingredients and may change colour, scent and consistency over time. However, this won't affect its effectiveness.
          <br />
        </span>
        <img className="relative ml-[-30px] top-[20px]" src={dot}/>
        <span className="leading-[30.0px]">
        The images shown are for illustrative purposes only. The actual product may vary.
          <br />
          </span>
          <img className="relative ml-[-30px] top-[20px]" src={dot}/>
          <span className="leading-[30.0px]">
          Keep the product in a cool, dry place away from direct sunlight or extreme temperatures.
          <br />
        </span>
      </p>
      <section className="mt-[-160px]">
<img src={logo}/>
      </section>
      </div>
      </div>


  </div>

  <div className="ml-[150px] mt-10">
      <h2 className="w-[773px] h-[66px] top-0 left-0 [font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[60px] tracking-[0] leading-[normal] whitespace-nowrap">
        Manufacturing Information
      </h2>

      <div className="mt-16 w-[1620px] h-[209px]">
      <section className=" flex gap-[100px] w-[1620px] h-[209px] top-0 left-0 bg-white rounded-[8px] shadow-[0px_33px_39px_#bdb4ab40]">
      <div className="p-16 ml-10 w-[311px] h-[120px]">
      <p className=" w-[311px] top-0 left-0 [font-family:'Montserrat',Helvetica] font-normal text-[#4e4e4e] text-[18px] tracking-[0] leading-[24px]">
        <span className="font-bold">
          MARKETED BY:
          <br />
        </span>
        <span className="[font-family:'Montserrat-Regular',Helvetica]">
          <br />
          HerbalCart India Pvt. Ltd.
          <br />
          B-10 Sector-59 Ground Floor,
          <br />
          Noida, G.B. Nagar, U.P. 201301
        </span>
      </p>
    </div>
    <div className="p-16 ml-32 w-[332px] h-[120px]">
      <p className="w-[332px] top-0 left-0 [font-family:'Montserrat',Helvetica] font-normal text-[#4e4e4e] text-[18px] tracking-[0] leading-[24px]">
        <span className="font-bold">
          MANUFACTURED BY:
          <br />
        </span>
        <span className="[font-family:'Montserrat-Regular',Helvetica]">
          <br />
          Fermentis Life Sciences Pvt. Ltd.
          <br />
          Plot No.41, Sector-8, IMT Manesar Gurugram-122051, Haryana
        </span>
      </p>
    </div>
    <div className="p-16 ml-20 w-[186px] h-[72px]">
      <p className=" w-[186px] top-0 left-0 [font-family:'Montserrat',Helvetica] font-normal text-[#4e4e4e] text-[18px] tracking-[0] leading-[24px]">
        <span className="font-bold">
          Country Of Origin:
          <br />
        </span>
        <span className="[font-family:'Montserrat-Regular',Helvetica]">
          <br />
          India
        </span>
      </p>
    </div>
        </section>
    </div>
    </div>


    <div className="mt-[200px] ml-[189px]">
      <div className=" w-[300]  h-[37px] top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[30px] tracking-[0] leading-[normal]">
        Customer Reviews
      </div>
      <div className="mt-5">
              {/* <StarRating /> */}
              <Rating
                onClick={handleRating}
                initialValue={rating}
                size={35}
                transition
                allowFraction
                SVGstyle={{ display: "inline" }}
                fillColor="#642265"
              />

              <span className="ml-4 w-[107px] h-[22px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#642265] text-[18px] tracking-[0] leading-[normal]">
                120 Reviews
              </span>
            </div>
            <div>
            <div className="pt-5 w-[1620px] h-px">
      <img className="w-[1620px] h-[2px] top-0 left-0" alt="Line" src={line2} />
    </div>
    <div className="mt-10">
    <Rating
                onClick={handleRating}
                initialValue={rating}
                size={30}
                transition
                allowFraction
                SVGstyle={{ display: "inline" }}
                fillColor="#642265"
              />
              <div className="mt-2 w-[200px] h-[29px]">
      <h2 className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[24px] tracking-[0] leading-[normal]">
        Fully satisfied
      </h2>
     
      <h2 className="mt-10 top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
        Abhishek Singh
      </h2>
      <p className="mt-4 w-[748px] top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
        The flavors were great, the only grudge being the Indian flavors like Mava Kulfi, Kesar, Mango etc. were too
        sweet.
      </p>
    </div>

    

    </div>
    <div className="flex w-full justify-end items-end px-4 py-2">
      <span className="mr-[197px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#4e4e4e] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap" >
        Oct 12, 2023
      </span>
    </div>
    </div>
    <div className="mt-[140px]">
    <div className="pt-5 w-[1620px] h-px">
      <img className="w-[1620px] h-[2px] top-0 left-0" alt="Line" src={line2} />
    </div>
    <div className="mt-10">
    <Rating
                onClick={handleRating}
                initialValue={rating}
                size={30}
                transition
                allowFraction
                SVGstyle={{ display: "inline" }}
                fillColor="#642265"
              />
              <div className="mt-2 w-[200px] h-[29px]">
      <h2 className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[24px] tracking-[0] leading-[normal]">
        Fully satisfied
      </h2>
     
      <h2 className="mt-10 top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
        Abhishek Singh
      </h2>
      <p className="mt-4 w-[748px] top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
        The flavors were great, the only grudge being the Indian flavors like Mava Kulfi, Kesar, Mango etc. were too
        sweet.
      </p>
    </div>

    

    </div>
    <div className="flex w-full justify-end items-end px-4 py-2">
      <span className="mr-[197px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#4e4e4e] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap" >
        Oct 12, 2023
      </span>
    </div>
    </div>
    
    <div className="mt-[140px]">
    <div className="pt-5 w-[1620px] h-px">
      <img className="w-[1620px] h-[2px] top-0 left-0" alt="Line" src={line2} />
    </div>
    <div className="mt-10">
    <Rating
                onClick={handleRating}
                initialValue={rating}
                size={30}
                transition
                allowFraction
                SVGstyle={{ display: "inline" }}
                fillColor="#642265"
              />
              <div className="mt-2 w-[200px] h-[29px]">
      <h2 className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[24px] tracking-[0] leading-[normal]">
        Fully satisfied
      </h2>
     
      <h2 className="mt-10 top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
        Abhishek Singh
      </h2>
      <p className="mt-4 w-[748px] top-0 left-0 [font-family:'Montserrat',Helvetica] font-medium text-[#4e4e4e] text-[18px] tracking-[0] leading-[normal]">
        The flavors were great, the only grudge being the Indian flavors like Mava Kulfi, Kesar, Mango etc. were too
        sweet.
      </p>
    </div>

    

    </div>
    </div>
    <div className="flex w-full justify-end items-end px-4 py-2">
      <span className="mr-[197px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#4e4e4e] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap" >
        Oct 12, 2023
      </span>
    </div>
    </div>


    <div className="pt-[200px] flex justify-center ">
      <section>
    
      <h2 className="top-0 left-0 [font-family:'Praline',Helvetica] font-normal text-[#4e4e4e] text-[60px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
        You Might Also Like
      </h2>
  

    <div className="pt-20 grid grid-cols-3 gap-[30px]">
      <div className="w-[520px] h-[749px] pt-16 pl-8 top-0 left-0 bg-[#e9e6e0]">
      <div className=" w-[71px] h-[71px] flex justify-center items-center bg-secondary-leaf-green rounded-[200px]">
              <span className="text-white text-[20px] ml-1 font-bold font-primary">
                30%
                <br />
                OFF
              </span>
            </div>
            <div className="flex justify-center pt-12">
      <img className="w-[187px] h-[334px] top-0 left-0 object-cover" alt="Layer" src={Whey} />
    </div>
    <div className="pt-[47px]">
      <h2 className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[30px] text-center tracking-[0] leading-[normal]">
        Whey Protein
      </h2>
    </div>
    <div className="pt-3 ml-[150px]">
    <Rating
                onClick={handleRating}
                initialValue={rating}
                size={35}
                transition
                allowFraction
                SVGstyle={{ display: "inline" }}
                fillColor="#642265"
              />
    </div>

    <div className="pt-2 ml-10 space-x-3">
    <span className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-extrabold text-[#b9b9b9] text-[24px] tracking-[0] leading-[normal] line-through">
        ₹4000/-
      </span>
      <span className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-extrabold text-[#4e4e4e] text-[40px] tracking-[0] leading-[normal]">
        ₹3000/-
      </span>
      <span className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-normal text-[#642265] text-[24px] tracking-[0] leading-[normal]">
        (20% OFF)
      </span>
    </div>

    </div>
    <div className="w-[520px] h-[749px] pt-16 pl-8 top-0 left-0 bg-[#e9e6e0]">
      <div className=" w-[71px] h-[71px] flex justify-center items-center bg-secondary-leaf-green rounded-[200px]">
              <span className="text-white text-[20px] ml-1 font-bold font-primary">
                30%
                <br />
                OFF
              </span>
            </div>
            <div className="flex justify-center pt-12">
      <img className="w-[187px] h-[334px] top-0 left-0 object-cover" alt="Layer" src={Meal} />
    </div>
    <div className="pt-[47px]">
      <h2 className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[30px] text-center tracking-[0] leading-[normal]">
       Meal Replacement
      </h2>
    </div>
    <div className="pt-3 ml-[150px]">
    <Rating
                onClick={handleRating}
                initialValue={rating}
                size={35}
                transition
                allowFraction
                SVGstyle={{ display: "inline" }}
                fillColor="#642265"
              />
    </div>

    <div className="pt-2 ml-10 space-x-3">
    <span className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-extrabold text-[#b9b9b9] text-[24px] tracking-[0] leading-[normal] line-through">
        ₹4000/-
      </span>
      <span className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-extrabold text-[#4e4e4e] text-[40px] tracking-[0] leading-[normal]">
        ₹3000/-
      </span>
      <span className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-normal text-[#642265] text-[24px] tracking-[0] leading-[normal]">
        (20% OFF)
      </span>
    </div>

    </div>
    <div className="w-[520px] h-[749px] pt-16 pl-8 top-0 left-0 bg-[#e9e6e0]">
      <div className=" w-[71px] h-[71px] flex justify-center items-center bg-secondary-leaf-green rounded-[200px]">
              <span className="text-white text-[20px] ml-1 font-bold font-primary">
                30%
                <br />
                OFF
              </span>
            </div>
            <div className="flex justify-center pt-12">
      <img className="w-[187px] h-[334px] top-0 left-0 object-cover" alt="Layer" src={Glutamine} />
    </div>
    <div className="pt-[47px]">
      <h2 className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-bold text-[#4e4e4e] text-[30px] text-center tracking-[0] leading-[normal]">
        L-Glutamine
      </h2>
    </div>
    <div className="pt-3 ml-[150px]">
    <Rating
                onClick={handleRating}
                initialValue={rating}
                size={35}
                transition
                allowFraction
                SVGstyle={{ display: "inline" }}
                fillColor="#642265"
              />
    </div>

    <div className="pt-2 ml-10 space-x-3">
    <span className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-extrabold text-[#b9b9b9] text-[24px] tracking-[0] leading-[normal] line-through">
        ₹4000/-
      </span>
      <span className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-extrabold text-[#4e4e4e] text-[40px] tracking-[0] leading-[normal]">
        ₹3000/-
      </span>
      <span className="top-0 left-0 [font-family:'Montserrat',Helvetica] font-normal text-[#642265] text-[24px] tracking-[0] leading-[normal]">
        (20% OFF)
      </span>
    </div>

    </div>
    </div>
      </section>
    </div>
  <Footer/>
</>
  );
};

export default ProductDetail;
