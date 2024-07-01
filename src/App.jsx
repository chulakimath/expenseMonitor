import React, { useState } from 'react';
import "./custom.css";
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout';
import Expense from './components/expnse/Expense';
import Income from './components/income/Income';
import { ExpenseProvider } from './components/context/ExpenseContext';
// import { createContext } from 'react';



// export const expenseContext = createContext();

const App = () => {
  const [data, setData] = useState(1);
  console.log("app");
  return (
    <>
      <ExpenseProvider>


        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='/' element={<Home />} />
            <Route path='/expnse' element={<Expense />} />
            <Route path='/income' element={<Income />} />
          </Route>
        </Routes>
      </ExpenseProvider>

    </>

  )
}

export default App
