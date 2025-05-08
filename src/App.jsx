import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Task from './components/Task'
import SingelBtn from './components/SingleBtn'
import FiveBtn from './components/FiveBtn'
import InputText from './components/InputText'
import InputText2 from './components/InputText2'
import Addition from './components/Addition'
import Calculator from './components/Calculator'
import EmailValidation from './components/EmailValidation'
import StopWatch from './components/StopWatch'
import GoogleFont from './components/GoogleFont'
import DNAAnimation from './components/DNAAnimation'

const App = () => {

  return (
    <div>

      {/* <Task/> */}
      <Routes>
        <Route path="/" element={<Task />} />
        <Route path="/singlebtn" element={<SingelBtn />} />
        <Route path="/fivebtn" element={<FiveBtn />} />
        <Route path='/InputText' element={<InputText />} />
        <Route path="/InputText2" element={<InputText2 />} />
        <Route path="/Addition" element={<Addition />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/EmailValidation" element={<EmailValidation />} />
        <Route path="/StopWatch" element={<StopWatch />} />
        <Route path="/GoogleFont" element={<GoogleFont />} />
        <Route path="/DNAAnimation" element={<DNAAnimation />} />
      </Routes>
    </div>
  )
}
export default App