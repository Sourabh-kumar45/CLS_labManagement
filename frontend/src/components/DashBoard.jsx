import React from "react";

const Dashboard = () => {
  return (
    <>

    <div className="relative w-screen h-[40vh] bg-gradient-to-r from-black/90 via-blue-800/85 to-black/90">
        <img 
            src="../images/lab.jpg" 
            alt="Scenic view" 
            className="w-full h-full object-cover opacity-90 mix-blend-overlay"
        />
    </div>


    
    <div className="flex flex-col justify-center">

<div className="flex justify-center">
        <div className="flex flex-col bg-gray-100">

          <main className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
                <h2 className="text-lg font-bold text-gray-700">Technologies</h2>
                <ul>
                  <li>React</li>
                  <li>Tailwind CSS</li>
                  <li>Express</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
                <h2 className="text-lg font-bold text-gray-700">Manage your Lab Experience</h2>
                <span>Yaha mai badme images add kr dunga</span>
                <img src="" alt="" />
              </div>
              <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
                <h2 className="text-lg font-bold text-gray-700">Personalized</h2>
                <p>Customised to suit students and teachers work</p>
              </div>
            </div>
          </main>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/register" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none">
                    Sign Up
              </a>
              <a href="/login" className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none">
                    Login
              </a>
          </div>
        </div>
      </div>


      {/* Main Content */}
      <div className="flex flex-col bg-gray-100">

        {/* Content Area */}
        <main className="flex justify-center">
          <div className="max-w-3xl text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Effortless Lab Component Issuance
            </h2>
            <p className="text-gray-600 mb-6">
              Welcome to the Component Lending System! Here, you can issue lab
              components effortlessly. Keep track of your requests, manage
              items, and streamline your lab work with ease.
            </p>
          </div>
        </main>
      </div>
    </div>
</>

  );
};

export default Dashboard;
