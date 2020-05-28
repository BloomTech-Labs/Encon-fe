import React from "react";

export const ApplianceCard = () => {
  return (
    <div className="applianceContainer">
      <div className="imageContainer">
        <img src="/src/assets/005-computer.png" alt="picture of an appliance" />
      </div>

      <div className="outPutContainer">
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
