import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

test('button has correct initial color', () => {
  render(<App />);
  // find an element with a role of button and text of 'Change to MidnightBlue'
  const colorButton = screen.getByRole('button', { name: /change to Midnight Blue/i });
  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
  // click button
  fireEvent.click(colorButton);
  // expect the background color to be MidnightBlue
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to Medium Violet Red');
});
test('initial conditions', () => {
  render(<App />);
  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: /change to Midnight Blue/i });
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
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});
test('Clicked disabled button has gray color and reverts to MidnightBlue', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /change to Midnight Blue/i });
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(colorButton);
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ background: 'MidnightBlue' });
});

describe('Replace capital letters in camel-case with spaces', () => {
  test('Color name has no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Color name has one capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Color name has multiply capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});

