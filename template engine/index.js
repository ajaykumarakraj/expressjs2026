import express, { urlencoded } from "express"
const app=express()


app.set('view engine','ejs')

// pass data 
// app.get("/",(req,res)=>{
//     res.render("home",{name:"ajay test ejs file",company:"future key"})
// })

// get data and fetch by form 
app.use(express.urlencoded({extended:false}))

app.get("/add-user",(req,res)=>{
res.render('adduser')
})

app.post("/submit-user",(req,res)=>{
     
    console.log(req.body)
    res.render('submit',req.body)
})

app.listen(3000,()=>{
    console.log("server run")
})