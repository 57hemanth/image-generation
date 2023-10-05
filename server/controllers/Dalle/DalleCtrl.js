import dotenv from "dotenv"
dotenv.config()
import OpenAI from "openai"

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

const generateImage = async (req, res) => {
    const { prompt } = req.body
    try {
        const response = await openai.images.generate({
            prompt,
            n: 1,
            size: "1024x1024",
            response_format: "b64_json"
        })
        res.send(response)
    } catch (error) {
        res.status(500).json({ status: false, message: error.message })
    }
}

export { generateImage }