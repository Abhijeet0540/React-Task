import React, { useState } from 'react'
import { VscArrowSmallLeft } from "react-icons/vsc";

const Addition = () => {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [sum, setSum] = useState('')

    const HendelSum = () => {
        setSum(parseInt(num1) + parseInt(num2))
        setNum1('')
        setNum2('')
    }
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center text-white bg-gray-800">
    {/* Back Button */}
    <VscArrowSmallLeft
        className="absolute top-5 left-5 text-3xl sm:text-4xl cursor-pointer bg-zinc-800 hover:bg-zinc-900 text-white font-bold rounded-full focus:outline-none"
        onClick={() => window.history.back()}
    />

    {/* Input Section */}
    <div className="flex items-center gap-3 sm:gap-5">
        {/* First Input */}
        <input
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="w-[30vw] sm:w-[20vw] lg:w-[10vw] h-[6vh] px-4 py-2 rounded-lg bg-zinc-900 text-center text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FAB12F] drop-shadow-md"
            type="text"
            placeholder="Enter a number"
        />
        {/* Plus Symbol */}
        <strong className="text-white font-bold text-2xl sm:text-3xl px-3">+</strong>
        {/* Second Input */}
        <input
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="w-[30vw] sm:w-[20vw] lg:w-[10vw] h-[6vh] px-4 py-2 rounded-lg bg-zinc-900 text-center text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FAB12F] drop-shadow-md"
            type="text"
            placeholder="Enter a number"
        />
        {/* Add Button */}
        <button
            onClick={HendelSum}
            className="bg-[#FAB12F] text-zinc-900 font-bold px-5 py-2 rounded-full text-sm sm:text-lg hover:bg-[#EAA21C] focus:outline-none focus:ring-2 focus:ring-[#EAA21C] uppercase drop-shadow-md transform duration-300 hover:scale-105"
        >
            Add
        </button>
    </div>

    {/* Result Section */}
    <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900 capitalize w-[80vw] sm:w-[40vw] lg:w-[32vw] h-[8vh] mt-5 px-4 py-3 rounded-lg border border-gray-500 bg-zinc-200 text-center drop-shadow-2xl">
        {sum}
    </p>
</div>

    )
}

export default Addition