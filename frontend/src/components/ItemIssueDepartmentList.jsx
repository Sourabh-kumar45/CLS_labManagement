import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';



const ItemIssueDepartmentList = () => {
    const {id} = useParams()
    // console.log(id)
  const departments = [

    //compForm is of no use now
    // {
    //   id: 1,
    //   name: 'Electrical Department',
    //   image: "/images/electricalLab.jpg", // Replace with your image URL
    //   description:
    //     'The Electrical Department focuses on power systems, control systems, and electronics. Students are trained in various domains like circuit design, renewable energy, and automation.',
    //   hodName: 'Dr. John Doe',
    //   labInchargeName: 'Mr. Mark Smith',
    //   route: `/student/${id}/compForm`, // Replace with the actual route `/student/${id}/compForm` this one is depreciated
    // },
    {
      id: 2,
      name: 'ECE Department',
      image: "/images/ECELab.jpg", // Replace with your image URL
      description:
        'The Electronics and Communication Engineering Department specializes in communication systems, microprocessors, and embedded systems, equipping students with industry-relevant skills.',
      hodName: 'Dr. Jane Doe',
      labInchargeName: 'Ms. Sarah Johnson',
      route: `/student/${id}/eceDept`, // Replace with the actual route
    },
    {
      id: 3,
      name: 'Mechanical Department',
      image: "/images/mechLab.jpg", // Replace with your image URL
      description:
        'The Mechanical Department offers expertise in thermodynamics, machine design, and manufacturing processes. It’s ideal for those interested in innovation in machinery and robotics.',
      hodName: 'Dr. Alice Brown',
      labInchargeName: 'Mr. Robert Lee',
      route: `/student/${id}/mechDept`, // Replace with the actual route
    },
    {
      id: 4,
      name: 'Electrical Department2',
      image: "/images/electricalLab.jpg", // Replace with your image URL
      description:
        'The Electrical Department focuses on power systems, control systems, and electronics. Students are trained in various domains like circuit design, renewable energy, and automation.',
      hodName: 'Dr. John Doe',
      labInchargeName: 'Mr. Mark Smith',
      route: `/student/${id}/electricalDept`, // Replace with the actual route `/student/${id}/compForm`
    },
  ];

 

  const [activeDepartment, setActiveDepartment] = useState(null);
  const navigate = useNavigate();

  const toggleDepartment = (id) => {
    setActiveDepartment(activeDepartment === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
        <br /><br /><br />
      <h1 className="text-3xl font-bold text-center mb-4">Explore Our Departments</h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Discover the various branches of our lending system. Click on each department to learn more about its focus areas, resources, and opportunities.
      </p>

      <br /><br /><br />
      {departments.map((department) => (
        <div
          key={department.id}
          className="border rounded-lg shadow-sm mb-4 overflow-hidden transition-all duration-300"
        >
          {/* Header with HOD and Lab Incharge */}
          <div
            className="flex items-center cursor-pointer bg-gray-100 hover:bg-gray-200 p-4"
            onClick={() => toggleDepartment(department.id)}
          >
            <img
              src={department.image}
              alt={department.name}
              className="w-64 h-40 rounded-lg object-cover mr-6"
            />
            <div>
              <h2 className="text-2xl font-medium">{department.name}</h2>
              <p className="text-gray-600 text-sm">
                <strong>HOD:</strong> {department.hodName}
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Lab Incharge:</strong> {department.labInchargeName}
              </p>
            </div>
          </div>
          {/* Expanded Section */}
          <div
            className={`transition-all duration-300 ${
              activeDepartment === department.id
                ? 'max-h-screen p-4 bg-white'
                : 'max-h-0 overflow-hidden'
            }`}
          >
            <p className="text-gray-700 text-base mb-2">{department.description}</p>
            <button
              onClick={() => navigate(department.route)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
            >
              Learn More
            </button>
            <button
              onClick={() => navigate(department.route)}
              className="mx-4 mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600"
            >
              Issue Items
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemIssueDepartmentList;
