import express from "express"
import router from "./Routes/user_routes.js";
const app = express()

app.use(express.json())
app.use("/api/user", router)

export default app;