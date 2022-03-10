import { useState } from 'react';
import './App.css';

function App() {
  const [ buttonColor, setButtonColor ] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const handleClick = () => {
    setButtonColor(newButtonColor);
  };

  return (
    <div className="App">
      <button style={{ backgroundColor: buttonColor }} onClick={handleClick}>
        Change to {newButtonColor}
      </button>
      <input type="checkbox" />
    </div>
  );
}

export default App;
