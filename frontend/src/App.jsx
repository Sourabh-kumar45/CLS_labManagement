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
import Student from './components/Student'
import Test from './components/Test'
import StuAbt from './components/StuAbt'
import StuPrj from './components/StuPrj'
import StudentForm from './components/StudentForm'
import Home from './components/Home'
import Help from './components/Help'
import Achievement from './components/Achievement'
import Check from './components/AboutStudent'

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
      path:"/student/:id", 
      element:<><Navbar></Navbar><Student></Student><Footer></Footer></>
    },
    {
      path:"/student/:id/form",
      element:<><Navbar></Navbar><StudentForm></StudentForm><Footer></Footer></>
    },
    {
      path:"/student/:id/compForm",
      element:<><Navbar></Navbar><ItemIssueForm></ItemIssueForm><Footer></Footer></>
    },
    {
      path:"/student/:id/stuAbt", 
      element:<><Navbar></Navbar><StuAbt></StuAbt><Footer></Footer></>
    },
    {
      path:"/student/:id/stuPrj", 
      element:<><Navbar></Navbar><StuPrj></StuPrj><Footer></Footer></>
    },
    {
      path:"/user/:userName",
      element:<><Navbar></Navbar><StudentInfo></StudentInfo><Footer></Footer></>
    }
    ,{
      path:"/student/:id/department",
      element:<><Navbar></Navbar> <Department></Department><Footer></Footer></>
    },
    {
      path:"/register",
      element:<><Navbar></Navbar><Register></Register><Footer></Footer></>
    },
    {
      path:"/test",
      element:<><Navbar></Navbar><Test></Test></>
    },
    {
      path:"/check",
      element:<><Navbar></Navbar><Check></Check></>
    },
    {
      path:"/help",
      element:<><Navbar></Navbar><Help></Help><Footer></Footer></>
    },
    {
      path:"/achievement",
      element:<><Navbar></Navbar><Achievement></Achievement><Footer></Footer></>
    },
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