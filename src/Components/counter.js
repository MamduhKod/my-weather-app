import React, { useState } from "react";
import ColorContainer from "./colorContainer";

const Counter = () => {
  const [count, setCount] = useState(25 * 60);
  const decrement = () => {
    setCount((prevcount) => {
      if (prevcount > 0) {
        return prevcount - 1;
      } else {
        return 0
      }});
    }

  const pause = () => {
    setCount(0);
  };

  const timeCount = () => {
    
    setInterval(decrement,1000);
  };
  return (
        <ColorContainer count={count} setCount={setCount}> 
      <h1>{Math.floor(count / 60)}:{(count % 60).toString().padStart(2, '0')}</h1>
      <button onClick={timeCount}>Start counting</button>
       </ColorContainer>
  );
};

export default Counter;
