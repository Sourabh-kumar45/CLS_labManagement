import React from 'react';

const StudentInfo = () => {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-center sm:items-start gap-8 sm:gap-10 bg-zinc-100">

      {/* Info Container */}
      <div className="w-full sm:max-w-[60vw] md:max-w-[50vw] lg:max-w-[40vw] border border-gray-300 rounded-lg p-6 bg-gray-50 shadow-inner">
        {/* Student Info */}
      <div className="mb-4 flex gap-4">
          {/* Image Container */}
        <div className="border border-gray-300 rounded-lg h-20 w-20 overflow-hidden bg-gray-100">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhf1Nrw3E3Rci-8FmEz5KumCsaCDiRn4ievQ&s" alt="Student" className="object-cover w-full h-full" />
        </div>
        <div>
          <p className="font-semibold text-2xl text-sky-600">Name of Student</p>
          <p className="font-semibold text-lg text-gray-500">ID: 12342130</p>
        </div>
      </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-4"></div>

        <div className="flex flex-col gap-2 font-medium text-gray-600 pb-3">
          <span>Program</span>
          <span>Department</span>
          <span>Branch</span> 
        </div>

        {/* Projects */}
        <div className="flex items-center gap-2 mb-2 text-gray-600">
          <i className="w-4 fa-regular fa-eye text-sky-600"></i>
          <span className="hover:text-sky-600 cursor-pointer transition-colors">Projects</span>
        </div>

        {/* About */}
        <div className="flex items-center gap-2 mb-2 text-gray-600">
          <i className="w-4 fa-regular fa-user text-sky-600"></i>
          <span className="hover:text-sky-600 cursor-pointer transition-colors">About</span>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-gray-300 mt-4"></div>
      </div>
    </section>
  );
};

export default StudentInfo;
