import express from "express"
import mongoose from "mongoose"
import schoolModel from "./model/modelcompany.js"
const app=express()

// dataBASE  CONNECT
// const schema=mongoose.Schema({
//     name:String,
//     email:String,
//     age:Number
// })

// async function dbconn(){
// await mongoose.connect("mongodb+srv://ajay:ajay@cluster0.mfxao.mongodb.net/?appName=Cluster0")
// const schoolmodel = mongoose.model("company", schema, "company")
// const result =await schoolmodel.find()
// console.log(result)
// }
// dbconn()



// data get from database by mongoose 

//  await mongoose.connect("mongodb+srv://ajay:ajay@cluster0.mfxao.mongodb.net/?appName=Cluster0").then(()=>{
//     console.log("------connect------")
//  })
// app.get("/",async(req,res)=>{
//   const  schooldata=await schoolModel.find()
//     res.send(schooldata)
// })



// data post data in database by mongoose 
// app.use(express.json())
// await mongoose.connect("mongodb+srv://ajay:ajay@cluster0.mfxao.mongodb.net/?appName=Cluster0").then(()=>{
//     console.log("------connect------")
//  })
//  app.post("/save",async(req,res)=>{
// console.log(req.body)
// const {name,age,email}=req.body
// if(!req.body||!name||!age||!email){
// res.send({
//     mesage:"data not stored",
//     succes:false,
//     datainfo:null
// })
// return false
// }
// const schooldata=await schoolModel.create(req.body)

// res.send({
//     mesage:"data stored",
//     succes:true,
//     datainfo:schooldata
// })
//  })


// update data 
// await mongoose.connect("mongodb+srv://ajay:ajay@cluster0.mfxao.mongodb.net/?appName=Cluster0").then(()=>{
//     console.log("------connect------")
//  })
// app.use(express.json())
// app.put("/update/:id",async(req,res)=>{
//     const id=req.params.id
//     console.log(req.body,id)
//     const data=await schoolModel.findByIdAndUpdate(id,{...req.body})
//     res.send({
//         message:"data updated",
//         success:true
//     })
// })

// delete data 
// await mongoose.connect("mongodb+srv://ajay:ajay@cluster0.mfxao.mongodb.net/?appName=Cluster0").then(()=>{
//      console.log("------connect------")
// })

// app.delete("/delete/:id",async(req,res)=>{
// console.log(req.params.id)
// const id=req.params.id
// const data=await schoolModel.findByIdAndDelete(id)
// res.send({
//     message:"delete success",
//     success:true
// })
// })

// cors issue 

// import cors from "cors"
// app.use(cors())
// app.get("/",(req,res)=>{
//     res.send({
//         name:"ajay",
//         email:"jkfdskj@gmail.com"
//     })
// })


// file upload 
import multer from "multer"

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"upload")
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    },
})


//// const upload=multer({dest:"upload"})
const upload=multer({storage})
app.get("/",(req,res)=>{
    res.send(`
       <form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="myfile"/>
        <button>upload file</button>
       </form>
        
        `)
})

app.post("/upload",upload.single('myfile'), (req,res)=>{
    res.send({
        message:"upload file",
        info:req.file
    })
})

app.listen(3000)
