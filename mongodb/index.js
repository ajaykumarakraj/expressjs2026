import express from "express"
import { Collection, MongoClient } from "mongodb"

const app = express()
const dbName = "test"
const url = "mongodb://localhost:27017"


const client = new MongoClient(url)

// Connect DB once
async function connectDB() {
  await client.connect()
  console.log("MongoDB Connected ✅")
 const db=client.db(dbName)
 const collection=db.collection('company')
 const result=await collection.find()
 console.log(result)
}
connectDB()


app.get("/", (req, res) => {
  res.send("Hello")
})

app.listen(3000, () => {
  console.log("Server running on port 3000 🚀")
})