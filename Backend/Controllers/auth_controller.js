import asyncHandler from "express-async-handler"
import jwt from "jsonwebtoken"
import  User  from "../Models/user_model.js"


// create jwt token 
 const createToken = (userId) => jwt.sign({id: userId}, process.env.JWT_SECRET, {expiresIn: "7d"});

//register

export const regiser = asyncHandler (async (req,res)=>{
    const {name ,email, phone, password} = req.body;
    
    // check user exist
    const userExist =  await User.findOne({email});

    if (userExist){
        res.status(400).json({message:"user already exist"})
    }

    // create user

    const newUser = await User.create({
        name,
        email,
        phone,
        password
    });

    res.status(201).json({message: " user registered successfully ", newUser})

});

//login

export const login = asyncHandler (async (req,res)=>{
   const {email,password } =req.body;

   // find user 

   const getUser = await User.findOne({email});

   if(!getUser){
    res.status(400).json({message: "email does not exist"})
   }

// match password '''

if(getUser.password != password){
    res.status(400).json({message: "incorrect password "})
}
else{ res.status(200).json({message: "login seccess", getUser})}




});


// logout

export const logout = asyncHandler( async (req,res)=>{
    res.status(200).json({message: "logout successfully"})
});