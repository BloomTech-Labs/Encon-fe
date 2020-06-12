import React from 'react';
import { WelcomeHeader } from './Welcome-Header';
import { EnergyLocation } from './Energy-Location';
import { Link, Route } from 'react-router-dom';
import { ApplianceList } from './Appliance-List';
import { DesktopGraphs } from '../desktop/Desktop-Graphs';
import { Graphs } from './Graphs';
import MediaQuery from 'react-responsive';

export const Dashboard = () => {
  return (
    <div className='dashboard'>
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

      <MediaQuery minDeviceWidth={1025}>
        <Route path='/profile/graphs' component={DesktopGraphs} />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1025}>
        <Route path='/profile/graphs' component={Graphs} />
      </MediaQuery>
    </div>
  );
};
