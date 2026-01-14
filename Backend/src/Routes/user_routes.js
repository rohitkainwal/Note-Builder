import { Router } from "express";
import { userLogin, userRegister } from "../Controllers/auth_controller.js";
import { registerSchema } from "../validators/user.validator.js";
import { validate } from "../middlewares/validation.middleware.js";

const router = Router();

router.post("/register" , validate(registerSchema), userRegister)
router.post("/login", userLogin)

export default router