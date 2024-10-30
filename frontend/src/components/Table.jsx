import React from 'react'

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-200">S. No.</th>
            <th className="px-4 py-2 border border-gray-200">Items Issued Status</th>
            <th className="px-4 py-2 border border-gray-200">Date of Issue</th>
            <th className="px-4 py-2 border border-gray-200">Remark</th>
          </tr>
        </thead>
        <tbody>
            <tr className="text-center border border-gray-200">
              <td className="px-4 py-2 border border-gray-200"></td>
              <td className="px-4 py-2 border border-gray-200"></td>
              <td className="px-4 py-2 border border-gray-200"></td>
              <td className="px-4 py-2 border border-gray-200"></td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
