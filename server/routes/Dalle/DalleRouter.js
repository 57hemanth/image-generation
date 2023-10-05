import express from "express"
import { generateImage } from "../../controllers/Dalle/DalleCtrl.js"

const DalleRouter = express.Router()

DalleRouter.post("/", generateImage)

export default DalleRouter