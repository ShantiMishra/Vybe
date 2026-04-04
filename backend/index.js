import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import cookieParser from "cookie-parser"
import cors from 'cors'
import authRouter from "./routes/auth.routes.js"
dotenv.config()

const app = express()

const port = process.env.PORT 

app.use(cors({
    origin:"http://localhost:5173",
    withCredentials:true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRouter)  



app.listen(port,()=>{
    connectDb()
    console.log(`Server started at port ${port}`)
})