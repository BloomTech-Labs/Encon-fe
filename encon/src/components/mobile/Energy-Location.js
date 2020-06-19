import React from "react";
import "../../styles/mobile/Energy-Location.scss";

export const EnergyLocation = (props) => {
  //  console.log('propppppppp', props.user)

  return (
    <div className="energyLocation">
      <div className="energyContainer">
        <h2>My Energy</h2>
      </div>

      <div className="locationContainer">
        <h5>
          Location: <a href="/">(change)</a>{" "}
        </h5>
      </div>
    </div>
  );
};
