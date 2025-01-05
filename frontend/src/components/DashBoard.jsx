import React from "react";

const Dashboard = () => {
  return (
    <>
      {/* <div className="relative w-screen h-[40vh] bg-gradient-to-r from-black/90 via-blue-800/85 to-black/90">
        <img
          src="../images/lab.jpg"
          alt="Scenic view"
          className="w-full h-full object-cover opacity-90 mix-blend-overlay"
        />
      </div> */}

      <div className="relative flex justify-center items-center h-screen bg-gradient-to-b from-blue-900 via-black to-gray-900 text-white overflow-hidden">
        {/* Rotating Gear Icon */}
        <div className="relative">
          <div className="animate-spin-slow text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-24 h-24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 3v2.25m0 13.5V21m-6.364-8.364l1.591 1.591m12.728-12.728l-1.591 1.591M3 9.75h2.25m13.5 0H21m-8.364 6.364l1.591 1.591m0-13.455l-1.591 1.591"
              />
            </svg>
          </div>

          {/* Pulsing Dots Around the Gear */}
          <div className="absolute inset-0 flex justify-center items-center">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-4 h-4 bg-blue-400 rounded-full animate-pulse`}
                style={{
                  transform: `rotate(${i * 45}deg) translate(120px)`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Tagline */}


        <div className="absolute bottom-20 text-center animate-slide-down">
          <h2 className="text-6xl font-bold mb-4">
            Welcome to <span className="text-blue-600">CLS</span>: 
          </h2>
          <p className="text-4xl font-bold mb-4">The Component Lending System</p>
          <p className="mt-4 text-xl">
            Effortless Lending. Seamless Management.
          </p>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className="flex flex-col justify-center">
        <div className="flex justify-center">
          <div className="flex flex-col bg-gray-100">
            <main className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Technologies
                  </h2>
                  <p className="text-gray-600 text-center mb-4">
                    Explore modern technologies that power this application.
                    These include robust front-end and back-end tools to deliver
                    seamless performance.
                  </p>
                  <ul className="text-gray-700 list-disc list-inside">
                    <li>React: Dynamic UI Components</li>
                    <li>Tailwind CSS: Responsive Styling</li>
                    <li>Express: Backend APIs</li>
                    <li>Node.js: Server-Side Processing</li>
                    <li>MongoDB: Database Management</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Manage Your Lab Experience
                  </h2>
                  <p className="text-gray-600 text-center mb-4">
                    A user-friendly interface to enhance your lab management
                    experience. Add images, track progress, and access key
                    resources.
                  </p>
                  <img
                    src="../images/lab.jpg"
                    alt="Lab Experience Placeholder"
                    className="mt-4 h-32 w-80 border border-gray-300 rounded-md"
                  />
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Personalized
                  </h2>
                  <p className="text-gray-600 text-center mb-4">
                    This platform is designed to provide a customized
                    experience, ensuring that students and teachers can
                    collaborate efficiently and meet their goals.
                  </p>
                  <ul className="text-gray-700 list-disc list-inside">
                    <li>Adaptable tools for diverse learning needs</li>
                    <li>Efficient tracking of assignments and tasks</li>
                    <li>Real-time updates for improved communication</li>
                    <li>Customization options for a personal touch</li>
                  </ul>
                </div>
              </div>
            </main>

            <br />
            <br />
            <br />
            <br />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/register"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
              >
                Sign Up
              </a>
              <a
                href="/login"
                className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none"
              >
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
