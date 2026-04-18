import React, { useState } from 'react'

const ForgotPassword = () => {

const [step,setStep] = useState(1)
const [inputClicked,setInputClicked]=useState({
    email:false
})


  return (
    <div className='w-full h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col justify-center items-center '>

       {step==1 && <div className='w-[90%] max-w-[500px] h-[500px] bg-white rounded-2xl flex  justify-center items-center flex-col border-[#1f1c1c]'>
       <h2 className='text-[30px] font-semibold'>Forgot Password</h2>
       {/* Email....... */}
          <div className='relative flex items-center justify-start w-[90%] h-[50px] rounded-2xl border-2 border-black'onClick={()=>{setInputClicked({...inputClicked,email:true})}}>
            <label htmlFor="email" className={`text-gray-700 absolute left-[20px] px-[5px] bg-white text-[14px] ${inputClicked.email?"top-[-15px]" : ""} `}>Enter Your Email Id</label>
              <input type="email" id='email' className='w-[100%] h-[100%] rounded-2xl px-[20px] outline-none border-0 ' onChange={(e)=>setEmail(e.target.value)} required/>
            
          </div>
        </div>}
        
      
    </div>
  )
}

export default ForgotPassword
