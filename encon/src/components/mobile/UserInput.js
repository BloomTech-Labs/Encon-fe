import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export const UserInput = () => {
  const { handleSubmit } = useForm();
  //maybe user id and state entered in url as params? then hardcode appliance name in individual state/hook variables

  const [dishWasher, setDishWasher] = useState({
    device: "Dishwasher",
    hours: "",
    days: "",
  });
  const [washingMachine, setWashingMachine] = useState({
    device: "Washing Machine",
    hours: "",
    days: "",
  });
  const [dryer, setDryer] = useState({
    device: "Clothes Dryer",
    hours: "",
    days: "",
  });
  const [pc, setPC] = useState({
    device: "Computer Desktop",
    hours: "",
    days: "",
  });
  const [tv, setTv] = useState({
    device: `TV (55" LED)`,
    hours: "",
    days: "",
  });

  const handleDishHoursChange = (event) => {
    setDishWasher({ ...dishWasher, hours: event.target.value });
  };
  const handleDishDaysChange = (event) => {
    setDishWasher({ ...dishWasher, days: event.target.value });
  };
  const handleWashingHoursChange = (event) => {
    setWashingMachine({ ...washingMachine, hours: event.target.value });
  };
  const handleWashingDaysChange = (event) => {
    setWashingMachine({ ...washingMachine, days: event.target.value });
  };

  const handleDryerHoursChange = (event) => {
    setDryer({ ...dryer, hours: event.target.value });
  };
  const handleDryerDaysChange = (event) => {
    setDryer({ ...dryer, days: event.target.value });
  };

  const handlePCHoursChange = (event) => {
    setPC({ ...pc, hours: event.target.value });
  };
  const handlePCDaysChange = (event) => {
    setPC({ ...pc, days: event.target.value });
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
          onChange={handleDishHoursChange}
          value={dishWasher.hours}
        ></input>
        <label htmlFor="dishWasher days">days per week</label>
        <input
          type="integer"
          name="dishWasher days"
          onChange={handleDishDaysChange}
          value={dishWasher.days}
        ></input>

        <h3>Washing Machine</h3>
        <label htmlFor="Washing Machine hours">hours</label>
        <input
          type="integer"
          name="Washing Machine hours"
          onChange={handleWashingHoursChange}
          value={washingMachine.hours}
        ></input>
        <label htmlFor="Washing Machine days">days per week</label>
        <input
          type="integer"
          name="Washing Machine days"
          onChange={handleWashingDaysChange}
          value={washingMachine.days}
        ></input>

        <h3>Clothes Dryer</h3>
        <label htmlFor="Dryer hours">hours</label>
        <input
          type="integer"
          name="Dryer hours"
          onChange={handleDryerHoursChange}
          value={dryer.hours}
        ></input>
        <label htmlFor="Dryer days">days per week</label>
        <input
          type="integer"
          name="Dryer days"
          onChange={handleDryerDaysChange}
          value={dryer.days}
        ></input>

        <h3>Desktop PC</h3>
        <label htmlFor="pc hours">hours</label>
        <input
          type="integer"
          name="pc hours"
          onChange={handlePCHoursChange}
          value={pc.hours}
        ></input>
        <label htmlFor="pc days">days per week</label>
        <input
          type="integer"
          name="pc days"
          onChange={handlePCDaysChange}
          value={pc.days}
        ></input>
      </form>
    </div>
  );
};
