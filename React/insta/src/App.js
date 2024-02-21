import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [count, setCount] = useState(0);
  const incCount = () => {
    setCount(count+100);
  }
  const resetCount = () => {
    setCount(0);
  }
  return (
    <>
      <div className="container">
        <h3 className="line">Current Value is: {count}</h3>
        <button className="btn" onClick={incCount}>Add 100</button>
        <button className="btn" onClick={resetCount}>Reset</button>
      </div>
    </>
  )
}

export default App