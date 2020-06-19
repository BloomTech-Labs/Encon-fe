import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ApplianceCard } from './Appliance-Card';
import '../../styles/mobile/Appliance-List.scss';
import { axiosWithAuth } from '../../utils/auth/axiosWithAuth';
import axios from 'axios';
export const ApplianceList = () => {
  const [appliances, setAppliances] = useState([]);
  const [total, setTotal] = useState([]);
  const [usage, setUsage] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:3300/api/encon/appliances')
      .then((response) => {
        setAppliances(response.data);
      })
      .catch((err) => {
        console.log('error getting appliance list', err);
      });
  }, []);
  useEffect(() => {
    appliances.map((appliance) => {
      console.log(appliance);
      axios
        .get(
          `http://enconaq.eba-bqepxksk.us-east-1.elasticbeanstalk.com/${appliance.device}/Virginia/${appliance.hours}/${appliance.days}`
        )
        .then((res) => {
          console.log(res.data.cost_per_year, 'COST PER YEAR');
          console.log(res.data.energy_used, 'ENERGY USED');
          setTotal(res.data.cost_per_year);
          setUsage(res.data.energy_used);
          console.log(total);
          console.log(usage);
        })
        .catch((err) => {
          console.log('error getting appliance data', err);
        });
    });
  }, [appliances]);

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
              key={appliance.device}
              device={appliance.device}
              hours={appliance.hours}
              days={appliance.days}
            />
          );
        })}
        <div className='totalOutput'>
          <h2>Total:</h2>
          <div className='totalCost'>${total.cost_per_year}</div>
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
