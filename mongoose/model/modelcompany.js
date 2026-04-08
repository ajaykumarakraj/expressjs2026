import mongoose from "mongoose";
import schoolSchema from "../schema/schoolSchema.js";
const Modelfun = mongoose.model("company", schoolSchema,"company")
export default Modelfun