import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    console.log("head");
    return (
        <>
            <div className='bg-gray-600 text-white w-full py-2 text-2xl text-center'>
                Expense Tracker
            </div>
            <div className='bg-gray-900/50 text-white py-3 px-2 hidden md:block'>
                <ul className='flex justify-end gap-10 text-black transition-all duration-1000'>
                    <li>
                        <NavLink
                            to={'/'}
                            className={({ isActive }) =>
                                `bg-white px-3 py-2 rounded-md transition-all duration-1000  hover:shadow-md hover:shadow-black ${isActive ? 'shadow-md shadow-black' : 'shadow-inner shadow-gray-600'}`}>
                            home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to={'/expnse'}
                            className={({ isActive }) =>
                                `bg-white px-3 py-2 rounded-md  transition-all duration-1000 hover:shadow-md hover:shadow-black ${isActive ? 'shadow-md shadow-black' : 'shadow-inner shadow-gray-600'}`}>
                            Transactions
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to={'income'}
                            className={({ isActive }) =>
                                `bg-white px-3 py-2 rounded-md transition-all duration-1000  hover:shadow-md hover:shadow-black ${isActive ? 'shadow-md shadow-black' : 'shadow-inner shadow-gray-600'}`}>
                            Status
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header
