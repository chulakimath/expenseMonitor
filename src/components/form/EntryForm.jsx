import React, { useContext, useRef, useState } from 'react';
import InputBox from '../input/InputBox';
import { ExpenseContext } from '../context/ExpenseContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EntryForm = () => {
    const { mainData, setMainData } = useContext(ExpenseContext);
    const [amount, setAmount] = useState('');
    const [subject, setSubject] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const handleAmountInNumber = (amount) => {
        setAmount(prev => !isNaN(amount) ? amount : prev)
    }
    const handleForm = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        if (selectedDate) {
            const formattedDate = formatDate(selectedDate);
            formData.append('date', formattedDate);
          }
        const formObj = Object.fromEntries(formData.entries());
        const id = Date.now() + Math.round(Math.random() * 100);
        formObj.type=formObj.reason=="1"?"income":"expense";
        formObj.id = id;
        if (formObj.reason == "" || formObj.date == "" || formObj.subject == "" || formObj.amount == "") {
            customtoster(3, 'Missing info')
        }
        else {
            setMainData(prev => prev && prev.length ? [...prev, formObj] : [formObj]);
            setMainData(prev => {
                localStorage.setItem("ExpenseData", JSON.stringify(prev));
                return prev
            })
            handleRest();
            customtoster(2, 'Transaction Added');
        }

    }
    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-based
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
      };
    
    const handleRest = () => {
        setAmount("");
        setSubject("");
        selectRef.current.value = "";
        setSelectedDate('');
    }

    const customtoster = (type, message) => {
        if (type === 1) {
            toast.error(message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else if (type === 2) {
            toast.success(message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else if (type === 3) {
            toast.warn(message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const selectRef = useRef();
    const dateRef = useRef();
    return (
        <>
            <form onSubmit={handleForm}>
                <div className='opcty transition-all duration-700 w-screen px-2'>
                    <div className='flex justify-center mt-2'>
                        <select ref={selectRef} className='bg-amber-200/45 outline-none border-none shadow-sm shadow-black p-2 w-screen sm:w-[300px] text-center' name="reason">
                            <option value="">--select--</option>
                            <option value="1">Income</option>
                            <option value="2">Expense</option>
                        </select>
                    </div>
                    <InputBox
                        name={'subject'}
                        value={subject}
                        key={1}
                        type={'text'}
                        placeHolder={"Enter Subject"}
                        eventHandler={setSubject}
                        classes={"w-screen sm:w-[300px]"}
                    />
                    <InputBox
                        name={'amount'}
                        value={amount}
                        key={2}
                        type={'text'}
                        placeHolder={"Enter Amount"}
                        eventHandler={handleAmountInNumber}
                        classes={"w-screen sm:w-[300px]"}
                    />
                    <div className='mt-1 flex justify-center ' >
                        <DatePicker
                            selected={selectedDate}
                            onChange={date => setSelectedDate(date)}
                            className='shadow-sm shadow-black outline-none w-[95vw] sm:w-[300px] px-2 py-2'
                            dateFormat="dd-MM-yyyy"
                            placeholderText="Select a date"
                        />
                    </div>
                    <div className=' mt-1 flex justify-center '>
                        <input className='shadow-sm shadow-black px-2 py-1  w-screen sm:w-[300px] bg-green-500/45' type="submit" value="Add Transaction" />
                    </div>
                </div>
            </form>
            <div className='opcty mt-1 flex justify-center '>
                <button
                    onClick={handleRest}
                    className='shadow-sm shadow-black mx-2 py-1 w-screen bg-orange-500/45 sm:w-[300px] '>reset</button>
            </div>
            <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />

        </>
    )
}

export default EntryForm
