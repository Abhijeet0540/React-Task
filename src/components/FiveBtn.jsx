import React, { useState } from 'react'
import { VscArrowSmallLeft } from "react-icons/vsc";

const FiveBtn = () => {

    const [background, setbaground] = useState('#ffffff')

    const changeColor = (color) => {
        setbaground(color)
    }
    return (
        <div className='w-full h-screen flex justify-between items-center px-20 gap-5 ' style={{background}}>
            <VscArrowSmallLeft className='absolute top-5 left-5 text-4xl cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded focus:outline-none focus:shadow-outline  text-2xl rounded-full' onClick={() => window.history.back()} />
            {/* // crate a 5 btn  */}
            <div className='relative w-full flex justify-center items-center gap-10'>
            <button onClick={()=>changeColor('red')} className='bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded focus:outline-none focus:shadow-outline w-[15vw] h-[5vw] text-2xl rounded-full uppercase'>button1</button>
            <button onClick={()=>changeColor('green')} className='bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded focus:outline-none focus:shadow-outline w-[15vw] h-[5vw] text-2xl rounded-full uppercase'>button2</button>
            <button onClick={()=>changeColor('blue')} className='bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded focus:outline-none focus:shadow-outline w-[15vw] h-[5vw] text-2xl rounded-full uppercase'>button3</button>
            <button onClick={()=>changeColor('yellow')} className='bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded focus:outline-none focus:shadow-outline w-[15vw] h-[5vw] text-2xl rounded-full uppercase'>button4</button>
            <button onClick={()=>changeColor('black')} className='bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded focus:outline-none focus:shadow-outline w-[15vw] h-[5vw] text-2xl rounded-full uppercase'>button5</button>
            </div>
        </div>
    )
}

export default FiveBtn
