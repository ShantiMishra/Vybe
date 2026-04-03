import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    profileImage:{
        type:String
    },
    followers:[
        {type:mongoose.Schema.Types.ObjectId,   
            ref:"User"
        }
    ]

},{timestamps:true})