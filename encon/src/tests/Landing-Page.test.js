import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LandingPage } from '.././components/mobile/Landing-Page';
import { Header } from '.././components/mobile/Header';
import { Calculator } from '.././components/mobile/Calculator';

describe('testing the landing page component', () => {
  test('should render the landing page correctly ', () => {
    render(
      <Router>
        <LandingPage />
      </Router>
    );
  });
  test('should render the header component ', () => {
    render(
      <Router>
        <LandingPage />
        <Header />
      </Router>
    );
  });
  test('should render the calculator component ', () => {
    render(
      <Router>
        <LandingPage />
        <Calculator />
      </Router>
    );
  });
});
