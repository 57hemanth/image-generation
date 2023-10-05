import { useState } from "react";
import { preview } from "../assets";
import { FormField, Loader } from "../components";
import generateRandomPrompt from "../utils";
import { useNavigate } from "react-router-dom";

export default function CreatePost(){

    const [form, setForm] = useState({
        name: "",
        prompt: "",
        image: ""
    })

    const [generatingImage, setGeneratingImage] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const URL = import.meta.env.VITE_API_URL 

    const generateImage = async () => {
        if(form.prompt){
            try {
                setGeneratingImage(true)
                const response = await fetch(`${URL}/dalle`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ prompt: form.prompt })
                })
                const data = await response.json()
                setForm(form => {
                    return { ...form, image: `data:image/png;base64,${data.data[0].b64_json}` }
                })
            } catch (error) {
                console.log(error)
            } finally {
                setGeneratingImage(false)
            }
        } else {
            alert("Please enter prompt")
        }
    }

    function handleChange(e){
        setForm(form => {
            return {...form, [e.target.name]: e.target.value}
        })
    }

    function handleSurprise(e) {
        const prompt = generateRandomPrompt(e.target.value)
        setForm(form => {
            return {...form, prompt }
        })
    }

    const handleSharing = async () => {
        if(form.name && form.image && form.prompt){
            try {
                setLoading(true)
                const response = await fetch(`${URL}/posts`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(form)
                })
                const data = await response.json()
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
                navigate("/")
            }
        } else {
            alert("Please create post with all details")
        }
    }

    return(
        <section className="max-w-7xl mx-auto min-h-[calc(100vh-90px)] flex flex-col gap-4 mb-16">
            <div>
                <h1 className="font-bold text-xl sm:text-2xl">Create</h1>
                <p className="pt-4 text-gray-400 text-sm sm:text-base">Create imaginative and visually stunning images through DALL-E AI and share them with community</p>
            </div>
            <div className="flex flex-col gap-4">
                <FormField name="name" labelName="Your name" type="string" placeholder="Enter your name" value={form.name} handleChange={handleChange}/>
                <FormField name="prompt" labelName="Prompt" type="string" placeholder="A Man falling in Love with his Computer, digital art" value={form.prompt} handleChange={handleChange} surpriseMe handleSurprise={handleSurprise} />
            </div>
            <div className="relative w-64 h-64 border border-gray-300 flex justify-center items-center">
                {form.image ? <img src={form.image} className="w-full h-full p-1"></img> : <img src={preview} className="p-4 w-full h-full opacity-50"></img>}
                {generatingImage && <div className="absolute w-full h-full text-center flex items-center justify-center bg-gray-500 opacity-80 ">
                    <Loader />
                </div>}
            </div>
            <div>
                <button onClick={generateImage} className="max-w-lg w-full bg-green-700 text-white px-4 py-2 rounded" disabled={generatingImage}>{generatingImage ? "Generating..." : "Generate"}</button>
            </div>
            <div className="flex flex-col gap-2">
                <p className="pt-4 text-gray-400 text-sm sm:text-base">Once you create image you can share with others in the community</p>
                <button className="max-w-lg w-full bg-[#551A8B] text-white px-4 py-2 rounded" onClick={handleSharing}>{loading ? "Sharing..." : "Share with the community"}</button>
            </div>
        </section>
    )
}