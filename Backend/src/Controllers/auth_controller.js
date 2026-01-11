import User from "../Models/user_model.js";

// create user 

export const userRegister = async (req,res)=>{
    const {username, email,password}=req.body

    try {
        const existingUser = await User.findOne({email})
        if(existingUser){
            console.log("user already exist");
            res.status(401).json({message: "user already exist"})
        }
        
        const newUser = await User.create({
            username,
            email,
            password
        })

        res.status(201).json({message: "user created successfully", user: newUser})
    } catch (error) {
        console.log(error, "usercreatioin failed")
        res.status(500).json({message: "user creation failed"})
    }
}

export const userLogin = async(req,res)=>{
    const {email, password} = req.body
   try {
     const existingUser = await User.findOne({email})
    if(!existingUser){
        res.status(401).json({message: "user not found"})
    }


    if(existingUser.password !== password){
        res.status(401).json({message: "password not matched"})
    }

    res.status(201).json({message: "user logged in successfully"})

   } catch (error) {
    res.status(400).json({message: "login failed"})
   }


}