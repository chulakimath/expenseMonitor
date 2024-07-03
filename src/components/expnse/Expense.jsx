import React, { useContext, useEffect } from 'react';
import { ExpenseContext } from "../context/ExpenseContext";
import Table from '../table/Table';


const Expense = () => {
  const { mainData, setMainData } = useContext(ExpenseContext);
  
  return (
    <>
      <div className='px-2'>
        <div className='text-center text-xl sm:text-2xl'>Transactions</div>
        {!mainData?(<div className='w-[65%] sm:w-[20%] text-center bg-slate-700 px-4 rounded-sm text-white py-2 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>No Transactions yet ...</div>):""}
        {mainData && mainData.map((item, i, arr) => (
          <Table key={i} item={item} />
        ))}
      </div>
    </>
  )
}

export default Expense
