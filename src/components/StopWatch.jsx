import React, { useEffect, useRef, useState } from 'react';
import { VscArrowSmallLeft } from "react-icons/vsc";

const StopWatch = () => {
    const [time, setTime] = useState(() => parseInt(localStorage.getItem('time'), 10) || 0);
    const intervalRef = useRef();
    const [isRunning, setIsRunning] = useState(() => JSON.parse(localStorage.getItem('isRunning')) || false);

    

    useEffect(() => {
        localStorage.setItem('time', time);
        localStorage.setItem('isRunning', JSON.stringify(isRunning));
    }, [time, isRunning]);

    const StartTimer = () => {
        if (!isRunning) {
            setIsRunning(true);
        }
    };
    const StopTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false);
    };

    const ResetTimer = () => {
        setTime(0);
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false);
    };

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => {
                    const newTime = prevTime + 1;
                    if (newTime >= 60) {
                        clearInterval(intervalRef.current);
                        setIsRunning(false);
                        return 60;
                    }

                    return newTime;
                });
            }, 1000); // 1 second interval
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    return (
        <div className='w-screen h-screen px-20 py-20 items-center justify-center flex flex-col gap-5 text-white bg-zinc-900'>
            <div className='absolute top-5 left-5 text-4xl cursor-pointer bg-zinc-800 hover:bg-zinc-900 text-white font-bold  focus:outline-none focus:shadow-outline rounded-full'>
            <VscArrowSmallLeft onClick={() => window.history.back()}/>
            </div>
            <div className='timer bg-zinc-800 lg:w-[20vw] lg:h-[40vh] w-[45vw] h-[20vh] flex items-center justify-center rounded-full'>
                <span className='text-5xl font-bold'>{time}s</span>
            </div>
            <div className='flex gap-5'>
                <button
                    className='btn px-10 py-3 text-white bg-yellow-900 rounded-lg uppercase'
                    onClick={StartTimer}
                    disabled={isRunning} // Disable the start button while the timer is running
                >
                    Start
                </button>
                <button
                    className='btn px-10 py-3 text-white bg-yellow-900 rounded-lg uppercase'
                    onClick={StopTimer}
                >
                    Stop
                </button>
                <button
                    className=' btn px-10 py-3 text-white bg-yellow-900 rounded-lg uppercase'
                    onClick={ResetTimer}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default StopWatch;
