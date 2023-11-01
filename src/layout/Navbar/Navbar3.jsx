import React from 'react'
import hCart from './../../assets/images/hCart.png'
import search from './../../assets/icons/search.svg'
import favorite from './../../assets/icons/favourite.svg'
import cart from './../../assets/icons/cart.svg'
import user from './../../assets/icons/user1.svg'
import { Link } from 'react-router-dom'

const Navbar3 = () => {

    const navITems = [
        {link: "Home" , path: "home"},
        {link: "About Us" , path: "about"},
        {link: "Shop" , path: "shop"},
        {link: "Contact Us" , path: "contact"},
      ]
    
      const navLinks = [
        {
          link: "/",
          path: "Home",
        },
        {
          link: "/about",
          path: "About Us",
        },
        {
          link: "/shop",
          path: "Shop",
        },
        {
          link: "/",
          path: "Blogs",
        },
        {
            link: "/",
            path: "Find Store",
          },
      ];
  return (
    <nav className={`flex flex-col  sm:flex-row py-10 max-w-screen  fixed left-0 right-0 px-[4%] md:px-[8%] bg-[#f3f3f1] z-10 `}>
<div className="flex justify-start w-full items-center">
        <section className="relative flex items-center">
          <a>
            <img
              className="w-[208.75] h-[60px]"
              src={hCart}
              alt=""
            />
          </a>
        </section>
        <section className="items-start">
        <ul className='sm:flex   w-auto  gap-[45px] relative ml-[200px]'>
                  {
                    navLinks.map(({link,path}) => <Link key={link} to={link} className='block font-primary text-lg text-dark-grey hover:text-grass-green'>{path}
                    </Link>)
                  }
                </ul>

        </section>
        <section className='flex gap-[50px] justify-around relative '>
        <div className="sm:flex relative sm:w-[280px] w-[600px] h-[44px] ml-[100px] ">
              <input type="text" placeholder="Search" className="sm:w-[280px] w-[740px] placeholder:sm:text-[18px] placeholder:text-[35px] placeholder:ml-10   placeholder: font-primary h-[44px] placeholder:text-dark-grey sm:pl-[53px] pl-[115px]  sm:p-0 p-12 top-[55px] left-[52px] rounded-[4px] sm:border-[2px] sm:border-[#4e4e4e]  font-normal text-[#4e4e4e] sm:text-[18px] text-[35px] bg-[#ececec]"
             />
              <img
                className="sm:absolute relative sm:w-[24px] sm:h-[24px] w-12 h-12 sm:top-[9px]  top-[-75px] sm:left-[20px] left-[35px]"
                alt="Uil search"
                src={search}
              />
            </div>
           
              <img className="mr-[10px] w-[24px] h-[24px] ml-[40px] mt-[6px]"
                alt="Uil search"
                src={favorite}/>

          <div className="flex  sm:w-[47px] sm:h-[40px] w-[60px] h-[50] sm:left-0  sm:mt-0  ">  
              <img
                className="sm:w-[24px] sm:h-[24px] w-[50px] h-[50px] mt-1"
                alt="Solar cart bold"
                src={cart}
              />
              <div className="absolute ml-[10px] top-[-20px] w-[28px] h-[30px]   bg-primary-yellow rounded-[13.5px] shadow-[0px_4px_4px_#22311e40]" />
              <span className="ml-5 mt-[-13px] absolute [font-family:'Arial_Rounded_MT_Bold-Regular',Helvetica] font-normal text-black sm:text-[16px] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                5
              </span>
         </div>
                <img  className=" w-[38px] h-[38px] "
                alt="Uil search"
                src={user}/>
            </section>
        {/* <div className="hidden  sm:block sm:w-1/3 relative">
          <Search />
        </div> */}
        </div>
    </nav>
  )
}

export default Navbar3