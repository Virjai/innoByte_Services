import { Router } from "express";
import { signUpHandler } from "../controllers/user.controllers.js";

const router = Router()

router.route('/sign-up').post(signUpHandler)


export default router