import User from "../models/user.model.js"

export const getCurrentUser = async (req,res) =>{
    try {
       const userId = req.userId
       const user = await User.findById(userId) 
       if(!user){
        return res.status(400).json({message:"User Not Found !"})
       }

       return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json({message:`getCurrent user error ${error}`})
    }
}