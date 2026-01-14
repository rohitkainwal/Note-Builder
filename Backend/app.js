import express from "express"
import cookieParser from "cookie-parser"
import userRoutes from "./src/Routes/user_routes.js"
const app = express();
app.use(express.json());
app.use(cookieParser())
app.use("/api/user", userRoutes)
export default app;