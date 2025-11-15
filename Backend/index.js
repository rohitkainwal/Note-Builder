import dotenv from "dotenv"
import app from "./app.js"
import { connectDB } from "./Config/db.js";

dotenv.config();
connectDB();
const port = process.env.port

app.listen(port, ()=>{
    console.log(`app is runnig at port : ${port}`)
})