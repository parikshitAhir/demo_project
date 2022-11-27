import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [num, setNum] = useState(0);

  const inNumber = () => {
    setNum(num + 1);
  };
  const diNumber = () => {
    if (num >0 ) {
      setNum(num - 1);
    } else {
      alert("sorry, not enter number");
      setNum(0)
    }
  };

  return (
    <>
      <div className="first">
        <div className="second">
          <h1>{num}</h1>
          <div className="button">
            <button className="b1" onClick={inNumber}>
              increment
            </button>
            <button className="b2" onClick={diNumber}>
              dicrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
