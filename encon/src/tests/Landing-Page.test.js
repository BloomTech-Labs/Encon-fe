import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { LandingPage } from "../components/Landing-Page";
import { Header } from "../components/Header";
import { Calculator } from "../components/Calculator";

describe("testing the landing page component", () => {
  test("should render the landing page correctly ", () => {
    render(
      <Router>
        <LandingPage />
      </Router>
    );
  });
  test("should render the header component ", () => {
    render(
      <Router>
        <LandingPage />
        <Header />
      </Router>
    );
  });
  test("should render the calculator component ", () => {
    render(
      <Router>
        <LandingPage />
        <Calculator />
      </Router>
    );
  });
});
