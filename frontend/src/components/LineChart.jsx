// import React, { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const LineChart = () => {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('/data.json');
//       const data = await response.json();
//       setChartData(data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <LineChart width={600} height={300} data={chartData}>
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="date" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Line type="monotone" dataKey="AQI" stroke="#8884d8" activeDot={{ r: 8 }} />
//     </LineChart>
//   );
// };

// export default LineChart;

import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const LineChart1 = () => {
  const [chartData, setChartData] = useState([
    { date: '2022-01-01', AQI: 30 },
    { date: '2022-01-02', AQI: 40 },
    { date: '2022-01-03', AQI: 35 },
    { date: '2022-01-04', AQI: 45 },
    { date: '2022-01-05', AQI: 50 },
    { date: '2022-01-06', AQI: 60 },
  ]);

  return (
    <div style={{ display: 'flex', alignItems: 'center',width:'200vh',height:'50vh',marginLeft:'2em'}}>
      <LineChart width={800} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="4 4" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="AQI" stroke="green" activeDot={{ r: 12 }} />
      </LineChart>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <br></br>
      <b>
          Trends for Previous Years
          </b>
          <hr></hr>
          <br></br>
      <LineChart1 />
    </div>
  );
};

export default App;



