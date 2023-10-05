import mongoose from "mongoose"

const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: (true, "Name is required")
    },
    prompt: {
        type: String,
        required: (true, "Prompt is required")
    },
    image: {
        type: String,
        required: (true, "Image is required")
    }
}, { timestamps: true })

const Post = new mongoose.model("Post", PostSchema)

export default Post