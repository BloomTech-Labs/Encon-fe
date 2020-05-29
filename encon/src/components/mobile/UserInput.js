import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export const UserInput = () => {
  const { handleSubmit } = useForm();
  //maybe user id and state entered in url as params? then hardcode appliance name in individual state/hook variables

  const [dishWasher, setDishWasher] = useState({
    appliance: "Dishwasher",
    hours: "",
    days: "",
  });
  const [washingMachine, setWashingMachine] = useState({
    appliance: "Washing Machine",
    hours: "",
    days: "",
  });

  const handleDishHoursChange = (event) => {
    setDishWasher({ ...dishWasher, hours: event.target.value });
  };
  const handleDishDaysChange = (event) => {
    setDishWasher({ ...dishWasher, days: event.target.value });
  };

  return (
    <div className="user-input">
      <h1>Input time used</h1>
      <form onSubmit={handleSubmit}>
        <h3>Dishwasher</h3>
        <label htmlFor="dishWasher hours">hours</label>
        <input
          type="integer"
          name="dishWasher hours"
          onchange={handleDishHoursChange}
          value={dishWasher.hours}
        ></input>
        <label htmlFor="dishWasher days">days per week</label>
        <input
          type="integer"
          name="dishWasher days"
          onchange={handleDishDaysChange}
          value={dishWasher.days}
        ></input>
      </form>
    </div>
  );
};
