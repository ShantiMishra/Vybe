import React from 'react'
import { useState } from 'react'
import logo from "../assets/logo2.png"
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

const SignIn = () => {

    const [inputClicked,setInputClicked]=useState({
      userName:false,
      password:false
    })



  return (
    <div className='w-full h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col justify-center items-center '>
      <div className='w-[90%] lg:max-w-[60%] h-[600px] bg-white rounded-2xl flex justify-center items-center overflow-hidden border-2 border-[#1a1f23]'>
        <div className='w-full lg:w-[50%] h-full bg-white flex flex-col items-center justify-center p-[10px] gap-[13px]'>

          <div className='flex gap-[10px] items-center text=[20px] font-semibold pb-[10px]'>
            <span>Sign In To </span>
            <img src={logo} alt="" className='w-[70px]'/>
          </div>
            
           
           {/* userName....... */}
          <div className='relative flex items-center justify-start w-[90%] h-[50px] rounded-2xl mt-[30px] border-2 border-black'onClick={()=>{setInputClicked({...inputClicked,userName:true})}}>
            <label htmlFor="userName" className={`text-gray-700 absolute left-[20px] px-[5px] bg-white text-[14px] ${inputClicked.userName?"top-[-15px]" : ""} `}>Enter Your UserName</label>
              <input type="text" id='userName' className='w-[100%] h-[100%] rounded-2xl px-[20px] outline-none border-0 ' required/>
            
          </div>
           
           {/* Password....... */}
           
          <div className='relative flex items-center justify-start w-[90%] h-[50px] rounded-2xl mt-[30px] border-2 border-black'onClick={()=>{setInputClicked({...inputClicked,password:true})}}>
            <label htmlFor="password" className={`text-gray-700 absolute left-[20px] px-[5px] bg-white text-[14px] ${inputClicked.password?"top-[-15px]" : ""} `}>Enter Password</label>
              <input type="password" id='password' className='w-[100%] h-[100%] rounded-2xl px-[20px] outline-none border-0 ' required/>
             
          </div>
          <button className='w-[60%] bg-black text-white py-[10px] px-[20px] mt-[30px] font-semibold cursor-pointer rounded-2xl hover:opacity-87'>Sign In</button>
         
        </div>
        <div className='md:w-[50%] h-full hidden lg:flex justify-center items-center bg-[#000000] flex-col gap-[10px] text-white text-[16px] font-semibold rounded-l-[25px] shadow-2xl shadow-black'>
 
 

        </div>
      </div>
      
    </div>
  )
}

export default SignIn
