import React from 'react'
import logo from "../assets/logo2.png"

const SignUp = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col justify-center items-center '>
      <div className='w-[90%] lg:max-w-[60%] h-[600px] bg-white rounded-2xl flex justify-center items-center overflow-hidden border-2 border-[#1a1f23]'>
        <div className='w-full lg:w-[50%] h-full bg-white flex felx-col items-center justify-center p-[10px] gap-[20px]'>

          <div className='flex gap-[10px] items-center text=[20px] font-semibold '>
            <span>Sign Up To </span>
            <img src={logo} alt="" className='w-[70px]'/>
          </div>

          <div>
            <label htmlFor="name">
              <input type="text" id='name' />
            </label>
          </div>
         
        </div>
        <div className='md:w-[50%] h-full hidden lg:flex justify-center items-center bg-[#000000] flex-col gap-[10px] text-white text-[16px] font-semibold rounded-l-[25px] shadow-2xl shadow-black'>

        </div>
      </div>
      
    </div>
  )
}

export default SignUp
