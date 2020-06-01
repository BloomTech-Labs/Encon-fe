import React from "react";
import computerPng from "../../assets/ElectronicsFolder/005-computer.png";
import "../../styles/mobile/Appliance-Card.scss";
export const ApplianceCard = () => {
  return (
    <div className="applianceContainer">
      <div className="imageContainer">
        <img src={computerPng} alt=" an appliance" />
      </div>
      <div className="applianceInfo">
        <h3 className="applianceTitle">Appliance Name</h3>
        <div className="outputContainer">
          <div className="estCost">
            <h6>Estimated Cost</h6>
            <p>$100</p>
          </div>

          <div className="energyOutput">
            <h6>Avg.Energy Output</h6>
            <p>100kwh</p>
          </div>
        </div>
      </div>
    </div>
  );
};
