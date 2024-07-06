import React, { useEffect } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { useContext, useState } from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import '../../assets/customActiv.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Income = () => {
  const { mainData } = useContext(ExpenseContext);
  const [minDate, setMinDate] = useState(null);
  const [maxDate, setMaxDate] = useState(null);
  const [income, setIncome] = useState(null);
  const [expense, setExpense] = useState(null);



  useEffect(() => {
    if (minDate && maxDate) {
      const startDate = formatDate(minDate)
      const endDate = formatDate(maxDate)
      let tempIncome = mainData?.filter(item => item.reason === '1' && item.date >= startDate && item.date <= endDate)
      tempIncome?.sort((a, b) => parseDate(a.date) - parseDate(b.date));
      setIncome(tempIncome);
      let tempExpense = mainData?.filter(item => item.reason === '2' && item.date >= startDate && item.date <= endDate)
      tempExpense?.sort((a, b) => parseDate(a.date) - parseDate(b.date))
      setExpense(tempExpense);
    }
  }, [minDate, maxDate])

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  function parseDate(dateStr) {
    const [day, month, year] = dateStr.split('-');
    return new Date(year, month - 1, day); // Month is zero-based in JavaScript Date
  }

  return (
    <>
      <div className='sm:flex max-sm:mx-2 gap-10 sm:mt-4 sm:mb-4 '>
        <div className=''>
          <DatePicker
            selected={minDate}
            onChange={date => setMinDate(date)}
            className='shadow-sm shadow-black outline-none w-[95vw] sm:w-[300px] px-2 py-2 max-sm:mb-2 mt-2'
            dateFormat="dd-MM-yyyy"
            placeholderText="Select Start Date"
          />
        </div>
        <div className=''>
          <DatePicker
            selected={maxDate}
            onChange={date => setMaxDate(date)}
            className='shadow-sm shadow-black outline-none w-[95vw] sm:w-[300px] px-2 py-2 max-sm:mb-2 mt-2'
            dateFormat="dd-MM-yyyy"
            placeholderText="Select End Date"
          />
        </div>

      </div>

      <div className={`md:grid md:grid-cols-12 place-items-center hideScroll ${income && expense ? "bloack" : "hidden"} `}>
        <span className='md:col-span-6'>
          <div className='w-screen sm:w-[450px] h-72 shadow shadow-black flex items-end justify-center m-1 relative'>
            <h1 className='absolute left-[50%] top-0 -translate-x-[50%] text-2xl '>Income</h1>
            <ResponsiveContainer width={"100%"} height={'50%'}>
              <BarChart data={income} >
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
              <BarChart data={expense} >
                <Bar dataKey={'amount'} fill='red' />
                <XAxis dataKey={"date"} />
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
