import React from 'react';



const InputBox=({type="text",placeHolder,eventHandler=function(){},value,name,classes=""}) => {
    const ChangeHandle=(e)=>{
        eventHandler(e.target.value);
    }
  return (
    <>
    <div className='flex justify-center mt-1'>
        <input 
        type={type}
        placeholder={placeHolder}
        onChange={ChangeHandle}
        className={`outline-none shadow-sm shadow-black pl-1 borderounded-sm p-1  ${classes}`}
        value={value}
        name={name}
        />
    </div>
    </>
  )
}

export default InputBox
