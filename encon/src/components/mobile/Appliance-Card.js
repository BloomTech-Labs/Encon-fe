import React from "react";
import computerPng from "../../assets/ElectronicsFolder/005-computer.png";
import "../../styles/mobile/Appliance-Card.scss";
export const ApplianceCard = () => {
  return (
    <div className="applianceContainer">
      <div className="imageContainer">
        <img src={computerPng} alt="picture of an appliance" />
      </div>

      <div className="outputContainer">
        <div className="estCost">
          <h5>Estimated Cost</h5>
          <br />
          <p>Total Cost Goes Here</p>
        </div>

        <div className="energyOutput">
          <h5>Avg.Energy Output</h5>
          <p>Total Amount of Energy</p>
        </div>
      </div>
    </div>
  );
};
