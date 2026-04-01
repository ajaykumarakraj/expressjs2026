import express from "express"
const app=express();

// dynamic route 

app.get("/",(req,res)=>{
    const users=["ajay","anil","ram","shyam","dhgfgg"]
   let data=`<ul>`
    for(let i=0;i<users.length;i++){
        console.log(users[i])
data+=`<li><a href="user/${users[i]}">${users[i]}</a></li>`
    }
    data+=`</ul>`
    res.send(data)
})

app.get("/user/:name",(req,res)=>{
    console.log(req.params.name)
    const username=req.params.name
    res.send(`this is user ${username}`)
})

const PORT=3000
app.listen(PORT,()=>{
    console.log(`locallhost run at ${PORT}`)
})