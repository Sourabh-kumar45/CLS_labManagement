// import React from 'react'

// const StudentInfo = () => {
//   return (
//     <section className='border flex flex-wrap justify-center gap-10 border-sky-500 rounded-lg'>
//         <div className='border border-sky-500 rounded-lg h-60 w-60'>
//             <img src="" alt="" />

//         </div>
//         <div className="part-2 w-[60vw] border border-sky-500 rounded-lg">
//             <div className='studentInfo'>
//                 <p className='font-bold text-xl'>Name of Student</p>
//                 <p className='font-bold text-xl'>12342130</p>
//             </div>
//             <div className=" border-t border-gray-400"></div>
//             <div className='links flex gap-4 font-bold pb-3 text-gray-700'>
                
//                 <a href="">Program</a>|
//                 <a href="">Department</a>|
//                 <a href="">Branch</a>
//             </div>

//             <div className="flex items-center projects">
//                 <i class="fa-regular fa-eye pr-2"></i>
//                 <span>Projects</span>
//             </div>

//             <div className=" flex items-center about">
//                 <i class="fa-regular fa-user pr-2"></i> 
//                 <span>About</span>
//             </div>
//             <br /><br />

//             <div className="border-t border-gray-400"></div>
//             <div className="itemInfo">
//                 <ul className='flex align-middle gap-4 md:gap-32 lg:gap-32'>
//                     <li>S.NO</li>
//                     <li>Item Issued</li>
//                     <li>Status</li>
//                     <li>Date of Issue</li>
//                     <li>Remark</li>
//                 </ul>
//             </div>
//         </div>
        

//     </section>
//   )
// }

// export default StudentInfo

import React from 'react';

const StudentInfo = () => {
  return (
    <section className='border flex flex-wrap justify-center gap-10 border-sky-500 rounded-lg p-4'>
      <div className='border border-sky-500 rounded-lg h-60 w-60 sm:w-72 md:w-80'>
        <img src="" alt="Student" className="h-full w-full object-cover rounded-lg" />
      </div>
      <div className="part-2 w-full sm:w-[60vw] md:w-[50vw] lg:w-[40vw] border border-sky-500 rounded-lg p-4">
        <div className='studentInfo'>
          <p className='font-bold text-xl'>Name of Student</p>
          <p className='font-bold text-xl'>12342130</p>
        </div>
        <div className="border-t border-gray-400 my-2"></div>
        <div className='links flex flex-wrap gap-4 font-bold pb-3 text-gray-700'>
          <a href="">Program</a>|
          <a href="">Department</a>|
          <a href="">Branch</a>
        </div>

        <div className="flex items-center projects mb-2">
          <i className="fa-regular fa-eye pr-2"></i>
          <span>Projects</span>
        </div>

        <div className="flex items-center about mb-2">
          <i className="fa-regular fa-user pr-2"></i> 
          <span>About</span>
        </div>
        <br />
        <div className="border-t border-gray-400 my-2"></div>
        {/* <div className="itemInfo">
          <ul className='flex flex-wrap align-middle gap-4 md:gap-32 lg:gap-32'>
            <li>S.NO</li>
            <li>Item Issued</li>
            <li>Status</li>
            <li>Date of Issue</li>
            <li>Remark</li>
          </ul>
        </div> */}
      </div>
    </section>
  );
}

export default StudentInfo;
