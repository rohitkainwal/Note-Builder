import mongoose from "mongoose"

const connectDB = async ()=>{
   try {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`mongodb is connected with ${conn.connection.host}`);
    
   } catch (error) {
    console.log("error in connecting db", error);
    process.exit(1)
    
   }
}

export default connectDB;