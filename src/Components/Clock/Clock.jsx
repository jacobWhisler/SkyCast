import React, { useState, useEffect } from "react";
import "./Clock.scss";

const Clock = () => {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();

  //   const fullTime = hours + mi;

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timer); // Clean up on unmount
  }, []);

  return (
    <div>
      <p className="current-time-display">
        {time.toLocaleTimeString([], { timeStyle: "short" })}
      </p>
    </div>
  );
};

export default Clock;
