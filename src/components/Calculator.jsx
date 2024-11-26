import React, { useState } from 'react'
import { VscArrowSmallLeft } from "react-icons/vsc";
import { LuDelete } from "react-icons/lu";

const Calculator = () => {
    const [value, setValue] = useState('')
    const handleClick = (e) => {
        try {
            setValue(value + e.target.value)
        } catch (error) {
            setValue("Error")
        }
    }
    const handleEval = () => {
        try {
            setValue(eval(value))
        } catch (error) {
            setValue("Error")
        }
    }

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-zinc-500 text-white">
            {/* Back Button */}
            <VscArrowSmallLeft
                className="absolute top-5 left-5 text-3xl sm:text-4xl cursor-pointer bg-zinc-800 hover:bg-zinc-900 text-white font-bold focus:outline-none rounded-full"
                onClick={() => window.history.back()}
            />

            {/* Calculator Container */}
            <div className="flex flex-col justify-center items-center border-2 px-4 py-5 rounded-lg border-zinc-400 drop-shadow-2xl bg-zinc-600">
                {/* Input Display */}
                <div className="flex relative gap-5">
                    <input
                        value={value}
                        className="w-[70vw] sm:w-[40vw] lg:w-[16vw] h-[6vh] px-4 py-2 rounded-lg bg-zinc-900 drop-shadow-md text-lg "
                        type="text"
                    />
                </div>

                {/* Top Buttons */}
                <div className="flex relative gap-3 sm:gap-5 mt-3">
                    <button
                        onClick={() => setValue("")}
                        className="w-[15vw] sm:w-[10vw] lg:w-[3vw] h-[6vh] px-4 py-2 rounded-lg bg-zinc-900 drop-shadow-md"
                    >
                        AC
                    </button>
                    <button
                        onClick={() => setValue(value.slice(0, -1))}
                        className="w-[15vw] sm:w-[10vw] lg:w-[3vw] h-[6vh] px-4 py-2 rounded-lg bg-zinc-900 drop-shadow-md"
                    >
                        <LuDelete />
                    </button>
                    <button
                        onClick={handleClick}
                        className="w-[15vw] sm:w-[10vw] lg:w-[3vw] h-[6vh] px-4 py-2 rounded-lg bg-zinc-900 drop-shadow-md"
                        value="%"
                    >
                        %
                    </button>
                    <button
                        onClick={handleClick}
                        className="w-[15vw] sm:w-[10vw] lg:w-[3vw] h-[6vh] px-4 py-2 rounded-lg bg-[#FAB12F] drop-shadow-md"
                        value="/"
                    >
                        /
                    </button>
                </div>

                {/* Number Buttons */}
                <div className="relative gap-3 sm:gap-5 mt-3">
                    {[[7, 8, 9, "+"], [4, 5, 6, "-"], [1, 2, 3, "*"]].map((row, idx) => (
                        <div key={idx} className="flex relative gap-3 sm:gap-5 mt-3">
                            {row.map((item) => (
                                <button
                                    key={item}
                                    onClick={handleClick}
                                    className={`w-[15vw] sm:w-[10vw] lg:w-[3vw] h-[6vh] ${typeof item === "number" ? "bg-zinc-900" : "bg-[#FAB12F]"
                                        } rounded-lg`}
                                    value={item}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Bottom Buttons */}
                <div className="flex relative gap-3 sm:gap-5 mt-3">
                    <button
                        onClick={handleClick}
                        className="w-[32vw] sm:w-[21vw] lg:w-[7.2vw] h-[6vh] px-4 py-2 rounded-lg bg-zinc-900 drop-shadow-md"
                        value="0"
                    >
                        0
                    </button>
                    <button
                        onClick={handleClick}
                        className="w-[15vw] sm:w-[10vw] lg:w-[3vw] h-[6vh] px-4 py-2 rounded-lg bg-zinc-900 drop-shadow-md"
                        value="."
                    >
                        .
                    </button>
                    <button
                        onClick={handleEval}
                        className="w-[15vw] sm:w-[10vw] lg:w-[3vw] h-[6vh] px-4 py-2 rounded-lg bg-[#25A55F] drop-shadow-md"
                        value="="
                    >
                        =
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Calculator

// please check the code what is wrong what should be changed
// please give a more warble solution



// < div className = 'flex relative gap-5 mt-3 ' >
//                 <button onClick={handleClick} className='w-[3vw] h-[6vh] px-4 py-2 rounded-lg bg-zinc-900  drop-shadow-md ' value="7" type="button" />
//                 <button onClick={handleClick} className='w-[3vw] h-[6vh] px-4 py-2 rounded-lg bg-zinc-900  drop-shadow-md ' value="8" type="button" />
//                 <button onClick={handleClick} className='w-[3vw] h-[6vh] px-4 py-2 rounded-lg bg-zinc-900  drop-shadow-md ' value="9" type="button" />
//                 <button onClick={handleClick} className='w-[3vw] h-[6vh] px-4 py-2 rounded-lg bg-[#FAB12F]  drop-shadow-md ' value="+" type="button" />
//             </div>
//             <div className='flex relative gap-5 mt-3 '>
//                 <button onClick={handleClick} className='w-[3vw] h-[6vh] px-4 py-2 rounded-lg bg-zinc-900  drop-shadow-md ' value="4" type="button" />
//                 <button onClick={handleClick} className='w-[3vw] h-[6vh] px-4 py-2 rounded-lg bg-zinc-900  drop-shadow-md ' value="5" type="button" />
//                 <button onClick={handleClick} className='w-[3vw] h-[6vh] px-4 py-2 rounded-lg bg-zinc-900  drop-shadow-md ' value="6" type="button" />
//                 <button onClick={handleClick} className='w-[3vw] h-[6vh] px-4 py-2 rounded-lg bg-[#FAB12F]  drop-shadow-md ' value="-" type="button" />
//             </div>
//             <div className='flex relative gap-5 mt-3 '>
//                 <button onClick={handleClick} className='w-[3vw] h-[6vh] px-4 py-2 rounded-lg bg-zinc-900  drop-shadow-md ' value="1" type="button" />
//                 <button onClick={handleClick} className='w-[3vw] h-[6vh] px-4 py-2 rounded-lg bg-zinc-900  drop-shadow-md ' value="2" type="button" />
//                 <button onClick={handleClick} className='w-[3vw] h-[6vh] px-4 py-2 rounded-lg bg-zinc-900  drop-shadow-md ' value="3" type="button" />
//                 <button onClick={handleClick} className='w-[3vw] h-[6vh] px-4 py-2 rounded-lg bg-[#FAB12F]  drop-shadow-md ' value="*" type="button" />
//             </div>