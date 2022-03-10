import { useState } from 'react';
import './App.css';

export const replaceCamelWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

function App() {
  const [ buttonColor, setButtonColor ] = useState('MediumVioletRed');
  const [ disabled, setDisabled ] = useState(false);
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
  const backgroundColor = disabled ? 'gray' : buttonColor;

  const handleClick = () => {
    setButtonColor(newButtonColor);
  };

  const handleChange = (event) => {
    setDisabled(event.target.checked);
  };

  return (
    <div className="App">
      <button style={{ backgroundColor: backgroundColor }} onClick={handleClick} disabled={disabled}>
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input type="checkbox" onChange={handleChange} />
    </div>
  );
}

export default App;
