import { Router } from "express";
import { signupUser, loginUser, getCurrentUser, getUser, editUser } from "../controllers/auth.controller";
import protect from "../middlewares/auth.middleware";

const router = Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/getcurrentuser", protect, getCurrentUser);
router.post("/getuser", protect, getUser);
router.post("/edituser", protect, editUser);

export default router;
