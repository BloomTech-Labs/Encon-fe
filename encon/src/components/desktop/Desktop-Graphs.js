import React from 'react';
import '../../styles/mobile/Graph.scss';
import {
  LineChart,
  BarChart,
  Line,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

export const DesktopGraphs = () => {
  const data = [
    { month: 'January', TV: 400, Computer: 2400, Microwave: 2400 },
    { month: 'Febuary', TV: 600, Computer: 2000, Microwave: 2800 },
    { month: 'March', TV: 1400, Computer: 400, Microwave: 2000 },
    { month: 'April', TV: 6400, Computer: 200, Microwave: 2402 },
  ];

  return (
    <div className='graphContainer'>
      <h2>Average Energy Output Per Appliance Per Month </h2>
      <LineChart
        className='energyGraph'
        width={1000}
        height={500}
        data={data}
        margin={{ top: 5, right: 20, bottom: 10, left: 0 }}
      >
        <Line type='monotone' dataKey='TV' stroke='red' strokeWidth={2} />
        <Line
          type='monotone'
          dataKey='Computer'
          stroke='blue'
          strokeWidth={2}
        />
        <Line
          type='monotone'
          dataKey='Microwave'
          stroke='purple'
          strokeWidth={2}
        />
        <CartesianGrid stroke='grey' strokeDasharray='10' />
        <XAxis dataKey='month' />
        <YAxis />
        <Tooltip content={data} />
        <Legend />
      </LineChart>

      <h2>Average Expenses</h2>
      <BarChart
        width={1000}
        height={500}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <CartesianGrid strokeDasharray='10' stroke='grey' />
        <XAxis dataKey='month' />
        <YAxis />
        <Tooltip content={data} />
        <Legend />
        <Bar type='monotone' dataKey='TV' fill='red' strokeWidth={2} />
        <Bar type='monotone' dataKey='Computer' fill='blue' strokeWidth={2} />
        <Bar
          type='monotone'
          dataKey='Microwave'
          fill='purple'
          strokeWidth={2}
        />
      </BarChart>
    </div>
  );
};
