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

      <div className="calc-output">
        {/*use expression interpolation `${}` to insert output data once we connect to DS BE using axios*/}
        <h3>Total Daily Cost</h3>
        <p>$1test</p>
        <h3>Average Monthly Cost based on daily rate</h3>
        <p>$30test</p>
        <h3>Annual Average</h3>
        <p>$365test</p>
      </div>
    </div>
  );
};

//test remote branch work
