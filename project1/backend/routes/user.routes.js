import express from "express";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

// ✅ Protected List API
router.get("/list", verifyToken, (req, res) => {
  const data = [
    { id: 1, name: "Mobile", price: 10000 },
    { id: 2, name: "Laptop", price: 50000 },
    { id: 3, name: "TV", price: 30000 }
  ];

  res.json({
    msg: "Product List",
    user: req.user,
    data: data
  });
});

export default router;