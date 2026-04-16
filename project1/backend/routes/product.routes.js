import express from "express";
import { addProduct, getProducts } from "../controllers/product.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";
import { isAdmin } from "../middleware/role.middleware.js";

const router = express.Router();

// 👉 Admin ही product add कर सकता है
router.post("/add", verifyToken, isAdmin, addProduct);

// 👉 सब लोग products देख सकते हैं
router.get("/", getProducts);

export default router;