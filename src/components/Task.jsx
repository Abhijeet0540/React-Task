import React from 'react'
import { Link } from 'react-router-dom'

const Task = () => {

    const TaskItem = ({ link, description }) => {
        return (
            <div className='flex w-full justify-between items-center py-5  '>
                <ul className='list-disc'>
                    <li><h1 className='text-1xl font-bold text-gray-900 capitalize'>{description}</h1></li>
                </ul>
                <div> <Link to={link}>
                    <button className="glow-on-hover relative px-6 py-3 text-white bg-gray-900 rounded-lg focus:outline-none focus:shadow-outline uppercase  ">
                        click Button</button></Link>
                </div>
            </div>
        )
    }

    return (
        <div className='flex flex-col items-center justify-between py-10 px-10 '>
            <div className='flex flex-col items-center w-[80vw]  '>

                <TaskItem
                    link='SingleBtn'
                    description="Onclick single button, background color will change"
                />
                <TaskItem
                    link='FiveBtn'
                    description="5 buttons with color name & onclick each button, background color will change"
                />
                <TaskItem
                    link='InputText'
                    description="One input box & one button, after click on button the input text will show in below as output"
                />
                <TaskItem
                    link='InputText2'
                    description="One input box only & on input type the text will show in below as output"
                />
                <TaskItem
                    link='Addition'
                    description="Two input box with plus symbol & on click Add button addition will show in below as output "
                />
                <TaskItem
                    link='calculator'
                    description="Calculator (Addition, Subtraction, Multiplication, Division) "
                />
                <TaskItem
                    link='EmailValidation'
                    description="Form validation (Name, Email, Phone, Gender, Hobbies, City) with table data show" 
                />
                <TaskItem
                    link='StopWatch'
                    description="StopWatch (Onclick button, timer from 0 to 60 seconds) "
                />
                <TaskItem
                    link='GoogleFont'
                    description="Google font family using api key to show font family in ui "
                />
                <TaskItem
                    link='DNAAnimation'
                    description="DNA Animation "
                />
            </div>
        </div>
    )
}

export default Task

