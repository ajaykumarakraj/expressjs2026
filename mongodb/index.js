import express, { urlencoded } from "express"
import { Collection, MongoClient,ObjectId  } from "mongodb"

const app = express()


//db connection

// const dbName = "test"
// const url = "mongodb+srv://ajay:ajay@cluster0.mfxao.mongodb.net/?appName=Cluster0"
// const client = new MongoClient(url)

// Connect to database
// async function connectDB() {
//  await client.connect()
//  console.log("MongoDB Connected ")
//  const db=client.db(dbName)
//  const collection=db.collection('users')
// const result = await collection.find().toArray()
//  console.log(result)
// }
// connectDB()


// show ui on browser 
// const dbName = "test"
// const url = "mongodb+srv://ajay:ajay@cluster0.mfxao.mongodb.net/?appName=Cluster0"
// const client = new MongoClient(url)
 

// app.set("view engine","ejs")
// app.get("/", async(req, res) => {
//   await client.connect()
//  console.log("MongoDB Connected ")
//  const db=client.db(dbName)
//  const collection=db.collection('company')
// const result = await collection.find().toArray()
//  console.log(result)
//   res.render("home",{result})
// })





// another way to fetch data 
// const dbName = "test"
// const url = "mongodb+srv://ajay:ajay@cluster0.mfxao.mongodb.net/?appName=Cluster0"
// const client = new MongoClient(url)
// client.connect().then((connection)=>{
//   const db=connection.db(dbName)

// app.get("/api",async(req,res)=>{
//   const collection=db.collection("company")
//   const result=await collection.find().toArray()
//   console.log(result)
//   res.send(result)
// })

// })


// add data 
// const dbName = "test"
// const url = "mongodb+srv://ajay:ajay@cluster0.mfxao.mongodb.net/?appName=Cluster0"
// const client = new MongoClient(url)
// app.set("view engine","ejs")
// app.use(express.urlencoded({extended:false}))  ///////html form se data send karne ke liye

// app.get("/add",(req,res)=>{
//   res.render('form')
// })


//  client.connect().then((connection)=>{
//    const db=connection.db(dbName)
// app.post("/submit",async(req,res)=>{
//   console.log(req.body)

//   const collection=db.collection("company")
//   const result=await collection.insertOne(req.body)
//   console.log(result)
//   res.send("save data")
// })})


// post data 
// const dbName = "test"
// const url = "mongodb+srv://ajay:ajay@cluster0.mfxao.mongodb.net/?appName=Cluster0"
// const client = new MongoClient(url)
// app.use(express.json())  /// /// json formate m data send karne ke liye

//  client.connect().then((connection)=>{
//    const db=connection.db(dbName)

// app.post("/add-data",async(req,res)=>{
//   console.log(req.body)
//   const {name,age,email}=req.body
//   if(!name ||!age||!email){
//     res.send({message:"operation failed ",success:false})
//     return false
//   }
//   const collection=db.collection("company")
//   const result=await collection.insertOne(req.body)
//     // res.send({message:"success"})
//   res.send({message:"data stored",success:true,result:result})
// })
//  })



// delete data 
// const dbName = "test"
// const url = "mongodb+srv://ajay:ajay@cluster0.mfxao.mongodb.net/?appName=Cluster0"
// const client = new MongoClient(url)


// client.connect().then((connection)=>{
//    const db=connection.db(dbName)
// app.delete("/delete/:id",async(req,res)=>{
//   console.log(req.params.id)
//   const datadelete=db.collection("company")
//   const result=await datadelete.deleteOne({_id:new ObjectId(req.params.id)})
//   if(result){
//     res.send({
//       message:"student data deleted",
//       success:true
//     })
//   }else{
//       res.send({
//       message:"student data not deleted try after some time",
//       success:false
//     })
//     }
//   res.send("working")
// })
// })




// client.connect().then((connection)=>{
//    const db=connection.db(dbName)
// app.get("/ui/delete/:id",async(req,res)=>{
//   console.log(req.params.id)
//   const datadelete=db.collection("company")
//   const result=await datadelete.deleteOne({_id:new ObjectId(req.params.id)})
//   if(result){
//     res.send('<h1>deleted data</h1>')
//   }else{
//       res.send('<h1>deleted not data</h1>')
//     }
//   // res.send("working")
// })
// })




// get data by id 

app.set("view engine","ejs")

const url="mongodb+srv://ajay:ajay@cluster0.mfxao.mongodb.net/?appName=Cluster0"
const client= new MongoClient(url)
const dbName="test"

client.connect().then((connection)=>{

app.get("/ui/student/:id",async(req,res)=>{
  console.log(req.params.id) 

  const db=connection.db(dbName)
const dataconn=db.collection("company")
const result=await dataconn.findOne({_id:new ObjectId(req.params.id)})
console.log(result)
// res.send(result)
res.render("form",{result})
})
app.get("/ui/student",async(req,res)=>{

  const db=connection.db(dbName)
const dataconn=db.collection("company")
const result=await dataconn.find().toArray()
// console.log(result)
// res.send(result)
res.render("home",{result})
})
})



app.listen(3000, () => {
  console.log("Server running on port 3000")
})