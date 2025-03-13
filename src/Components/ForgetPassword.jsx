import React from "react";


const ForgetPassword = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="bg-green-50 shadow-2xl rounded-2xl p-6 md:p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password?</h2>

        <p className="text-gray-600 text-center mb-4">
          Enter your Phone Number to get OTP.
        </p>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Phone-Number:</label>
          <input
            type="email"
            placeholder="Enter your Phone-Number"
            className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
          />
        </div>

        <div className="mt-6 flex justify-center">
          <button className="w-full bg-green-200 hover:bg-green-300 text-black font-medium py-2 rounded-xl transition focus:outline-none focus:ring-2 focus:ring-green-300 active:bg-green-400">
            Send OTP
          </button>
        </div>

        <div className="text-center mt-4">
          <a href="" className="text-blue-500 underline">Back to Login</a>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
