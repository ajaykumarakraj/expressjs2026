import mongoose from "mongoose";
const schoolSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
}, { strict: true })
export default schoolSchema