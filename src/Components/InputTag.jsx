import React from 'react'

const InputTag = ({ label, placeholder, type = "text" }) => {
  return (
    <div className="mb-4 flex">
      <label className="block  font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className=" flex justify-center w-full p-2 ml-6 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
      />
    </div>
  );
};

export default InputTag