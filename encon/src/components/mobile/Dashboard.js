import React from "react";
import { DesktopNav } from "../desktop/Desktop-Nav.js";
import { DesktopGraphs } from '../desktop/Desktop-Graphs.js';
import { useOktaAuth } from '@okta/okta-react';

export const Dashboard = () => {
  // const { authState, authService } = useOktaAuth();
  // const [userInfo, setUserInfo] = useState({});

 

  // useEffect(() => {
  //   const { accessToken } = authState;

  //   if (!authState.isAuthenticated) {
  //     setUserInfo({});
  //   } else {
  //     authService.getUser().then((info) => {
  //       const oktaUserInfo = info;
  //       const SERVER_HOST = 5000;

  //       console.log('info', info);

  //       axios
  //         .post(`${SERVER_HOST}/users`, oktaUserInfo, {
  //           headers: {
  //             Authorization: `Bearer ${accessToken}`,
  //           },
  //         })
  //         .then((res) => {
  //           setUserInfo(res.data.data);
  //           window.localStorage.setItem('user_id', res.data.data.id)
  //         })
  //         .catch((err) => err.message);
  //     });
  //   }d
  // }, [authState, authService]);

    return (
      <div className="dashboard-container">
         <DesktopNav />
          <DesktopGraphs />
      </div>
    );
  };
  export default Dashboard;
  