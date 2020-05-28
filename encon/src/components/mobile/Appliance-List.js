import React from "react";
import { WelcomeHeader } from "./Welcome-Header";
import { EnergyLocation } from "./Energy-Location";
import { ApplianceTracker } from "./Appliance-Tracker";
import { ApplianceCard } from "./Appliance-Card";
export const ApplianceList = () => {
  return (
    <div>
      <WelcomeHeader />
      <EnergyLocation />
      <ApplianceTracker />
      <div className="timeContainer">
        <a>Daily</a>
        <a>Weekly</a>
        <a>Monthly</a>
      </div>
      <ApplianceCard />
      {/*Author Attribution */}
      <div>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/nikita-golubev"
          title="Nikita Golubev"
        >
          Nikita Golubev
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
};
