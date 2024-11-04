import express from "express";
import { login } from "../controllers/userController.js";
import {
  getLenders,
  updateLenderBookmark,
} from "../controllers/lenderController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("/login", login);

// Protected routes
router.get("/lenders", authMiddleware, getLenders);
router.post("/lenders/bookmark", authMiddleware, updateLenderBookmark);

export default router;
