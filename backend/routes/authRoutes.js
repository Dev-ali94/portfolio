import express from "express";
import { userMessage } from "../controllers/authController.js"
const router = express.Router();

router.post("/message", userMessage);

export default router;
