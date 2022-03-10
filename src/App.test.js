import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
  // click button
  fireEvent.click(colorButton);
  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');
});
test('initial conditions', () => {
  render(<App />);
  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  expect(colorButton).toBeEnabled();
  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});
test('is button disabled when checkbox is checked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
});
test('button has gray background color when it is disabled', () => {
  render(<App />);
  const colorButton = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox');
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});
test('Clicked disabled button has gray color and reverts to blue', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(colorButton);
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ background: 'blue' });
});

