import jwt from 'jsonwebtoken'

const isAuth = async(req,res,next)=>{
    try {
        const token = req.cookies.token
        if(!token){
            return res.status(400).json({message:"token not found"})
        }

        const verifyToken=await jwt.verify(token,process.env.JWT_SCERET)
        req.userId=verifyToken.userId

        next()
    } catch (error) {
        return res.status(400).json({message:`is auth error ${error}`})
    }
}

export default isAuth;