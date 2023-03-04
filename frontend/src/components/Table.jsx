import React, { useState } from 'react';

const sampleData = [
  { date: '2022-01-01', aqi: 34 },
  { date: '2022-01-02', aqi: 45 },
  { date: '2022-01-03', aqi: 67 },
  { date: '2022-01-04', aqi: 88 },
  { date: '2022-01-05', aqi: 55 },
];

const Table = () => {
  const [data, setData] = useState(sampleData);

  return (
    <table className="table-auto border-collapse border border-gray-500">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-500 px-4 py-2">Date</th>
          <th className="border border-gray-500 px-4 py-2">AQI</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
            <td className="border border-gray-500 px-4 py-2">{row.date}</td>
            <td className="border border-gray-500 px-4 py-2">{row.aqi}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
