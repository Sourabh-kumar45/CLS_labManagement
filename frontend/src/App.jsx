// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import DashBoard from './components/DashBoard'
import Login from './components/Login'
import Footer from './components/Footer'
import StudentInfo from './components/StudentInfo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Hello world
      <DashBoard></DashBoard>
      <Login></Login>
      <br /><br /><br />
      <Footer></Footer> */}
      <StudentInfo></StudentInfo>
    </>
  )
}

export default App
