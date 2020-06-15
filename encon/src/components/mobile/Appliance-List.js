import React from "react";
import { Link } from "react-router-dom";
import { ApplianceCard } from "./Appliance-Card";
import "../../styles/mobile/Appliance-List.scss";
export const ApplianceList = () => {
  return (
    <div>
      <div className="applianceList">
        <div className="timeContainer">
          <a href="" className="daily">
            Daily
          </a>
          <a href="" className="weekly">
            Weekly
          </a>
          <a href="">Monthly</a>
        </div>
        <ApplianceCard />
        <div className="totalOutput">
          <h3>Total:</h3>
          <div className="totalCost">$100</div>
          <div className="totalEnergy">10kwh</div>
        </div>
        {/* <Route path="/profile/userInput" component={UserInput} /> */}
        <Link to="/userInput">
          <button className="inputEnergy">Input Daily Energy</button>
        </Link>
      </div>
    </div>
  );
};
