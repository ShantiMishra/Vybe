import React, { useState, useSyncExternalStore } from 'react'
import { ClipLoader } from 'react-spinners'

const ForgotPassword = () => {

const [step,setStep] = useState(3)
const [inputClicked,setInputClicked]=useState({
    email:false,
    otp:false,
    newPassword:false,
    confirmPassword:false
})

const [email,setEmail] = useState("");
const [otp,setOtp] = useState("")
const [loading,setLoading] = useState(false)
const [newPassword,setNewPassword] = useState("")
const [confirmNewPassword,setConfirmNewPassword] = useState("")

  return (
    <div className='w-full h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col justify-center items-center '>

       {step==1 && <div className='w-[90%] max-w-[500px] h-[500px] bg-white rounded-2xl flex  justify-center items-center flex-col border-[#1f1c1c]'>
       <h2 className='text-[30px] font-semibold mb-[30px]'>Forgot Password</h2>
       {/* Email....... */}
          <div className='relative flex items-center justify-start w-[90%] h-[50px] rounded-2xl border-2 border-black'onClick={()=>{setInputClicked({...inputClicked,email:true})}}>
            <label htmlFor="email" className={`text-gray-700 absolute left-[20px] px-[5px] bg-white text-[14px] ${inputClicked.email?"top-[-15px]" : ""} `}>Enter Your Email Id</label>
              <input type="email" id='email' className='w-[100%] h-[100%] rounded-2xl px-[20px] outline-none border-0 ' onChange={(e)=>setEmail(e.target.value)} required/>
            
          </div>
           {/* SignUp Button...... */}
          <button className='w-[60%] bg-black text-white py-[10px] px-[20px] mt-[30px] font-semibold cursor-pointer rounded-2xl hover:opacity-87' disabled={loading}> {loading?<ClipLoader size={30} color='white'/>:"Send OTP"}</button>

        </div>}

       {step==2 && <div className='w-[90%] max-w-[500px] h-[500px] bg-white rounded-2xl flex  justify-center items-center flex-col border-[#1f1c1c]'>
       <h2 className='text-[30px] font-semibold mb-[30px]'>Forgot Password</h2>
       {/* OTP....... */}
          <div className='relative flex items-center justify-start w-[90%] h-[50px] rounded-2xl border-2 border-black'onClick={()=>{setInputClicked({...inputClicked,otp:true})}}>
            <label htmlFor="otp" className={`text-gray-700 absolute left-[20px] px-[5px] bg-white text-[14px] ${inputClicked.otp?"top-[-15px]" : ""} `}>Enter OTP</label>
              <input type="text" id='otp' className='w-[100%] h-[100%] rounded-2xl px-[20px] outline-none border-0 ' onChange={(e)=>setOtp(e.target.value)} required/>
            
          </div>
           {/* Submit Button...... */}
          <button className='w-[60%] bg-black text-white py-[10px] px-[20px] mt-[30px] font-semibold cursor-pointer rounded-2xl hover:opacity-87' disabled={loading}> {loading?<ClipLoader size={30} color='white'/>:"Submit"}</button>

        </div>}

       { step==3 && <div className='w-[90%] max-w-[500px] h-[500px] bg-white rounded-2xl flex  justify-center items-center flex-col border-[#1f1c1c]'>
       <h2 className='text-[30px] font-semibold mb-[30px]'>Reset Password</h2>
       {/* newpassword....... */}
          <div className='relative flex items-center justify-start w-[90%] h-[50px] rounded-2xl border-2 border-black mb-[20px]'onClick={()=>{setInputClicked({...inputClicked,newPassword:true})}}>
            <label htmlFor="newPassword" className={`text-gray-700 absolute left-[20px] px-[5px] bg-white text-[14px] ${inputClicked.newPassword?"top-[-15px]" : ""} `}>Create New Password</label>
              <input type="text" id='newPassword' className='w-[100%] h-[100%] rounded-2xl px-[20px] outline-none border-0 ' onChange={(e)=>setNewPassword(e.target.value)} required/>
            
          </div>
          <div className='relative flex items-center justify-start w-[90%] h-[50px] rounded-2xl border-2 border-black'onClick={()=>{setInputClicked({...inputClicked,confirmNewPassword:true})}}>
            <label htmlFor="confirmNewPassword" className={`text-gray-700 absolute left-[20px] px-[5px] bg-white text-[14px] ${inputClicked.otp?"top-[-15px]" : ""} `}>Confirm New Password</label>
              <input type="text" id='confirmNewPassword' className='w-[100%] h-[100%] rounded-2xl px-[20px] outline-none border-0 ' onChange={(e)=>setConfirmNewPassword(e.target.value)} required/>
            
          </div>
           {/* Submit Button...... */}
          <button className='w-[60%] bg-black text-white py-[10px] px-[20px] mt-[30px] font-semibold cursor-pointer rounded-2xl hover:opacity-87' disabled={loading}> {loading?<ClipLoader size={30} color='white'/>:"Reset Password"}</button>

        </div>}
      
    </div>
  )
}

export default ForgotPassword
