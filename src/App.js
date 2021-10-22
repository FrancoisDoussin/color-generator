import { useState } from "react";
import './App.css';

function App() {
  // definir un état couleur
  const [color, setColor] = useState("blue");
  // creer une fonction appelé au click
  // onclick sur qqch
  const handleClick = () => {
    setColor("#" + ((1<<24)*Math.random() | 0).toString(16))
  }

  const handleCopyColor = () => {
    navigator.clipboard.writeText(color)
  }

  // changer notre état
  return (
    <div className="color-container">
      <div style={{backgroundColor: color}} className="color" onClick={handleClick}></div>
      <p onClick={handleCopyColor} className="color-copy">{color}</p>
    </div>
  );
}

export default App;
