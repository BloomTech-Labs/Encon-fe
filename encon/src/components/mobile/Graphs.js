import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../../utils/auth/axiosWithAuth';
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

export const Graphs = () => {
  let [deviceList, setDeviceList] = useState([]);
  let [device, setDevice] = useState([]);
  let [dataList, setDataList] = useState([]);
  let [total, setTotal] = useState(0);
  let [totalUsage, setTotalUsage] = useState(0);
  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:3300/api/encon/appliances')
      .then((response) => {
        setDeviceList(response.data);
        response.data.map((appliances) => {
          device = [
            {
              Name: `${appliances.device}`,
            },
          ];
          setDevice(device);
          console.log(device, 'NEW LIST OF ARRAYS');
        });
      })
      .catch((err) => {
        console.log('error getting appliance list', err);
      });
  }, []);
  useEffect(() => {
    deviceList.map((appliance) => {
      axios
        .get(
          `http://enconaq.eba-bqepxksk.us-east-1.elasticbeanstalk.com/${appliance.device}/Virginia/${appliance.hours}/${appliance.days}`
        )
        .then((res) => {
          setTotal((total += res.data.cost_per_year));
          setTotalUsage((totalUsage = totalUsage + res.data.energy_used));
          dataList = [
            ...dataList,
            {
              Name: appliance.device,
              TotalCost: total,
              TotalUsage: totalUsage,
            },
          ];
          console.log(dataList, 'GRAPH LIST');
          setDataList(dataList);
          console.log(dataList, 'FINAL DATA LIST');
        })
        .catch((err) => {
          console.log('error getting appliance data', err);
        });
    });
  }, [device]);

  return (
    <div className='graphContainer' data-testid='EnergyChart'>
      <h2>Average Energy Output Per Appliance Per Month</h2>
      <LineChart
        className='energyGraph'
        width={300}
        height={300}
        data={dataList}
        margin={{ top: 5, right: 20, bottom: 10, left: 0 }}
      >
        <Line type='monotone' dataKey='Name' stroke='red' strokeWidth={2} />
        <Line
          type='monotone'
          dataKey='TotalCost'
          stroke='blue'
          strokeWidth={2}
        />
        <Line
          type='monotone'
          dataKey='TotalUsage'
          stroke='purple'
          strokeWidth={2}
        />
        <CartesianGrid stroke='grey' strokeDasharray='10' />
        <XAxis dataKey='Name' />
        <YAxis />
        <Tooltip content={dataList} />
        <Legend />
      </LineChart>

      <h2>Average Expenses</h2>
      <BarChart
        width={300}
        height={300}
        data={dataList}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <CartesianGrid strokeDasharray='10' stroke='grey' />
        <XAxis dataKey='Name' />
        <YAxis />
        <Tooltip content={dataList} />
        <Legend />
        <Bar type='monotone' dataKey='TotalCost' fill='red' strokeWidth={2} />
        <Bar type='monotone' dataKey='TotalUsage' fill='blue' strokeWidth={2} />
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

export default Graphs;
