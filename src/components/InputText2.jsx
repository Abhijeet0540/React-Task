import React, { useState } from 'react'
import { VscArrowSmallLeft } from "react-icons/vsc";

const InputText2 = () => {
    const [text, setText] = useState('')
    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-800 text-white px-5">
    {/* Back Button */}
    <VscArrowSmallLeft
        className="absolute top-5 left-5 text-3xl sm:text-4xl cursor-pointer bg-zinc-800 hover:bg-zinc-900 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
        onClick={() => window.history.back()}
    />

    {/* Content Wrapper */}
    <div className="flex flex-col justify-center items-center gap-5">
        {/* Input Field */}
        <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            className="w-[80vw] sm:w-[40vw] lg:w-[25vw] h-[8vh] sm:h-[10vh] px-4 py-2 text-base sm:text-lg lg:text-xl rounded-lg bg-zinc-900 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FAB12F] placeholder-gray-400"
            placeholder="Enter Your Text"
        />

        {/* Output Display */}
        <p className="w-[90vw] sm:w-[50vw] lg:w-[35vw] h-[10vh] sm:h-[15vh] lg:h-[22vh] text-lg sm:text-2xl lg:text-3xl font-bold text-zinc-900 bg-zinc-200 px-4 py-3 rounded-lg border border-gray-500 overflow-x-hidden overflow-y-auto shadow-lg">
            {text || "Your text will appear here..."}
        </p>
    </div>
</div>

    )
}

export default InputText2

