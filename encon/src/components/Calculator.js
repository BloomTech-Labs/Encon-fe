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
