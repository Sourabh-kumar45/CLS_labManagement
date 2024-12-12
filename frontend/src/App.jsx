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
import Register from './components/Register'
import ItemIssueForm from './components/ItemIssueForm'
import User from './components/Student'
import Test from './components/Test'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar></Navbar><DashBoard></DashBoard><Footer></Footer></>
    },
    {
      path:"form",
      element:<ItemIssueForm></ItemIssueForm>
    },
    {
      path:"/login",
      element:<><Navbar></Navbar><Login></Login><Footer></Footer></>
    },
    {
      path:"/student/:id", 
      element:<><Navbar></Navbar><User></User><Footer></Footer></>
    },
    {
      path:"/user/:userName",
      element:<><Navbar></Navbar> <StudentInfo></StudentInfo><Footer></Footer></>
    }
    ,{
      path:"/department",
      element:<><Navbar></Navbar> <Department></Department><Footer></Footer></>
    },
    {
      path:"/register",
      element:<><Navbar></Navbar><Register></Register><Footer></Footer></>
    },
    {
      path:"/error",
      element:<><Navbar></Navbar><Test></Test></>
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