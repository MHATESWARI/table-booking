import React from 'react'

const InputTag = ({ label, placeholder, type = "text", ...props }) => {
  return (
    <div className='pb-4'>
      <label htmlFor="" className='font-medium'>{label}</label>
      <br />
      <input
        type={type} placeholder={placeholder} className='border-1 p-3 opacity-100 w-[400px] rounded-xl py-[5px]' {...props}
      />
    </div>
  );
};

export default InputTag