import React from 'react';
import { WelcomeHeader } from './Welcome-Header';
import { EnergyLocation } from './Energy-Location';
import { Link, Route } from 'react-router-dom';
import { ApplianceList } from './Appliance-List';
import { DesktopGraphs } from '../desktop/Desktop-Graphs';
export const Dashboard = () => {
  return (
    <div>
      <WelcomeHeader />
      <EnergyLocation />
      <div className='applianceTracker'>
        <div className='left'>
          <Link to='/profile/appliances' className='leftButton'>
            Appliance List
          </Link>
        </div>
        <div className='right'>
          <Link to='/profile/graphs' className='rightButton'>
            Track Usage
          </Link>
        </div>
      </div>
      <Route path='/profile/appliances' component={ApplianceList} />
      <Route path='/profile/graphs' component={DesktopGraphs} />
    </div>
  );
};
