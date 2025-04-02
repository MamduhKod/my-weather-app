import React, { useState, useEffect } from "react";

const Counter = () => {
  const [seconds, setSeconds] = useState(25 * 60); // Initialize with 25 minutes in seconds
  const [isCounting, setIsCounting] = useState(false);
  const [buttonColor, setButtonColor] = useState("blue"); // Default button color

  useEffect(() => {
    let interval;
    if (isCounting && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1); // Decrement seconds
      }, 1000);
      setButtonColor("red"); // Change button color while counting
    } else {
      clearInterval(interval);
      setButtonColor("blue"); // Reset button color when stopped
    }

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [isCounting, seconds]);

  const startCountdown = () => {
    setIsCounting(true);
  };

  const resetCountdown = () => {
    setIsCounting(false);
    setSeconds(25 * 60); // Reset to 25 minutes
  };

  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>{formatTime()}</h1>
      <button
        onClick={startCountdown}
        style={{ backgroundColor: buttonColor, color: "white" }}
      >
        Start Countdown
      </button>
      <button onClick={resetCountdown} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
};

export default Counter;


