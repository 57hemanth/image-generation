import mongoose from "mongoose"

const connectDB = () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connection successful")
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }  
}

export default connectDB