import express from "express"

import { regiser , login, logout } from "../Controllers/auth_controller.js"

const router = express.Router();

router.post("/register" , regiser)
router.post("/login" , login)
router.post("/logout", logout)
export default router;