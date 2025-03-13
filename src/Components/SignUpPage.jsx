import React from "react";
import InputTag from './InputTag'




const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="bg-green-50 shadow-2xl rounded-2xl p-6 md:p-8 w-110">
        <h2 className="text-2xl font-bold text-center mb-6">LOGIN</h2>
        
        <div className="space-y-4">
          
          <InputTag label="Email:" placeholder="Enter your Email-id" type="email" />
          <InputTag label="Password:"  placeholder="Enter your password" type="password" />
        </div>

        <div className="mt-6 flex justify-center">
          <button className="w-full bg-green-200 hover:bg-green-300 text-black font-medium py-2 rounded-xl transition focus:outline-none focus:ring-2 focus:ring-green-200 active:bg-green-400">
            Login
          </button>
        </div>

        <div className="text-center mt-4">
          <h1 className="text-red-500 underline cursor-pointer">Forgot Password?</h1>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage
