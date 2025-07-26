import express from "express"
import "dotenv/config"
import cors from "cors"
import connectDB from "./config/db.js"
import clerkWebhooks from "./controllers/clerkWebHooks.js"
import {clerkMiddleware} from "@clerk/express"

const app = express()
app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())

app.use("/api/clerk", clerkWebhooks) /
connectDB() // Connect to your MongoDB database

app.get("/", (req, res) => {
    res.send("Hello, World!")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => { 
  console.log(`Server running on port ${PORT}`)
})
