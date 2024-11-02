// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useState } from 'react'
import './App.css'
import DashBoard from './components/DashBoard'
import Login from './components/Login'
import Navbar from './components/Navbar'
import StudentInfo from './components/StudentInfo'
import Footer from './components/Footer'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Department from './components/Department'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar></Navbar><DashBoard></DashBoard><Footer></Footer></>
    },
    {
      path:"/login",
      element:<><Navbar></Navbar><Login></Login><Footer></Footer></>
    },
    {
      path:"/user/:userName",
      element:<><Navbar></Navbar> <StudentInfo></StudentInfo><Footer></Footer></>
    }
    ,{
      path:"/department",
      element:<><Navbar></Navbar> <Department></Department><Footer></Footer></>
    }
  ])
  
  return (
    <>
      <RouterProvider router={router}></RouterProvider>

    </>
  )
}

export default App

// return (
//   <>
//     <Navbar></Navbar>
//     <DashBoard></DashBoard>
//     <StudentInfo></StudentInfo>
//     <Login></Login>
//     <Footer></Footer>
//   </>
// )