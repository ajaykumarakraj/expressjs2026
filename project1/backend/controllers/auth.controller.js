import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

 await User.create({
  name,
  email,
  password: hash,
  role: "admin"   
});

  res.json({ msg: "Registered" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ msg: "Wrong password" });

  const token = generateToken(user);

  res.json({ token });
};