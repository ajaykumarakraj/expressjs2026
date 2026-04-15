import express, { urlencoded } from "express"
import nodemailer from "nodemailer"
const app=express()

app.set('view engine','ejs')

const transpoter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"ajaykumarakraj1234@gmail.com",
        pass:"gdhj zyjg phwa qfuz"
    }
})
// get data and fetch by form 
// app.use(express.urlencoded({extended:false}))

//data by api

app.use(express.json())
app.get("/add-user",(req,res)=>{
res.render('adduser')
})

app.post("/submit-user",(req,res)=>{
     const mailoptions={
        from: 'ajaykumarakraj1234@gmail.com',
        to:"ajayrajpootofficial1234@gmail.com",
        subject:req.body.name,
         text:req.body.email
     }
     transpoter.sendMail(mailoptions,(error,info)=>{
        if(error){
            res.send("email operation failed")
        }else{
            res.send("mail send")
        }
     })
    console.log(req.body)
    res.render('submit',req.body)
})
app.get("/",(req,res)=>{
  
res.render('home')
})
app.listen(3200,()=>{
    console.log("server run")
})