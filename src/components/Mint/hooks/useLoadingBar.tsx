import { useEffect, useState } from "react";

export const useLoadingBar = () => {
  const [secondsRemaining, setSecondsRemaining] = useState(10);
  const [percent, setPercent] = useState(0);

  const loadingText =
    secondsRemaining === 0
      ? "This is taking longer than usual. Please wait for the token to mint. This usually takes up to 30 seconds."
      : "Please wait a few moments, you will be automatically redirected.";

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

  return { percent, setPercent, loadingText };
};
