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

test("check for text", () => {
  const { getByText } = render(
    <Router>
      <Calculator />
    </Router>
  );
  const register = getByText(/register/i);
  expect(register).toBeInTheDocument();
});
