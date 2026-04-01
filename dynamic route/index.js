import express from "express"
import userdata from './users.json' with {type:'json'}
const app=express();


//==================== (api dynamic root)===================

app.get("/",(req,res)=>{
    console.log(userdata)
    res.send(userdata)
})
app.get("/user/:id",(req,res)=>{
    console.log(req.params.id)
    const id=req.params.id
    const filterdata=userdata.filter((u)=>u.id==id)

    res.send(filterdata)
})

app.get("/username/:name",(req,res)=>{
    console.log(req.params.name)
    const name=req.params.name
    const filterdata=userdata.filter((u)=>u.name.toLowerCase()==name.toLowerCase())

    res.send(filterdata)
})

app.listen(3000)