import express from "express"
import userRoutes from "./src/Routes/user_routes.js"
const app = express();
app.use(express.json());
app.use("/api/user", userRoutes)

export default app;