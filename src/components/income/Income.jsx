import React from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { useContext } from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Income = () => {
  const { mainData } = useContext(ExpenseContext);
  let income = mainData.filter((item) => item.reason === '1')
  let expense = mainData.filter((item) => item.reason === '2')

  // console.log(incomedata);
  return (
    <>
      <div className='md:grid md:grid-cols-12 place-items-center'>
        <span className='md:col-span-6'>
          <div className='w-screen sm:w-[450px] h-72 shadow shadow-black flex items-end justify-center m-1 relative'>
            <h1 className='absolute left-[50%] top-0 -translate-x-[50%] text-2xl '>Income</h1>
            <ResponsiveContainer width={"100%"} height={'50%'}>
              <BarChart data={income} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                <Bar dataKey={'amount'} fill='#8874d8' />
                <XAxis dataKey={"date"} />
                {/* <YAxis/> */}
                <Tooltip />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </span>

        {/* //expnse */}
        <span className='max-sm:mt-4 md:col-span-6'>
          <div className='w-screen sm:w-[450px] h-72 shadow shadow-black flex items-end justify-center m-1 relative'>
            <h1 className='absolute left-[50%] top-0 -translate-x-[50%] text-2xl '>Expense</h1>
            <ResponsiveContainer width={"100%"} height={'50%'}>
              <BarChart data={expense} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                <Bar dataKey={'amount'} fill='red' />
                <XAxis dataKey={"date"} />
                {/* <YAxis/> */}
                <Tooltip />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </span>
      </div>

      <div className='mb-16'>

      </div>
    </>
  )
}

export default Income
