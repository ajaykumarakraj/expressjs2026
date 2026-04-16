import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
dotenv.config();
import cors from "cors"
const app = express();
app.use(express.json());
app.use(cors())
connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);


app.use("/api/products", productRoutes);
app.listen(process.env.PORT, () =>
  console.log("Server running")
);