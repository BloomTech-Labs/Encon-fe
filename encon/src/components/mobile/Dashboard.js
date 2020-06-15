import React, {useState, useEffect} from "react";
import { DesktopNav } from "../desktop/Desktop-Nav.js";
import { DesktopGraphs } from '../desktop/Desktop-Graphs.js';
import { useOktaAuth } from '@okta/okta-react';
import axios from 'axios';

 export const Dashboard = () => {
  
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      authService.getUser().then((info) => {
        setUserInfo(info);
      });
    }
  }, [authState, authService])
  console.log(userInfo)

    return (
      <div className="dashboard-container">
         <DesktopNav />
         
          <DesktopGraphs />
      </div>
    );
  


    }
export default Dashboard;