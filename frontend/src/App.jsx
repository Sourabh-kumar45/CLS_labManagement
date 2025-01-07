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
import ItemIssueDepartmentList from './components/ItemIssueDepartmentList'
import StudentList from './teacherComponents/StudentList'
import IssueRequest from './teacherComponents/IssueRequest'
import TeacherDashboard from './teacherComponents/TeacherDashboard'

function App() {
  const studentName = "Sourabh";
  const achievements = [
    { title: "Top Performer in Math Olympiad", description: "Won the gold medal in the national-level math competition.", date: "June 2023" },
    { title: "Community Service Award", description: "Recognized for 100+ hours of volunteer work in the community.", date: "August 2023" },
    { title: "Science Fair Winner", description: "Secured 1st place for an innovative project on renewable energy.", date: "November 2023" },
  ];

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <DashBoard />
          </main>
          <Footer className="flex-shrink-0" />
        </div>
      ),
    },
    {
      path: "/login",
      element: (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Login />
          </main>
          <Footer className="flex-shrink-0" />
        </div>
      ),
    },
    {
      path: "/student/:id",
      element: (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Student />
          </main>
          <Footer className="flex-shrink-0" />
        </div>
      ),
    },
    {
      path: "/student/:id/form",
      element: (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <StudentForm />
          </main>
          <Footer className="flex-shrink-0" />
        </div>
      ),
    },
    {
      path: "/student/:id/itemIssueDepartmentList",
      element: (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <ItemIssueDepartmentList />
          </main>
          <Footer className="flex-shrink-0" />
        </div>
      ),
    },
    {
      path:"/student/:id/compForm",
      element:<><Navbar></Navbar><ItemIssueForm></ItemIssueForm><Footer></Footer></>
    },
    {
      path: "/student/:id/stuAbt",
      element: (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <StuAbt />
          </main>
          <Footer className="flex-shrink-0" />
        </div>
      ),
    },
    {
      path: "/student/:id/stuPrj",
      element: (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <StuPrj />
          </main>
          <Footer className="flex-shrink-0" />
        </div>
      ),
    },
    {
      path: "/student/:id/help",
      element: (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Help />
          </main>
          <Footer className="flex-shrink-0" />
        </div>
      ),
    },
    {
      path: "/student/:id/achievement",
      element: (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Achievement studentName={studentName} achievements={achievements} />
          </main>
          <Footer className="flex-shrink-0" />
        </div>
      ),
    },
    {
      path: "/user/:userName",
      element: (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <StudentInfo />
          </main>
          <Footer className="flex-shrink-0" />
        </div>
      ),
    },
    {
      path: "/student/:id/department",
      element: (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Department />
          </main>
          <Footer className="flex-shrink-0" />
        </div>
      ),
    },
    {
      path: "/register",
      element: (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Register />
          </main>
          <Footer className="flex-shrink-0" />
        </div>
      ),
    },
    {
      path:"/test",
    },
    {
      path:"/check",
      element:<></>
    },
    {
      path: "/help",
      element: (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Help />
          </main>
          <Footer className="flex-shrink-0" />
        </div>
      ),
    },
    {
      path: "/achievement",
      element: (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Achievement studentName={studentName} achievements={achievements} />
          </main>
          <Footer className="flex-shrink-0" />
        </div>
      ),
    },
    {
      path: "/teacher",
      element: (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <TeacherDashboard />
          </main>
          <Footer className="flex-shrink-0" />
        </div>
      ),
    },
  ])
  
  return (
    <>
      <RouterProvider router={router}></RouterProvider>

    </>
  )
}

export default App;
