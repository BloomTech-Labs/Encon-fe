import React from "react";
import "../styles/Calculator.scss";
export const Calculator = () => {
  return (
    <div>
      {/* Calculator Starts here and is a form itself */}
      <form className="calculator">
        <h3>Device</h3>
        {/* All the radio buttons begin here */}
        <div className="radioButtons">
          <label className="radio">
            Computer
            <input type="radio" value="Computer" />
          </label>
          <label className="radio">
            Washing Machine
            <input type="radio" value="Washing Machine" />
          </label>
          <label className="radio">
            Refrigerator
            <input type="radio" value="Washer/Dryer" />
          </label>
          <label className="radio">
            TV
            <input type="radio" value="TV" />
          </label>
          <label className="radio">
            Lighting
            <input type="radio" value="Lighting" />
          </label>
        </div>
        {/* Radio Buttons end here */}
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
      <div className="calc-output">
        <div className="calc-belowBorder">
          {/*use expression interpolation `${}` to insert output data once we connect to DS BE using axios*/}
          <h3>Total Daily Cost</h3>
          <p>$1test</p>
          <h3>Average Monthly Cost based on daily rate</h3>
          <p>$30test</p>
          <h3>Annual Average</h3>
          <p>$365test</p>
        </div>
      </div>
    </div>
  );
};

//test remote branch work
