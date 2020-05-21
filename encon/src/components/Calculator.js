import React from "react";
import "../styles/Calculator.scss";
import { Link } from "react-router-dom";

export const Calculator = () => {
  return (
    <div>
      <div className="main-banner">Energy Calculator</div>
      {/* Calculator Starts here and is a form itself */}
      <form className="calculator">
        <h3 className="deviceTitle">Device</h3>
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
        {/* Location Input */}
        <h3 className="state">
          State
          <input type="text" />
        </h3>
        <h3>Daily Use</h3>
        {/* Daily Use Container for Hours and Minutes */}
        <div className="dailyUse">
          <label className="divider">
            <input type="integer" />
            Hours
          </label>

          <label>
            <input type="integer" />
            Minutes
          </label>
        </div>
        <h3 className="weeklyUse">
          Days Per Week Used
          <input type="integer" />
        </h3>
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

      <section className="register-login-landingCalc">
        <p>
          Enjoyed using our calculator? Click below to keep track of your energy
          costs.
        </p>
        <Link className="register-login-link" to="/register">
          Register
        </Link>
        <p>Already have an account? Login below</p>
        <Link className="login-link" to="/login">
          Login
        </Link>
      </section>
    </div>
  );
};
