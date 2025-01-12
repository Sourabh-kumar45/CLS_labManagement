import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StudentList = () => {
  const { teacherid } = useParams();

  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetching the data from the backend
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/teacher/${teacherid}`);
        if (response.status === 200 && response.data) {
          // console.log("Fetched Students:", response.data);
          setStudents(response.data); // Update the state
        } else {
          console.error("Student data not found.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchStudents();
  }, [teacherid]);

  // Filter students based on search term
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.clgid.toString().includes(searchTerm.toLowerCase())
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
                Program
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.clgid} className="border-t">
                  <td className="px-4 py-2 text-sm text-gray-700">{student.clgid}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{student.name}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{student.email}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{student.program}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-4 py-6 text-center text-gray-500">
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
