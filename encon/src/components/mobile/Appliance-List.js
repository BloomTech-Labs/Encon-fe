import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ApplianceCard } from './Appliance-Card';
import '../../styles/mobile/Appliance-List.scss';
import axios from 'axios';
export const ApplianceList = () => {
  const [appliances, setAppliances] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3300/api/encon/appliances')
      .then((appliances) => {
        console.log('=======', appliances);
        setAppliances(appliances);
      })
      .catch((err) => {
        console.log('error getting appliance list', err);
      });
  }, []);
  return (
    <div>
      <div className='applianceList'>
        <div className='timeContainer'>
          <a href='' className='daily'>
            Daily
          </a>
          <a href='' className='weekly'>
            Weekly
          </a>
          <a href=''>Monthly</a>
        </div>
        {appliances.map((appliance) => {
          return (
            <ApplianceCard
              key={appliance.id}
              device={appliance.device}
              hours={appliance.hours}
              days={appliance.days}
            />
          );
        })}
        <div className='totalOutput'>
          <h2>Total:</h2>
          <div className='totalCost'>$100</div>
          <div className='totalEnergy'>10kwh</div>
        </div>
        {/* <Route path="/profile/userInput" component={UserInput} /> */}
        <Link to='/userInput'>
          <button className='inputEnergy'>Input Daily Energy</button>
        </Link>
      </div>
    </div>
  );
};
