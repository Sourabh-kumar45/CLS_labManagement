// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import DashBoard from './components/DashBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    Hello world
      <DashBoard></DashBoard>
    </>
  )
}

export default App
