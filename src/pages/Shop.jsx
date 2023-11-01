import React from 'react'
import pic30off from "../assets/images/pic30off.png";
import Layer from "../assets/images/Layer.png";
import star from "../assets/images/star.svg";
import minus from "../assets/images/minus.png";
import plus from "../assets/images/plus.png";
import arrow from "../assets/images/arrow.png";
import { useState } from 'react';
import Navbar3 from '../layout/Navbar/Navbar3';

const Shop = () => {
    const[count,setCount] = useState(1)

  return (
    <> 
    <Navbar3/>
    <div className="pt-24 w-full flex justify-center pb-10">
    <div className="w-11/12 pl-14 pr-10 pb-22">
      <h2 className="text-center font-primary text-[60px] my-28 font-medium text-[#4E4E4E]">
        All Products
      </h2>
      <p className="text-[#4E4E4E] text-right mb-8 text-[16px] font-secondary font-bold">
        SEE ALL
      </p>
      {/*import cards here */}
      <div className="grid grid-cols-3 grid-rows-3 gap-8 pb-40 gap-y-48">
      <div className="bg-[#EAE7E1] group hover:bg-gradient-to-b from-[#3b663c]/0 to-[#3B663C]/100 hover:bg-white flex flex-col text-center font-secondary h-[734px]">
      <div className="pl-8 pt-10">
        <img src={pic30off} alt="" className="w-[70px]" />
      </div>
      <div className="flex justify-center mt-4 h-[334px]">
        <img
          src={Layer}
          alt=""
          className="h-[334px] group-hover:scale-110 group-hover:-translate-y-6"
        />
      </div>
      <p className="mt-6 text-[30px] font-semibold grey font-secondary text-grey group-hover:text-white group-hover:-translate-y-6 group-hover:text-[40px]">
        Whey Protein
      </p>
      <div className="flex justify-center my-2 gap-2 group-hover:-translate-y-6">
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
      </div>
      <div className=" flex justify-center gap-2 items-center font-secondary  group-hover:-translate-y-6">
        <span className="text-[#BABABA] text-[24px] group-hover:text-white font-bold line-through">
          ₹4000
        </span>
        <span className="text-[#4E4E4E] text-[40px] group-hover:text-white font-extrabold mx-2">
          ₹3000
        </span>
        <span className="text-[#642265] text-[24px] group-hover:text-white">(20% OFF)</span>
      </div>

      <div className="hidden group-hover:block">
      <div className=" flex justify-center items-center gap-8 -translate-y-4 mb-6">
        <div className="w-[123px] h-[50px] flex justify-between space-x-4 border-2 p-3 rounded-md  text-white">
         <button onClick={()=>{count>1 ? setCount(count-1):setCount(1)}}><img className="w-[24px] h-[24px] " src={minus}/></button>
        
          <span className="">{count}</span>
          <button onClick={()=>setCount(count+1)}><img className="w-[24px] h-[24px] " src={plus}/></button>
        </div>
        <button className="w-[180px] h-[50px] border text-black font-secondary rounded-md bg-white">
          ADD TO CART
        </button>
      </div>
    </div>

    </div>
    <div className="bg-[#EAE7E1] group hover:bg-gradient-to-b from-[#3b663c]/0 to-[#3B663C]/100 hover:bg-white flex flex-col text-center font-secondary h-[734px]">
      <div className="pl-8 pt-10">
        <img src={pic30off} alt="" className="w-[70px]" />
      </div>
      <div className="flex justify-center mt-4 h-[334px]">
        <img
          src={Layer}
          alt=""
          className="h-[334px] group-hover:scale-110 group-hover:-translate-y-6"
        />
      </div>
      <p className="mt-6 text-[30px] font-semibold grey font-secondary text-grey group-hover:text-white group-hover:-translate-y-6 group-hover:text-[40px]">
        Whey Protein
      </p>
      <div className="flex justify-center my-2 gap-2 group-hover:-translate-y-6">
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
      </div>
      <div className=" flex justify-center gap-2 items-center font-secondary  group-hover:-translate-y-6">
        <span className="text-[#BABABA] text-[24px] group-hover:text-white font-bold line-through">
          ₹4000
        </span>
        <span className="text-[#4E4E4E] text-[40px] group-hover:text-white font-extrabold mx-2">
          ₹3000
        </span>
        <span className="text-[#642265] text-[24px] group-hover:text-white">(20% OFF)</span>
      </div>

      <div className="hidden group-hover:block">
      <div className=" flex justify-center items-center gap-8 -translate-y-4 mb-6">
        <div className="w-[123px] h-[50px] flex justify-between space-x-4 border-2 p-3 rounded-md  text-white">
         <button onClick={()=>{count>1 ? setCount(count-1):setCount(1)}}><img className="w-[24px] h-[24px] " src={minus}/></button>
        
          <span className="">{count}</span>
          <button onClick={()=>setCount(count+1)}><img className="w-[24px] h-[24px] " src={plus}/></button>
        </div>
        <button className="w-[180px] h-[50px] border text-black font-secondary rounded-md bg-white">
          ADD TO CART
        </button>
      </div>
    </div>

    </div>
    <div className="bg-[#EAE7E1] group hover:bg-gradient-to-b from-[#3b663c]/0 to-[#3B663C]/100 hover:bg-white flex flex-col text-center font-secondary h-[734px]">
      <div className="pl-8 pt-10">
        <img src={pic30off} alt="" className="w-[70px]" />
      </div>
      <div className="flex justify-center mt-4 h-[334px]">
        <img
          src={Layer}
          alt=""
          className="h-[334px] group-hover:scale-110 group-hover:-translate-y-6"
        />
      </div>
      <p className="mt-6 text-[30px] font-semibold grey font-secondary text-grey group-hover:text-white group-hover:-translate-y-6 group-hover:text-[40px]">
        Whey Protein
      </p>
      <div className="flex justify-center my-2 gap-2 group-hover:-translate-y-6">
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
      </div>
      <div className=" flex justify-center gap-2 items-center font-secondary  group-hover:-translate-y-6">
        <span className="text-[#BABABA] text-[24px] group-hover:text-white font-bold line-through">
          ₹4000
        </span>
        <span className="text-[#4E4E4E] text-[40px] group-hover:text-white font-extrabold mx-2">
          ₹3000
        </span>
        <span className="text-[#642265] text-[24px] group-hover:text-white">(20% OFF)</span>
      </div>

      <div className="hidden group-hover:block">
      <div className=" flex justify-center items-center gap-8 -translate-y-4 mb-6">
        <div className="w-[123px] h-[50px] flex justify-between space-x-4 border-2 p-3 rounded-md  text-white">
         <button onClick={()=>{count>1 ? setCount(count-1):setCount(1)}}><img className="w-[24px] h-[24px] " src={minus}/></button>
        
          <span className="">{count}</span>
          <button onClick={()=>setCount(count+1)}><img className="w-[24px] h-[24px] " src={plus}/></button>
        </div>
        <button className="w-[180px] h-[50px] border text-black font-secondary rounded-md bg-white">
          ADD TO CART
        </button>
      </div>
    </div>

    </div>
    <div className="bg-[#EAE7E1] group hover:bg-gradient-to-b from-[#3b663c]/0 to-[#3B663C]/100 hover:bg-white flex flex-col text-center font-secondary h-[734px]">
      <div className="pl-8 pt-10">
        <img src={pic30off} alt="" className="w-[70px]" />
      </div>
      <div className="flex justify-center mt-4 h-[334px]">
        <img
          src={Layer}
          alt=""
          className="h-[334px] group-hover:scale-110 group-hover:-translate-y-6"
        />
      </div>
      <p className="mt-6 text-[30px] font-semibold grey font-secondary text-grey group-hover:text-white group-hover:-translate-y-6 group-hover:text-[40px]">
        Whey Protein
      </p>
      <div className="flex justify-center my-2 gap-2 group-hover:-translate-y-6">
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
      </div>
      <div className=" flex justify-center gap-2 items-center font-secondary  group-hover:-translate-y-6">
        <span className="text-[#BABABA] text-[24px] group-hover:text-white font-bold line-through">
          ₹4000
        </span>
        <span className="text-[#4E4E4E] text-[40px] group-hover:text-white font-extrabold mx-2">
          ₹3000
        </span>
        <span className="text-[#642265] text-[24px] group-hover:text-white">(20% OFF)</span>
      </div>

      <div className="hidden group-hover:block">
      <div className=" flex justify-center items-center gap-8 -translate-y-4 mb-6">
        <div className="w-[123px] h-[50px] flex justify-between space-x-4 border-2 p-3 rounded-md  text-white">
         <button onClick={()=>{count>1 ? setCount(count-1):setCount(1)}}><img className="w-[24px] h-[24px] " src={minus}/></button>
        
          <span className="">{count}</span>
          <button onClick={()=>setCount(count+1)}><img className="w-[24px] h-[24px] " src={plus}/></button>
        </div>
        <button className="w-[180px] h-[50px] border text-black font-secondary rounded-md bg-white">
          ADD TO CART
        </button>
      </div>
    </div>

    </div>
    <div className="bg-[#EAE7E1] group hover:bg-gradient-to-b from-[#3b663c]/0 to-[#3B663C]/100 hover:bg-white flex flex-col text-center font-secondary h-[734px]">
      <div className="pl-8 pt-10">
        <img src={pic30off} alt="" className="w-[70px]" />
      </div>
      <div className="flex justify-center mt-4 h-[334px]">
        <img
          src={Layer}
          alt=""
          className="h-[334px] group-hover:scale-110 group-hover:-translate-y-6"
        />
      </div>
      <p className="mt-6 text-[30px] font-semibold grey font-secondary text-grey group-hover:text-white group-hover:-translate-y-6 group-hover:text-[40px]">
        Whey Protein
      </p>
      <div className="flex justify-center my-2 gap-2 group-hover:-translate-y-6">
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
      </div>
      <div className=" flex justify-center gap-2 items-center font-secondary  group-hover:-translate-y-6">
        <span className="text-[#BABABA] text-[24px] group-hover:text-white font-bold line-through">
          ₹4000
        </span>
        <span className="text-[#4E4E4E] text-[40px] group-hover:text-white font-extrabold mx-2">
          ₹3000
        </span>
        <span className="text-[#642265] text-[24px] group-hover:text-white">(20% OFF)</span>
      </div>

      <div className="hidden group-hover:block">
      <div className=" flex justify-center items-center gap-8 -translate-y-4 mb-6">
        <div className="w-[123px] h-[50px] flex justify-between space-x-4 border-2 p-3 rounded-md  text-white">
         <button onClick={()=>{count>1 ? setCount(count-1):setCount(1)}}><img className="w-[24px] h-[24px] " src={minus}/></button>
        
          <span className="">{count}</span>
          <button onClick={()=>setCount(count+1)}><img className="w-[24px] h-[24px] " src={plus}/></button>
        </div>
        <button className="w-[180px] h-[50px] border text-black font-secondary rounded-md bg-white">
          ADD TO CART
        </button>
      </div>
    </div>

    </div>
    <div className="bg-[#EAE7E1] group hover:bg-gradient-to-b from-[#3b663c]/0 to-[#3B663C]/100 hover:bg-white flex flex-col text-center font-secondary h-[734px]">
      <div className="pl-8 pt-10">
        <img src={pic30off} alt="" className="w-[70px]" />
      </div>
      <div className="flex justify-center mt-4 h-[334px]">
        <img
          src={Layer}
          alt=""
          className="h-[334px] group-hover:scale-110 group-hover:-translate-y-6"
        />
      </div>
      <p className="mt-6 text-[30px] font-semibold grey font-secondary text-grey group-hover:text-white group-hover:-translate-y-6 group-hover:text-[40px]">
        Whey Protein
      </p>
      <div className="flex justify-center my-2 gap-2 group-hover:-translate-y-6">
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
      </div>
      <div className=" flex justify-center gap-2 items-center font-secondary  group-hover:-translate-y-6">
        <span className="text-[#BABABA] text-[24px] group-hover:text-white font-bold line-through">
          ₹4000
        </span>
        <span className="text-[#4E4E4E] text-[40px] group-hover:text-white font-extrabold mx-2">
          ₹3000
        </span>
        <span className="text-[#642265] text-[24px] group-hover:text-white">(20% OFF)</span>
      </div>

      <div className="hidden group-hover:block">
      <div className=" flex justify-center items-center gap-8 -translate-y-4 mb-6">
        <div className="w-[123px] h-[50px] flex justify-between space-x-4 border-2 p-3 rounded-md  text-white">
         <button onClick={()=>{count>1 ? setCount(count-1):setCount(1)}}><img className="w-[24px] h-[24px] " src={minus}/></button>
        
          <span className="">{count}</span>
          <button onClick={()=>setCount(count+1)}><img className="w-[24px] h-[24px] " src={plus}/></button>
        </div>
        <button className="w-[180px] h-[50px] border text-black font-secondary rounded-md bg-white">
          ADD TO CART
        </button>
      </div>
    </div>

    </div>
    <div className="bg-[#EAE7E1] group hover:bg-gradient-to-b from-[#3b663c]/0 to-[#3B663C]/100 hover:bg-white flex flex-col text-center font-secondary h-[734px]">
      <div className="pl-8 pt-10">
        <img src={pic30off} alt="" className="w-[70px]" />
      </div>
      <div className="flex justify-center mt-4 h-[334px]">
        <img
          src={Layer}
          alt=""
          className="h-[334px] group-hover:scale-110 group-hover:-translate-y-6"
        />
      </div>
      <p className="mt-6 text-[30px] font-semibold grey font-secondary text-grey group-hover:text-white group-hover:-translate-y-6 group-hover:text-[40px]">
        Whey Protein
      </p>
      <div className="flex justify-center my-2 gap-2 group-hover:-translate-y-6">
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
      </div>
      <div className=" flex justify-center gap-2 items-center font-secondary  group-hover:-translate-y-6">
        <span className="text-[#BABABA] text-[24px] group-hover:text-white font-bold line-through">
          ₹4000
        </span>
        <span className="text-[#4E4E4E] text-[40px] group-hover:text-white font-extrabold mx-2">
          ₹3000
        </span>
        <span className="text-[#642265] text-[24px] group-hover:text-white">(20% OFF)</span>
      </div>

      <div className="hidden group-hover:block">
      <div className=" flex justify-center items-center gap-8 -translate-y-4 mb-6">
        <div className="w-[123px] h-[50px] flex justify-between space-x-4 border-2 p-3 rounded-md  text-white">
         <button onClick={()=>{count>1 ? setCount(count-1):setCount(1)}}><img className="w-[24px] h-[24px] " src={minus}/></button>
        
          <span className="">{count}</span>
          <button onClick={()=>setCount(count+1)}><img className="w-[24px] h-[24px] " src={plus}/></button>
        </div>
        <button className="w-[180px] h-[50px] border text-black font-secondary rounded-md bg-white">
          ADD TO CART
        </button>
      </div>
    </div>

    </div>
    <div className="bg-[#EAE7E1] group hover:bg-gradient-to-b from-[#3b663c]/0 to-[#3B663C]/100 hover:bg-white flex flex-col text-center font-secondary h-[734px]">
      <div className="pl-8 pt-10">
        <img src={pic30off} alt="" className="w-[70px]" />
      </div>
      <div className="flex justify-center mt-4 h-[334px]">
        <img
          src={Layer}
          alt=""
          className="h-[334px] group-hover:scale-110 group-hover:-translate-y-6"
        />
      </div>
      <p className="mt-6 text-[30px] font-semibold grey font-secondary text-grey group-hover:text-white group-hover:-translate-y-6 group-hover:text-[40px]">
        Whey Protein
      </p>
      <div className="flex justify-center my-2 gap-2 group-hover:-translate-y-6">
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
      </div>
      <div className=" flex justify-center gap-2 items-center font-secondary  group-hover:-translate-y-6">
        <span className="text-[#BABABA] text-[24px] group-hover:text-white font-bold line-through">
          ₹4000
        </span>
        <span className="text-[#4E4E4E] text-[40px] group-hover:text-white font-extrabold mx-2">
          ₹3000
        </span>
        <span className="text-[#642265] text-[24px] group-hover:text-white">(20% OFF)</span>
      </div>

      <div className="hidden group-hover:block">
      <div className=" flex justify-center items-center gap-8 -translate-y-4 mb-6">
        <div className="w-[123px] h-[50px] flex justify-between space-x-4 border-2 p-3 rounded-md  text-white">
         <button onClick={()=>{count>1 ? setCount(count-1):setCount(1)}}><img className="w-[24px] h-[24px] " src={minus}/></button>
        
          <span className="">{count}</span>
          <button onClick={()=>setCount(count+1)}><img className="w-[24px] h-[24px] " src={plus}/></button>
        </div>
        <button className="w-[180px] h-[50px] border text-black font-secondary rounded-md bg-white">
          ADD TO CART
        </button>
      </div>
    </div>

    </div>
    <div className="bg-[#EAE7E1] group hover:bg-gradient-to-b from-[#3b663c]/0 to-[#3B663C]/100 hover:bg-white flex flex-col text-center font-secondary h-[734px]">
      <div className="pl-8 pt-10">
        <img src={pic30off} alt="" className="w-[70px]" />
      </div>
      <div className="flex justify-center mt-4 h-[334px]">
        <img
          src={Layer}
          alt=""
          className="h-[334px] group-hover:scale-110 group-hover:-translate-y-6"
        />
      </div>
      <p className="mt-6 text-[30px] font-semibold grey font-secondary text-grey group-hover:text-white group-hover:-translate-y-6 group-hover:text-[40px]">
        Whey Protein
      </p>
      <div className="flex justify-center my-2 gap-2 group-hover:-translate-y-6">
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
        <img src={star} alt="w-6" />
      </div>
      <div className=" flex justify-center gap-2 items-center font-secondary  group-hover:-translate-y-6">
        <span className="text-[#BABABA] text-[24px] group-hover:text-white font-bold line-through">
          ₹4000
        </span>
        <span className="text-[#4E4E4E] text-[40px] group-hover:text-white font-extrabold mx-2">
          ₹3000
        </span>
        <span className="text-[#642265] text-[24px] group-hover:text-white">(20% OFF)</span>
      </div>

      <div className="hidden group-hover:block">
      <div className=" flex justify-center items-center gap-8 -translate-y-4 mb-6">
        <div className="w-[123px] h-[50px] flex justify-between space-x-4 border-2 p-3 rounded-md  text-white">
         <button onClick={()=>{count>1 ? setCount(count-1):setCount(1)}}><img className="w-[24px] h-[24px] " src={minus}/></button>
        
          <span className="">{count}</span>
          <button onClick={()=>setCount(count+1)}><img className="w-[24px] h-[24px] " src={plus}/></button>
        </div>
        <button className="w-[180px] h-[50px] border text-black font-secondary rounded-md bg-white">
          ADD TO CART
        </button>
      </div>
    </div>

    </div>
   
      </div>

      {/*div for next pages */}
      <div className="flex justify-center items-center font-secondary gap-6 -translate-y-16">
        <span className="text-[#4E4E4E] text-2xl font-extrabold">1</span>
        <span className="text-[#A9A9A9] text-2xl font-extrabold">2</span>
        <div className="border-2 rounded-full p-1 border-[#4E4E4E]">
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
    
  </div></>
  )
}

export default Shop