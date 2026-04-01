import express from "express"
import { MongoClient } from "mongodb"
const app=express()

const dbname="test"
const url="mongodb://localhost:2721"




app.get("/",(req,res)=>{
    res.send("hello")
})
app.listen(3000)