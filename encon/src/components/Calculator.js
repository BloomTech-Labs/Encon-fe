import React from "react";

export const Calculator = () => {
  return (
    <div>
      <form>
        <label>TV</label>
        <input type="radio" value="TV" />

        <label>Phone</label>
        <input type="radio" value="Phone" />

        <label>Washer/Dryer</label>
        <input type="radio" value="Washer/Dryer" />

        <label>Mircowave</label>
        <input type="radio" value="Microwave" />

        <label>Fridge/Freezer</label>
        <input type="radio" value="Fridge/Freezer" />

        <label>AC Unit</label>
        <input type="radio" value="AC Unit" />
      </form>
    </div>
  );
};

//test remote branch work
