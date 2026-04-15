import express from "express"
import path from "path"
import { MongoClient, ObjectId } from "mongodb"
import { send } from "process"
import cors from "cors"


const app=express()
app.use(cors())
const publicpath=path.resolve("public")
app.use(express.static(publicpath))
app.use(express.urlencoded({extended:false}))
app.set("view engine","ejs")

const dbname="test"
const collectionname="schools"
const url="mongodb+srv://ajay:ajay@cluster0.mfxao.mongodb.net/?appName=Cluster0"
const client= new MongoClient(url)

const connection=async()=>{
 const   connect=await client.connect()
 return await connect.db(dbname)
}

app.get("/",async(req,res)=>{
    const db= await connection()
const collection=db.collection(collectionname)
const result=await collection.find().toArray()
// console.log(result)
// res.render("list",{result})
  res.json(result)
})
app.get("/add",(req,res)=>{
    res.render("add")
})
app.get("/update",(req,res)=>{
    res.render("update")
})
app.post("/update",(req,res)=>{
    res.redirect("/")
})
app.post("/add",async(req,res)=>{
const db= await connection()
const collection=db.collection(collectionname)
const result=await collection.insertOne(req.body)
if(result){
 res.redirect("/")
}else{ 
     res.redirect("/add")
}
   
})
app.get("/delete/:id",async(req,res)=>{
    const db= await connection()
const collection=db.collection(collectionname)
const result=await collection.deleteOne({_id:new ObjectId(req.params.id)})
  if(result){
 res.redirect("/")
}else{ 
     res.redirect("/add")
}
})

app.get("/update/:id", async (req, res) => {
  const id = req.params.id

  // ✅ ID validation
  if (!ObjectId.isValid(id)) {
    return res.send("Invalid ID")
  }

  const db = await connection()
  const collection = db.collection(collectionname)

  const result = await collection.findOne({
    _id: new ObjectId(id)
  })

  console.log(result)

  if (result) {
    // ✅ render page with data
    res.render("update", { data: result })
  } else {
    res.redirect("/add")
  }
})



app.post("/update/:id", async (req, res) => {
  const id = req.params.id

  if (!ObjectId.isValid(id)) {
    return res.send("Invalid ID")
  }

  const db = await connection()
  const collection = db.collection(collectionname)

  // ✅ correct filter
  const filter = { _id: new ObjectId(id) }

  // ✅ correct data
  const updatedata = {
    $set: {
      title: req.body.title,
      description: req.body.description
    }
  }

  const result = await collection.updateOne(filter, updatedata)

  console.log(result)

  // ✅ proper check
  if (result.modifiedCount > 0) {
    res.redirect("/")
  } else {
    res.send("No data updated")
  }
})




// login 

// app.get("/register", (req, res) => {
//   res.send("Register API working") // ya form render karo
// })

//post data  from react app

app.use(express.json())

app.post("/registerrrr", async (req, res) => {
  const db = await connection()
  const collection = db.collection("users")
console.log(req.body)
  await collection.insertOne(req.body)

  res.send({message:"save data"})
})


app.post("/login", async (req, res) => {
  const db = await connection()
  const collection = db.collection("users")

  const user = await collection.findOne({
    email: req.body.email,
    password: req.body.password
  })

  if (user) {
    res.send("Login Success")
  } else {
    res.send("Invalid Credentials")
  }
})
app.listen(3000)  