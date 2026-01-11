import dotenv from "dotenv"
import app from "./app.js";
import connectDB from "./src/Config/db.js";


dotenv.config();
connectDB();
const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`);
    
})