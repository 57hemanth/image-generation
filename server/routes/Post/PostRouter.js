import express from "express"
import { createPost, getPosts } from "../../controllers/Post/PostCtrl.js"

const PostRouter = express.Router()

PostRouter.get("/", getPosts)
PostRouter.post("/", createPost)

export default PostRouter