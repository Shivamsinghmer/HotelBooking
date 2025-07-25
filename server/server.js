import express from "express"
import "dotenv/config"
import cors from "cors"
import connectDB from "./config/db.js"

const app = express()
app.use(cors())

connectDB() // Connect to your MongoDB database

app.get("/", (req, res) => {
    res.send("Hello, World!")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
