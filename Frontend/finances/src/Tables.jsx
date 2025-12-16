import React from 'react'

export default function Table({transactions}) {
    return (
      <div className="max-w-4xl mx-auto mt-8 bg-white shadow rounded-xl overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">
                Date
              </th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">
                Category
              </th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">
                Description
              </th>
              <th className="text-right px-4 py-3 text-sm font-semibold text-gray-700">
                Amount
              </th>
              <th className="text-center px-4 py-3 text-sm font-semibold text-gray-700">
                Income?
              </th>
            </tr>
          </thead>
  
          <tbody>
            
  
            {transactions.length>0 ? (transactions.map((data)=> (
            <tr className="border-t" key={data.id}>
                    <td className="px-4 py-3">{data.date}</td>
                    <td className="px-4 py-3">{data.category}</td>
                    <td className="px-4 py-3">{data.description}</td>
                    <td className="px-4 py-3 text-right">{data.amount}</td>
                    <td className="px-4 py-3 text-center text-green-600">
                      {data.is_income ? "Yes": "No"}
                    </td>
                </tr>
                ))) : (<tr className="border-t">
                <td className="px-4 py-3">No</td>
                <td className="px-4 py-3">Data</td>
                <td className="px-4 py-3">Found</td>
                <td className="px-4 py-3 text-right">00</td>
                <td className="px-4 py-3 text-center text-red-600">
                  N/A
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    );
  }
  