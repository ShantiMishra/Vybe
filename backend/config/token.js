import jwt from "jsonwebtoken"

const genToken=async (userId)=>{
  try {
    const token = await jwt.sign({userId},)
  } catch (error) {
    
  }
}