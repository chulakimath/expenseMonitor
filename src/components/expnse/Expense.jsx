import React, { useContext, useEffect, useState } from 'react';
import { ExpenseContext } from "../context/ExpenseContext";
import Table from '../table/Table';
import InputBox from '../input/InputBox';


const Expense = () => {
  const { mainData, setMainData } = useContext(ExpenseContext);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    setSearchData(mainData)
  }, [mainData])
  useEffect(() => {
    setSearchData(mainData && mainData.filter(
      item => item.subject.toLowerCase().includes(search.toLocaleLowerCase()) ||
        item.date.includes(search) ||
        item.amount.includes(search)||
        item.type.includes(search.toLocaleLowerCase())
    ));
  }, [search])

  return (
    <>

      <div className='text-center text-xl sm:text-2xl'>Transactions</div>
      <div className='px-2'>
        <InputBox
          name={'subject'}
          value={search}
          key={1}
          type={'text'}
          placeHolder={"Search"}
          eventHandler={setSearch}
          classes={"w-screen sm:w-[300px]"}
        />

        {!searchData ? (<div className='w-[65%] sm:w-[20%] text-center bg-slate-700 px-4 rounded-sm text-white py-2 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>No Transactions yet ...</div>) : ""}
        {searchData && searchData.map((item, i, arr) => (
          <Table key={i} item={item} />
        ))}
      </div>
    </>
  )
}

export default Expense
