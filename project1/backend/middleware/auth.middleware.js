
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  console.log("HEADER:", authHeader); // 👈 debug

  if (!authHeader) {
    return res.status(401).json({ msg: "No token" });
  }

  const token = authHeader.split(" ")[1];

  console.log("TOKEN:", token); // 👈 debug

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.log("ERROR:", err.message); // 👈 debug
    return res.status(401).json({ msg: "Invalid token" });
  }
};