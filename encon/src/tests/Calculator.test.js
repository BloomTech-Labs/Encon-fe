import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import { Calculator } from '../components/Calculator';
import { BrowserRouter as Router } from 'react-router-dom';
test('should render Calculator component ', () => {
  render(
    <Router>
      <Calculator />
    </Router>
  );
});

test('check for text', () => {
  const { getByText } = render(
    <Router>
      <Calculator />
    </Router>
  );
  const register = getByText(/register/i);
  expect(register).toBeInTheDocument();
});

test('should show the correct outputs given inputs', () => {
  const { getByLabelText } = render(
    <Router>
      <Calculator />
    </Router>
  );
  const deviceButton = getByLabelText(/device/i);
  const stateInput = getByLabelText(/state/i);
  const hoursInput = getByLabelText(/hourly use/i);
  const daysInput = getByLabelText(/days per week used/i);

  act(() => {
    fireEvent.click(deviceButton);
    fireEvent.change(stateInput, {
      target: { name: 'State', value: 'Virginia' },
    });
    fireEvent.change(hoursInput, {
      target: { name: 'Hourly Use', value: '5' },
    });
    fireEvent.change(daysInput, {
      target: { name: 'Days Per Week Used', value: '5' },
    });
  });
});
