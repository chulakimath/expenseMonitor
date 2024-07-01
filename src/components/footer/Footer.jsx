import React from 'react';
import { NavLink } from 'react-router-dom';
import { SlHome } from "react-icons/sl";
import { MdCurrencyRupee } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
import "../../assets/customActiv.css"

const Footer = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 bg-gray-800/0 text-white z-10 md:hidden'>
         <div className='py-1'  >
                <ul className='flex justify-around text-black '>
                    <li>
                        <NavLink
                            to={'/'}
                            className={({isActive})=>`${isActive?'active':'inactive'}`}
                            >
                           <SlHome 
                           size={40} 
                           color='black' 
                           className=' bg-white rounded-full p-2 transition-all'/>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to={'/expnse'}
                            className={({isActive})=>`${isActive?'active':'inactive'}`}
                            >
                            
                            <MdCurrencyRupee size={40} color='black' className=' bg-white rounded-full p-2' />
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to={'income'}
                            className={({isActive})=>`${isActive?'active':'inactive'}`}
                            >
                            <IoAnalytics size={40} color='black' className=' bg-white rounded-full p-2' />
                        </NavLink>
                    </li>
                </ul>
            </div>
    </div>
  )
}

export default Footer
