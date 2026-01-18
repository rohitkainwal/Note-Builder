import User from "../Models/user_model.js";
import { generateToken } from "../Utils/jwt.util.js";
import bcrypt from "bcrypt"

// create user 

export const userRegister = async (req,res)=>{
    const {username, email,password}=req.body

    try {
        const existingUser = await User.findOne({email})
        if(existingUser){
            console.log("user already exist");
          return  res.status(401).json({message: "user already exist"})
        }
        
const hashPassword = await bcrypt.hash(password, 10);
        
        const newUser = await User.create({
            username,
            email,
            password:hashPassword
        })

       return res.status(201).json({message: "user created successfully", user: newUser})
    } catch (error) {
        console.log(error, "usercreatioin failed")
      return  res.status(500).json({message: "user creation failed"})
    }
}

export const userLogin = async(req,res,next)=>{
    const {email, password} = req.body
   try {
     const existingUser = await User.findOne({email})
    if(!existingUser){
       return res.status(401).json({success: false, message: "user not found"})
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password);



    if(!matchPassword){
       return res.status(401).json({ success: false, message: "password not matched"})
    }

    const token = generateToken(existingUser._id)
    console.log("TOKEN GENERATED:--",token);
    return res.cookie("token", token, { maxAge: 1 * 60 * 60 * 1000, httpOnly: true,})
    .status(201).json({success: true, message: "user logged in successfully"})

   } catch (error) {
   return res.status(400).json({success: false, message: "login failed"})
   }


}

export const currentUser = async (req,res,next) => {
  if(!req.user){
  return  res.status(401).json({success:false })
  } 
  
  const user = await User.findById(req.user._id)

  if(!user){
   return res.status(401).json({success:false, message: "user not found"})
  }

  return res.status(201).json({success:true, message: "user fetched successfully", user})
   
   

}