import React, { useState } from "react";
import Calendar from "react-calendar";
import { render } from "react-dom";
import "../../styles/mobile/DatePicker.scss";
// import "react-calendar/dist/Calendar.css";

export const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  console.log(date);

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <>
      <Calendar className={"calendar"} onChange={onChange} value={date} />
    </>
  );
};

render(<DatePicker />, document.querySelector("#root"));
