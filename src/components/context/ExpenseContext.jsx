import React, { createContext, useEffect, useState } from 'react';


export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
    const [mainData, setMainData] = useState([]);
    useEffect(() => {
        const localStorageData = localStorage.getItem("ExpenseData");
        let data = JSON.parse(localStorageData)
        setMainData(data);
        console.log("setMainData");
    }, []);

    return (
        <ExpenseContext.Provider value={{ mainData, setMainData }}>
            {children}
        </ExpenseContext.Provider>
    );
};