import React, { useEffect, useState } from 'react';
import '../../styles/mobile/Appliance-Card.scss';
import axios from 'axios';
export const ApplianceCard = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(
        `http://enconaq.eba-bqepxksk.us-east-1.elasticbeanstalk.com/${props.device}/Virginia/${props.hours}/${props.days}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log('error getting appliance data', err);
      });
  });
  return (
    <div className='applianceContainer'>
      <div className='imageContainer'>
        <img
          src={require(`../../assets/ElectronicsFolder/${props.device}.png`)}
          alt='an appliance'
        />
      </div>
      <div className='applianceInfo'>
        <h2 className='applianceTitle'>{props.device}</h2>
        <div className='outputContainer'>
          <div className='estCost'>
            <h4>Estimated Cost</h4>
            <p>${data.cost_per_year}</p>
          </div>

          <div className='energyOutput'>
            <h4>Avg.Energy Output</h4>
            <p>{data.energy_used}kwh</p>
          </div>
        </div>
      </div>
    </div>
  );
};
