'use client'
import React, { useState, useEffect } from "react";

const Timer = ({ onTimerEnd }: any) => {
  const [count, setCount] = useState(15);

//   const onEndHandler = () => {
//     onTimerEnd({ id: "", value: "" });
//   };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 0) {
          clearInterval(intervalId);
        //   onEndHandler();
          setCount(15);
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [onTimerEnd]);

  return <div className={`absolute top-4 right-4 w-14 h-14 rounded-full ${count <= 5 ? 'bg-red-200' : 'bg-white'} text-primary text-2xl font-bold flex justify-center items-center`}>{count}</div>;
};

export default Timer;
