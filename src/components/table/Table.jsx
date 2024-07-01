import React, { useContext, useState } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const Table = ({ item }) => {
    const { mainData, setMainData } = useContext(ExpenseContext);
    const [clicked, setClicked] = useState(false)
    function handleClick(e) {
        setClicked(prev => !prev);
    }
    const handleRemove = (id) => {
        setMainData(prev=>prev.filter((item)=>item.id!==id))
        setMainData(prev=>{
            localStorage.setItem("ExpenseData",JSON.stringify(prev))
            return prev;
        })
    }
    return (
        <div className=' sm:px-0 sm:flex justify-center'>
            {item.reason === '1' ?
                <div onClick={handleClick} className={`cursor-pointer px-1 transition-all duration-500 bg-white mt-1 w-full sm:w-[600px] shadow shadow-black border-r-8 border-r-green-600 ${!clicked ? "grid grid-cols-12" : ""}`}>
                    <div className='col-span-5 flex justify-between'>
                        <span>{item?.subject}</span>
                        <span onClick={() => handleRemove(item?.id)} className={`text-white ${!clicked ? "hidden" : "block"} bg-red-500 m-1 p-1 rounded-sm`}>remove</span>
                    </div>
                    <div className='col-span-3 text-right'><span>₹</span>{item?.amount}</div>
                    <div className='col-span-4 text-right'>{item?.date}</div>
                </div> :
                   <div onClick={handleClick} className={`cursor-pointer px-1 transition-all duration-500 bg-white mt-1 w-full sm:w-[600px] shadow shadow-black border-r-8 border-r-red-600 ${!clicked ? "grid grid-cols-12" : ""}`}>
                   <div className='col-span-5 flex justify-between'>
                       <span>{item?.subject}</span>
                       <span onClick={() => handleRemove(item?.id)} className={`text-white ${!clicked ? "hidden" : "block"} bg-red-500 m-1 p-1 rounded-sm`}>remove</span>
                   </div>
                   <div className='col-span-3 text-right'><span>₹</span>{item?.amount}</div>
                   <div className='col-span-4 text-right'>{item?.date}</div>
               </div>
            }
        </div>
    )
}

export default Table
