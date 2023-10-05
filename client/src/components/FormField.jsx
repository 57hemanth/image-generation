export default function FormField({labelName, name, type, placeholder, value, handleChange, surpriseMe, handleSurprise}) {
    return(
        <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4 align-middle">
                <label className="font-bold" htmlFor={name}>{labelName}</label>
                {surpriseMe && (
                    <button className="bg-gray-100 px-2 py-1 rounded text-sm font-semibold" onClick={handleSurprise}>Surprise Me</button>
                )}
            </div>
            <input className="outline-none border border-gray-400 rounded px-4 py-2 max-w-lg" id={name} name={name} type={type} placeholder={placeholder} value={value}       onChange={handleChange}></input>
        </div>
    )
}