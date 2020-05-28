import React, { useEffect, useState } from "react";
import "../styles/Calc-Desktop.scss";
import axios from "axios";

export const Calculator = () => {
  {
    /* Set State for each available input in the form and data from the promise */
  }
  const [data, setData] = useState({});
  const [device, setDevice] = useState("");

  const valueChange = (event) => {
    setDevice(event.target.value);
  };
  const [location, setLocation] = useState("");
  const locationChange = (event) => {
    setLocation(event.target.value);
  };

  const [hours, setHours] = useState("");
  const hourChange = (event) => {
    setHours(event.target.value);
  };

  const [days, setDays] = useState("");
  const daysChange = (event) => {
    setDays(event.target.value);
  };

  {
    /* useEffect watches the inputs change and adds it to the end of the data science api */
  }
  useEffect(() => {
    const DAYS = `${days}`;
    const HOURS = `${hours}`;
    const STATE = `${location}`;
    const DEVICE = `${device}`;
    axios
      .get(
        `http://enconaq.eba-bqepxksk.us-east-1.elasticbeanstalk.com/${DEVICE}/${STATE}/${HOURS}/${DAYS}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("wowowowow", err);
      });
  }, [days, device, hours, location]);

  return (
    <div>
      {/* Calculator Starts here and is a form itself */}
      <form className="calculator">
        <h3 className="device-title">Device</h3>
        {/* All the radio buttons begin here */}
        <div className="radio-buttons">
          <label className="radio-label">
            <input
              type="radio"
              name="device"
              onChange={valueChange}
              value="Computer Desktop"
            />
            <span>Desktop</span>
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="device"
              onChange={valueChange}
              value="Washing Machine"
            />
            <span>Washing Machine</span>
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="device"
              onChange={valueChange}
              value="Refrigerator"
            />
            <span>Refrigerator</span>
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="device"
              onChange={valueChange}
              value="TV (32” LED)"
            />
            <span>TV</span>
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="device"
              onChange={valueChange}
              value="Computer Laptop"
            />
            <span>Laptop</span>
          </label>
        </div>
        {/* Radio Buttons end here */}
        {/* Location Input */}
        <h3 className="state">
          State
          <input
            type="text"
            name="state"
            onChange={locationChange}
            value={location}
          />
        </h3>
        <h3 className="hourly-use">Hourly Use</h3>
        {/* Hourly Use Container for Hours and Minutes */}
        <div className="daily-use">
          <label className="divider">
            <input
              type="integer"
              name="hours"
              onChange={hourChange}
              value={hours}
            />
            Hours
          </label>
        </div>
        <h3 className="weekly-use">
          Days Per Week Used
          <input type="integer" onChange={daysChange} value={days} />
        </h3>
      </form>
      <div className="calc-output">
        <div className="calc-below-border">
          {/*use expression interpolation `${}` to insert output data once we connect to DS BE using axios*/}
          <div className="cost-container">
            <h3>Cost Per Year:</h3>
            <p>${data.cost_per_year}</p>
          </div>
          <div className="used-container">
            <h3>Energy Used:</h3>
            <p>{data.energy_used}kWh</p>
          </div>
        </div>
      </div>
    </div>
  );
};
