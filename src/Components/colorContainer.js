import React from "react";

const ColorContainer = ({ count, setCount, children }) => {
  const backgroundColor = count < 1500 ? "green" : 'red';
  let text;
if (count === 0) {
  text = "Time's up!";
}

  return (
    <div style={{ 
      backgroundColor, 
      padding: '20px', 
      borderRadius: '10px', // add this line
      margin: '20px' 
    }}>
      {children}
      <p>{text}</p>
    </div>
  );
};

export default ColorContainer;