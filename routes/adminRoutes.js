import express from "express";
const router = express.Router();
import { login } from "../controllers/adminControllers.js";
import verifyToken from "../middlewares/verifyToken.js";

router.post("/login", login);
router.post("/verify-token", verifyToken);

export default router;
