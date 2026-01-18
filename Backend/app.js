import express from "express"
import cookieParser from "cookie-parser"
import userRoutes from "./src/Routes/user_routes.js"
import cors from "cors"
const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser())
app.use("/api/user", userRoutes)
export default app;