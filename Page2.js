import React, { useState, useEffect } from 'react';
import './App.css';

const ReactTask2 = () =>{
const Timer = () => {
  const [time, setTime] = useState(0);

  // useEffect hook for initialization (componentDidMount)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    // Cleanup function (componentWillUnmount)
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures this effect runs only once, like componentDidMount

  // useEffect hook for updating (componentDidUpdate)
  useEffect(() => {
    console.log('Time updated:', time);
  }, [time]); // Only runs when `time` changes

  return (
    <div>
      <h1>Timer: {time} seconds</h1>
    </div>
  );
};

return <Timer/>
};
export default ReactTask2;
