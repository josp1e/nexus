import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Add from './components/Add'
import { Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  let appname="pro";
  return (
    <>
      
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Add/>}></Route>
      </Routes>
    </>
  )
}
import { formControlClasses } from '@mui/material'
export default App
