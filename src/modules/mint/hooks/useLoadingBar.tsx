import { useCallback, useEffect, useRef, useState } from "react";

export const useLoadingBar = () => {
  const [secondsRemaining, setSecondsRemaining] = useState(15);
  const [percent, setPercent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const loadingText =
    secondsRemaining === 0
      ? "This is taking longer than usual. Please wait for the token to mint. This usually takes up to 30 seconds."
      : "Please wait a few moments, you will be automatically redirected.";

  useEffect(() => {
    const totalDuration = 15000; // 15 seconds in milliseconds
    const updateInterval = 5; // Update progress bar every 10 milliseconds

    const startTime = Date.now();

    intervalRef.current = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = totalDuration - elapsedTime;

      if (remainingTime <= 0) {
        clearInterval(intervalRef.current!);
        setSecondsRemaining(0);
        setPercent(99);
      } else {
        setSecondsRemaining(remainingTime / 1000);

        const progress = (totalDuration - remainingTime) / totalDuration;
        const calculatedPercent = Math.floor(progress * 100);
        setPercent(calculatedPercent);
      }
    }, updateInterval);

    return () => clearInterval(intervalRef.current!);
  }, []);

  const handleCompleteLoading = useCallback(() => {
    clearInterval(intervalRef.current!);
    setPercent(100);
  }, []);

  return { percent, setPercent, loadingText, handleCompleteLoading };
};
