import React from 'react';

const StudentInfo = () => {
  return (
    <section className="pt-16 bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <div className="w-full bg-gradient-to-r from-blue-500 to-sky-400 text-white py-12 text-center">
        <h1 className="text-3xl font-bold">Student Profile</h1>
        <p className="text-lg mt-2">Welcome to the detailed profile view</p>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-7xl px-6 sm:px-12 py-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-sky-500">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhf1Nrw3E3Rci-8FmEz5KumCsaCDiRn4ievQ&s"
              alt="Student"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 mt-4">Name of Student</h2>
          <p className="text-gray-500 text-lg">ID: 12342130</p>
        </div>

        {/* Info Section */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Personal Information</h3>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Program:</strong> BTech</li>
            <li><strong>Department:</strong> Electrical Engg.</li>
            <li><strong>Branch:</strong> Electrical Engg.</li>
          </ul>
        </div>

        {/* Links Section */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#projects"
                className="text-sky-600 hover:underline flex items-center gap-2"
              >
                <i className="fa-regular fa-eye"></i> View Projects
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-sky-600 hover:underline flex items-center gap-2"
              >
                <i className="fa-regular fa-user"></i> About Me
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-sky-600 hover:underline flex items-center gap-2"
              >
                <i className="fa-regular fa-envelope"></i> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StudentInfo;
