// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import DashBoard from './components/DashBoard'
import Login from './components/Login'
import Navbar from './components/Navbar'
import StudentInfo from './components/StudentInfo'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <DashBoard></DashBoard>
      <StudentInfo></StudentInfo>
      <Login></Login>
      <br /><br /><br /><br />
      <Footer></Footer>
    </>
  )
}

export default App
