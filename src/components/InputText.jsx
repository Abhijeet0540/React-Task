import React, { useState } from 'react'
import { VscArrowSmallLeft } from "react-icons/vsc";

const InputText = () => {
    const [showText, setshowText] = useState('')
    const [text, setText] = useState('')
    const submit = () => {
        console.log(`this is text ${text}`);
        setshowText(text)
        setText('')

    }

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center text-white bg-gray-800">
            {/* Back Button */}
            <VscArrowSmallLeft
                className="absolute top-5 left-5 text-3xl cursor-pointer bg-gray-800 hover:bg-gray-900 text-white font-bold rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                onClick={() => window.history.back()}
            />

            {/* Input and Buttons Section */}
            <div className="flex flex-col items-center gap-5 relative ">
                {/* Text Input */}
                <input
                    className="w-[80vw] sm:w-[40vw] lg:w-[20vw] h-[6vh] px-4 py-5 rounded-lg bg-gray-900 text-white drop-shadow-md focus:outline-none focus:ring-2 focus:ring-[#FAB12F]"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' ? submit() : null}
                    placeholder="Enter Your Text"
                />

                {/* Submit Button */}
                <div className="flex gap-5">
                    <button
                        onClick={submit}
                        className="px-6 py-3 text-white bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FAB12F] uppercase hover:bg-gray-950 hover:text-white"
                    >
                        Submit
                    </button>

                    {/* Reset Button */}
                    <button
                        onClick={() => setshowText('')}
                        className="px-6 py-3 text-white bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FAB12F] uppercase hover:bg-gray-950 hover:text-white"
                    >
                        Reset
                    </button>
                </div>
            </div>

            {/* Display Area for Submitted Text */}
            <p className="text-3xl font-bold text-gray-900 capitalize w-[90vw] sm:w-[50vw] lg:w-[35vw] h-[22vh] mt-5 px-4 py-5 rounded-lg border-[1px] border-gray-500 bg-zinc-200 drop-shadow-2xl overflow-x-hidden">
                {showText || "Your text will appear here..."}
            </p>
        </div>

    )
}

export default InputText
