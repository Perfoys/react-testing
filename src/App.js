import { useState } from 'react';
import './App.css';

function App() {
  const [ buttonColor, setButtonColor ] = useState('red');
  const [ disabled, setDisabled ] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const handleClick = () => {
    setButtonColor(newButtonColor);
  };

  const handleChange = (event) => {
    setDisabled(event.target.checked);
  };

  return (
    <div className="App">
      <button style={{ backgroundColor: buttonColor }} onClick={handleClick} disabled={disabled}>
        Change to {newButtonColor}
      </button>
      <input type="checkbox" onChange={handleChange} />
    </div>
  );
}

export default App;
