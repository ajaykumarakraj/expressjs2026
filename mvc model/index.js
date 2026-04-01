import express from "express"
import { handleuser } from "./controller/usercontroller.js"
const app=express()

// mvc model 
app.set("view engine","ejs")
app.get("/user",handleuser)





app.listen(3000)