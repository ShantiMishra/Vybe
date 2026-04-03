import genToken from "../config/token.js"
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

// SignUp
export const signUp = async (req,res)=>{
    try {
        const {name,email,password,userName} = req.body
         
        //Find by email
        const findByEmail = await User.findOne({email})
        if(findByEmail){
            return res.status(400).json({message:"Email already exist !"})
        }
        
        // Find by username 
        const findByUserName = await User.findOne({userName})
        if(findByUserName){
            return res.status(400).json({message:"UserName already exist !"})
        }

        if(password.length<6){
            return res.status(400).json({message:"Password must be atleast 6 characters !"})
        }

        const hassedpassword = await bcrypt.hash(password,10)

        const user = await User.create({
            name,
            userName,
            email,
            password:hassedpassword
        })

        const token = await genToken(user._id)

        res.cookie("token",token,{
            httpOnly:true,
            maxAge:10*365*24*60*60*1000,
            secure:false,
            sameSite:"Strict"
        })

        return res.status(201).json(user)

        

    } catch (error) {
        return res.status(500).json({message:`signup error ${error}`})
    }
}


//SignIn
export const signIn = async (req,res)=>{
    try {
        const {password,userName} = req.body
         
       
        // Find by username 
        const user = await User.findOne({userName})
        if(!user){
            return res.status(400).json({message:"User Not Found !"})
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.status(400).json({message:"Incorrect Password !"})
        }

       

        const token = await genToken(user._id)

        res.cookie("token",token,{
            httpOnly:true,
            maxAge:10*365*24*60*60*1000,
            secure:false,
            sameSite:"Strict"
        })

        return res.status(201).json(user)

        

    } catch (error) {
        return res.status(500).json({message:`signup error ${error}`})
    }
}


//SignOut/Logout
export const signOut = async (req,res)=>{
    try {
        res.clearCookie("token")
        res.status(200).json({message:"SignOut successfully"})
    } catch (error) {
        res.status(400).json({message:`sign out error ${error}`})
    }
}

