import express, { urlencoded } from "express"
import session from "express-session"
const app=express()

app.use(session({
    secret:"apple"
}))
app.set('view engine','ejs')


// get data and fetch by form 
app.use(express.urlencoded({extended:false}))

app.get("/add-user",(req,res)=>{
res.render('adduser')
})

app.post("/submit-user",(req,res)=>{
     req.session.data=req.body
    //  console.log(req.session.data)
    // console.log(req.body)
    res.render('submit',req.body)
})
app.get("/",(req,res)=>{
    const data=req.session.data
    console.log("data",data)
res.render('home')
})
app.listen(3200,()=>{
    console.log("server run")
})