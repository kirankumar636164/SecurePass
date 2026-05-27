// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import About from './components/About'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
    <Route path='/' element={<Manager />} />
    <Route path='/about' element={<About />} />
    </Routes>
    </>
  )
}

export default App
