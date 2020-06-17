import React, {useState, useEffect} from "react";
import { WelcomeHeader } from './Welcome-Header';
import { EnergyLocation } from './Energy-Location';
import { Link, Route } from 'react-router-dom';
import { ApplianceList } from './Appliance-List';
import { DesktopGraphs } from '../desktop/Desktop-Graphs';
import { Graphs } from './Graphs';
import { useOktaAuth } from '@okta/okta-react';
import MediaQuery from 'react-responsive';
import '../../styles/mobile/Appliance-Tracker.scss';
import {  SecureRoute } from "@okta/okta-react";

export const Dashboard = (props) => {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState({});

  useEffect( () => {
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo({});
    } else {
     authService.getUser().then((info) => {
        setUserInfo(info);
      });
    }
  }, [authState, authService])
  console.log('UI',userInfo)
 console.log('state', userInfo.address)
  console.log(JSON.stringify(userInfo.address))
  
 
  return (
    <div className='dashboard'>
      <WelcomeHeader name={userInfo.given_name}/>
      <EnergyLocation user={userInfo.middle_name} />
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
      <SecureRoute path='/profile/appliances'>
        <ApplianceList user={userInfo}/>
</SecureRoute>
      <MediaQuery minDeviceWidth={1025}>
        <Route path='/profile/graphs' component={DesktopGraphs} />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1025}>
        <Route path='/profile/graphs' component={Graphs} />
      </MediaQuery>
    </div>
  );
};
