import { Router } from "express";
import { currentUser, userLogin, userRegister } from "../Controllers/auth_controller.js";
import { loginSchema, registerSchema } from "../validators/user.validator.js";
import { validate } from "../middlewares/validation.middleware.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register" , validate(registerSchema), userRegister)
router.post("/login",validate(loginSchema), userLogin)
router.get("/profile", authenticate, currentUser)

export default router