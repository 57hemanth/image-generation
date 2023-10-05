import {v2 as cloudinary} from 'cloudinary';
import dotenv from "dotenv"
import Post from '../../models/Post/PostModel.js';
dotenv.config()

cloudinary.config({
    api_key: process.env.CLOUD_API_KEY,
    cloud_name: process.env.CLOUD_NAME,
    api_secret: process.env.CLOUD_API_SECRET
})

const createPost = async (req, res) => {
    const { name, prompt, image } = req.body
    try {
        const imageUrl = await cloudinary.uploader.upload(image)
        const newPost = await Post.create({
            name,
            prompt,
            image: imageUrl.url
        })
        res.status(201).json({ status: true, message: newPost })
    } catch (error) {
        res.status(500).json({ status: false, message: error })
    }
}

const getPosts = async (req, res) => {
    try {
        const allPosts = await Post.find().sort({ createdAt: -1 })
        res.status(200).json(allPosts)
    } catch (error) {
        res.status(500).json({ status: false, message: error.message })
    }
}

export { getPosts, createPost }