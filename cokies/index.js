import express from "express"
const app=express()
app.set("view engine","ejs")

app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{ 
    let cookiedata=req.get('cookie') 
    cookiedata=cookiedata.split(";")
     cookiedata=cookiedata[1].split("=")
    console.log(cookiedata[1])
    res.render("home")
})
app.get("/form",(req,res)=>{   
    res.render("form")
})

app.post("/profile",(req,res)=>{
    //  console.log(req.body)
     res.cookie("login", "true")
    res.cookie("name", req.body.name)
    res.render("profile")
})
app.listen(3000)