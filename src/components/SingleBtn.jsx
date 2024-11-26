import React from 'react'
import { useState } from 'react'
import { VscArrowSmallLeft } from "react-icons/vsc";

const SingelBtn = () => {

    const [background, setbaground] = useState('#ffffff')

    const RandemColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        setbaground(`#${randomColor}`)
        if (background === `#${randomColor}`) {
            return
        };
    };

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center  text-white' style={{ background }}>
            <VscArrowSmallLeft className='absolute top-5 left-5 text-4xl cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold focus:outline-none focus:shadow-outline  rounded-full' onClick={() => window.history.back()} />
            <button onClick={RandemColor} className='relative bg-blue-700 hover:bg-blue-600 text-white font-bold focus:outline-none focus:shadow-outline w-[20vw] h-[8vw] text-3xl rounded-full uppercase '>change color</button>
        </div>
    )
}
export default SingelBtn
