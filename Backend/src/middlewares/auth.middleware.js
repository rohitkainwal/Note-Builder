import jwt from "jsonwebtoken"
import User from "../Models/user_model.js"

export const authenticate = async (req,res,next) => {

    const token = req.cookies.token;
    console.log("token injected : auth muddleware executed " , token);

    const decodeToken = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decodeToken.id)
     if(!user){
        console.log("user id not found");
        
     }

     req.user = user;
    
    next();
}