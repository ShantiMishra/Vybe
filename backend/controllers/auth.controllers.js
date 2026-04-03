import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

export const signUp = async (req,res)=>{
    try {
        const {name,email,password,userName} = req.body
         
        //Find by email
        const findByEmail = await User.findOne({email})
        if(findByEmail){
            return res.status(400).json({message:"Email already exist !"})
        }
        
        // Find by username 
        const findByUserName = await User.findOne({email})
        if(findByUserName){
            return res.status(400).json({message:"UserName already exist !"})
        }

        const hassedpassword = await bcrypt.hash(password,10)

        const user = await User.create({
            name,
            userName,
            email,
            password:hassedpassword
        })

        

    } catch (error) {
        
    }
}