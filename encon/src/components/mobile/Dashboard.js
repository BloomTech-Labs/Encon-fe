import React, { useState, useEffect } from "react";
import { WelcomeHeader } from "./Welcome-Header";
import { EnergyLocation } from "./Energy-Location";
import { Link, Route } from "react-router-dom";
import { ApplianceList } from "./Appliance-List";
import { DesktopGraphs } from "../desktop/Desktop-Graphs";
import { Graphs } from "./Graphs";
// import { useOktaAuth } from '@okta/okta-react';
import MediaQuery from "react-responsive";
import "../../styles/mobile/Appliance-Tracker.scss";
// import { SecureRoute } from "@okta/okta-react";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";
import axios from "axios";

export const Dashboard = (props) => {
  const [userName, setUserName] = useState("");
  const [location, setLocation] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(async () => {
    axiosWithAuth()
      .get("/encon/users")
      .then((res) => {
        setUserName(res.data.userName);
        setLocation(res.data.location);
        setUserId(res.data.id);
        console.log(
          res.data,
          "res data from useEffect get on profile/dashboard redirect"
        );
      })
      .catch((err) => {
        console.log("waaaiiiitttt....what?", err);
      });
  }, []);

  return (
    <div className="dashboard">
      <WelcomeHeader />
      <EnergyLocation />
      <div className="applianceTracker">
        <div className="left">
          <Link to="/profile/appliances" className="leftButton">
            Appliance List
          </Link>
        </div>
        <div className="right">
          <Link to="/profile/graphs" className="rightButton">
            Track Usage
          </Link>
        </div>
      </div>
      {/* <SecureRoute path="/profile/appliances"> */}
        <ApplianceList />
      {/* </SecureRoute> */}
      <MediaQuery minDeviceWidth={1025}>
        <Route path="/profile/graphs" component={DesktopGraphs} />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1025}>
        <Route path="/profile/graphs" component={Graphs} />
      </MediaQuery>
    </div>
  );
};
