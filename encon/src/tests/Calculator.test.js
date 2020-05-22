import React from "react";
import { render } from "@testing-library/react";
import { Calculator } from "../components/Calculator";
import { BrowserRouter as Router } from "react-router-dom";
test("should render Calculator component ", () => {
  render(
    <Router>
      <Calculator />
    </Router>
  );
});
