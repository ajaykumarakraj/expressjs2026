import express from "express"
import { handleuser } from "./controller/usercontroller.js"
const app=express()


app.set("view engine","ejs")
app.get("/user",handleuser)


app.listen(3000)