import { useState } from "react";

const StudentList = () => {
  // Dummy student data
  const dummyStudents = [
    { id: "S101", name: "Alice Johnson", email: "alice@example.com", phone: "123-456-7890" },
    { id: "S102", name: "Bob Smith", email: "bob@example.com", phone: "234-567-8901" },
    { id: "S103", name: "Charlie Brown", email: "charlie@example.com", phone: "345-678-9012" },
    { id: "S104", name: "Diana Prince", email: "diana@example.com", phone: "456-789-0123" },
  ];

  const [students, setStudents] = useState(dummyStudents);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter students based on search term
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Students in Your Branch</h1>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or ID"
          className="w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Student List */}
      <div className="bg-white shadow-md rounded overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Student ID
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Email
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id} className="border-t">
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {student.id}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {student.name}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {student.email}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {student.phone}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="px-4 py-6 text-center text-gray-500"
                >
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
