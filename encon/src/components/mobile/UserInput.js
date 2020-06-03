import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "../../styles/mobile/UserInput.scss";

export const UserInput = () => {
  const { handleSubmit, register, errors } = useForm();
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

  const handleTVHoursChange = (event) => {
    setTv({ ...tv, hours: event.target.value });
  };
  const handleTVDaysChange = (event) => {
    setTv({ ...tv, days: event.target.value });
  };

  return (
    <div className="user-input">
      <h1>Input Time Used</h1>
      <h2>Calendar is going here</h2>
      <form onSubmit={handleSubmit}>
        <div className="device-container">
          <section className="dishWasher-sec">
            <h3>Dishwasher</h3>
            <div className="dish-hours">
              <input
                type="number"
                name="dishWasherHours"
                ref={register({ min: 1, max: 24 })}
                onChange={handleDishHoursChange}
                value={dishWasher.hours}
              ></input>
              <label htmlFor="dishWasherHours">hours</label>
              {errors.dishWasherHours && "hours 1-24"}
            </div>

            <div className="dish-days">
              <input
                type="integer"
                ref={register({ min: 1, max: 7 })}
                name="dishWasherDays"
                onChange={handleDishDaysChange}
                value={dishWasher.days}
              ></input>
              <label htmlFor="dishWasher days">days per week</label>
              {errors.dishWasherDays && <p>enter message</p>}
            </div>
          </section>

          <section className="washing-machine-sec">
            <h3>Washing Machine</h3>
            <div className="washing-hours">
              <label htmlFor="Washing Machine hours">hours</label>
              <input
                type="integer"
                ref={register({ min: 1, max: 24 })}
                name="Washing Machine hours"
                onChange={handleWashingHoursChange}
                value={washingMachine.hours}
              ></input>
              {errors.entername && <p>enter message</p>}
            </div>

            <div className="washing-days">
              <label htmlFor="Washing Machine days">days per week</label>
              <input
                type="integer"
                ref={register({ min: 1, max: 7 })}
                name="Washing Machine days"
                onChange={handleWashingDaysChange}
                value={washingMachine.days}
              ></input>
              {errors.entername && <p>enter message</p>}
            </div>
          </section>

          <section className="clothes-dryer-sec">
            <h3>Clothes Dryer</h3>
            <div className="dryer-hours">
              <label htmlFor="Dryer hours">hours</label>
              <input
                type="integer"
                ref={register({ min: 1, max: 24 })}
                name="Dryer hours"
                onChange={handleDryerHoursChange}
                value={dryer.hours}
              ></input>
              {errors.entername && <p>enter message</p>}
            </div>

            <div className="dryer-days">
              <label htmlFor="Dryer days">days per week</label>
              <input
                type="integer"
                ref={register({ min: 1, max: 7 })}
                name="Dryer days"
                onChange={handleDryerDaysChange}
                value={dryer.days}
              ></input>
              {errors.entername && <p>enter message</p>}
            </div>
          </section>

          <h3>Desktop PC</h3>
          <label htmlFor="pc hours">hours</label>
          <input
            type="integer"
            ref={register({ min: 1, max: 24 })}
            name="pc hours"
            onChange={handlePCHoursChange}
            value={pc.hours}
          ></input>
          {errors.entername && <p>enter message</p>}

          <label htmlFor="pc days">days per week</label>
          <input
            type="integer"
            ref={register({ min: 1, max: 7 })}
            name="pc days"
            onChange={handlePCDaysChange}
            value={pc.days}
          ></input>
          {errors.entername && <p>enter message</p>}

          <h3>Television</h3>
          <label htmlFor="tv hours">hours</label>
          <input
            type="integer"
            ref={register({ min: 1, max: 24 })}
            name="tv hours"
            onChange={handleTVHoursChange}
            value={tv.hours}
          ></input>
          {errors.entername && <p>enter message</p>}

          <label htmlFor="tv days">days per week</label>
          <input
            type="integer"
            ref={register({ min: 1, max: 7 })}
            name="tv days"
            onChange={handleTVDaysChange}
            value={tv.days}
          ></input>
          {errors.entername && <p>enter message</p>}
        </div>

        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};
