import React, { Component } from 'react'
import logo from "../../assets/Logo.svg"
import { LuSearch, LuShoppingBag } from "react-icons/lu";

export default class Header extends Component {
  render() {
    return (
      <header className='bg-[#1C1814] fixed z-[99] top-0 left-0 w-full'>
        <div className="container">
            <nav className='flex justify-between h-[100px] items-center relative'>
                    <ul className='flex items-center gap-12 text-white'>
                        <li>
                            <span className='duration-300 cursor-pointer hover:text-[#C99E71] text-xl font-medium'>Home</span>
                        </li>
                        <li>
                            <span className='duration-300 cursor-pointer hover:text-[#C99E71] text-xl font-medium'>About</span>
                        </li>
                        <li>
                            <span className='duration-300 cursor-pointer hover:text-[#C99E71] text-xl font-medium'>Menu</span>
                        </li>
                        <li>
                            <span className='duration-300 cursor-pointer hover:text-[#C99E71] text-xl font-medium'>Reservation</span>
                        </li>
                    </ul>
                <div className='absolute right-[50%] translate-x-[50%] top-[50%] translate-y-[-50%]'>
                    <img src={logo} alt="" />
                </div>
                <ul className='text-white flex items-center gap-12'>
                    <li>
                        <span className='duration-300 cursor-pointer hover:text-[#C99E71] text-xl font-medium'>Pages</span>
                    </li>
                    <li>
                        <span className='duration-300 cursor-pointer hover:text-[#C99E71] text-xl font-medium'>Shop</span>
                    </li>
                    <li>
                        <span className='duration-300 cursor-pointer hover:text-[#C99E71] text-xl font-medium'>Contact</span>
                    </li>
                    <li>
                        <span className='duration-300 cursor-pointer hover:text-[#C99E71] text-xl font-medium'>Pages</span>
                    </li>
                    <li>
                        <span className='duration-300 cursor-pointer hover:text-[#C99E71] text-2xl font-medium'><LuSearch/></span>
                    </li>
                    <li>
                        <span className='duration-300 cursor-pointer hover:text-[#C99E71] text-2xl font-medium'><LuShoppingBag/> </span>
                    </li>
                </ul>
            </nav>
        </div>
      </header>
    )
  }
}
