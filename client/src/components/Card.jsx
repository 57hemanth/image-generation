import FileSaver from "file-saver"
import { download } from "../assets";

export default function Card({ _id, name, prompt, image }) {

    function handleSaveImage(){
        FileSaver.saveAs(image, `${_id}.jpg`)
    }

    return(
        <div className="relative rounded-xl max-w-sm group">
            <img className="rounded-xl w-full" src={image}></img>
            <div className="absolute bg-slate-400 text-gray-800 rounded-xl p-2 invisible group-hover:visible bottom-0 left-0 right-0 flex flex-col gap-2">
                <p>{prompt}</p>
                <div className="flex flex-row justify-between items-center">
                    <p className="w-8 h-8 rounded-full bg-green-800 text-white flex items-center justify-center">{name[0]}</p>
                    <button onClick={handleSaveImage}><img src={download} className="w-8 h-8"></img></button>
                </div>
            </div>
        </div>
    )
}