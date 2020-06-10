import React, { useState } from "react";
import Calendar from "react-calendar";
import { render } from "react-dom";
import "react-calendar/dist/Calendar.css";

export const DatePicker = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <>
      <Calendar onChange={onChange} value={date} />
    </>
  );
};

render(<DatePicker />, document.querySelector("#root"));
