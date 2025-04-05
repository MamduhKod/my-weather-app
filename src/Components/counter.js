import React, { useState } from "react";
import ColorContainer from "./colorContainer";

const Counter = () => {
  const [count, setCount] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const decrement = () => {
    setCount((prevcount) => {
      if (prevcount > 0) {
        return prevcount - 1;
      } else {
        return 0
      }});
  };

  const start = () => {
    if (!running) {
      const id = setInterval(decrement, 1000);
      setIntervalId(id);
      setRunning(true);
    }
  };

  const pause = () => {
    if (running) {
      clearInterval(intervalId);
      setRunning(false);
    }
  };

  return (
    <ColorContainer count={count} setCount={setCount}> 
      <h1>{Math.floor(count / 60)}:{(count % 60).toString().padStart(2, '0')}</h1>
      <button style={{marginRight: '10px'}}onClick={start}>Start</button>
      <button style={{marginLeft: '10px'}}onClick={pause}>Pause</button>
    </ColorContainer>
  );
};

export default Counter;