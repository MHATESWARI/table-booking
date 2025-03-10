import React from 'react'
import InputTag from './InputTag'

const SignUpPage = () => {
    return (
        <div className='container'>
            <div className='main border-2 h-130 w-130 mt-20 ml-140 shadow-2xl rounded-2xl'>
                <div className='name  h-160 w-130 ml-10 mt-10 '>
                    <div className='name flex justify-center  h-10 w-110 ml-4 mt-2 p-1.5 font-extrabold text-2xl'>LOGIN</div>
                    <div className='content h-90 w-110 ml-2 mt-4 font-medium'>
                        <div className='ml-5 mt-10'>
                            <InputTag label="Username:" placeholder="Enter your name" />
                            <InputTag label="Email:" placeholder="Enter your Email-id" />
                            <InputTag label="Password:" placeholder="Enter your password" />
                            <div className='submit flex justify-center'>
                                <button className='border w-50 mt-8 rounded-3xl p-2 m-[-6px] bg-gray-200 hover:bg-gray-300 focus:outline-2 focus:outline-gray-200 active:bg-gray-300'>submit</button>
                            </div>
                            <div className='forget flex justify-center mt-5 underline cursor-pointer decoration-red-500'>Forget password</div>



                        </div>


                    </div>
                </div>


            </div>


        </div>
    )
}
export default SignUpPage