import React from 'react'
import hCart from './../../assets/images/hCart.png'
import search from './../../assets/icons/search.svg'
import favorite from './../../assets/icons/favourite.svg'
import cart from './../../assets/icons/cart.svg'
import user from './../../assets/icons/user1.svg'
const Navbar2 = () => {
  const navITems = [
    {link: "Home" , path: "home"},
    {link: "About Us" , path: "about"},
    {link: "Shop" , path: "shop"},
    {link: "Contact Us" , path: "contact"},
  ]
  return (
    <nav className='flex flex-wrap'>
       
       
           
                <a><img className='w-[208.75] h-[60px] mx-[150px] my-[47px]' src={hCart} alt=''/></a>
    
                <ul className='inline-flex items-start gap-[45px] absolute top-[66px] left-[623px]'>
                  {
                    navITems.map(({link,path}) => <a key={link} href={path} className='block font-primary text-dark-grey hover:text-grass-green'>{link}
                    </a>)
                  }
                </ul>
           
           
            <div className="relative w-[280px] h-[44px] left-[680px] top-[55px]">
              <input type="text" placeholder="Search" className="w-[280px] placeholder: font-primary h-[44px] placeholder:text-dark-grey pl-[53px] top-[55px] left-[52px] rounded-[4px] border-[2px] border-[#4e4e4e]  font-normal text-[#4e4e4e] text-[18px] bg-[#f2eee6]"
             />
              <img
                className="absolute w-[24px] h-[24px] top-[9px] left-[13px]"
                alt="Uil search"
                src={search}
              />
            </div>
          
           
              <img   className="absolute w-[24px] h-[24px] top-[60px] left-[1520px]"
                alt="Uil search"
                src={favorite}/>
                <div className="absolute w-[47px] h-[40px]">  
              <img
                className="absolute w-[24px] h-[24px] top-[60px] left-[1600px]"
                alt="Solar cart bold"
                src={cart}
              />
              <div className="absolute w-[27px] h-[27px] top-[43px] left-[1615px] bg-primary-yellow rounded-[13.5px] shadow-[0px_4px_4px_#22311e40]" />
              <div className="absolute top-[49px] left-[1623px] [font-family:'Arial_Rounded_MT_Bold-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                5
              </div>
         </div>
                <img  className="absolute w-[38px] h-[38px] top-[50px] left-[1700px]"
                alt="Uil search"
                src={user}/>
          
         
       
    </nav>
  )  
}

export default Navbar2