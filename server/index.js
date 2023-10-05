import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/connectDB.js"
import PostRouter from "./routes/Post/PostRouter.js"
import DalleRouter from "./routes/Dalle/DalleRouter.js"

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json({limit: '50mb'}))
const PORT = process.env.PORT
connectDB()

app.use("/api/posts", PostRouter)
app.use("/api/dalle", DalleRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`)
})