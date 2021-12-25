import { useState } from "react";

import generateColor from './utils/colorGenerator';

import './App.css';

function App() {
  const [color, setColor] = useState(generateColor());
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = (event) => {
    if (event.currentTarget === event.target) {
      setColor(generateColor())
      setIsCopied(false);
    }
  }

  const handleCopyColor = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false)
    }, 3000)
    navigator.clipboard.writeText(color)
  }

  return (
    <>
      { isCopied && 
        <div className="copied">
          Copied !
        </div>
      }
      <div
        style={{ backgroundColor: color }}
        onClick={handleClick}
        className="color-container"
      >
        <p
          style={{ color: color }}
          onClick={handleCopyColor}
          className="color-code"
        >
          {color}
        </p>
      </div>
    </>
  );
}

export default App;
