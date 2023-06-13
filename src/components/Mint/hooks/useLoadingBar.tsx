import { useEffect, useState } from "react";

export const useLoadingBar = () => {
  const [secondsRemaining, setSecondsRemaining] = useState(10);
  const [percent, setPercent] = useState(0);
  console.log(percent);

  //   useEffect(() => {
  //     const totalDuration = 10000; // 10 seconds in milliseconds
  //     const updateInterval = 100; // Update progress bar every 10 milliseconds

  //     const startTime = Date.now();

  //     const timer = setInterval(() => {
  //       const elapsedTime = Date.now() - startTime;
  //       const remainingTime = totalDuration - elapsedTime;

  //       if (remainingTime <= 0) {
  //         clearInterval(timer);
  //         setSecondsRemaining(0);
  //         setPercent(99);
  //       } else {
  //         setSecondsRemaining(remainingTime / 1000);
  //         const calculatedPercent = Math.floor(
  //           ((totalDuration - remainingTime) / totalDuration) * 100,
  //         );
  //         setPercent(calculatedPercent);
  //       }
  //     }, updateInterval);

  //     return () => clearInterval(timer);
  //   }, []);

  useEffect(() => {
    const totalDuration = 10000; // 10 seconds in milliseconds
    const updateInterval = 100; // Update progress bar every 10 milliseconds

    const timer = setInterval(() => {
      setSecondsRemaining((prevSeconds) => {
        const remaining = prevSeconds - updateInterval / 1000;
        return remaining <= 0 ? 0 : remaining;
      });
    }, updateInterval);

    if (secondsRemaining <= 0) {
      clearInterval(timer);
      setPercent(95);
    } else {
      const calculatedPercent = Math.floor(
        ((totalDuration - secondsRemaining * 1000) / totalDuration) * 100,
      );
      setPercent(calculatedPercent);
    }

    return () => clearInterval(timer);
  }, [secondsRemaining]);

  return { secondsRemaining, percent, setPercent };
};
