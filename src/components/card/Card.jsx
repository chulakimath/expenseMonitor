import React, { useContext, useEffect, useState } from 'react';
import "../../assets/customActiv.css";
import { ExpenseContext } from '../context/ExpenseContext';
import '../../assets/customActiv.css'

const Card = () => {
  const { mainData,} = useContext(ExpenseContext);
  const [localData, setLocalData] = useState(0);
  useEffect(() => {
    let amount = 0;
    let income = 0;
    let expense = 0;
    mainData?.forEach(element => {
      element && element?.reason === '1' ? income += parseInt(element?.amount) : expense += parseInt(element?.amount);
    });
    amount = income - expense;
    setLocalData(amount);
  }, [mainData])
  return (
    <div className='flex justify-center'>
      <div
        className='opcty relative mt-2 mb-3 backdrop-blur-3xl rounded-lg h-[180px] w-[300px] md:w[350px] gradient_back shadow-md shadow-black' >
        <span className='text-white text-5xl p-2 '>₹</span>
        <span className='text-white px-4 py-2 absolute top-0 right-0'>Available balance</span>
        <div className='pl-4 text-5xl text-black/60 mt-1 truncate '>
          {localData}
        </div>
        <div className='text-white/70 text-xl absolute bottom-2 left-2'>{new Date().toISOString().split("T")[0]}</div>
      </div>
    </div>
  );
}

export default Card;
