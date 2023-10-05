import { surpriseMePrompts } from "../constants";

function generateRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPrompt = surpriseMePrompts[randomIndex]
    if(randomPrompt === prompt){
        generateRandomPrompt(prompt)
    }
    return randomPrompt
}

export default generateRandomPrompt