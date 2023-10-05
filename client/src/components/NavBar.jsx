import { Link } from "react-router-dom"
import {logo} from "../assets"

export default function NavBar(){
    return(
        <nav className="w-full mx-auto py-4 px-4 sm:px-8 flex items-center justify-between bg-white">
            <Link to="/"><img src={logo} className="w-28" alt="logo"></img></Link>
            <Link to="/create-post" className="bg-[#551A8B] text-white px-2 py-1 rounded">Create</Link>
        </nav>
    )
}