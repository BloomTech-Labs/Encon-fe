import React from "react";
import { WelcomeHeader } from "./Welcome-Header";
import { EnergyLocation } from "./Energy-Location";
import { ApplianceTracker } from "./Appliance-Tracker";
import { ApplianceCard } from "./Appliance-Card";
import "../../styles/mobile/Appliance-List.scss";
export const ApplianceList = () => {
  return (
    <div className="applianceList">
      <WelcomeHeader />
      <EnergyLocation />
      <ApplianceTracker />
      <div className="timeContainer">
        <a href="">Daily</a>
        <a href="">Weekly</a>
        <a href="">Monthly</a>
      </div>
      <ApplianceCard />
      <div className="totalOutput">
        <h3>Total:</h3>
        <div className="totalCost">$100</div>
        <div className="totalEnergy">10kwh</div>
      </div>
      <button className="inputEnergy">Input Daily Energy</button>
    </div>
  );
};
