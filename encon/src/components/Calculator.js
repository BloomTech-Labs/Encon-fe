import React from "react";
import "../components/Calculator.scss";
export const Calculator = () => {
  return (
    <div>
      <form className="calculator">
        <h3>Device</h3>
        <label>
          TV
          <input className="radio" type="radio" value="TV" />
        </label>

        <label>
          Location/Zip Code
          <input type="text" />
        </label>

        <div>
          <h2>Daily Use</h2>

          <label>
            Hours
            <input type="integer" />
          </label>

          <label>
            <input type="integer" />
            Minutes
          </label>
        </div>

        <label>
          Days Per Week
          <input type="integer" />
        </label>
      </form>
    </div>
  );
};

//test remote branch work
