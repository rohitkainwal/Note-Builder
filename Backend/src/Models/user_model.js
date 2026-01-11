import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }

},{timestamps:true})

const User = mongoose.model("user", userSchema)
export default User