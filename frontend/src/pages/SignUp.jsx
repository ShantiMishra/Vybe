import React, { useState } from 'react'
import logo from "../assets/logo2.png"
import logo2 from "../assets/logo(vybe).png"
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
const SignUp = () => {

    const [inputClicked,setInputClicked]=useState({
      name:false,
      userName:false,
      email:false,
      password:false
    })

const [showPassword,setShowpassword] = useState(false)

const [name,setName] = useState("")
const [userName,setUserName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

  return (
    <div className='w-full h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col justify-center items-center '>
      <div className='w-[90%] lg:max-w-[60%] h-[600px] bg-white rounded-2xl flex justify-center items-center overflow-hidden border-2 border-[#1a1f23]'>
        <div className='w-full lg:w-[50%] h-full bg-white flex flex-col items-center justify-center p-[10px] gap-[20px]'>

          <div className='flex gap-[10px] items-center text=[20px] font-semibold pb-[10px]'>
            <span>Sign Up To </span>
            <img src={logo} alt="" className='w-[70px]'/>
          </div>
            
            {/* Name....... */}
          <div className='relative flex items-center justify-start w-[90%] h-[50px] rounded-2xl border-2 border-black'onClick={()=>{setInputClicked({...inputClicked,name:true})}}>
            <label htmlFor="name" className={`text-gray-700 absolute left-[20px] px-[5px] bg-white text-[14px] ${inputClicked.name?"top-[-15px]" : ""} `}>Enter Your Name</label>
              <input type="text" id='name' className='w-[100%] h-[100%] rounded-2xl px-[20px] outline-none border-0 ' onChange={(e)=>setName(e.target.value)} required/>
            
          </div>
           {/* userName....... */}
          <div className='relative flex items-center justify-start w-[90%] h-[50px] rounded-2xl  border-2 border-black'onClick={()=>{setInputClicked({...inputClicked,userName:true})}}>
            <label htmlFor="userName" className={`text-gray-700 absolute left-[20px] px-[5px] bg-white text-[14px] ${inputClicked.userName?"top-[-15px]" : ""} `}>Enter Your UserName</label>
              <input type="text" id='userName' className='w-[100%] h-[100%] rounded-2xl px-[20px] outline-none border-0 ' onChange={(e)=>setUserName(e.target.value)} required/>
            
          </div>
           {/* Email....... */}
          <div className='relative flex items-center justify-start w-[90%] h-[50px] rounded-2xl border-2 border-black'onClick={()=>{setInputClicked({...inputClicked,email:true})}}>
            <label htmlFor="email" className={`text-gray-700 absolute left-[20px] px-[5px] bg-white text-[14px] ${inputClicked.email?"top-[-15px]" : ""} `}>Enter Your Email Id</label>
              <input type="email" id='email' className='w-[100%] h-[100%] rounded-2xl px-[20px] outline-none border-0 ' onChange={(e)=>setEmail(e.target.value)} required/>
            
          </div>
           {/* Password....... */}
          <div className='relative flex items-center justify-start w-[90%] h-[50px] rounded-2xl  border-2 border-black'onClick={()=>{setInputClicked({...inputClicked,password:true})}}>
            <label htmlFor="password" className={`text-gray-700 absolute left-[20px] px-[5px] bg-white text-[14px] ${inputClicked.password?"top-[-15px]" : ""} `}>Enter Password</label>
              <input type={showPassword?"text":"password"} id='password' className='w-[100%] h-[100%] rounded-2xl px-[20px] outline-none border-0 ' onChange={(e)=>setPassword(e.target.value)} required/>
            {!showPassword?  <IoIosEye className='absolute cursor-pointer right-[20px] w-[25px] h-[25px]' onClick={()=>setShowpassword(true)}/>: <IoIosEyeOff className='absolute cursor-pointer right-[20px] w-[25px] h-[25px]' onClick={()=>setShowpassword(false)}  />}
          </div>

          <button className='w-[60%] bg-black text-white py-[10px] px-[20px] mt-[30px] font-semibold cursor-pointer rounded-2xl hover:opacity-87'>Sign Up</button>

          <p className='cursor-pointer text-gray-800'>Already have an account ? <span className='border-b-2 border-b-black text-black'>Sign In</span></p>
         
        </div>
        <div className='md:w-[50%] h-full hidden lg:flex justify-center items-center bg-[#000000] flex-col gap-[10px] text-white text-[16px] font-semibold rounded-l-[25px] shadow-2xl shadow-black'>
          <img src={logo2} className='w-[40%]' alt="" />
          <p>Not Just A Platform , It's  A VYBE</p>

        </div>
        
      </div>
     
    </div>
  )
}

export default SignUp
