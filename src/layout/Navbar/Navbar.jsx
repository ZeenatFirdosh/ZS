import React, { useState } from 'react'
import hCart from './../../assets/images/hCart.png'
import search from './../../assets/icons/search.svg'
import favorite from './../../assets/icons/favourite.svg'
import cart from './../../assets/icons/cart.svg'
import user from './../../assets/icons/user1.svg'
import hamburger from './../../assets/icons/hamburger.svg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const navITems = [
    {link: "Home" , path: "/"},
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
  return ( <>
    <nav>
       {/* Mobile Navigation */}
       <div className="sm:hidden  relative flex flex-1 top-[110px] left-[30px]">
        <img
          src={hamburger}
          alt="menu"
          className="w-[50px] h-[50px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        {/* Sidebar */}
        {/* <div
          className={`${
            !toggle ? "hidden" : "flex"
          } z-40 p-6 bg-black absolute top-20 -0 mx-4 my-2 rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`hover:text-grass-green [font-family:'Praline',Helvetica] font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-grass-green" : "text-white"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    <div className="sm:hidden flex absolute p-2 w-[791px] h-[37px] top-0 left-0 bg-black">
    <p className=" ml-[180px] flex w-[430px]  justify-center [font-family:'Montserrat',Helvetica] font-medium text-white text-[20px] tracking-[0] leading-[normal]">
    Free shipping on all orders above Rs 999
  </p> 
</div>


        <div className='text-lg container font-medium'>

          
            <div className='flex'>
                <a><img className=' w-[208.75]  h-[60px]  sm:mx-[150px] mx-[250px] sm:my-[47px] mt-[30px]' src={hCart} alt=''/></a>
    
                <ul className='sm:inline-flex hidden items-start gap-[45px] absolute top-[60px] left-[560px]'>
                  {
                    navLinks.map(({link,path}) => <Link key={link} to={link} className='block font-primary text-dark-grey hover:text-grass-green'>{path}
                    </Link>)
                  }
                </ul>
            </div>
            <div className="sm:absolute w-[791px] h-[941px] sm:top-0 sm:my-0 my-[170px] left-[1100px]  bg-[#f2eee6]">
            <div className="sm:flex relative sm:w-[280px] w-[600px] h-[44px] sm:left-[105px] left-[25px] sm:top-[55px] top-[-130px]">
              <input type="text" placeholder="Search" className="sm:w-[280px] w-[740px] placeholder:sm:text-[18px] placeholder:text-[35px] placeholder:ml-10   placeholder: font-primary h-[44px] placeholder:text-dark-grey sm:pl-[53px] pl-[115px]  sm:p-0 p-12 top-[55px] left-[52px] rounded-[4px] sm:border-[2px] sm:border-[#4e4e4e]  font-normal text-[#4e4e4e] sm:text-[18px] text-[35px] sm:bg-[#f2eee6] bg-[#ececec]"
             />
              <img
                className="sm:absolute relative sm:w-[24px] sm:h-[24px] w-12 h-12 sm:top-[9px]  top-[-75px] sm:left-[20px] left-[35px]"
                alt="Uil search"
                src={search}
              />
            </div>
            <div className='  '>
              <img className="sm:flex hidden absolute w-[24px] h-[24px] top-[65px] left-[423px]"
                alt="Uil search"
                src={favorite}/>

          <div className="sm:flex  absolute sm:w-[47px] sm:h-[40px] w-[60px] h-[50] sm:left-0 left-[200px] sm:mt-0 mt-[-295px] ">  
              <img
                className="absolute sm:w-[24px] sm:h-[24px] w-[50px] h-[50px] top-[20px] left-[507px]"
                alt="Solar cart bold"
                src={cart}
              />
              <div className="absolute sm:w-[25px] sm:h-[25px] w-[28px] h-[30px] top-0 left-[527px] bg-primary-yellow rounded-[13.5px] shadow-[0px_4px_4px_#22311e40]" />
              <span className="absolute top-[4px] left-[536px] [font-family:'Arial_Rounded_MT_Bold-Regular',Helvetica] font-normal text-black sm:text-[16px] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                5
              </span>
         </div>
                <img  className="sm:flex hidden absolute w-[38px] h-[38px] top-[58px] left-[592px]"
                alt="Uil search"
                src={user}/>
            </div>
          </div>
          
        </div>

       
    </nav>
  
</>
  )  
}

export default Navbar